import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry, MdDialog} from '@angular/material';
import { SearchService } from './services/search.service';
import {DialogsService} from "./services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {

  lat: number = 0;
  lng: number = 0;
  zoom: number = 14;
  locId: number = 0;

  public competitors = {};

  constructor(private dialogsService: DialogsService, private searchService: SearchService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_menu_black_24px.svg'));
  }

  public search(){
    //foursqaure
    let dirId: number = 23;
    this.searchService.search(this.locId, dirId).subscribe(store => {
        this.searchService.gatherCompetitors(store).subscribe(data => {
        this.competitors = data.competitors;
        this.lat = parseFloat(data.latlon[0]);
        this.lng = parseFloat(data.latlon[1]);
      } );
    });

  }

  public openStatistics(rating){
    this.dialogsService
        .confirm(rating)
        //.subscribe(res => this.result = res);
  }


}

