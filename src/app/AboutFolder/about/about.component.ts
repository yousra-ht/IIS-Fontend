import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ServiceListe: any;



  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAllService().then((resp) => {
      this.ServiceListe = resp.data['hydra:member'];
    
      
    });


  }

  getWidth(element)
  {
    // alert(1)
    // alert(element.pourcentage)
    return (element.pourcentage)
  }



}
