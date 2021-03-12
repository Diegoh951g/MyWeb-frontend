import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  private error_message: string;

  constructor() { 

    this.error_message = 'Error! Page not found :c';
  }

  ngOnInit(): void {
  }

  getErrorMessage(){
    return this.error_message;
  }
}
