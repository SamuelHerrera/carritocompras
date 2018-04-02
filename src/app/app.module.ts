import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common/src/common_module';

import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { MessageService } from 'primeng/components/common/messageservice';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { GrowlModule } from 'primeng/growl';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RoutingModule } from './router/routing.module';
import { AuthGuard } from './guards/auth.guard';
import { ObservablesService } from './services/observables.service';
import { IndexComponent } from './components/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    HttpClientModule,
    RoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    MatFormFieldModule,
    DropdownModule,
    GrowlModule,
    CheckboxModule,
    SelectButtonModule,
    MatStepperModule,
    MatTableModule,
    MatDialogModule,
    TabViewModule,
    MatInputModule,
    ChartModule,
    ProgressBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYcMrK6MOhpjQ93Cg1BeN8RkGAb5KFHhc'
    })
  ],
  providers: [AuthGuard, MessageService, ObservablesService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //Awesomeness
}
