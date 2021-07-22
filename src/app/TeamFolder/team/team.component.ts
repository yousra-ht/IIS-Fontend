import { Component, OnInit } from '@angular/core';
import {TeamService } from '../team.service'; 
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

 public TeamListe = [];
  constructor(private _teamService : TeamService ) { }

  ngOnInit() {
    this._teamService.getAllTeam().then((resp) => { this.TeamListe = resp.data; });
  }

}
