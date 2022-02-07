import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmptyOperatorComponent } from './components/operators/creational/empty-operator/empty-operator.component';
import { FromEventOperatorComponent } from './components/operators/creational/from-event-operator/from-event-operator.component';
import { FromOperatorComponent } from './components/operators/creational/from-operator/from-operator.component';
import { OfOperatorComponent } from './components/operators/creational/of-operator/of-operator.component';
import { DistinctOperatorComponent } from './components/operators/distinct-operator/distinct-operator.component';
import { FilterOperatorComponent } from './components/operators/filter-operator/filter-operator.component';
import { TapOperatorComponent } from './components/operators/tap-operator/tap-operator.component';
import { BufferOperatorComponent } from './components/operators/transformation/buffer-operator/buffer-operator.component';
import { ConcatMapOperatorComponent } from './components/operators/transformation/concat-map-operator/concat-map-operator.component';
import { MapOperatorComponent } from './components/operators/transformation/map-operator/map-operator.component';
import { MapToOperatorComponent } from './components/operators/transformation/map-to-operator/map-to-operator.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'from', component: FromOperatorComponent },
  { path: 'fromEvent', component: FromEventOperatorComponent },
  { path: 'of', component: OfOperatorComponent },
  { path: 'empty', component: EmptyOperatorComponent },
  { path: 'map', component: MapOperatorComponent },
  { path: 'mapTo', component: MapToOperatorComponent },
  { path: 'buffer', component: BufferOperatorComponent },
  { path: 'concatMap', component: ConcatMapOperatorComponent },
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
