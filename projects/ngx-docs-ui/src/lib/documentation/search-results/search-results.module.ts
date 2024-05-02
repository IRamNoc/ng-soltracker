import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxBadgeModule } from '@aposin/ng-soltracker/badge';
import { NxGridModule } from '@aposin/ng-soltracker/grid';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxLinkModule } from '@aposin/ng-soltracker/link';
import { NxMessageModule } from '@aposin/ng-soltracker/message';
import { NxSidebarModule } from '@aposin/ng-soltracker/sidebar';

import { NxvSearchResultsComponent } from './search-results.component';

const routes: Routes = [
    {
        path: ':term',
        component: NxvSearchResultsComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        NxSidebarModule,
        NxGridModule,
        ScrollingModule,
        NxLinkModule,
        NxBadgeModule,
        NxGridModule,
        NxIconModule,
        NxMessageModule,
        RouterModule.forChild(routes),
    ],
    exports: [NxvSearchResultsComponent],
    declarations: [NxvSearchResultsComponent],
    providers: [],
})
export class SearchResultsModule {}
