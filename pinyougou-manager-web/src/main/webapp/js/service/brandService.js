//this is a brand service
app.service("brandService",function ($http) {

    //查询所有品牌
    this.findAll=function () {
        return $http.get('../brand/findAll.do');
    }

    //品牌分页查询
    this.findAll=function (page,rows) {
        return $http.get("../brand/findPage.do?page="+page+"&rows="+rows);
    }

    //选中商品
    this.selectOne=function (id) {
        return $http.get("../brand/findById.do?id="+id);
    }

    //增加商品
    this.save=function (entity) {
        return $http.post("../brand/add.do",entity);
    }

    //更新商品
    this.update=function (entity) {
        return $http.post("../brand/update.do",entity);
    }

    //删除商品ids
    this.dele=function (ids) {
        return $http.get("../brand/delect.do?ids="+ids);
    }

    //条件搜索
    this.search=function (page,rows,searchEntity) {
        return $http.post("../brand/searchPage.do?page="+page+"&rows="+rows,searchEntity);
    }

    //获得商品列表
    this.selectOptionList=function () {
        return $http.get("../brand/selectOptionList.do")
    }

})