import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormField, FormService } from '../form.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss'],
})
export class CustomizationComponent {
  tabNames = ['Current Element', 'Form Design'];

  selectedField$: Observable<FormField | null> = of(null);

  constructor(private formService: FormService) {
    this.selectedField$ = this.formService.selectedField$;
  }
}
