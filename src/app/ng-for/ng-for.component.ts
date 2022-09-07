import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  hotels: string[] = ['MGM', 'Mirage', 'Bellagio', 'New York New York', 'Luxor'];
  newHotel: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  addHotels() {
    this.hotels = [...this.hotels, this.newHotel];
  }

}
