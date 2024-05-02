import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxBadgeModule } from '@aposin/ng-soltracker/badge';
import { NxGridModule } from '@aposin/ng-soltracker/grid';
import { NxHeadlineModule } from '@aposin/ng-soltracker/headline';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxTableModule } from '@aposin/ng-soltracker/table';

import { NxvOverviewComponent } from './overview.component';
import { NxvStatusDotComponent } from './status-dot.component';

@NgModule({
    imports: [RouterModule, CommonModule, NxIconModule, NxTableModule, NxHeadlineModule, NxGridModule, NxBadgeModule],
    exports: [],
    declarations: [NxvOverviewComponent, NxvStatusDotComponent],
    providers: [],
})
export class NxvOverviewModule {}
