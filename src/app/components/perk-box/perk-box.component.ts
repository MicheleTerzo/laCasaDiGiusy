import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-perk-box[title][description][iconClass]',
  standalone: true,
  imports: [
    NgClass,
    TranslateModule
  ],
  templateUrl: './perk-box.component.html',
  styleUrls: ['./perk-box.component.scss']
})
export class PerkBoxComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() iconClass!: string;
  @Input() invertedColor: boolean = false;
}
