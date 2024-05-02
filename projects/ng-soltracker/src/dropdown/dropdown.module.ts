import { A11yModule } from '@angular/cdk/a11y';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxCheckboxModule } from '@aposin/ng-soltracker/checkbox';
import { NxFormfieldModule } from '@aposin/ng-soltracker/formfield';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxInputModule } from '@aposin/ng-soltracker/input';
import { NxTooltipModule } from '@aposin/ng-soltracker/tooltip';

import { NxDropdownClosedLabelDirective } from './closed-label.directive';
import { NX_DROPDOWN_SCROLL_STRATEGY_PROVIDER, NxDropdownComponent, NxDropdownIntl } from './dropdown';
import { NxDropdownGroupComponent } from './group/dropdown-group';
import { NxDropdownItemComponent } from './item/dropdown-item';
import { NxMultiSelectComponent } from './multi-select/multi-select.component';
import { NxMultiSelectAllComponent } from './multi-select/multi-select-all.component';
import { NxMultiSelectOptionComponent } from './multi-select/multi-select-option.component';

@NgModule({
    imports: [
        CommonModule,
        NxFormfieldModule,
        NxCheckboxModule,
        OverlayModule,
        A11yModule,
        NxIconModule,
        ObserversModule,
        FormsModule,
        NxTooltipModule,
        NxButtonModule,
        NxInputModule,
    ],
    declarations: [
        NxDropdownComponent,
        NxDropdownItemComponent,
        NxDropdownGroupComponent,
        NxDropdownClosedLabelDirective,
        NxMultiSelectComponent,
        NxMultiSelectOptionComponent,
        NxMultiSelectAllComponent,
    ],
    providers: [NxDropdownIntl, NX_DROPDOWN_SCROLL_STRATEGY_PROVIDER],
    exports: [NxDropdownComponent, NxDropdownItemComponent, NxDropdownGroupComponent, NxDropdownClosedLabelDirective, NxMultiSelectComponent],
})
export class NxDropdownModule {}
