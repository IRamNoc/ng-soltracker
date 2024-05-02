import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxPopoverModule } from '@aposin/ng-soltracker/popover';

import { NxvFeedbackComponent } from './feedback.component';

@NgModule({
    imports: [CommonModule, NxIconModule, NxButtonModule, NxPopoverModule],
    declarations: [NxvFeedbackComponent],
    exports: [NxvFeedbackComponent],
})
export class NxvFeedbackModule {}
