<template>
    <el-container style="height: 600px; border: 0px solid #eee;">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3','4']"> <!--菜单栏1,3,4默认为打开状态-->
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>基本功能</template>
                <el-menu-item-group>
                <el-menu-item index="1-1">不满意度回访</el-menu-item>
                <el-submenu index="1-2">
                    <template slot="title">电话记录</template>
                    <el-menu-item index="1-2-1">投诉列表</el-menu-item>
                    <el-menu-item index="1-2-2">投诉请求</el-menu-item>
                </el-submenu>
                </el-menu-item-group>
            </el-submenu>
                
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-edit"></i>知识库</template>
                <el-menu-item-group>
                <el-menu-item index="2-1">最新知识</el-menu-item>
                <el-menu-item index="2-2">全文检索</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-service"></i>录音质检</template>
                <el-menu-item-group>
                <el-menu-item index="3-1">坐席质检明细</el-menu-item>
                <el-menu-item index="3-2">录音查询</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-setting"></i>培训考试</template>
                <el-menu-item-group>
                <el-menu-item index="4-1">培训计划</el-menu-item>
                <el-menu-item index="4-2">学习评定</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-aside>
        
        <el-container>
            <!--<el-header style="text-align: right; font-size: 12px; margin-left:0">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
            </el-header>
            -->
            <el-main>
            <el-table :data="tableData">
                <el-table-column prop="date" label="日期" width="140">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
            
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    left:0
  }
  
  .el-aside {
    color: #333;
  }

</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>