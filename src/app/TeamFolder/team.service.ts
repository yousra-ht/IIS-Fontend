import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private BaseUrl = 'https://localhost:8000/api/equipes/';
  constructor() { }

  async getAllTeam() {
    return await axios.get(`${this.BaseUrl}`);
  }



}
