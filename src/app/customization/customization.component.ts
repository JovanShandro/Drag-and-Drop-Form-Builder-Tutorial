import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormField, FormService } from '../services/form.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss'],
})
export class CustomizationComponent {
  // 0 for 'Current Element'
  // 1 for 'Form Design'
  selectedTab = 0;

  selectedField$: Observable<FormField | null> = of(null);

  constructor(private formService: FormService) {
    this.selectedField$ = this.formService.selectedField$;
  }
}
