import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomizationComponent } from './customization/customization.component';
import { ButtonCustomizationComponent } from './customization/element-customization/button-customization/button-customization.component';
import { ElementCustomizationComponent } from './customization/element-customization/element-customization.component';
import { DraggableFieldListComponent } from './element-list-panel/draggable-field-list/draggable-field-list.component';
import { DraggableSectionListComponent } from './element-list-panel/draggable-section-list/draggable-section-list.component';
import { ElementListPanelComponent } from './element-list-panel/element-list-panel.component';
import { FieldItemComponent } from './form-builder/field-item/field-item.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormButtonFieldComponent } from './form-builder/form-field/form-button-field/form-button-field.component';
import { FormFieldComponent } from './form-builder/form-field/form-field.component';
import { FormSectionComponent } from './form-builder/form-section/form-section.component';
import { MultipleFieldSectionComponent } from './form-builder/multiple-field-section/multiple-field-section.component';
import { SingleFieldSectionComponent } from './form-builder/single-field-section/single-field-section.component';
import { HomeComponent } from './home/home.component';
import { FormService } from './services/form.service';
import { SingleListComponent } from './tutorial/single-list/single-list.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TwoListsHorizontalComponent } from './tutorial/two-lists-horizontal/two-lists-horizontal.component';
import { TwoListsComponent } from './tutorial/two-lists/two-lists.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputCustomizationComponent } from './customization/element-customization/input-customization/input-customization.component';
import { FormInputFieldComponent } from './form-field/form-input-field/form-input-field.component';
import { FormTextareaFieldComponent } from './form-field/form-textarea-field/form-textarea-field.component';
import { TextareaCustomizationComponent } from './customization/element-customization/textarea-customization/textarea-customization.component';
import { FormCheckboxFieldComponent } from './form-builder/form-field/form-checkbox-field/form-checkbox-field.component';
import { CheckboxCustomizationComponent } from './customization/element-customization/checkbox-customization/checkbox-customization.component';
import { FormTextFieldComponent } from './form-builder/form-field/form-text-field/form-text-field.component';
import { TextCustomizationComponent } from './customization/element-customization/text-customization/text-customization.component';

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
    FormCheckboxFieldComponent,
    CheckboxCustomizationComponent,
    FormTextFieldComponent,
    TextCustomizationComponent,
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
