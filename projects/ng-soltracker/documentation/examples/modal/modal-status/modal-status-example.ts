import {
    ChangeDetectionStrategy,
    Component,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { NxStatusIconType } from '@aposin/ng-soltracker/icon';
import {
    NxDialogService,
    NxModalAppearance,
    NxModalRef,
} from '@aposin/ng-soltracker/modal';

/**
 * @title Modal status example
 */
@Component({
    selector: 'modal-status-example',
    templateUrl: './modal-status-example.html',
    styleUrls: ['./modal-status-example.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalStatusExample {
    @ViewChild('template') templateRef!: TemplateRef<any>;

    dialogRef?: NxModalRef<any>;

    status!: NxStatusIconType;

    constructor(private readonly dialogService: NxDialogService) {}

    open(status: NxStatusIconType, appearance: NxModalAppearance): void {
        this.status = status;
        this.dialogRef = this.dialogService.open(this.templateRef, {
            ariaLabel: 'A simple modal',
            showCloseIcon: true,
            appearance,
        });
    }
}
