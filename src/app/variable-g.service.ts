import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VariableGService {

   
  public location = '' ;
  constructor(public router: Router) {
    this.location = router.url;
    console.log(router.url)
   }

   
}
