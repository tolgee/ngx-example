import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@tolgee/ngx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) {

  }

  inputPlaceholderText: string;
  optionText: string;

  async ngOnInit(): Promise<void> {
    this.translateService.onLangChange.subscribe(() => this.refresh());
    this.refresh()
  }

  private refresh() {
    this.translateService.get('i_am_translated_placeholder').subscribe(r => this.inputPlaceholderText = r);
    this.translateService.get('hi_i_am_translated_option').subscribe(r => this.optionText = r);
  }

  set lang(lang: string) {
    this.translateService.setLang(lang);
  }

  get lang() {
    return this.translateService.getCurrentLang()
  }

}
