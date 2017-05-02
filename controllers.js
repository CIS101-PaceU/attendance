angular.module('starter.controllers',[])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, $http, $state, $ionicHistory,$location) {

  var url ="http://localhost:8888/PhpProject1/";
  $scope.loginData={};
  $scope.doLogin = function()
  {
   var admin_user =$scope.loginData.username;
   var admin_password =$scope.loginData.password;
    if(admin_user && admin_password)
    {
      str = url+"login.php?username="+admin_user+"&password="+admin_password;
      $http.get(str)

      .success(function(response){
        $scope.admin=response.records;
        sessionStorage.setItem('loggedin_status',true);
        sessionStorage.setItem('loggedin_id',$scope.admin.Username);

        $ionicHistory.nextViewOptions({
          disableAnimate:true,
          disableBack:true
        })

        $ionicPopup.alert(
          {
             title: 'Message',
             template: 'Login Successful'
          })

          $state.go('/tab/qrcode');
        //$state.go('tab.qrcode',{},{location:"replace",reload:true});
      })
      .error(function()
      {
      //  alert(str);
        $ionicPopup.alert(
          {
             template: 'Login Failed!'
          })

      })
    }
    else
    {
      $ionicPopup.alert({
           title: 'Title',
           template: 'Are you sure?'
      });
    }


  //  confirmPopup.then(function(res) {
  //   if(res)
  //    {
  //      console.log('Sure!');
  //    }
  //   else
  //    {
  //      console.log('Not sure!');
  //    }
  //  })

  }

})
