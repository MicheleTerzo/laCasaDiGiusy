import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {PerkBoxComponent} from '../perk-box/perk-box.component';
import {PerkBoxInterface} from '../../interfaces/perk-box.interface';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    NgForOf,
    PerkBoxComponent
  ],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  protected facilitiesPerk: PerkBoxInterface[] = [
    {
      title: 'WIFI',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      iconClass: 'fa-solid fa-wifi'
    },
    {
      title: 'ARIA CONDIZIONATA',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      iconClass: 'fa-solid fa-fan'
    },
    {
      title: 'INGRESSO ELETTRONICO',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      iconClass: 'fa-solid fa-id-card'
    }
  ];
}
