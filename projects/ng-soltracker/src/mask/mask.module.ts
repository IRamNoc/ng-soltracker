import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxFormfieldModule } from '@aposin/ng-soltracker/formfield';

import { NxIbanMaskDirective } from './iban-mask.directive';
import { NxMaskDirective } from './mask.directive';

@NgModule({
    imports: [CommonModule, NxFormfieldModule],
    declarations: [NxMaskDirective, NxIbanMaskDirective],
    exports: [NxFormfieldModule, NxMaskDirective, NxIbanMaskDirective],
})
export class NxMaskModule {}
