import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './ex1/my-component/my-component.component';
import { CvComponentComponent } from './ex-cv/cv-component/cv-component.component';
import { ListeComponentComponent } from './ex-cv/liste-component/liste-component.component';
import { ItemComponentComponent } from './ex-cv/item-component/item-component.component';
import { DetailComponentComponent } from './ex-cv/detail-component/detail-component.component';
import { TestComponent } from './ex-directive/test/test.component';
import { RainbowDirective } from './ex-directive/rainbow.directive';
import { TodoComponent } from './todo/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { DefaultImagePipe } from './ex-pipe/default-image.pipe';
import {PipeTestComponent} from './ex-pipe/test/test.component';
import { HomeComponent } from './home/home.component';
import { EmbaucheComponent } from './embauche/embauche-component/embauche.component';
import { HttpClientModule } from '@angular/common/http';

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
    TodoComponent,
    DefaultImagePipe,
    PipeTestComponent,
    HomeComponent,
    EmbaucheComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
