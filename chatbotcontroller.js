var app=angular.module('chatbot', []);
app.controller('chatbotcontroller',function($scope)
{
	 var conversationalForm ;
   

	$scope.toggle=function(checkbox)
   {
   	  if($scope.checkbox==true)
   	  {
          $scope.ischeck=true;
         /* window.location.replace("#autoreload");
          refresh_time=0;
          reloading=setTimeout("window.location.reload();", refresh_time);*/
          /*window.onload = function() {*/
    conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("cf-form"),
    context: document.getElementById("cf-context"),
    preventAutoFocus: true,
    flowStepCallback: function(dto, success, error) {
    	
      return success();
    },
    submitCallback: function() {
      // remove Conversational Form

      alert(
        "All fields are entered correctly"
      );
    }
  });

       }
      else
      {
      	/*$scope.conversational-form--show.setAttribute('style', 'opacity:0');*/
      	refresh_time=3000000;

      	$scope.ischeck=false;
      	
      }
       
    }
    
   /* window.onload=$scope.checkReloading();
*/
   
      
 });
	