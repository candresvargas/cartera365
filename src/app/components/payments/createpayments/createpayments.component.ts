import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentsService } from '../../../services/payment.service';
import { Payment } from '../../../models/payments';
import { DebtorsService } from '../../../services/debtor.service';
import { Debtor } from '../../../models/debtors';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-createpayments',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, CalendarModule],
  templateUrl: './createpayments.component.html',
  styleUrls: ['./createpayments.component.css']
})
export class CreatepaymentsComponent implements OnInit {
  payment: Payment = {
    id: 0,
    debtorId: 0,
    loanId: 0,
    fechaPago: new Date(),
    montoPagado: 0,
    tipoPago: 'total',
    medioPago: 'efectivo',
    referencia: '',
    estado: 'pendiente'
  };

  debtors: Debtor[] = [];

  tiposPago = [
    { label: 'Total', value: 'total' },
    { label: 'Parcial', value: 'parcial' },
    { label: 'Intereses', value: 'interes' },
    { label: 'Mora', value: 'mora' },
    { label: 'Cancelación anticipada', value: 'cancelacionAnticipada' }
  ];

  mediosPago = [
    { label: 'Efectivo', value: 'efectivo' },
    { label: 'Transferencia', value: 'transferencia' },
    { label: 'Consignación', value: 'consignacion' }
  ];

  estados = [
    { label: 'Aplicado', value: 'aplicado' },
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'Anulado', value: 'anulado' }
  ];

  constructor(
    private paymentsService: PaymentsService,
    private debtorsService: DebtorsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.debtorsService.debtors$.subscribe(list => {
      this.debtors = list;
    });
  }

  savePayment() {
    this.paymentsService.addPayment(this.payment);
    this.router.navigate(['/pagos']);
  }

  cancel() {
    this.router.navigate(['/pagos']);
  }
}
