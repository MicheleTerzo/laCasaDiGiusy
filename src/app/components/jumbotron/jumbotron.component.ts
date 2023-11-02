import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {BOOKING_URL} from '../../config';
import {TranslateModule} from '@ngx-translate/core';
import {UpperCasePipe} from '@angular/common';
import {LANGUAGES} from '../../utils/enums';
import {DropdownModule} from 'primeng/dropdown';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [
    ButtonModule,
    TranslateModule,
    UpperCasePipe,
    DropdownModule,
    ReactiveFormsModule
  ],
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  @Input() languageControl!: FormControl<LANGUAGES>;
  @Input() languageOptions: { label: string, value: LANGUAGES }[] = [];
  @Output() changeLanguage = new EventEmitter<LANGUAGES>();

  navigateToBooking() {
    window.open(BOOKING_URL, '_blank');
  }
}
