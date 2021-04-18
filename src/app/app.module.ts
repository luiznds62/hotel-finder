import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {LogoComponent} from './components/logo/logo.component';
import {RoomsListComponent} from './components/rooms-list/rooms-list.component';
import {RoomsSorterComponent} from './components/rooms-sorter/rooms-sorter.component';
import {RoomComponent} from './components/room/room.component';
import {RoomListItemComponent} from './components/room-list-item/room-list-item.component';
import {StarsRatingComponent} from './components/stars-rating/stars-rating.component';
import {RatingComponent} from './components/rating/rating.component';
import {CitySelectComponent} from './components/city-select/city-select.component';
import {HomeComponent} from './screens/home/home.component';
import {InitialComponent} from './screens/initial/initial.component';
import {CheckInDatesComponent} from './components/check-in-dates/check-in-dates.component';
import {CitiesListComponent} from './components/cities-list/cities-list.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {CallbackPipe} from './pipes/CallbackPipe';
import {RoomListFilterComponent} from './components/room-list-filter/room-list-filter.component';
import {PriceFilterComponent} from './components/price-filter/price-filter.component';
import {RoomDetailsFilterComponent} from './components/room-details-filter/room-details-filter.component';
import {RoomFeaturesFilterComponent} from './components/room-features-filter/room-features-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    RoomsListComponent,
    RoomsSorterComponent,
    RoomComponent,
    RoomListItemComponent,
    StarsRatingComponent,
    RatingComponent,
    CallbackPipe,
    InitialComponent,
    CitySelectComponent,
    CheckInDatesComponent,
    CitiesListComponent,
    LoadingSpinnerComponent,
    RoomListFilterComponent,
    PriceFilterComponent,
    RoomDetailsFilterComponent,
    RoomFeaturesFilterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
