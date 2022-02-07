import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DistinctOperatorComponent } from './components/operators/distinct-operator/distinct-operator.component';
import { FilterOperatorComponent } from './components/operators/filter-operator/filter-operator.component';
import { FromOperatorComponent } from './components/operators/from-operator/from-operator.component';
import { MapOperatorComponent } from './components/operators/map-operator/map-operator.component';
import { TapOperatorComponent } from './components/operators/tap-operator/tap-operator.component';

const routes: Routes = [
    { path: '',         component: HomeComponent },
    { path: 'from',     component: FromOperatorComponent },
    { path: 'map',      component: MapOperatorComponent },
    { path: 'filter',   component: FilterOperatorComponent },
    { path: 'distinct', component: DistinctOperatorComponent },
    { path: 'tap',      component: TapOperatorComponent },
];

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