import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './screens/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomsFilterComponent } from './components/rooms-filter/rooms-filter.component';
import { RoomsSorterComponent } from './components/rooms-sorter/rooms-sorter.component';
import { RoomComponent } from './components/room/room.component';
import { RoomListItemComponent } from './components/room-list-item/room-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    RoomsListComponent,
    RoomsFilterComponent,
    RoomsSorterComponent,
    RoomComponent,
    RoomListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
