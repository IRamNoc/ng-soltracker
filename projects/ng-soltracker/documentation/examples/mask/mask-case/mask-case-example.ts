import { Component } from '@angular/core';
import { MaskConversionTypes } from '@aposin/ng-soltracker/mask';

/**
 * @title Set case example
 */
@Component({
    selector: 'mask-case-example',
    templateUrl: './mask-case-example.html',
    styleUrls: ['./mask-case-example.css'],
})
export class MaskCaseExampleComponent {
    modelVal!: string;
    templateModel: MaskConversionTypes = 'upper';
}
