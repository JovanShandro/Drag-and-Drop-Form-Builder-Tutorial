import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';

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
}

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
  selectedField = new BehaviorSubject<FormField | null>(null);

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
}
