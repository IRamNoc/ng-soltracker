import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxCopytextModule } from '@aposin/ng-soltracker/copytext';
import { NxGridModule } from '@aposin/ng-soltracker/grid';
import { NxImageModule } from '@aposin/ng-soltracker/image';

import { ImageAttributeExampleComponent } from './image-attribute/image-attribute-example';
import { ImageDefaultExampleComponent } from './image-default/image-default-example';
import { ImageFixedRatiosExampleComponent } from './image-fixed-ratios/image-fixed-ratios-example';
import { ImageRoundedExampleComponent } from './image-rounded/image-rounded-example';

const EXAMPLES = [
    ImageAttributeExampleComponent,
    ImageDefaultExampleComponent,
    ImageFixedRatiosExampleComponent,
    ImageRoundedExampleComponent,
];

@NgModule({
    imports: [NxImageModule, NxGridModule, NxCopytextModule, NgOptimizedImage],
    declarations: [EXAMPLES],
    exports: [EXAMPLES],
})
export class ImageExamplesModule {
    static components() {
        return {
            'image-attribute': ImageAttributeExampleComponent,
            'image-default': ImageDefaultExampleComponent,
            'image-fixed-ratios': ImageFixedRatiosExampleComponent,
            'image-rounded': ImageRoundedExampleComponent,
        };
    }
}
