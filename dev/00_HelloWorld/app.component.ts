import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        Branch code			: <input [value] = "name" [disabled]="is_enabled"><br>
		Deposit collection	: <input [(ngModel)] = "depositCollection"><br>
		Debt collection		: <input [ngModel] = "deptCollection" ><br>
		<button (click)=toggleDisabledProp()>Let's toggle the the disabled property</button>
    `,
})
export class AppComponent implements OnInit {
	name : string
	deposite_collection : number
	debt_collection : number
	is_enabled : boolean
	

	constructor (){}
	ngOnInit() {
		this.name = "branch1";
		this.deposite_collection = 0;
		this.debt_collection = 0;
		this.is_enabled = false;
	}
	toggleDisabledProp(){
        this.is_enabled = !this.is_enabled;
    }
}