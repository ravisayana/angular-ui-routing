var app = angular.module("myApp", ['ui.router']);

app.config(["$stateProvider", function($stateProvider){

    $stateProvider
        .state("Home", {
          url: "/home",
          templateUrl: "pages/home.html",
          controller: "HomeController"
        })
        .state("About", {
          url: "/about",
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

app.controller("AboutController",["$scope",function($scope){
    $scope.content =" This is About Page";
}])
app.controller("ContactController",["$scope",function($scope){
    $scope.content =" This is Contact Page";
}])
