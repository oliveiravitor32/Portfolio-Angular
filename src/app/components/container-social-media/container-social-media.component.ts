import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-container-social-media',
	templateUrl: './container-social-media.component.html',
	styleUrls: ['./container-social-media.component.css'],
})
export class ContainerSocialMediaComponent {
	@Input() primaryColor = '';
	@Input() secundaryColor = '';
}
