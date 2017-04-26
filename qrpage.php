<?php
echo "Scan this code";
print_r($_POST);
$input_text = $_POST['text'];
$input_date = $_POST['date'];

echo $input_text;
echo "<br>";
echo "<img src='qr_img.php?d=$input_text'/>";
?>






