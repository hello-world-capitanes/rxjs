import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _menu: MenuItem[];

  constructor() {
    this._menu = [
      new MenuItem("from",      "/from"),
      new MenuItem("map",       "/map"),
      new MenuItem("filter",    "/filter"),
      new MenuItem("distinct",  "/distinct"),
      new MenuItem("tap",       "/tap")
    ];
  }

  get menu(): MenuItem[] {
    return this._menu;
  }

}
