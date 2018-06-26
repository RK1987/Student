System.register(['angular2/core', './child/child.component'], function(exports_1, context_1) {
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
    var core_1, child_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.childMessages = [];
                    this.rootAdvice = "Don't eat too much !";
                }
                AppComponent.prototype.getNotification = function (msg) {
                    if (msg) {
                        this.childMessages.push(msg);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [child_component_1.ChildComponent],
                        template: " <h1>I am the root component and I have a Child </h1>\n             <ul>\n              <li *ngFor=\"#msg of childMessages\">            \n                    Child notification:  {{msg}}                 \n              </li>  \n         </ul>\n        <child [advice]=\"rootAdvice\" (notifier)=getNotification($event)></child>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA1X25lc3RlZENvbXBuZW50cy9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBSUk7b0JBRkEsa0JBQWEsR0FBWSxFQUFFLENBQUM7b0JBR3hCLElBQUksQ0FBQyxVQUFVLEdBQUMsc0JBQXNCLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0Qsc0NBQWUsR0FBZixVQUFnQixHQUFZO29CQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxDQUFDO2dCQUNMLENBQUM7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzVCLFFBQVEsRUFBRSwrVUFPVDtxQkFDSixDQUFDOztnQ0FBQTtnQkFjRixtQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsdUNBYUMsQ0FBQSIsImZpbGUiOiIwNV9uZXN0ZWRDb21wbmVudHMvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDaGlsZENvbXBvbmVudH0gZnJvbSAnLi9jaGlsZC9jaGlsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ2hpbGRDb21wb25lbnRdLCAvLyBJIGNhbiBub3cgaGF2ZSBhIGNoaWxkIGNvbXBvbmVudCBpbnNpZGUgbXkgaGlyZWFyY2h5IFxyXG4gICAgdGVtcGxhdGU6IGAgPGgxPkkgYW0gdGhlIHJvb3QgY29tcG9uZW50IGFuZCBJIGhhdmUgYSBDaGlsZCA8L2gxPlxyXG4gICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjbXNnIG9mIGNoaWxkTWVzc2FnZXNcIj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBDaGlsZCBub3RpZmljYXRpb246ICB7e21zZ319ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2xpPiAgXHJcbiAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGNoaWxkIFthZHZpY2VdPVwicm9vdEFkdmljZVwiIChub3RpZmllcik9Z2V0Tm90aWZpY2F0aW9uKCRldmVudCk+PC9jaGlsZD5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgcm9vdEFkdmljZTogc3RyaW5nO1xyXG4gICAgY2hpbGRNZXNzYWdlczogc3RyaW5nW109IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucm9vdEFkdmljZT1cIkRvbid0IGVhdCB0b28gbXVjaCAhXCI7XHJcbiAgICB9XHJcbiAgICBnZXROb3RpZmljYXRpb24obXNnPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG1zZykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=
