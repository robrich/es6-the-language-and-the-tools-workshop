import {Component} from 'angular2/core';

export class AppComponent {
  static get annotations() {
    return [
      new Component({
        selector: "my-app",
        template: '<h1>Hello Angular 2</h1>'
      }),
    ];
  }

  constructor () {}
}
