import { Component } from '@angular/core';
import { MenuBarLogoComponent } from "./menu-bar-logo/menu-bar-logo.component";
import { MenuBarItemComponent } from "./menu-bar-item/menu-bar-item.component";

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuBarLogoComponent, MenuBarItemComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

}
