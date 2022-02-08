import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmptyOperatorComponent } from './components/operators/creational/empty-operator/empty-operator.component';
import { FromEventOperatorComponent } from './components/operators/creational/from-event-operator/from-event-operator.component';
import { FromOperatorComponent } from './components/operators/creational/from-operator/from-operator.component';
import { OfOperatorComponent } from './components/operators/creational/of-operator/of-operator.component';
import { DebounceTimeOperatorComponent } from './components/operators/filtering/debounce-time-operator/debounce-time-operator.component';
import { DistinctOperatorComponent } from './components/operators/filtering/distinct-operator/distinct-operator.component';
import { FilterOperatorComponent } from './components/operators/filtering/filter-operator/filter-operator.component';
import { TapOperatorComponent } from './components/operators/tap-operator/tap-operator.component';
import { BufferOperatorComponent } from './components/operators/transformation/buffer-operator/buffer-operator.component';
import { ConcatMapOperatorComponent } from './components/operators/transformation/concat-map-operator/concat-map-operator.component';
import { MapOperatorComponent } from './components/operators/transformation/map-operator/map-operator.component';
import { MapToOperatorComponent } from './components/operators/transformation/map-to-operator/map-to-operator.component';
import { MergeMapOperatorComponent } from './components/operators/transformation/merge-map-operator/merge-map-operator.component';
import { PluckOperatorComponent } from './components/operators/transformation/pluck-operator/pluck-operator.component';
import { ScanOperatorComponent } from './components/operators/transformation/scan-operator/scan-operator.component';
import { SwitchMapOperatorComponent } from './components/operators/transformation/switch-map-operator/switch-map-operator.component';
import { SharedModule } from './shared/shared.module';
import { FirstOperatorComponent } from './components/operators/filtering/first-operator/first-operator.component';
import { LastOperatorComponent } from './components/operators/filtering/last-operator/last-operator.component';
import { TakeOperatorComponent } from './components/operators/filtering/take-operator/take-operator.component';
import { ThrottleTimeOperatorComponent } from './components/operators/filtering/throttle-time-operator/throttle-time-operator.component';
import { ConcatOperatorComponent } from './components/operators/combination/concat-operator/concat-operator.component';
import { ConcatAllOperatorComponent } from './components/operators/combination/concat-all-operator/concat-all-operator.component';
import { CombineLatestOperatorComponent } from './components/operators/combination/combine-latest-operator/combine-latest-operator.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FromOperatorComponent,
    MapOperatorComponent,
    FilterOperatorComponent,
    DistinctOperatorComponent,
    TapOperatorComponent,
    OfOperatorComponent,
    EmptyOperatorComponent,
    FromEventOperatorComponent,
    MapToOperatorComponent,
    BufferOperatorComponent,
    ConcatMapOperatorComponent,
    MergeMapOperatorComponent,
    SwitchMapOperatorComponent,
    ScanOperatorComponent,
    PluckOperatorComponent,
    DebounceTimeOperatorComponent,
    FirstOperatorComponent,
    LastOperatorComponent,
    TakeOperatorComponent,
    ThrottleTimeOperatorComponent,
    ConcatOperatorComponent,
    ConcatAllOperatorComponent,
    CombineLatestOperatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,


    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
