import {Component, DirectiveResolver} from 'angular2/core';

@Component({
    selector: 'profilelogin',
    template:
    `
    <div>
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username">
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password">
        </div>
        <button>Create Account</button>
    </div>
    `,
    styles:
    [`
    label {
        display: inline.block;
        width: 140px;
    }
    `]
})

export class ProfileLoginComponent
{

}