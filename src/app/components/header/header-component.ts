import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
