$(document).ready(function() {
    bootstrapValidate('#usr', validateuser(), function(isValid) {
      if (isValid) {
        $("#formHolder").addClass('validClass');
        $("#formHolder").removeClass('invalidClass');
      } else {
        $("#formHolder").addClass('invalidClass');
        $("#formHolder").removeClass('validClass');
      }
    });
    bootstrapValidate('#lastName', 'min:7:Enter at least 7 characters!', function(isValid) {
      if (isValid) {
        $("#formHolder2").addClass('validClass');
        $("#formHolder2").removeClass('invalidClass');
      } else {
        $("#formHolder2").addClass('invalidClass');
        $("#formHolder2").removeClass('validClass');
      }
    });
  });

  function validateuser()
  {
    
    if($("#usr").val==="sree"){
        
        console.log("hello its correct");
        return true;  
        
        
    }
    else{

        console.log("hello its not correct");
      return false;  
    }
    
  }