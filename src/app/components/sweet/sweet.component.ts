import { Component, OnInit } from '@angular/core';
import { SweetService } from 'src/app/services/sweet.service';
import { Sweet } from 'src/app/models/sweet';



@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrls: ['./sweet.component.css']
})
export class SweetComponent implements OnInit {
  mySweet : Sweet = {
    name : "",
    image : ""
  }

  sweets : Sweet[] = [];

  constructor(private sweetService: SweetService) { }

  ngOnInit() {
    this.getSweets();
  }
  
  getSweets(){
    this.sweetService.findAll()
        .subscribe(sweets => this.sweets = sweets );
  }

  deleteSweet(id : number){

    this.sweetService.delete(id)
        .subscribe(()=>{
          this.sweets = this.sweets.filter(sweet => sweet.id !=id)
        })
    console.log("deleteSweet OK")
  }

  postSweet(){
    let jsonVariable = {
      'name' : this.mySweet.name,
      'image' : this.mySweet.image
    }
    this.sweetService.postS(jsonVariable);
        
  }
}
