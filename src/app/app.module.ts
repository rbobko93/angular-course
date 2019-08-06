import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ServersComponent } from './servers/servers.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningMessageComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
