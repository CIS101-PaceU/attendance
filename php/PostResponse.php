<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "id3145295_mysql", "mysql","id3145295_mysql");
      $postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		$username = $request->username;
		$password = $request->password;
        $data = array();
		if ($password != "" && $username != "") {
		    $sel="SELECT userid FROM tb_users WHERE username='$username' AND password='$password'";
		    $result=$conn->query($sel);
		    $numrow=$result->num_rows;
		    if($numrow == 1){
                 while($numrow = $result->fetch_assoc()){
                  $data[] = array(
                  
                   //"user_id" =>   $numrow['userid']
                   $numrow['userid']
                    //         "name" => $numrow['username'],
                      //       "token" => $numrow['password'],
                        //     "user id" => $numrow['userid'],
                              );
                 }
                            echo json_encode($data);
                          // echo "1";
                             }
                           
		    
		else {
			//header('HTTP/1.1 401 Unauthorized', true, 401);
			echo "0";
		}
		}
	else {
		//echo "Not called properly with username parameter!";
		echo "0";
	}
   
?>