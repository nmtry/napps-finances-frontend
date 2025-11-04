import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { BudgetsHomeComponent } from './budgets-home-component/budgets-home-component';
import { AccountsHomeComponent } from './accounts-home-component/accounts-home-component';
import { TransactionsHomeComponent } from './transactions-home-component/transactions-home-component';
import { FinancialHealthHomeComponent } from './financial-health-home-component/financial-health-home-component';
import { LoginComponent } from './login-component/login-component';
import { RegisterComponent } from './register-component/register-component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "budgets", component: BudgetsHomeComponent},
    {path: "accounts", component: AccountsHomeComponent},
    {path: "transactions", component: TransactionsHomeComponent},
    {path: "financial-health", component: FinancialHealthHomeComponent}
];
