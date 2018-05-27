import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "detail", component: DetailComponent },
  { path: "", component: DashboardComponent },
  { path: "dashboard", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
