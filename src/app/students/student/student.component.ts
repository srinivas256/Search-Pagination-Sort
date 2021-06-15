import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { StudentsService} from '../students.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {

  student: {id:number, name:string, class:string};
  paramsSubscription:Subscription;

  constructor(private studentService : StudentsService,
    private router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {
    //const id = +this.route.snapshot.params['id'];
   // this.student = this.studentService.getStudent(id);
    this.paramsSubscription = this.route.params.subscribe(
      (params:Params) =>{
        this.student = this.studentService.getStudent(+params['id']);
      }
    )
  }
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }


}
