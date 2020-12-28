<?php

$conn = mysqli_connect('localhost', 'root', '', 'Lab3');
$email=$_POST['email'];
//echo $email;
$password=md5($_POST['password']);
$query="SELECT * FROM Users WHERE email='$email'and password='$password'";
$sql=mysqli_query($conn,$query);
$va=0;
while($row = $sql->fetch_array())                           
    {
      $rows[] = $row;                                   
        $va++;
    }
    if($va<1){
        echo $va;
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
    echo $rows[0][2];
//echo $rows[0]['name'];
?>
