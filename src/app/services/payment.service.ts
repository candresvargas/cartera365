import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Payment } from '../models/payments';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private paymentsSubject = new BehaviorSubject<Payment[]>([
    {
      id: 1,
      debtorId: 1,
      loanId: 101,
      fechaPago: new Date(),
      montoPagado: 500000,
      tipoPago: 'parcial',
      medioPago: 'efectivo',
      referencia: 'REC-0001',
      estado: 'aplicado'
    }
  ]);

  payments$ = this.paymentsSubject.asObservable();

  get value(): Payment[] {
    return this.paymentsSubject.value;
  }

  addPayment(payment: Omit<Payment, 'id'>) {
    const payments = this.value;
    const nextId = payments.length ? Math.max(...payments.map(p => p.id)) + 1 : 1;
    const newPayment: Payment = { id: nextId, ...payment };
    this.paymentsSubject.next([...payments, newPayment]);
  }

  deletePayment(id: number) {
    this.paymentsSubject.next(this.value.filter(p => p.id !== id));
  }
}
