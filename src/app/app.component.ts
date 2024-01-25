import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular_Pomodoro';
  seconds: number = 0;
  minutes: number = 0;
  hour: number = 0;
  start: string = "Start";
  isPaused: boolean = true;
  IntervalId:any

  Start() {
    if (this.isPaused) {
      this.isPaused = false;
      this.start = "Pause";

     this.IntervalId= setInterval(() => {
        if (!this.isPaused) {
          this.seconds++;
          if (this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
          }
          if (this.minutes === 60) {
            this.hour++;
            this.minutes = 0;
          }
        }
      }, 1000);
    } else {
      this.isPaused = true;
      this.start = "Start";
      clearInterval(this.IntervalId)
    }
  }
}
