import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      { label: 'Cartera', icon: 'pi pi-briefcase', routerLink: '/cartera' },
      { label: 'Préstamos', icon: 'pi pi-wallet', routerLink: '/prestamos/nuevo' },
      { label: 'Pagos', icon: 'pi pi-dollar', routerLink: '/pagos' },
      { label: 'Moras', icon: 'pi pi-exclamation-triangle', routerLink: '/moras' }
    ];
  }
}
