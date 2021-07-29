import { Component } from '@angular/core';
import { VariablesGlobalesComponent } from './variables-globales/variables-globales.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IIS-Frontend';
  // condition=true;
  global;
  
  constructor(private parame : VariablesGlobalesComponent) {
  
   this.global = parame.p
    console.log(this.global)
  
  }
  ngOnInit()
  {
    console.log(this.global)
  }


  
}
