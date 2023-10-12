import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-perk-box[title][description][iconClass]',
  standalone: true,
  imports: [],
  templateUrl: './perk-box.component.html',
  styleUrls: ['./perk-box.component.scss']
})
export class PerkBoxComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() iconClass!: string;
}
