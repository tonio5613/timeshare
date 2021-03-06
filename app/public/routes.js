'use strict';
(function() {

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })
            .when('/login', {
                templateUrl: 'users/login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: 'users/register/register.html',
                controller: 'registerCtrl',
                controllerAs: 'vmr'
            })
            .when('/passwordreset', {
                templateUrl: 'users/passwordReset/passwordReset.html',
                controller: 'passwordResetCtrl',
                controllerAs: 'vmpr'
            })
            .when('/profil', {
                templateUrl: 'users/profile/profile.html',
                controller: 'profileCtrl',
                controllerAs: 'vmp'
            })
            .when('/account', {
                templateUrl: 'accounts/account.html',
                controller: 'accountController'
            })
            .when('/adverts', {
                templateUrl: 'adverts/adverts/adverts.html',
                controller: 'advertsController'
            })
            .when('/formAdvert', {
                templateUrl: 'adverts/formAdvert/formAdvert.html',
                controller: 'formController'
            })
            .when('/editAdvert/:id', {
                templateUrl: 'adverts/formAdvert/editAdvert.html',
                controller: 'formController'
            })
            .when('/replyToAd/:_id', {
                templateUrl: 'adverts/adverts/replyToAd.html',
                controller: 'replyToAdController'
            })
            .when('/upload', {
                templateUrl: 'common/directives/upload/upload.html',
                controller: 'uploadCtrl',
                controllerAs: 'up'
            })
            .when('/mentions', {
                templateUrl: 'mentions.html'
            })
            .when('/back', {
                templateUrl: 'backOffice/backOffice.html',
                controller: 'backOfficeController',
                controllerAs: 'bo'
            })
            .when('/back/ads', {
                templateUrl: 'backOffice/backAdvert.html',
                controller: 'backAdvertController',
                controllerAs: 'ba'
            })
            .when('/back/users', {
                templateUrl: 'backOffice/backUser.html',
                controller: 'backUserController',
                controllerAs: 'bu'
            })
            .when('/back/accounts', {
                templateUrl: 'backOffice/backAccount.html',
                controller: 'backAccountController',
                controllerAs: 'bc'
            })
            .when('/404', {
                templateUrl: '404.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    angular
        .module('timeShareApp')
        .config(['$routeProvider', config]);

})();