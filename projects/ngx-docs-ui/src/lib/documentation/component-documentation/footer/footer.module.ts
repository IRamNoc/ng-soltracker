import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxFooterModule } from '@aposin/ng-soltracker/footer';

import { NxvFooterComponent } from './footer.component';

@NgModule({
    imports: [CommonModule, NxFooterModule],
    declarations: [NxvFooterComponent],
    exports: [NxvFooterComponent],
})
export class NxvFooterModule {}
