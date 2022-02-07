import { Component, OnInit } from '@angular/core';
import { SectionItem } from '../../models/section-item';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  sections: SectionItem[];

  constructor(
    private menuService: MenuService,
  ) {

    this.sections = this.menuService.sections;
  }

  ngOnInit(): void {
  }

}
