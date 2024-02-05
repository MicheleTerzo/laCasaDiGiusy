import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { LANGUAGES, SECTIONS } from './utils/enums';
import { BOOKING_URL } from './config';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  @ViewChild('mapSection') mapsSection?: ElementRef;
  @ViewChild('jollySection') jollySection?: ElementRef;
  sections = SECTIONS;
  languageControl: FormControl<{ label: string, value: LANGUAGES }>;
  isWindowAtTop = true;
  languageOptions: { label: string, value: LANGUAGES }[] = [];
  isMobile = false;
  protected showMobileMenu = false;
  protected navigationItems = [
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
    },
    {
      label: '',
      sectionName: SECTIONS.JOLLY,
      styleClass: 'custom-color'
    },
  ];
  private readonly _translateService = inject(TranslateService);

  constructor() {
    this._translateService.setDefaultLang(LANGUAGES.IT);
    this._translateService.use(LANGUAGES.IT);
    this.buildLanguagesOptions();
    this.languageControl = new FormControl<{
      label: string,
      value: LANGUAGES
    }>(this.languageOptions[0], { nonNullable: true });
    this.initLanguageSubscription();
    this.isMobile = window.innerWidth < 900;
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', (event) => {
      // @ts-ignore
      if (event.target.localName === 'body') {
        // @ts-ignore
        const targetScrollTop = event?.target.scrollTop;
        this.isWindowAtTop = targetScrollTop <= 50;
      }
    }, true);
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 900;
    });
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
      case SECTIONS.MAPS:
        htmlElement = this.mapsSection?.nativeElement;
        break;
      case SECTIONS.JOLLY:
        htmlElement = this.jollySection?.nativeElement;
        break;
      case SECTIONS.BOOK:
        window.open(BOOKING_URL, '_blank');
        break;
    }
    if (htmlElement) {
      htmlElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  protected showSidebar() {
    this.showMobileMenu = true;
  }

  protected scrollToTop() {
    if (this.jumbotronSection) {
      this.jumbotronSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private buildLanguagesOptions(): void {
    this.languageOptions = [
      { label: 'Italiano', value: LANGUAGES.IT },
      { label: 'English', value: LANGUAGES.EN },
      { label: 'Detusch', value: LANGUAGES.DE },
      { label: 'Francois', value: LANGUAGES.FR },
      { label: 'Espanol', value: LANGUAGES.ES }
    ];
  }

  private initLanguageSubscription() {
    this.languageControl.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      this._translateService.use(value.value);
    });
  }
}
