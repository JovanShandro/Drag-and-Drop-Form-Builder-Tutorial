import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export interface FormSection {
  id: string;
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
  fieldType: FormFieldType;
}

export enum FormFieldType {
  Empty = 0,
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  sections: FormSection[] = [
    {
      id: '1',
      sectionType: FormSectionType.OneFieldPerRow,
      fields: [
        {
          id: '2',
          fieldType: FormFieldType.Empty,
        },
      ],
    },
    {
      id: '2',
      sectionType: FormSectionType.OneFieldPerRow,
      fields: [
        {
          id: '2',
          fieldType: FormFieldType.Empty,
        },
      ],
    },
    {
      id: '3',
      sectionType: FormSectionType.OneFieldPerRow,
      fields: [
        {
          id: '2',
          fieldType: FormFieldType.Empty,
        },
      ],
    },
    {
      id: '4',
      sectionType: FormSectionType.TwoFieldsPerRow,
      fields: [
        {
          id: '2',
          fieldType: FormFieldType.Empty,
        },
      ],
    },
  ];

  createSection(sectionType: FormSectionType, index: number) {
    const newSection: FormSection = {
      id: uuid(),
      sectionType,
      fields: [],
    }

    const numberOfFieldsBySectionType = {
      [FormSectionType.OneFieldPerRow]: 1,
      [FormSectionType.TwoFieldsPerRow]: 2,
      [FormSectionType.ThreeFieldsPerRow]: 3,
      [FormSectionType.FourFieldsPerRow]: 4,
      [FormSectionType.OneToTwoPerRow]: 2,
      [FormSectionType.TwoToOnePerRow]: 2,
    }

    for (let i = 0; i < numberOfFieldsBySectionType[sectionType]; i++) {
      // create new field and push it in the fields property
      const newField: FormField = {
        id: uuid(),
        fieldType: FormFieldType.Empty,
      }
      newSection.fields.push(newField);
    }

    this.sections.splice(index, 0, newSection);
  }
}
