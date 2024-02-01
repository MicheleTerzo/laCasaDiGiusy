import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-valentine-promo',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule
  ],
  templateUrl: './valentine-promo.component.html',
  styleUrls: ['./valentine-promo.component.scss'],
})
export class ValentinePromoComponent { }
