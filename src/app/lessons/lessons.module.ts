import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AllLessonsComponent} from './all-lessons/all-lessons.component';
import {LessonViewerComponent} from './lesson-viewer/lesson-viewer.component';

const routeConfig: Routes = [
  {
    path: 'lessons',
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: AllLessonsComponent
          },
          {
            path: 'viewer/:id',
            component: LessonViewerComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig)
  ],
  exports: [
    RouterModule,

  ],
  declarations: [AllLessonsComponent, LessonViewerComponent]
})
export class LessonsModule { }
