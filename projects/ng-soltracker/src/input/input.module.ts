import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxFormfieldModule } from '@aposin/ng-soltracker/formfield';
import { NxIconModule } from '@aposin/ng-soltracker/icon';

import { NxInputDirective } from './input.directive';
import { NxPasswordToggleComponent } from './password-toggle.component';

@NgModule({
    imports: [CommonModule, NxFormfieldModule, NxIconModule],
    declarations: [NxInputDirective, NxPasswordToggleComponent],
    exports: [NxFormfieldModule, NxInputDirective, NxPasswordToggleComponent],
})
export class NxInputModule {}
