import { Component, OnInit } from '@angular/core';
import {OfferService } from '../offer.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  OffreListe = [];
  ArticleListe: any;


  constructor(private _offerService: OfferService  ) { }

  ngOnInit() {
    this._offerService.getAlloffer().then((resp) => { this.OffreListe= resp.data ; console.log(this.OffreListe) });
    this._offerService.getAllSArticles().then((resp) => { this.ArticleListe = resp.data; console.log(this.ArticleListe) });
  }

}
