import {Component, View, Attribute} from 'angular2/core';

import {Greeter} from '../services/greeter';

@Component({
  selector: 'hello',
  template: '<p>{{ message }}</p>'
})
export class Hello {
  constructor(greeter: Greeter) {
    this.message = greeter.say('hello', 'Angular 2');
  }
}
