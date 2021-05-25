import { SecondComponent } from './components/secondComponent/secondComponent.component';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component'; 
import { FirstComponent } from './components/firstComponent/firstComponent.component';

@NgModule({ 
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent
    ], 
    imports: [CommonModule, BrowserModule], 
    exports: [], 
    providers: [], 
    bootstrap: [AppComponent] 
}) 

export class AppModule { }