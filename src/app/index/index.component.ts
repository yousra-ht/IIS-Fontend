import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VariableGService } from '../variable-g.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = 'IIS-Frontend';
  // condition=true;
  url : boolean;

  constructor(private parame : VariableGService,private router: Router) {
    // parame.p="true";
    // this.global = parame.p

    // console.log("variable   "+this.global)
  
  }

  ngOnInit() {
  // this.url=this.router.url.startsWith("/home")
  // console.log(this.url);
    
  }

  }


