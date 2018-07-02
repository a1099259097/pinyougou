package com.pinyougou.entity;

import com.pinyougou.pojo.TbBrand;

import java.io.Serializable;
import java.util.List;

public class PageResult implements Serializable {
    private long total;
    private List<TbBrand> rows;

    public PageResult(long total, List<TbBrand> rows) {
        this.total = total;
        this.rows = rows;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<TbBrand> getRows() {
        return rows;
    }

    public void setRows(List<TbBrand> rows) {
        this.rows = rows;
    }
}
