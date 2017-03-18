webpackJsonp([1,4],{

/***/ 422:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 422;


/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(571);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/myGITs/purple-apple/purple-apple/src/main.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__(570);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(searchService, iconRegistry, sanitizer) {
        this.searchService = searchService;
        this.lat = 0;
        this.lng = 0;
        this.test = ["salut1", "salut2"];
        this.competitors = {
            gplacesResults: []
        };
        this.exParams = {
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
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_menu_black_24px.svg'));
    }
    AppComponent.prototype.search = function () {
        var _this = this;
        this.searchService.search(this.exParams).subscribe(function (data) {
            _this.competitors = data;
            _this.lat = parseFloat(data.latlon[0]);
            _this.lng = parseFloat(data.latlon[1]);
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(633),
            styles: [__webpack_require__(630)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdIconRegistry */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdIconRegistry */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/myGITs/purple-apple/purple-apple/src/app.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(568);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBH0oLSovN7BAK6nN3VjSMVGcjCODyPRqU'
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/myGITs/purple-apple/purple-apple/src/app.module.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (params) {
        return this.http.get("http://localhost:3000/api/search")
            .map(function (res) { return res.json(); });
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
//# sourceMappingURL=C:/myGITs/purple-apple/purple-apple/src/search.service.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/myGITs/purple-apple/purple-apple/src/environment.js.map

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(248)();
// imports


// module
exports.push([module.i, ".full-height {\r\n  height: 100%; }\r\n\r\n.full-width {\r\n  width: 100%; }\r\n\r\n.auto-width {\r\n  width: auto; }\r\n\r\n.center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto; }\r\n\r\n.verticalCenter {\r\n  position: relative;\r\n  top: 49%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%); }\r\n\r\n.atTop {\r\n  top: 0px; }\r\n\r\n.atBottom {\r\n  bottom: 0px;\r\n  left: 0px;\r\n  position: absolute; }\r\n\r\n.textCenter {\r\n  text-align: center; }\r\n\r\n.textLeft {\r\n  text-align: left; }\r\n\r\n.absolutePos {\r\n  position: absolute; }\r\n\r\n.underneath {\r\n  z-index: -1; }\r\n\r\n.top-buffer-sm {\r\n  margin-top: 20px; }\r\n\r\n.no-top-buffer {\r\n  margin-top: 0px; }\r\n\r\n.top-buffer {\r\n  margin-top: 30px; }\r\n\r\n.top-buffer-lg {\r\n  margin-top: 40px; }\r\n\r\n.top-buffer-xl {\r\n  margin-top: 50px; }\r\n\r\n.side-buffer-xs-inverse {\r\n  margin-left: -10px;\r\n  margin-right: -10px; }\r\n\r\n.side-buffer-sm {\r\n  margin-left: 20px;\r\n  margin-right: 20px; }\r\n\r\n.side-buffer {\r\n  margin-left: 30px;\r\n  margin-right: 30px; }\r\n\r\n.bottom-buffer-sm {\r\n  margin-bottom: 20px; }\r\n\r\n.bottom-buffer {\r\n  margin-bottom: 30px; }\r\n\r\n.bottom-buffer-xl {\r\n  margin-bottom: 50px; }\r\n\r\n.buffer-sm {\r\n  margin: 20px; }\r\n\r\n.buffer-xl {\r\n  margin: 20px; }\r\n\r\n.left-buffer-sm {\r\n  margin-left: 20px; }\r\n\r\n.side-padding-xs {\r\n  padding-left: 10px;\r\n  padding-right: 10px; }\r\n\r\n.side-padding {\r\n  padding-left: 30px;\r\n  padding-right: 30px; }\r\n\r\n.side-padding-xl {\r\n  padding-left: 50px;\r\n  padding-right: 50px; }\r\n\r\n.no-padding {\r\n  padding: 0px; }\r\n\r\n.all-side-padding-xs {\r\n  padding: 10px; }\r\n\r\n.all-side-padding-sm {\r\n  padding: 20px; }\r\n\r\n.all-side-padding {\r\n  padding: 30px; }\r\n\r\n.top-padding {\r\n  padding-top: 30px; }\r\n\r\n.top-padding-xs {\r\n  padding-top: 10px; }\r\n\r\n.bottom-padding {\r\n  padding-bottom: 30px; }\r\n\r\n.bottom-padding-sm {\r\n  padding-bottom: 20px; }\r\n\r\n.bottom-padding-xs {\r\n  padding-bottom: 10px; }\r\n\r\n.top-bottom-padding-sm {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px; }\r\n\r\nmd-toolbar {\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"full-height\">\r\n  <md-sidenav #sidenav>\r\n    salut\r\n  </md-sidenav>\r\n\r\n  <md-toolbar class=\"auto-width buffer-xl all-side-padding-sm\">\r\n    <button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\r\n      <md-icon svgIcon=\"menu\"></md-icon>\r\n    </button>\r\n    <md-input-container class=\"all-side-padding-sm\">\r\n      <input [(ngModel)] = \"address\" (setAddress) = \"getAddress($event)\" googleplace mdInput placeholder=\"What is the address?\" value=\"Sushi\">\r\n    </md-input-container>\r\n    <button md-mini-fab class=\"example-fab\" (click)=\"search()\">\r\n      <md-icon svgIcon=\"menu\"></md-icon>\r\n    </button>\r\n  </md-toolbar>\r\n  <div style=\"background-color:red; height:100px; width:100px;\" *ngFor=\"let result of competitors.gplacesResults\">\r\n    <div>{{result.geometry.location.lat}}</div>\r\n  </div>\r\n  <!--<sebm-google-map class=\"full-height full-width absolutePos atTop underneath\" [latitude]=\"lat\" [longitude]=\"lng\">\r\n    <sebm-google-map-marker *ngFor=\"let result of competitors.gplacesResults\" [latitude]=\"result.geometry.location.lat\" [longitude]=\"result.geometry.location.lon\"></sebm-google-map-marker>\r\n  </sebm-google-map>-->\r\n\r\n</md-sidenav-container>\r\n\r\n\r\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(423);


/***/ })

},[683]);
//# sourceMappingURL=main.bundle.js.map