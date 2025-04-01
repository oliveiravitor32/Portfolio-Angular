import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private renderer: Renderer2;
	private darkMode = new BehaviorSubject<boolean>(false);
	public darkMode$ = this.darkMode.asObservable();

	constructor(rendererFactory: RendererFactory2) {
		this.renderer = rendererFactory.createRenderer(null, null);
		this.initTheme();
	}

	private initTheme(): void {
		// Check if user has already selected a theme
		const storedTheme = localStorage.getItem('theme');
		const prefersDark =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;

		// Set initial theme based on stored preference or system preference
		if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
			this.setDarkMode(true);
		} else {
			this.setDarkMode(false);
		}
	}

	toggleTheme(): void {
		this.setDarkMode(!this.darkMode.value);
	}

	setDarkMode(isDark: boolean): void {
		this.darkMode.next(isDark);

		if (isDark) {
			document.body.classList.add('dark-theme');
			document.body.classList.remove('light-theme');
			localStorage.setItem('theme', 'dark');
		} else {
			document.body.classList.add('light-theme');
			document.body.classList.remove('dark-theme');
			localStorage.setItem('theme', 'light');
		}
	}

	isDarkMode(): boolean {
		return this.darkMode.value;
	}
}
