import {Component, inject} from '@angular/core';
import {AnimateModule} from 'primeng/animate';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuItem} from 'primeng/api';
import {BOOKING_URL} from '../../config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [
    AnimateModule,
    ButtonModule,
    SplitButtonModule
  ],
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  items: MenuItem[] = [];
  bookingUrl = BOOKING_URL;
  private readonly router = inject(Router);

  constructor() {
    this.items = [
      {label: 'English', command: () => this.changeLanguage('en')},
      {label: 'Detusch', command: () => this.changeLanguage('de')},
      {label: 'Francois', command: () => this.changeLanguage('fr')},
      {label: 'Espanol', command: () => this.changeLanguage('es')},
      {label: 'Italiano', command: () => this.changeLanguage('it')}
    ];
  }

  navigateToBooking() {
    window.open(BOOKING_URL, '_blank');
  }

  private changeLanguage(lang: string): void {
    console.log(lang);
  }
}
