import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Debtor } from '../models/debtors';

@Injectable({
  providedIn: 'root'
})
export class DebtorsService {
  private debtorsSubject = new BehaviorSubject<Debtor[]>([
    {
      id: 1,
      name: 'Carlos López',
      email: 'carlos.lopez@gmail.com',
      phone: '3112223344',
      address: 'Carrera 10 #45-67',
      documents: 10203040,
      status: 'active'
    },
    {
      id: 2,
      name: 'Andrea Gómez',
      email: 'andrea.gomez@gmail.com',
      phone: '3001122334',
      address: 'Calle 80 #20-15',
      documents: 20304050,
      status: 'inactive'
    }
  ]);

  debtors$ = this.debtorsSubject.asObservable();

  get value(): Debtor[] {
    return this.debtorsSubject.value;
  }

  addDebtor(debtor: Omit<Debtor, 'id' | 'status'>) {
    const debtors = this.value;
    const nextId = debtors.length ? Math.max(...debtors.map(d => d.id)) + 1 : 1;
    const newDebtor: Debtor = { id: nextId, status: 'active', ...debtor };
    this.debtorsSubject.next([...debtors, newDebtor]);
  }


  /** 👇 Aquí está el método que faltaba */
  deleteDebtor(id: number) {
    this.debtorsSubject.next(this.value.filter(d => d.id !== id));
  }
}
