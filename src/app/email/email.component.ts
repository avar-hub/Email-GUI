import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { response } from 'express';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit{

  data={
    to:"",
    subject:"",
    message:""
  }

  flag:boolean=false;

  constructor(private email : EmailService, private snak: MatSnackBar){}

  ngOnInit(): void {}

  doSubmitForm(){
    console.log("submitting form");
    console.log(this.data);

    if(this.data.subject=='' || this.data.to==' '){
      this.snak.open("Fields cannot be empty");
      return;
    }

    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
        response => {
          console.log(response);
          this.flag=false;
        },
        error => {
          console.log(error);
          this.flag=false;
        }
    )
  }

}
