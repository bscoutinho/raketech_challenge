import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }


    getData() {
        return this.http.get<any>('assets/data.json');
    }
    

}