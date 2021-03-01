import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { TryComponent } from "./try/try.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      count: counterReducer
    })
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MyCounterComponent,
    TryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
