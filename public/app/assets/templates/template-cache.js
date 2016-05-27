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
    '        </md-content>\n' +
    '\n' +
    '        <md-content class="notifications">\n' +
    '            <md-toolbar class="md-primary">\n' +
    '                <h2 class="md-toolbar-tools">\n' +
    '                   <i class="mdi mdi-alert"></i>&nbsp;\n' +
    '                    <span>Notifications</span>\n' +
    '                </h2>\n' +
    '            </md-toolbar>\n' +
    '            <md-list>\n' +
    '                <md-list-item class="md-3-line" ng-repeat="notie in notifications" ng-click="goToNotificationDetail(notie._id)">\n' +
    '                   <md-icon  md-font-icon="{{Icon(notie.display_name)}}" class="mdi md-avatar" style="font-size: 2em"></md-icon>  \n' +
    '                    <div class="md-list-item-text" layout="column">\n' +
    '                        <h3>{{notie.display_name}}</h3>\n' +
    '                        <p>{{notie.last_sync|date:\'medium\'}}</p>\n' +
    '                    </div>\n' +
    '                </md-list-item>\n' +
    '                \n' +
    '                <md-list-item ng-if="notifications.length===0">\n' +
    '                    No Notifications\n' +
    '                </md-list-item>\n' +
    '            </md-list>\n' +
    '        </md-content>\n' +
    '\n' +
    '\n' +
    '    </md-sidenav>\n' +
    '    <div flex layout="column">\n' +
    '        <div ui-view="content" id="content" flex></div>\n' +
    '\n' +
    '        <div flex class="footer">\n' +
    '            <md-divider></md-divider>\n' +
    '            <md-toolbar layout="row">\n' +
    '\n' +
    '                <h6 flex-offset="85"><i class="mdi mdi-copyright"></i><span>Smart Town 2016</span></h6>\n' +
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
  $templateCache.put('/views/_invitation/main.html',
    '<ui-title>Invitation</ui-title>\n' +
    '<div  layout="row" layout-align="center center" layout-fill id="login-body" md-theme="smartTheme">\n' +
    '\n' +
    '\n' +
    '    <div layout="column" flex-gt-md="35" flex-xs="50" flex-gt-xs="50" layout-padding>\n' +
    '\n' +
    '        <div layout="row" layout-align="center center">\n' +
    '            <h2><i class="icon house_with_garden_72"></i><br>Welcome! <br>Smart Town Administration</h2>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-card layout="row" >\n' +
    '            <form name="loginForm" flex layout="column" layout-align="center stretch" layout-padding layout-margin>\n' +
    '                <h3 flex>Join us!</h3>\n' +
    '                <md-input-container  class="md-block" flex>\n' +
    '                    <label>Password</label>\n' +
    '\n' +
    '                    <input type="password" required name="password" ng-model="guest.password" >\n' +
    '                    <div ng-messages="loginForm.password.$error" multiple md-auto-hide="false" ng-if=\'loginForm.password.$dirty\'>\n' +
    '                        <div ng-message="required">This is required.</div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container   class="md-block" flex>\n' +
    '                    <label>Repeat Password</label>\n' +
    '\n' +
    '                    <input ng-model="guest.repeat_password" type="password" name="repeatPassword" required>\n' +
    '                    <div ng-messages="loginForm.repeatPassword.$error" md-auto-hide="false" ng-if="loginForm.repeatPassword.$dirty">\n' +
    '                        <div ng-message="required">This is required.</div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container layout-align="center center" flex>\n' +
    '                    <div layout="row" layout-sm="column" layout-margin>\n' +
    '                        <md-button class="md-raised" type="submit" ng-click="signIn()" flex flex-sm="100" ng>Sign in</md-button>\n' +
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
  $templateCache.put('/views/_application/_account/main.html',
    '<ui-title>Account</ui-title>\n' +
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>Your Account</span>\n' +
    '        </h2>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '<md-content layout-padding layout="column" md-theme="smartTheme">\n' +
    '    <div layout="row" flex class="input-create">\n' +
    '        <div  flex="20"  flex-offset="5">\n' +
    '            <h3>Display Name <br>(optional)</h3>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-input-container flex="50" flex-offset="10">\n' +
    '            <input ng-model="account.display_name" aria-label="Display Name" ng-disabled="!editable.display_name">\n' +
    '        </md-input-container>\n' +
    '        <div flex="10" layout="row" layout-align="center center" class="account-update-button">\n' +
    '            <md-button flex ng-click="editable.display_name=true" ng-if="!editable.display_name" class="md-primary" aria-label="Start Update display_name">\n' +
    '                <i class="mdi mdi-pencil orange"></i>\n' +
    '            </md-button>\n' +
    '            <md-button flex ng-click="changeDisplayName()" ng-if="editable.display_name" class="md-primary" aria-label="Update display_name">\n' +
    '                <span class="orange">Update</span>\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider ></md-divider>\n' +
    '    <div layout="row" flex class="input-create">\n' +
    '        <div  flex="20"  flex-offset="5">\n' +
    '            <h3>Email <br>(not optional)</h3>\n' +
    '            <p>This is important</p>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-input-container flex="50" flex-offset="10">\n' +
    '            <input ng-model="account.email" aria-label="email" ng-disabled="!editable.email">\n' +
    '        </md-input-container>\n' +
    '        <div flex="10" layout="row" layout-align="center center" class="account-update-button">\n' +
    '            <md-button flex ng-click="editable.email=true" ng-if="!editable.email" class="md-primary" aria-label="Start Update email">\n' +
    '                <i class="mdi mdi-pencil orange"></i>\n' +
    '            </md-button>\n' +
    '            <md-button flex ng-click="changeEmail()" ng-if="editable.email" class="md-primary" aria-label="Update email">\n' +
    '                <span class="orange">Update</span>\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    <div flex class="button-create" layout="row" layout-align="center center">\n' +
    '        <md-button class="md-raised md-primary" ng-click="OpenPasswordDialog($event)">Change Password</md-button>\n' +
    '        <md-button class="md-raised md-primary" ng-click="deleteAccount($event)" style="background-color: #FF5722; margin-left: 10%;">Delete Account</md-button>\n' +
    '    </div>\n' +
    '</md-content>\n' +
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
  $templateCache.put('/views/_application/_account/password.html',
    '<md-dialog aria-label="New Conversion"  ng-cloak class="conversion-dialog">\n' +
    '    <form>\n' +
    '        <md-toolbar>\n' +
    '            <div class="md-toolbar-tools">\n' +
    '                <h2>Change Password</h2>\n' +
    '                <span flex></span>\n' +
    '                <md-button class="md-icon-button" ng-click="cancel()">\n' +
    '                    <md-icon class="mdi" md-font-icon="mdi-close"  aria-label="Close dialog"></md-icon>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '        </md-toolbar>\n' +
    '        <md-dialog-content md-theme="smartTheme">\n' +
    '            <div class="md-dialog-content" layout="column">\n' +
    '                <md-input-container flex >\n' +
    '                    <label>Password</label>\n' +
    '                    <input ng-model="user.password" type="password" aria-label="Password" >\n' +
    '                </md-input-container>\n' +
    '                \n' +
    '                 <md-input-container flex >\n' +
    '                    <label>Repeat Password</label>\n' +
    '                    <input ng-model="user.repeat_password" type="password" aria-label="Repeat Password" >\n' +
    '                </md-input-container>\n' +
    '                \n' +
    '                <div class="errors" flex>\n' +
    '                    <p ng-if="errors.Empty" >Error: Password Empty</p>\n' +
    '                    <p ng-if="errors.Equals">Error: Password not Equals</p>\n' +
    '               \n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </md-dialog-content>\n' +
    '        <md-dialog-actions layout="row">\n' +
    '\n' +
    '            <span flex></span>\n' +
    '            <md-button ng-click="cancel()">\n' +
    '                Cancel\n' +
    '            </md-button>\n' +
    '            <md-button ng-click="confirm()" >\n' +
    '                Confirm\n' +
    '            </md-button>\n' +
    '\n' +
    '        </md-dialog-actions>\n' +
    '    </form>\n' +
    '</md-dialog>');
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
  $templateCache.put('/views/_application/_invite/main.html',
    '<ui-title>Invite</ui-title>\n' +
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>Invite People</span>\n' +
    '        </h2>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '<md-content layout-padding layout="column" md-theme="smartTheme" layout-align="none center">\n' +
    '\n' +
    '    <h3 style="font-size:2.5em" flex>Invite someone to work in the project</h3>\n' +
    '    <p style="font-size:2em; margin-top: -3%;" flex>More admin, more sensors</p>\n' +
    '\n' +
    '    <md-input-container flex style="width: 40%;">\n' +
    '       <label>Someone Email</label>\n' +
    '        <input ng-model="guest.email" aria-label="email" >\n' +
    '    </md-input-container>\n' +
    '    <div flex class="button-create button-invite" layout="row" layout-align="center center">\n' +
    '     <md-button class="md-raised md-primary md-invite" ng-click="sendInvitation()">Invite, please</md-button>\n' +
    '    </div>\n' +
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
  $templateCache.put('/views/_application/_magnitudes/conversion.html',
    '<md-dialog aria-label="New Conversion"  ng-cloak class="conversion-dialog">\n' +
    '    <form>\n' +
    '        <md-toolbar>\n' +
    '            <div class="md-toolbar-tools">\n' +
    '                <h2>New Conversion</h2>\n' +
    '                <span flex></span>\n' +
    '                <md-button class="md-icon-button" ng-click="cancel()">\n' +
    '                    <md-icon class="mdi" md-font-icon="mdi-close"  aria-label="Close dialog"></md-icon>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '        </md-toolbar>\n' +
    '        <md-dialog-content md-theme="smartTheme">\n' +
    '            <div class="md-dialog-content" layout="column">\n' +
    '                <md-input-container flex >\n' +
    '                    <label>Display Name</label>\n' +
    '                    <input ng-model="conversion.display_name" type="text" aria-label="Analog Display Name" >\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <div class="select-group" layout="row" layout-align="space-around center">\n' +
    '                    <span flex="10">From</span>\n' +
    '                    <md-input-container flex>\n' +
    '                        <label>Unit A</label>\n' +
    '                        <md-select ng-model="conversion.unitA">\n' +
    '                            <md-option ng-repeat="unit in units" value="{{unit._id}}">\n' +
    '                                {{unit.display_name}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <span flex="10" flex-offset="5">To</span>\n' +
    '                    <md-input-container flex>\n' +
    '                        <label>Unit B</label>\n' +
    '                        <md-select ng-model="conversion.unitB" flex>\n' +
    '                            <md-option ng-repeat="unit in units" value="{{unit._id}}">\n' +
    '                                {{unit.display_name}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <md-input-container  flex>\n' +
    '                    <label>Operation</label>\n' +
    '                    <input ng-model="conversion.operation" type="text" aria-label="Analog Display Name" >\n' +
    '                </md-input-container>\n' +
    '                \n' +
    '                <div class="errors" flex>\n' +
    '                    <p ng-if="errors.unitsEmpty" >Error: Units Empty</p>\n' +
    '                    <p ng-if="errors.unitsEquals">Error: Units Equals</p>\n' +
    '                    <p ng-if="errors.DisplayNameEmpty">Error: Display Name Empty</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </md-dialog-content>\n' +
    '        <md-dialog-actions layout="row">\n' +
    '\n' +
    '            <span flex></span>\n' +
    '            <md-button ng-click="cancel()">\n' +
    '                Cancel\n' +
    '            </md-button>\n' +
    '            <md-button ng-click="confirm()" >\n' +
    '                Confirm\n' +
    '            </md-button>\n' +
    '\n' +
    '        </md-dialog-actions>\n' +
    '    </form>\n' +
    '</md-dialog>');
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
    '            <input type="text" ng-model="list.query.search" placeholder="Filter magnitudes" ng-change="search()">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '\n' +
    '        <md-button class="md-icon-button" aria-label="More" flex="5" ng-click="create()">\n' +
    '            <md-icon md-font-icon="mdi-plus" class="mdi"></md-icon>\n' +
    '        </md-button>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '<div class="list-container">\n' +
    '    <md-content layout-padding layout="column" md-theme="smartTheme" class="list">\n' +
    '\n' +
    '        <md-list  ng-cloak class="list-content">\n' +
    '            <div ng-repeat="magnitude in magnitudes">\n' +
    '                <div  layout="row">\n' +
    '                    <md-list-item  ng-click="goToDetail(magnitude._id)" ng-mousedown="openTab($event, magnitude._id)" flex>\n' +
    '                        <md-icon  md-font-icon="{{Icon(magnitude.type)}}" class="mdi list-type-icon"></md-icon> \n' +
    '                        <p flex="15"> Ref: {{ magnitude.ref|fill:4 }} </p> \n' +
    '                        <p> {{ magnitude.display_name }} </p>\n' +
    '                        <p  flex-offset="30"><span class="md-whiteframe-1dp" ng-class="{\'badge\':magnitude.type===\'0\', \'badge-negative\':magnitude.type===\'1\'}">{{Type(magnitude.type)}}</span></p>\n' +
    '\n' +
    '                    </md-list-item>\n' +
    '\n' +
    '                    <md-button class="md-primary" aria-label="Delete" ng-click="delete(magnitude._id)" flex="5">\n' +
    '                        <i class="mdi mdi-delete"></i>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '                <md-divider ng-if="!$last"></md-divider>\n' +
    '            </div>\n' +
    '\n' +
    '            <md-list-item ng-if="magnitudes.length==0">\n' +
    '                No Magnitudes\n' +
    '\n' +
    '            </md-list-item>\n' +
    '        </md-list>\n' +
    '\n' +
    '\n' +
    '    </md-content>\n' +
    '</div>\n' +
    '\n' +
    '<div layout="row" class="pagination"  flex-offset="50" md-theme="smartTheme">\n' +
    '    <md-button class="md-icon-button" aria-label="Prev" flex="10" ng-click="prev()">\n' +
    '        <md-icon md-font-icon="mdi-skip-previous-circle-outline" class="mdi"></md-icon>\n' +
    '    </md-button>\n' +
    '    <md-select ng-model="list.query.p" flex="5" md-container-class="pagination-size" class="select-page" ng-change="changePage()" aria-label="Select Page">\n' +
    '        <md-option ng-repeat="p in list.pagination" value="{{p}}">{{p+1}}</md-option>\n' +
    '    </md-select>\n' +
    '    <span flex="10" flex-offset="5">/{{list.numPages}}</span>\n' +
    '\n' +
    '    <md-button class="md-icon-button next" aria-label="Next" flex="10" ng-click="next()">\n' +
    '        <md-icon md-font-icon="mdi-skip-next-circle-outline" class="mdi"></md-icon>\n' +
    '    </md-button>\n' +
    '    <span class="label-size">Page Size</span>\n' +
    '    <md-select ng-model="list.query.s" flex="5" md-container-class="pagination-size" ng-change="changeSize()" aria-label="Select Size">\n' +
    '        <md-optgroup label="Page Size">\n' +
    '            <md-option value="1">1</md-option>\n' +
    '            <md-option value="5">5</md-option>\n' +
    '            <md-option value="10">10</md-option>\n' +
    '            <md-option value="50">50</md-option>\n' +
    '            <md-option value="100">100</md-option>\n' +
    '        </md-optgroup>\n' +
    '    </md-select>\n' +
    '\n' +
    '</div>\n' +
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
  $templateCache.put('/views/_application/_magnitudes/show.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>{{magnitude.display_name}}</span>\n' +
    '        </h2>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<div  class="detail-toolbar md-toolbar-tools" layout="row"layout-align="space-between stretch">\n' +
    '\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'info\')" ng-class="{\'active\':SelectedIndex===\'info\'}">\n' +
    '        <span>Info</span>  <i class="mdi mdi-information-outline"></i>\n' +
    '    </div>\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'units\')" ng-class="{\'active\':SelectedIndex===\'units\'}">\n' +
    '        <span>Units</span>  <i class="mdi mdi-numeric"></i>\n' +
    '    </div>\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'conversions\')" ng-class="{\'active\':SelectedIndex===\'conversions\', \'disable\':Digital()}">\n' +
    '        <span>Conversions</span> <i class="mdi mdi-stethoscope"></i>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<md-content  ng-switch on="SelectedIndex" class="detail background-theme-orange" layout-padding ng-class="{\'analog-content\':!Digital() }">\n' +
    '    <div class="detail-info mt5" ng-switch-when="info" layout="row" layout-align="center stretch">\n' +
    '\n' +
    '        <md-card class="detail-form" flex>\n' +
    '            <md-toolbar class="md-whiteframe-1dp">\n' +
    '                <div class="md-toolbar-tools" >\n' +
    '                    <h3>Display Name</h3>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <md-card-content layout="row" layout-align="center center" md-theme="smartTheme">\n' +
    '                <md-input-container flex layout="row">\n' +
    '                    <input ng-model="magnitude.display_name" type="text" flex flex-order="1" ng-disabled="!editable.name" aria-label="Display Name">\n' +
    '                    <md-button flex="5" flex-order="2" ng-click="editable.name=true" ng-if="!editable.name" class="md-primary" aria-label="Start Update Display Name">\n' +
    '                        <i class="mdi mdi-pencil"></i>\n' +
    '                    </md-button>\n' +
    '                    <md-button flex="5" flex-order="2" ng-click="changeDisplayName()" ng-if="editable.name" class="md-primary"\n' +
    '                               aria-label="Update Display Name">\n' +
    '                        Update\n' +
    '                    </md-button>\n' +
    '                </md-input-container>\n' +
    '            </md-card-content>\n' +
    '        </md-card>\n' +
    '\n' +
    '        <md-card class="detail-form" flex>\n' +
    '            <md-toolbar class="md-whiteframe-1dp">\n' +
    '                <div class="md-toolbar-tools" >\n' +
    '                    <h3>System Type</h3>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <md-card-content layout-align="center center" layout="row" class="radio" md-theme="smartTheme">\n' +
    '                <md-radio-group ng-model="magnitude.type" layout="row">\n' +
    '                    <md-radio-button value="0" flex class="md-primary" ng-disabled="!editable.type">Analog</md-radio-button>\n' +
    '                    <md-radio-button value="1" flex class="md-primary" ng-disabled="!editable.type">Digital</md-radio-button>\n' +
    '                </md-radio-group>\n' +
    '                <md-button flex="5" flex-order="2" ng-click="editable.type=true" ng-if="!editable.type" class="md-primary" aria-label="Start update type">\n' +
    '                    <i class="mdi mdi-pencil"></i>\n' +
    '                </md-button>\n' +
    '                <md-button flex="5" flex-order="2" ng-click="changeType()" ng-if="editable.type" class="md-primary" aria-label="Update type">\n' +
    '                    Update\n' +
    '                </md-button>\n' +
    '            </md-card-content>\n' +
    '        </md-card>\n' +
    '    </div>\n' +
    '    <div class="detail-units" ng-switch-when="units"  ng-switch on="magnitude.type" >\n' +
    '        <div ng-switch-when="1" class="digital">\n' +
    '            <md-card>\n' +
    '                <md-card-header>\n' +
    '                    <md-card-header-text>\n' +
    '                        <span class="md-title">Digital System</span>\n' +
    '                        <span class="md-subhead">Meaning of Digital Units</span>\n' +
    '                    </md-card-header-text>\n' +
    '                </md-card-header>\n' +
    '                <md-card-title>\n' +
    '                    <md-card-title-text>\n' +
    '                        <span class="md-headline">  <i class="mdi mdi-earth"></i>ON</span>\n' +
    '                        <md-input-container md-theme="smartTheme">\n' +
    '                            <input ng-model="magnitude.digital_units.on" type="text"  ng-disabled="!editable.digital_units" aria-label="Digital Unit On">\n' +
    '                        </md-input-container>\n' +
    '                    </md-card-title-text>\n' +
    '                </md-card-title>\n' +
    '                <md-card-title>\n' +
    '                    <md-card-title-text>\n' +
    '                        <span class="md-headline">    <i class="mdi mdi-earth-off" flex></i> OFF </span>\n' +
    '                        <md-input-container md-theme="smartTheme">\n' +
    '                            <input ng-model="magnitude.digital_units.off" type="text" ng-disabled="!editable.digital_units" aria-label="Digital Unit Off">\n' +
    '                        </md-input-container>\n' +
    '                    </md-card-title-text>\n' +
    '                </md-card-title>\n' +
    '                <md-card-actions layout="row" layout-align="end center" md-theme="smartTheme">\n' +
    '                    <md-button ng-click="editable.digital_units=true" ng-if="!editable.digital_units" class="md-primary">\n' +
    '                        <i class="mdi mdi-pencil"></i>\n' +
    '                    </md-button>\n' +
    '\n' +
    '                    <md-button  ng-if="editable.digital_units" class="md-primary" ng-click="changeDigitalUnits()">\n' +
    '                        Update\n' +
    '                    </md-button>\n' +
    '                </md-card-actions>\n' +
    '            </md-card>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '        <div ng-switch-when="0" class="analog md-whiteframe-1dp">\n' +
    '            <md-toolbar class="md-whiteframe-1dp analog-toolbar">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <h4>Analog System</h4>\n' +
    '                    <span flex></span>\n' +
    '                    <md-button class="md-fab" ng-click="addAnalogUnit()" aria-label="Add Analog Unit">\n' +
    '                        <md-icon md-font-icon="mdi-plus" class="mdi"></md-icon>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '\n' +
    '            <md-list class="analog-list">\n' +
    '                <md-list-item ng-repeat="unit in magnitude.analog_units | orderBy:\'-\'" layout="row"  md-theme="smartTheme">\n' +
    '                    <md-button  ng-if="unit.editable" class="md-delete md-primary" ng-click="deleteAnalogUnit(unit)" aria-label=" Delete Analog Unit">\n' +
    '                        <i class="mdi mdi-delete"></i>\n' +
    '                    </md-button>\n' +
    '                    <md-input-container flex class="ml2">\n' +
    '                        <label>Display Name</label>\n' +
    '                        <input ng-model="unit.display_name" type="text" ng-disabled="!unit.editable" aria-label="Analog Display Name" >\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container flex-offset="10" flex="20" class="symbol">\n' +
    '                        <label>Symbol</label>\n' +
    '                        <input ng-model="unit.symbol" type="text" ng-disabled="!unit.editable" aria-label="Analog Symbol" >\n' +
    '                    </md-input-container>\n' +
    '                    <md-button flex="nogrow"  ng-if="!unit.editable" aria-label="Start Updating" ng-click="unit.editable=true" class="md-primary">\n' +
    '                        <i class="mdi mdi-pencil"></i>\n' +
    '                    </md-button>\n' +
    '                    <md-button flex="nogrow" ng-if="unit.editable"  aria-label="Update Analog Unit" ng-click="updateAnalogUnit(unit, $index)" class="md-primary">\n' +
    '                        Update\n' +
    '                    </md-button>\n' +
    '                </md-list-item>\n' +
    '\n' +
    '            </md-list>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div class="detail-conversions" ng-switch-when="conversions">\n' +
    '        <div class="md-whiteframe-1dp detail-content">\n' +
    '            <md-button class="md-fab button-add" aria-label="Add Conversion" ng-click="addConversion($event)">\n' +
    '                <md-icon md-font-icon="mdi-plus" class="mdi"></md-icon>\n' +
    '            </md-button>\n' +
    '            <md-list md-theme="smartTheme">\n' +
    '                <div ng-repeat="conversion in magnitude.conversions | orderBy:\'-\'" >\n' +
    '                    <md-list-item layout="row">\n' +
    '\n' +
    '                        <h3 flex="20" flex-offset="5">{{ conversion.display_name }}</h3>\n' +
    '                        <p flex="20">\n' +
    '                            From {{getUnitName(conversion.unitA)}} To  {{getUnitName(conversion.unitB)}}\n' +
    '                        </p>\n' +
    '\n' +
    '                        <md-input-container class="operation" flex="30">\n' +
    '                            <label>Operation</label>\n' +
    '                            <input ng-model="conversion.operation" type="text" ng-disabled="true" aria-label="Conversion Operarion" placeholder="No operation">\n' +
    '                        </md-input-container>\n' +
    '\n' +
    '                        <md-button flex="nogrow" aria-label="Update Conversion" ng-click="updateConversion($event, conversion)" class="md-primary md-delete">\n' +
    '                            <i class="mdi mdi-pencil"></i>\n' +
    '                        </md-button>\n' +
    '                        \n' +
    '                         <md-button flex="nogrow" aria-label="Delete Conversion" class="md-primary md-delete" ng-click="deleteConversion(conversion)">\n' +
    '                            <i class="mdi mdi-delete"></i>\n' +
    '                        </md-button>\n' +
    '\n' +
    '                    </md-list-item>\n' +
    '                    <md-divider ng-if="!$last"></md-divider>\n' +
    '                </div>\n' +
    '                <md-list-item ng-if="magnitude.conversions.length==0">\n' +
    '                    No Conversions\n' +
    '                </md-list-item>\n' +
    '\n' +
    '            </md-list>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</md-content>\n' +
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
  $templateCache.put('/views/_application/_tasks/main.html',
    '<ui-title>Tasks</ui-title>\n' +
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '\n' +
    '        <md-input-container md-no-float class="md-block" flex> \n' +
    '            <md-icon  md-font-icon="mdi-magnify" class="mdi"></md-icon>             \n' +
    '            <input type="text" ng-model="searchObject.text" placeholder="Filter tasks">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button class="md-icon-button" aria-label="More" flex="5" ng-click="create()">\n' +
    '            <md-icon md-font-icon="mdi-plus" class="mdi"></md-icon>\n' +
    '        </md-button>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<md-content layout-padding layout="column" md-theme="smartTheme" class="list">\n' +
    '\n' +
    '  <md-list  ng-cloak class="list-content">\n' +
    '        <div ng-repeat="task in tasks| search:\'display_name\':searchObject">\n' +
    '\n' +
    '                <md-list-item layout="row" class="task-item" ng-init="task.editable=false">\n' +
    '                  <md-icon flex="5" md-font-icon="mdi-alarm-check" class="mdi list-type-icon"></md-icon> \n' +
    '\n' +
    '                    <md-input-container flex="20">\n' +
    '                        <label>Display Name</label>\n' +
    '                        <input ng-model="task.display_name" type="text" aria-label="Display Name"  ng-disabled="!task.editable">\n' +
    '                    </md-input-container>\n' +
    '\n' +
    '                    <md-input-container flex="50">\n' +
    '                        <label>Webhook</label>\n' +
    '                        <input ng-model="task.webhook" type="text" aria-label="Webhook"  ng-disabled="!task.editable">\n' +
    '                    </md-input-container>\n' +
    '\n' +
    '                    <md-input-container flex="10" class="task-select">\n' +
    '                        <label>Frequency</label>\n' +
    '                        <md-select ng-model="task.frequency" ng-disabled="!task.editable">\n' +
    '                            <md-option  value="week">\n' +
    '                                Each Week\n' +
    '                            </md-option>\n' +
    '                            <md-option  value="day">\n' +
    '                                Each Day\n' +
    '                            </md-option>\n' +
    '                            <md-option  value="hour">\n' +
    '                                Each Hour\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-button class="md-primary" aria-label="start update" ng-if="!task.editable" ng-click="task.editable=true">\n' +
    '                        <i class="mdi mdi-pencil"></i>\n' +
    '                    </md-button>\n' +
    '                      <md-button class="md-primary" aria-label="update" ng-if="task.editable" ng-click="update(task, $index)">\n' +
    '                          <span>Update</span>\n' +
    '                    </md-button>\n' +
    '                    <md-button class="md-primary" aria-label="Delete" ng-click="delete(task._id)">\n' +
    '                        <i class="mdi mdi-delete"></i>\n' +
    '                    </md-button>\n' +
    '\n' +
    '                </md-list-item>\n' +
    '                \n' +
    '                 \n' +
    '            \n' +
    '            <md-divider ng-if="!$last"></md-divider>\n' +
    '        </div>\n' +
    '        <md-list-item ng-if="tasks.length==0">\n' +
    '            No Tasks\n' +
    '        </md-list-item>\n' +
    '    </md-list>\n' +
    '\n' +
    '</md-content>\n' +
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
  $templateCache.put('/views/_application/_zones/create.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>New Zone</span>\n' +
    '        </h2>\n' +
    '        <div flex="20"  class="button-create" layout="row" layout-align="center center" >\n' +
    '            <md-button class="md-raised md-primary" md-theme="smartTheme" ng-click="create()">Create</md-button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '<md-content layout="column" md-theme="smartTheme" id="zone-create">\n' +
    '    <div layout="row" flex class="zone-input-name" >\n' +
    '        <div  flex="20"  flex-offset="5">\n' +
    '            <h3>Display Name (optional)</h3>\n' +
    '            <p>Leave blank and we\'ll choose one for you</p>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-input-container flex="50" flex-offset="10">\n' +
    '            <input ng-model="zone.display_name" aria-label="Display Name">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider ></md-divider>\n' +
    '    <div layout="column" flex class="zone-draw">\n' +
    '        <div flex  layout="row">\n' +
    '            <h3 flex="15" flex-offset="5">Draw Zone</h3>\n' +
    '\n' +
    '        </div >\n' +
    '\n' +
    '        <div flex  layout="row">\n' +
    '            <div  layout="row" flex="40">\n' +
    '                <span class="location" flex="20">Center <br>\n' +
    '                    <i class="mdi mdi-crosshairs-gps" ng-click="getCurrentLocation()"></i>\n' +
    '                </span>\n' +
    '\n' +
    '                <md-input-container flex>\n' +
    '                    <label>Latitude</label>\n' +
    '                    <input input="text" ng-model="zone.center[0]">\n' +
    '                </md-input-container>\n' +
    '                <md-input-container flex>\n' +
    '                    <label>Longitude</label>\n' +
    '                    <input input="text" ng-model="zone.center[1]">\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '\n' +
    '            <div layout="row" flex flex-offset="20" md-theme="smartTheme">\n' +
    '\n' +
    '                <md-button  class="md-raised md-primary"  aria-label="Rectangle" flex="10" ng-disabled="zone.shape.type===\'rectangle\'" ng-click="setShape(\'rectangle\')">\n' +
    '                    <i class="mdi mdi-vector-rectangle"></i>\n' +
    '                </md-button>\n' +
    '                <md-button  class="md-raised md-primary"  aria-label="circle" flex="10" ng-disabled="zone.shape.type===\'circle\'" ng-click="setShape(\'circle\')" >\n' +
    '                    <i class="mdi mdi-vector-circle"></i>\n' +
    '                </md-button>\n' +
    '                <md-button  class="md-raised md-primary" aria-label="Polygon" flex="10" ng-disabled="zone.shape.type===\'polygon\'" ng-click="setShape(\'polygon\')" >\n' +
    '                    <i class="mdi mdi-vector-polygon"></i>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <ng-map flex zoom="11" center="{{zone.center}}" map-type-id="ROADMAP" on-center-changed="self.centerChanged()">\n' +
    '\n' +
    '            <drawing-manager ng-if="newShape"\n' +
    '                             on-overlaycomplete="self.onMapOverlayCompleted()"\n' +
    '                             drawing-control-options="{position: \'TOP_CENTER\',drawingModes:[\'{{zone.shape.type}}\']}"\n' +
    '                             drawingControl="true"\n' +
    '                             drawingMode="null">\n' +
    '            </drawing-manager>\n' +
    '\n' +
    '            <shape id="polygon" name="polygon" ng-if="!newShape&&zone.shape.type===\'polygon\'" \n' +
    '                   stroke-color="#FF0000" editable="true" on-mouseover="self.trackPolygon()"\n' +
    '                   stroke-opacity="1.0" stroke-weight="2"\n' +
    '                   paths="{{zone.shape.paths}}" >\n' +
    '            </shape>\n' +
    '\n' +
    '            <shape id="circle" name="circle" ng-if="!newShape&&zone.shape.type===\'circle\'" draggable="true"  on-dragend="self.changeCenterCircle()"  editable="true" on-radius_changed="self.changeCircleRadius()"\n' +
    '                   stroke-color=\'#FF0000\' stroke-opacity="1.0"stroke-weight="2"\n' +
    '                   center="{{zone.shape.center}}" radius="{{zone.shape.radius}}">\n' +
    '            </shape>\n' +
    '\n' +
    '            <shape id="rectangle" name="rectangle"  ng-if="!newShape&&zone.shape.type===\'rectangle\'"\n' +
    '                   stroke-color=\'#FF0000\' editable="true" on-bounds_changed="self.changeRectangle()"\n' +
    '                   stroke-opacity="1.0" stroke-weight="2"\n' +
    '                   bounds="{{zone.shape.bounds}}">\n' +
    '            </shape>\n' +
    '        </ng-map>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
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
  $templateCache.put('/views/_application/_zones/list.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '\n' +
    '        <md-input-container md-no-float class="md-block" flex> \n' +
    '            <md-icon  md-font-icon="mdi-magnify" class="mdi"></md-icon>             \n' +
    '            <input type="text" ng-model="list.query.search" placeholder="Filter zones" ng-change="search()">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '\n' +
    '        <md-button class="md-icon-button" aria-label="More" flex="5" ng-click="create()">\n' +
    '            <md-icon md-font-icon="mdi-plus" class="mdi"></md-icon>\n' +
    '        </md-button>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<div class="list-container">\n' +
    '\n' +
    '    <md-content layout-padding layout="column" md-theme="smartTheme" class="list">\n' +
    '\n' +
    '        <md-list  ng-cloak class="list-content">\n' +
    '            <div ng-repeat="zone in zones" >\n' +
    '                <div  layout="row">\n' +
    '                    <md-list-item  ng-click="goToDetail(zone._id)" ng-mousedown="openTab($event, zone._id)" flex>\n' +
    '                        <md-icon  md-font-icon="{{Icon(zone.shape.type)}}" class="mdi list-type-icon"></md-icon>\n' +
    '                        <p flex="15"> Ref: {{ zone.ref|fill:4 }} </p>  \n' +
    '                        <p> {{ zone.display_name }} </p>\n' +
    '\n' +
    '                    </md-list-item>\n' +
    '\n' +
    '                    <md-button class="md-primary" aria-label="Delete" ng-click="delete(zone._id)" flex="5">\n' +
    '                        <i class="mdi mdi-delete"></i>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '                <md-divider ng-if="!$last"></md-divider>\n' +
    '            </div>\n' +
    '            <md-list-item ng-if="zones.length==0">\n' +
    '                No Zones\n' +
    '\n' +
    '            </md-list-item>\n' +
    '        </md-list>\n' +
    '\n' +
    '    </md-content>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<div layout="row" class="pagination"  flex-offset="50" md-theme="smartTheme">\n' +
    '    <md-button class="md-icon-button" aria-label="Prev" flex="10" ng-click="prev()">\n' +
    '        <md-icon md-font-icon="mdi-skip-previous-circle-outline" class="mdi"></md-icon>\n' +
    '    </md-button>\n' +
    '    <md-select ng-model="list.query.p" flex="5" md-container-class="pagination-size" class="select-page" ng-change="changePage()" aria-label="Select Page">\n' +
    '        <md-option ng-repeat="p in list.pagination" value="{{p}}">{{p+1}}</md-option>\n' +
    '    </md-select>\n' +
    '    <span flex="10" flex-offset="5">/{{list.numPages}}</span>\n' +
    '\n' +
    '    <md-button class="md-icon-button next" aria-label="Next" flex="10" ng-click="next()">\n' +
    '        <md-icon md-font-icon="mdi-skip-next-circle-outline" class="mdi"></md-icon>\n' +
    '    </md-button>\n' +
    '    <span class="label-size">Page Size</span>\n' +
    '    <md-select ng-model="list.query.s" flex="5" md-container-class="pagination-size" ng-change="changeSize()" aria-label="Select Size">\n' +
    '        <md-optgroup label="Page Size">\n' +
    '            <md-option value="1">1</md-option>\n' +
    '            <md-option value="5">5</md-option>\n' +
    '            <md-option value="10">10</md-option>\n' +
    '            <md-option value="50">50</md-option>\n' +
    '            <md-option value="100">100</md-option>\n' +
    '        </md-optgroup>\n' +
    '    </md-select>\n' +
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
  $templateCache.put('/views/_application/_zones/main.html',
    '<ui-title>Zones</ui-title>\n' +
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
  $templateCache.put('/views/_application/_zones/show.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>{{zone.display_name}}</span>\n' +
    '        </h2>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '\n' +
    '<div  class="detail-toolbar md-toolbar-tools" layout="row"layout-align="space-between stretch">\n' +
    '\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'info\')" ng-class="{\'active\':SelectedIndex===\'info\'}">\n' +
    '        <span>Info</span>  <i class="mdi mdi-information-outline"></i>\n' +
    '    </div>\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'location\')" ng-class="{\'active\':SelectedIndex===\'location\'}">\n' +
    '        <span>Location</span>  <i class="mdi mdi-map-marker"></i>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<md-content  ng-switch on="SelectedIndex" class="detail background-theme-orange" layout-padding >\n' +
    '\n' +
    '    <div class="detail-info" ng-switch-when="info" layout="column" layout-align="center stretch">\n' +
    '        <div layout="row" layout-align="center stretch">\n' +
    '            <md-card class="detail-form" flex>\n' +
    '                <md-toolbar class="md-whiteframe-1dp">\n' +
    '                    <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '                        <h3 flex>Display Name</h3>\n' +
    '                        <md-button flex="5" ng-click="editable.display_name=true" ng-if="!editable.display_name" class="md-primary" aria-label="Start Update Display Name">\n' +
    '                            <i class="mdi mdi-pencil orange"></i>\n' +
    '                        </md-button>\n' +
    '                        <md-button flex="5" ng-click="changeDisplayName()" ng-if="editable.display_name" class="md-primary" aria-label="Update Display Name">\n' +
    '                            <span class="orange">Update</span>\n' +
    '                        </md-button>\n' +
    '                    </div>\n' +
    '                </md-toolbar>\n' +
    '                <md-card-content md-theme="smartTheme">\n' +
    '                    <md-input-container class="md-block">\n' +
    '                        <label>Name Zone</label>\n' +
    '                        <input ng-model="zone.display_name" type="text" flex flex-order="1" ng-disabled="!editable.display_name" aria-label="Display Name">\n' +
    '\n' +
    '                    </md-input-container>\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '\n' +
    '            <md-card class="detail-form" flex>\n' +
    '                <md-toolbar class="md-whiteframe-1dp">\n' +
    '                    <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '                        <h3 flex>Description</h3>\n' +
    '                        <md-button flex="5" ng-click="editable.description=true" ng-if="!editable.description" class="md-primary" aria-label="Start Update Description" >\n' +
    '                            <i class="mdi mdi-pencil orange"></i>\n' +
    '                        </md-button>\n' +
    '                        <md-button flex="5"  ng-click="changeDescription()" ng-if="editable.description" class="md-primary"\n' +
    '                                   aria-label="Update Description">\n' +
    '                            <span class="orange">Update</span>\n' +
    '                        </md-button>\n' +
    '                    </div>\n' +
    '                </md-toolbar>\n' +
    '                <md-card-content md-theme="smartTheme">\n' +
    '                    <md-input-container class="md-block">\n' +
    '                        <label>About Zone</label>\n' +
    '                        <textarea ng-model="zone.description" ng-disabled="!editable.description" md-maxlength="150" rows="5" md-select-on-focus aria-label="Description"></textarea>\n' +
    '\n' +
    '                    </md-input-container>\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '        <md-card class="detail-form" flex>\n' +
    '            <md-toolbar class="md-whiteframe-1dp">\n' +
    '                <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '                    <h3 flex>Keywords</h3>\n' +
    '                    <md-button flex="5" ng-click="editable.keywords=true" ng-if="!editable.keywords" class="md-primary" aria-label="Start Update Keywords" >\n' +
    '                        <i class="mdi mdi-pencil orange"></i>\n' +
    '                    </md-button>\n' +
    '                    <md-button flex="5"  ng-click="changeKeywords()" ng-if="editable.keywords" class="md-primary"\n' +
    '                               aria-label="Update Keywords">\n' +
    '                        <span class="orange">Update</span>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <md-card-content md-theme="smartTheme">\n' +
    '                <md-chips ng-if="zone.keywords" ng-model="zone.keywords" readonly="!editable.keywords" md-enable-chip-edit="editable.keywords" ng-cloak></md-chips>\n' +
    '            </md-card-content>\n' +
    '        </md-card>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="detail-zone-location" ng-switch-when="location">\n' +
    '\n' +
    '        <div class="md-whiteframe-1dp detail-options" layout="row" md-theme="smartTheme">\n' +
    '\n' +
    '            <md-button class="md-raised md-primary"  aria-label="Rectangle" flex="10" ng-disabled="!editable.location || zone.shape.type===\'rectangle\'" ng-click="setShape(\'rectangle\')">\n' +
    '                <i class="mdi mdi-vector-rectangle"></i>\n' +
    '            </md-button>\n' +
    '            <md-button  class="md-raised md-primary"  aria-label="circle" flex="10" ng-disabled="!editable.location ||zone.shape.type===\'circle\'" ng-click="setShape(\'circle\')">\n' +
    '                <i class="mdi mdi-vector-circle"></i>\n' +
    '            </md-button>\n' +
    '            <md-button  class="md-raised md-primary" aria-label="Polygon" flex="10" ng-disabled="!editable.location ||zone.shape.type===\'polygon\'" ng-click="setShape(\'polygon\')">\n' +
    '                <i class="mdi mdi-vector-polygon"></i>\n' +
    '            </md-button> \n' +
    '\n' +
    '\n' +
    '            <div flex="5" class="center">Center</div>\n' +
    '\n' +
    '            <md-input-container flex="20" >\n' +
    '                <label>Latitude</label>\n' +
    '                <input input="text" ng-model="zone.center[0]" ng-disabled="!editable.location">\n' +
    '            </md-input-container>\n' +
    '            <md-input-container flex="20">\n' +
    '                <label>Longitude</label>\n' +
    '                <input input="text" ng-model="zone.center[1]" ng-disabled="!editable.location">\n' +
    '            </md-input-container>  \n' +
    '\n' +
    '            <md-button flex="5" class="md-primary" aria-label="Current location" ng-disabled="!editable.location" ng-click="getCurrentLocation()" >\n' +
    '                <i class="mdi mdi-crosshairs-gps" ></i>\n' +
    '            </md-button>\n' +
    '\n' +
    '            <md-button flex="5" ng-click="updateLocation()" ng-if="!editable.location" class="md-primary" aria-label="Start Update Location" >\n' +
    '                <i class="mdi mdi-pencil orange"></i>\n' +
    '            </md-button>\n' +
    '            <md-button flex="5"  ng-click="changeLocation()" ng-if="editable.location" class="md-primary"\n' +
    '                       aria-label="Update Location">\n' +
    '                <span class="orange">Update</span>\n' +
    '            </md-button>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <ng-map zoom="11" center="{{zone.center}}" map-type-id="ROADMAP"  on-center-changed="self.centerChanged()">\n' +
    '\n' +
    '            <drawing-manager ng-if="newShape"\n' +
    '                             on-overlaycomplete="self.onMapOverlayCompleted()"\n' +
    '                             drawing-control-options="{position: \'TOP_CENTER\',drawingModes:[\'{{zone.shape.type}}\']}"\n' +
    '                             drawingControl="true"\n' +
    '                             drawingMode="null">\n' +
    '            </drawing-manager>\n' +
    '\n' +
    '            <shape id="polygon" name="polygon" ng-if="!newShape&&zone.shape.type===\'polygon\'" \n' +
    '                   stroke-color="#FF0000" editable="{{editable.location}}"\n' +
    '                   stroke-opacity="1.0" stroke-weight="2"\n' +
    '                   paths="{{zone.shape.paths}}" >\n' +
    '            </shape>\n' +
    '\n' +
    '            <shape id="circle" name="circle" ng-if="!newShape&&zone.shape.type===\'circle\'" draggable="{{editable.location}}" editable="{{editable.location}}"\n' +
    '                   stroke-color=\'#FF0000\' stroke-opacity="1.0"stroke-weight="2"\n' +
    '                   center="{{zone.shape.center}}" radius="{{zone.shape.radius}}">\n' +
    '            </shape>\n' +
    '\n' +
    '            <shape id="rectangle" name="rectangle"  ng-if="!newShape&&zone.shape.type===\'rectangle\'"\n' +
    '                   stroke-color=\'#FF0000\' editable="{{editable.location}}"\n' +
    '                   stroke-opacity="1.0" stroke-weight="2"\n' +
    '                   bounds="{{zone.shape.bounds}}">\n' +
    '            </shape>\n' +
    '            \n' +
    '\n' +
    '\n' +
    '        </ng-map>\n' +
    '\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '</md-content>\n' +
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
    '        <a class="popover-main-link" flex layout="column"   ui-sref="application.dashboard.list" layout-align="space-around center">\n' +
    '            <md-icon  md-font-icon="mdi-bowling" class="mdi" flex></md-icon>\n' +
    '            <span flex> Dashboard</span>\n' +
    '\n' +
    '        </a>\n' +
    '        <a class="popover-main-link" flex layout="column" ui-sref="application.zones.list" layout-align="space-around center">\n' +
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
    '        <a  flex layout="row"  layout-align="space-between center" ui-sref="application.account" class="item-popover">\n' +
    '            <i class="mdi mdi-account-circle" flex="40"></i>\n' +
    '            <span  flex>Account</span>\n' +
    '\n' +
    '        </a>\n' +
    '\n' +
    '        <a  flex layout="row"  layout-align="space-between center" ui-sref="application.invite" class="item-popover">\n' +
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

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_dashboard/_sensor/create.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>New Sensor</span>\n' +
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
    '            <input ng-model="sensor.display_name" aria-label="Display Name">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider ></md-divider>\n' +
    '    <div layout="row" flex class="input-create">\n' +
    '        <div  flex="20"  flex-offset="5">\n' +
    '            <h3>Magnitude &amp; Data Info</h3>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex-offset="10" flex="60" layout="column">\n' +
    '\n' +
    '            <div flex layout="row" class="sensor-input sensor-magnitude-input">\n' +
    '                <md-input-container flex="40">\n' +
    '                    <label>Select Magnitude</label>\n' +
    '                    <md-select ng-model="SelectedMagnitude" ng-change="setMagnitude()">\n' +
    '                        <md-option ng-repeat="magnitude in magnitudes" ng-value="magnitude">\n' +
    '                            {{magnitude.display_name}}\n' +
    '                        </md-option>\n' +
    '                    </md-select>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container  flex flex-offset="10" ng-if="SelectedMagnitude.type===\'0\'">\n' +
    '                    <label>Select Analog Unit</label>\n' +
    '                    <md-select ng-model="sensor.unit">\n' +
    '                        <md-option ng-repeat="unit in SelectedMagnitude.analog_units" value="{{unit._id}}">\n' +
    '                            {{unit.display_name}}\n' +
    '                        </md-option>\n' +
    '                        <md-option ng-if="SelectedMagnitude.analog_units.length===0">\n' +
    '                            No Units\n' +
    '                        </md-option>\n' +
    '                    </md-select>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '            <div flex layout="row" class="sensor-input sensor-raw-input">\n' +
    '               <div flex="40" >\n' +
    '                   <md-checkbox ng-model="sensor.is_raw_data" aria-label="Raw Data">\n' +
    '                    Raw Data\n' +
    '                </md-checkbox>\n' +
    '               </div>\n' +
    '                \n' +
    '                <md-input-container  flex-offset="10"  flex ng-if="sensor.is_raw_data">\n' +
    '                    <label>Conversion</label>\n' +
    '                    <input ng-model="sensor.raw_conversion" aria-label="Raw Operation">\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    <div flex class="button-create" layout="row" layout-align="center center">\n' +
    '        <md-button class="md-raised md-primary" ng-disabled="!sensor.magnitude" ng-click="create()">Create Sensor</md-button>\n' +
    '    </div>\n' +
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
  $templateCache.put('/views/_application/_dashboard/_sensor/main.html',
    '<ui-title>Sensor</ui-title>\n' +
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
  $templateCache.put('/views/_application/_dashboard/_sensor/sensor_import_dialog.html',
    '<md-dialog aria-label="Verify CSV Import"  ng-cloak class="import-dialog">\n' +
    '    <form>\n' +
    '        <md-toolbar>\n' +
    '            <div class="md-toolbar-tools">\n' +
    '                <h2>Verify CSV Import</h2>\n' +
    '                <span flex></span>\n' +
    '                <md-button class="md-icon-button" ng-click="cancel()">\n' +
    '                    <md-icon class="mdi" md-font-icon="mdi-close"  aria-label="Close dialog"></md-icon>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '        </md-toolbar>\n' +
    '        <md-dialog-content md-theme="smartTheme">\n' +
    '            <div class="md-dialog-content" layout="column">\n' +
    '\n' +
    '                <md-list>\n' +
    '\n' +
    '                    <md-list-item class="md-3-line" ng-repeat="sensor in sensors">\n' +
    '                        <div class="md-list-item-text" layout="column" ng-init="sensor.more=false">\n' +
    '                            <h2 ng-click="sensor.more=!sensor.more"><i class="mdi mdi-chevron-down"></i>Display Name: {{ sensor.display_name || \'N/A\' }} </h2>\n' +
    '                            <div layout="row"> \n' +
    '                                <span style="font-size:1.5em" flex="50">Grid Ref: {{ (sensor.grid_ref | fill:4) || \'N/A\' }}</span>\n' +
    '                                <i class="mdi mdi-check-circle check" title="Valid Grid Ref" ng-if="sensor.grid_valid"></i>\n' +
    '                                <i class="mdi mdi-close-circle wrong" title="Invalid Grid Ref" ng-if="sensor.grid_verify&&!sensor.grid_valid"></i>\n' +
    '                                <md-progress-circular flex ng-if="!sensor.grid_verify" md-mode="indeterminate" md-diameter="45px"></md-progress-circular>\n' +
    '                            </div>\n' +
    '                            <div layout="row"> \n' +
    '                                <span style="font-size:1.5em" flex="50">Magnitude Ref: {{ (sensor.magnitude_ref | fill:4) || \'N/A\' }}</span>\n' +
    '                                <i class="mdi mdi-check-circle check" title="Valid Magniude Ref" ng-if="sensor.magnitude_valid"></i>\n' +
    '                                <i class="mdi mdi-close-circle wrong" title="Invalid Magnitude Ref" ng-if="sensor.magnitudeverifyd&&!sensor.magnitude_valid"></i>\n' +
    '                                <md-progress-circular flex ng-if="!sensor.magnitude_verify" md-mode="indeterminate" md-diameter="45px"></md-progress-circular>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <div ng-if="sensor.more">\n' +
    '                                <p>Device Name: {{ sensor.device_name || \'N/A\' }}</p>\n' +
    '                                <p>Description: {{ sensor.description|| \'N/A\' }}</p>\n' +
    '                                <p>Unit: {{sensor.unit}}</p>\n' +
    '                                <p>Is Raw Data: {{sensor.is_raw_data || \'N/A\'}}</p>\n' +
    '                                <p ng-if="sensor.is_raw_data">Raw Conversion: {{sensor.raw_conversion || \'N/A\'}}</p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <md-divider ng-if="!$last"></md-divider>\n' +
    '                    </md-list-item>\n' +
    '                </md-list>\n' +
    '\n' +
    '            </div>\n' +
    '        </md-dialog-content>\n' +
    '        <md-dialog-actions layout="row">\n' +
    '\n' +
    '            <span flex></span>\n' +
    '            <md-button ng-click="cancel()">\n' +
    '                Cancel\n' +
    '            </md-button>\n' +
    '            <md-button ng-click="confirm()" >\n' +
    '                Confirm\n' +
    '            </md-button>\n' +
    '\n' +
    '        </md-dialog-actions>\n' +
    '    </form>\n' +
    '</md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_dashboard/_sensor/show.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>{{sensor.display_name}}</span>\n' +
    '        </h2>\n' +
    '        \n' +
    '         <md-button aria-label="fix sensor" md-theme="smartTheme" style="color:white" flex="15" class="md-raised md-primary" ng-click="fix()" ng-if="sensor.notify">\n' +
    '            <i class="mdi mdi-alert"></i>&nbsp;&nbsp;Fix Sensor\n' +
    '        </md-button>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '\n' +
    '<div  class="detail-toolbar md-toolbar-tools" layout="row"layout-align="space-between stretch">\n' +
    '\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'info\')" ng-class="{\'active\':SelectedIndex===\'info\'}">\n' +
    '        <span>Info</span>  <i class="mdi mdi-information-outline"></i>\n' +
    '    </div>\n' +
    '\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'settings\')" ng-class="{\'active\':SelectedIndex===\'settings\'}">\n' +
    '        <span>Settings</span>  <i class="mdi mdi-cake"></i>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<md-content  ng-switch on="SelectedIndex" class="detail background-theme-orange" layout-padding >\n' +
    '    <div class="detail-info" ng-switch-when="info" layout="column" layout-align="center stretch">\n' +
    '        <md-card class="detail-form" flex>\n' +
    '            <md-toolbar class="md-whiteframe-1dp">\n' +
    '                <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '                    <h3 flex>Transmissor</h3>\n' +
    '                    <md-button flex="5" ng-click="editable.transmissor=true" ng-if="!editable.transmissor" class="md-primary" aria-label="Start Update transmissor">\n' +
    '                        <i class="mdi mdi-pencil orange"></i>\n' +
    '                    </md-button>\n' +
    '                    <md-button flex="5" ng-click="changeTransmissor()" ng-if="editable.transmissor" class="md-primary" aria-label="Update transmissor">\n' +
    '                        <span class="orange">Update</span>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <md-card-content md-theme="smartTheme" layout="row">\n' +
    '                <md-input-container class="md-block" flex="20">\n' +
    '                    <label>Device Name</label>\n' +
    '                    <input ng-model="sensor.device_name" type="text" flex ng-disabled="!editable.transmissor" aria-label="transmissor device name">\n' +
    '\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container class="md-block" flex flex-offset="10">\n' +
    '                    <label>Description</label>\n' +
    '                    <textarea ng-model="sensor.description" ng-disabled="!editable.transmissor" md-maxlength="150" rows="5" md-select-on-focus aria-label="Description"></textarea>\n' +
    '\n' +
    '                </md-input-container>\n' +
    '            </md-card-content>\n' +
    '        </md-card>\n' +
    '\n' +
    '        <md-card class="detail-form" flex>\n' +
    '            <md-toolbar class="md-whiteframe-1dp">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <h3 flex>Credentials</h3>\n' +
    '\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <md-card-content md-theme="smartTheme">\n' +
    '                <md-input-container class="md-block" flex>\n' +
    '                    <label>Node ID</label>\n' +
    '                    <md-icon md-font-icon="mdi-clipboard-outline" class="mdi copy-icon" title="Copy Node ID" ng-click="copyToClipboard(sensor.node_id)"></md-icon>\n' +
    '                    <input ng-model="sensor.node_id" type="text" ng-disabled="true" aria-label="Node id">\n' +
    '\n' +
    '                </md-input-container>\n' +
    '\n' +
    '            </md-card-content>\n' +
    '        </md-card>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="detail-settings md-whiteframe-1dp" id="sensor-detail" ng-switch-when="settings" layout="column" md-theme="smartTheme">\n' +
    '\n' +
    '        <div layout="row" flex class="input-create display-name">\n' +
    '            <div  flex="20"  flex-offset="5">\n' +
    '                <h3>Display Name</h3>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '            <md-input-container flex="50" flex-offset="10">\n' +
    '                <input ng-model="sensor.display_name" aria-label="Display Name" ng-disabled="!editable.display_name">\n' +
    '            </md-input-container>\n' +
    '            <div flex="10" layout="row" layout-align="center center">\n' +
    '                <md-button flex ng-click="editable.display_name=true" ng-if="!editable.display_name" class="md-primary" aria-label="Start Update display_name">\n' +
    '                    <i class="mdi mdi-pencil orange"></i>\n' +
    '                </md-button>\n' +
    '                <md-button flex ng-click="changeDisplayName()" ng-if="editable.display_name" class="md-primary" aria-label="Update display_name">\n' +
    '                    <span class="orange">Update</span>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '        <md-divider class="divider-display-name"></md-divider>\n' +
    '        <div layout="row" flex class="input-create">\n' +
    '            <div  flex="20"  flex-offset="5">\n' +
    '                <h3>Magnitude &amp; Data Info</h3>\n' +
    '            </div>\n' +
    '\n' +
    '            <div flex-offset="10" id="sensor-magnitude" flex="60" layout="column">\n' +
    '\n' +
    '                <div flex layout="row" layout-align="center center">\n' +
    '                    <md-button flex="10" flex-offset="90" ng-click="editable.magnitude=true" ng-if="!editable.magnitude" class="md-primary" aria-label="Start Update magnitude">\n' +
    '                        <i class="mdi mdi-pencil orange"></i>\n' +
    '                    </md-button>\n' +
    '                    <md-button flex="10" flex-offset="90" ng-click="changeMagnitude()" ng-if="editable.magnitude" class="md-primary" aria-label="Update magnitude">\n' +
    '                        <span class="orange">Update</span>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '                <div flex layout="row"  class="sensor-input sensor-magnitude-input">\n' +
    '                    <md-input-container flex="40">\n' +
    '                        <label>Select Magnitude</label>\n' +
    '                        <md-select ng-model="sensor.magnitude" ng-change="onChangeSelectedMagnitude()" ng-disabled="!editable.magnitude">\n' +
    '                            <md-option ng-repeat="magnitude in magnitudes" ng-value="magnitude._id">\n' +
    '                                {{magnitude.display_name}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '\n' +
    '                    <md-input-container  flex flex-offset="10" ng-if="SelectedMagnitude.type===\'0\'">\n' +
    '                        <label>Select Analog Unit</label>\n' +
    '                        <md-select ng-model="sensor.unit" ng-disabled="!editable.magnitude">\n' +
    '                            <md-option ng-repeat="unit in SelectedMagnitude.analog_units" ng-value="unit._id">\n' +
    '                                {{unit.display_name}}\n' +
    '                            </md-option>\n' +
    '                            <md-option ng-if="SelectedMagnitude.analog_units.length===0">\n' +
    '                                No Units\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '                <div flex layout="row" class="sensor-input sensor-raw-input">\n' +
    '                    <div flex="40" >\n' +
    '                        <md-checkbox ng-model="sensor.is_raw_data" aria-label="Raw Data" ng-disabled="!editable.magnitude">\n' +
    '                            Raw Data\n' +
    '                        </md-checkbox>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <md-input-container  flex-offset="10"  flex ng-if="sensor.is_raw_data">\n' +
    '                        <label>Conversion</label>\n' +
    '                        <input ng-model="sensor.raw_conversion" aria-label="Raw Operation" ng-disabled="!editable.magnitude">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
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
  $templateCache.put('/views/_application/_dashboard/_sensor_grid/create.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>New Sensor Grid</span>\n' +
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
    '            <input ng-model="sensor_grid.display_name" aria-label="Display Name">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider ></md-divider>\n' +
    '    <div layout="row" flex class="input-create">\n' +
    '        <div  flex="20"  flex-offset="5">\n' +
    '            <h3>Zone Location</h3>\n' +
    '            <p>Sensor grid is located in one zone of the city</p>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-input-container flex="30" flex-offset="20" class="select">\n' +
    '            <label>Select Zone</label>\n' +
    '            <md-select ng-model="sensor_grid.zone">\n' +
    '                <md-option ng-repeat="zone in zones" value="{{zone._id}}">\n' +
    '                    {{zone.display_name}}\n' +
    '                </md-option>\n' +
    '            </md-select>\n' +
    '        </md-input-container>\n' +
    '\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    <div flex class="button-create" layout="row" layout-align="center center">\n' +
    '        <md-button class="md-raised md-primary" ng-click="create()" ng-disabled="!sensor_grid.zone">Create Sensor Grid</md-button>\n' +
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
  $templateCache.put('/views/_application/_dashboard/_sensor_grid/list.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '\n' +
    '        <md-input-container md-no-float class="md-block" flex> \n' +
    '            <md-icon  md-font-icon="mdi-magnify" class="mdi"></md-icon>             \n' +
    '            <input type="text" ng-model="list.query.search"  placeholder="Filter sensor grids" ng-change="search()">\n' +
    '        </md-input-container>\n' +
    '        <md-menu class="create-menu">    \n' +
    '            <md-button class="md-icon-button" aria-label="More" ng-click="openMenu($mdOpenMenu, $event)">\n' +
    '                <md-icon md-menu-align-target md-font-icon="mdi-plus" class="mdi"></md-icon>\n' +
    '            </md-button>\n' +
    '            <md-menu-content width="3">\n' +
    '                <md-menu-item>\n' +
    '                    <md-button ng-click="create()">\n' +
    '                        Create new Sensor Grid\n' +
    '                    </md-button>\n' +
    '                </md-menu-item>\n' +
    '                 <md-menu-item>\n' +
    '                    <md-button ng-click="importSensorGrids($event)">\n' +
    '                        Import Sensor Grids by CSV\n' +
    '                    </md-button>\n' +
    '                </md-menu-item>\n' +
    '                <md-menu-item>\n' +
    '                    <md-button ng-click="importSensors($event)">\n' +
    '                        Import Sensors by CSV\n' +
    '                    </md-button>\n' +
    '                </md-menu-item>\n' +
    '            </md-menu-content>\n' +
    '        </md-menu>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<div class="list-container">\n' +
    '    <md-content layout-padding layout="column" md-theme="smartTheme" class="list">\n' +
    '\n' +
    '        <md-list  ng-cloak class="list-content">\n' +
    '            <div ng-repeat="sensor_grid in sensor_grids">\n' +
    '                <div  layout="row">\n' +
    '                    <md-list-item  ng-click="goToDetail(sensor_grid._id)" ng-mousedown="openTab($event, sensor_grid._id)" flex>\n' +
    '                        <md-icon  md-font-icon="{{Icon(sensor_grid.display_name)}}" class="mdi list-type-icon"></md-icon>  \n' +
    '                        <p flex="15"> Ref: {{ sensor_grid.ref|fill:4 }} </p>\n' +
    '                        <p> {{ sensor_grid.display_name }} </p>\n' +
    '\n' +
    '\n' +
    '                    </md-list-item>\n' +
    '\n' +
    '                    <md-button class="md-primary" aria-label="Delete" ng-click="delete(sensor_grid._id)" flex="5">\n' +
    '                        <i class="mdi mdi-delete"></i>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '                <md-divider ng-if="!$last"></md-divider>\n' +
    '            </div>\n' +
    '            <md-list-item ng-if="sensor_grids.length==0">\n' +
    '                No Sensor Grids\n' +
    '\n' +
    '            </md-list-item>\n' +
    '        </md-list>\n' +
    '\n' +
    '    </md-content>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<div layout="row" class="pagination"  flex-offset="50" md-theme="smartTheme">\n' +
    '    <md-button class="md-icon-button" aria-label="Prev" flex="10" ng-click="prev()">\n' +
    '        <md-icon md-font-icon="mdi-skip-previous-circle-outline" class="mdi"></md-icon>\n' +
    '    </md-button>\n' +
    '    <md-select ng-model="list.query.p" flex="5" md-container-class="pagination-size" class="select-page" ng-change="changePage()" aria-label="Select Page">\n' +
    '        <md-option ng-repeat="p in list.pagination" value="{{p}}">{{p+1}}</md-option>\n' +
    '    </md-select>\n' +
    '    <span flex="10" flex-offset="5">/{{list.numPages}}</span>\n' +
    '\n' +
    '    <md-button class="md-icon-button next" aria-label="Next" flex="10" ng-click="next()">\n' +
    '        <md-icon md-font-icon="mdi-skip-next-circle-outline" class="mdi"></md-icon>\n' +
    '    </md-button>\n' +
    '    <span class="label-size">Page Size</span>\n' +
    '    <md-select ng-model="list.query.s" flex="5" md-container-class="pagination-size" ng-change="changeSize()" aria-label="Select Size">\n' +
    '        <md-optgroup label="Page Size">\n' +
    '            <md-option value="1">1</md-option>\n' +
    '            <md-option value="5">5</md-option>\n' +
    '            <md-option value="10">10</md-option>\n' +
    '            <md-option value="50">50</md-option>\n' +
    '            <md-option value="100">100</md-option>\n' +
    '        </md-optgroup>\n' +
    '    </md-select>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<input type="file" class="hide" id="importSensorGridFile" file-reader onfilechange="SensorGridfileToImport" encoding="encoding">\n' +
    '<input type="file" class="hide" id="importSensorFile" file-reader onfilechange="SensorfileToImport" encoding="encoding">');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_dashboard/_sensor_grid/sensor_grid_import_dialog.html',
    '<md-dialog aria-label="Verify CSV Import"  ng-cloak class="import-dialog">\n' +
    '    <form>\n' +
    '        <md-toolbar>\n' +
    '            <div class="md-toolbar-tools">\n' +
    '                <h2>Verify CSV Import</h2>\n' +
    '                <span flex></span>\n' +
    '                <md-button class="md-icon-button" ng-click="cancel()">\n' +
    '                    <md-icon class="mdi" md-font-icon="mdi-close"  aria-label="Close dialog"></md-icon>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '        </md-toolbar>\n' +
    '        <md-dialog-content md-theme="smartTheme">\n' +
    '            <div class="md-dialog-content" layout="column">\n' +
    '\n' +
    '                <md-list>\n' +
    '\n' +
    '                    <md-list-item class="md-3-line" ng-repeat="sensor_grid in sensor_grids">\n' +
    '                        <div class="md-list-item-text" layout="column" ng-init="sensor_grid.more=false">\n' +
    '                            <h2 ng-click="sensor_grid.more=!sensor_grid.more">Display Name: {{ sensor_grid.display_name || \'N/A\' }} <i class="mdi mdi-chevron-down"></i></h2>\n' +
    '                            <div layout="row"> \n' +
    '                                <span style="font-size:1.5em" flex="50">Zone Ref: {{ (sensor_grid.zone_ref | fill:4) || \'N/A\' }}</span>\n' +
    '                                <i class="mdi mdi-check-circle check" title="Valid Zone Ref" ng-if="sensor_grid.valid"></i>\n' +
    '                                <i class="mdi mdi-close-circle wrong" title="Invalid Zone Ref" ng-if="sensor_grid.loaded&&!sensor_grid.valid"></i>\n' +
    '                                <md-progress-circular flex ng-if="!sensor_grid.loaded" md-mode="indeterminate" md-diameter="45px"></md-progress-circular>\n' +
    '                            </div>\n' +
    '                            <div ng-if="sensor_grid.more">\n' +
    '                                <p>Device Name: {{ sensor_grid.device_name || \'N/A\' }}</p>\n' +
    '                                <p>Description: {{ sensor_grid.description|| \'N/A\' }}</p>\n' +
    '                                <p>Location: {{sensor_grid.location_latitude}}, {{sensor_grid.location_longitude}}</p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <md-divider ng-if="!$last"></md-divider>\n' +
    '                    </md-list-item>\n' +
    '                </md-list>\n' +
    '\n' +
    '            </div>\n' +
    '        </md-dialog-content>\n' +
    '        <md-dialog-actions layout="row">\n' +
    '\n' +
    '            <span flex></span>\n' +
    '            <md-button ng-click="cancel()">\n' +
    '                Cancel\n' +
    '            </md-button>\n' +
    '            <md-button ng-click="confirm()" >\n' +
    '                Confirm\n' +
    '            </md-button>\n' +
    '\n' +
    '        </md-dialog-actions>\n' +
    '    </form>\n' +
    '</md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_application/_dashboard/_sensor_grid/show.html',
    '<md-toolbar class="md-whiteframe-1dp" id="main-toolbar">\n' +
    '    <div class=" toolbar-create md-toolbar-tools" layout="row">\n' +
    '        <md-button aria-label="Go Back" flex="10" class="button-back" ng-click="goBack()">\n' +
    '            <i class="mdi mdi-chevron-left"></i>Go Back\n' +
    '        </md-button>\n' +
    '        <h2 flex>\n' +
    '            <span>{{sensor_grid.display_name}}</span>\n' +
    '        </h2>\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '\n' +
    '<div  class="detail-toolbar md-toolbar-tools" layout="row"layout-align="space-between stretch">\n' +
    '\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'info\')" ng-class="{\'active\':SelectedIndex===\'info\'}">\n' +
    '        <span>Info</span>  <i class="mdi mdi-information-outline"></i>\n' +
    '    </div>\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'sensors\')" ng-class="{\'active\':SelectedIndex===\'sensors\'}">\n' +
    '        <span>Sensors</span>  <i class="mdi mdi-access-point-network"></i>\n' +
    '    </div>\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'location\')" ng-class="{\'active\':SelectedIndex===\'location\'}">\n' +
    '        <span>Location</span>  <i class="mdi mdi-map-marker"></i>\n' +
    '    </div>\n' +
    '    <div flex class="detail-toolbar-item md-button" ng-click="select(\'settings\')" ng-class="{\'active\':SelectedIndex===\'settings\'}">\n' +
    '        <span>Settings</span>  <i class="mdi mdi-cake"></i>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<md-content  ng-switch on="SelectedIndex" class="detail background-theme-orange" layout-padding ng-class="{\'hiddenY\':SelectedIndex===\'sensors\'}">\n' +
    '\n' +
    '    <div class="detail-info" ng-switch-when="info" layout="column" layout-align="center stretch">\n' +
    '        <md-card class="detail-form" flex>\n' +
    '            <md-toolbar class="md-whiteframe-1dp">\n' +
    '                <div class="md-toolbar-tools" layout="row"  layout-align="start center">\n' +
    '                    <h3 flex>Communication Center</h3>\n' +
    '                    <md-button flex="5" ng-click="editable.communication_center=true" ng-if="!editable.communication_center" class="md-primary" aria-label="Start Update communication_center">\n' +
    '                        <i class="mdi mdi-pencil orange"></i>\n' +
    '                    </md-button>\n' +
    '                    <md-button flex="5" ng-click="changeCommunicationCenter()" ng-if="editable.communication_center" class="md-primary" aria-label="Update communication_center">\n' +
    '                        <span class="orange">Update</span>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <md-card-content md-theme="smartTheme" layout="row">\n' +
    '                <md-input-container class="md-block" flex="20">\n' +
    '                    <label>Device Name</label>\n' +
    '                    <input ng-model="sensor_grid.device_name" type="text" flex ng-disabled="!editable.communication_center" aria-label="communication_center device name">\n' +
    '\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container class="md-block" flex flex-offset="10">\n' +
    '                    <label>Description</label>\n' +
    '                    <textarea ng-model="sensor_grid.description" ng-disabled="!editable.communication_center" md-maxlength="150" rows="5" md-select-on-focus aria-label="Description"></textarea>\n' +
    '\n' +
    '                </md-input-container>\n' +
    '            </md-card-content>\n' +
    '        </md-card>\n' +
    '\n' +
    '        <md-card class="detail-form" flex>\n' +
    '            <md-toolbar class="md-whiteframe-1dp">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <h3 flex>Credentials</h3>\n' +
    '\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <md-card-content md-theme="smartTheme">\n' +
    '                <md-input-container class="md-block" flex>\n' +
    '                    <label>Client ID</label>\n' +
    '                    <md-icon md-font-icon="mdi-clipboard-outline" class="mdi copy-icon" title="Copy Client ID" ng-click="copyToClipboard(sensor_grid.client_id)"></md-icon>\n' +
    '                    <input ng-model="sensor_grid.client_id" type="text" ng-disabled="true" aria-label="client id">\n' +
    '\n' +
    '                </md-input-container>\n' +
    '\n' +
    '                <md-input-container class="md-icon-float md-icon-right md-block" flex>\n' +
    '                    <label>Client Secret</label>\n' +
    '                    <md-icon md-font-icon="mdi-clipboard-outline" class="mdi copy-icon" title="Copy Client Secret" ng-click="copyToClipboard(sensor_grid.client_secret)"></md-icon>\n' +
    '                    <input ng-model="sensor_grid.client_secret" type="{{show.secret}}"  ng-disabled="true" aria-label="client secret">\n' +
    '                    <md-icon md-font-icon="mdi-lock" class="mdi copy-icon" title="Show Client Secret" ng-click="showSecret()" ng-if="show.secret===\'password\'"></md-icon>\n' +
    '                    <md-icon md-font-icon="mdi-reload" class="mdi copy-icon" title="Reload Client Secret" ng-if="show.secret===\'text\'" ng-click="reloadSecret()"></md-icon>\n' +
    '                </md-input-container>\n' +
    '\n' +
    '            </md-card-content>\n' +
    '        </md-card>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="detail-settings md-whiteframe-1dp" ng-switch-when="settings" layout="column" md-theme="smartTheme">\n' +
    '\n' +
    '        <div layout="row" flex class="input-create">\n' +
    '            <div  flex="20"  flex-offset="5">\n' +
    '                <h3>Display Name</h3>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '            <md-input-container flex="50" flex-offset="10">\n' +
    '                <input ng-model="sensor_grid.display_name" aria-label="Display Name" ng-disabled="!editable.display_name">\n' +
    '            </md-input-container>\n' +
    '            <div flex="10" layout="row" layout-align="center center">\n' +
    '                <md-button flex ng-click="editable.display_name=true" ng-if="!editable.display_name" class="md-primary" aria-label="Start Update display_name">\n' +
    '                    <i class="mdi mdi-pencil orange"></i>\n' +
    '                </md-button>\n' +
    '                <md-button flex ng-click="changeDisplayName()" ng-if="editable.display_name" class="md-primary" aria-label="Update display_name">\n' +
    '                    <span class="orange">Update</span>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '        <md-divider ></md-divider>\n' +
    '        <div layout="row" flex class="input-create">\n' +
    '            <div  flex="20"  flex-offset="5">\n' +
    '                <h3>Zone Location</h3>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '            <md-input-container flex="30" flex-offset="20" class="select">\n' +
    '                <label>Select Zone</label>\n' +
    '                <md-select ng-model="sensor_grid.zone" ng-disabled="!editable.zone">\n' +
    '                    <md-option ng-repeat="zone in zones" value="{{zone._id}}">\n' +
    '                        {{zone.display_name}}\n' +
    '                    </md-option>\n' +
    '                </md-select>\n' +
    '            </md-input-container>\n' +
    '            <div flex="10" layout="row" layout-align="center center">\n' +
    '                <md-button flex ng-click="editable.zone=true" ng-if="!editable.zone" class="md-primary" aria-label="Start Update zone">\n' +
    '                    <i class="mdi mdi-pencil orange"></i>\n' +
    '                </md-button>\n' +
    '                <md-button flex ng-click="changeZone()" ng-if="editable.zone" class="md-primary" aria-label="Update zone">\n' +
    '                    <span class="orange">Update</span>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <md-divider ></md-divider>\n' +
    '        <div layout="row" flex class="input-create">\n' +
    '            <div  flex="20"  flex-offset="5">\n' +
    '                <h3>Allow Access</h3>\n' +
    '\n' +
    '            </div>\n' +
    '            <md-switch flex="30" class="select" ng-model="editable.haveAccess" aria-label="Allow Access" ng-change="allowAccess()">\n' +
    '            </md-switch>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '        \n' +
    '        <md-divider ></md-divider>\n' +
    '        <div layout="row" flex class="input-create">\n' +
    '            <div  flex="20"  flex-offset="5">\n' +
    '                <h3>MQTT</h3>\n' +
    '\n' +
    '            </div>\n' +
    '            <md-switch flex="30" class="select" ng-model="sensor_grid.mqtt" aria-label="MQTT" ng-change="MQTT()">\n' +
    '            </md-switch>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="detail-location md-whiteframe-1dp" ng-switch-when="location" layout="column" md-theme="smartTheme">\n' +
    '\n' +
    '        <div layout="row" flex>\n' +
    '\n' +
    '            <span class="location" flex="10">\n' +
    '                <i class="mdi mdi-crosshairs-gps" ng-click="editable.location&&getCurrentLocation()"></i>\n' +
    '            </span>\n' +
    '\n' +
    '            <md-input-container flex>\n' +
    '                <label>Latitude</label>\n' +
    '                <input input="text" ng-model="sensor_grid.location[1]" ng-disabled="!editable.location">\n' +
    '            </md-input-container>\n' +
    '            <md-input-container flex>\n' +
    '                <label>Longitude</label>\n' +
    '                <input input="text" ng-model="sensor_grid.location[0]" ng-disabled="!editable.location">\n' +
    '            </md-input-container>\n' +
    '\n' +
    '            <div flex="10" layout="row" layout-align="center center">\n' +
    '                <md-button flex ng-click="editable.location=true" ng-if="!editable.location" class="md-primary" aria-label="Start Update location">\n' +
    '                    <i class="mdi mdi-pencil orange"></i>\n' +
    '                </md-button>\n' +
    '                <md-button flex ng-click="changeLocation()" ng-if="editable.location" class="md-primary" aria-label="Update location">\n' +
    '                    <span class="orange">Update</span>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '        <ng-map center="{{editable.center|reverse}}">\n' +
    '            <marker position="{{(sensor_grid.location| reverse)||\'[40.74, -74.18]\'}}" title="drag me" draggable="{{editable.location}}"></marker>\n' +
    '        </ng-map>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="detail-sensors-list" ng-switch-when="sensors" layout="column" md-theme="smartTheme">\n' +
    '        <div class="list-container">\n' +
    '            <div class="md-whiteframe-1dp detail-content">\n' +
    '                <md-button class="md-fab button-add" aria-label="Add sensor" ng-click="createSensor()">\n' +
    '                    <md-icon md-font-icon="mdi-plus" class="mdi"></md-icon>\n' +
    '                </md-button>\n' +
    '                <md-list  ng-cloak class="list-content">\n' +
    '                    <div ng-repeat="sensor in sensors | orderBy:\'-\'">\n' +
    '                        <div  layout="row">\n' +
    '                            <md-list-item  ng-click="goToSensorDetail(sensor._id)" flex="75">\n' +
    '                                <md-icon  md-font-icon="{{Icon(sensor.display_name)}}" class="mdi list-type-icon"></md-icon> \n' +
    '                                <p flex="15"> Ref: {{ sensor.ref|fill:4 }} </p>\n' +
    '                                <p> {{ sensor.display_name }} </p>\n' +
    '\n' +
    '\n' +
    '                            </md-list-item>\n' +
    '\n' +
    '                            <md-button class="md-primary" aria-label="Delete" ng-click="deleteSensor(sensor._id)" flex="5">\n' +
    '                                <i class="mdi mdi-delete"></i>\n' +
    '                            </md-button>\n' +
    '                        </div>\n' +
    '                        <md-divider ng-if="!$last"></md-divider>\n' +
    '                    </div>\n' +
    '                    <md-list-item ng-if="sensors.length===0">\n' +
    '                        No Sensors\n' +
    '                    </md-list-item>\n' +
    '                </md-list>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div layout="row"> \n' +
    '            <div flex="30">\n' +
    '                <md-input-container md-no-float class="md-block" flex style="padding-top: 0; padding-bottom:0; margin: 0;"> \n' +
    '                    <md-icon  md-font-icon="mdi-magnify" class="mdi"></md-icon>             \n' +
    '                    <input type="text" ng-model="list.query.search"  placeholder="Filter sensor" ng-change="searchSensor()">\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div layout="row" flex class="pagination" flex-offset="20" md-theme="smartTheme">\n' +
    '\n' +
    '\n' +
    '                <md-button class="md-icon-button prev" aria-label="Prev" flex="10" ng-click="prev()">\n' +
    '                    <md-icon md-font-icon="mdi-skip-previous-circle-outline" class="mdi"></md-icon>\n' +
    '                </md-button>\n' +
    '                <div flex="5">\n' +
    '                    <md-select ng-model="list.query.p" md-container-class="pagination-size" class="select-page" ng-change="changePage()" aria-label="Select Page">\n' +
    '                        <md-option ng-repeat="p in list.pagination" value="{{p}}">{{p+1}}</md-option>\n' +
    '                    </md-select>\n' +
    '                </div>\n' +
    '\n' +
    '                <span flex="10" flex-offset="5">/{{list.numPages}}</span>\n' +
    '\n' +
    '                <md-button class="md-icon-button next" aria-label="Next" flex="10" ng-click="next()">\n' +
    '                    <md-icon md-font-icon="mdi-skip-next-circle-outline" class="mdi"></md-icon>\n' +
    '                </md-button>\n' +
    '                <span class="label-size">Page Size</span>\n' +
    '                <div flex="5">\n' +
    '                    <md-select ng-model="list.query.s" md-container-class="pagination-size" ng-change="changeSize()" aria-label="Select Size">\n' +
    '                        <md-optgroup label="Page Size">\n' +
    '                            <md-option value="1">1</md-option>\n' +
    '                            <md-option value="5">5</md-option>\n' +
    '                            <md-option value="10">10</md-option>\n' +
    '                            <md-option value="50">50</md-option>\n' +
    '                            <md-option value="100">100</md-option>\n' +
    '                        </md-optgroup>\n' +
    '                    </md-select>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>');
}]);
})();
