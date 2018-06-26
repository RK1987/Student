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
                    this.name = "branch1";
                    this.deposite_collection = 0;
                    this.debt_collection = 0;
                    this.is_enabled = false;
                };
                AppComponent.prototype.toggleDisabledProp = function () {
                    this.is_enabled = !this.is_enabled;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        Branch code\t\t\t: <input [value] = \"name\" [disabled]=\"is_enabled\"><br>\n\t\tDeposit collection\t: <input [(ngModel)] = \"depositCollection\"><br>\n\t\tDebt collection\t\t: <input [ngModel] = \"deptCollection\" ><br>\n\t\t<button (click)=toggleDisabledProp()>Let's toggle the the disabled property</button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAwX0hlbGxvV29ybGQvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQU9DO2dCQUFlLENBQUM7Z0JBQ2hCLCtCQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDekIsQ0FBQztnQkFDRCx5Q0FBa0IsR0FBbEI7b0JBQ08sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBekJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx3VUFLVDtxQkFDSixDQUFDOztnQ0FBQTtnQkFrQkYsbUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHVDQWlCQyxDQUFBIiwiZmlsZSI6IjAwX0hlbGxvV29ybGQvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIEJyYW5jaCBjb2RlXHRcdFx0OiA8aW5wdXQgW3ZhbHVlXSA9IFwibmFtZVwiIFtkaXNhYmxlZF09XCJpc19lbmFibGVkXCI+PGJyPlxyXG5cdFx0RGVwb3NpdCBjb2xsZWN0aW9uXHQ6IDxpbnB1dCBbKG5nTW9kZWwpXSA9IFwiZGVwb3NpdENvbGxlY3Rpb25cIj48YnI+XHJcblx0XHREZWJ0IGNvbGxlY3Rpb25cdFx0OiA8aW5wdXQgW25nTW9kZWxdID0gXCJkZXB0Q29sbGVjdGlvblwiID48YnI+XHJcblx0XHQ8YnV0dG9uIChjbGljayk9dG9nZ2xlRGlzYWJsZWRQcm9wKCk+TGV0J3MgdG9nZ2xlIHRoZSB0aGUgZGlzYWJsZWQgcHJvcGVydHk8L2J1dHRvbj5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG5hbWUgOiBzdHJpbmdcclxuXHRkZXBvc2l0ZV9jb2xsZWN0aW9uIDogbnVtYmVyXHJcblx0ZGVidF9jb2xsZWN0aW9uIDogbnVtYmVyXHJcblx0aXNfZW5hYmxlZCA6IGJvb2xlYW5cclxuXHRcclxuXHJcblx0Y29uc3RydWN0b3IgKCl7fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5uYW1lID0gXCJicmFuY2gxXCI7XHJcblx0XHR0aGlzLmRlcG9zaXRlX2NvbGxlY3Rpb24gPSAwO1xyXG5cdFx0dGhpcy5kZWJ0X2NvbGxlY3Rpb24gPSAwO1xyXG5cdFx0dGhpcy5pc19lbmFibGVkID0gZmFsc2U7XHJcblx0fVxyXG5cdHRvZ2dsZURpc2FibGVkUHJvcCgpe1xyXG4gICAgICAgIHRoaXMuaXNfZW5hYmxlZCA9ICF0aGlzLmlzX2VuYWJsZWQ7XHJcbiAgICB9XHJcbn0iXX0=
