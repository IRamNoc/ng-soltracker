import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxPopoverModule } from '@aposin/ng-soltracker/popover';

import { NxSignalButtonComponent } from './signal-button.component';

@NgModule({
    imports: [CommonModule, NxPopoverModule, NxIconModule, NxButtonModule],
    declarations: [NxSignalButtonComponent],
    exports: [NxSignalButtonComponent],
})
export class NxSignalButtonModule {}
