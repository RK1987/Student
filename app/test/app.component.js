System.register(['@angular/core', './products.service', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, products_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_product) {
                    this._product = _product;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._product.getproducts()
                        .subscribe(function (iproducts) { return _this.iproducts = iproducts; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<div>Hello</div>',
                        providers: [products_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [products_service_1.ProductService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFFRyxzQkFBb0IsUUFBd0I7b0JBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO2dCQUM1QyxDQUFDO2dCQUVELCtCQUFRLEdBQVI7b0JBQUEsaUJBR0M7b0JBRkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7eUJBQzFCLFNBQVMsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBZEo7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsU0FBUyxFQUFFLENBQUMsaUNBQWMsQ0FBQztxQkFDN0IsQ0FBQzs7Z0NBQUE7Z0JBV0YsbUJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHVDQVNDLENBQUEiLCJmaWxlIjoidGVzdC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0JztcclxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBhcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAgLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgIHRlbXBsYXRlOiAnPGRpdj5IZWxsbzwvZGl2PicsXHJcbiAgIHByb3ZpZGVyczogW1Byb2R1Y3RTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0ICAgY2xhc3MgICBBcHBDb21wb25lbnQgIHtcclxuICAgaXByb2R1Y3RzOiBJUHJvZHVjdFtdO1xyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm9kdWN0OiBQcm9kdWN0U2VydmljZSkge1xyXG4gICB9XHJcbiAgIFxyXG4gICBuZ09uSW5pdCgpIDogdm9pZCB7XHJcbiAgICAgIHRoaXMuX3Byb2R1Y3QuZ2V0cHJvZHVjdHMoKVxyXG4gICAgICAuc3Vic2NyaWJlKGlwcm9kdWN0cyA9PiB0aGlzLmlwcm9kdWN0cyA9IGlwcm9kdWN0cyk7XHJcbiAgIH1cclxufSJdfQ==
