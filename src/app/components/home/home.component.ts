import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menu: MenuItem[];

  constructor(
    private menuService: MenuService,
  ) {
    this.menu = this.menuService.menu;
  }

  ngOnInit(): void {
  }

}
