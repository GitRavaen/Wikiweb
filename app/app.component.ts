import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AnimalboxComponent} from './animalbox.component';
import {ProfileLoginComponent} from './profilelogin.component';

@Component({
    selector: 'my-app',
    template: 
    `
    <h1>Wikiweb</h1>
    <div>
    <profilelogin></profilelogin>
    </div>
    `,
    directives: [CoursesComponent, AnimalboxComponent, ProfileLoginComponent]
})
export class AppComponent { }