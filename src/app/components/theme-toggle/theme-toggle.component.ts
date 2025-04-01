import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'app-theme-toggle',
	templateUrl: './theme-toggle.component.html',
	styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent implements OnInit {
	isDarkMode = false;

	constructor(private readonly _themeService: ThemeService) {}

	ngOnInit(): void {
		this._themeService.darkMode$.subscribe((isDark) => {
			this.isDarkMode = isDark;
		});
	}

	toggleTheme(): void {
		this._themeService.toggleTheme();
	}
}
