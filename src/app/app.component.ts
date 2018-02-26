import { UserService } from "./user/shared/user.service";
import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(private userService: UserService) {}

  ngOnInit() {
    $(document).ready(function() {
      $(".banner").owlCarousel({
        autoHeight: true,
        center: true,
        nav: true,
        items: 1,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
    });

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    // }

    const x = this.userService.getGeoLocation();

    x.subscribe(data => {
      console.log("data", data);
    });
  }

  setGeoLocation(position: any) {
    this.userService.setLocation(
      position["coords"].latitude,
      position["coords"].longitude
    );
  }
}
