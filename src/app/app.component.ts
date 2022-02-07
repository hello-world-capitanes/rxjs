import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from "@angular/platform-browser";
import { SidebarService } from './shared/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'operartors-rxjs-example';

  @ViewChild('sidebar') public sidebar?: MatSidenav;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private sidenavService: SidebarService
  ) {
    this.matIconRegistry.addSvgIcon(
      "helloWorld",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/logo-hello-world.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "angular",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/angular.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github.svg")
    );
  }

  ngAfterViewInit(): void {
    if (!!this.sidebar) {
      this.sidenavService.sidebar = this.sidebar;
    }
  }

}
