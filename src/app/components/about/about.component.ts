import {Component} from '@angular/core';
import {PerkBoxComponent} from '../perk-box/perk-box.component';
import {NgForOf, UpperCasePipe} from '@angular/common';
import {PerkBoxInterface} from '../../interfaces/perk-box.interface';
import {TranslateModule} from '@ngx-translate/core';
import {ObserveVisibilityDirective} from '../../utils/intersection-observer.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PerkBoxComponent, NgForOf, TranslateModule, UpperCasePipe, ObserveVisibilityDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  protected aboutPerks: PerkBoxInterface[] = [
    {
      title: 'Parking',
      description: 'Parking description',
      iconClass: 'fa-solid fa-square-parking'
    },
    {
      title: 'Well connected',
      description: 'Well connected description',
      iconClass: 'fa-solid fa-bus'
    },
    {
      title: 'Breakfast included',
      description: 'Breakfast description',
      iconClass: 'fa-solid fa-mug-saucer'
    },
    {
      title: 'Shuttle service',
      description: 'Shuttle service description',
      iconClass: 'fa-solid fa-van-shuttle'
    }
  ];
}
