import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) {}

  ngOnInit(): void {
  }

  signIn() {
    this.router.navigate(["/signin"]);
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {});
    this.router.navigate(["/about"]);
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.html',
})

export class DialogDataExampleDialog {
  constructor() {}
}