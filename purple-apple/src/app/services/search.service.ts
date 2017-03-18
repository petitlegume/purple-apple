import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {config} from "../../config";

@Injectable()
export class SearchService {
    constructor (
        private http: Http
    ) {}

    public gatherCompetitors(store) {
        return this.http.post(`http://localhost:3000/api/search`, store)
            .map((res:Response) => res.json());
    }

    public search(locId, dirId){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'x-woms-auth' : 'f503586c-f9fe-4988-979f-8a73946c358f'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://ss.swiq3.com/api/location/cleanLocation?loc_id='+locId+'&dir_id=' + dirId, options)
            .map((res:Response) => res.json());
    }

}