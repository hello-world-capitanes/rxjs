import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmptyOperatorComponent } from './components/operators/creational/empty-operator/empty-operator.component';
import { FromEventOperatorComponent } from './components/operators/creational/from-event-operator/from-event-operator.component';
import { FromOperatorComponent } from './components/operators/creational/from-operator/from-operator.component';
import { OfOperatorComponent } from './components/operators/creational/of-operator/of-operator.component';
import { DistinctOperatorComponent } from './components/operators/distinct-operator/distinct-operator.component';
import { FilterOperatorComponent } from './components/operators/filter-operator/filter-operator.component';
import { MapOperatorComponent } from './components/operators/map-operator/map-operator.component';
import { TapOperatorComponent } from './components/operators/tap-operator/tap-operator.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'from', component: FromOperatorComponent },
  { path: 'fromEvent', component: FromEventOperatorComponent },
  { path: 'of', component: OfOperatorComponent },
  { path: 'empty', component: EmptyOperatorComponent },
  { path: 'map', component: MapOperatorComponent },
  { path: 'filter', component: FilterOperatorComponent },
  { path: 'distinct', component: DistinctOperatorComponent },
  { path: 'tap', component: TapOperatorComponent }
]

// configures NgModule imports and exports
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
