import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxActionModule } from '@aposin/ng-soltracker/action';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxSidebarModule } from '@aposin/ng-soltracker/sidebar';

import { ViewportChangeExampleComponent } from './viewport-change/viewport-change-example';

const EXAMPLES = [ViewportChangeExampleComponent];

@NgModule({
    imports: [
        NxSidebarModule,
        NxIconModule,
        RouterModule,
        CommonModule,
        NxActionModule,
    ],
    declarations: [EXAMPLES],
    exports: [EXAMPLES],
})
export class ViewportExamplesModule {
    static components() {
        return {
            'viewport-change': ViewportChangeExampleComponent,
        };
    }
}
