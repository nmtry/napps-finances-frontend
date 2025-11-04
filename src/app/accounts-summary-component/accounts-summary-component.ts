import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatProgressBarModule }  from '@angular/material/progress-bar';

@Component({
  selector: 'app-accounts-summary-component',
  imports: [CurrencyPipe, DatePipe, MatProgressBarModule],
  templateUrl: './accounts-summary-component.html',
  styleUrl: './accounts-summary-component.scss',
})
export class AccountsSummaryComponent {
  balance: number = 1234.5698798234;
  ccDueDate: Date = new Date();
}
