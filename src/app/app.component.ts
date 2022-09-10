import { Component, VERSION } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  color: ThemePalette = 'primary';
  
  mode: ProgressSpinnerMode = 'determinate';
  value = 30;
  

}
