import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxMessageModule } from '@aposin/ng-soltracker/message';

import { NxErrorComponent } from './error.component';

@NgModule({
    imports: [CommonModule, NxIconModule, NxMessageModule],
    declarations: [NxErrorComponent],
    exports: [NxErrorComponent],
})
export class NxErrorModule {}
