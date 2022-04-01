import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { contact } from 'src/app/model/contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(public http: HttpClient, public router: Router) {}
  public submitContact(contact: contact) {
    const x = environment.api;
    return this.http.post<contact>(environment.api + '/requestdemo', contact);
  }
}
