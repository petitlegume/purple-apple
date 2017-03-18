import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from '../dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(name: string, rating: number): Observable<boolean> {

        let dialogRef: MdDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.componentInstance.title = name + " ratings";
        dialogRef.componentInstance.gplacesRating = rating.toString();
        dialogRef.componentInstance.yelpRating = (Math.floor(Math.random() * 5) + 1).toString();
        dialogRef.componentInstance.fsRating = (Math.floor(Math.random() * 5) + 1).toString();

        return dialogRef.afterClosed();
    }
}