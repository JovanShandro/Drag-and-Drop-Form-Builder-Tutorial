import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleListComponent } from './single-list/single-list.component';
import { TwoListsComponent } from './two-lists/two-lists.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TwoListsHorizontalComponent } from './two-lists-horizontal/two-lists-horizontal.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { CustomizationComponent } from './customization/customization.component';
import { FieldItemComponent } from './field-item/field-item.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementListPanelComponent } from './element-list-panel/element-list-panel.component';
import { FormService } from './form.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormSectionComponent } from './form-section/form-section.component';
import { SingleFieldSectionComponent } from './single-field-section/single-field-section.component';
import { DoubleFieldSectionComponent } from './double-field-section/double-field-section.component';
import { TripleFieldSectionComponent } from './triple-field-section/triple-field-section.component';
import { QuadrupleFieldSectionComponent } from './quadruple-field-section/quadruple-field-section.component';
import { OneToTwoFieldSectionComponent } from './one-to-two-field-section/one-to-two-field-section.component';
import { TwoToOneFieldSectionComponent } from './two-to-one-field-section/two-to-one-field-section.component';
import { FormFieldComponent } from './form-field/form-field.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tutorial', component: TutorialComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SingleListComponent,
    TwoListsComponent,
    TutorialComponent,
    HomeComponent,
    TwoListsHorizontalComponent,
    FormBuilderComponent,
    CustomizationComponent,
    FieldItemComponent,
    ElementListPanelComponent,
    FormSectionComponent,
    SingleFieldSectionComponent,
    DoubleFieldSectionComponent,
    TripleFieldSectionComponent,
    QuadrupleFieldSectionComponent,
    OneToTwoFieldSectionComponent,
    TwoToOneFieldSectionComponent,
    FormFieldComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
