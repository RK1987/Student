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
                TalkerService.prototype.putVehicle = function (obj) {
                    return this._http.post('/dev/04_Http/talkers.json', obj)
                        .do(function (response) {
                        console.log(response);
                    })
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA0X0h0dHAvdGFsa2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSSx1QkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUMzQiw0Q0FBNEM7Z0JBQ2hELENBQUM7Z0JBQ0gsbUNBQVcsR0FBWDtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7eUJBQy9DLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBVSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUE5QixDQUE4QixDQUFDO3lCQUMzRCxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDO3lCQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUU3QixDQUFDO2dCQUNELGtDQUFVLEdBQVYsVUFBVyxHQUFHO29CQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBQyxHQUFHLENBQUM7eUJBQ3RELEVBQUUsQ0FBQyxVQUFDLFFBQWtCO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFHMUIsQ0FBQztnQkFDTyxtQ0FBVyxHQUFuQixVQUFvQixLQUFlO29CQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBekJIO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQTBCYixvQkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQseUNBeUJDLENBQUEiLCJmaWxlIjoiMDRfSHR0cC90YWxrZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdhbmd1bGFyMi9odHRwJzsgLy8xXHJcbmltcG9ydCB7VGFsa2VyfSBmcm9tICcuL1RhbGtlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYWxrZXJTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyBcclxuICAgICAgICAvLzIgdGhlIEh0dHAgc2VydmljZSBoYXMganVzdCBiZWVuIGluamVjdGVkIFxyXG4gICAgfVxyXG4gIGdldFZlaGljbGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCcvZGV2LzA0X0h0dHAvdGFsa2Vycy5qc29uJylcclxuICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8VGFsa2VyW10+cmVzcG9uc2UuanNvbigpLmRhdGEpXHJcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gIH1cclxuICBwdXRWZWhpY2xlKG9iaikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnL2Rldi8wNF9IdHRwL3RhbGtlcnMuanNvbicsb2JqKVxyXG4gICAgLmRvKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgXHJcblxyXG4gIH1cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgfVxyXG59Il19
