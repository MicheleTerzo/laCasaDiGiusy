import {Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {UpperCasePipe} from '@angular/common';
import {ObserveVisibilityDirective} from '../../utils/intersection-observer.directive';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    TranslateModule,
    UpperCasePipe,
    ObserveVisibilityDirective
  ],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
}
