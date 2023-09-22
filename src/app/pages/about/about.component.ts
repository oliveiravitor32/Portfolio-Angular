import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
})
export class AboutComponent {
	titleAbout: string = 'título';
	descriptionAbout: string = 'descrição';

	cardStars_1: number = 4;
	cardTitle_1: string = 'HTML5';
	cardImage_1: string = '../../../assets/html5.svg';

	cardStars_2: number = 3;
	cardTitle_2: string = 'CSS3';
	cardImage_2: string = '../../../assets/css3.svg';

	cardStars_3: number = 3;
	cardTitle_3: string = 'JavaScript';
	cardImage_3: string = '../../../assets/javascript.svg';

	cardStars_4: number = 2;
	cardTitle_4: string = 'TypeScript';
	cardImage_4: string = '../../../assets/typescript.svg';

	cardStars_5: number = 2;
	cardTitle_5: string = 'NodeJS';
	cardImage_5: string = '../../../assets/nodejs.svg';

	cardStars_6: number = 2;
	cardTitle_6: string = 'Angular';
	cardImage_6: string = '../../../assets/angular.svg';

	cardStars_7: number = 1;
	cardTitle_7: string = 'React';
	cardImage_7: string = '../../../assets/react.svg';
}
