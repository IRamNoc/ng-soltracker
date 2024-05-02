import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxErrorModule } from '@aposin/ng-soltracker/base';
import { NxCheckboxModule } from '@aposin/ng-soltracker/checkbox';
import { NxIconModule } from '@aposin/ng-soltracker/icon';

import { NxCardComponent } from './card.component';
import { NxCardFooterComponent } from './card-footer.component';
import { NxCardHeaderComponent } from './card-header.component';
import { NxCardMainLinkDirective, NxCardSecondaryInfoDirective } from './card-link.directive';
import { NxSelectableCardComponent, NxSelectableCardGroupComponent } from './selectable-card.component';

@NgModule({
    declarations: [NxCardComponent, NxSelectableCardComponent, NxCardHeaderComponent, NxCardFooterComponent, NxSelectableCardGroupComponent],
    exports: [
        NxCardComponent,
        NxSelectableCardComponent,
        NxCardHeaderComponent,
        NxCardFooterComponent,
        NxErrorModule,
        NxSelectableCardGroupComponent,
        NxCardMainLinkDirective,
        NxCardSecondaryInfoDirective,
    ],
    imports: [CommonModule, NxIconModule, NxErrorModule, NxCheckboxModule, NxCardMainLinkDirective, NxCardSecondaryInfoDirective],
})
export class NxCardModule {}
