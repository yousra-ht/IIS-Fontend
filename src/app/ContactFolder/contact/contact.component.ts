import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ContactService} from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  isDataLoading =true ; 
  constructor(private _contactService:ContactService,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required,Validators.email ]),
    message: new FormControl('', [Validators.required]),
  });
  }
  get f() { return this.form.controls; }
  submit(e) {
    this.submitted = true;
    if (this.form.invalid) {
      return; 
    }
    else{
    e.stopPropagation()
    {
      this._contactService.createContact({
        'nom': this.form.get('nom').value,
        'prenom': this.form.get('prenom').value,
        'mail': this.form.get('mail').value,
        'message': this.form.get('message').value,
        'Date': new Date()
      }).then(() => {
        alert("SUCCESS!")
       
      })
    }
  }
  }

}
