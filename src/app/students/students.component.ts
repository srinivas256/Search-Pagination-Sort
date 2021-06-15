import { Component, OnInit } from '@angular/core';
import {StudentsService} from './students.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

   students : {id:number, name:string, class:string}[] = [];

  constructor(private studentService : StudentsService,
    private router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {

    this.students = this.studentService.getStudents();
    //console.log(this.students);
  }

}
