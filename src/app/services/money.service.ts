import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Money } from '../models/money';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  private moneySubject = new BehaviorSubject<Money[]>([
    {
      id: 1,
      fecha: new Date().toISOString(),
      tipo: 'ingreso',
      monto: 500000,
      descripcion: 'Pago de cuota',
      idPrestamo: 1,
      idCliente: 1,
      medioPago: 'efectivo',
      responsable: 'Carlos López'
    },
    {
      id: 2,
      fecha: new Date().toISOString(),
      tipo: 'egreso',
      monto: 200000,
      descripcion: 'Desembolso préstamo',
      medioPago: 'transferencia',
      responsable: 'Andrea Gómez'
    }
  ]);

  money$ = this.moneySubject.asObservable();

  get value(): Money[] {
    return this.moneySubject.value;
  }

  addMoney(money: Omit<Money, 'id'>) {
    const current = this.value;
    const nextId = current.length ? Math.max(...current.map(m => m.id)) + 1 : 1;
    this.moneySubject.next([...current, { id: nextId, ...money }]);
  }

  deleteMoney(id: number) {
    this.moneySubject.next(this.value.filter(m => m.id !== id));
  }
}
