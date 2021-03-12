import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private main_text: string;
  private secondary_text: string;

  constructor() { 

   this.main_text = "Hi, I'm Diego Maldonado.";
   this.secondary_text = 'web developer';
  }

  ngOnInit(): void {
  }

  mainText(): string {
    return this.main_text;
  }

  secondaryText(): string {
    return this.secondary_text;
  }
}
