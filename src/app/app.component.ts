import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingapp';

  constructor(private router: Router) { }

  navigateMe(): void {
    const num = Number(prompt('enter a number'));
    if (num < 0) {
      this.router.navigate(['/reports']);
    } else {
      this.router.navigate(['/signup']);
    }
  }
}
