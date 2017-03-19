import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    templateUrl: `./statsDialog.html`
})
export class ConfirmDialog {

    public title: string;
    public gplacesRating: string;
    public fsRating: string;
    public yelpRating: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }
}