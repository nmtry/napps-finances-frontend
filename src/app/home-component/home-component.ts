import { Component } from '@angular/core';
import { AccountsSummaryComponent } from "../accounts-summary-component/accounts-summary-component";
import { TransactionsSummaryComponent } from '../transactions-summary-component/transactions-summary-component';

@Component({
  selector: 'app-home-component',
  imports: [AccountsSummaryComponent, TransactionsSummaryComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

}
