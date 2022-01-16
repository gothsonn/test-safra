import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicDatailComponent } from './comic-datail/comic-datail.component';
import { ComicListComponent } from './comic-list/comic-list.component';


@NgModule({
  declarations: [
    ComicDatailComponent,
    ComicListComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
