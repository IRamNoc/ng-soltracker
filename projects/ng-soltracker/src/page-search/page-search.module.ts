import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxAutocompleteModule } from '@aposin/ng-soltracker/autocomplete';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxFormfieldModule } from '@aposin/ng-soltracker/formfield';
import { NxGridModule } from '@aposin/ng-soltracker/grid';

import { NxPageSearchComponent } from './page-search.component';

@NgModule({
    imports: [CommonModule, NxAutocompleteModule, NxFormfieldModule, NxButtonModule, NxGridModule],
    declarations: [NxPageSearchComponent],
    exports: [NxPageSearchComponent],
})
export class NxPageSearchModule {}
