import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CarteraI } from '../../../models/briefcase';
import { CarteraService } from '../../../services/cartera.service';

@Component({
  selector: 'app-showcartera',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    DropdownModule,
    CalendarModule
  ],
  templateUrl: './showbriefcase.component.html',
  styleUrls: ['./showbriefcase.component.css']
})
export class ShowbriefcaseComponent implements OnInit {

  carteraList: CarteraI[] = [];

  // Filtros
  filterCliente: string = '';
  filterProducto: string = '';
  filterEstado: string = '';
  filterFechaDesde: Date | null = null;
  filterFechaHasta: Date | null = null;

  estados = [
    { label: 'Al día', value: 'al_dia' },
    { label: 'En mora', value: 'en_mora' },
    { label: 'Cancelado', value: 'cancelado' }
  ];

  // Arrays filtrados por estado
  alDia: CarteraI[] = [];
  enMora: CarteraI[] = [];
  cancelados: CarteraI[] = [];

  constructor(private carteraService: CarteraService) {}

  ngOnInit() {
    this.carteraService.cartera$.subscribe(list => {
      this.carteraList = list;
      this.applyFilters();
    });
  }

  applyFilters() {
    let filtered = this.carteraList;

    // Filtrar por cliente
    if (this.filterCliente) {
      filtered = filtered.filter(c =>
        c.clienteNombre?.toLowerCase().includes(this.filterCliente.toLowerCase())
      );
    }

    // Filtrar por producto
    if (this.filterProducto) {
      filtered = filtered.filter(c =>
        c.producto.toLowerCase().includes(this.filterProducto.toLowerCase())
      );
    }

    // Filtrar por estado
    if (this.filterEstado) {
      filtered = filtered.filter(c => c.estado === this.filterEstado);
    }

    // Filtrar por fechas
    if (this.filterFechaDesde) {
      filtered = filtered.filter(c => new Date(c.fechaDesembolso) >= this.filterFechaDesde!);
    }
    if (this.filterFechaHasta) {
      filtered = filtered.filter(c => new Date(c.fechaDesembolso) <= this.filterFechaHasta!);
    }

    // Separar por estado
    this.alDia = filtered.filter(c => c.estado === 'al_dia');
    this.enMora = filtered.filter(c => c.estado === 'en_mora');
    this.cancelados = filtered.filter(c => c.estado === 'cancelado');
  }

  onDelete(id: number) {
    this.carteraService.deleteCartera(id);
    this.applyFilters(); // actualizar filtros después de eliminar
  }

  // Indicadores
  get totalDesembolsado() {
    return this.carteraList.reduce((acc, c) => acc + c.capital, 0);
  }

  get totalRecuperado() {
    return this.carteraList.reduce((acc, c) => acc + c.totalPagado, 0);
  }

  get totalPendiente() {
    return this.carteraList.reduce((acc, c) => acc + (c.capital + c.intereses - c.totalPagado), 0);
  }

  get porcentajeMora() {
    if (!this.carteraList.length) return 0;
    const enMora = this.carteraList.filter(c => c.estado === 'en_mora').length;
    return (enMora / this.carteraList.length) * 100;
  }
}
