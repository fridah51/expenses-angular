import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense/expense';
import { ExpensesService } from '../Services/expenses.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {


  constructor(private injService:ExpensesService , private route: ActivatedRoute, private router:Router) {
   }

  pageTitle:string = 'Expense Details ';

  myExpense:any = {};


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}` ;

    this.injService.getOne(id).subscribe((item:any) =>
    {
      this.myExpense = item;
      console.log(item);
    })
  };


  onBack():void{
    this.router.navigate(['/expense']);
  };
}


