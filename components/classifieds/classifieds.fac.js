(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .factory('classifiedsFactory', function($firebaseArray) {

      var ref = firebase.database().ref();

      return {
        ref: $firebaseArray(ref)
      }
      
    });
    
})();