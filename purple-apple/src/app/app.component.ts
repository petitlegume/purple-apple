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
  public test: Array<string> = ["salut1", "salut2"];
  public competitors = {};
  private exParams = {
    "loc_brandname": "A&W",
    "loc_branchid": "5545",
    "loc_name": "A&W",
    "loc_bizcontact": "David Rocheleau",
    "loc_emailcontact": "",
    "loc_sab": "N",
    "loc_addr1": "655 avenue du Président-Kennedy",
    "loc_addr2": "",
    "loc_city": "Montréal",
    "loc_state": "QC",
    "loc_zip": "H3A 1K1",
    "loc_country": "CA",
    "loc_mall": "",
    "loc_mainphone": "5149670135",
    "loc_secphone": null,
    "loc_fax": null,
    "loc_email": "",
    "loc_trackedwebsite": "http://aw.ca/",
    "loc_publishedwebsite": "http://aw.ca/",
    "loc_cat": "Hamburger Restaurant,Breakfast Restaurant,Fast Food Restaurant,American Restaurant,Restaurant",
    "loc_hours": "Sunday 00:00:24:00, Monday 00:00:24:00, Tuesday 00:00:24:00, Wednesday 00:00:24:00, Thursday 00:00:24:00, Friday 00:00:24:00, Saturday 00:00:24:00",
    "loc_hoursadd": "Open 24 Hours",
    "loc_payments": "",
    "loc_descsnippet": "Première chaîne de restaurants de hamburgers au Canada. Grâce aux hamburgers savoureux, aux rondelles d'oignon et à la fameuse Root Beer A&W depuis 1956....\nCanada's original burger restaurant. Serving great-tasting burgers, handmade onion rings, and frosted mugs of famous A&W Root Beer since 1956.",
    "loc_descshort": "",
    "loc_desclong": "Première chaîne de restaurants de burgers au Canada. Depuis 1956, elle sert de vrais bons burgers, des rondelles d'oignon faites à la main et la fameuse Root Beer A&W dans des bocks givrés. Chez A&W, nous avons entrepris de trouver des ingrédients simples et savoureux, produits avec soin. Nous sommes fiers de respecter des normes rigoureuses pour nos aliments et vous pouvez le déguster dans tout ce que nous servons. Tout cela fait partie de notre engagement à vous servir des aliments qui sont un bon choix. Les vrais bons burgers sont notre priorité. Il est donc naturel que A&W soit la première et la seule chaîne nationale de burgers au Canada à servir du bœuf élevé sans l'ajout d'hormones ou de stéroïdes. Elle est aussi la première et la seule chaîne nationale au pays à servir du poulet élevé sans antibiotiques. Nos œufs produits ici, au Canada, proviennent de poules nourries sans aucun sous-produit animal. Nous sommes aussi heureux de servir du café biologique et équitable mélangé pour nous par Van Houtte....\nCanada's original burger restaurant. Serving great-tasting burgers, handmade onion rings, and frosted mugs of famous A&W Root Beer since 1956. At A&W, we’re on a journey to source simple, great-tasting ingredients, farmed with care. We’re proud to have high standards when it comes to our food and you can taste it in everything we serve. It’s all part of our commitment to serve you food you can feel good about. For us, great burgers come first. So it’s only natural that we’re the first and only national burger restaurant in Canada to serve beef raised without the use of hormones or steroids. We’re also the first and only national burger restaurant in Canada to serve chicken raised without the use of antibiotics. Our eggs are farmed right here in Canada, from hens fed a vegetarian diet without animal by-products. We’re also proud to serve organic, Fairtrade coffee blended for us by Master Roaster Van Houtte.",
    "loc_keywords": "burger, breakfast, chicken , restaurant, location, menu, coupons, root beer, Teen Burger, beef",
    "loc_geo": "Montréal",
    "loc_tags": "QC",
    "loc_dirpackage": "AW Custom 15",
    "loc_yearfounded": 0,
    "loc_logo": "",
    "loc_banner": "",
    "loc_images": [],
    "loc_sabunit": "",
    "loc_sabdistance": 0,
    "loc_sabregions": "",
    "loc_providedlatitude": null,
    "loc_providedlongitude": null,
    "loc_status": 4,
    "loc_distto": "",
    "loc_distcc": "",
    "loc_distnotes": null,
    "loc_swiqlogin": null,
    "loc_swiqpass": null,
    "loc_latlong": "-73.5725866,45.5047528",
    "swiq_location_inclstate": 1,
    "loc_canceldate": null,
    "loc_suppresslistings": null,
    "loc_closeddoorsdate": null,
    "loc_socialmediaurls": "",
    "loc_alternativewebsites": null,
    "loc_services": "",
    "loc_createdAt": "2015-01-01T00:00:00.000Z",
    "loc_updatedAt": "2017-03-16T21:41:44.000Z",
    "loc_professional": null,
    "loc_callTrackingNumber": null,
    "loc_businessType": null,
    "loc_latlongJson": null,
    "categories": [
      {
        "id": "4bf58dd8d48988d16e941735",
        "name": "Fast Food Restaurants"
      },
      {
        "id": "4bf58dd8d48988d143941735",
        "name": "Breakfast Restaurant"
      },
      {
        "id": "4bf58dd8d48988d16c941735",
        "name": "Burger Joints"
      }
    ],
    "snippetDescription": {
      "en": {
        "lang": "en",
        "countryCode": "US",
        "content": "Première chaîne de restaurants de hamburgers au Canada. Grâce aux hamburgers savoureux, aux rondelles d'oignon et à la fameuse Root Beer A&W depuis 1956....\nCanada's original burger restaurant. Serving great-tasting burgers, handmade onion rings, and frosted mugs of famous A&W Root Beer since 1956."
      }
    },
    "longDescription": {
      "en": {
        "lang": "en",
        "countryCode": "US",
        "content": "Première chaîne de restaurants de burgers au Canada. Depuis 1956, elle sert de vrais bons burgers, des rondelles d'oignon faites à la main et la fameuse Root Beer A&W dans des bocks givrés. Chez A&W, nous avons entrepris de trouver des ingrédients simples et savoureux, produits avec soin. Nous sommes fiers de respecter des normes rigoureuses pour nos aliments et vous pouvez le déguster dans tout ce que nous servons. Tout cela fait partie de notre engagement à vous servir des aliments qui sont un bon choix. Les vrais bons burgers sont notre priorité. Il est donc naturel que A&W soit la première et la seule chaîne nationale de burgers au Canada à servir du bœuf élevé sans l'ajout d'hormones ou de stéroïdes. Elle est aussi la première et la seule chaîne nationale au pays à servir du poulet élevé sans antibiotiques. Nos œufs produits ici, au Canada, proviennent de poules nourries sans aucun sous-produit animal. Nous sommes aussi heureux de servir du café biologique et équitable mélangé pour nous par Van Houtte....\nCanada's original burger restaurant. Serving great-tasting burgers, handmade onion rings, and frosted mugs of famous A&W Root Beer since 1956. At A&W, we’re on a journey to source simple, great-tasting ingredients, farmed with care. We’re proud to have high standards when it comes to our food and you can taste it in everything we serve. It’s all part of our commitment to serve you food you can feel good about. For us, great burgers come first. So it’s only natural that we’re the first and only national burger restaurant in Canada to serve beef raised without the use of hormones or steroids. We’re also the first and only national burger restaurant in Canada to serve chicken raised without the use of antibiotics. Our eggs are farmed right here in Canada, from hens fed a vegetarian diet without animal by-products. We’re also proud to serve organic, Fairtrade coffee blended for us by Master Roaster Van Houtte."
      }
    },
    "additionalHours": {
      "message": "Open 24 Hours"
    },
    "parsedHours": {
      "Sun": [
        [
          "00:00",
          "00:00"
        ]
      ],
      "Mon": [
        [
          "00:00",
          "00:00"
        ]
      ],
      "Tue": [
        [
          "00:00",
          "00:00"
        ]
      ],
      "Wed": [
        [
          "00:00",
          "00:00"
        ]
      ],
      "Thu": [
        [
          "00:00",
          "00:00"
        ]
      ],
      "Fri": [
        [
          "00:00",
          "00:00"
        ]
      ],
      "Sat": [
        [
          "00:00",
          "00:00"
        ]
      ]
    }
  };

  constructor(private dialogsService: DialogsService, private searchService: SearchService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_menu_black_24px.svg'));
  }

  public search(){
    this.searchService.search(this.exParams).subscribe(data => {
      this.competitors = data.competitors;
      this.lat = parseFloat(data.latlon[0]);
      this.lng = parseFloat(data.latlon[1]);
    } );
  }

  public openStatistics(){
    this.dialogsService
        .confirm('Confirm Dialog', 'Are you sure you want to do this?')
        //.subscribe(res => this.result = res);
  }


}

