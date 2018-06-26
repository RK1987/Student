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
    var ChildComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChildComponent = (function () {
                function ChildComponent() {
                    this.notifier = new core_1.EventEmitter(); // I always notify him  to what's going on @ My school.  
                }
                ChildComponent.prototype.sendNotification = function (msg) {
                    this.notifier.emit(msg);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChildComponent.prototype, "advice", void 0);
                __decorate([
                    // I accept advice from my parent
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ChildComponent.prototype, "notifier", void 0);
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'child',
                        template: "<h3> I am a child component And I can communicate with my parent</h3>\n                The advice of today is: <b>{{advice}}</b>  <br />\n                <input [(ngModel)]=\"msg\" /> \n                Time to notify my parent:) <button (click)=\"sendNotification(msg)\"> notify!</button> "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA1X25lc3RlZENvbXBuZW50cy9jaGlsZC9jaGlsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtvQkFFYyxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUMsQ0FBQyx5REFBeUQ7Z0JBSzlHLENBQUM7Z0JBSEcseUNBQWdCLEdBQWhCLFVBQWlCLEdBQVc7b0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUxEO29CQUFDLFlBQUssRUFBRTs7OERBQUE7Z0JBQ1I7b0JBRHlCLGlDQUFpQztvQkFDekQsYUFBTSxFQUFFOztnRUFBQTtnQkFUYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUsbVNBR3dGO3FCQUNyRyxDQUFDOztrQ0FBQTtnQkFRRixxQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsMkNBT0MsQ0FBQSIsImZpbGUiOiIwNV9uZXN0ZWRDb21wbmVudHMvY2hpbGQvY2hpbGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaGlsZCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxoMz4gSSBhbSBhIGNoaWxkIGNvbXBvbmVudCBBbmQgSSBjYW4gY29tbXVuaWNhdGUgd2l0aCBteSBwYXJlbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgVGhlIGFkdmljZSBvZiB0b2RheSBpczogPGI+e3thZHZpY2V9fTwvYj4gIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwibXNnXCIgLz4gXHJcbiAgICAgICAgICAgICAgICBUaW1lIHRvIG5vdGlmeSBteSBwYXJlbnQ6KSA8YnV0dG9uIChjbGljayk9XCJzZW5kTm90aWZpY2F0aW9uKG1zZylcIj4gbm90aWZ5ITwvYnV0dG9uPiBgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hpbGRDb21wb25lbnQgIHtcclxuICAgIEBJbnB1dCgpIGFkdmljZTogc3RyaW5nOyAvLyBJIGFjY2VwdCBhZHZpY2UgZnJvbSBteSBwYXJlbnRcclxuICAgIEBPdXRwdXQoKSBub3RpZmllciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpOyAvLyBJIGFsd2F5cyBub3RpZnkgaGltICB0byB3aGF0J3MgZ29pbmcgb24gQCBNeSBzY2hvb2wuICBcclxuICAgIFxyXG4gICAgc2VuZE5vdGlmaWNhdGlvbihtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubm90aWZpZXIuZW1pdChtc2cpO1xyXG4gICAgfVxyXG59Il19
