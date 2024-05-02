import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxCopytextModule } from '@aposin/ng-soltracker/copytext';
import { NxHeadlineModule } from '@aposin/ng-soltracker/headline';
import { NxSliderModule } from '@aposin/ng-soltracker/slider';

import { RtlBasicExampleComponent } from './rtl-basic/rtl-basic-example';
import { RtlDynamicExampleComponent } from './rtl-dynamic/rtl-dynamic-example';

const EXAMPLES = [RtlBasicExampleComponent, RtlDynamicExampleComponent];

@NgModule({
    imports: [
        BidiModule,
        CommonModule,
        NxHeadlineModule,
        NxButtonModule,
        NxCopytextModule,
        NxSliderModule,
    ],
    declarations: [EXAMPLES],
    exports: [EXAMPLES],
})
export class RtlExamplesModule {
    static components() {
        return {
            'rtl-basic': RtlBasicExampleComponent,
            'rtl-dynamic': RtlDynamicExampleComponent,
        };
    }
}
