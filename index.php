<!DOCTYPE html>
<html>


<head>
	<title>Attendance</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css"/>
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
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
    	$( "#amount" ).val($( "#slider" ).slider( "value" ));
  	});
  	</script>
</head>

<body>
  <div id="contents">
    <h1>Attendance</h1>
      <form action='qrpage.php' method='post'><br>
        <p>Date:</p>        <input type='text' name='date' id='datepicker' ><br>
        <p>Event Name:</p>  <input type='text' name='text' id='text'><br>
        <p>Active Time:</p>
        <div id='slider'>
          <br>
          <input type='text' name='time' id='amount' maxlength="2" size="12"><label>Minutes</label>
        </div>
        <br>
        <br>
        <input type='submit' value='Submit'>
      </form>
  </div>
  <div id="nav">
    <img src="img_Pace_logo.png" alt="Pace Univercity Logo" style="width:80%"><br>
    <h2><b>CIS 101 Portal</b></h2>
    <a href="index.php">Attendance</a><br>
  </div>
</body>

</html>




