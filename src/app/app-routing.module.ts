import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProOneComponent } from './pro-one/pro-one.component'

const routes: Routes = [
  {path:'', pathMatch:'full', component:DashboardComponent },
  {path:'pro-one', component:ProOneComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
