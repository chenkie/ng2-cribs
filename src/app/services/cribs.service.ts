import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CribsService {

  @Output() cribAdded: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json').map(res => res.json());
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.cribAdded.emit(data);
  }

}
