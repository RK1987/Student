import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        FirstName: <input [(ngModel)] = "firstName">
		{{firstName}}
    `,
})
export class AppComponent {
	firstName: string = "Radhakrishnan"
}