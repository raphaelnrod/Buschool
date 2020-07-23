webpackJsonp([5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.user = angularFireAuth.authState;
    }
    AuthProvider.prototype.signOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthProvider.prototype.signIn = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu, auth) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.auth = auth;
    }
    HomePage.prototype.openMenu = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    HomePage.prototype.signOut = function () {
        var _this = this;
        this.auth.signOut().
            then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    HomePage.prototype.cadastrar = function () {
        this.navCtrl.push('CadastrarPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Projetos\Buschool\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n      <button ion-button icon-only menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>\n\n      BuSchool\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-menu [content]="mycontent" side="start" menuId="first">\n\n    <ion-header>\n\n        <ion-toolbar color="primary">\n\n          <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n    <ion-content >\n\n      <ion-list no-lines>\n\n          <button ion-item (click)="cadastrar()">\n\n              <ion-icon name="add" item-start></ion-icon>\n\n              Cadastrar\n\n            </button>\n\n            <button ion-item >\n\n                <ion-icon name="compass" item-start></ion-icon>\n\n                Rotas\n\n              </button>\n\n              <button ion-item >\n\n                  <ion-icon name="book" item-start></ion-icon>\n\n                  Relatórios\n\n                </button>\n\n                <button ion-item (click)="signOut()">\n\n                    <ion-icon name="exit" item-start></ion-icon>\n\n                    Sair\n\n                  </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>        \n\n  <ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <div>\n\n                <button ion-button block color="light" (click)="cadastrar()">\n\n                  Alunos\n\n                </button>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col>\n\n            <div>\n\n                <button ion-button block color="light" >\n\n                    Rotas\n\n                  </button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n\n\n'/*ion-inline-end:"D:\Projetos\Buschool\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlunosProvider = /** @class */ (function () {
    function AlunosProvider(db) {
        this.db = db;
        this.PATH = 'alunos/';
    }
    AlunosProvider.prototype.getAll = function () {
        return this.db.list(this.PATH)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    AlunosProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    AlunosProvider.prototype.save = function (aluno) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (aluno.key) {
                _this.db.list(_this.PATH)
                    .update(aluno.key, {
                    name: aluno.name, endereco: aluno.endereco,
                    cpfRG: aluno.cpfRG, nascimento: aluno.nascimento,
                    nomeResp: aluno.nomeResp, escola: aluno.escola,
                    observacoes: aluno.observacoes
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ name: aluno.name, endereco: aluno.endereco,
                    cpfRG: aluno.cpfRG, nascimento: aluno.nascimento,
                    nomeResp: aluno.nomeResp, escola: aluno.escola,
                    observacoes: aluno.observacoes })
                    .then(function () { return resolve(); });
            }
        });
    };
    AlunosProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    AlunosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AlunosProvider);
    return AlunosProvider;
}());

//# sourceMappingURL=alunos.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpassPage = /** @class */ (function () {
    function ResetpassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResetpassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpassPage');
    };
    ResetpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpass',template:/*ion-inline-start:"D:\Projetos\Buschool\src\pages\resetpass\resetpass.html"*/'<!--\n\n  Generated template for the ResetpassPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Ainda nao implementado</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projetos\Buschool\src\pages\resetpass\resetpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResetpassPage);
    return ResetpassPage;
}());

