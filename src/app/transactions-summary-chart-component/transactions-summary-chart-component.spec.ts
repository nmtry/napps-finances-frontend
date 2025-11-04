import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSummaryChartComponent } from './transactions-summary-chart-component';

describe('TransactionsSummaryChartComponent', () => {
  let component: TransactionsSummaryChartComponent;
  let fixture: ComponentFixture<TransactionsSummaryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsSummaryChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsSummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
