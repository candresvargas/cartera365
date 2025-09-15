import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GuaranteesService } from '../../../services/guarantee.service';
import { Guarantee } from '../../../models/guarantees';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DebtorsService } from '../../../services/debtor.service';
import { Debtor } from '../../../models/debtors';

@Component({
  selector: 'app-createguarantee',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, DropdownModule],
  templateUrl: './createguarantees.component.html',
  styleUrls: ['./createguarantees.component.css']
})
export class CreateguaranteesComponent {
  guarantee: Guarantee = {
    id: 0,
    idPrestamo: 0,
    tipo: 'vehículo',
    valorEstimado: 0,
    documentoAdjunto: '',
    estado: 'vigente'
  };

  tipos = [
    { label: 'Vehículo', value: 'vehículo' },
    { label: 'Inmueble', value: 'inmueble' },
    { label: 'Documento', value: 'documento' },
    { label: 'Prenda', value: 'prenda' }
  ];

  estados = [
    { label: 'Vigente', value: 'vigente' },
    { label: 'Ejecutada', value: 'ejecutada' },
    { label: 'Liberada', value: 'liberada' }
  ];

  debtors: Debtor[] = []; // ← esta línea es clave para el error

  constructor(
    private guaranteesService: GuaranteesService,
    private debtorsService: DebtorsService,
    private router: Router
  ) {
    // Llenar la lista de clientes activos
    this.debtorsService.debtors$.subscribe(list => {
      this.debtors = list.filter(d => d.status === 'active');
    });
  }

  saveGuarantee() {
    this.guaranteesService.addGuarantee(this.guarantee);
    this.router.navigate(['/garantias']);
  }

  cancel() {
    this.router.navigate(['/garantias']);
  }
}
