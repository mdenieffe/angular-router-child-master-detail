import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lesson-viewer',
  templateUrl: './lesson-viewer.component.html',
  styleUrls: ['./lesson-viewer.component.css']
})
export class LessonViewerComponent implements OnInit {

  url: string;

  constructor(private router: Router) {
    console.log(`LessonViewer Constructor`);
    this.url = this.router.routerState.snapshot.url;
  }

  ngOnInit() {
  }

}
