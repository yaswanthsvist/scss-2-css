in angular 2/4, Web components are essentially fully encapsulated HTML elements that the browser knows how to display. Since the HTML and CSS are encapsulated in the component, the component
will always display the way it was designed, even if some later-loaded CSS style sheet changes
the presentation rules on HTML elements.
This module will convert the scss files present in child components(aka child directories) to css file's so they can be imported.

```
import { Component } from '@angular/core';
 @Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
 })
 ```
