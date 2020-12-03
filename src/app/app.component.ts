import { Component } from '@angular/core';
import { CookieService, CookieText } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cookies: CookieText[] = [];

  constructor(
    private cookieService: CookieService
  ) {}
  
  async onSubmit($event, count: string) {
    $event.preventDefault();

    const cookieCount = parseInt(count) || 1;
    this.cookies = await this.cookieService.getFortuneCookies(cookieCount);
    // console.info('Results: ', this.cookies);
  }

}
