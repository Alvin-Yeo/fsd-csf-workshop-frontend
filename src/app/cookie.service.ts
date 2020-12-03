import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const SERVER = 'http://127.0.0.1:3000/api/cookie';
const SERVER = '/api/cookie';

// model
export interface CookieText {
    cookie: string
}

@Injectable()
export class CookieService {
    
    constructor(
        private http: HttpClient
    ) {}

    async getFortuneCookies(count: number): Promise<CookieText[]> {
        const params = (new HttpParams()).set('count', `${count}`);
   
        return await this.http.get<CookieText[]>(SERVER, { params }).toPromise();
    }
}