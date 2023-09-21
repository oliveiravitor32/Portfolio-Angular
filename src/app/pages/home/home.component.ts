import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	titleIntroduction: string = 'Breve introdução sobre mim';
	descriptionIntroduction: string =
		' Primeiramente obrigado por adentrar a meu portfólio, agora gostaria de me apresentar, sou estudante de programação desde 2022 focado em desenvolvimento front-end, atualmente estou cursando Ciências da Computação na Universidade Paulista - Unip e busco uma oportunidade no mercado para evoluir na carreira como desenvolvedor.';

	titleSocialMedia: string = 'Entre em contato';
	descriptionSocialMedia: string = 'Você pode saber mais sobre mim em: ';

	primaryColor: string = '';
	secundaryColor: string = '';
}
