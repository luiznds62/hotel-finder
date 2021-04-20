import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {InitialComponent} from './screens/initial/initial.component';
import {ROUTES} from './utils/Routes';
import {RoomDetailsComponent} from './screens/room-details/room-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ROUTES.INITIAL},
  {path: ROUTES.HOME, component: HomeComponent},
  {path: ROUTES.INITIAL, component: InitialComponent},
  {path: ROUTES.DETAILS, component: RoomDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
