import {Component, DirectiveResolver} from 'angular2/core'
import { AnimalboxService } from './animalbox.service';
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector: 'animalbox',
    template: `
        <rect width="200" height="50" x="-100" y="-25" rx="5" ry="5" style="stroke: rgb(102, 102, 204);"></rect>
        `,
        providers: [AnimalboxService],
})
export class AnimalboxComponent {
    title = "The title of courses page";
    isActive= false;
    animalbox;
    onSave($event) {
        console.log("Test", $event)
    }
    onDivClicked() {
        console.log("div")
    }

    constructor(animalboxService: AnimalboxService){
        this.animalbox = animalboxService.getAnimalbox();
    }
}