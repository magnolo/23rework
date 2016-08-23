export function RoutesRun($log, $rootScope, $state, $auth) {
    'ngInject';


    let deregisterationCallback =  $rootScope.$on("$stateChangeStart", function(event, toState) {

        $rootScope.providerAddress = 'http://localhost:8066';

        if (toState.data && toState.data.auth) {
            /*Cancel going to the authenticated state and go back to the login page*/
            if (!$auth.isAuthenticated()) {
                event.preventDefault();
                return $state.go('app.login');
            }
        }


        if (angular.isDefined(toState.views))
            if (toState.views.hasOwnProperty('fullscreen@')) {
                $rootScope.fullscreenView = true;
            }
            else {
                $rootScope.fullscreenView = false;
            }
        

    });
    $rootScope.$on('$destroy', deregisterationCallback)
}
