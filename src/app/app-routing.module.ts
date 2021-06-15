import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'students', 
loadChildren: () => 
import("./students/students.module").then(m => m.StudentsModule)
},
{path:'teachers', 
loadChildren:() => import("./teachers/teachers.module").then(m => m.TeachersModule)
},
{path:'not-found', component:NotFoundComponent},
{path:'**', redirectTo:'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
