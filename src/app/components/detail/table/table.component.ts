import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { Expense } from "../detail.component";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "detail-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  expenses: Observable<Expense[]>;
  displayedColumns: string[] = ["date", "location", "description", "amount"];

  constructor(private db: AngularFirestore) {}
  ngOnInit() {
    this.expenses = <Observable<Expense[]>>(
      this.db.collection("expenses").valueChanges()
    );
  }
}
