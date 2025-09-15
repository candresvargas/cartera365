import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

import { Loan } from '../../../models/loans';
import { LoansService } from '../../../services/loan.service';
import { DebtorsService } from '../../../services/debtor.service';
import { Debtor } from '../../../models/debtors';

@Component({
  selector: 'app-createloans',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './createloans.component.html'
})
export class CreateloansComponent {
  loan: Partial<Loan> = {
    amount: 0,
    rate: 0,
    term: 0,
    status: 'al_dia'
  };

  debtors: Debtor[] = [];
  selectedDebtor?: Debtor;

  constructor(
    private loansService: LoansService,
    private debtorsService: DebtorsService,
    private router: Router
  ) {
    this.debtorsService.debtors$.subscribe(list => {
      this.debtors = list;
    });
  }

  onSubmit() {
    if (this.selectedDebtor) {
      const newLoan: Loan = {
        id: 0, // se asigna en el service
        amount: this.loan.amount!,
        rate: this.loan.rate!,
        term: this.loan.term!,
        status: 'al_dia', // por defecto
        debtorId: this.selectedDebtor.id,
        debtorName: this.selectedDebtor.name
      };

      this.loansService.addLoan(newLoan);
      this.router.navigate(['/prestamos']);
    }
  }
}
