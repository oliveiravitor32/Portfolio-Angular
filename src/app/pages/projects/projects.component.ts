import { Component } from '@angular/core';
import { IProjectData } from 'src/app/interfaces/project-data.interface';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
	titleMain: string = 'Projetos';
	descriptionMain: string =
		'Esta área apresenta alguns dos meus projetos mais elaborados.';

	// project: IProjectData = {
	// 	img_url: ,
	// 	title: ,
	// 	description:
	// 		,
	// 	code_url: ,
	// 	demo_url: ,
	// };

	project_game_library: IProjectData = {
		img_url: '../../../assets/project_game_library.png',
		title: 'Biblioteca de jogos - Angular',
		description:
			'O projeto Biblioteca de Jogos é um website desenvolvido em Angular 17, integrado com a API RAWG Video Games Database.',
		code_url: 'https://github.com/oliveiravitor32/Biblioteca_de_Jogos-Angular',
		demo_url:
			'https://biblioteca-de-jogos-angular-oliveiravitor32s-projects.vercel.app/',
	};

	project_pokedex_angular: IProjectData = {
		img_url: '../../../assets/project_pokedex_angular.png',
		title: 'Pokédex - Angular',
		description:
			'Projeto de uma pokédex contruída com Angular e com a PokeApi(API do pokemon).',
		code_url: 'https://github.com/oliveiravitor32/Pokedex-Angular',
		demo_url: 'https://angular-pokedex-umber.vercel.app/',
	};

	project_note_app_angular: IProjectData = {
		img_url: '../../../assets/project_note_app_angular.png',
		title: 'Lista de tarefas - Angular',
		description:
			'Projeto Bloco de Notas (NoteApp) construído utilizando Angular com navegação de página única (single page application) e possibilita buscas por notas, criar, deletar e editar notas.',
		code_url: 'https://github.com/oliveiravitor32/Lista_de_tarefas-Angular',
		demo_url: 'https://note-app-oliveiravitor32.vercel.app/',
	};

	project_shopping_cart_react: IProjectData = {
		img_url: '../../../assets/project_shopping_cart_react.png',
		title: 'Carrinho de compras - React',
		description:
			'Projeto Carrinho de Compras (Shopping Cart) construído com ReactJS utilizando a API do Mercado Livre, desenvolvido com o canal Manual do Dev no Youtube.',
		code_url: 'https://github.com/oliveiravitor32/Carrinho_de_compras-React',
		demo_url: 'https://shopping-cart-reactjs-oliveiravitor32.vercel.app/',
	};

	project_to_do_list_react: IProjectData = {
		img_url: '../../../assets/project_to_do_list_react.png',
		title: 'Lista de tarefas - React',
		description:
			'Simples projeto de uma lista de tarefas(To Do List) utilizando ReactJS, que permite criar, concluir, editar, e também deletar tarefas.',
		code_url: 'https://github.com/oliveiravitor32/Lista_de_tarefas-React',
		demo_url: 'https://to-do-list-react-js-oliveiravitor32.vercel.app/',
	};

	project_old_portfolio: IProjectData = {
		img_url: '../../../assets/project_old_porfolio.png',
		title: 'Antigo portfólio',
		description:
			'Meu antigo portfólio com página responsiva, implementações de animações via CSS e JS e com formulário funcional. Desenvolvido com o curso "Html-Css-Feliz" de Marco Bruno Dev no Youtube. ',
		code_url: 'https://github.com/oliveiravitor32/Antigo_Portfolio',
		demo_url: 'https://oliveiravitor32.github.io/Antigo_Portfolio/',
	};
}
