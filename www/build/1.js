webpackJsonp([1],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosPageModule", function() { return AlunosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlunosPageModule = /** @class */ (function () {
    function AlunosPageModule() {
    }
    AlunosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alunos__["a" /* AlunosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alunos__["a" /* AlunosPage */]),
            ],
        })
    ], AlunosPageModule);
    return AlunosPageModule;
}());

//# sourceMappingURL=alunos.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alunos_alunos__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlunosPage = /** @class */ (function () {
    function AlunosPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.aluno = this.navParams.data.aluno || {};
        this.criarForm();
        this.setupPageTitle();
    }
    AlunosPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.aluno ? 'Alterando aluno' : 'Novo Aluno';
    };
    AlunosPage.prototype.criarForm = function () {
        this.form = this.formBuilder.group({
            key: [this.aluno.key],
            name: [this.aluno.name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            endereco: [this.aluno.endereco, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            cpfRG: [this.aluno.cpfRG, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            nascimento: [this.aluno.nascimento, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            nomeResp: [this.aluno.nomeResp, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            telefoneResp: [this.aluno.telefoneResp, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            escola: [this.aluno.escola, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            observacoes: [this.aluno.observacoes]
        });
    };
    AlunosPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Aluno salvo com sucesso', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar aluno', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    AlunosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alunos',template:/*ion-inline-start:"D:\Projeto TCC\BuSchool\src\pages\alunos\alunos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.name.valid && (form.controls.name.dirty || form.controls.name.touched)" color="danger">\n      <div [hidden]="!form.controls.name.errors.required"> O Campo é obrigatório </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Endereço</ion-label>\n      <ion-input type="text" formControlName="endereco"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.endereco.valid && (form.controls.endereco.dirty || form.controls.endereco.touched)" color="danger">\n      <div [hidden]="!form.controls.endereco.errors.required"> O Campo é obrigatório </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>CPF ou RG</ion-label>\n      <ion-input type="numeric" maxlenght="11" formControlName="cpfRG"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.cpfRG.valid && (form.controls.cpfRG.dirty || form.controls.cpfRG.touched)" color="danger">\n      <div [hidden]="!form.controls.cpfRG.errors.required"> O Campo é obrigatório </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Data de Nascimento</ion-label>\n      <ion-datetime formControlName="nascimento" value="2010-02-19" placeholder="Selecione a data"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Nome do Responsável</ion-label>\n      <ion-input type="text" formControlName="nomeResp"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.nomeResp.valid && (form.controls.nomeResp.dirty || form.controls.nomeResp.touched)" color="danger">\n      <div [hidden]="!form.controls.nomeResp.errors.required"> O Campo é obrigatório </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefone do Responsável</ion-label>\n      <ion-input type="tel" formControlName="telResp"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.telResp.valid && (form.controls.telResp.dirty || form.controls.telResp.touched)" color="danger">\n      <div [hidden]="!form.controls.telResp.errors.required"> O Campo é obrigatório </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Escola</ion-label>\n      <ion-select formControlName="escola" interface="popover">\n        <ion-select-option value="escola1">Escola 1</ion-select-option>\n        <ion-select-option value="escola2">Escola 2</ion-select-option>\n        <ion-select-option value="escola3">Escola 3</ion-select-option>\n        <ion-select-option value="escola4">Escola 4</ion-select-option>\n        <ion-select-option value="escola5">Escola 5</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Observações</ion-label>\n      <ion-input type="text" formControlName="observacoes"></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projeto TCC\BuSchool\src\pages\alunos\alunos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_alunos_alunos__["a" /* AlunosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AlunosPage);
    return AlunosPage;
}());

//# sourceMappingURL=alunos.js.map

/***/ })

});
//# sourceMappingURL=1.js.map