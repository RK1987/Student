import {Component, OnInit} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import {TalkerService } from './talker.service';
import {Talker} from './Talker';

@Component({
    selector: 'my-app',
    providers: [ HTTP_PROVIDERS, TalkerService],
    template: `

        Branch code			: <input [value] = "name" [disabled]="is_enabled"><br>
		Deposit collection	: <input [(ngModel)] = "depositCollection"><br>
		Debt collection		: <input [ngModel] = "deptCollection" ><br>
		<button (click)=toggleDisabledProp()>Let's toggle the the disabled property</button>
        <h1>Http and data</h1>
        <table>
            <thead>
                <tr>
                    <th>Branch Code<th>
                    <th>Deposit Collection<th>
                    <th>Debt Collection<th>
                </tr>
            </thead>
            <tbody>
            <tr *ngFor="#talker of talkers">
                <td> {{ talker.branch_code }}</td>
                <td> {{ talker.deposit_collection }}</td>
                <td> {{ talker.debt_collection }}</td>
            </tr>
            </tbody>
        </table>
    `,
    styleUrls:['app/04_Http/style.css']
})
export class AppComponent implements OnInit {
    result_string : string
    name : string
	deposit_collection : number
	debt_collection : number
	is_enabled : boolean
    talkers: Talker[]
    httpError: string
    productObj:object = {};
    constructor(private _talkerService :TalkerService){
        
    }
    ngOnInit(){
        this.name = "branch1";
		this.deposit_collection = 0;
		this.debt_collection = 0;
		this.is_enabled = false;
        this._talkerService.getVehicles().subscribe( // we subscrive to our observable
            talkers => this.talkers = talkers, // succees
            error =>  this.httpError = <any>error // error
        );        

    }
    toggleDisabledProp(){
        this.is_enabled = !this.is_enabled;
        this.productObj = {
            "branch_code": this.name,
            "deposit_collection" : this.deposit_collection,
            "debe_collection": this.debt_collection
        }
        this._talkerService.putVehicle(this.productObj).subscribe(
            result_string => this.result_string = "ok", // succees
            error =>  this.httpError = <any>error // error
        );        

    }

}