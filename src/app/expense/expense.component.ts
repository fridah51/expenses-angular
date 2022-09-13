import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ExpensesService} from '../Services/expenses.service';
import { Expense } from './expense';



@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ["./expense.component.css"]
})
export class ExpenseComponent implements OnInit {
  greetings:string='hello you!';
  message:string='bye bye';

  myExpenses : Expense[] = []

  getexp  = this.injectedExpensesService.getExpenses()

  showExpenses(){
    this.getexp.subscribe((data :any ) =>
     {
      this.myExpenses = data;
      console.log("this is data",data);
      
    })
  };

  formGroup = new FormGroup(
  {
    id :new FormControl(),
    name :new FormControl(""),
    category: new FormControl(""),
    amount: new FormControl(""),
    date:new FormControl("")
  });


  obj:any = {}
  emitItem(){
    this.obj = this.formGroup.value;
    this.injectedExpensesService.addExpense( this.obj )
    .subscribe((datar) =>
    {
      console.log("from datar:,", datar)
      this.myExpenses.push(datar)
      console.log("datar here...",datar)
      console.log(this.myExpenses)
    });
  }


  constructor(private injectedExpensesService: ExpensesService) {
    console.log(this.myExpenses)
    this.showExpenses()
  }
  
  ngOnInit(): void {
  }

  sayMessage() {
   this.greetings = this.message;
  }


}


