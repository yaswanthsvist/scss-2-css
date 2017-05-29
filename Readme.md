in angular 2/4, Web components are essentially fully encapsulated HTML elements. Since the HTML and CSS are encapsulated in the component, the component will always display the way it was designed, even if some later-loaded CSS style sheet changes
the presentation rules on HTML elements.
This module will convert the scss files present in child components(child directories) to css file's.
Goal is to make scss more modular in angular2/4.
But this module can be used any where.
```
import { Component } from '@angular/core';
 @Component({
 selector: 'payment-root',
 templateUrl: './payment.component.html',
 /*styleUrls: ['./payment.component.scss']  //instead of scss file*/
 styleUrls: ['./payment.component.css'] //use generated css
})
 ```
# Installing
```
npm install --save-dev scss-2-css
```
# Usage
```
var scss2css = require('scss-2-css');
scss2css("./src")
```

# Usage with gulp

```
var gulp = require('gulp');
var scss2css = require('scss-2-css');

gulp.task('sass', function () {
	scss2css("./src")
});
```
