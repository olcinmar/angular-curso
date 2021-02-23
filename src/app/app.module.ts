import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeoresModules } from './heroes/heroes.module';
import { ContadorModules } from './contadores/contador.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeoresModules,
    ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
