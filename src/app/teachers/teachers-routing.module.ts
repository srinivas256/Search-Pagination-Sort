import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeachersComponent} from './teachers.component';
import {TeacherComponent} from './teacher/teacher.component';


const routes:Routes = [
    {path:'', 
    component: TeachersComponent, 
    children: [ {path:':id', component:TeacherComponent}]
    }
]

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
 })

 export class TeachersRoutingModule {}
