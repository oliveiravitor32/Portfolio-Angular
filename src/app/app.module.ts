import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedComponentsModule } from './components/shared-components.module';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		HeaderComponent,
		FooterComponent,
	],
	imports: [BrowserModule, AppRoutingModule, SharedComponentsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
