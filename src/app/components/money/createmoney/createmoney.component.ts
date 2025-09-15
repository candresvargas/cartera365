import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MoneyService } from '../../../services/money.service';
import { Money } from '../../../models/money';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-createmoney',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, CalendarModule],
  templateUrl: './createmoney.component.html',
  styleUrls: ['./createmoney.component.css']
})
export class CreatemoneyComponent {
  movement: Omit<Money, 'id'> = {
    fecha: new Date().toISOString(),
    tipo: 'ingreso',
    monto: 0,
    descripcion: '',
    medioPago: 'efectivo',
    responsable: ''
  };

  tipos = [
    { label: 'Ingreso', value: 'ingreso' },
    { label: 'Egreso', value: 'egreso' }
  ];

  medios = [
    { label: 'Efectivo', value: 'efectivo' },
    { label: 'Transferencia', value: 'transferencia' },
    { label: 'Cheque', value: 'cheque' },
    { label: 'Otro', value: 'otro' }
  ];

  constructor(private moneyService: MoneyService, private router: Router) {}

  saveMovement() {
    this.moneyService.addMoney(this.movement);
    this.router.navigate(['/movimientos-caja']);
  }

  cancel() {
    this.router.navigate(['/movimientos-caja']);
  }
}
