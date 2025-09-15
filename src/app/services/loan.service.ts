import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Loan } from '../models/loans';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  private loans: Loan[] = [
    {
      id: 1,
      amount: 2000,
      rate: 5,
      term: 12,
      status: 'al_dia',
      debtorId: 1,
      debtorName: 'Juan Pérez'
    },
    {
      id: 2,
      amount: 5000,
      rate: 7,
      term: 24,
      status: 'en_mora',
      debtorId: 2,
      debtorName: 'María López'
    },
    {
      id: 3,
      amount: 3000,
      rate: 6,
      term: 18,
      status: 'cancelado',
      debtorId: 3,
      debtorName: 'Carlos Ramírez'
    }
  ];

  private loansSubject = new BehaviorSubject<Loan[]>(this.loans);
  loans$ = this.loansSubject.asObservable();

  constructor() {}

  addLoan(loan: Loan) {
    loan.id = this.loans.length + 1;
    this.loans.push(loan);
    this.loansSubject.next(this.loans);
  }

  updateLoan(updatedLoan: Loan) {
    const index = this.loans.findIndex(l => l.id === updatedLoan.id);
    if (index !== -1) {
      this.loans[index] = updatedLoan;
      this.loansSubject.next(this.loans);
    }
  }

  deleteLoan(id: number) {
    this.loans = this.loans.filter(l => l.id !== id);
    this.loansSubject.next(this.loans);
  }

  getLoanById(id: number): Loan | undefined {
    return this.loans.find(l => l.id === id);
  }
}
