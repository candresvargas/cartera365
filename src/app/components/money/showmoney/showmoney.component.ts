import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router'; // necesario para routerLink
import { Money } from '../../../models/money';
import { MoneyService } from '../../../services/money.service';

@Component({
  selector: 'app-showmoney',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './showmoney.component.html',
  styleUrls: ['./showmoney.component.css']
})
export class ShowmoneyComponent {
  movements: Money[] = [];

  constructor(private moneyService: MoneyService) {
    this.moneyService.money$.subscribe(list => {
      this.movements = list;
    });
  }

  onDelete(id: number) {
    this.moneyService.deleteMoney(id);
  }
}
