import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {PerkBoxComponent} from '../perk-box/perk-box.component';
import {GalleriaModule} from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  styleUrls: ['gallery.component.scss'],
  imports: [
    NgForOf,
    PerkBoxComponent,
    GalleriaModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  protected images = [
    'assets/img/IMG-1.jpg',
    'assets/img/IMG-2.jpg',
    'assets/img/IMG-3.jpg',
    'assets/img/IMG-4.jpg',
    'assets/img/IMG-5.jpg',
    'assets/img/ROOM-1_1.jpg',
    'assets/img/ROOM-1_2.jpg',
    'assets/img/ROOM-1_3.jpg',
    'assets/img/ROOM-1_4.jpg',
    'assets/img/ROOM-1_5.jpg',
    'assets/img/ROOM-1_6.jpg',
    'assets/img/ROOM-1_7.jpg',
    'assets/img/ROOM-1_8.jpg'
  ];
}
