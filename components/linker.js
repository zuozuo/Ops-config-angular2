import {Component, View, Attribute} from 'angular2/core';

@Component({
  selector: 'linker',
  template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>'
})

export class Linker {
  constructor(@Attribute('name') name, @Attribute('url') url) {
    this.name = name;
    this.url = url;
  }
}

