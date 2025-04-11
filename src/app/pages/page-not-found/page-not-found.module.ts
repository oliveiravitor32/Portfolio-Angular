import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
	{ path: '', component: PageNotFoundComponent }, // Default route
];

@NgModule({
	declarations: [PageNotFoundComponent],
	imports: [RouterModule.forChild(routes)],
})
export class PageNotFoundModule {}
