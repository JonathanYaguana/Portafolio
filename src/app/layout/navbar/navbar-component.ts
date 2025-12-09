import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
