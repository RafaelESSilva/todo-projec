import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { TudoBottonDeleteAlllComponent } from './modules/components/tudo-botton-delete-alll/tudo-botton-delete-alll.component';
import { TodoInputAddItensComponent } from './modules/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './modules/components/todo-list/todo-list.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TudoBottonDeleteAlllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
