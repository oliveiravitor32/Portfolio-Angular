import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
})
export class AboutComponent {
	titleAbout: string = 'Sobre mim';
	descriptionAbout: string =
		'Desde 2022, tenho dedicado minha trajetória acadêmica ao estudo da programação, concentrando-me no desenvolvimento front-end. Adquiri experiência em tecnologias essenciais para o desenvolvimento web por meio de cursos online, projetos registrados em meu repositório GitHub e, de maneira complementar, durante meu ensino superior, onde atualmente estou cursando Ciência da Computação.';
}
