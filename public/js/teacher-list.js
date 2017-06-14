define(['jquery','template'],function($,template){
    //加载 列表数据
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            //解析模板，填充数据
             var html=template('teacherInfoTpl',{list:data.result});
             $('#teacherInfo').html(html);
        }
    });
});