import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxActionModule } from '@aposin/ng-soltracker/action';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxTreeModule } from '@aposin/ng-soltracker/tree';

import { TreeExampleComponent } from './tree/tree-example';

const EXAMPLES = [TreeExampleComponent];

@NgModule({
    imports: [
        NxTreeModule,
        NxIconModule,
        NxActionModule,
        RouterModule,
        CommonModule,
    ],
    declarations: [EXAMPLES],
    exports: [EXAMPLES],
})
export class TreeExamplesModule {
    static components() {
        return {
            tree: TreeExampleComponent,
        };
    }
}
