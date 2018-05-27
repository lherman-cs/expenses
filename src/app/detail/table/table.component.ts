import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { Expense } from "../detail.component";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "expenses-detail-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  expenses: Observable<Expense[]>;
  displayedColumns: string[] = ["date", "location", "description", "amount"];

  constructor(private db: AngularFirestore) {
    this.expenses = <Observable<Expense[]>>db
      .collection("expenses")
      .valueChanges();
  }
  amountFormatter(amount: number): string {
    return amount.toLocaleString("en", {
      style: "currency",
      currency: "USD"
    });
  }

  ngOnInit() {}
}
