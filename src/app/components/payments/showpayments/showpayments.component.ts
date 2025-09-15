import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Payment } from '../../../models/payments';
import { PaymentsService } from '../../../services/payment.service';
import { DebtorsService } from '../../../services/debtor.service';
import { Debtor } from '../../../models/debtors';

@Component({
  selector: 'app-showpayments',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './showpayments.component.html',
  styleUrls: ['./showpayments.component.css']
})
export class ShowpaymentsComponent {
  payments: Payment[] = [];
  debtors: Debtor[] = [];

  constructor(
    private paymentsService: PaymentsService,
    private debtorsService: DebtorsService
  ) {
    this.paymentsService.payments$.subscribe(list => {
      this.payments = list;
    });

    this.debtorsService.debtors$.subscribe(list => {
      this.debtors = list;
    });
  }

  getDebtorName(debtorId: number): string {
    const debtor = this.debtors.find(d => d.id === debtorId);
    return debtor ? debtor.name : 'Desconocido';
  }

  onDelete(id: number) {
    this.paymentsService.deletePayment(id);
  }
}
