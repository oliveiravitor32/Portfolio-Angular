import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	isMobileMenuOpen: boolean = false;

	onToggleMobileMenu() {
		this.isMobileMenuOpen = !this.isMobileMenuOpen;
	}

	constructor(private readonly router: Router) {}

	ngOnInit(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				// fecha menu mobile quando ocorrer navegação de rota
				this.isMobileMenuOpen = false;
			}
		});
	}
}
