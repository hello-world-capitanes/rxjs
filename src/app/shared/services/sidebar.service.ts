import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: "root"
})
export class SidebarService {

  private _sidebar: MatSidenav | undefined;

  constructor() { }

  public set sidebar(sidebar: MatSidenav) {
    this._sidebar = sidebar;
  }

  public open() {
      return this._sidebar?.open();
  }

  public close() {
      return this._sidebar?.close();
  }

  public toggle(): void {
      this._sidebar?.toggle();
  }

}
