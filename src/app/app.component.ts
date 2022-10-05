import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fictional-business';
  value = 9;
  renderAppUnless: boolean = false;
  defaultName: string = '';
}
