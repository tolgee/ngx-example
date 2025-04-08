import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxTolgeeModule } from '@tolgee/ngx';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  imports: [RouterLink, NgxTolgeeModule],
})
export class LazyComponent {
  constructor() { }
}
