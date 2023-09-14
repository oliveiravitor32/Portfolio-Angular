import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	titleIntroduction: string = 'Breve introdução sobre mim';
	descriptionIntroduction: string =
		' awodnbawuidbn aiwdbiuawbdiuaw daiuwdhaoiuwdhoiawndiuawh dawiudhawioudhaiowndiouan';

	titleSocialMedia: string = 'Entre em contato';
	descriptionSocialMedia: string = 'Você pode saber mais sobre mim em';
}
