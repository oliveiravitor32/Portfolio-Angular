import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleTitleAndDescriptionComponent } from './article-title-and-description/article-title-and-description.component';
import { ExperienceTabsComponent } from './experience-tabs/experience-tabs.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { TimelineItemComponent } from './timeline/timeline-item/timeline-item.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
	declarations: [
		ArticleTitleAndDescriptionComponent,
		ThemeToggleComponent,
		ProfileCardComponent,
		SocialLinksComponent,
		TimelineComponent,
		TimelineItemComponent,
		ExperienceTabsComponent,
		MyProjectsComponent,
		FeaturedProjectsComponent,
	],
	imports: [CommonModule, NgOptimizedImage, RouterModule],
	exports: [
		ArticleTitleAndDescriptionComponent,
		ThemeToggleComponent,
		ProfileCardComponent,
		ExperienceTabsComponent,
		SocialLinksComponent,
		FeaturedProjectsComponent,
		MyProjectsComponent,
	],
})
export class SharedComponentsModule {}
