app.controller("baseController",function($scope){

    //选中商品ids
    $scope.selectIds = [];

    //select brand ids
    $scope.updateSelect=function ($event,id) {
        if ($event.target.checked) {
            $scope.selectIds.push(id);
        } else {
            var index = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(index,1);
        }
    }

    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };

    //加载页面。
    $scope.reloadList=function(){
        $scope.selectIds = [];
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }

    //reverse
    $scope.jsonToString=function (jsonString,key) {
        var json = JSON.parse(jsonString);
        var value = "";
        for (i = 0;i < json.length; i++){
            if (i > 0){
                value +=",";
            }
            value += json[i][key];
        }
        return value;
    }



})