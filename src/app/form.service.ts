import { Injectable } from '@angular/core';

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
}
