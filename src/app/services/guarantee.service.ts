import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Guarantee } from '../models/guarantees';

@Injectable({
  providedIn: 'root'
})
export class GuaranteesService {
  // Datos iniciales para mostrar en la tabla
  private guaranteesSubject = new BehaviorSubject<Guarantee[]>([
    {
      id: 1,
      idPrestamo: 1,           // Aquí se podría mapear al cliente
      tipo: 'vehículo',
      valorEstimado: 25000000,
      documentoAdjunto: 'https://example.com/documento1.pdf',
      estado: 'vigente'
    },
    {
      id: 2,
      idPrestamo: 2,
      tipo: 'inmueble',
      valorEstimado: 120000000,
      documentoAdjunto: '',
      estado: 'liberada'
    }
  ]);

  guarantees$ = this.guaranteesSubject.asObservable();

  get value(): Guarantee[] {
    return this.guaranteesSubject.value;
  }

  addGuarantee(guarantee: Omit<Guarantee, 'id'>) {
    const guarantees = this.value;
    const nextId = guarantees.length ? Math.max(...guarantees.map(g => g.id)) + 1 : 1;
    const newGuarantee: Guarantee = { id: nextId, ...guarantee };
    this.guaranteesSubject.next([...guarantees, newGuarantee]);
  }

  updateGuarantee(id: number, guarantee: Guarantee) {
    const updated = this.value.map(g => g.id === id ? guarantee : g);
    this.guaranteesSubject.next(updated);
  }

  deleteGuarantee(id: number) {
    this.guaranteesSubject.next(this.value.filter(g => g.id !== id));
  }

  getGuaranteeById(id: number): Guarantee | undefined {
    return this.value.find(g => g.id === id);
  }
}
