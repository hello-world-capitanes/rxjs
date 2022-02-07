import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu: MenuItem[];

  constructor(
    private menuService: MenuService,
  ) {
    this.menu = this.menuService.menu;
  }

  ngOnInit(): void {
  }

}
