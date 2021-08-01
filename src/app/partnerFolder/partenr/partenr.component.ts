import { Component, OnInit } from '@angular/core';
import { VariableGService } from 'src/app/variable-g.service';
import{PartnerService} from '../partner.service';

@Component({
  selector: 'app-partenr',
  templateUrl: './partenr.component.html',
  styleUrls: ['./partenr.component.css']
})
export class PartenrComponent implements OnInit {
  PartnerListe: any;

  constructor( private PartnerService : PartnerService,private parame : VariableGService ) {
 
   }

  ngOnInit() {
console.log(window.location.href);
    this.PartnerService.getAllPartenaire().then((resp) => {
      this.PartnerListe = resp.data['hydra:member'];
      console.log(this.PartnerListe);
      
  }

    )}

}
