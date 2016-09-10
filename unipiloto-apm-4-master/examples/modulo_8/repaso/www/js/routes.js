angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

   .state('menu.pagina1InfoCel', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pagina1InfoCel.html',
        controller: 'pagina1InfoCelCtrl'
      }
    }
  })

  .state('menu.pagina2InfoNetwork', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pagina2InfoNetwork.html',
        controller: 'pagina2InfoNetworkCtrl'
      }
    }
  })

  .state('menu.pagina3InfoAcelerometro', {
    url: '/page3',
	views: {
      'side-menu21': {
	    templateUrl: 'templates/pagina3InfoAcelerometro.html',
    	controller: 'pagina3InfoAcelerometroCtrl'
	  }
	}
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.pagina4InfoCompass', {
    url: '/page4',
	views: {
      'side-menu21': {
	    templateUrl: 'templates/pagina4InfoCompass.html',
    	controller: 'pagina4InfoCompassCtrl'
	  }
	}
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});