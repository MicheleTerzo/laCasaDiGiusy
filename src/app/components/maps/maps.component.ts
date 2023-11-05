import {Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ObserveVisibilityDirective} from '../../utils/intersection-observer.directive';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [
    TranslateModule,
    ObserveVisibilityDirective
  ],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
}
