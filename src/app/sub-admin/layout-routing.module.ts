import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TopupUserComponent } from './topup-user/topup-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { TopupSubadminComponent } from './topup-subadmin/topup-subadmin.component';
import { TopupHistoryComponent } from './topup-history/topup-history.component';
import { ProfileComponent } from './profile/profile.component';
import { BalanceComponent } from './balance/balance.component';


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
                path: 'add-user',
                component:AddUserComponent
            },
            {
                path: 'topup-user',
                component:TopupUserComponent
            },
            
            {
                path: 'view-users',
                component:ViewUsersComponent
            }
            ,
            
            {
                path: 'topup-subadmin',
                component:TopupSubadminComponent
            }
            ,
            
            {
                path: 'topup-history',
                component:TopupHistoryComponent
            }
            ,
            
            {
                path: 'profile',
                component:ProfileComponent
            },
            
            {
                path: 'balance',
                component:BalanceComponent
            }
           
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
