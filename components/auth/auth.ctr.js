(function() {
  
  "use strict";
  
  angular
    .module('ngClassifieds')
    .controller('authController', function(auth, $state, $firebaseAuth) {

      var auth = $firebaseAuth();
        
      var vm = this;
      
      vm.createUser = createUser;
      vm.login = login;
      
      function createUser() {
        
        auth
          .$createUserWithEmailAndPassword(vm.email, vm.password)
          .then(function(result) {
            $state.go('classifieds');
          })
          .catch(function(error) {
            vm.error = error;
        });
      }
      
      function login() {

        auth
          .$signInWithEmailAndPassword(vm.email, vm.password)
          .then(function(result) {
            $state.go('classifieds');
          })
          .catch(function(error) {
            vm.error = error;
          });
      }
    
  });
  
})();