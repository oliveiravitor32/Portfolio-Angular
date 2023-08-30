import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { CardTecComponent } from './components/card-tec/card-tec.component';
import { ArticleTitleAndDescriptionComponent } from './components/article-title-and-description/article-title-and-description.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { ContainerSocialMediaComponent } from './components/container-social-media/container-social-media.component';

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
    GreetingComponent,
    CardImageComponent,
    ContainerSocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
