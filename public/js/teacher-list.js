define(['jquery','template','bootstrap'],function($,template){
    //加载 列表数据
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            //解析模板，填充数据
             var html=template('teacherInfoTpl',{list:data.result});
             $('#teacherInfo').html(html);
             //渲染模板之后，绑定查看讲师信息的单击事件
             $('#teacherInfo').find('.preview').click(function(){
                //获取每个讲师的id
                     var tcId=$(this).closest('td').attr('data-id');
                     $.ajax({
                        type:'get',
                        url:'/api/teacher/view',
                        data:{tc_id:tcId},
                        dataType:'json',
                        success:function(data){
                              //显示弹窗
                              $('#teacherModal').modal();
                               var html=template('teacherModalInfoTpl',data.result);
                              $('#teacherModalInfo').html(html);

                        }
                     });
                     return false;
             });
        }
    });
});