angular.module('starter.controllers', [])

    .controller('CORSDisabledCtrl', function ($scope, $http) {

        $scope.loadCountries = function(){

            $scope.countries = [];
            
            var ajaxRequest = $http.get("http://localhost/cursophonegap/ListaPaisesPhpMySql/www/conectar/getcountries-nocors.php");
            ajaxRequest.success(function(data, status, headers, config) {
                $scope.countries = data;
                alert("Carregando...");
            });

            ajaxRequest.error(function(data, status, headers, config) {
                alert("AJAX failed!");
                
            });
        }
    })
    
    
    .controller('CORSEnabledCtrl', function ($scope, $http, $interval) 
    {
    	
    	$scope.loadCountries = function(){

            $scope.countries = [];
	           
            //var ajaxRequest = $http.get("http://localhost/cursophonegap/ListaPaisesPhpMySql/www/conectar/getFromDatabase.php");
            //var ajaxRequest = $http.get("http://192.168.15.4:3000/cursophonegap/ListaPaisesPhpMySql/getFromDatabase.php");
            //var ajaxRequest = $http.get("http://192.168.15.4:3000/#/app/getFromDatabase.php");
            //var ajaxRequest = $http.get("http://127.0.0.1/cursophonegap/ListaPaisesPhpMySql/getFromDatabase.php");
              var ajaxRequest = $http.get("http://www.martplore.com.br/controltherm/getFromDatabase.php");
            
          ajaxRequest.success(function (data, status, headers, config) 
          {
                 
            	  $scope.countries = data;
            	  var valor = $scope.countries;
                  
                  var etan = ""+valor;
                  var etanol = etan.substring(110, 142);
                  
                  
                  var gasolinaCom = ""+valor;
                  var gasolinaComum = gasolinaCom.substring(142, 181);
                  
                  var gasolinaAdit = ""+valor;
                  var gasolinaAditivada = gasolinaAdit.substring(181, 224);
                  
                  var dies = ""+valor;
                  var diesel = dies.substring(224, 282);
           });
            

            ajaxRequest.error(function(data, status, headers, config) {
                alert("AJAX failed!");
                
            });
        }
    	
    	
    	     $scope.callAtInterval = function() 
    	     {
    	    	// alert("dados");
    	       	
    	         $scope.countries = [];
    	           
    	            //var ajaxRequest = $http.get("http://localhost/cursophonegap/ListaPaisesPhpMySql/www/conectar/getFromDatabase.php");
    	            //var ajaxRequest = $http.get("http://192.168.15.4:3000/cursophonegap/ListaPaisesPhpMySql/getFromDatabase.php");
    	            //var ajaxRequest = $http.get("http://192.168.15.4:3000/#/app/getFromDatabase.php");
    	            //var ajaxRequest = $http.get("http://127.0.0.1/cursophonegap/ListaPaisesPhpMySql/getFromDatabase.php");
    	              var ajaxRequest = $http.get("http://www.martplore.com.br/controltherm/getFromDatabase.php");
    	            
    	          ajaxRequest.success(function (data, status, headers, config) 
    	          {
    	                 
    	            	  $scope.countries = data;
    	            	  var valor = $scope.countries;
    	                  
    	                  var etan = ""+valor;
    	                  var etanol = etan.substring(110, 142);
    	                  
    	                  
    	                  var gasolinaCom = ""+valor;
    	                  var gasolinaComum = gasolinaCom.substring(142, 181);
    	                  
    	                  var gasolinaAdit = ""+valor;
    	                  var gasolinaAditivada = gasolinaAdit.substring(181, 224);
    	                  
    	                  var dies = ""+valor;
    	                  var diesel = dies.substring(224, 282);
    	           });
    	            
    	                       
    	           ajaxRequest.error(function (data, status, headers, config) {
    	                alert("AJAX failed!");
    	           });
    	        
    	        
    	}
    	$interval( function(){ $scope.callAtInterval(); }, 18000);
    	
    });
