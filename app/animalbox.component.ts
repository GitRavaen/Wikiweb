import {Component, DirectiveResolver} from 'angular2/core'
import { AnimalboxService } from './animalbox.service';
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector: 'animalbox',
    template: `
    <svg height="500" width="1000">
        <g>
            <rect x="50" y="150" width="200" height="50" rx="5" ry="5" style="stroke: rgb(102, 102, 204);" fill="white"> Test </rect>
            <text x="65" y="170" font-family="Trebuchet MS" font-size="20" style="fill: rgb(102, 102, 204);"> Hippopotamus </text>
        </g>
        <g>
            <rect width="200" height="50" x="300" y="150" rx="5" ry="5" style="stroke: rgb(102, 102, 204);" fill="white"></rect>
            <text x="315" y="170" font-family="Trebuchet MS" font-size="20" style="fill: rgb(102, 102, 204);"> Hippopotamus </text>
        </g>
        <g>
            <rect width="200" height="50" x="550" y="150" rx="5" ry="5" style="stroke: rgb(102, 102, 204);" fill="white"></rect>
            <text x="565" y="170" font-family="Trebuchet MS" font-size="20" style="fill: rgb(102, 102, 204);"> Hippopotamus </text>
        </g>
        <g>
            <rect style="stroke: rgb(256, 256, 256);" width="500" x="150" y="120" height="5"></rect>
        </g>
        <g>
            <rect width="200" height="50" x="300" y="50" rx="5" ry="5" style="stroke: rgb(102, 102, 204);" fill="white"></rect>
            <text x="315" y="70" font-family="Trebuchet MS" font-size="20" style="fill: rgb(102, 102, 204);"> Hippopotamus </text>
        </g>
    </svg>
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