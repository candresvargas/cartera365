import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Guarantee } from '../../../models/guarantees';
import { GuaranteesService } from '../../../services/guarantee.service';

@Component({
  selector: 'app-showguarantees',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './showguarantees.component.html',
  styleUrls: ['./showguarantees.component.css']
})
export class ShowguaranteesComponent {
  guarantees: Guarantee[] = [];

  constructor(private guaranteesService: GuaranteesService) {
    this.guaranteesService.guarantees$.subscribe(list => this.guarantees = list);
  }

  onDelete(id: number) {
    this.guaranteesService.deleteGuarantee(id);
  }
}
