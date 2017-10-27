<!DOCTYPE html>
<?php
  $servername = "localhost";
  $username = "root";
  $password = "root";
  $dbname = "Attendance_test";
  $date="2017-10-31";
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) 
  {
    die("Connection failed: " . $conn->connect_error);
  } 

  $query = "SELECT * FROM tb_event";
  mysqli_query($conn, $query) or die(' error querrring the datbase');

  $result = mysqli_query($conn, $query);
  $row = mysqli_fetch_array($result);
?>
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
    	 $( "#datepicker" ).datepicker({ minDate: 0 });
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

       <!--validate form-->
       function validateForm() 
       {
          var date = document.forms["Attendance"]["date"].value;
          if (date == "") 
          {
            alert("Date must be filled out");
            return false;
          }
      }


  </script>

</head>

<body>
  <div id="contents">
    <h1>Attendance</h1>
      <form name="Attendance" action='qrpage.php' method='post' onsubmit="return validateForm()"><br>
        <label>Date:  <input type='text' name='date' id='datepicker' readonly="readonly" required><br><br><br><br></label>
        <label>Event Name: 
          <select type='text' name='text' id='text' required>
            <?php
              while($row = mysqli_fetch_array($result))
              {
            ?>
                <option value="<?php echo $row['event_id'];?>"><?php echo $row['event_name']; ?></option>";
            <?php
              }
            ?>
            ?>
          </select>
          <br><br><br><br></label>
        <label>Active Time:
          <div id='slider'>
            <br>
            <input name='time' id='amount' maxlength="2" size="2" readonly="readonly" required><label>Minutes</label>
          </div>
        </label>
        <br><br><br><br>
        <input type='submit' value='Submit' readonly="readonly">
      </form>
  </div>
  <div id="nav">
    <img src="img_Pace_logo.png" alt="Pace Univercity Logo" style="width:80%"><br>
    <h2><b>CIS 101 Portal</b></h2>
    <a href="index.php">Attendance</a><br>
  </div>
</body>

</html>




