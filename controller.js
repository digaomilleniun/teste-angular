(function() {
  var app = angular.module('myApp',  ['ngRoute']);
  app.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "index.htm"
	    });
	});

  app.controller('StoreController', function($scope){
    this.produtos = produtos;
    this.produto = {};
    
    this.addProduto = function(produtos) {
    	produtos.push(this.produto);
    	this.produto = {};
    };
  });
  
  app.controller('TabController', function(){
	    this.tab = 1;

	    this.setTab = function(newValue){
	      this.tab = newValue;
	    };

	    this.isSet = function(tabName){
	      return this.tab === tabName;
	    };
  });
  
  var produtos = [
	  {
		  nome: 'Batata Palha', 
		  preco: 5.00,
		  imagem: 'images/batata_palha.jpg'
	  },
	  {
		  nome: 'Coca Cola', 
		  preco: 8.00,
		  imagem: 'images/coca.png'
	  }
  ];

})();