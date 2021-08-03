import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-detailed-offer',
  templateUrl: './detailed-offer.component.html',
  styleUrls: ['./detailed-offer.component.css']
})
export class DetailedOfferComponent implements OnInit {
  OffreListe = [];
  constructor(private _offerService: OfferService ) { }

  ngOnInit() {
    this._offerService.getAlloffer().then((resp) => { this.OffreListe= resp.data ; console.log(this.OffreListe) });
  }

}
