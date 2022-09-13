import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpGdGuard } from './expense-detail/exp-gd.guard';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent },
  { path: 'expense', component:ExpenseComponent },
  { path: 'expense/:id',canActivate:[ExpGdGuard] ,component:ExpenseDetailComponent },
  { path: '', component:WelcomeComponent },
  { path: '**', redirectTo:'/' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
