import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Delay } from '../models/delays';

@Injectable({
  providedIn: 'root'
})
export class DelaysService {
  private delaysSubject = new BehaviorSubject<Delay[]>([
    {
      id: 1,
      idPrestamo: 101,
      fechaVencimiento: '2025-09-01',
      fechaPago: '2025-09-05',
      diasMora: 4,
      interesMora: 5000,
      estado: 'saldada'
    },
    {
      id: 2,
      idPrestamo: 102,
      fechaVencimiento: '2025-09-10',
      diasMora: 3,
      interesMora: 3000,
      estado: 'pendiente'
    }
  ]);

  delays$ = this.delaysSubject.asObservable();

  get value(): Delay[] {
    return this.delaysSubject.value;
  }

  addDelay(delay: Omit<Delay, 'id'>) {
    const delays = this.value;
    const nextId = delays.length ? Math.max(...delays.map(d => d.id)) + 1 : 1;
    const newDelay: Delay = { id: nextId, ...delay };
    this.delaysSubject.next([...delays, newDelay]);
  }

  deleteDelay(id: number) {
    this.delaysSubject.next(this.value.filter(d => d.id !== id));
  }
}
