package com.pinyougou.sellergoods.service;

import entity.PageResult;
import com.pinyougou.pojo.TbBrand;


import java.util.List;
import java.util.Map;

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

    List<Map> selectOptionList();





}
