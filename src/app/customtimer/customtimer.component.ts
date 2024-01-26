import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-customtimer',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './customtimer.component.html',
  styleUrl: './customtimer.component.scss'
})
export class CustomtimerComponent {

}
