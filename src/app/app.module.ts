import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleListComponent } from './single-list/single-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TwoListsComponent } from './two-lists/two-lists.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TwoListsHorizontalComponent } from './two-lists-horizontal/two-lists-horizontal.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { CustomizationComponent } from './customization/customization.component';
import { FieldItemComponent } from './field-item/field-item.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementListPanelComponent } from './element-list-panel/element-list-panel.component';
import { FormService } from './form.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormSectionComponent } from './form-section/form-section.component';
import { SingleFieldSectionComponent } from './single-field-section/single-field-section.component';
import { MultipleFieldSectionComponent } from './multiple-field-section/multiple-field-section.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { DraggableSectionListComponent } from './element-list-panel/draggable-section-list/draggable-section-list.component';
import { DraggableFieldListComponent } from './element-list-panel/draggable-field-list/draggable-field-list.component';
import { ElementCustomizationComponent } from './customization/element-customization/element-customization.component';
import { ButtonCustomizationComponent } from './customization/element-customization/button-customization/button-customization.component';
import { FormButtonFieldComponent } from './form-field/form-button-field/form-button-field.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputCustomizationComponent } from './customization/element-customization/input-customization/input-customization.component';
import { FormInputFieldComponent } from './form-field/form-input-field/form-input-field.component';
import { FormTextareaFieldComponent } from './form-field/form-textarea-field/form-textarea-field.component';
import { TextareaCustomizationComponent } from './customization/element-customization/textarea-customization/textarea-customization.component';

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
    MultipleFieldSectionComponent,
    FormFieldComponent,
    DraggableSectionListComponent,
    DraggableFieldListComponent,
    ElementCustomizationComponent,
    ButtonCustomizationComponent,
    FormButtonFieldComponent,
    InputCustomizationComponent,
    FormInputFieldComponent,
    FormTextareaFieldComponent,
    TextareaCustomizationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    MatButtonModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
