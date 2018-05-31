import { Component, OnInit, Input } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Expense } from "../../detail/detail.component";

@Component({
  selector: "dashboard-piechart",
  templateUrl: "./piechart.component.html",
  styleUrls: ["./piechart.component.scss"]
})
export class PiechartComponent implements OnInit {
  // data: Object[] = [
  //   {
  //     name: "Expenses",
  //     value: 200
  //   },
  //   {
  //     name: "Budget",
  //     value: 5700
  //   }
  // ];
  data: Object[];
  colorScheme = {
    domain: ["#8B0000", "#8B008B"]
  };

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.db
      .collection("expenses")
      .valueChanges()
      .subscribe((values: Expense[]) => {
        let sum = 0;
        for (let e of values) sum += e.amount;

        this.data = [
          {
            name: "Expenses",
            value: sum
          },
          {
            name: "Budget",
            value: 5700 - sum
          }
        ];
      });
  }
}
