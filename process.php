<?php
/*$servername = "localhost";
$username = "root";
$password = "";
$dbname="test";

*/
$user=$_POST["user"];
$password=md5($_POST['password']);
$email=$_POST['email'];
$conn = mysqli_connect('localhost', 'root', '', 'Lab3');

$sql="INSERT INTO `Users`(`email`, `name`, `password`)
 VALUES ('$email','$user','$password')";
 $result=mysqli_query($conn,$sql);
 if(!$result){
  echo 'email is already regitered';
 }else{
  $na=0;
 $query="SELECT * FROM Department";
 $sql=mysqli_query($conn,$query);
 while($row1 = $sql->fetch_array())                           
 {
   $rows1[] = $row1;  
   $na++;                                   
 }
 for($x=0;$x<$na;$x++){
for($y=1;$y<3;$y++){
    echo $rows1[$x][$y].'+';
}
 }
}


?>