function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/abut-us/abut-us.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/abut-us/abut-us.component.ts ***!
    \**********************************************/

  /*! exports provided: AbutUsComponent */

  /***/
  function srcAppAbutUsAbutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbutUsComponent", function () {
      return AbutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AbutUsComponent = /*#__PURE__*/function () {
      function AbutUsComponent() {
        _classCallCheck(this, AbutUsComponent);
      }

      _createClass(AbutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AbutUsComponent;
    }();

    AbutUsComponent.ɵfac = function AbutUsComponent_Factory(t) {
      return new (t || AbutUsComponent)();
    };

    AbutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbutUsComponent,
      selectors: [["app-abut-us"]],
      decls: 12,
      vars: 0,
      consts: [[1, "parallex-img"], [1, "text"], [1, "space"], [1, "head-o-3"], [1, "para-o-3"]],
      template: function AbutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cars Untold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cars Untold is a brand under the flagship company Excellence. Here on cars untold we are on the mission to discover the stories behind our favourite cars, because we believe that it is only when we know the heritage value of cars we can truly cherish it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Excellence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Excellence is a Banner company believing in the betterment of humanity by Excellence. Here at Excellence we focus on growth by quantam leaps through excellence, of our customers and our companies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".parallex-img[_ngcontent-%COMP%] {\n  background-image: url('sunset.jpg');\n  height: 50vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  padding-left: 20px;\n  padding-top: 95px;\n}\n\n.head-o-3[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  margin-top: 75px;\n}\n\n.para-o-3[_ngcontent-%COMP%] {\n  color: #D5D5D5;\n  text-align: center;\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.space[_ngcontent-%COMP%] {\n  padding-bottom: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJ1dC11cy9DOlxcMV9Xb3JrXFxDb2RpbmcgTGFuZ3VhZ2VzXFxBbmd1bGFyIDlcXHByb2plY3QxL3NyY1xcYXBwXFxhYnV0LXVzXFxhYnV0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYnV0LXVzL2FidXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURFQztFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYWJ1dC11cy9hYnV0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGV4LWltZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvSW1hZ2VzL3N1bnNldC5qcGdcIik7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbiAudGV4dHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6OTVweDsgICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbi5oZWFkLW8tM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi5wYXJhLW8tM3tcclxuICAgIGNvbG9yOiAjRDVENUQ1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNwYWNle1xyXG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbn0iLCIucGFyYWxsZXgtaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9JbWFnZXMvc3Vuc2V0LmpwZ1wiKTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA5NXB4O1xufVxuXG4uaGVhZC1vLTMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnBhcmEtby0zIHtcbiAgY29sb3I6ICNENUQ1RDU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uc3BhY2Uge1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-abut-us',
          templateUrl: './abut-us.component.html',
          styleUrls: ['./abut-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/all-blogs/all-blogs.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/all-blogs/all-blogs.component.ts ***!
    \**************************************************/

  /*! exports provided: AllBlogsComponent */

  /***/
  function srcAppAllBlogsAllBlogsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllBlogsComponent", function () {
      return AllBlogsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AllBlogsComponent = /*#__PURE__*/function () {
      function AllBlogsComponent() {
        _classCallCheck(this, AllBlogsComponent);
      }

      _createClass(AllBlogsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AllBlogsComponent;
    }();

    AllBlogsComponent.ɵfac = function AllBlogsComponent_Factory(t) {
      return new (t || AllBlogsComponent)();
    };

    AllBlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllBlogsComponent,
      selectors: [["app-all-blogs"]],
      decls: 27,
      vars: 0,
      consts: [[1, "parallex-img"], [1, "text"], [1, "all-blogs-1"], [1, "blog-1", "col-md-6"], ["src", "assets/Images/cover_the-story-of-the-person-who-created-the-world-s-first-car-862x457.jpg", 1, "img-1"], [1, "txt-1"], [1, "head-1"], [1, "sub-1"], [1, "blog-2", "col-md-6"], ["src", "assets/Images/gfhjkji.jpg", 1, "img-2"], [1, "txt-2"], [1, "head-2"], [1, "sub-2"], [1, "blog-3", "col-md-6"], ["src", "assets/Images/Dodge-Demon-Feature-750x375.jpg", 1, "img-3"], [1, "txt-3"], [1, "head-3"], [1, "sub-3"]],
      template: function AllBlogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Blogs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " WHERE DID IT ALL START");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The story of worlds first car. An unseen revolution that was yet to come.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "THE HEMISPHERICAL BEAST - I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " An engine that shaped the course of automotive history as we see it. A story about HEMI...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "THE HEMISPHERICAL BEAST - II");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " An engine thatwent from being in a jet plane to powering the most powerful...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".parallex-img[_ngcontent-%COMP%] {\n  background-image: url('road-2560x1440-autumn-forest-autumn-trees-4k-17668.jpg');\n  height: 50vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n.parallex-img[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 70px;\n  color: black;\n  padding-left: 20px;\n}\n.all-blogs-1[_ngcontent-%COMP%] {\n  background: black;\n  margin-top: 0px;\n  padding-top: 0px;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.all-blogs-1[_ngcontent-%COMP%]   .img-1[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 7px;\n  padding-top: 50px;\n  margin-right: -50px;\n}\n.all-blogs-1[_ngcontent-%COMP%]   .txt-1[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  text-align: center;\n  padding-right: 20px;\n  padding-top: 15px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  background-color: #515151;\n  margin-right: 10px;\n  width: 100%;\n  height: 127px;\n}\n.all-blogs-1[_ngcontent-%COMP%]   .img-2[_ngcontent-%COMP%] {\n  padding-bottom: 7px;\n  padding-top: 50px;\n  width: 100%;\n}\n.all-blogs-1[_ngcontent-%COMP%]   .txt-2[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  text-align: center;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 15px;\n  padding-bottom: 20px;\n  background-color: #515151;\n  margin-right: 10px;\n  width: 100%;\n  height: 127px;\n}\n.all-blogs-1[_ngcontent-%COMP%]   .img-3[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n  margin-top: 50px;\n  margin-right: 10px;\n  width: 100%;\n}\n.all-blogs-1[_ngcontent-%COMP%]   .txt-3[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  text-align: center;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 15px;\n  padding-bottom: 20px;\n  background-color: #515151;\n  margin-right: 10px;\n  width: 100%;\n  height: 127px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLWJsb2dzL0M6XFwxX1dvcmtcXENvZGluZyBMYW5ndWFnZXNcXEFuZ3VsYXIgOVxccHJvamVjdDEvc3JjXFxhcHBcXGFsbC1ibG9nc1xcYWxsLWJsb2dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGwtYmxvZ3MvYWxsLWJsb2dzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0VBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FDQ0o7QURDQztFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDTDtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0hKO0FETUM7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSkw7QURRQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ05KO0FEU0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBR0MsV0FBQTtBQ1RMO0FEWUc7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNWSjtBRGNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1pKO0FEZUc7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL2FsbC1ibG9ncy9hbGwtYmxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYWxsZXgtaW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9JbWFnZXMvcm9hZC0yNTYweDE0NDAtYXV0dW1uLWZvcmVzdC1hdXR1bW4tdHJlZXMtNGstMTc2NjguanBnXCIpO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cclxuIC50ZXh0e1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgICBjb2xvcjpibGFjaztcclxuICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5hbGwtYmxvZ3MtMXtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgIFxyXG5cclxuIC5pbWctMXtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogLTUwcHg7XHJcbiAgICAvLyAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuLnR4dC0xe1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7ICAgICAgICAgICBcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgxLCA4MSwgODEpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEyN3B4O1xyXG4gICB9XHJcblxyXG4uaW1nLTJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gICAudHh0LTJ7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICAgICAgICAgICBcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4OyAgICAgICAgICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MSwgODEsIDgxKTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjdweDtcclxuICAgfVxyXG5cclxuXHJcbi5pbWctM3tcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuICAgLnR4dC0ze1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAgICAgICAgICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDsgICAgICAgICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODEsIDgxLCA4MSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTI3cHg7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiLnBhcmFsbGV4LWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvSW1hZ2VzL3JvYWQtMjU2MHgxNDQwLWF1dHVtbi1mb3Jlc3QtYXV0dW1uLXRyZWVzLTRrLTE3NjY4LmpwZ1wiKTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLnBhcmFsbGV4LWltZyAudGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uYWxsLWJsb2dzLTEge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5hbGwtYmxvZ3MtMSAuaW1nLTEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogLTUwcHg7XG59XG4uYWxsLWJsb2dzLTEgLnR4dC0xIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI3cHg7XG59XG4uYWxsLWJsb2dzLTEgLmltZy0yIHtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFsbC1ibG9ncy0xIC50eHQtMiB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyN3B4O1xufVxuLmFsbC1ibG9ncy0xIC5pbWctMyB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hbGwtYmxvZ3MtMSAudHh0LTMge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxNTE1MTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjdweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllBlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-blogs',
          templateUrl: './all-blogs.component.html',
          styleUrls: ['./all-blogs.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _all_blogs_all_blogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-blogs/all-blogs.component */
    "./src/app/all-blogs/all-blogs.component.ts");
    /* harmony import */


    var _abut_us_abut_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./abut-us/abut-us.component */
    "./src/app/abut-us/abut-us.component.ts");

    var routes = [{
      path: 'app-home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'all-blogs',
      component: _all_blogs_all_blogs_component__WEBPACK_IMPORTED_MODULE_3__["AllBlogsComponent"]
    }, {
      path: 'abut-us',
      component: _abut_us_abut_us_component__WEBPACK_IMPORTED_MODULE_4__["AbutUsComponent"]
    }, {
      path: '',
      redirectTo: '/app-home',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'project1';
        this.showMenuFlag = false;
      }

      _createClass(AppComponent, [{
        key: "showMenu",
        value: function showMenu() {
          this.showMenuFlag = !this.showMenuFlag;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 24,
      vars: 1,
      consts: [[1, "nav-bar"], [1, "nav-btn", 3, "click"], [1, "nav-cnt"], [1, "content", 3, "hidden"], ["routerLink", "/app-home", "routerLinkActive", "active"], [2, "height", "35px", "width", "80px", "padding-left", "18px"], ["routerLink", "/all-blogs", "routerLinkActive", "active"], [2, "height", "35px", "width", "80px"], ["routerLink", "/abut-us", "routerLinkActive", "active"], ["id", "footer"], [1, "home"], [1, "all-blogs"], [1, "about-us"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() {
            return ctx.showMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cars Untold ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " All Blogs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " About Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " All Blogs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " About Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showMenuFlag);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".nav-bar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n}\n\n.nav-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n  color: white;\n  float: left;\n  font-weight: 350;\n  font-size: 20px;\n  width: 80px;\n  height: 40px;\n  margin: 8px 4px 0px 4px;\n  padding-top: 0px;\n  padding-left: 7px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.nav-btn[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  background-color: #ccc;\n}\n\n.nav-cnt[_ngcontent-%COMP%] {\n  color: White;\n  text-align: center;\n  margin: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 300;\n  padding-top: 10px;\n  padding-right: 45px;\n  padding-bottom: 10px;\n  overflow: hidden;\n  border-left: 1px solid rgba(255, 255, 255, 0.15);\n}\n\n.content[_ngcontent-%COMP%] {\n  background: #fff;\n  overflow: hidden;\n  transition: 0.9s;\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  flex-flow: row;\n  align-items: center;\n  padding-top: 10px;\n}\n\n\n\n.parallex-content[_ngcontent-%COMP%] {\n  background-image: url('wp3543058.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 100vh;\n}\n\n.parallex-content[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 150px;\n  padding-left: 30px;\n  color: snow;\n}\n\n.latest-uploads[_ngcontent-%COMP%] {\n  background: black;\n  margin-top: 0px;\n  padding-top: 0px;\n  color: black;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .text-lu[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0px;\n  padding-top: 30px;\n  color: white;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  background: black;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .latest-upload-img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  text-align: center;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  background-color: #515151;\n  height: 200px;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   #sub-txt-img1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  margin-top: 40px;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   #sub-txt-img2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  margin-top: 40px;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   #sub-txt-img3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  margin-top: 40px;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .mar-img-1[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding-top: 5px;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .mar-img-2[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding-top: 5px;\n}\n\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .mar-img-3[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 5px;\n}\n\n.our-goal[_ngcontent-%COMP%] {\n  background-image: url('1. Rolls Royce Wraith.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: calc(100vh - 140px);\n  flex-wrap: wrap;\n  margin-top: 40px;\n  padding-top: 150px;\n  padding-left: 25px;\n}\n\n.our-goal[_ngcontent-%COMP%]   .goal-text[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  display: flexbox;\n  justify-content: left;\n  flex-wrap: wrap;\n}\n\n.our-goal[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 40px;\n}\n\n.our-goal[_ngcontent-%COMP%]   .bdy[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 40px;\n}\n\n#footer[_ngcontent-%COMP%] {\n  display: flex;\n  color: #e05c5c;\n  font-weight: 400;\n  text-align: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-color: #0D0026;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin-top: 0px;\n}\n\n#footer[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n\n#footer[_ngcontent-%COMP%]   .all-blogs[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  padding-right: 10px;\n}\n\n#footer[_ngcontent-%COMP%]   .about-us[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXDFfV29ya1xcQ29kaW5nIExhbmd1YWdlc1xcQW5ndWxhciA5XFxwcm9qZWN0MS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0RBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0FDQ0o7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRFFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7O0FBa0RBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FDUko7O0FEU0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDUFI7O0FEWUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNUSjs7QURXSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1RSOztBRGFJO0VBQ0csZ0JBQUE7RUFDQyxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7QUNaUjs7QURhUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ1haOztBRGFRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ1haOztBRGNZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1poQjs7QURnQlk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZGhCOztBRGtCWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNoQmhCOztBRHlCUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUN2Qlo7O0FEMkJRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ3pCWjs7QUQ0QlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDMUJaOztBRGdDQTtFQUVJLGtEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDOUJKOztBRGlDRztFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNoQ1A7O0FEb0NHO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ2xDUDs7QURxQ0c7RUFDSyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNuQ1I7O0FEd0NBO0VBRUcsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ3RDSDs7QUR3Q0c7RUFDSSxtQkFBQTtBQ3RDUDs7QUR5Q0c7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDdkNQOztBRDBDRztFQUNJLGtCQUFBO0FDeENQIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDApO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XHJcbn1cclxuXHJcbi5uYXYtYnRue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MCA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogOHB4IDRweCAwcHggNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMCk7XHJcbn1cclxuXHJcbi5uYXYtYnRuOmhvdmVye1xyXG4gICAgdHJhbnNpdGlvbjowLjRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2NjIDtcclxufVxyXG5cclxuLm5hdi1jbnR7XHJcbiAgICBjb2xvcjogV2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICAjZmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuOXM7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufSAgICBcclxuICAgIFxyXG5cclxuXHJcbi8qXHJcbi5hY2NvcmRpb24gbGFiZWwge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MCA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogOHB4IDRweCAwcHggNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDApO1xyXG59XHJcblxyXG5cclxuICAuYWNjb3JkaW9uIGxhYmVsOmhvdmVyLFxyXG4gIC5hY2NvcmRpb24gbGFiZWw6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgfVxyXG4gICBcclxuICAuYWNjb3JkaW9uIC5oYW5kbGUgbGFiZWw6YmVmb3JlIHtcclxuICAgIFxyXG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTU2ZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIFxyXG4gIH1cclxuICAgXHJcbiAgLmFjY29yZGlvbiA+IGlucHV0W25hbWU9XCJjb2xsYXBzZVwiXTpjaGVja2VkIH4gLmhhbmRsZSBsYWJlbDpiZWZvcmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIH1cclxuXHJcblxyXG4gIC5hY2NvcmRpb24gPiBpbnB1dFtuYW1lPVwiY29sbGFwc2VcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xyXG4gIH0qL1xyXG5cclxuXHJcblxyXG4ucGFyYWxsZXgtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9JbWFnZXMvd3AzNTQzMDU4LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC50aXRsZS1saW5lIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDozMHB4O1xyXG4gICAgICAgIGNvbG9yOnNub3c7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGF0ZXN0LXVwbG9hZHN7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgIFxyXG4gICAgLnRleHQtbHV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5mbGV4LWNvdGFpbmVyLWltZyB7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5sYXRlc3QtdXBsb2FkLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MSwgODEsIDgxKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAjc3ViLXR4dC1pbWcxIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICNzdWItdHh0LWltZzIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgI3N1Yi10eHQtaW1nMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAvL21hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLm1hci1pbWctMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLm1hci1pbWctMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFyLWltZy0zIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ub3VyLWdvYWx7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL0ltYWdlcy8xLiBSb2xscyBSb3ljZSBXcmFpdGguanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgXHJcbiAgICBcclxuICAgLmdvYWwtdGV4dHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjRkZGRkZGLCAkYWxwaGE6IDAuNSk7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gICAgICAgLy9tYXJnaW4tdG9wOjEwMHB4IDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgfVxyXG5cclxuXHJcbiAgIC5oZWFke1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgIH1cclxuXHJcbiAgIC5iZHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG4jZm9vdGVyIHtcclxuICAgXHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGNvbG9yOiByZ2IoMjI0LDkyLDkyKTtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiMwRDAwMjY7XHJcbiAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDBweDtcclxuXHJcbiAgIC5ob21le1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogNzBweDtcclxuICAgfVxyXG5cclxuICAgLmFsbC1ibG9nc3tcclxuICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5hYm91dC11c3tcclxuICAgICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgfVxyXG59IiwiLm5hdi1iYXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbn1cblxuLm5hdi1idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogMzUwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogOHB4IDRweCAwcHggNHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4ubmF2LWJ0bjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5uYXYtY250IHtcbiAgY29sb3I6IFdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC45cztcbiAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi8qXG4uYWNjb3JkaW9uIGxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDM1MCA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDhweCA0cHggMHB4IDRweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMCk7XG59XG5cblxuICAuYWNjb3JkaW9uIGxhYmVsOmhvdmVyLFxuICAuYWNjb3JkaW9uIGxhYmVsOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cblxuICAuYWNjb3JkaW9uIC5oYW5kbGUgbGFiZWw6YmVmb3JlIHtcblxuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS41NTZlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG5cbiAgfVxuXG4gIC5hY2NvcmRpb24gPiBpbnB1dFtuYW1lPVwiY29sbGFwc2VcIl06Y2hlY2tlZCB+IC5oYW5kbGUgbGFiZWw6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgfVxuXG5cbiAgLmFjY29yZGlvbiA+IGlucHV0W25hbWU9XCJjb2xsYXBzZVwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgfSovXG4ucGFyYWxsZXgtY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvSW1hZ2VzL3dwMzU0MzA1OC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ucGFyYWxsZXgtY29udGVudCAudGl0bGUtbGluZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiBzbm93O1xufVxuXG4ubGF0ZXN0LXVwbG9hZHMge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLnRleHQtbHUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5sYXRlc3QtdXBsb2FkcyAuZmxleC1jb3RhaW5lci1pbWcge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5sYXRlc3QtdXBsb2FkcyAuZmxleC1jb3RhaW5lci1pbWcgLmxhdGVzdC11cGxvYWQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5pbWctdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5pbWctdGV4dCAjc3ViLXR4dC1pbWcxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5pbWctdGV4dCAjc3ViLXR4dC1pbWcyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5pbWctdGV4dCAjc3ViLXR4dC1pbWczIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5tYXItaW1nLTEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmxhdGVzdC11cGxvYWRzIC5mbGV4LWNvdGFpbmVyLWltZyAubWFyLWltZy0yIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5sYXRlc3QtdXBsb2FkcyAuZmxleC1jb3RhaW5lci1pbWcgLm1hci1pbWctMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5vdXItZ29hbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvSW1hZ2VzLzEuIFJvbGxzIFJveWNlIFdyYWl0aC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4KTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5vdXItZ29hbCAuZ29hbC10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4Ym94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5vdXItZ29hbCAuaGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4ub3VyLWdvYWwgLmJkeSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4jZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNlMDVjNWM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBEMDAyNjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4jZm9vdGVyIC5ob21lIHtcbiAgcGFkZGluZy1yaWdodDogNzBweDtcbn1cbiNmb290ZXIgLmFsbC1ibG9ncyB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiNmb290ZXIgLmFib3V0LXVzIHtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _all_blogs_all_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./all-blogs/all-blogs.component */
    "./src/app/all-blogs/all-blogs.component.ts");
    /* harmony import */


    var _abut_us_abut_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./abut-us/abut-us.component */
    "./src/app/abut-us/abut-us.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _all_blogs_all_blogs_component__WEBPACK_IMPORTED_MODULE_5__["AllBlogsComponent"], _abut_us_abut_us_component__WEBPACK_IMPORTED_MODULE_6__["AbutUsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _all_blogs_all_blogs_component__WEBPACK_IMPORTED_MODULE_5__["AllBlogsComponent"], _abut_us_abut_us_component__WEBPACK_IMPORTED_MODULE_6__["AbutUsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 37,
      vars: 0,
      consts: [[1, "parallex-content"], [1, "title-line"], [1, "latest-uploads"], [1, "text-lu"], [1, "flex-cotainer-img"], [1, "col-md-4"], ["src", "assets/Images/Dodge-Demon-Feature-750x375.jpg", 1, "latest-upload-img"], [1, "img-text", "mar-img-1"], [2, "color", "whitesmoke"], ["id", "sub-txt-img1"], ["src", "assets/Images/gfhjkji.jpg", 1, "latest-upload-img"], [1, "img-text", "mar-img-2"], ["id", "sub-txt-img2"], ["src", "assets/Images/cover_the-story-of-the-person-who-created-the-world-s-first-car-862x457.jpg", 1, "latest-upload-img"], [1, "img-text", "mar-img-3"], ["id", "sub-txt-img3"], [1, "our-goal"], [1, "goal-text", "col-md-4"], [1, "head"], [1, "bdy"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Explore Cars Untold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Latest Uploads");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " THE HEMISPHERICAL BEAST - II ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " An engine that went from being in a jet plane to powering the most powerful naturally aspirated engine. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " THE HEMISPHERICAL BEAST - I ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " An engine that shaped the course of automotive history as we see it. A story about HEMI and why it's so powerful. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " WHERE DID IT ALL START ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " The story of worlds first car. An unseen revolution that was yet to come. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Our Goal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Discovering the stories lurking in the shadows of the cars we love and mechanics that's dear to us. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".parallex-content[_ngcontent-%COMP%] {\n  background-image: url('wp3543058.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 100vh;\n}\n.parallex-content[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 150px;\n  padding-left: 30px;\n  color: snow;\n}\n.latest-uploads[_ngcontent-%COMP%] {\n  background: black;\n  margin-top: 0px;\n  padding-top: 0px;\n  color: black;\n}\n.latest-uploads[_ngcontent-%COMP%]   .text-lu[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0px;\n  padding-top: 30px;\n  color: white;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  background: black;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .latest-upload-img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  text-align: center;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  background-color: #515151;\n  height: 200px;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   #sub-txt-img1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  margin-top: 40px;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   #sub-txt-img2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  margin-top: 40px;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   #sub-txt-img3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  margin-top: 40px;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .mar-img-1[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding-top: 5px;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .mar-img-2[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding-top: 5px;\n}\n.latest-uploads[_ngcontent-%COMP%]   .flex-cotainer-img[_ngcontent-%COMP%]   .mar-img-3[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 5px;\n}\n.our-goal[_ngcontent-%COMP%] {\n  background-image: url('1. Rolls Royce Wraith.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: calc(100vh - 140px);\n  flex-wrap: wrap;\n  margin-top: 40px;\n  padding-top: 150px;\n  padding-left: 25px;\n}\n.our-goal[_ngcontent-%COMP%]   .goal-text[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  display: flexbox;\n  justify-content: left;\n  flex-wrap: wrap;\n}\n.our-goal[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 40px;\n}\n.our-goal[_ngcontent-%COMP%]   .bdy[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcMV9Xb3JrXFxDb2RpbmcgTGFuZ3VhZ2VzXFxBbmd1bGFyIDlcXHByb2plY3QxL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0VSO0FER0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQVI7QURJSTtFQUNHLGdCQUFBO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxlQUFBO0FDSFI7QURJUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0ZaO0FESVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDRlo7QURLWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNIaEI7QURPWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7QURTWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNQaEI7QURnQlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDZFo7QURrQlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDaEJaO0FEbUJRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ2pCWjtBRHVCQTtFQUVJLGtEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDckJKO0FEd0JHO0VBQ0ksMENBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ3ZCUDtBRDJCRztFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUN6QlA7QUQ0Qkc7RUFDSyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUMxQlIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYWxsZXgtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9JbWFnZXMvd3AzNTQzMDU4LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC50aXRsZS1saW5lIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDozMHB4O1xyXG4gICAgICAgIGNvbG9yOnNub3c7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGF0ZXN0LXVwbG9hZHN7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgIFxyXG4gICAgLnRleHQtbHV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5mbGV4LWNvdGFpbmVyLWltZyB7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5sYXRlc3QtdXBsb2FkLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MSwgODEsIDgxKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAjc3ViLXR4dC1pbWcxIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICNzdWItdHh0LWltZzIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgI3N1Yi10eHQtaW1nMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAvL21hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLm1hci1pbWctMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLm1hci1pbWctMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFyLWltZy0zIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ub3VyLWdvYWx7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL0ltYWdlcy8xLiBSb2xscyBSb3ljZSBXcmFpdGguanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgXHJcbiAgICBcclxuICAgLmdvYWwtdGV4dHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjRkZGRkZGLCAkYWxwaGE6IDAuNSk7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gICAgICAgLy9tYXJnaW4tdG9wOjEwMHB4IDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgfVxyXG5cclxuXHJcbiAgIC5oZWFke1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgIH1cclxuXHJcbiAgIC5iZHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICB9XHJcbn0iLCIucGFyYWxsZXgtY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvSW1hZ2VzL3dwMzU0MzA1OC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ucGFyYWxsZXgtY29udGVudCAudGl0bGUtbGluZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiBzbm93O1xufVxuXG4ubGF0ZXN0LXVwbG9hZHMge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLnRleHQtbHUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5sYXRlc3QtdXBsb2FkcyAuZmxleC1jb3RhaW5lci1pbWcge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5sYXRlc3QtdXBsb2FkcyAuZmxleC1jb3RhaW5lci1pbWcgLmxhdGVzdC11cGxvYWQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5pbWctdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5pbWctdGV4dCAjc3ViLXR4dC1pbWcxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5pbWctdGV4dCAjc3ViLXR4dC1pbWcyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5pbWctdGV4dCAjc3ViLXR4dC1pbWczIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubGF0ZXN0LXVwbG9hZHMgLmZsZXgtY290YWluZXItaW1nIC5tYXItaW1nLTEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmxhdGVzdC11cGxvYWRzIC5mbGV4LWNvdGFpbmVyLWltZyAubWFyLWltZy0yIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5sYXRlc3QtdXBsb2FkcyAuZmxleC1jb3RhaW5lci1pbWcgLm1hci1pbWctMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5vdXItZ29hbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvSW1hZ2VzLzEuIFJvbGxzIFJveWNlIFdyYWl0aC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4KTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5vdXItZ29hbCAuZ29hbC10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4Ym94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5vdXItZ29hbCAuaGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4ub3VyLWdvYWwgLmJkeSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\1_Work\Coding Languages\Angular 9\project1\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map