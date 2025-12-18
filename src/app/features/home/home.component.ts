import { Component } from '@angular/core';

import HeaderComponent from '@shared/components/header/header-component';
import FooterComponent from '@shared/components/footer/footer-component';

import AboutComponent from '@features/about/about.component';
import SkillsComponent from '@features/skills/skills-component';
import ProjectsComponent from '@features/projects/projects.component';
import ContactComponent from '@features/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
})
export default class HomeComponent {

}
