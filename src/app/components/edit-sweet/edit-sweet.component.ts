import { Component, OnInit } from "@angular/core";
import { SweetService } from "src/app/services/sweet.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Sweet } from "src/app/models/sweet";

@Component({
  selector: "app-edit-sweet",
  templateUrl: "./edit-sweet.component.html",
  styleUrls: ["./edit-sweet.component.css"]
})
export class EditSweetComponent implements OnInit {
  sweetId: number;
  isLoading: boolean;
  sweet: Sweet;
  mySweet: Sweet = {
    name: "",
    image: ""
  };

  constructor(
    private sweetService: SweetService,
    private route: ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    this.sweetId = this.route.snapshot.params["id"];
    this.getSweetDetails(this.sweetId);
  }

  getSweetDetails(id) {
    this.sweetService.findById(id).subscribe(sweet => {
      this.sweet = sweet;
      this.isLoading = false;
    });
  }

  editSweet() {
    let jsonVariable = {
      name: this.sweet.name,
      image: this.sweet.image
    };
    this.sweetService.put(this.sweetId, jsonVariable)
    .subscribe(data => {});
  }

  redirect(){
    this.router.navigate(["/"]);
  }
}
