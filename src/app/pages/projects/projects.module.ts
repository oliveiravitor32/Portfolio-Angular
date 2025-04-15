import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
	{ path: '', component: ProjectsComponent }, // Default route
];

@NgModule({
	declarations: [ProjectsComponent],
	imports: [SharedComponentsModule, RouterModule.forChild(routes)],
})
export class ProjectsModule {}
