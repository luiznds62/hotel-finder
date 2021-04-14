import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES } from "../../utils/Routes";

@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.css"],
})
export class LogoComponent implements OnInit {
  @Input() inFooter: Boolean = false;

  constructor(private route: Router) {}

  ngOnInit() {}

  redirectHome() {
    this.route.navigate([ROUTES.INITIAL]);
  }
}
