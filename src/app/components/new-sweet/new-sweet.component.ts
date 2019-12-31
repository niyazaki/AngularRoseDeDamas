import { Component, OnInit } from "@angular/core";
import { Sweet } from "src/app/models/sweet";
import { SweetService } from "src/app/services/sweet.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-sweet",
  templateUrl: "./new-sweet.component.html",
  styleUrls: ["./new-sweet.component.css"]
})
export class NewSweetComponent implements OnInit {
  mySweet: Sweet = {
    name: "",
    image: ""
  };
  constructor(private sweetService: SweetService, private router: Router) {}

  ngOnInit() {}

  postSweet() {
    let jsonVariable = {
      name: this.mySweet.name,
      image: this.mySweet.image
    };
    
    this.sweetService.post(jsonVariable).subscribe(data => {});
    this.redirect();
  }

  redirect() {
    this.router.navigate(["/"]);
  }
}
