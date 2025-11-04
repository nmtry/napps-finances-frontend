import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  standalone: true,
  selector: 'app-transactions-summary-chart-component',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './transactions-summary-chart-component.html',
  styleUrl: './transactions-summary-chart-component.scss',
})

export class TransactionsSummaryChartComponent {
  isBrowser: boolean;
  // Example: last 7 days transactions totals
  chartData = {
    labels: ['Nov 1', 'Nov 2', 'Nov 3', 'Nov 4', 'Nov 5', 'Nov 6', 'Nov 7'],
    datasets: [
      {
        label: 'Expenses',
        data: [50, 30, 150, 0, 70, 20, 100], // daily expenses
        backgroundColor: 'rgba(239, 68, 68, 0.7)', // red
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1,
      },
      {
        label: 'Income',
        data: [1000, 200, 0, 500, 300, 0, 400], // daily income
        backgroundColor: 'rgba(34, 197, 94, 0.7)', // green
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
