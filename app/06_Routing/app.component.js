System.register(['angular2/core', 'angular2/router', './organizer.component', './talker.component'], function(exports_1, context_1) {
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
    var core_1, router_1, organizer_component_1, talker_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (organizer_component_1_1) {
                organizer_component_1 = organizer_component_1_1;
            },
            function (talker_component_1_1) {
                talker_component_1 = talker_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS],
                        template: "\n        <nav>\n            <ul>\n                <li><a [routerLink]=\"['Talkers']\" href=\"\">Talkers</a></li>\n                <li><a [routerLink]=\"['Organizers']\" href=\"\">Organizers</a></li>\n            </ul>\n        </nav>\n        <div>\n            <router-outlet></router-outlet>\n        </div>\n    ",
                    }),
                    router_1.RouteConfig([
                        { path: '/talkers', name: 'Talkers', component: talker_component_1.TalkerComponent, useAsDefault: true },
                        { path: '/organizers', name: 'Organizers', component: organizer_component_1.OrganizerComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2X1JvdXRpbmcvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQXRCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMseUJBQWdCLENBQUM7d0JBQzdCLFFBQVEsRUFBRSw4VEFVVDtxQkFDSixDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1gsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDckYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO3FCQUMxRSxDQUFDOztnQ0FBQTtnQkFHSCxtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiIwNl9Sb3V0aW5nL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7IC8vMVxyXG5pbXBvcnQge09yZ2FuaXplckNvbXBvbmVudH0gZnJvbSAnLi9vcmdhbml6ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtUYWxrZXJDb21wb25lbnR9IGZyb20gJy4vdGFsa2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sIC8vMlxyXG4gICAgcHJvdmlkZXJzOiBbUk9VVEVSX1BST1ZJREVSU10sICAgIFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydUYWxrZXJzJ11cIiBocmVmPVwiXCI+VGFsa2VyczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnT3JnYW5pemVycyddXCIgaHJlZj1cIlwiPk9yZ2FuaXplcnM8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gIHsgcGF0aDogJy90YWxrZXJzJywgbmFtZTogJ1RhbGtlcnMnLCBjb21wb25lbnQ6IFRhbGtlckNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXHJcbiAgeyBwYXRoOiAnL29yZ2FuaXplcnMnLCBuYW1lOiAnT3JnYW5pemVycycsIGNvbXBvbmVudDogT3JnYW5pemVyQ29tcG9uZW50IH1cclxuIF0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxufVxyXG5cclxuIl19
