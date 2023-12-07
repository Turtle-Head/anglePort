import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<div>
  <h1>between the quotes</h1>
  </div>
  <br>
  <div>
  <br>
  <p>let's see how fast it refreshes the view.</p></div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/