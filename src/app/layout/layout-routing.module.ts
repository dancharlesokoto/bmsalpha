import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ViewAdminsComponent } from '../view-admins/view-admins.component';
import { ViewUsersComponent } from '../view-users/view-users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { AddSubadminsComponent } from '../add-subadmins/add-subadmins.component';
import { TopupSubadminComponent } from '../topup-subadmin/topup-subadmin.component';
import { TopupUserComponent } from '../topup-user/topup-user.component';
import { TopupHistoryComponent } from '../topup-history/topup-history.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
             {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            
            {
                path: 'view-admins',
                component: ViewAdminsComponent
            }
            ,
            {
                path: 'view-users',
                component: ViewUsersComponent
            },
            {
                path: 'add-user',
                component: AddUserComponent
            },
            {
                path: 'add-subadmins',
                component: AddSubadminsComponent
            },
            {
                path: 'topup-subadmin',
                component: TopupSubadminComponent
            }
            ,
            {
                path: 'topup-user',
                component: TopupUserComponent
            }
            ,
            {
                path: 'topup-history',
                component: TopupHistoryComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
