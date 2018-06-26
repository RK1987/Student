System.register(['angular2/core', './talker.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, talker_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (talker_service_1_1) {
                talker_service_1 = talker_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(talkerService) {
                    this.talkerService = talkerService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.talkers = this.talkerService.getTalkers();
                };
                AppComponent = __decorate([
                    //1
                    core_1.Component({
                        selector: 'my-app',
                        providers: [talker_service_1.TalkerService],
                        template: "\n        <h1>Services and Dependecy Injection</h1>\n         <ul>\n              <li *ngFor=\"#talker of talkers\">\n                 <pre>\n                     {{ talker | json}}\n                 </pre>\n              </li>  \n         </ul>\n         <p *ngIf=\"talkers.length>5\"><b>This is an exceptional event because we have more than 5 speakers !</b> </p>\n    ",
                    }), 
                    __metadata('design:paramtypes', [talker_service_1.TalkerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAzX0RlcGVuZGVuY3lJbmplY3Rpb24vYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFFSSxzQkFBb0IsYUFBNEI7b0JBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO2dCQUdoRCxDQUFDO2dCQUNELCtCQUFRLEdBQVI7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNyRCxDQUFDO2dCQXZCTDtvQkFGZ0QsR0FBRztvQkFFbEQsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsU0FBUyxFQUFHLENBQUMsOEJBQWEsQ0FBQzt3QkFDM0IsUUFBUSxFQUFFLHFYQVVUO3FCQUNKLENBQUM7O2dDQUFBO2dCQVlGLG1CQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6IjAzX0RlcGVuZGVuY3lJbmplY3Rpb24vYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RhbGtlclNlcnZpY2V9IGZyb20gJy4vdGFsa2VyLnNlcnZpY2UnOyAvLzFcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgcHJvdmlkZXJzIDogW1RhbGtlclNlcnZpY2VdLCAvLzIgXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMT5TZXJ2aWNlcyBhbmQgRGVwZW5kZWN5IEluamVjdGlvbjwvaDE+XHJcbiAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI3RhbGtlciBvZiB0YWxrZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAge3sgdGFsa2VyIHwganNvbn19XHJcbiAgICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgPC9saT4gIFxyXG4gICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8cCAqbmdJZj1cInRhbGtlcnMubGVuZ3RoPjVcIj48Yj5UaGlzIGlzIGFuIGV4Y2VwdGlvbmFsIGV2ZW50IGJlY2F1c2Ugd2UgaGF2ZSBtb3JlIHRoYW4gNSBzcGVha2VycyAhPC9iPiA8L3A+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHRhbGtlcnMgOmFueVtdOyAvLyBUaGlzIGlzIGZpbmUgYnV0IHdlICB3aWxsIGltcHJvdmUgaXQgaW4gdGhlIEh0dHAgZXhhbXBsZVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWxrZXJTZXJ2aWNlIDpUYWxrZXJTZXJ2aWNlKXsgIC8vMyBpbXBsaWNpdGx5IHNldCBhIHByaXZhdGUgdGFsa2VyU2VydmljZSBmb3IgeW91IDopXHJcblxyXG4gICAgICAgIFxyXG4gICAgfSBcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgICB0aGlzLnRhbGtlcnMgPSB0aGlzLnRhbGtlclNlcnZpY2UuZ2V0VGFsa2VycygpO1xyXG4gICAgfVxyXG4gIFxyXG5cclxufSJdfQ==
