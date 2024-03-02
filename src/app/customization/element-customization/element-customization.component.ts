import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../../form.service';

enum ButtonStyles {
  Flat = 'flat',
  Raised = 'raised',
  Stroked = 'stroked',
}

enum Alignment{
  Left = 'left',
  Center = 'center',
  Down = 'down',
}

enum TextAlignment{
  Top = 'top',
  Center = 'center',
  Bottom = 'bottom',

}

enum Fonts{
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

enum InputTypes{
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Number = 'number',
}

@Component({
  selector: 'app-element-customization',
  templateUrl: './element-customization.component.html',
  styleUrls: ['./element-customization.component.scss'],
})
export class ElementCustomizationComponent {
  @Input() selectedField!: FormField | null;

  buttonStyles = Object.keys(ButtonStyles);
  alignments = Object.keys(Alignment);
  textAlignment = Object.keys(TextAlignment);
  fonts = Object.keys(Fonts);
  inputTypes = Object.keys(InputTypes);

  buttonTypes = ['button', 'submit'];

  fieldTypes = FormFieldType;



}
