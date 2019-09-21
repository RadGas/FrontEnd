(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"container\">\n\n    <div class=\"logo\">\n      <img src=\"../assets/icon/logo.jpeg\">\n    </div>\n    <div class=\"example-button-row\">\n        <ion-input class=\"input-text\" placeholder=\"Search gas prices by zip code...\"></ion-input>\n        <ion-icon onclick={test()} class=\"pin\" name=\"pin\" color=\"primary\"></ion-icon>\n        <ion-button class=\"search-button\" expand=\"full\" routerLink=\"/tabs/tab2\">Search</ion-button>\n\n    </div>\n    <p>Lat: {{ lat }}</p>\n    <p>Long: {{ lng }}</p>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: -webkit-box;\n  display: flex;\n  text-align: left;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-icon.pin {\n  border-style: solid;\n  border-color: #1A237E;\n  border-width: 1px 0px 1px 1px;\n  height: 43px;\n  padding: 0 15px;\n}\n\nion-input.input-text {\n  border-style: solid;\n  border-color: #1A237E;\n  border-width: 1px 0px 1px 1px;\n  max-width: 240px;\n}\n\nion-button.search-button {\n  margin: 0px;\n  height: 45px;\n}\n\ndiv.logo {\n  padding-top: 60px;\n  margin: 0 !important;\n  text-align: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.logo img {\n  border-radius: 100%;\n  max-width: 350px;\n  text-align: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  padding: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0Rlc2t0b3AvRnJvbnRFbmQvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7O0FERUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsYUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24taWNvbi5waW4ge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMxQTIzN0U7XG4gIGJvcmRlci13aWR0aDogMXB4IDBweCAxcHggMXB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbmlvbi1pbnB1dC5pbnB1dC10ZXh0IHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMUEyMzdFO1xuICBib3JkZXItd2lkdGg6IDFweCAwcHggMXB4IDFweDtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbn1cblxuaW9uLWJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNDVweDtcbn1cbmRpdi5sb2dve1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmxvZ28gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNTBweDs7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2MHB4O1xufSIsIi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWljb24ucGluIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMUEyMzdFO1xuICBib3JkZXItd2lkdGg6IDFweCAwcHggMXB4IDFweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbmlvbi1pbnB1dC5pbnB1dC10ZXh0IHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMUEyMzdFO1xuICBib3JkZXItd2lkdGg6IDFweCAwcHggMXB4IDFweDtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbn1cblxuaW9uLWJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuZGl2LmxvZ28ge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");



let Tab1Page = class Tab1Page {
    constructor(geolocation) {
        this.geolocation = geolocation;
    }
    ionViewLoad() {
        this.geolocation.getCurrentPosition()
            .then(pos => {
            this.lat = pos.coords.latitude;
            this.lng = pos.coords.longitude;
        })
            .catch(err => console.log(err));
    }
    test() {
        this.geolocation.getCurrentPosition()
            .then(pos => {
            this.lat = pos.coords.latitude;
            this.lng = pos.coords.longitude;
        })
            .catch(err => console.log(err));
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map