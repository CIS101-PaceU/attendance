<!DOCTYPE html>
<html>


<head>
	<title>Generated QR code</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
	<script type="text/javascript">
		var seconds = <?php echo $_POST['time'] ?>*60; //converting min to sec
      		function secondPassed() 
      		{
          		var minutes = Math.round((seconds - 30)/60),
              	remainingSeconds = seconds % 60;
              	if (remainingSeconds < 10) 
              	{
              		remainingSeconds = "0" + remainingSeconds;
          		}
          		document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
          		if (seconds == 0) 
          		{
              		document.getElementById('countdown').innerHTML = "Times Up!!";
              	} 
              	else 
              	{
              		seconds--;
          		}
      		}
      	var countdownTimer = setInterval('secondPassed()', 1000);

	</script>

</head>



<body>

	<div id="contents_qrpage">
			<div id="timer">
				<h1><time id="countdown"><?php echo $_POST['time']?>:00</time></h1>
			</div>
		<div id="image">
		<?php
			$input_text = $_POST['text'];
			$input_date = $_POST['date'];
			echo "<br> <br> <center> <img src='qr_img.php?d=$input_text' height='500' width='500'> </center>";
		?>
		</div>
	</div>

	<div id="nav">
		<img src="img_Pace_logo.png" alt="Pace Univercity Logo" style="width:80%"><br>
		<h2><b>CIS 101 Portal</b></h2>
  		<a href="index.php">Attendance</a><br>
	</div>	


	
</body>
</html>





