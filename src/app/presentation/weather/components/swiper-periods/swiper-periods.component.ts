import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-swiper-periods',
  standalone: true,
  imports: [],
  templateUrl: './swiper-periods.component.html',
  styleUrl: './swiper-periods.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperPeriodsComponent {
  
  @Input() periods: any[];

  formatTime(time: string): string {
    const date = new Date(time);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
}
