webpackJsonp([0],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarPageModule", function() { return CadastrarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarPageModule = /** @class */ (function () {
    function CadastrarPageModule() {
    }
    CadastrarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar__["a" /* CadastrarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar__["a" /* CadastrarPage */]),
            ],
        })
    ], CadastrarPageModule);
    return CadastrarPageModule;
}());

//# sourceMappingURL=cadastrar.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alunos_alunos__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastrarPage = /** @class */ (function () {
    function CadastrarPage(navCtrl, provider, toast) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.toast = toast;
        this.alunos = this.provider.getAll();
    }
    CadastrarPage.prototype.newAluno = function () {
        this.navCtrl.push('AlunosPage');
    };
    CadastrarPage.prototype.editAluno = function (aluno) {
        this.navCtrl.push('AlunosPage', { aluno: aluno });
    };
    CadastrarPage.prototype.removeAluno = function (key) {
        var _this = this;
        this.provider.remove(key)
            .then(function () {
            _this.toast.create({ message: 'Aluno removido com sucesso', duration: 3000 }).present();
        })
            .catch(function (e) {
            _this.toast.create({ message: 'Erro ao remover aluno', duration: 3000 }).present();
        });
    };
    CadastrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar',template:/*ion-inline-start:"D:\Projeto TCC\BuSchool\src\pages\cadastrar\cadastrar.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Alunos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let aluno of alunos | async">\n          <ion-item>\n            <h1>{{ aluno.name }}</h1>\n            <p>{{ aluno.escola }}</p>\n          </ion-item>\n          <ion-item-options side="left">\n            <button ion-button color="secondary" (click)="editAluno(aluno)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n            <button ion-button color="danger" (click)="removeAluno(aluno.key)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>  \n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="newAluno()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projeto TCC\BuSchool\src\pages\cadastrar\cadastrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_alunos_alunos__["a" /* AlunosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], CadastrarPage);
    return CadastrarPage;
}());

//# sourceMappingURL=cadastrar.js.map

/***/ })

});
//# sourceMappingURL=0.js.map