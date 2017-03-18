import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    constructor (
        private http: Http
    ) {}

    public search(params) {
        return this.http.get(`http://localhost:3000/api/search`)
            .map((res:Response) => res.json());
    }

    public testDB(yo){
        console.log("Clicked on yo");

        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post("http://localhost:3000/api/changeDB", {testValue: "value"}, options)
            .map((res:Response) => res.json());
    }

}