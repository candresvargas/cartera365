import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarteraI } from '../models/briefcase';

@Injectable({
  providedIn: 'root'
})
export class CarteraService {
  private carteraSubject = new BehaviorSubject<CarteraI[]>([
    {
      id: 1,
      clienteId: 1,
      clienteNombre: 'Carlos López',
      producto: 'Microcrédito',
      capital: 1000,
      intereses: 150,
      mora: 0,
      estado: 'al_dia',
      fechaDesembolso: new Date('2025-09-01'),
      fechaVencimiento: new Date('2025-12-01'),
      totalPagado: 200
    },
    {
      id: 2,
      clienteId: 2,
      clienteNombre: 'Andrea Gómez',
      producto: 'Crédito de Consumo',
      capital: 500,
      intereses: 50,
      mora: 20,
      estado: 'en_mora',
      fechaDesembolso: new Date('2025-08-01'),
      fechaVencimiento: new Date('2025-11-01'),
      totalPagado: 100
    }
  ]);

  cartera$ = this.carteraSubject.asObservable();

  get value(): CarteraI[] {
    return this.carteraSubject.value;
  }

  addCartera(item: Omit<CarteraI, 'id'>) {
    const cartera = this.value;
    const nextId = cartera.length ? Math.max(...cartera.map(c => c.id)) + 1 : 1;
    this.carteraSubject.next([...cartera, { id: nextId, ...item }]);
  }

  deleteCartera(id: number) {
    this.carteraSubject.next(this.value.filter(c => c.id !== id));
  }
}
