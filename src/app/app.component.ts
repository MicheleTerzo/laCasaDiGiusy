import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {LANGUAGES, SECTIONS} from './utils/enums';
import {BOOKING_URL} from './config';
import {TranslateService} from '@ngx-translate/core';

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
      label: 'About',
      sectionName: SECTIONS.ABOUT,
      styleClass: ''
    },
    {
      label: 'Rooms',
      sectionName: SECTIONS.ROOMS,
      styleClass: ''
    },
    {
      label: 'Gallery',
      sectionName: SECTIONS.GALLERY,
      styleClass: ''
    },
    {
      label: 'Location',
      sectionName: SECTIONS.MAPS,
      styleClass: ''
    },
    {
      label: 'Contacts',
      sectionName: SECTIONS.CONTACTS,
      styleClass: ''
    },
    {
      label: 'Book now',
      sectionName: SECTIONS.BOOK,
      styleClass: 'custom-color'
    }
  ];
  private readonly _translateService = inject(TranslateService);

  constructor() {
    this._translateService.setDefaultLang(LANGUAGES.IT);
    this._translateService.use(LANGUAGES.IT);
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', (event) => {
      // @ts-ignore
      const targetScrollTop = event?.target.scrollTop;
      this.isWindowAtTop = targetScrollTop <= 50;
    }, true);
  }

  changeLanguage(selectedLang: LANGUAGES) {
    console.log(selectedLang);
    this._translateService.use(selectedLang);
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
