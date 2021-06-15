import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TeachersComponent} from './teachers.component';
import {TeacherComponent} from './teacher/teacher.component';
import{TeachersRoutingModule} from './teachers-routing.module';


@NgModule({
    declarations:[TeachersComponent,TeacherComponent],
    imports:[CommonModule, RouterModule, TeachersRoutingModule],
    exports:[]
})
export class TeachersModule{}
