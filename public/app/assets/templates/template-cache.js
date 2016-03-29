(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/main.html',
    '<div layout="row" flex>\n' +
    '    <md-sidenav layout="column" flex="20" class="md-sidenav-left md-whiteframe-z2"  id="sidebar" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-sm\')"  md-theme="smartTheme">\n' +
    '        <header class="md-whiteframe-2dp">\n' +
    '            <md-toolbar layout="row">\n' +
    '                <h3 class="md-toolbar-tools" flex layout="row">\n' +
    '                    <i class="icon house_with_garden_36" flex="20"></i>\n' +
    '                    <span flex>Dashboard</span>\n' +
    '                </h3>\n' +
    '                <md-menu class="menu-sidebar">\n' +
    '                    <md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="openMenu($mdOpenMenu, $event)">\n' +
    '                        <md-icon md-menu-origin md-font-icon="fa-ellipsis-v" class="fa"></md-icon>\n' +
    '                    </md-button>\n' +
    '                    <md-menu-content width="4">\n' +
    '                        <md-menu-item>\n' +
    '                            <span md-menu-align-target>Hello World!!</span>\n' +
    '                        </md-menu-item>\n' +
    '\n' +
    '                    </md-menu-content>\n' +
    '                </md-menu>\n' +
    '            </md-toolbar>\n' +
    '\n' +
    '        </header>\n' +
    '\n' +
    '        <md-content>\n' +
    '            <md-subheader class="md-primary" layout="row" ng-init="showOptions=false">\n' +
    '                <span flex="10" class="avatar"><ng-letter-avatar ng-if="user.email" data="{{user.email}}" height="30px" width="30px" shape="round" alphabetcolors="array_colors"></ng-letter-avatar></span>\n' +
    '                <span flex>{{user.email| nofirst}}\n' +
    '                </span>\n' +
    '\n' +
    '                <md-icon md-font-icon="fa-chevron-down" class="fa md-primary" ng-click="showOptions=!showOptions"></md-icon>\n' +
    '\n' +
    '\n' +
    '\n' +
    '            </md-subheader>\n' +
    '\n' +
    '            <div class="popover-user-options md-open-menu-container md-whiteframe-z2 md-clickable" ng-class="{\'md-active\':showOptions}">\n' +
    '                <div class="dropdown-caret">\n' +
    '                    <span class="caret-outer"></span>\n' +
    '                    <span class="caret-inner"></span>\n' +
    '                </div>\n' +
    '                <md-content>\n' +
    '\n' +
    '                    <div layout="column" layout-align="space-between none">\n' +
    '                        <div  flex layout="row"  layout-align="space-between center" class="item-popover">\n' +
    '                            <i class="fa fa-cog" flex="20"></i>\n' +
    '                            <a flex>Settings</a>\n' +
    '\n' +
    '                        </div>\n' +
    '                        \n' +
    '                        <div  flex layout="row"  layout-align="space-between center" class="item-popover">\n' +
    '                            <i class="fa fa-power-off" flex="20"></i>\n' +
    '                            <a ng-click="logout()" flex>Logout</a>\n' +
    '\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </md-content>\n' +
    '            </div>\n' +
    '        </md-content>\n' +
    '\n' +
    '    </md-sidenav>\n' +
    '\n' +
    '\n' +
    '    <div layout="column" flex id="content">\n' +
    '        <md-content layout="column" flex class="md-padding" ui-view="content">\n' +
    '\n' +
    '        </md-content>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_login/main.html',
    '\n' +
    '<div  layout="row" layout-align="center center" layout-fill id="login-body" md-theme="smartTheme">\n' +
    '\n' +
    '\n' +
    '    <div layout="column" flex-gt-md="35" flex-xs="50" flex-gt-xs="50" layout-padding>\n' +
    '\n' +
    '        <div layout="row" layout-align="center center">\n' +
    '            <h2><i class="icon house_with_garden_72"></i><br>Smart Town Administration</h2>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-card layout="row" >\n' +
    '            <form name="loginForm" flex layout="column" layout-align="center stretch" layout-padding layout-margin>\n' +
    '                <h3 flex>Log in to your account</h3>\n' +
    '                <md-input-container  class="md-block" flex>\n' +
    '                    <label>Email</label>\n' +
    '\n' +
    '                    <input type="email" required name="email" ng-model="user.email" ng-pattern="/^.+@.+\\..+$/" >\n' +
    '                    <div ng-messages="loginForm.email.$error" multiple md-auto-hide="false" ng-if=\'loginForm.email.$dirty\'>\n' +
    '                        <div ng-message="required">This is required.</div>\n' +
    '                        <div ng-message="pattern">\n' +
    '                            Your email must look like an e-mail address.\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container   class="md-block" flex>\n' +
    '                    <label>Password</label>\n' +
    '\n' +
    '                    <input ng-model="user.password" type="password" name="password" required>\n' +
    '                    <div ng-messages="loginForm.password.$error" md-auto-hide="false" ng-if="loginForm.password.$dirty">\n' +
    '                        <div ng-message="required">This is required.</div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container layout-align="center center" flex>\n' +
    '                    <div layout="row" layout-sm="column" layout-margin>\n' +
    '                        <md-button class="md-raised" type="submit" ng-click="login()" flex flex-sm="100" ng>Login</md-button>\n' +
    '\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '            </form>\n' +
    '\n' +
    '        </md-card>\n' +
    '\n' +
    '\n' +
    '        <div layout="row" layout-align="center center">\n' +
    '            <h5><i class="fa fa-copyright"></i> Smart Town 2016</h5>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '');
}]);
})();
