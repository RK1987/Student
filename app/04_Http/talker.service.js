System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var TalkerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            TalkerService = (function () {
                function TalkerService(_http) {
                    this._http = _http;
                    //2 the Http service has just been injected 
                }
                TalkerService.prototype.getVehicles = function () {
                    return this._http.get('/dev/04_Http/talkers.json')
                        .map(function (response) { return response.json().data; })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                TalkerService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error || 'Server error');
                };
                TalkerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TalkerService);
                return TalkerService;
            }());
            exports_1("TalkerService", TalkerService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA0X0h0dHAvdGFsa2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSSx1QkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUMzQiw0Q0FBNEM7Z0JBQ2hELENBQUM7Z0JBQ0gsbUNBQVcsR0FBWDtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7eUJBQy9DLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBVSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUE5QixDQUE4QixDQUFDO3lCQUMzRCxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDO3lCQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUU3QixDQUFDO2dCQUNPLG1DQUFXLEdBQW5CLFVBQW9CLEtBQWU7b0JBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFoQkg7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBaUJiLG9CQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCx5Q0FnQkMsQ0FBQSIsImZpbGUiOiIwNF9IdHRwL3RhbGtlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnOyAvLzFcclxuaW1wb3J0IHtUYWxrZXJ9IGZyb20gJy4vVGFsa2VyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhbGtlclNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IFxyXG4gICAgICAgIC8vMiB0aGUgSHR0cCBzZXJ2aWNlIGhhcyBqdXN0IGJlZW4gaW5qZWN0ZWQgXHJcbiAgICB9XHJcbiAgZ2V0VmVoaWNsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJy9kZXYvMDRfSHR0cC90YWxrZXJzLmpzb24nKVxyXG4gICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxUYWxrZXJbXT5yZXNwb25zZS5qc29uKCkuZGF0YSlcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgfVxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICB9XHJcbn0iXX0=
