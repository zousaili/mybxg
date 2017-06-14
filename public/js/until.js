define(['jquery'],function($){
    return {
        setMenu:function(pathname){
                //设置导航菜单选中
                 //获取请求路径
              $('.aside .navs a').removeClass('active');
              $('.aside .navs a[href="'+pathname+'"]').addClass('active');
        }
    }
});