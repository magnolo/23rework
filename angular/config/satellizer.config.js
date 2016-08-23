export function SatellizerConfig($authProvider) {
	'ngInject';

	$authProvider.httpInterceptor = function() {
		return true;
	}

	$authProvider.loginUrl = '/api/authenticate/auth';
	$authProvider.signupUrl = '/api/authenticate/auth/signup';
	$authProvider.tokenRoot = 'data';//compensates success response macro

	$authProvider.unlinkUrl = '/api/authenticate/auth/unlink/'
	$authProvider.facebook({
		url: '/api/authenticate/facebook',
		clientId: '771961832910072'
	});
	$authProvider.google({
		url: '/api/authenticate/google',
		clientId: '276634537440-cgtt14qj2e8inp0vq5oq9b46k74jjs3e.apps.googleusercontent.com'
	});
}
