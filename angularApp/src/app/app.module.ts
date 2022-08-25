import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { PipesInAngularComponent } from './components/pipes-in-angular/pipes-in-angular.component';
import { ItalicCasePipe } from './pipes/italic-case.pipe';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { RoundBlockQuoteDirective } from './directives/round-block-quote.directive';
import { DataExchangeComponent } from './components/data-exchange/data-exchange.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { AngularBasicsComponent } from './components/angular-basics/angular-basics.component';
import { AngularIntermediateComponent } from './components/angular-intermediate/angular-intermediate.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TemplateReferenceComponent,
    StructuralDirectivesComponent,
    PipesInAngularComponent,
    ItalicCasePipe,
    AttributeDirectivesComponent,
    RoundBlockQuoteDirective,
    DataExchangeComponent,
    EditDetailsComponent,
    AngularBasicsComponent,
    AngularIntermediateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RoundBlockQuoteDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
