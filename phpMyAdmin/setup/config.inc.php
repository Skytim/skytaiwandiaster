<?php  
$cfg['blowfish_secret'] = 'ba17c1ec07d65003';  // use here a value of your choice  
$i = 0;  
/* First server */  
$i++;  
/* Authentication type */  
$cfg['Servers'][$i]['auth_type'] = 'cookie';  
/* Server parameters */  
$cfg['Servers'][$i]['host'] = 'Database=skydiaster;Data Source=ap-cdbr-azure-east-c.cloudapp.net;User Id=b819ef23422f21;Password=604bf790';  // Replace with value from connection string  
$cfg['Servers'][$i]['connect_type'] = 'tcp';  
$cfg['Servers'][$i]['compress'] = false;  
$cfg['Servers'][$i]['extension'] = 'mysqli';  
$cfg['Servers'][$i]['AllowNoPassword'] = false;  
?>  