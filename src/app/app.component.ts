import { Component } from '@angular/core';
import { interval } from 'rxjs';  
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clock = interval(1000).pipe(map(tick => new Date()), share());
}
