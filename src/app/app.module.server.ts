import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    GoogleMapsModule,

  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
