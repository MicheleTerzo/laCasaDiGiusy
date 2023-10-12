import {Component} from '@angular/core';
import {PerkBoxComponent} from '../perk-box/perk-box.component';
import {NgForOf} from '@angular/common';

interface PerkBoxInterface {
  title: string;
  iconClass: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PerkBoxComponent, NgForOf],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  protected aboutPerks: PerkBoxInterface[] = [
    {
      title: 'PARCHEGGIO PRIVATO',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      iconClass: 'fa-solid fa-square-parking'
    },
    {
      title: 'PET FRIENDLY',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      iconClass: 'fa-solid fa-dog'
    },
    {
      title: 'ACCESSIBILE',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      iconClass: 'fa-brands fa-accessible-icon'
    }
  ];
}
