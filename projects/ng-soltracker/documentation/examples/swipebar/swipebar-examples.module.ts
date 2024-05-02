import { NgModule } from '@angular/core';
import { NxCopytextModule } from '@aposin/ng-soltracker/copytext';
import { NxSwipebarModule } from '@aposin/ng-soltracker/swipebar';

import { SwipebarExampleComponent } from './swipebar/swipebar-example';

const EXAMPLES = [SwipebarExampleComponent];

@NgModule({
    imports: [NxSwipebarModule, NxCopytextModule],
    declarations: [EXAMPLES],
    exports: [EXAMPLES],
})
export class SwipebarExamplesModule {
    static components() {
        return {
            swipebar: SwipebarExampleComponent,
        };
    }
}
