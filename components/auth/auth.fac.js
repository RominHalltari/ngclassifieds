(function() {
  
  "use strict";
  
  angular
    .module('ngClassifieds')
    .factory('auth', function($firebaseAuth) {

      function signOut() {
        return firebase.auth().signOut()
          .then(function() {
            console.log('signed out')
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    
      return {
        signOut: signOut
      }
      
    });
  
})();