<!DOCTYPE html>
<html>


<head>
	<title>Attendance</title>
	<link rel="stylesheet" type="text/css" href="style.css"/>
</head>


<body>

	<h1 align ='center'>Attendace</h1>
	<form action='qrpage.php' method='post' align='center'>
		Date:       <input type='Date' name='date' id='date' value= <?php date() ?> ><br>
		Event Name:  <input type='text' name='text' id='text'><br>
		Active Time: <input type='time' name='time' id='time'><br>
		<input type='submit' value='Submit'>
	</form>



</body>
</html>




