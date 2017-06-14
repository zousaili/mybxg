define(['jquery','template','until','bootstrap'],function($,template,until){
  // for(var key in location){
  //    console.log(location[key]);
  // }
//设置导航菜单选中
   until.setMenu(location.pathname);


    //加载 列表数据
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            //解析模板，填充数据
             var html=template('teacherInfoTpl',{list:data.result});
             $('#teacherInfo').html(html);
             //查看讲师功能
            previewTeacher();
           //启用和启用讲师
           enableOrDisableTeacher();
        }
    });

    //查看讲师功能
    function previewTeacher(){
         //渲染模板之后，绑定查看讲师信息的单击事件
             $('#teacherInfo').find('.preview').click(function(){
                //获取每个讲师的id
                     var tcId=$(this).closest('td').attr('data-id');
                     //根据id发送请求
                     $.ajax({
                        type:'get',
                        url:'/api/teacher/view',
                        data:{tc_id:tcId},
                        dataType:'json',
                        success:function(data){
                            //处理籍贯中间的竖线
                             // data.result.tc_hometown= data.result.tc_hometown.replace(/[|]/g,' ');
                               // data.result.tc_hometown= data.result.tc_hometown.replace(/\|/g,' ');
                                data.result.tc_hometown= data.result.tc_hometown.split('|').join(" ");
                              //显示弹窗
                              $('#teacherModal').modal();
                               var html=template('teacherModalInfoTpl',data.result);
                              $('#teacherModalInfo').html(html);

                        }
                     });
                     return false;
             });
    }
   //注销和启用讲师功能
  function enableOrDisableTeacher(){
      $('#teacherInfo').find('.edteacher').click(function(){
        var that=this;
         //获取每个讲师的id,
         var td=$(this).closest('td');
        var tcId=td.attr('data-id');
        var tcStatus=td.attr('data-status');
         $.ajax({
            type:'post',
            url:'/api/teacher/handle',
            data:{tc_id:tcId,tc_status:tcStatus},
            dataType:'json',
            success:function(data){
                 if(data.code==200){
                    // 执行成功之后，将状态值改为返回的状态
                       td.attr('data-status',data.result.tc_status);
                       if(data.result.tc_status==0){
                            $(that).text('注销');
                       }else{
                         $(that).text('启用');
                       }
                 }
            }

         });
      });
  }


});