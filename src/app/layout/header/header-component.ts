import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header-component',
  imports: [],
  templateUrl: './header-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent { }
