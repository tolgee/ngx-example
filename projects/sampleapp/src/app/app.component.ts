import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@tolgee/ngx";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  inputPlaceholderText: string;
  optionText: string;
  params = { dogsCount: "5" };

  constructor(private translateService: TranslateService) {}

  get lang() {
    return this.translateService.getCurrentLang();
  }

  set lang(lang: string) {
    this.translateService.setLang(lang);
  }

  async ngOnInit(): Promise<void> {
    this.translate();
    this.translateService.onLangChange.subscribe(() => {
      this.translate();
    });
  }

  translate() {
    this.translateService
      .get("i_am_translated_placeholder")
      .subscribe((r) => (this.inputPlaceholderText = r));
    this.translateService
      .get("hi_i_am_translated_option")
      .subscribe((r) => (this.optionText = r));
  }
}
