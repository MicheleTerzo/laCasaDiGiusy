import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SECTIONS} from './utils/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection?: ElementRef;
  @ViewChild('roomsSection') roomsSection?: ElementRef;
  @ViewChild('gallerySection') gallerySection?: ElementRef;
  @ViewChild('contactsSection') contactsSection?: ElementRef;
  @ViewChild('headerMadonna') headerMadonna: any;
  isWindowAtTop = true;
  protected showMobileMenu = false;
  protected menuItems = [
    {
      label: 'Chi siamo',
      sectionName: SECTIONS.ABOUT
    },
    {
      label: 'Camere',
      sectionName: SECTIONS.ROOMS
    },
    {
      label: 'Galleria',
      sectionName: SECTIONS.GALLERY
    },
    {
      label: 'Contatti',
      sectionName: SECTIONS.CONTACTS
    }
  ];

  ngAfterViewInit(): void {
    window.addEventListener('scroll', (event) => {
      // @ts-ignore
      const targetScrollTop = event?.target.scrollTop;
      this.isWindowAtTop = targetScrollTop <= 50;
    }, true);
  }

  protected onCloseMenu(): void {
    this.showMobileMenu = false;
  }

  protected navigateToSection(sectionName: SECTIONS): void {
    console.log(this.isWindowAtTop);
    this.showMobileMenu = false;
    let htmlElement;
    switch (sectionName) {
      case SECTIONS.ABOUT:
        htmlElement = this.aboutSection?.nativeElement;
        break;
      case SECTIONS.ROOMS:
        htmlElement = this.roomsSection?.nativeElement;
        break;
      case SECTIONS.GALLERY:
        htmlElement = this.gallerySection?.nativeElement;
        break;
      case SECTIONS.CONTACTS:
        htmlElement = this.contactsSection?.nativeElement;
        break;
    }
    if (htmlElement) {
      htmlElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  protected showSidebar() {
    this.showMobileMenu = true;
  }
}
