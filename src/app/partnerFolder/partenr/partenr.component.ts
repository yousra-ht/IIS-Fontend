import { Component, OnInit } from '@angular/core';
import{PartnerService} from '../partner.service'
@Component({
  selector: 'app-partenr',
  templateUrl: './partenr.component.html',
  styleUrls: ['./partenr.component.css']
})
export class PartenrComponent implements OnInit {
  PartnerListe: any;

  constructor( private PartnerService : PartnerService ) { }

  ngOnInit() {

    this.PartnerService.getAllPartenaire().then((resp) => {
      this.PartnerListe = resp.data['hydra:member'];
      console.log(this.PartnerListe[0]);
      
  }

    )}

}
