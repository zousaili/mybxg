

<?php 
//后端路由


//路径
$path='index';
//文件名称
$filename='index';
//判断数组$_SERVER里面有没有PATH-INFO属性
if(array_key_exists('PATH_INFO',$_SERVER)){
  //获取url中的路径(域名之后的叫路径)
    //$_AERVER是一个全局变量，来获取php当中的所有信息，PATH_INFO是其中的一个信息
    $url=$_SERVER['PATH_INFO'];// /index/login
    //substr截取字符串
    $str=substr( $url,1);// index/login
    //根据分割字符串，结果就是数组
     $pathinfo = explode('/', $str);
     if(count( $pathinfo)==2){
        //两层路径teacher/add
         $path= $pathinfo[0];
         $filename=$pathinfo[1];

     }else{
        //一层路径/login
          $filename='login';
     }
 }
//在当前页面嵌入另一个页面
    include('/view/'.$path.'/'.$filename.'.html');


?>