import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'portfolio';

	constructor(private themeService: ThemeService) {}

	ngOnInit(): void {
		// Theme service will initialize the theme based on user preference
	}
}
