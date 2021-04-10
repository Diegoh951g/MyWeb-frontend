import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  private my_name: string;
  private my_age: number;
  private my_country: string;

  constructor() {
    this.my_name = 'Diego Maldonado Zamorano';
    this.my_age = 21;
    this.my_country = 'Chile';
  }

  ngOnInit(): void {}

  getName(): string {
    return this.my_name;
  }

  getAge(): number {
    return this.my_age;
  }

  getCountry(): string {
    return this.my_country;
  }
}
