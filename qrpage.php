<!DOCTYPE html>
<html>


<head>
	<title>Generated QR code</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
  	<script language="javascript" type="text/javascript" src="libraries/p5.js"></script>
 	<script language="javascript" src="libraries/p5.dom.js"></script>
  	<script language="javascript" src="libraries/p5.sound.js"></script>
  	<script language="javascript" type="text/javascript" src="sketch.js"></script>
	<script type="text/javascript">
	
	var counter = 0;
	function setup()
	{
		noCanvas();

		var timer = select('#timer');
		timer.html('counter');

		fucntion timeIT()
		{
			counter++;
			timer.html(counter);
		}

		setInterval(timeIt, 1000);

	}



	</script>
</head>


<body>
	<div id="contents_qrpage">
	<h1 id="timer">00:00</h1><br><br>
		<?php
			echo "<center> <img src='qr_img.php?d=$input_text height='500' width='500'> </center>";
		?>
	</div>

	<div id="nav">
		<img src="img_Pace_logo.png" alt="Pace Univercity Logo" style="width:80%"><br>
		<h2><b>CIS 101 Portal</b></h2>
  		<a href="index.php">Attendance</a><br>
	</div>	


	
</body>
</html>





