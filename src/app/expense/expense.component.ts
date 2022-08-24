import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  greetings:string='hello you!';
  checker:boolean = true;
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message:string='bye bye';

  exp1: Expense = {
    id: 1,
    name: 'Home Rent',
    amount: 20000,
    category: 'General',
    date: '20-5-2021'
  };
  exp2: Expense = {
    id: 2,
    name: 'Bread',
    amount: 20,
    category: 'product',
    date: '20-5-2022'
  };

  expenses: Expense[] =[];

  constructor() { 
    this.expenses.push(this.exp1);
    this.expenses.push(this.exp2);
  }

  ngOnInit(): void {
  }

  sayMessage() {
   this.greetings = this.message;
  }
}
