import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxErrorModule, NxLabelModule } from '@aposin/ng-soltracker/base';
import { NxIconModule } from '@aposin/ng-soltracker/icon';

import { NxRadioComponent, NxRadioGroupComponent } from './radio-button';

@NgModule({
    declarations: [NxRadioComponent, NxRadioGroupComponent],
    exports: [NxRadioComponent, NxRadioGroupComponent, NxErrorModule, NxLabelModule],
    imports: [CommonModule, NxIconModule, ObserversModule],
})
export class NxRadioModule {}
