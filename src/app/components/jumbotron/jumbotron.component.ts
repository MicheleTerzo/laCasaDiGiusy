import {Component, EventEmitter, Output} from '@angular/core';
import {AnimateModule} from 'primeng/animate';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuItem} from 'primeng/api';
import {BOOKING_URL} from '../../config';
import {TranslateModule} from '@ngx-translate/core';
import {UpperCasePipe} from '@angular/common';
import {LANGUAGES} from '../../utils/enums';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [
    AnimateModule,
    ButtonModule,
    SplitButtonModule,
    TranslateModule,
    UpperCasePipe
  ],
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  @Output() changeLanguage = new EventEmitter<LANGUAGES>();
  items: MenuItem[] = [];

  constructor() {
    this.items = [
      {label: 'English', command: () => this.onChangeLanguage(LANGUAGES.EN)},
      {label: 'Detusch', command: () => this.onChangeLanguage(LANGUAGES.DE)},
      {label: 'Francois', command: () => this.onChangeLanguage(LANGUAGES.FR)},
      {label: 'Espanol', command: () => this.onChangeLanguage(LANGUAGES.ES)},
      {label: 'Italiano', command: () => this.onChangeLanguage(LANGUAGES.IT)}
    ];
  }

  navigateToBooking() {
    window.open(BOOKING_URL, '_blank');
  }

  private onChangeLanguage(selectedLanguage: LANGUAGES): void {
    this.changeLanguage.emit(selectedLanguage);
  }
}
