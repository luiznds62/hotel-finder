import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./screens/home/home.component";
import { InitialComponent } from "./screens/initial/initial.component";
import { ROUTES } from "./utils/Routes";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: ROUTES.INITIAL },
  { path: ROUTES.HOME, component: HomeComponent },
  { path: ROUTES.INITIAL, component: InitialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
