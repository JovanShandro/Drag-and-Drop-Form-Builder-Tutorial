import { Component, Input, OnInit } from '@angular/core';
import { SpacerSettings } from '../../../services/form.service';

@Component({
  selector: 'app-spacer-customization',
  templateUrl: './spacer-customization.component.html',
  styleUrls: ['./spacer-customization.component.scss'],
})
export class SpacerCustomizationComponent {
  @Input() settings!: SpacerSettings;
}
