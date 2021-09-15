import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://localhost:8000/api/contacts';
  constructor() { }

  createContact(contact) {
    return axios.post(`${this.baseUrl}`, contact);

  }



}
