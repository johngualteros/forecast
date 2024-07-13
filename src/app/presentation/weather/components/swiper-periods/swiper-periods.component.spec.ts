import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperPeriodsComponent } from './swiper-periods.component';

describe('SwiperPeriodsComponent', () => {
  let component: SwiperPeriodsComponent;
  let fixture: ComponentFixture<SwiperPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperPeriodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
