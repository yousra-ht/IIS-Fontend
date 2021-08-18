import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { ActivatedRoute } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detailed-offer',
  templateUrl: './detailed-offer.component.html',
  styleUrls: ['./detailed-offer.component.css']
})
export class DetailedOfferComponent implements OnInit {
  OffreListe = [];
  Candidature: any;
  form = new FormGroup({
     nom: new FormControl('', [Validators.required]),
     prenom: new FormControl('', [Validators.required]),
     email: new FormControl('', [Validators.required,Validators.email]),
     cv: new FormControl(null, [Validators.required]),
  });

  constructor(private _offerService: OfferService,private route: ActivatedRoute ) { }

  ngOnInit() {
    this._offerService.getAlloffer().then((resp) => { this.OffreListe= resp.data ;
      //  console.log(this.OffreListe) 
      });
    const id = this.route.snapshot.paramMap.get("id");
    this._offerService.getoffer(id).then((resp) => { this.Candidature = resp.data
           console.log(this.Candidature)
       });
  }

  elem;
  uploadFile(event) {
    this.elem = event.target;
    console.log(this.elem.files[0]);
    this.form.patchValue({
      cv: this.elem.files[0]
    });
    this.form.get('cv').updateValueAndValidity()
   }


  
   submit(e) {
    e.stopPropagation()
    {
      const id = this.route.snapshot.paramMap.get("id");
      this._offerService.getoffer(id).then((resp) => { 
                this.Candidature = resp.data; 
                console.log(this.Candidature)
              
                var formData: any = new FormData();
                formData.append("cv", this.elem.files[0]);
                formData.append("nom", this.form.get('nom').value);
                formData.append("prenom", this.form.get('prenom').value);
                formData.append("email", this.form.get('email').value);
                formData.append("offreEmplois", "/api/offre_emplois/" +id );  

                

                console.log(formData.values())





                this._offerService.createcandidature(
                  formData
                 
                ).then(() => 
                {
          
                  console.warn("success");
                  // this.router.navigate(['/Partenaire']);
          
                })

              });
    }
  }



  
 


  // submit(e) {
  //   e.stopPropagation()
  //   {
  //     var formData: any = new FormData();
  //     formData.append("cv", this.elem.files[0]);
  //     formData.append("nom", this.form.get('nom').value);
  //     formData.append("prenom", this.form.get('prenom').value);
  //     formData.append("email", this.form.get('email').value);
  //     this._offerService.createcandidature(
  //       formData
  //     ).then(() => 
  //     {

  //       console.warn("success");
  //       // this.router.navigate(['/Partenaire']);

  //     })
  //   }

  // }

  // console.warn(this.formPart.get('nom').value);
  // console.log(this.formPartenaire.get('logo').value);
  
  // console.log(this.formPartenaire.value)


}
