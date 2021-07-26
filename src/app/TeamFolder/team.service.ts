import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private BaseUrl = 'http://localhost:8000/api/equipes/';
  UrlImage='http://127.0.0.1:8000/images';
  constructor() { }
  async getAllTeam() {
    return await axios.get(`${this.BaseUrl}`);
  } 
}
