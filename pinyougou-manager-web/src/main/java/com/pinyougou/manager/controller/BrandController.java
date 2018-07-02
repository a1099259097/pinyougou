package com.pinyougou.manager.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.entity.PageResult;
import com.pinyougou.entity.Result;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;


@RestController
@RequestMapping("/brand")
public class BrandController {

    @Reference
    private BrandService brandService;

    @RequestMapping("/findAll")
    public List<TbBrand> findAll(){
        return brandService.findAll();
    }

    @RequestMapping("/findPage")
    public PageResult findPage(int page, int rows) {

        return brandService.findPage(page, rows);
    }

    @RequestMapping("/add")
    public Result add(@RequestBody TbBrand brand){
        try {
            brandService.add(brand);
            return new Result(true,"添加成功");
        }catch (Exception e){
            e.printStackTrace();
            return new Result(false,"添加失败");
        }
    }

    @RequestMapping("/findById")
    public TbBrand findByid(long id) {
        return brandService.findByid(id);
    }

    @RequestMapping("/update")
    public Result update(@RequestBody TbBrand brand) {
        try {
            brandService.update(brand);
            return new Result(true,"update successful");
        }catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"update fail");
        }
    }

    @RequestMapping("/delect")
    public Result delectByIds(long[] ids){
        try {
            brandService.delectByIds(ids);
            return new Result(true,"delect successful");
        }catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"delect fail");
        }
    }

    @RequestMapping("/searchPage")
    public PageResult findPage(int page, int rows, @RequestBody TbBrand brand) {
        return brandService.searchPage(page, rows, brand);
    }
}
