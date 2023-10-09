import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    ButtonModule,
    SidebarModule,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  protected showMobileMenu = false;
  protected menuItems = [
    {
      label: 'Chi siamo'
    },
    {
      label: 'Camere'
    },
    {
      label: 'Galleria'
    },
    {
      label: 'Contatti'
    }
  ];

  protected onShowMenuClick(): void {
    this.showMobileMenu = true;
  }

  protected onCloseMenu(): void {
    this.showMobileMenu = false;
  }
}
