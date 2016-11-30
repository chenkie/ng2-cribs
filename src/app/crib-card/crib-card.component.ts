import { by } from 'protractor';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent {

  @Input('crib') crib: Object; 

  constructor() { }

}
