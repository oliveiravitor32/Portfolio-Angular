import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleTitleAndDescriptionComponent } from './article-title-and-description/article-title-and-description.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { CardTecComponent } from './card-tec/card-tec.component';
import { ContainerSocialMediaComponent } from './container-social-media/container-social-media.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
	declarations: [
		CardProjectComponent,
		CardTecComponent,
		ArticleTitleAndDescriptionComponent,
		ContainerSocialMediaComponent,
		ThemeToggleComponent,
		ProfileCardComponent,
	],
	imports: [CommonModule, NgOptimizedImage],
	exports: [
		CardProjectComponent,
		CardTecComponent,
		ArticleTitleAndDescriptionComponent,
		ContainerSocialMediaComponent,
		ThemeToggleComponent,
		ProfileCardComponent,
	],
})
export class SharedComponentsModule {}
