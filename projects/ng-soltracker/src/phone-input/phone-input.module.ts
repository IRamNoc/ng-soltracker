import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NxDropdownModule } from '@aposin/ng-soltracker/dropdown';
import { NxFormfieldModule } from '@aposin/ng-soltracker/formfield';
import { NxInputModule } from '@aposin/ng-soltracker/input';

import { NxPhoneInputComponent } from './phone-input.component';

@NgModule({
    imports: [NxDropdownModule, CommonModule, FormsModule, NxInputModule],
    exports: [NxPhoneInputComponent, NxFormfieldModule],
    declarations: [NxPhoneInputComponent],
    providers: [],
})
export class NxPhoneInputModule {}
