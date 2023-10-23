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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
