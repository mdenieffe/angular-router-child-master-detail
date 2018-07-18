import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-lessons',
  templateUrl: './all-lessons.component.html',
  styleUrls: ['./all-lessons.component.css']
})
export class AllLessonsComponent implements OnInit {

  lessons = [
    {title: 'NGRX in Action', id: 1},
    {title: 'Angular 2', id: 2},
    {title: 'Micro-services in action', id: 3},
    {title: 'Javascript: The Good Parts', id: 4}
  ];

  constructor() { }

  ngOnInit() {
  }

}
