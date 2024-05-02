import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxActionModule } from '@aposin/ng-soltracker/action';
import { NxGridModule } from '@aposin/ng-soltracker/grid';
import { NxSidebarModule } from '@aposin/ng-soltracker/sidebar';

import { NxvFooterModule } from '../component-documentation/footer/footer.module';
import { NxvGuidesComponent } from './guides.component';

@NgModule({
    imports: [CommonModule, RouterModule, NxGridModule, NxvFooterModule, NxSidebarModule, NxActionModule],
    exports: [],
    declarations: [NxvGuidesComponent],
    providers: [],
})
export class NxvGuidesModule {}
