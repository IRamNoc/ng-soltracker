import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxButtonModule } from '@aposin/ng-soltracker/button';
import { NxCheckboxModule } from '@aposin/ng-soltracker/checkbox';
import { NxDocumentationIconModule } from '@aposin/ng-soltracker/documentation-icons';
import { NxDropdownModule } from '@aposin/ng-soltracker/dropdown';
import { NxFooterModule } from '@aposin/ng-soltracker/footer';
import { NxFormfieldModule } from '@aposin/ng-soltracker/formfield';
import { NxGridModule } from '@aposin/ng-soltracker/grid';
import { NxHeadlineModule } from '@aposin/ng-soltracker/headline';
import { NxIconModule } from '@aposin/ng-soltracker/icon';
import { NxInputModule } from '@aposin/ng-soltracker/input';
import { NxLinkModule } from '@aposin/ng-soltracker/link';
import { NxMessageModule } from '@aposin/ng-soltracker/message';
import { NxModalModule } from '@aposin/ng-soltracker/modal';
import { NxOverlayModule } from '@aposin/ng-soltracker/overlay';
import { NxPopoverModule } from '@aposin/ng-soltracker/popover';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                HttpClientJsonpModule,
                HttpClientModule,
                ReactiveFormsModule,
                NxButtonModule,
                NxCheckboxModule,
                NxDocumentationIconModule,
                NxDropdownModule,
                NxFooterModule,
                NxFormfieldModule,
                NxGridModule,
                NxHeadlineModule,
                NxIconModule,
                NxInputModule,
                NxLinkModule,
                NxMessageModule,
                NxModalModule,
                NxOverlayModule,
                NxPopoverModule,
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should create the form`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.formGroup).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1.nx-heading--section').textContent).toContain('soltracker Insurance App');
    });
});
