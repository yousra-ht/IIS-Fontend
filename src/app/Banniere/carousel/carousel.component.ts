import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableGService } from 'src/app/variable-g.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
condition; 
  constructor(private parame: VariableGService) {
    this.parame.location;

  }

  y = this.parame.location;

  ngOnInit() {
   
  }
  

}
