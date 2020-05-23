import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { ViewAdminsComponent } from './view-admins/view-admins.component';
import { AddSubadminsComponent } from './add-subadmins/add-subadmins.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { TopupUserComponent } from './topup-user/topup-user.component';
import { TopupSubadminComponent } from './topup-subadmin/topup-subadmin.component';
import { TopupHistoryComponent } from './topup-history/topup-history.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, ViewAdminsComponent, AddSubadminsComponent, AddUserComponent, ViewUsersComponent, TopupUserComponent, TopupSubadminComponent, TopupHistoryComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
