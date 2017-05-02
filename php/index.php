<!DOCTYPE html>
<html>


<head>
	<title>Attendance</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css"/>
  	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  	<link rel="stylesheet" href="/resources/demos/style.css">
  	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  	<script>
  		<!--date picker-->
 		$( function() 
 		{
    		$( "#datepicker" ).datepicker();
  		});
 		<!--slider-->
  		$( function() 
  		{
    		$( "#slider" ).slider(
    		{
      		range: "min",
      		min: 1,
      		max: 20,
      		value: 10,
      		slide: function( event, ui ) 
      		{
        		$( "#amount" ).val( ui.value );
      		}
    		});
    		$( "#amount" ).val( 
    			$( "#slider" ).slider( "value" )
    			);
  		});
  	</script>
</head>


<body>

	<h1 align ='center'>Attendace</h1>
	<form action='qrpage.php' method='post' align='center'>
		Date:      	 <input type='text' name='date' id='datepicker' ><br>
		Event Name:  <input type='text' name='text' id='text'><br>
		Active Time: <input type='text' name='time' id='amount'> Minutes<br>
 		<div id='slider'></div>
		<input type='submit' value='Submit'>
	</form>



</body>
</html>




