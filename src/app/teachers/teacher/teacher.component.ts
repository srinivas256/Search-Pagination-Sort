import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { TeachersService} from '../teachers.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit, OnDestroy {

  teacher: {id:number, name:string, subject:string};
  paramsSubscription:Subscription;

  constructor(private teacherService : TeachersService,
    private router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {
    //const id = +this.route.snapshot.params['id'];
   // this.student = this.studentService.getStudent(id);
    this.paramsSubscription = this.route.params.subscribe(
      (params:Params) =>{
        this.teacher = this.teacherService.getTeacher(+params['id']);
      }
    )
  }
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }


}
