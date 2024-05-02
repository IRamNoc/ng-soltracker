import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxHeaderModule } from '@aposin/ng-soltracker/header';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxLinkModule } from '@aposin/ng-soltracker/link';

import { HeaderExampleComponent } from './header/header-example';
import { HeaderCobrandingExampleComponent } from './header-cobranding/header-cobranding-example';
import { HeaderIconsExampleComponent } from './header-icons/header-icons-example';
import { HeaderTwoRowsExampleComponent } from './header-two-rows/header-two-rows-example';

const EXAMPLES = [
    HeaderExampleComponent,
    HeaderCobrandingExampleComponent,
    HeaderIconsExampleComponent,
    HeaderTwoRowsExampleComponent,
];

@NgModule({
    imports: [
        NxHeaderModule,
        RouterModule,
        NxLinkModule,
        NxButtonModule,
        NxIconModule,
    ],
    declarations: [EXAMPLES],
    exports: [EXAMPLES],
})
export class HeaderExamplesModule {
    static components() {
        return {
            header: HeaderExampleComponent,
            'header-cobranding': HeaderCobrandingExampleComponent,
            'header-icons': HeaderIconsExampleComponent,
            'header-two-rows': HeaderTwoRowsExampleComponent,
        };
    }
}
