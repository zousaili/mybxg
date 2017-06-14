
requirejs.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery.min',
        bootstrap:'bootstrap/js/bootstrap.min',
        cookie:'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        //通用的js文件
        common:'../js/common',
        login:'../js/login',
        tealist:'../js/teacher-list'


    },
    shim:{
          bootstrap:{
            deps:['jquery']
          }
    }
});