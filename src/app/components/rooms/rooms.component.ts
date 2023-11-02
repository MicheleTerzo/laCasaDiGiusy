import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {PerkBoxComponent} from '../perk-box/perk-box.component';
import {PerkBoxInterface} from '../../interfaces/perk-box.interface';
import {GalleriaModule} from 'primeng/galleria';
import {TranslateModule} from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';
import {BOOKING_URL} from '../../config';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    NgForOf,
    PerkBoxComponent,
    GalleriaModule,
    TranslateModule,
    ButtonModule
  ],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  protected facilitiesPerk: PerkBoxInterface[] = [
    {
      title: 'Wifi',
      description: 'Wifi description',
      iconClass: 'fa-solid fa-wifi'
    },
    {
      title: 'Air conditioning',
      description: 'Air conditioning description',
      iconClass: 'fa-solid fa-fan'
    },
    {
      title: 'Electronic entrance',
      description: 'Electronic entrance description',
      iconClass: 'fa-solid fa-id-card'
    }
  ];

  protected goToBooking() {
    window.open(BOOKING_URL, '_blank');
  }
}
