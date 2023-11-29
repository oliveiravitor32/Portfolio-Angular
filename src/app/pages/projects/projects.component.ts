import { Component } from '@angular/core';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
	titleMain: string = 'Projetos';
	descriptionMain: string =
		'Está área contém alguns de meus projetos destaques.';

	imageProject_angular_pokedex: string = '../../../assets/angular-pokedex.png';
	titleProject_angular_pokedex: string = 'Angular-Pokédex';
	descriptionProject_angular_pokedex: string = 'Projeto de uma pokédex contruída com Angular e com a PokeApi(API do pokemon).';
	codeLink_angular_pokedex: string = 'https://github.com/oliveiravitor32/angular-pokedex';
	demoLink_angular_pokedex: string = 'https://angular-pokedex-oliveiravitor32.vercel.app/';

	imageProject_1: string = '../../../assets/NoteAppAngular.png';
	titleProject_1: string = 'Angular - Note App';
	descriptionProject_1: string =
		'Projeto Bloco de Notas (NoteApp) construído utilizando Angular com navegação de página única (single page application) e possibilita buscas por notas, criar, deletar e editar notas.';
	codeLink_1: string = 'https://github.com/oliveiravitor32/Note-App';
	demoLink_1: string = 'https://note-app-oliveiravitor32.vercel.app/';

	imageProject_2: string = '../../../assets/ShoppingCartReactJs.png';
	titleProject_2: string = 'React - Shopping Cart';
	descriptionProject_2: string =
		'Projeto Carrinho de Compras (Shopping Cart) construído com ReactJS utilizando a API do Mercado Livre, desenvolvido com o canal Manual do Dev no Youtube.';
	codeLink_2: string =
		'https://github.com/oliveiravitor32/shopping-cart-reactjs';
	demoLink_2: string =
		'https://shopping-cart-reactjs-oliveiravitor32.vercel.app/';

	imageProject_3: string = '../../../assets/ToDoListReactJs.png';
	titleProject_3: string = 'React - To Do List';
	descriptionProject_3: string =
		'Simples projeto de uma lista de tarefas(To Do List) utilizando ReactJS, que permite criar, concluir, editar, e também deletar tarefas.';
	codeLink_3: string = 'https://github.com/oliveiravitor32/ToDoList-ReactJS';
	demoLink_3: string =
		'https://to-do-list-react-js-oliveiravitor32.vercel.app/';

	imageProject_4: string = '../../../assets/antigoPortfolio.png';
	titleProject_4: string = 'Antigo portfólio';
	descriptionProject_4: string =
		'Antigo portfólio com página responsiva, implementações de animações via CSS e JS e com formulário funcional. Desenvolvido com o curso "Html-Css-Feliz" de Marco Bruno Dev no Youtube. ';
	codeLink_4: string = 'https://github.com/oliveiravitor32/Antigo-Portfolio';
	demoLink_4: string = 'https://oliveiravitor32.github.io/Antigo-Portfolio/';
}
