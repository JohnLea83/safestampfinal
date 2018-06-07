import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { EmailService } from '../email.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  onSubmit(drop, drop2, name, email, phone, drop3) {
    const emailBody = {drop, drop2, name, email, phone, drop3};
    console.log(emailBody);
    this.emailService.sendEmail(emailBody).subscribe(

      success => {
        console.log(success);
        alert('Email Sent!');
        drop.value = '';
        drop2.value = '';
        name.value = '';
        email.value = '';
        phone.value = '';
        drop3.value = '';
      });
  }
}
