import { Component } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentLocale = 'en_US';
  faLanguage = faLanguage;

  constructor(private translateService: TranslateService) {
    // fallback locale
    translateService.setDefaultLang('en_US');

    // current (default) locale
    translateService.use('en_US');
  }

  languages = [
    {
      label: 'English',
      value: 'en_US',
    },
    {
      label: 'Espanol',
      value: 'sp',
    },
  ];

  updateLocale(newLocale: string) {
    this.currentLocale = newLocale;
    this.translateService.use(newLocale);
  }
}
