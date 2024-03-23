import { Component } from '@angular/core';
import { faLanguage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { HtmlGenerator } from '../services/html-generator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentLocale = 'en_US';
  faLanguage = faLanguage;
  generatedHtmlCode = '';
  isHtmlCodeDialogOpen = false;
  faXmark = faXmark;

  constructor(
    private translateService: TranslateService,
    private htmlGenerator: HtmlGenerator
  ) {
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
      label: 'Español',
      value: 'sp',
    },
  ];

  updateLocale(newLocale: string) {
    this.currentLocale = newLocale;
    this.translateService.use(newLocale);
  }

  generateHtml() {
    this.generatedHtmlCode = this.htmlGenerator.generateHtml();
    this.isHtmlCodeDialogOpen = true;
  }

  closeDialog() {
    this.isHtmlCodeDialogOpen = false;
  }
}
