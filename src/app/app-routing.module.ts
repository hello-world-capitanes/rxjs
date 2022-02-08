import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmptyOperatorComponent } from './components/operators/creational/empty-operator/empty-operator.component';
import { FromEventOperatorComponent } from './components/operators/creational/from-event-operator/from-event-operator.component';
import { FromOperatorComponent } from './components/operators/creational/from-operator/from-operator.component';
import { OfOperatorComponent } from './components/operators/creational/of-operator/of-operator.component';
import { DebounceTimeOperatorComponent } from './components/operators/filtering/debounce-time-operator/debounce-time-operator.component';
import { DistinctOperatorComponent } from './components/operators/filtering/distinct-operator/distinct-operator.component';
import { FilterOperatorComponent } from './components/operators/filtering/filter-operator/filter-operator.component';
import { FirstOperatorComponent } from './components/operators/filtering/first-operator/first-operator.component';
import { LastOperatorComponent } from './components/operators/filtering/last-operator/last-operator.component';
import { TakeOperatorComponent } from './components/operators/filtering/take-operator/take-operator.component';
import { TapOperatorComponent } from './components/operators/tap-operator/tap-operator.component';
import { BufferOperatorComponent } from './components/operators/transformation/buffer-operator/buffer-operator.component';
import { ConcatMapOperatorComponent } from './components/operators/transformation/concat-map-operator/concat-map-operator.component';
import { MapOperatorComponent } from './components/operators/transformation/map-operator/map-operator.component';
import { MapToOperatorComponent } from './components/operators/transformation/map-to-operator/map-to-operator.component';
import { MergeMapOperatorComponent } from './components/operators/transformation/merge-map-operator/merge-map-operator.component';
import { PluckOperatorComponent } from './components/operators/transformation/pluck-operator/pluck-operator.component';
import { ScanOperatorComponent } from './components/operators/transformation/scan-operator/scan-operator.component';
import { SwitchMapOperatorComponent } from './components/operators/transformation/switch-map-operator/switch-map-operator.component';


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
  { path: 'mergeMap', component: MergeMapOperatorComponent },
  { path: 'switchMap', component: SwitchMapOperatorComponent },
  { path: 'scan', component: ScanOperatorComponent },
  { path: 'pluck', component: PluckOperatorComponent },


  { path: 'filter', component: FilterOperatorComponent },
  { path: 'debounceTime', component: DebounceTimeOperatorComponent },
  { path: 'distinct', component: DistinctOperatorComponent },
  { path: 'first', component: FirstOperatorComponent },
  { path: 'last', component: LastOperatorComponent },
  { path: 'take', component: TakeOperatorComponent },



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
