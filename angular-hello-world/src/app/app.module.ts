import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  // declarations states what components are “owned by” this module
  // You may have noticed that when we used ng generate, the tool automatically 
  // added our components to this declarations list
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  // imports describes which dependencies this module has
  imports: [
    BrowserModule
  ],
  // providers is used for dependency injection
  providers: [],
  // bootstrap tells Angular that when this module is used to bootstrap an app
  bootstrap: [AppComponent]
})
export class AppModule { }
