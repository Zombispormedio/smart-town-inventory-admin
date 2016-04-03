(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/main.html',
    '<ng-include src="\'/views/_application/__utils/popover-main.html\'"></ng-include>\n' +
    '<ng-include src="\'/views/_application/__utils/popover-user.html\'"></ng-include>\n' +
    '<div layout="row" flex>\n' +
    '    <md-sidenav layout="column" flex="20" class="md-sidenav-left md-whiteframe-z2"  id="sidebar" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-sm\')"  md-theme="smartTheme">\n' +
    '        <header class="md-whiteframe-2dp">\n' +
    '            <md-toolbar layout="row" ng-init="showMain=false">\n' +
    '                <a class="md-toolbar-tools" flex="80" ng-href="{{statify(\'application\', titleMain)}}" layout="row">\n' +
    '                    <i class="icon house_with_garden_36" flex="20"></i>\n' +
    '                    <span flex>{{titleMain}}</span>\n' +
    '\n' +
    '                </a>\n' +
    '                <md-button aria-label="Open main menu" class="md-icon-button" flex ng-click="showMain=!showMain; showOptions=false">\n' +
    '                    <md-icon  md-font-icon="mdi-apps" class="mdi"></md-icon>\n' +
    '                </md-button>\n' +
    '\n' +
    '\n' +
    '            </md-toolbar>\n' +
    '\n' +
    '        </header>\n' +
    '\n' +
    '        <md-content>\n' +
    '            <md-subheader class="md-primary" layout="row" ng-init="showOptions=false" layout-align="center center" ng-click="showOptions=!showOptions; showMain=false">\n' +
    '                <span flex>{{user.email}}\n' +
    '                </span>\n' +
    '                <md-icon md-font-icon="mdi-chevron-down" class="mdi md-primary" flex ></md-icon>\n' +
    '            </md-subheader>\n' +
    '\n' +
    '\n' +
    '        </md-content>\n' +
    '\n' +
    '    </md-sidenav>\n' +
    '\n' +
    '\n' +
    '    <div flex layout="column">\n' +
    '        <div ui-view="content" flex></div>\n' +
    '\n' +
    '        <div flex class="footer">\n' +
    '            <md-divider></md-divider>\n' +
    '            <md-toolbar layout="row">\n' +
    '             \n' +
    '                    <h6 flex-offset="85"><i class="mdi mdi-copyright"></i><span>Smart Town 2016</span></h6>\n' +
    '           \n' +
    '\n' +
    '            </md-toolbar>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
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
    '<ui-title>Sign in</ui-title>\n' +
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
    '            <h5><i class="mdi mdi-copyright"></i> Smart Town 2016</h5>\n' +
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

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_dashboard/main.html',
    '<ui-title>Dashboard</ui-title>\n' +
    '\n' +
    '\n' +
    'hello world');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_magnitudes/create.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>New Magnitude</span>\n' +
    '        </h2>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '<md-content layout-padding layout="column" md-theme="smartTheme">\n' +
    '    <div layout="row" flex class="input-create">\n' +
    '        <div  flex="20"  flex-offset="5">\n' +
    '            <h3>Display Name <br>(optional)</h3>\n' +
    '            <p>Leave blank and we\'ll choose one for you</p>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-input-container flex="50" flex-offset="10">\n' +
    '            <input ng-model="magnitude.display_name" aria-label="Display Name">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider ></md-divider>\n' +
    '    <div layout="row" flex class="input-create">\n' +
    '        <div  flex="20"  flex-offset="5">\n' +
    '            <h3>System Type</h3>\n' +
    '            <p>Working with real numbers or with on(1) or off(0)</p>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-radio-group ng-model="magnitude.type" flex="50" flex-offset="30">\n' +
    '            <md-radio-button value="0" class="md-primary">Analog</md-radio-button>\n' +
    '            <md-radio-button value="1" class="md-primary">Digital</md-radio-button>\n' +
    '        </md-radio-group>\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    <div flex class="button-create" layout="row" layout-align="center center">\n' +
    '        <md-button class="md-raised md-primary" ng-click="create()">Create Magnitude</md-button>\n' +
    '    </div>\n' +
    '</md-content>\n' +
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
  $templateCache.put('/views/_application/_magnitudes/list.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '\n' +
    '        <md-input-container md-no-float class="md-block" flex> \n' +
    '            <md-icon  md-font-icon="mdi-magnify" class="mdi"></md-icon>             \n' +
    '            <input type="text" placeholder="Filter magnitudes">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '\n' +
    '        <md-button class="md-icon-button" aria-label="More" flex="5" ng-click="create()">\n' +
    '            <md-icon md-font-icon="mdi-plus" class="mdi"></md-icon>\n' +
    '        </md-button>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '<md-content layout-padding layout="column" md-theme="smartTheme">\n' +
    '\n' +
    '    <md-list  ng-cloak class="magnitude-list">\n' +
    '        <md-list-item  ng-repeat="magnitude in magnitudes">\n' +
    '            <md-icon  md-font-icon="{{Icon(magnitude.type)}}" class="mdi magnitude-type-icon"></md-icon>  \n' +
    '            <p> {{ magnitude.display_name }} </p>\n' +
    '            \n' +
    '            <p  flex-offset="30"><span class="md-whiteframe-1dp" ng-class="{\'badge\':magnitude.type===\'0\', \'badge-negative\':magnitude.type===\'1\'}">{{Type(magnitude.type)}}</span></p>\n' +
    '            <md-button class="md-icon-button" aria-label="Delete" ng-click="delete(magnitude.id)">\n' +
    '                <i class=" mdi mdi-delete" ></i>\n' +
    '            </md-button>\n' +
    '\n' +
    '            <md-divider ng-if="!$last"></md-divider>\n' +
    '\n' +
    '        </md-list-item>\n' +
    '\n' +
    '    </md-list>\n' +
    '\n' +
    '</md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_magnitudes/main.html',
    '<ui-title>Magnitudes</ui-title>\n' +
    '<div layout="column" ui-view="inner"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_tasks/main.html',
    '<ui-title>Tasks</ui-title>\n' +
    'hello tasks');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_zones/main.html',
    '<ui-title>Zones</ui-title>\n' +
    'Hello zones');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/__utils/popover-main.html',
    '<div class="popover-layer" ng-if="showMain" ng-click="closePopoverMain()"></div>\n' +
    '\n' +
    '\n' +
    '<div class="popover-main md-open-menu-container md-whiteframe-z2 md-clickable" ng-class="{\'md-active\':showMain}" ng-if="showMain">\n' +
    '    <div class="dropdown-caret">\n' +
    '        <span class="caret-outer"></span>\n' +
    '        <span class="caret-inner"></span>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="popover-main-item" layout="row" flex>\n' +
    '        <a class="popover-main-link" flex layout="column"   ui-sref="application.dashboard" layout-align="space-around center">\n' +
    '            <md-icon  md-font-icon="mdi-bowling" class="mdi" flex></md-icon>\n' +
    '            <span flex> Dashboard</span>\n' +
    '\n' +
    '        </a>\n' +
    '        <a class="popover-main-link" flex layout="column" ui-sref="application.zones" layout-align="space-around center">\n' +
    '\n' +
    '            <md-icon  md-font-icon="mdi-basecamp" class="mdi" flex></md-icon>\n' +
    '            <span flex>Zones</span>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '    <div class="popover-main-item" layout="row" flex>\n' +
    '        <a class="popover-main-link" flex layout="column" ui-sref="application.tasks" layout-align="space-around center">\n' +
    '            <md-icon  md-font-icon="mdi-alarm-check" class="mdi" flex></md-icon>\n' +
    '            <span flex>Tasks</span>\n' +
    '        </a>\n' +
    '        <a class="popover-main-link" flex layout="column"  ui-sref="application.magnitudes.list" layout-align="space-around center">\n' +
    '            <md-icon  md-font-icon="mdi-beer" class="mdi" flex></md-icon>\n' +
    '            <span flex>Magnitudes</span>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/__utils/popover-user.html',
    '<div class="popover-layer" ng-if="showOptions" ng-click="closePopoverOptions()"></div>\n' +
    '<div class="popover-user-options md-open-menu-container md-whiteframe-z2 md-clickable" ng-class="{\'md-active\':showOptions}" ng-if="showOptions">\n' +
    '    <div class="dropdown-caret">\n' +
    '        <span class="caret-outer"></span>\n' +
    '        <span class="caret-inner"></span>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div layout="column" layout-align="space-between none" class="popover-content">\n' +
    '        <a  flex layout="row"  layout-align="space-between center" class="item-popover">\n' +
    '            <i class="mdi mdi-account-circle" flex="40"></i>\n' +
    '            <span  flex>Account</span>\n' +
    '\n' +
    '        </a>\n' +
    '\n' +
    '        <a  flex layout="row"  layout-align="space-between center" class="item-popover">\n' +
    '            <i class="mdi mdi-football-helmet" flex="40"></i>\n' +
    '            <span flex>Invite</span>\n' +
    '\n' +
    '        </a>\n' +
    '\n' +
    '        <a  flex layout="row"  layout-align="space-between center" class="item-popover">\n' +
    '            <i class="mdi mdi-power" flex="40"></i>\n' +
    '            <span ng-click="logout()" flex>Logout</span>\n' +
    '\n' +
    '        </a>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '</div>');
}]);
})();
