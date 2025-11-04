import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialHealthHomeComponent } from './financial-health-home-component';

describe('FinancialHealthHomeComponent', () => {
  let component: FinancialHealthHomeComponent;
  let fixture: ComponentFixture<FinancialHealthHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialHealthHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialHealthHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
