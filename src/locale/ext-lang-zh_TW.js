/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * Traditional Chinese translation
 * By hata1234
 * 09 April 2007
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">讀取中...</div>';

if(Ext2.View){
    Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
    Ext2.grid.GridPanel.prototype.ddText = "選擇了 {0} 行";
}

if(Ext2.TabPanelItem){
    Ext2.TabPanelItem.prototype.closeText = "關閉此標籤";
}

if(Ext2.form.Field){
    Ext2.form.Field.prototype.invalidText = "數值不符合欄位規定";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "讀取中...";
}

Date.monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
];

Date.dayNames = [
    "日",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六"
];

if(Ext2.MessageBox){
    Ext2.MessageBox.buttonText = {
        ok : "確定",
        cancel : "取消",
        yes : "是",
        no : "否"
    };
}

if(Ext2.util.Format){
    Ext2.util.Format.date = function(v, format){
       if(!v) return "";
       if(!(v instanceof Date)) v = new Date(Date.parse(v));
       return v.dateFormat(format || "Y/m/d");
    };
}

if(Ext2.DatePicker){
    Ext2.apply(Ext2.DatePicker.prototype, {
       todayText         : "今天",
       minText           : "日期必須大於最小容許日期",
       maxText           : "日期必須小於最大容許日期",
       disabledDaysText  : "",
       disabledDatesText : "",
       monthNames        : Date.monthNames,
       dayNames          : Date.dayNames,
       nextText          : "下個月 (Ctrl+右方向鍵)",
       prevText          : "上個月 (Ctrl+左方向鍵)",
       monthYearText     : "選擇月份 (Ctrl+上/下方向鍵選擇年份)",
       todayTip          : "{0} (空白鍵)",
       format            : "y/m/d",
       okText            : "确定",
       cancelText        : "取消"
    });
}

if(Ext2.PagingToolbar){
    Ext2.apply(Ext2.PagingToolbar.prototype, {
       beforePageText : "第",
       afterPageText  : "頁，共{0}頁",
       firstText      : "第一頁",
       prevText       : "上一頁",
       nextText       : "下一頁",
       lastText       : "最後頁",
       refreshText    : "重新整理",
       displayMsg     : "顯示{0} - {1}筆,共{2}筆",
       emptyMsg       : '沒有任何資料'
    });
}

if(Ext2.form.TextField){
    Ext2.apply(Ext2.form.TextField.prototype, {
       minLengthText : "此欄位最少要輸入 {0} 個字",
       maxLengthText : "此欄位最多輸入 {0} 個字",
       blankText     : "此欄位為必填",
       regexText     : "",
       emptyText     : null
    });
}

if(Ext2.form.NumberField){
    Ext2.apply(Ext2.form.NumberField.prototype, {
       minText : "此欄位之數值必須大於 {0}",
       maxText : "此欄位之數值必須小於 {0}",
       nanText : "{0} 不是合法的數字"
    });
}

if(Ext2.form.DateField){
    Ext2.apply(Ext2.form.DateField.prototype, {
       disabledDaysText  : "無法使用",
       disabledDatesText : "無法使用",
       minText           : "此欄位之日期必須在 {0} 之後",
       maxText           : "此欄位之日期必須在 {0} 之前",
       invalidText       : "{0} 不是正確的日期格式 - 必須像是 「 {1} 」 這樣的格式",
       format            : "Y/m/d"
    });
}

if(Ext2.form.ComboBox){
    Ext2.apply(Ext2.form.ComboBox.prototype, {
       loadingText       : "讀取中 ...",
       valueNotFoundText : undefined
    });
}

if(Ext2.form.VTypes){
    Ext2.apply(Ext2.form.VTypes, {
       emailText    : '此欄位必須輸入像 "user@domain.com" 之E-Mail格式',
       urlText      : '此欄位必須輸入像 "http:/'+'/www.domain.com" 之網址格式',
       alphaText    : '此欄位僅能輸入半形英文字母及底線( _ )符號',
       alphanumText : '此欄位僅能輸入半形英文字母、數字及底線( _ )符號'
    });
}

if(Ext2.grid.GridView){
    Ext2.apply(Ext2.grid.GridView.prototype, {
       sortAscText  : "正向排序",
       sortDescText : "反向排序",
       lockText     : "鎖定欄位",
       unlockText   : "解開欄位鎖定",
       columnsText  : "欄位"
    });
}

if(Ext2.grid.PropertyColumnModel){
    Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
       nameText   : "名稱",
       valueText  : "數值",
       dateFormat : "Y/m/d"
    });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
    Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
       splitTip            : "拖曳縮放大小.",
       collapsibleSplitTip : "拖曳縮放大小. 滑鼠雙擊隱藏."
    });
}
