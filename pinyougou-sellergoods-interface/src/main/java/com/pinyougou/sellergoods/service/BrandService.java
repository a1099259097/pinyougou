package com.pinyougou.sellergoods.service;

import com.pinyougou.entity.PageResult;
import com.pinyougou.pojo.TbBrand;


import java.util.List;

public interface BrandService {

    //find all brand
    List<TbBrand> findAll();

    //find brand page
    PageResult findPage(int pageNum, int pageSize);

    //save brand
    void add(TbBrand brand);

    //select brand by Id
    TbBrand findByid(long id);

    //update brand by brand
    void update(TbBrand brand);

    //delect By ids
    void delectByIds(long[] ids);

    //searchPage by example
    PageResult searchPage(int pageNum, int pageSize,TbBrand brand);






}
