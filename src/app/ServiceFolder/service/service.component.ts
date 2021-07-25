import { Component, OnInit } from '@angular/core';
import { ServiceIISService } from '../service-iis.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  ServiceListe = [];
 
  constructor(private serviceIISService: ServiceIISService) { }

  ngOnInit() {
    this.serviceIISService.getAllService().then((resp) => { this.ServiceListe = resp.data['hydra:member']; console.log(this.ServiceListe) });
  }


}
