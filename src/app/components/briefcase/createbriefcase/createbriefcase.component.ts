import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarteraService } from '../../../services/cartera.service';
import { CarteraI } from '../../../models/briefcase';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { Debtor } from '../../../models/debtors';
import { DebtorsService } from '../../../services/debtor.service';

@Component({
  selector: 'app-createcartera',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule
  ],
  templateUrl: './createbriefcase.component.html',
  styleUrls: ['./createbriefcase.component.css']
})
export class CreatebriefcaseComponent implements OnInit {
  cartera: Omit<CarteraI, 'id'> = {
    clienteId: 0,
    clienteNombre: '',
    producto: '',
    capital: 0,
    intereses: 0,
    mora: 0,
    estado: 'al_dia',
    fechaDesembolso: new Date(),
    fechaVencimiento: new Date(),
    totalPagado: 0
  };

  estados = [
    { label: 'Al día', value: 'al_dia' },
    { label: 'En mora', value: 'en_mora' },
    { label: 'Cancelado', value: 'cancelado' }
  ];

  clientes: Debtor[] = [];

  constructor(
    private carteraService: CarteraService,
    private debtorsService: DebtorsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.debtorsService.debtors$.subscribe(list => {
      this.clientes = list.filter(c => c.status === 'active');
    });
  }

  onClienteChange(cliente: Debtor) {
    if (cliente) {
      this.cartera.clienteId = cliente.id;
      this.cartera.clienteNombre = cliente.name;
    } else {
      this.cartera.clienteId = 0;
      this.cartera.clienteNombre = '';
    }
  }

  saveCartera() {
    this.carteraService.addCartera(this.cartera);
    this.router.navigate(['/cartera']);
  }

  cancel() {
    this.router.navigate(['/cartera']);
  }
}
