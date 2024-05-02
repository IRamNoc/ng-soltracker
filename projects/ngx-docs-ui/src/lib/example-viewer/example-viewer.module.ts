import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxLinkModule } from '@aposin/ng-soltracker/link';
import { NxTabsModule } from '@aposin/ng-soltracker/tabs';
import { NxTooltipModule } from '@aposin/ng-soltracker/tooltip';

import { CopyService } from '../core/copy.service';
import { DocViewerModule } from '../doc-viewer/public_api';
import { NxvLazyExampleOutletModule } from './../lazy-example-outlet/lazy-example-outlet.module';
import { StackBlitzButtonModule } from './../stack-blitz/stack-blitz-button';
import { ExampleViewerComponent } from './example-viewer.component';

@NgModule({
    imports: [
        PortalModule,
        CommonModule,
        DocViewerModule,
        NxButtonModule,
        NxTabsModule,
        NxIconModule,
        RouterModule,
        NxLinkModule,
        NxTooltipModule,
        NxvLazyExampleOutletModule,
        StackBlitzButtonModule,
    ],
    exports: [ExampleViewerComponent],
    declarations: [ExampleViewerComponent],
    providers: [CopyService],
})
export class ExampleViewerModule {}
