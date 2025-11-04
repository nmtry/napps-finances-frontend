import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar-component/navbar-component';
import { HomeComponent } from './home-component/home-component';
import { BudgetsHomeComponent } from './budgets-home-component/budgets-home-component';
import { AccountsHomeComponent } from './accounts-home-component/accounts-home-component';
import { TransactionsHomeComponent } from './transactions-home-component/transactions-home-component';
import { FinancialHealthHomeComponent } from './financial-health-home-component/financial-health-home-component';
import { LoginComponent } from './login-component/login-component';
import { RegisterComponent } from './register-component/register-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent,
    BudgetsHomeComponent, AccountsHomeComponent, TransactionsHomeComponent, 
    FinancialHealthHomeComponent, LoginComponent, RegisterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('napps-finances-frontend');
}
