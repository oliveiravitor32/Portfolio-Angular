import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleTitleAndDescriptionComponent } from './components/article-title-and-description/article-title-and-description.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { CardTecComponent } from './components/card-tec/card-tec.component';
import { ContainerSocialMediaComponent } from './components/container-social-media/container-social-media.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		ProjectsComponent,
		HeaderComponent,
		FooterComponent,
		CardProjectComponent,
		CardTecComponent,
		ArticleTitleAndDescriptionComponent,
		ContainerSocialMediaComponent,
		PageNotFoundComponent,
		ThemeToggleComponent,
		ProfileCardComponent,
	],
	imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
