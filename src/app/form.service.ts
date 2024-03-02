import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

export enum ButtonStyle {
  Flat = 'flat',
  Raised = 'raised',
  Stroked = 'stroked',
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

export enum ButtonWidth {
  Auto = 'auto',
  FullWidth = 'full-width',
  FixedSize = 'fixed-size',
}

export enum Alignment {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum TextAlignment {
  Top = 'top',
  Center = 'center',
  Bottom = 'bottom',
}

export enum Font {
  Arial = 'Arial',
  Verdana = 'Verdana',
  Tahoma = 'Tahoma',
  TimesNewRoman = 'Times New Roman',
  Georgia = 'Georgia',
  CourierNew = 'Courier New',
  LucidaConsole = 'Lucida Console',
  Impact = 'Impact',
  ComicSansMS = 'Comic Sans MS',
  TrebuchetMS = 'Trebuchet MS',
}

export enum InputType {
  Text = 'text',
  Email = 'email',
  Password = 'password',
}

export enum FormItemType {
  Section = 0,
  Field = 1,
}

export interface FormSection {
  id: string;
  type: FormItemType.Section;
  sectionType: FormSectionType;
  fields: FormField[];
}

export enum FormSectionType {
  OneFieldPerRow = 0,
  TwoFieldsPerRow = 1,
  ThreeFieldsPerRow = 2,
  FourFieldsPerRow = 3,
  OneToTwoPerRow = 4,
  TwoToOnePerRow = 5,
}

export interface FormField {
  id: string;
  type: FormItemType.Field;
  fieldType: FormFieldType;
  settings?: FormFieldSettings;
}

export interface ButtonSettings {
  type: ButtonType;
  text: string;
  linkTo: string;
  style: ButtonStyle;
  color: string;
  borderRadius: number;
  height: number;
  width: ButtonWidth;
  fixedWidth?: number;
  alignment: Alignment;
  fontSize: number;
  fontFamily: Font;
  isBold: boolean;
  isItalic: boolean;
  textColor: string;
  textAlignment: TextAlignment;
}

export interface InputSettings {}

export interface TextareaSettings {}

export type FormFieldSettings = ButtonSettings | InputSettings | TextareaSettings;

export enum FormFieldType {
  Empty = 0,
  Input = 1,
  Textarea = 2,
  Button = 3,
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  sections: FormSection[] = [];
  selectedField$ = new Subject<FormField>();

  createSection(sectionType: FormSectionType, index: number) {
    const newSection: FormSection = {
      id: uuid(),
      type: FormItemType.Section,
      sectionType,
      fields: [],
    };

    const numberOfFieldsBySectionType = {
      [FormSectionType.OneFieldPerRow]: 1,
      [FormSectionType.TwoFieldsPerRow]: 2,
      [FormSectionType.ThreeFieldsPerRow]: 3,
      [FormSectionType.FourFieldsPerRow]: 4,
      [FormSectionType.OneToTwoPerRow]: 2,
      [FormSectionType.TwoToOnePerRow]: 2,
    };

    for (let i = 0; i < numberOfFieldsBySectionType[sectionType]; i++) {
      // create new field and push it in the fields property
      const newField: FormField = {
        id: uuid(),
        type: FormItemType.Field,
        fieldType: FormFieldType.Empty,
      };
      newSection.fields.push(newField);
    }

    this.sections.splice(index, 0, newSection);
  }

  changeFieldType(field: FormField, newType: FormFieldType) {
    field.fieldType = newType;
    field.settings = this.createDefaultSettingsForFieldType(newType);
  }

  private createDefaultSettingsForFieldType(
    type: FormFieldType
  ): FormFieldSettings {
    switch (type) {
      case FormFieldType.Button: {
        return {
          type: ButtonType.Button,
          text: 'Button',
          linkTo: '',
          style: ButtonStyle.Flat,
          color: '#0143a3',
          borderRadius: 0,
          height: 35,
          width: ButtonWidth.Auto,
          fixedWidth: 80,
          alignment: Alignment.Center,
          fontSize: 16,
          fontFamily: Font.Arial,
          isBold: false,
          isItalic: false,
          textColor: 'white',
          textAlignment: TextAlignment.Center,
        } as ButtonSettings;
      }
      case FormFieldType.Input: {
        return {
          type: 'text',
          label: 'Input label',
          placeholder: 'Placeholder text',
          fieldName: uuid(),
          isRequired: false,
          inputBackgroundColor : 'transparent',
          borderRadius: 0,
          // TODO Check if it makes sense to add height and padding
        };
      }
      case FormFieldType.Textarea: {
        return {
          label: 'Textarea label',
          placeholder: 'Placeholder text',
          fieldName: uuid(),
          isRequired: false,
          inputBackgroundColor : 'transparent',
          borderRadius: 0,
          // TODO Check if it makes sense to add height and padding
        };
      }
      default:
        return null as any;
    }
  }
}
