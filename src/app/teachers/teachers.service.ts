import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() { }

   teachers = [ 
    { id: 1, name: 'Teacher1', subject: 'English' },
    { id: 2, name: 'Teacher2', subject: 'Social'},
    { id: 3, name: 'Teacher3', subject: 'Science'}
  ];

  getTeachers() {
    return this.teachers;
  }

  getTeacher(id: number) {
    const teacher = this.teachers.find(
      (s) => {
        return s.id === id;
      }
    );
    return teacher;
  }
}
