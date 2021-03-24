import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { NewDisneyComponent } from './components/new-disney/new-disney.component';

@NgModule({
  declarations: [
    BannerComponent,
    RecommendedComponent,
    NewDisneyComponent
  ],
  exports: [
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
})

export class HomeModule { }
