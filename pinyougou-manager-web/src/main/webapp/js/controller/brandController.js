//定义控制器
app.controller("brandController",function($scope,$controller,brandService){

    //extends father
    $controller("baseController",{$scope:$scope});

    //查询所有品牌
    $scope.findAll=function(){
        brandService.findAll().success(
            function(response){
                $scope.list = response;
                alert(response);
            }
        )
    }

    //品牌分页查询
    $scope.findPage = function (page,rows) {
        brandService.findPage(page,rows).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;
            }
        )
    }

    //增加商品 or 更新商品
    $scope.save=function () {
        var object;
        if ($scope.entity.id == null) {
            object = brandService.save($scope.entity);
        } else {
            object = brandService.update($scope.entity);
        }
        object.success(
            function (responst) {
                if (responst.success){
                    $scope.reloadList();
                } else {
                    alert(responst.message);
                }
            }
        )
    }

    //查询商品
    $scope.selectOne=function (id) {
        brandService.selectOne(id).success(
            function (response) {
                $scope.entity=response;
            }
        )
    }

    //删除商品ids
    $scope.dele=function () {
        brandService.dele($scope.selectIds).success(
            function (responst) {
                if (responst.success){
                    $scope.reloadList();
                } else {
                    alert(responst.success)
                    alert(responst.success == true)
                    alert(responst.message);
                }
            }
        )
    }

    $scope.searchEntity = {};
    //条件搜索
    $scope.search=function (page,rows) {
        brandService.search(page,rows,$scope.searchEntity).success(
            function (responst) {
                $scope.list = responst.rows;
                $scope.paginationConf.totalItems = responst.total;
            }
        )
    }
})