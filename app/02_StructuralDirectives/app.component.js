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
                    this.talkers = [
                        { name: "Romain Pellerin", topic: "Continuous Delivery done right by leveraging Git" },
                        { name: "Antoine Wacheux", topic: "Introduction à Rust" },
                        { name: "Aladin Taleb", topic: "Faire communiquer une app iOS native avec un Webserver REST !" },
                        { name: "Eric Gourlaouen", topic: "Django Rest Framework" },
                        { name: "Pierre-Gilles Leymarie", topic: "Automatiser sa maison avec un Raspberry Pi et Gladys" },
                        { name: "Merouane Harriga", topic: "The Core Concepts of Angular 2" }
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Structural directives </h1>\n         <ul>\n              <li *ngFor=\"#talker of talkers\">\n                 <pre>\n                     {{ talker | json}}\n                 </pre>\n              </li>  \n         </ul>\n         <p *ngIf=\"talkers.length>5\"> <b>We have more than 5 speakers ! </b></p>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyX1N0cnVjdHVyYWxEaXJlY3RpdmVzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBVUk7b0JBVEEsWUFBTyxHQUFFO3dCQUNMLEVBQUMsSUFBSSxFQUFHLGlCQUFpQixFQUFFLEtBQUssRUFBRyxrREFBa0QsRUFBQzt3QkFDdEYsRUFBQyxJQUFJLEVBQUcsaUJBQWlCLEVBQUUsS0FBSyxFQUFHLHFCQUFxQixFQUFDO3dCQUN6RCxFQUFDLElBQUksRUFBRyxjQUFjLEVBQUUsS0FBSyxFQUFHLCtEQUErRCxFQUFDO3dCQUNoRyxFQUFDLElBQUksRUFBRyxpQkFBaUIsRUFBRSxLQUFLLEVBQUcsdUJBQXVCLEVBQUM7d0JBQzNELEVBQUMsSUFBSSxFQUFHLHdCQUF3QixFQUFFLEtBQUssRUFBRyxzREFBc0QsRUFBQzt3QkFDakcsRUFBQyxJQUFJLEVBQUcsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFDO3FCQUV2RSxDQUFBO2dCQUVELENBQUM7Z0JBekJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx1VUFVVDtxQkFDSixDQUFDOztnQ0FBQTtnQkFhRixtQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsdUNBWUMsQ0FBQSIsImZpbGUiOiIwMl9TdHJ1Y3R1cmFsRGlyZWN0aXZlcy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMT5TdHJ1Y3R1cmFsIGRpcmVjdGl2ZXMgPC9oMT5cclxuICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjdGFsa2VyIG9mIHRhbGtlcnNcIj5cclxuICAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICB7eyB0YWxrZXIgfCBqc29ufX1cclxuICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICA8L2xpPiAgXHJcbiAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgIDxwICpuZ0lmPVwidGFsa2Vycy5sZW5ndGg+NVwiPiA8Yj5XZSBoYXZlIG1vcmUgdGhhbiA1IHNwZWFrZXJzICEgPC9iPjwvcD5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgdGFsa2Vycz0gW1xyXG4gICAgICAgIHtuYW1lIDogXCJSb21haW4gUGVsbGVyaW5cIiwgdG9waWMgOiBcIkNvbnRpbnVvdXMgRGVsaXZlcnkgZG9uZSByaWdodCBieSBsZXZlcmFnaW5nIEdpdFwifSxcclxuICAgICAgICB7bmFtZSA6IFwiQW50b2luZSBXYWNoZXV4XCIsIHRvcGljIDogXCJJbnRyb2R1Y3Rpb24gw6AgUnVzdFwifSxcclxuICAgICAgICB7bmFtZSA6IFwiQWxhZGluIFRhbGViXCIsIHRvcGljIDogXCJGYWlyZSBjb21tdW5pcXVlciB1bmUgYXBwIGlPUyBuYXRpdmUgYXZlYyB1biBXZWJzZXJ2ZXIgUkVTVCAhXCJ9LFxyXG4gICAgICAgIHtuYW1lIDogXCJFcmljIEdvdXJsYW91ZW5cIiwgdG9waWMgOiBcIkRqYW5nbyBSZXN0IEZyYW1ld29ya1wifSxcclxuICAgICAgICB7bmFtZSA6IFwiUGllcnJlLUdpbGxlcyBMZXltYXJpZVwiLCB0b3BpYyA6IFwiQXV0b21hdGlzZXIgc2EgbWFpc29uIGF2ZWMgdW4gUmFzcGJlcnJ5IFBpIGV0IEdsYWR5c1wifSxcclxuICAgICAgICB7bmFtZSA6IFwiTWVyb3VhbmUgSGFycmlnYVwiLCB0b3BpYzogXCJUaGUgQ29yZSBDb25jZXB0cyBvZiBBbmd1bGFyIDJcIn1cclxuXHJcbiAgICBdXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
