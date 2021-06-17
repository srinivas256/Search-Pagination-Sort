import { Component, OnInit } from '@angular/core';
import { Users } from 'src/_model/users';
import { RestService } from 'src/_service/rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  users:Users[] = [];
  firstName:any; 
  key:string = 'id';
  reverse:boolean = false;
  p:number = 1;
 

  constructor(public rs:RestService) { }
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe( response => {
      this.users = response;
    })
  }

  search(){
    if(this.firstName == ""){
      this.ngOnInit();
    }
    else{
      this.users = this.users.filter( res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }



}
