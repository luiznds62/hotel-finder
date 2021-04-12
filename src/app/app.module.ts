import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LogoComponent } from "./components/logo/logo.component";
import { RoomsListComponent } from "./components/rooms-list/rooms-list.component";
import { RoomsFilterComponent } from "./components/rooms-filter/rooms-filter.component";
import { RoomsSorterComponent } from "./components/rooms-sorter/rooms-sorter.component";
import { RoomComponent } from "./components/room/room.component";
import { RoomListItemComponent } from "./components/room-list-item/room-list-item.component";
import { StarsRatingComponent } from "./components/stars-rating/stars-rating.component";
import { RatingComponent } from "./components/rating/rating.component";
import { CitySelectComponent } from "./components/city-select/city-select.component";

import { CallbackPipe } from "./pipes/CallbackPipe";

import { HomeComponent } from "./screens/home/home.component";
import { InitialComponent } from './screens/initial/initial.component';
import { CheckInDatesComponent } from './components/check-in-dates/check-in-dates.component';

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
    RoomListItemComponent,
    StarsRatingComponent,
    RatingComponent,
    CallbackPipe,
    InitialComponent,
    CitySelectComponent,
    CheckInDatesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
