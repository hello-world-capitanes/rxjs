import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarService } from './services/sidebar.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
    SidebarService,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule {}
