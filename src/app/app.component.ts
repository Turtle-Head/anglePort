import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <div>
  <h1>Content goes between the quotes</h1>
  </div>
  <br>
  
  <div>
  <br>
  <p>Did this refresh the page.</p>
  <br>
  <h2>view updates upon save than Vue</h2>
 <img src="https://cdn.pixabay.com/photo/2023/10/23/14/37/bee-8336245_960_720.png" height="50%" width="auto">
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