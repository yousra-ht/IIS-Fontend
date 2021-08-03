import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  Url= 'http://localhost:8000/api/offre_emplois';
  Urloffre="http://localhost:8000/api/offre_emplois/";
  url1="http://localhost:8000/api/condidatures";
  constructor() { }
  async getAlloffer(){
    return await axios.get(`${this.Url}`);
  }
  async getoffer(id) {
    return await axios.get(`${this.Urloffre}` + id);
  }
  async createcandidature(Candidature) {
    return axios.post(`${this.url1}`,  Candidature);
  }


 
}
