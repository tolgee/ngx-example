import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@tolgee/ngx';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  imports: [FormsModule, AsyncPipe],
})
export class LangSelectorComponent implements OnInit {
  constructor(public translateService: TranslateService) { }

  ngOnInit(): void { }
}
