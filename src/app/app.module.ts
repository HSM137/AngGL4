import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './ex1/my-component/my-component.component';
import { CvComponentComponent } from './ex2/cv-component/cv-component.component';
import { ListeComponentComponent } from './ex2/liste-component/liste-component.component';
import { ItemComponentComponent } from './ex2/item-component/item-component.component';
import { DetailComponentComponent } from './ex2/detail-component/detail-component.component';
import { TestComponent } from './ex-directive/test/test.component';
import { RainbowDirective } from './ex-directive/rainbow.directive';
import { TodoComponent } from './todo/todo/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    CvComponentComponent,
    ListeComponentComponent,
    ItemComponentComponent,
    DetailComponentComponent,
    TestComponent,
    RainbowDirective,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
