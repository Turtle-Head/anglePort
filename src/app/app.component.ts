import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<div>
  <h1>between the quotes</h1>
  </div>
  <br>
  <img src="https://cdn.pixabay.com/photo/2023/10/23/14/37/bee-8336245_960_720.png" height="50% width="50%">
  <div>
  <br>
  <p>let's see how fast it refreshes the view.</p>
  <br>
  <h2>commit and push is how to update view</h2>
  </div>
  <br>
<h3>lots of things could break if not careful</h3>
  `,
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