import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  Center = 'middle',
  Right = 'right',
}

export enum TextAlignment {
  Start = 'start',
  End = 'end',
  Center = 'center',
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

export enum LineStyle {
  Solid = 'solid',
  Dotted = 'dotted',
  Dashed = 'dashed',
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

export interface InputSettings {
  type: InputType;
  label: string;
  placeholder: string;
  fieldName: string;
  showLabel: boolean;
  isRequired: boolean;
}

export interface TextareaSettings {
  label: string;
  placeholder: string;
  fieldName: string;
  showLabel: boolean;
  isRequired: boolean;
  borderRadius: number;
}

export interface CheckboxSettings {
  label: string;
  isRequired: boolean;
  fieldName: string;
}

export interface TextSettings {
  textColor: string;
  font: Font;
  lineHeight: number;
  text: string;
}

export interface DropdownSettings {
  label: string;
  showLabel: boolean;
  fieldName: string;
  options: { label: string; value: string }[];
  selectedValue: string | null;
  isRequired: boolean;
}

export interface RadioButtonSettings {
  label: string;
  showLabel: boolean;
  fieldName: string;
  options: { label: string; value: string }[];
  selectedValue: string | null;
  isRequired: boolean;
}

export interface PictureSettings {
  imageSrc: string;
  altText: string;
  linkTo: string;
  width: number;
  alignment: Alignment;
}

export interface SpacerSettings {
  height: number;
}

export interface SeparatorSettings {
  color: string;
  thickness: number;
  style: LineStyle;
}

export type FormFieldSettings =
  | SeparatorSettings
  | SpacerSettings
  | RadioButtonSettings
  | PictureSettings
  | DropdownSettings
  | TextSettings
  | CheckboxSettings
  | ButtonSettings
  | InputSettings
  | TextareaSettings;


export enum FormFieldType {
Empty=0,
Input=1,
Textarea=2,
Button=3,
Checkbox=4,
Text=5,
Dropdown=6,
RadioButton=7,
Picture=8,
Spacer=9,
Separator=10,
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  sections: FormSection[] = [];
  selectedField$ = new BehaviorSubject<FormField | null>(null);

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
          textColor: '#ffffff',
          textAlignment: TextAlignment.Center,
        } as ButtonSettings;
      }
      case FormFieldType.Input: {
        return {
          type: InputType.Text,
          label: 'Input label',
          placeholder: 'Placeholder text',
          fieldName: 'inputName',
          isRequired: false,
          showLabel: true,
        } as InputSettings;
      }
      case FormFieldType.Textarea: {
        return {
          label: 'Textarea label',
          placeholder: 'Placeholder text',
          fieldName: 'textareaName',
          isRequired: false,
          showLabel: true,
          borderRadius: 0,
        } as TextareaSettings;
      }
      case FormFieldType.Checkbox: {
        return {
          label: 'Checkbox label',
          fieldName: 'checkboxName',
          isRequired: false,
        } as CheckboxSettings;
      }
      case FormFieldType.Text: {
        return {
          textColor: '#000000',
          font: Font.Arial,
          lineHeight: 1.5,
          text: 'Example Text',
        } as TextSettings;
      }
      case FormFieldType.Dropdown: {
        return {
          label: 'Dropdown label',
          showLabel: true,
          fieldName: 'dropdownName',
          options: [{ label: 'Option 1', value: 'Option 1' }],
          selectedValue: 'Option 1',
          isRequired: false,
        } as DropdownSettings;
      }
      case FormFieldType.RadioButton: {
        return {
          label: 'Radio button label',
          showLabel: true,
          fieldName: 'radioName',
          options: [{ label: 'Option 1', value: 'Option 1'}],
          selectedValue: 'Option 1',
          isRequired: false,
        } as RadioButtonSettings;
      }
      case FormFieldType.Picture: {
        return {
          src: '',
          altText: 'Image alt',
          width: 100,
          alignment: Alignment.Center,
        } as unknown as PictureSettings;
      }
      case FormFieldType.Spacer: {
        return {
          height: 95,
        } as SpacerSettings;
      }
      case FormFieldType.Separator: {
        return {
          color: '#000000',
          thickness: 1,
          style: LineStyle.Solid,
        } as SeparatorSettings;
      }
      default:
        return null as any;
    }
  }
}

/**

export const DraggableElementsList = [
    {
        title: 'Dropdown',
        icon: 'fa-regular fa-caret-square-down',
    },
    {
        title: 'Radio Buttons',
        icon: 'fa-solid fa-list-ul',
    },
    {
        title: 'Check Box',
        icon: 'fa-regular fa-check-square',
    },
    {
        title: 'Text',
        icon: 'fa-solid fa-language',
    },
    // {
    //     title: 'Picture',
    //     icon: 'fa-regular fa-image',
    // },
    // {
    //     title: 'Spacer',
    //     icon: 'fa-solid fa-arrows-alt-v',
    // },
    // {
    //     title: 'Separator',
    //     icon: 'fa-solid fa-grip-lines',
    // },
    // {
    //     title: 'Social',
    //     icon: 'fa-solid fa-share-alt',
    // },
    // {
    //     title: 'Uploader',
    //     icon: 'fa-solid fa-upload',
    // },
];

  */
