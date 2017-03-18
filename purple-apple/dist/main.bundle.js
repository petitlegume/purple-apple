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
//# sourceMappingURL=/Users/JohnWu/Documents/Projects/purple-apple/purple-apple/src/main.js.map

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
    function AppComponent(dialog, searchService, iconRegistry, sanitizer) {
        this.dialog = dialog;
        this.searchService = searchService;
        this.lat = 0;
        this.lng = 0;
        this.zoom = 14;
        this.test = ["salut1", "salut2"];
        this.competitors = {};
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
            _this.competitors = data.competitors;
            _this.lat = parseFloat(data.latlon[0]);
            _this.lng = parseFloat(data.latlon[1]);
        });
    };
    AppComponent.prototype.openStatistics = function () {
        this.dialog.open(AppComponent);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(633),
            styles: [__webpack_require__(630)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdIconRegistry */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdIconRegistry */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/JohnWu/Documents/Projects/purple-apple/purple-apple/src/app.component.js.map

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
//# sourceMappingURL=/Users/JohnWu/Documents/Projects/purple-apple/purple-apple/src/app.module.js.map

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
//# sourceMappingURL=/Users/JohnWu/Documents/Projects/purple-apple/purple-apple/src/search.service.js.map

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
//# sourceMappingURL=/Users/JohnWu/Documents/Projects/purple-apple/purple-apple/src/environment.js.map

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(248)();
// imports


// module
exports.push([module.i, ".full-height {\n  height: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.auto-width {\n  width: auto; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.verticalCenter {\n  position: relative;\n  top: 49%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.atTop {\n  top: 0px; }\n\n.atBottom {\n  bottom: 0px;\n  left: 0px;\n  position: absolute; }\n\n.textCenter {\n  text-align: center; }\n\n.textLeft {\n  text-align: left; }\n\n.absolutePos {\n  position: absolute; }\n\n.underneath {\n  z-index: -1; }\n\n.top-buffer-sm {\n  margin-top: 20px; }\n\n.no-top-buffer {\n  margin-top: 0px; }\n\n.top-buffer {\n  margin-top: 30px; }\n\n.top-buffer-lg {\n  margin-top: 40px; }\n\n.top-buffer-xl {\n  margin-top: 50px; }\n\n.side-buffer-xs-inverse {\n  margin-left: -10px;\n  margin-right: -10px; }\n\n.side-buffer-sm {\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.side-buffer {\n  margin-left: 30px;\n  margin-right: 30px; }\n\n.bottom-buffer-sm {\n  margin-bottom: 20px; }\n\n.bottom-buffer {\n  margin-bottom: 30px; }\n\n.bottom-buffer-xl {\n  margin-bottom: 50px; }\n\n.buffer-sm {\n  margin: 20px; }\n\n.buffer-xl {\n  margin: 20px; }\n\n.left-buffer-sm {\n  margin-left: 20px; }\n\n.side-padding-xs {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.side-padding {\n  padding-left: 30px;\n  padding-right: 30px; }\n\n.side-padding-xl {\n  padding-left: 50px;\n  padding-right: 50px; }\n\n.no-padding {\n  padding: 0px; }\n\n.all-side-padding-xs {\n  padding: 10px; }\n\n.all-side-padding-sm {\n  padding: 20px; }\n\n.all-side-padding {\n  padding: 30px; }\n\n.top-padding {\n  padding-top: 30px; }\n\n.top-padding-xs {\n  padding-top: 10px; }\n\n.bottom-padding {\n  padding-bottom: 30px; }\n\n.bottom-padding-sm {\n  padding-bottom: 20px; }\n\n.bottom-padding-xs {\n  padding-bottom: 10px; }\n\n.top-bottom-padding-sm {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\nmd-toolbar {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"full-height\">\n  <md-sidenav #sidenav>\n    salut\n  </md-sidenav>\n\n  <md-toolbar class=\"auto-width buffer-xl all-side-padding-sm\">\n    <button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\n      <md-icon svgIcon=\"menu\"></md-icon>\n    </button>\n    <md-input-container class=\"all-side-padding-sm\">\n      <input [(ngModel)] = \"address\" (setAddress) = \"getAddress($event)\" googleplace mdInput placeholder=\"What is the address?\" value=\"Sushi\">\n    </md-input-container>\n    <button md-mini-fab class=\"example-fab\" (click)=\"search()\">\n      <md-icon svgIcon=\"menu\"></md-icon>\n    </button>\n  </md-toolbar>\n  <sebm-google-map class=\"full-height full-width absolutePos atTop underneath\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n    <sebm-google-map-marker *ngFor=\"let result of competitors.gplacesResults\" (markerClick)=\"openStatistics()\" [latitude]=\"result.geometry.location.lat\" [longitude]=\"result.geometry.location.lng\"></sebm-google-map-marker>\n  </sebm-google-map>\n  <!--<sebm-google-map class=\"full-height full-width absolutePos atTop underneath\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">-->\n    <!--<sebm-google-map-marker *ngFor=\"let result of competitors.facebook\" (markerClick)=\"openStatistics()\" [latitude]=\"result.location.latitude\" [longitude]=\"result.location.longitude\"></sebm-google-map-marker>-->\n  <!--</sebm-google-map>-->\n\n</md-sidenav-container>\n\n\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(423);


/***/ })

},[683]);
//# sourceMappingURL=main.bundle.js.map