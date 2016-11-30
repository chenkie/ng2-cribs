import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  capitalize(word): string {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}
