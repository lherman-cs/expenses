import { Component, OnInit, Type } from "@angular/core";
import { Expense } from "../detail.component";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "detail-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  private expensesCollection: AngularFirestoreCollection<Expense>;
  expense: Expense;

  constructor(private db: AngularFirestore, private snackBar: MatSnackBar) {}
  addExpense() {
    this.expensesCollection.add(this.expense);
    this.snackBar.open("Submitted!");
    this.reset();
    setInterval(() => this.snackBar.dismiss(), 1000);
  }
  reset() {
    this.expense = {
      date: new Date(),
      location: "",
      description: "",
      amount: 0.0
    };
  }

  ngOnInit() {
    this.expensesCollection = this.db.collection("expenses");
    this.reset();
  }
}
