'use strict';

angular.module('BlurAdmin', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.sortable',
        'ui.router',
        'ngTouch',
        'toastr',
        'smart-table',
        'xeditable',
        'ui.slimscroll',
        'ngJsTree',
        'permission', 'permission.ui',
        'angular-progress-button-styles',
        'BlurAdmin.authService',
        'BlurAdmin.printService',
        'BlurAdmin.S3UploadService',
        'BlurAdmin.commonservice',
        'BlurAdmin.signin',
        'BlurAdmin.theme',
        'BlurAdmin.pages',
        'ngFileUpload',  // added for file uploas s3 backet
        'BlurAdmin.theme.components'

    ])
    .run(function($rootScope, $state, PermRoleStore, AuthenticationService) {
        PermRoleStore.defineRole('AUTHORIZED', function() {
            return AuthenticationService.isLoggedIn();
        });

        PermRoleStore.defineRole('ADMIN', function() {
            return AuthenticationService.isAdmin();
        });

        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params, {
                    location: 'replace'
                });
            }
        });
    });
