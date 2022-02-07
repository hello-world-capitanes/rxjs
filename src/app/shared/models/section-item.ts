import { MenuItem } from "./menu-item";

export class SectionItem {
  _name: string
  _menuItems: MenuItem[];

  constructor(name: string, menu: MenuItem[]) {
    this._name = name
    this._menuItems = menu;
  }

  get name() {
    return this._name
  }

  get menuItems() {
    return this._menuItems;
  }
}
