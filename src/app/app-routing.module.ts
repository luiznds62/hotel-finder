import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./screens/home/home.component";
import { InitialComponent } from "./screens/initial/initial.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "bem-vindo" },
  { path: "home", component: HomeComponent },
  { path: "bem-vindo", component: InitialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
