import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Delay } from '../../../models/delays';
import { DelaysService } from '../../../services/delay.service';

@Component({
  selector: 'app-show-delays',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './showdelays.component.html',
  styleUrls: ['./showdelays.component.css']
})
export class ShowdelaysComponent {
  delays: Delay[] = [];

  constructor(private delaysService: DelaysService) {
    this.delaysService.delays$.subscribe(list => {
      this.delays = list;
    });
  }

  onDelete(id: number) {
    this.delaysService.deleteDelay(id);
  }
}
