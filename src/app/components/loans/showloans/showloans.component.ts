import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Loan } from '../../../models/loans';
import { LoansService } from '../../../services/loan.service';

@Component({
  selector: 'app-showloans',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './showloans.component.html',
  styleUrls: ['./showloans.component.css']
})
export class ShowloansComponent {
  loans: Loan[] = [];

  constructor(private loansService: LoansService) {
    this.loansService.loans$.subscribe(list => {
      this.loans = list;
    });
  }

  onDelete(id: number) {
    this.loansService.deleteLoan(id);
  }
}
