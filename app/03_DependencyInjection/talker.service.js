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
    var TalkerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TalkerService = (function () {
                function TalkerService() {
                    this.getTalkers = function () { return [
                        { name: "Romain Pellerin", topic: "Continuous Delivery done right by leveraging Git" },
                        { name: "Antoine Wacheux", topic: "Introduction à Rust" },
                        { name: "Aladin Taleb", topic: "Faire communiquer une app iOS native avec un Webserver REST !" },
                        { name: "Eric Gourlaouen", topic: "Django Rest Framework" },
                        { name: "Pierre-Gilles Leymarie", topic: "Automatiser sa maison avec un Raspberry Pi et Gladys" },
                        { name: "Merouane Harriga", topic: "The Core Concepts of Angular 2" }
                    ]; };
                }
                TalkerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TalkerService);
                return TalkerService;
            }());
            exports_1("TalkerService", TalkerService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAzX0RlcGVuZGVuY3lJbmplY3Rpb24vdGFsa2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFVSTtvQkFUQSxlQUFVLEdBQUcsY0FBSyxPQUFBO3dCQUNkLEVBQUMsSUFBSSxFQUFHLGlCQUFpQixFQUFFLEtBQUssRUFBRyxrREFBa0QsRUFBQzt3QkFDdEYsRUFBQyxJQUFJLEVBQUcsaUJBQWlCLEVBQUUsS0FBSyxFQUFHLHFCQUFxQixFQUFDO3dCQUN6RCxFQUFDLElBQUksRUFBRyxjQUFjLEVBQUUsS0FBSyxFQUFHLCtEQUErRCxFQUFDO3dCQUNoRyxFQUFDLElBQUksRUFBRyxpQkFBaUIsRUFBRSxLQUFLLEVBQUcsdUJBQXVCLEVBQUM7d0JBQzNELEVBQUMsSUFBSSxFQUFHLHdCQUF3QixFQUFFLEtBQUssRUFBRyxzREFBc0QsRUFBQzt3QkFDakcsRUFBQyxJQUFJLEVBQUcsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFDO3FCQUN2RSxFQVBpQixDQU9qQixDQUFBO2dCQUVlLENBQUM7Z0JBWHJCO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWFiLG9CQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCx5Q0FZQyxDQUFBIiwiZmlsZSI6IjAzX0RlcGVuZGVuY3lJbmplY3Rpb24vdGFsa2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYWxrZXJTZXJ2aWNlIHtcclxuICAgIGdldFRhbGtlcnMgPSAoKT0+IFtcclxuICAgICAgICB7bmFtZSA6IFwiUm9tYWluIFBlbGxlcmluXCIsIHRvcGljIDogXCJDb250aW51b3VzIERlbGl2ZXJ5IGRvbmUgcmlnaHQgYnkgbGV2ZXJhZ2luZyBHaXRcIn0sXHJcbiAgICAgICAge25hbWUgOiBcIkFudG9pbmUgV2FjaGV1eFwiLCB0b3BpYyA6IFwiSW50cm9kdWN0aW9uIMOgIFJ1c3RcIn0sXHJcbiAgICAgICAge25hbWUgOiBcIkFsYWRpbiBUYWxlYlwiLCB0b3BpYyA6IFwiRmFpcmUgY29tbXVuaXF1ZXIgdW5lIGFwcCBpT1MgbmF0aXZlIGF2ZWMgdW4gV2Vic2VydmVyIFJFU1QgIVwifSxcclxuICAgICAgICB7bmFtZSA6IFwiRXJpYyBHb3VybGFvdWVuXCIsIHRvcGljIDogXCJEamFuZ28gUmVzdCBGcmFtZXdvcmtcIn0sXHJcbiAgICAgICAge25hbWUgOiBcIlBpZXJyZS1HaWxsZXMgTGV5bWFyaWVcIiwgdG9waWMgOiBcIkF1dG9tYXRpc2VyIHNhIG1haXNvbiBhdmVjIHVuIFJhc3BiZXJyeSBQaSBldCBHbGFkeXNcIn0sXHJcbiAgICAgICAge25hbWUgOiBcIk1lcm91YW5lIEhhcnJpZ2FcIiwgdG9waWM6IFwiVGhlIENvcmUgQ29uY2VwdHMgb2YgQW5ndWxhciAyXCJ9XHJcbiAgICBdXHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iXX0=
