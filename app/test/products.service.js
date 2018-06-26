System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/do'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ProductService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ProductService = (function () {
                function ProductService(_http) {
                    this._http = _http;
                    this._producturl = './products.json';
                }
                ProductService.prototype.getproducts = function () {
                    return this._http.get(this._producturl)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(JSON.stringify(data)); });
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], ProductService);
                return ProductService;
                var _a;
            }());
            exports_1("ProductService", ProductService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvcHJvZHVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBRUcsd0JBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFEdkIsZ0JBQVcsR0FBQyxpQkFBaUIsQ0FBQztnQkFDTCxDQUFDO2dCQUVsQyxvQ0FBVyxHQUFYO29CQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO3lCQUN0QyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQWEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDO3lCQUN6RCxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQVRKO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQVViLHFCQUFDOztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsMkNBU0MsQ0FBQSIsImZpbGUiOiJ0ZXN0L3Byb2R1Y3RzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xyXG4gICBwcml2YXRlIF9wcm9kdWN0dXJsPScuL3Byb2R1Y3RzLmpzb24nO1xyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcbiAgIFxyXG4gICBnZXRwcm9kdWN0cygpOiBPYnNlcnZhYmxlPElQcm9kdWN0W10+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3Byb2R1Y3R1cmwpXHJcbiAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElQcm9kdWN0W10+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcclxuICAgfVxyXG59Il19
