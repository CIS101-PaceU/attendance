<?php
echo "Scan this code";
print_r($_POST);
$input_text = $_POST['text'];
$input_date = $_POST['date'];

echo $input_text;
echo "<br>";
echo "<center> <img src='qr_img.php?d=$input_text'&s=8&e=H/ height='600' width='600'> </center>";
?>






