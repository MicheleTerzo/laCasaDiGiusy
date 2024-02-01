import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterOutlet} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {RoomsComponent} from './components/rooms/rooms.component';
import {AboutComponent} from './components/about/about.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {FooterComponent} from './components/footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import {ScrollTopModule} from 'primeng/scrolltop';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend, HttpClientModule} from '@angular/common/http';
import {LANGUAGES} from './utils/enums';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {MapsComponent} from './components/maps/maps.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {FIREBASE_CONFIG} from './config';
import {ObserveVisibilityDirective} from './utils/intersection-observer.directive';
import {DropdownModule} from 'primeng/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
import { ValentinePromoComponent } from "./components/custom-sections/valentine-promo/valentine-promo.component";

function HttpLoaderFactory(http: HttpBackend): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/', suffix: '.json'}
  ]);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent],
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpBackend]
            },
            defaultLanguage: LANGUAGES.IT
        }),
        provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
        BrowserModule,
        BrowserAnimationsModule,
        RouterOutlet,
        JumbotronComponent,
        RoomsComponent,
        AboutComponent,
        GalleryComponent,
        ContactsComponent,
        FooterComponent,
        ButtonModule,
        SharedModule,
        SidebarModule,
        ScrollTopModule,
        HttpClientModule,
        MapsComponent,
        ObserveVisibilityDirective,
        DropdownModule,
        ReactiveFormsModule,
        ValentinePromoComponent
    ]
})
export class AppModule {
}
