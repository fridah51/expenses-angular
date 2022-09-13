import { Injectable } from '@angular/core';
import { Expense } from '../expense/expense';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  expenseUrl:string = "http://127.0.0.1:8000"

  getExpenses(){
    return this.http.get(this.expenseUrl + "/expenses");
 };

  getOne(id:number){
    return this.http.get(this.expenseUrl + `/expenses/${id} `)
  };

  addExpense(expense:Expense): Observable<any>{
    return this.http.post(this.expenseUrl + "/expenses", expense)
  }

}
