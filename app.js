var app = angular.module("myApp", ['ui.router']);

app.config(["$stateProvider", function($stateProvider){

    $stateProvider
        .state("Home", {
          url: "/home",
          templateUrl: "pages/home.html",
          controller: "HomeController"
        })
        .state("About", {
          url: "/about/:name",
          templateUrl: "pages/about.html",
          controller: "AboutController"
        })
        .state("Contact", {
          url: "/contact",
          templateUrl: "pages/contact.html",
          controller: "ContactController"
        })
}])


app.controller("HomeController",["$scope",function($scope){
    $scope.content =" This is Home Page";
}])

app.controller("AboutController",["$scope", "$stateParams",function($scope, $stateParams){
    $scope.content =" This is About Page with value : " + $stateParams.name;
}])
app.controller("ContactController",["$scope",function($scope){
    $scope.content =" This is Contact Page";
}])
