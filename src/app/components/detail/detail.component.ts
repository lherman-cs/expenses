import { Component, OnInit } from "@angular/core";
import { FormComponent } from "./form/form.component";

export interface Expense {
  date: Date;
  location: string;
  description: string;
  amount: number;
}

@Component({
  selector: "detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
