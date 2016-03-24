(function(module) {
try {
  module = angular.module('Application');
} catch (e) {
  module = angular.module('Application', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/_login/login.tpl.html',
    '<div>\n' +
    '    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad totam est, deleniti nisi repellendus blanditiis quos aliquam architecto? Nemo et dignissimos impedit asperiores ad. Consequatur dolorem obcaecati labore dolor aperiam.</span>\n' +
    '    <span>Itaque odio tempore eligendi vel voluptas culpa porro impedit, quam doloremque ad fugit veniam modi laboriosam ducimus. Quae reiciendis ducimus, voluptates minus quisquam recusandae, sapiente, assumenda fuga quod itaque officia!</span>\n' +
    '    <span>Autem placeat obcaecati, aperiam, libero voluptate dolor ab porro culpa esse dignissimos asperiores nihil perferendis vitae quas doloremque excepturi saepe laborum officiis adipisci modi consequuntur expedita sunt nostrum! Ratione, fugit.</span></p>\n' +
    '    \n' +
    '</div>');
}]);
})();
