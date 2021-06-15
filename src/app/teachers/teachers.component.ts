import { Component, OnInit } from '@angular/core';
import {TeachersService} from './teachers.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

   teachers : {id:number, name:string, subject:string}[] = [];

  constructor(private teachersService : TeachersService,
    private router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {

    this.teachers = this.teachersService.getTeachers();
    //console.log(this.teachers);
  }

}
