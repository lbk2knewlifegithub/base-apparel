import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="xl:fixed xl:left-0 xl:top-0 xl:w-full ">
      <div class="container bg-white py-8 xl:pt-16 xl:bg-transparent">
        <img
          class="max-w-[140px] xl:max-w-none"
          src="assets/images/logo.svg"
          alt="Logo"
        />
      </div>
    </header>
  `,
})
export class HeaderComponent {}
