import { CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import { Component } from '@angular/core';
import { TransactionsSummaryChartComponent } from '../transactions-summary-chart-component/transactions-summary-chart-component';

interface Transaction {
  id: number;
  date: string; // ISO date
  description: string;
  target: string;
  amount: number;
  type: 'Income' | 'Expense';
}

@Component({
  selector: 'app-transactions-summary-component',
  imports: [DatePipe, CurrencyPipe, CommonModule, TransactionsSummaryChartComponent],
  templateUrl: './transactions-summary-component.html',
  styleUrl: './transactions-summary-component.scss',
})
export class TransactionsSummaryComponent {
  // sample data
  transactions: Transaction[] = [
    { id: 1, date: '2025-10-10', description: 'Salary', target: 'My Job', amount: 3000.00, type: 'Income' },
    { id: 2, date: '2025-10-12', description: 'Groceries', target: 'Walmart', amount: -120.42, type: 'Expense' },
    { id: 3, date: '2025-10-15', description: 'Electric bill', target: 'NYSEG', amount: -63.20, type: 'Expense' },
    { id: 4, date: '2025-10-20', description: 'Freelance', target: 'Side Job', amount: 450.00, type: 'Income' },
  ];

  sortKey: keyof Transaction | '' = '';
  sortDir: 1 | -1 = 1;

  // toggle sorting
  sortBy(key: keyof Transaction) {
    if (this.sortKey === key) {
      this.sortDir = (this.sortDir === 1 ? -1 : 1) as 1 | -1;
    } else {
      this.sortKey = key;
      this.sortDir = 1;
    }
    this.transactions.sort((a, b) => {
      const va = a[key];
      const vb = b[key];
      if (va == null && vb == null) return 0;
      if (va == null) return -1 * this.sortDir;
      if (vb == null) return 1 * this.sortDir;

      // handle numbers and strings/dates
      if (typeof va === 'number' && typeof vb === 'number') {
        return (va - vb) * this.sortDir;
      }
      const sa = String(va);
      const sb = String(vb);
      // for ISO date strings this will also sort correctly
      return sa.localeCompare(sb) * this.sortDir;
    });
  }

  // performance helper for *ngFor
  trackById(index: number, item: Transaction) {
    return item.id;
  }
}
