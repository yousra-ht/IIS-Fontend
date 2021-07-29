import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  service() {
    window.open('services', '_self');
  }

  // ok(){
    // this.router.navigate(['services']);
    // location.reload();
    // alert(location.path())
    // window.open ('services', '_self');
  


  // }

}
