import { NgModule } from '@angular/core';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxContextMenuModule } from '@aposin/ng-soltracker/context-menu';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxToolbarModule } from '@aposin/ng-soltracker/toolbar';

import { ToolbarExampleComponent } from './toolbar/toolbar-example';
import { ToolbarDividerExampleComponent } from './toolbar-divider/toolbar-divider-example';
import { ToolbarPositioningContentExampleComponent } from './toolbar-positioning-content/toolbar-positioning-content-example';

const EXAMPLES = [
    ToolbarExampleComponent,
    ToolbarPositioningContentExampleComponent,
    ToolbarDividerExampleComponent,
];

@NgModule({
    imports: [
        NxToolbarModule,
        NxContextMenuModule,
        NxIconModule,
        NxButtonModule,
    ],
    declarations: [EXAMPLES],
    exports: [EXAMPLES],
})
export class ToolbarExamplesModule {
    static components() {
        return {
            toolbar: ToolbarExampleComponent,
            'toolbar-positioning-content':
                ToolbarPositioningContentExampleComponent,
            'toolbar-divider': ToolbarDividerExampleComponent,
        };
    }
}
