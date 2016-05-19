import {Component} from 'angular2/core';

@Component({
	selector: 'hallo',
	template: `
		<h1>Hello {{name}}</h1>
		<button (click)="onClickHandler()">Change me</button>
	`
})

export class Hello{
	name : string;
	constructor() {
		this.name = 'Brother';
	}

	onClickHandler() {
		this.name = 'Changed';
	}
}