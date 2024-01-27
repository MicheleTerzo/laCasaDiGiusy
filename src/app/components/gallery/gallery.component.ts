import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import { PerkBoxComponent } from '../perk-box/perk-box.component';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ObserveVisibilityDirective } from '../../utils/intersection-observer.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  styleUrls: ['gallery.component.scss'],
  imports: [
    NgForOf,
    PerkBoxComponent,
    GalleriaModule,
    ButtonModule,
    TranslateModule,
    ObserveVisibilityDirective
  ],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('imageTemplate') imageTemplate?: ElementRef;
  protected index = 0;
  protected images = [
    '../../../assets/img/IMG-1.jpg',
    '../../../assets/img/IMG-2.jpg',
    '../../../assets/img/IMG-3.jpg',
    '../../../assets/img/IMG-4.jpg',
    '../../../assets/img/IMG-5.jpg',
    '../../../assets/img/ROOM-1_1.jpg',
    '../../../assets/img/ROOM-1_2.jpg',
    '../../../assets/img/ROOM-1_3.jpg',
    '../../../assets/img/ROOM-1_4.jpg',
    '../../../assets/img/ROOM-1_5.jpg',
    '../../../assets/img/ROOM-1_6.jpg',
    '../../../assets/img/ROOM-1_7.jpg',
    '../../../assets/img/ROOM-1_8.jpg',
    '../../../assets/img/ROOM-1_9.jpg',
    '../../../assets/img/ROOM-1_10.jpg',
    '../../../assets/img/ROOM-2_1.jpg',
    '../../../assets/img/ROOM-2_2.jpg',
    '../../../assets/img/ROOM-2_3.jpg',
    '../../../assets/img/ROOM-2_4.jpg',
    '../../../assets/img/ROOM-2_5.jpg'
  ];

  ngAfterViewInit(): void {
    this.patchImageStyle(this.imageTemplate?.nativeElement);
  }

  protected nextImage(imageContainerElement: HTMLDivElement) {
    if (this.index < this.images.length - 1) {
      this.index = this.index + 1;
      return this.patchImageStyle(imageContainerElement, this.index);
    }
    this.index = 0;
    return this.patchImageStyle(imageContainerElement, this.index);
  }

  protected previousImage(imageContainerElement: HTMLDivElement) {
    if (this.index > 0) {
      this.index = this.index - 1;
      return this.patchImageStyle(imageContainerElement, this.index);
    }
    this.index = this.images.length - 1;
    return this.patchImageStyle(imageContainerElement, this.index);
  }

  private patchImageStyle(element: HTMLDivElement, index?: number) {
    element.style.background = `url(${this.images[index ?? 0]})`;
    element.style.backgroundPosition = `center`;
    element.style.backgroundSize = `contain`;
    element.style.backgroundRepeat = `no-repeat`;
    element.style.transition = 'all 300ms ease-in-out';
  }
}
