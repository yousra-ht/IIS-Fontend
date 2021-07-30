import { Component, OnInit } from '@angular/core';
import { ServiceIISService } from '../service-iis.service';
import { VariablesGlobalesComponent} from '../../variables-globales/variables-globales.component';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  ServiceListe = [];
  condition=true;

  constructor(private serviceIISService: ServiceIISService ,private parame : VariablesGlobalesComponent) { 
    console.log(parame.p="true")
  }

 

  ngOnInit() {
    this.serviceIISService.getAllService().then((resp) => { this.ServiceListe = resp.data['hydra:member']; console.log(this.ServiceListe) });
  
  }


 
}
