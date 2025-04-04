import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleTitleAndDescriptionComponent } from './article-title-and-description/article-title-and-description.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { CardTecComponent } from './card-tec/card-tec.component';
import { ContainerSocialMediaComponent } from './container-social-media/container-social-media.component';
import { ExperienceTabsComponent } from './experience-tabs/experience-tabs.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { TimelineItemComponent } from './timeline/timeline-item/timeline-item.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
	declarations: [
		CardProjectComponent,
		CardTecComponent,
		ArticleTitleAndDescriptionComponent,
		ContainerSocialMediaComponent,
		ThemeToggleComponent,
		ProfileCardComponent,
		SocialLinksComponent,
		TimelineComponent,
		TimelineItemComponent,
		ExperienceTabsComponent,
	],
	imports: [CommonModule, NgOptimizedImage],
	exports: [
		CardProjectComponent,
		CardTecComponent,
		ArticleTitleAndDescriptionComponent,
		ContainerSocialMediaComponent,
		ThemeToggleComponent,
		ProfileCardComponent,
		ExperienceTabsComponent,
	],
})
export class SharedComponentsModule {}