//# sourceMappingURL=resetpass.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alunos/alunos.module": [
		453,
		1
	],
	"../pages/cadastrar/cadastrar.module": [
		454,
		0
	],
	"../pages/login/login.module": [
		456,
		4
	],
	"../pages/modal-aluno/modal-aluno.module": [
		455,
		3
	],
	"../pages/resetpass/resetpass.module": [
		457,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_aluno__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alunos_alunos__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalAlunoPage = /** @class */ (function () {
    function ModalAlunoPage(platform, params, viewCtrl, provider) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.provider = provider;
        this.id = params.get("aluno");
        this.aluno = new __WEBPACK_IMPORTED_MODULE_2__models_aluno__["a" /* Aluno */]();
        this.provider.get(this.id).subscribe(function (data) {
            _this.obg = data;
            _this.aluno.name = _this.obg.name;
            _this.aluno.cpf = _this.obg.cpfRG;
            _this.aluno.endereco = _this.obg.endereco;
            _this.aluno.escola = _this.obg.escola;
            _this.aluno.nascimento = _this.obg.nascimento;
            _this.aluno.nomeResp = _this.obg.nomeResp;
            _this.aluno.observacao = _this.obg.observacao;
        });
    }
    ModalAlunoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalAlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-aluno',template:/*ion-inline-start:"D:\Projetos\Buschool\src\pages\modal-aluno\modal-aluno.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Detalhes Aluno\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-list>\n\n        <ion-item>\n\n          <h2>Nome: {{aluno.name}}</h2>\n\n          <p>CPF ou RG: {{aluno.cpf}}</p>\n\n          <p>Data de Nascimento: {{aluno.nascimento}}</p>\n\n          <p>Endereço: {{aluno.endereco}}</p>\n\n          <p>Nome do Responsável: {{aluno.nomeResp}}</p>\n\n          <p>Escola: {{aluno.escola}}</p>\n\n          <p>Observações: {{aluno.observacao}}</p>\n\n        </ion-item>\n\n        <button ion-button block (click)="dismiss()">Cancelar\n\n          </button>'/*ion-inline-end:"D:\Projetos\Buschool\src\pages\modal-aluno\modal-aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alunos_alunos__["a" /* AlunosProvider */]])
    ], ModalAlunoPage);
    return ModalAlunoPage;
}());

//# sourceMappingURL=modal-aluno.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_alunos_alunos__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_resetpass_resetpass__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_search_search__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_sort_sort__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modal_aluno_modal_aluno__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_resetpass_resetpass__["a" /* ResetpassPage */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_sort_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_aluno_modal_aluno__["a" /* ModalAlunoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alunos/alunos.module#AlunosPageModule', name: 'AlunosPage', segment: 'alunos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar/cadastrar.module#CadastrarPageModule', name: 'CadastrarPage', segment: 'cadastrar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-aluno/modal-aluno.module#ModalAlunoPageModule', name: 'ModalAlunoPage', segment: 'modal-aluno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpass/resetpass.module#ResetpassPageModule', name: 'ResetpassPage', segment: 'resetpass', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyCa0wHky_n1r81FwdAmdA033hv-MOnoEEA",
                    authDomain: "buschool-9ece4.firebaseapp.com",
                    databaseURL: "https://buschool-9ece4.firebaseio.com",
                    projectId: "buschool-9ece4",
                    storageBucket: "buschool-9ece4.appspot.com",
                    messagingSenderId: "325828157377",
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_resetpass_resetpass__["a" /* ResetpassPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_aluno_modal_aluno__["a" /* ModalAlunoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_alunos_alunos__["a" /* AlunosProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aluno; });
var Aluno = /** @class */ (function () {
    function Aluno(name, endereco, cpf, nascimento, nomeResp, escola, observacao) {
        this.name = name;
        this.endereco = endereco;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.nomeResp = nomeResp;
        this.escola = escola;
        this.observacao = observacao;
    }
    return Aluno;
}());

//# sourceMappingURL=aluno.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        var authObservable = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                authObservable.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                authObservable.unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Projetos\Buschool\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Projetos\Buschool\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(terms);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resetpass_resetpass__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_user__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__providers_auth_user__["a" /* User */]();
    }
    LoginPage.prototype.resetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__resetpass_resetpass__["a" /* ResetpassPage */]);
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        if (this.form.valid) {
            this.authProvider.signIn(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é valida.');
                }
                toast.present();
            });
        }
        ;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* NgForm */])
    ], LoginPage.prototype, "form", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Projetos\Buschool\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-title>\n\n        Login BuSchool\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <form #form="ngForm" novalidate>\n\n      <ion-list>\n\n  \n\n        <ion-item>\n\n          <ion-label stacked>E-mail</ion-label>\n\n          <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n\n          O campo é obrigatório\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label stacked>Senha</ion-label>\n\n          <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n\n          O campo é obrigatório\n\n        </ion-item>\n\n  \n\n      </ion-list>\n\n  \n\n      <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="signIn()">\n\n        Entrar\n\n      </button>\n\n    </form>\n\n  \n\n    <button ion-button block clear (click)="resetPass()">\n\n      Esqueci minha senha\n\n    </button>\n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Projetos\Buschool\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map