import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BOOKING_URL } from '../../config';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

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
  @Output() navigateToJollySection = new EventEmitter<void>();

  onNavigateToJollySection() {
    this.navigateToJollySection.emit();
  }

  navigateToBooking() {
    window.open(BOOKING_URL, '_blank');
  }
}
