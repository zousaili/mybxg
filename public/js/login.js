define(['jquery','cookie'],function($){
    //实现登录功能
 $('#loginId').click(function(){
        $.ajax({
            type:'post',
            // 解决跨域问题，除了jsonp,可以在配置的时候反向代理域名:/api
            url:'/api/login',
            data: $('#loginForm').serialize(),
            dataType:'json',
            success:function(data){

                //判断状态码
               if(data.code==200){
                 // console.log(data);
                //把登录的用户信息存储到cookie里面，方便页面之间进行数据共享
               // JSON.stringify(arr);//把登录成功之后返回的对象转化为cookie字符串
               //路径：在根目录下设置的cookie,在子目录下都能访问
                $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                //跳转到主页面
                location.href="/index/index";

               }
            }

        });
        //阻止submit的默认提交事件
        return false;
    });
});