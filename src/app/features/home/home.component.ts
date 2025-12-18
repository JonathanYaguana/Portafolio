import { Component } from '@angular/core';
import HeaderComponent from '../../layout/header/header-component';
import { FooterComponent } from "../../layout/footer/footer-component";
import AboutComponent from '../about/about.component';
import SkillsComponent from '../skills/skills-component';
import ProjectsComponent from '../projects/projects.component';
import ContactComponent from '../contact/contact.component';

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
