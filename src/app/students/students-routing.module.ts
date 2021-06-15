import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentsComponent} from './students.component';
import {StudentComponent} from './student/student.component';


const routes:Routes = [
    {path:'', 
    component: StudentsComponent, 
    children: [ {path:':id', component:StudentComponent}]
    }
]

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
 })

 export class StudentsRoutingModule {}
