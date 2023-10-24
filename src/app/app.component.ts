import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SECTIONS} from './utils/enums';
import {BOOKING_URL} from './config';

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
  @ViewChild('jumbotronSection') jumbotronSection?: ElementRef;
  isWindowAtTop = true;
  protected showMobileMenu = false;
  protected menuItems = [
    {
      label: 'Chi siamo',
      sectionName: SECTIONS.ABOUT,
      styleClass: ''
    },
    {
      label: 'Camere',
      sectionName: SECTIONS.ROOMS,
      styleClass: ''
    },
    {
      label: 'Galleria',
      sectionName: SECTIONS.GALLERY,
      styleClass: ''
    },
    {
      label: 'Contatti',
      sectionName: SECTIONS.CONTACTS,
      styleClass: ''
    },
    {
      label: 'Prenota',
      sectionName: SECTIONS.BOOK,
      styleClass: 'custom-color'
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
      case SECTIONS.BOOK:
        window.open(BOOKING_URL, '_blank');
        break;
    }
    if (htmlElement) {
      htmlElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  protected showSidebar() {
    this.showMobileMenu = true;
  }

  protected scrollToTop() {
    if (this.jumbotronSection) {
      this.jumbotronSection.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
