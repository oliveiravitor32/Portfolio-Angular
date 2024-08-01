import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	titleIntroduction: string = 'Breve introdução sobre mim';
	descriptionIntroduction: string =
		'Inicialmente, expresso meus agradecimentos por acessar o meu portfólio. Permita-me, então, apresentar-me. Tenho 20 anos e sou estudante de programação desde 2022, com foco no desenvolvimento front-end. Atualmente, estou matriculado no curso de Ciências da Computação na Universidade Paulista - UNIP. Busco ativamente uma oportunidade no mercado de trabalho para aprimorar minha trajetória profissional como desenvolvedor.';

	titleSocialMedia: string = 'Entre em contato';
	descriptionSocialMedia: string = 'Você pode saber mais sobre mim em: ';
}
