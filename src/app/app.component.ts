import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookie-service-example';
  cookieValue: string;

constructor(private cookieService: CookieService)
  {
    this.cookieService.deleteAll();
    this.cookieService.set('Test', '0000000000000000000',{domain:'.github.com'});
    this.cookieValue = this.cookieService.get('Test');

    console.log(this.cookieValue);
  }
}
