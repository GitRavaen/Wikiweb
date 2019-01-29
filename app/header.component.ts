import {Component, DirectiveResolver} from 'angular2/core'
import { AnimalboxService } from './animalbox.service';
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector: 'header',
    template: `
    <div id="header">

			<ul class="vertical border">
				<li style="float:left"><a class="title">Wiki Web</a></li>
				<li><a class="indent"></a></li>
				<li><a href="">The Web</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="home.html">Home</a></li>
			</ul>	
		</div>
        `,
        styleUrls: ['app/header.component.css'],
})
export class HeaderComponent {
    title = "The title of courses page";
    isActive= false;
    header;
    onSave($event) {
        console.log("Test", $event)
    }
    onDivClicked() {
        console.log("div")
    }
/*
    constructor(headerService: HeaderService){
        this.header = headerService.getHeaderbox();
        */

}