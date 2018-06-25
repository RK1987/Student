System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.name = "Human Talks";
                    this.color = "green";
                    this.paragraph = 'This is an example to show that we can bind  easily component properties to any html attribute using the square braquets syntax';
                    this.isInputDisabled = true;
                };
                AppComponent.prototype.toggleDisabledProp = function () {
                    this.isInputDisabled = !this.isInputDisabled;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n         <h1>Interpolation</h1> \n            <p>Hello {{name}} </p>\n           \n         <h1>One way data binding</h1>\n            <p  [style.background]=\"color\" [innerText]=\"paragraph\" >\n            </p>\n            A disabled input: <input type=\"text\" [disabled]=\"isInputDisabled\" />\n            \n         <h1>Some Event binding</h1>\n            <button (click)=toggleDisabledProp()>Let's toggle the the disabled property</button>\n            <p (mouseenter)=\"color = 'green'\"  (mouseleave)=\"color = 'red'\">Mouse events...</p>\n         \n         <h1>The famous two ways data binding</h1>\n            <input  [(ngModel)]=\"name2\" /> {{name2}}\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxX0RhdGFiaW5kaW5nL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBTUk7Z0JBQWMsQ0FBQztnQkFDZiwrQkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO29CQUMxQixJQUFJLENBQUMsS0FBSyxHQUFFLE9BQU8sQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBQyxpSUFBaUksQ0FBQztvQkFDakosSUFBSSxDQUFDLGVBQWUsR0FBRSxJQUFJLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QseUNBQWtCLEdBQWxCO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNqRCxDQUFDO2dCQXBDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsdXFCQWVUO3FCQUNKLENBQUM7O2dDQUFBO2dCQW1CRixtQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsdUNBZ0JDLENBQUEiLCJmaWxlIjoiMDFfRGF0YWJpbmRpbmcvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgIDxoMT5JbnRlcnBvbGF0aW9uPC9oMT4gXHJcbiAgICAgICAgICAgIDxwPkhlbGxvIHt7bmFtZX19IDwvcD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgPGgxPk9uZSB3YXkgZGF0YSBiaW5kaW5nPC9oMT5cclxuICAgICAgICAgICAgPHAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbG9yXCIgW2lubmVyVGV4dF09XCJwYXJhZ3JhcGhcIiA+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgQSBkaXNhYmxlZCBpbnB1dDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2Rpc2FibGVkXT1cImlzSW5wdXREaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICA8aDE+U29tZSBFdmVudCBiaW5kaW5nPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPXRvZ2dsZURpc2FibGVkUHJvcCgpPkxldCdzIHRvZ2dsZSB0aGUgdGhlIGRpc2FibGVkIHByb3BlcnR5PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIChtb3VzZWVudGVyKT1cImNvbG9yID0gJ2dyZWVuJ1wiICAobW91c2VsZWF2ZSk9XCJjb2xvciA9ICdyZWQnXCI+TW91c2UgZXZlbnRzLi4uPC9wPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGgxPlRoZSBmYW1vdXMgdHdvIHdheXMgZGF0YSBiaW5kaW5nPC9oMT5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cIm5hbWUyXCIgLz4ge3tuYW1lMn19XHJcbiAgICBgLFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBuYW1lIDpzdHJpbmdcclxuICAgIHBhcmFncmFwaDogc3RyaW5nXHJcbiAgICBjb2xvciAgOnN0cmluZ1xyXG4gICAgaXNJbnB1dERpc2FibGVkIDpib29sZWFuXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiSHVtYW4gVGFsa3NcIjtcclxuICAgICAgICB0aGlzLmNvbG9yPSBcImdyZWVuXCI7XHJcbiAgICAgICAgdGhpcy5wYXJhZ3JhcGg9J1RoaXMgaXMgYW4gZXhhbXBsZSB0byBzaG93IHRoYXQgd2UgY2FuIGJpbmQgIGVhc2lseSBjb21wb25lbnQgcHJvcGVydGllcyB0byBhbnkgaHRtbCBhdHRyaWJ1dGUgdXNpbmcgdGhlIHNxdWFyZSBicmFxdWV0cyBzeW50YXgnO1xyXG4gICAgICAgIHRoaXMuaXNJbnB1dERpc2FibGVkPSB0cnVlO1xyXG4gICAgfSAgICBcclxuICAgIHRvZ2dsZURpc2FibGVkUHJvcCgpe1xyXG4gICAgICAgIHRoaXMuaXNJbnB1dERpc2FibGVkID0gIXRoaXMuaXNJbnB1dERpc2FibGVkO1xyXG4gICAgfVxyXG59Il19
