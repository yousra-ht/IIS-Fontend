import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-detailed-offer',
  templateUrl: './detailed-offer.component.html',
  styleUrls: ['./detailed-offer.component.css']
})
export class DetailedOfferComponent implements OnInit {


  OffreListe = [];
  Candidature: any;
  elem;
  showMsg: boolean = false;
  submitted = false;
  form: FormGroup;

  constructor(private _offerService: OfferService,private route: ActivatedRoute ,private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      cv: new FormControl(null, [Validators.required]),
    });



    this._offerService.getAlloffer().then((resp) => { this.OffreListe= resp.data ;
      });
    const id = this.route.snapshot.paramMap.get("id");
    this._offerService.getoffer(id).then((resp) => { this.Candidature = resp.data
       });
  }

  get f() { return this.form.controls; }


 
  uploadFile(event) {
    this.elem = event.target;
    console.log(this.elem.files[0]);
    this.form.patchValue({
      cv: this.elem.files[0]
    });
    this.form.get('cv').updateValueAndValidity()
   }

   simpleAlert(){
    Swal.fire('Hi Welcome! This is Simple Alert');
  }
  
    
  successAlertNotification(){
   
  }


   submit(e) {
    this.submitted = true;
    // if (this.form.invalid) {
    //   console.log("invalid");
    //   return; 
      
    // }
    // else{
    e.stopPropagation()
    {
      const id = this.route.snapshot.paramMap.get("id");
      this._offerService.getoffer(id).then((resp) => { 
                var formData: any = new FormData();
                formData.append("cv", this.elem.files[0]);
                formData.append("nom", this.form.get('nom').value);
                formData.append("prenom", this.form.get('prenom').value);
                formData.append("email", this.form.get('email').value);
                formData.append("offreEmplois", "/api/offre_emplois/" +id );  
                console.log(formData.values())
                this._offerService.createcandidature(
                  formData ,id
                 
                ).then(() => 
                {
                  console.warn("success");
                  this.showMsg= true;
                })
              });
    }
  }
  // }



}
