import { Injectable } from '@angular/core';
import { FormField, FormSection, FormSectionType, FormService } from './form.service';

@Injectable({
  providedIn: 'root',
})
export class HtmlGeneratorService {
  constructor(private formService: FormService) {}

  generateHtml() {
    const sections = this.formService.sections;
    let sectionsTemplate = '';

    sections.forEach((section) => {
      sectionsTemplate += this.generateCodeForSection(section);
    });

    console.log('Generating HTML code', this.addWrappingHtml(sectionsTemplate));

    return this.addWrappingHtml(sectionsTemplate);
  }

  private generateCodeForSection(section: FormSection) {
    let sectionClasses = "row";

    if (section.sectionType === FormSectionType.TwoFieldsPerRow) {
      sectionClasses += ' grid-2'
    } else if (section.sectionType === FormSectionType.ThreeFieldsPerRow) {
      sectionClasses += ' grid-3'
    } else if (section.sectionType === FormSectionType.FourFieldsPerRow) {
      sectionClasses += ' grid-4'
    } else if (section.sectionType === FormSectionType.OneToTwoPerRow) {
      sectionClasses += ' grid-1-to-2'
    } else if (section.sectionType === FormSectionType.TwoToOnePerRow) {
      sectionClasses += ' grid-2-to-1'
    }

    let fieldsTemplate = '';

    section.fields.forEach((field) => {
      fieldsTemplate += this.generateCodeForField(field);
    });

    return `
      <div class="${sectionClasses}">
        ${fieldsTemplate}
      </div>
    `;
  }

  private generateCodeForField(field: FormField) {
    let fieldTemplate = '';

    return `
      <div class="field">
        ${fieldTemplate}
      </div>
    `;
  }

  private addWrappingHtml = (code: string) => `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Angular Drag and Drop Form Builder</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />

        <style type="text/css">
          * {
            box-sizing: border-box;
          }

          .line-separator-field {
            opacity: 1;
            background-color: transparent;
          }

          body {
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            font-family: "Helvetica Neue", Helvetica, sans-serif;
            font-size: 16px;
            background: #f5f5f5;
            padding: 15px;
          }

          form {
            background: #ffffff;
            max-width: 600px;
            padding: 15px;
            border-radius: 8px;
            border: solid 1px #ced4da;
            user-select: auot;
            margin: 0 auto;
            width: 100%;
          }

          .row {
            width: 100%;
            padding: 0;
          }

          .field {
            display: flex;
            justify-content: center;
            padding-top: 10px;
            width: 100%;
          }

          .grid-1-to-2 {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 15px;
          }

          .grid-2-to-1 {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 15px;
          }

          .grid-4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
          }

          .grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
          }

          .grid-2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .button-field {
            padding: 0 15px;
            text-decoration: none;
            display: block;
            text-align: center;
            border: 0;
            color: #ffffff;
            font-family: "Helvetica Neue", Helvetica, sans-serif;
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            background-color: #0143a3;
            width: auto;
            cursor: pointer;
          }

          .input-field,
          .textarea-field,
          .dropdown-field,
          .line-separator-field {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          label {
            margin-bottom: 5px;
            color: #000000;
            font-size: 14px;
          }

          .input-field input {
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 5px;
            width: 100%;
            border: 1px solid lightgrey;
            height: 36px;
            color: #333;
            background-color: white;
            border-radius: 4px;
            border: 1px solid #ccc;
            padding-left: 10px;
            font-family: Roboto, "Helvetica Neue", sans-serif;
            font-weight: 400;
          }

          .textarea-field textarea {
            width: 100%;
            border: 1px solid lightgrey;
            font-size: 16px;
            color: #fff;
            padding: 5px;
            font-family: Roboto, "Helvetica Neue", sans-serif;
          }

          .dropdown-field {
            width: 100%;
          }

          .dropdown-field select {
            width: 100%;
            border: 1px solid lightgrey;
            height: 36px;
            color: #333;
            background-color: white;
            border-radius: 4px;
            border: 1px solid #ccc;
            padding: 5px 0 5px 10px;
            font-family: Roboto, "Helvetica Neue", sans-serif;
            font-size: 16px;
            font-weight: 400;
          }

          .spacer-field {
            height: 120px;
          }

          .text-field {
            width: 100%;
            font-size: 14px;
            white-space: pre-line;
          }

          .image-field img {
            max-width: 100%;
          }

          .line-separator-field {
            margin-top: 10px;
            margin-bottom: 10px;
          }

          @media only screen and (max-width: 750px) {
            .grid-1-to-2,
            .grid-2-to-1,
            .grid-4,
            .grid-3,
            .grid-2 {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>

      <body>
        <form method="post" action="">
        ${code}
        </form>
      </body>
    </html>
  `;
}
