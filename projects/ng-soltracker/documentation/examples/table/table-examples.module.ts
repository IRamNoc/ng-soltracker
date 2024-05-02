import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxBadgeModule } from '@aposin/ng-soltracker/badge';
import { NxCheckboxModule } from '@aposin/ng-soltracker/checkbox';
import { NxContextMenuModule } from '@aposin/ng-soltracker/context-menu';
import { NxDatefieldModule } from '@aposin/ng-soltracker/datefield';
import { NxDropdownModule } from '@aposin/ng-soltracker/dropdown';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxInputModule } from '@aposin/ng-soltracker/input';
import { NxLinkModule } from '@aposin/ng-soltracker/link';
import { NxMomentDateModule } from '@aposin/ng-soltracker/moment-date-adapter';
import { NxPaginationModule } from '@aposin/ng-soltracker/pagination';
import { NxRadioModule } from '@aposin/ng-soltracker/radio-button';
import { NxRadioToggleModule } from '@aposin/ng-soltracker/radio-toggle';
import { NxSwitcherModule } from '@aposin/ng-soltracker/switcher';
import { NxTableModule } from '@aposin/ng-soltracker/table';

import { ExamplesSharedModule } from '../examples-shared.module';
import { TableExampleComponent } from './table/table-example';
import { TableCoumnHidingExampleComponent } from './table-column-hiding/table-column-hiding-example';
import { TableColumnReorderExample } from './table-column-reorder/table-column-reorder-example';
import { TableColumnResizeExample } from './table-column-resize/table-column-resize-example';
import { TableCondensedExampleComponent } from './table-condensed/table-condensed-example';
import { TableExpandableExampleComponent } from './table-expandable/table-expandable-example';
import { TableFilterSortPaginateExampleComponent } from './table-filter-sort-paginate/table-filter-sort-paginate-example';
import { TableFormElementsExampleComponent } from './table-form-elements/table-form-elements-example';
import { TableSelectingExampleComponent } from './table-selecting/table-selecting-example';
import { TableSingleSelectExampleComponent } from './table-single-select/table-single-select-example';
import { TableSortingExampleComponent } from './table-sorting/table-sorting-example';
import { TableStickyColumnExampleComponent } from './table-sticky-column/table-sticky-column-example';
import { TableStickyHeaderExampleComponent } from './table-sticky-header/table-sticky-header-example';
import { TableZebraExampleComponent } from './table-zebra/table-zebra-example';

const EXAMPLES = [
    TableColumnResizeExample,
    TableColumnReorderExample,
    TableExampleComponent,
    TableCondensedExampleComponent,
    TableExpandableExampleComponent,
    TableFilterSortPaginateExampleComponent,
    TableSelectingExampleComponent,
    TableSingleSelectExampleComponent,
    TableSortingExampleComponent,
    TableZebraExampleComponent,
    TableFormElementsExampleComponent,
    TableStickyColumnExampleComponent,
    TableStickyHeaderExampleComponent,
    TableCoumnHidingExampleComponent,
];

@NgModule({
    imports: [
        NxTableModule,
        NxSwitcherModule,
        NxCheckboxModule,
        NxContextMenuModule,
        NxPaginationModule,
        NxDropdownModule,
        NxDatefieldModule,
        NxMomentDateModule,
        NxInputModule,
        NxBadgeModule,
        NxLinkModule,
        NxRadioModule,
        NxIconModule,
        NxRadioToggleModule,
        ExamplesSharedModule,
        RouterModule,
        DragDropModule,
    ],
    declarations: [EXAMPLES],
    exports: [EXAMPLES],
})
export class TableExamplesModule {
    static components() {
        return {
            'table-column-resize': TableColumnResizeExample,
            'table-column-reorder': TableColumnReorderExample,
            table: TableExampleComponent,
            'table-condensed': TableCondensedExampleComponent,
            'table-expandable': TableExpandableExampleComponent,
            'table-filter-sort-paginate':
                TableFilterSortPaginateExampleComponent,
            'table-selecting': TableSelectingExampleComponent,
            'table-single-select': TableSingleSelectExampleComponent,
            'table-sorting': TableSortingExampleComponent,
            'table-zebra': TableZebraExampleComponent,
            'table-form-elements': TableFormElementsExampleComponent,
            'table-sticky-column': TableStickyColumnExampleComponent,
            'table-sticky-header': TableStickyHeaderExampleComponent,
            'table-column-hiding': TableCoumnHidingExampleComponent,
        };
    }
}
