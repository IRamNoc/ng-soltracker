import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxCopytextModule } from '@aposin/ng-soltracker/copytext';
import { NxGridModule } from '@aposin/ng-soltracker/grid';
import { NxHeadlineModule } from '@aposin/ng-soltracker/headline';

@NgModule({
    imports: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NxButtonModule,
        NxHeadlineModule,
        NxCopytextModule,
        NxGridModule,
    ],
})
export class ExamplesSharedModule {}
