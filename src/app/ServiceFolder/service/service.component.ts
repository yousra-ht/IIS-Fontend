import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableGService } from 'src/app/variable-g.service';
import { ServiceIISService } from '../service-iis.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  ServiceListe = [];
  condition=true;
  constructor(private serviceIISService: ServiceIISService ,private parame : VariableGService,public router: Router) { 
  console.log(this.parame.location);
  }

 

  ngOnInit() {
    this.serviceIISService.getAllService().then((resp) => { this.ServiceListe = resp.data['hydra:member']; console.log(this.ServiceListe) });
  
  }


 
}
