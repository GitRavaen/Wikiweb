import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AnimalboxComponent} from './animalbox.component';
import {ProfileLoginComponent} from './profilelogin.component';
import {HeaderComponent} from './header.component';


@Component({
    selector: 'my-app',
    template: 
    `
    <header></header>
    <div>
    <animalbox></animalbox>
    <profilelogin></profilelogin>
    </div>
    `,
    directives: [CoursesComponent, AnimalboxComponent, ProfileLoginComponent, HeaderComponent]
})
export class AppComponent { }