import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from '../dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(rating: number): Observable<boolean> {

        let dialogRef: MdDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.componentInstance.title = "Ratings";
        dialogRef.componentInstance.message = "Gplaces rating:" + rating;

        return dialogRef.afterClosed();
    }
}