import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar-component";

@Component({
  selector: 'header-component',
  imports: [NavbarComponent],
  templateUrl: './header-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent { }
