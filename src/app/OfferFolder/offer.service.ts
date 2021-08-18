import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  Url= 'http://localhost:8000/api/offre_emplois';
  Urloffre="http://localhost:8000/api/offre_emplois/";
  url1="http://localhost:8000/api/candidatures";
  baseUrl = 'http://localhost:8000/Articles';
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

  async getAllSArticles() {
    return await axios.get(`${this.baseUrl}`);
  }


 
}
