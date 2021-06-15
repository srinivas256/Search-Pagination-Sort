import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {StudentsComponent} from './students.component';
import {StudentComponent} from './student/student.component';
import{StudentsRoutingModule} from './students-routing.module';


@NgModule({
    declarations:[StudentsComponent,StudentComponent],
    imports:[CommonModule, RouterModule, StudentsRoutingModule],
    exports:[]
})
export class StudentsModule{}
