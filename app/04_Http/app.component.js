System.register(['angular2/core', 'angular2/http', './talker.service'], function(exports_1, context_1) {
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
    var core_1, http_1, talker_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (talker_service_1_1) {
                talker_service_1 = talker_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_talkerService) {
                    this._talkerService = _talkerService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._talkerService.getVehicles().subscribe(// we subscrive to our observable
                    function (// we subscrive to our observable
                        talkers) { return _this.talkers = talkers; }, // succees
                    function (// succees
                        error) { return _this.httpError = error; } // error
                     // error
                    );
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [http_1.HTTP_PROVIDERS, talker_service_1.TalkerService],
                        template: "\n        <h1>Http and data</h1>\n         <ul>\n         {{httpError}}\n              <li *ngFor=\"#talker of talkers\">\n                 <pre>\n                     {{ talker | json}}\n                 </pre>\n              </li>  \n         </ul>\n         <p *ngIf=\"talkers && talkers.length>5\"><b>This is an exceptional event because we have more than 5 speakers !</b> </p>\n    ",
                    }), 
                    __metadata('design:paramtypes', [talker_service_1.TalkerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA0X0h0dHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFHSSxzQkFBb0IsY0FBNkI7b0JBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO2dCQUVqRCxDQUFDO2dCQUNELCtCQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUUsaUNBQWlDO29CQUMxRSxVQUR5QyxpQ0FBaUM7d0JBQzFFLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUFFLFVBQVU7b0JBQzdDLFVBRG1DLFVBQVU7d0JBQzdDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQVEsS0FBSyxFQUEzQixDQUEyQixDQUFDLFFBQVE7b0JBQVQsQ0FBQyxRQUFRO3FCQUNqRCxDQUFDO2dCQUVOLENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFNBQVMsRUFBRSxDQUFFLHFCQUFjLEVBQUUsOEJBQWEsQ0FBQzt3QkFDM0MsUUFBUSxFQUFFLHFZQVdUO3FCQUNKLENBQUM7O2dDQUFBO2dCQWVGLG1CQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCx1Q0FjQyxDQUFBIiwiZmlsZSI6IjA0X0h0dHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge1RhbGtlclNlcnZpY2UgfSBmcm9tICcuL3RhbGtlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWxrZXJ9IGZyb20gJy4vVGFsa2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgcHJvdmlkZXJzOiBbIEhUVFBfUFJPVklERVJTLCBUYWxrZXJTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPkh0dHAgYW5kIGRhdGE8L2gxPlxyXG4gICAgICAgICA8dWw+XHJcbiAgICAgICAgIHt7aHR0cEVycm9yfX1cclxuICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI3RhbGtlciBvZiB0YWxrZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAge3sgdGFsa2VyIHwganNvbn19XHJcbiAgICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgPC9saT4gIFxyXG4gICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8cCAqbmdJZj1cInRhbGtlcnMgJiYgdGFsa2Vycy5sZW5ndGg+NVwiPjxiPlRoaXMgaXMgYW4gZXhjZXB0aW9uYWwgZXZlbnQgYmVjYXVzZSB3ZSBoYXZlIG1vcmUgdGhhbiA1IHNwZWFrZXJzICE8L2I+IDwvcD5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGFsa2VyczogVGFsa2VyW11cclxuICAgIGh0dHBFcnJvcjogc3RyaW5nXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWxrZXJTZXJ2aWNlIDpUYWxrZXJTZXJ2aWNlKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fdGFsa2VyU2VydmljZS5nZXRWZWhpY2xlcygpLnN1YnNjcmliZSggLy8gd2Ugc3Vic2NyaXZlIHRvIG91ciBvYnNlcnZhYmxlXHJcbiAgICAgICAgICAgIHRhbGtlcnMgPT4gdGhpcy50YWxrZXJzID0gdGFsa2VycywgLy8gc3VjY2Vlc1xyXG4gICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5odHRwRXJyb3IgPSA8YW55PmVycm9yIC8vIGVycm9yXHJcbiAgICAgICAgKTsgICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=
