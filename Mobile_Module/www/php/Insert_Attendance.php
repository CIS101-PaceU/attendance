 <?php
  //header("Access-Control-Allow-Origin: *");
  //header("Content-Type: application/json; charset=UTF-8");
  $conn = new mysqli("localhost", "id3145295_mysql", "mysql","id3145295_mysql");
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  $eventid = $request->eventId;
  $userid =  $request->userid;
  $deviceid = $request->uuid;
  $longitude = $request->longitude;
  $latitude = $request->latitude;
  //$eventid = 1;
  //$userid = 1;
  //$deviceid = '4F7B3B2F-6263-4D55-885E-86A5AE870575';
  $attendance_mark = 'P';
  $timestamp = date("m-d-y h:i:sa");
  //$longitude = -74.07195445724912;
  //$latitude  = 40.730033293261414;
  //$data = array();
  $query = "select max(attendance_id) attendance_id from tb_attendance";
  $result=$conn->query($query);
  $numrow1=$result->num_rows;
 // echo "numrow";
  if($numrow1 == 1)
   {
  	while($numrow1 = $result->fetch_assoc())
    {
  	 if ($numrow1['attendance_id'] == null) 
      { 
        $attendance_id = 1;
        //echo "$attendance_id";     
      }
     else
      {
       $attendance_id = $numrow1['attendance_id'] + 1;
      // echo "$attendance_id";
      }
    }
    $sel = "INSERT INTO `tb_attendance`(`attendance_id`, `event_id`, `user_id`, `mac_address`, `attendance_remarks`, `timestamp`,`longitude`,`latitude`) VALUES ($attendance_id,$eventid,$userid,'$deviceid','$attendance_mark','$timestamp',$longitude,$latitude)";
  		
  	$result=$conn->query($sel);
  		//$retval = mysql_query( $sel, $conn );
  	//	echo $sel;
	    if(! $result ) 
		{
		 echo "0";
        }
  		else
  		{
  		 echo "1";
  		}
   }
   else 
   {
    echo "0";
   }     
 ?>