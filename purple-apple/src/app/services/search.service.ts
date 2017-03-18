import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
        return this.http.post("http://localhost:3000/api/changeDB", {testValue: "value"});
    }

}