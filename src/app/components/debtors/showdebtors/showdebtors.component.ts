import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Debtor } from '../../../models/debtors';
import { DebtorsService } from '../../../services/debtor.service';

@Component({
  selector: 'app-showdebtors',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './showdebtors.component.html',
  styleUrls: ['./showdebtors.component.css']
})
export class ShowdebtorsComponent {
  debtors: Debtor[] = [];

  constructor(private debtorsService: DebtorsService) {
    this.debtorsService.debtors$.subscribe(list => {
      this.debtors = list;
    });
  }

  onDelete(id: number) {
    this.debtorsService.deleteDebtor(id);
  }
}
