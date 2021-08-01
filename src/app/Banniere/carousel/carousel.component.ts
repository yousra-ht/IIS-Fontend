import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableGService } from 'src/app/variable-g.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
path1; 
  constructor(private parame: VariableGService) {
    this.parame.location;

  }

  y = this.parame.location;

  ngOnInit() {
    let path = window.location.href ;

    if( path ==='http://localhost:4200/services')
    {
      
      this.path1='service' ; 
      
    }
   
    if (path === 'http://localhost:4200/partenaire')
    {
      
      this.path1='partenaire' ; 
    
    }

    if (path === 'http://localhost:4200/contact')
    {
      
      this.path1='contact' ; 
    
    }

  }
  

}
