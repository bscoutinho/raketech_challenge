import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable()
export class ProductService {

    baseUrl = 'http://localhost:4000/toplists';

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<any>(this.baseUrl);
    }

    saveData(list: Product[]) {

        let body = {
            "575": list
        }

        // post data to server
        this.http.patch(this.baseUrl, body).subscribe((data) => {
            console.log('Product list saved: ', data);
        });
    }
    

}