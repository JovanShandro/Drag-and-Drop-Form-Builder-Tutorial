import { Component, Input } from '@angular/core';
import { PictureSettings } from '../../../services/form.service';
import { faImage } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-form-picture-field',
  templateUrl: './form-picture-field.component.html',
  styleUrls: ['./form-picture-field.component.scss'],
})
export class FormPictureFieldComponent {
  @Input() settings!: PictureSettings;
  faImage = faImage;

  goToLink(url: string) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    if (!url.startsWith('https://www.') && !url.startsWith('http://www.')) {
      url = url.replace('www.', '');
    }
    window.open(url, "_blank");
  }
}
