import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  private students = [ 
    { id: 1, name: 'Student1',class: '10' },
    { id: 2, name: 'Student2', class: '9'},
    { id: 3, name: 'Student3', class: '8'}
  ];

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {
    const student = this.students.find(
      (s) => {
        return s.id === id;
      }
    );
    return student;
  }
}
