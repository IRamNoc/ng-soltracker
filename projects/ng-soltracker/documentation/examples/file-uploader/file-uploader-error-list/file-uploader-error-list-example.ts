import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    FileItem,
    NxFileUploadConfig,
    NxFileUploader,
    NxFileUploaderComponent,
} from '@aposin/ng-soltracker/file-uploader';
import { NxMessageToastService } from '@aposin/ng-soltracker/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { myCustomConfig } from '../file-uploader-auto/file-uploader-auto-example';

/** @title File uploader error list example */
@Component({
    selector: 'file-uploader-error-list-example',
    templateUrl: './file-uploader-error-list-example.html',
    styleUrls: ['./file-uploader-error-list-example.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploaderErrorListExampleComponent {
    @ViewChild('documentUpload', { static: false })
    documentUpload!: NxFileUploaderComponent;

    readonly uploadConfig: NxFileUploadConfig = {
        requestUrl: 'file-upload',
        options: {
            params: new HttpParams(),
            reportProgress: true,
        },
    };

    readonly uploader = new NxFileUploader(this.uploadConfig, this.http);

    readonly testForm = new FormGroup({
        documents: new FormControl([], Validators.required),
    });

    private readonly _destroyed = new Subject<void>();

    constructor(
        private readonly messageToastService: NxMessageToastService,
        private readonly http: HttpClient,
    ) {}

    ngOnInit(): void {
        this.uploader.response
            .pipe(takeUntil(this._destroyed))
            .subscribe(result => {
                if (result.success) {
                    this.messageToastService.open(
                        'All files were uploaded successfully!',
                        myCustomConfig,
                    );
                } else if (result.error) {
                    // error handling
                    this.testForm.controls.documents.setErrors({
                        serverError: true,
                    });
                }
            });
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    onChange($event: FileItem[]) {
        console.log($event);
    }

    onDelete($event: FileItem) {
        console.log($event);
    }
}
