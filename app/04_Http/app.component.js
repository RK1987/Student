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
                    this.productObj = {};
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.name = "branch1";
                    this.deposit_collection = 0;
                    this.debt_collection = 0;
                    this.is_enabled = false;
                    this._talkerService.getVehicles().subscribe(// we subscrive to our observable
                    function (// we subscrive to our observable
                        talkers) { return _this.talkers = talkers; }, // succees
                    function (// succees
                        error) { return _this.httpError = error; } // error
                     // error
                    );
                };
                AppComponent.prototype.toggleDisabledProp = function () {
                    var _this = this;
                    this.is_enabled = !this.is_enabled;
                    this.productObj = {
                        "branch_code": this.name,
                        "deposit_collection": this.deposit_collection,
                        "debe_collection": this.debt_collection
                    };
                    this._talkerService.putVehicle(this.productObj).subscribe(function (result_string) { return _this.result_string = "ok"; }, // succees
                    function (// succees
                        error) { return _this.httpError = error; } // error
                     // error
                    );
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [http_1.HTTP_PROVIDERS, talker_service_1.TalkerService],
                        template: "\n\n        Branch code\t\t\t: <input [value] = \"name\" [disabled]=\"is_enabled\"><br>\n\t\tDeposit collection\t: <input [(ngModel)] = \"depositCollection\"><br>\n\t\tDebt collection\t\t: <input [ngModel] = \"deptCollection\" ><br>\n\t\t<button (click)=toggleDisabledProp()>Let's toggle the the disabled property</button>\n        <h1>Http and data</h1>\n        <table>\n            <thead>\n                <tr>\n                    <th>Branch Code<th>\n                    <th>Deposit Collection<th>\n                    <th>Debt Collection<th>\n                </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"#talker of talkers\">\n                <td> {{ talker.branch_code }}</td>\n                <td> {{ talker.deposit_collection }}</td>\n                <td> {{ talker.debt_collection }}</td>\n            </tr>\n            </tbody>\n        </table>\n    ",
                        styleUrls: ['app/04_Http/style.css']
                    }), 
                    __metadata('design:paramtypes', [talker_service_1.TalkerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA0X0h0dHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkFTSSxzQkFBb0IsY0FBNkI7b0JBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQURqRCxlQUFVLEdBQVUsRUFBRSxDQUFDO2dCQUd2QixDQUFDO2dCQUNELCtCQUFRLEdBQVI7b0JBQUEsaUJBVUM7b0JBVEcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUUsaUNBQWlDO29CQUMxRSxVQUR5QyxpQ0FBaUM7d0JBQzFFLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUFFLFVBQVU7b0JBQzdDLFVBRG1DLFVBQVU7d0JBQzdDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQVEsS0FBSyxFQUEzQixDQUEyQixDQUFDLFFBQVE7b0JBQVQsQ0FBQyxRQUFRO3FCQUNqRCxDQUFDO2dCQUVOLENBQUM7Z0JBQ0QseUNBQWtCLEdBQWxCO29CQUFBLGlCQVlDO29CQVhHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHO3dCQUNkLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDeEIsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLGtCQUFrQjt3QkFDOUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWU7cUJBQzFDLENBQUE7b0JBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FDckQsVUFBQSxhQUFhLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksRUFBekIsQ0FBeUIsRUFBRSxVQUFVO29CQUN0RCxVQUQ0QyxVQUFVO3dCQUN0RCxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFRLEtBQUssRUFBM0IsQ0FBMkIsQ0FBQyxRQUFRO29CQUFULENBQUMsUUFBUTtxQkFDakQsQ0FBQztnQkFFTixDQUFDO2dCQWhFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixTQUFTLEVBQUUsQ0FBRSxxQkFBYyxFQUFFLDhCQUFhLENBQUM7d0JBQzNDLFFBQVEsRUFBRSxnNEJBdUJUO3dCQUNELFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO3FCQUN0QyxDQUFDOztnQ0FBQTtnQkFzQ0YsbUJBQUM7WUFBRCxDQXJDQSxBQXFDQyxJQUFBO1lBckNELHVDQXFDQyxDQUFBIiwiZmlsZSI6IjA0X0h0dHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge1RhbGtlclNlcnZpY2UgfSBmcm9tICcuL3RhbGtlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWxrZXJ9IGZyb20gJy4vVGFsa2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgcHJvdmlkZXJzOiBbIEhUVFBfUFJPVklERVJTLCBUYWxrZXJTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcblxyXG4gICAgICAgIEJyYW5jaCBjb2RlXHRcdFx0OiA8aW5wdXQgW3ZhbHVlXSA9IFwibmFtZVwiIFtkaXNhYmxlZF09XCJpc19lbmFibGVkXCI+PGJyPlxyXG5cdFx0RGVwb3NpdCBjb2xsZWN0aW9uXHQ6IDxpbnB1dCBbKG5nTW9kZWwpXSA9IFwiZGVwb3NpdENvbGxlY3Rpb25cIj48YnI+XHJcblx0XHREZWJ0IGNvbGxlY3Rpb25cdFx0OiA8aW5wdXQgW25nTW9kZWxdID0gXCJkZXB0Q29sbGVjdGlvblwiID48YnI+XHJcblx0XHQ8YnV0dG9uIChjbGljayk9dG9nZ2xlRGlzYWJsZWRQcm9wKCk+TGV0J3MgdG9nZ2xlIHRoZSB0aGUgZGlzYWJsZWQgcHJvcGVydHk8L2J1dHRvbj5cclxuICAgICAgICA8aDE+SHR0cCBhbmQgZGF0YTwvaDE+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkJyYW5jaCBDb2RlPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZXBvc2l0IENvbGxlY3Rpb248dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlYnQgQ29sbGVjdGlvbjx0aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiN0YWxrZXIgb2YgdGFsa2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPiB7eyB0YWxrZXIuYnJhbmNoX2NvZGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiB7eyB0YWxrZXIuZGVwb3NpdF9jb2xsZWN0aW9uIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ge3sgdGFsa2VyLmRlYnRfY29sbGVjdGlvbiB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6WydhcHAvMDRfSHR0cC9zdHlsZS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHJlc3VsdF9zdHJpbmcgOiBzdHJpbmdcclxuICAgIG5hbWUgOiBzdHJpbmdcclxuXHRkZXBvc2l0X2NvbGxlY3Rpb24gOiBudW1iZXJcclxuXHRkZWJ0X2NvbGxlY3Rpb24gOiBudW1iZXJcclxuXHRpc19lbmFibGVkIDogYm9vbGVhblxyXG4gICAgdGFsa2VyczogVGFsa2VyW11cclxuICAgIGh0dHBFcnJvcjogc3RyaW5nXHJcbiAgICBwcm9kdWN0T2JqOm9iamVjdCA9IHt9O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFsa2VyU2VydmljZSA6VGFsa2VyU2VydmljZSl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiYnJhbmNoMVwiO1xyXG5cdFx0dGhpcy5kZXBvc2l0X2NvbGxlY3Rpb24gPSAwO1xyXG5cdFx0dGhpcy5kZWJ0X2NvbGxlY3Rpb24gPSAwO1xyXG5cdFx0dGhpcy5pc19lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fdGFsa2VyU2VydmljZS5nZXRWZWhpY2xlcygpLnN1YnNjcmliZSggLy8gd2Ugc3Vic2NyaXZlIHRvIG91ciBvYnNlcnZhYmxlXHJcbiAgICAgICAgICAgIHRhbGtlcnMgPT4gdGhpcy50YWxrZXJzID0gdGFsa2VycywgLy8gc3VjY2Vlc1xyXG4gICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5odHRwRXJyb3IgPSA8YW55PmVycm9yIC8vIGVycm9yXHJcbiAgICAgICAgKTsgICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIHRvZ2dsZURpc2FibGVkUHJvcCgpe1xyXG4gICAgICAgIHRoaXMuaXNfZW5hYmxlZCA9ICF0aGlzLmlzX2VuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T2JqID0ge1xyXG4gICAgICAgICAgICBcImJyYW5jaF9jb2RlXCI6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgXCJkZXBvc2l0X2NvbGxlY3Rpb25cIiA6IHRoaXMuZGVwb3NpdF9jb2xsZWN0aW9uLFxyXG4gICAgICAgICAgICBcImRlYmVfY29sbGVjdGlvblwiOiB0aGlzLmRlYnRfY29sbGVjdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90YWxrZXJTZXJ2aWNlLnB1dFZlaGljbGUodGhpcy5wcm9kdWN0T2JqKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3VsdF9zdHJpbmcgPT4gdGhpcy5yZXN1bHRfc3RyaW5nID0gXCJva1wiLCAvLyBzdWNjZWVzXHJcbiAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmh0dHBFcnJvciA9IDxhbnk+ZXJyb3IgLy8gZXJyb3JcclxuICAgICAgICApOyAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==
