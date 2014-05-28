/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * Farsi (Persian) translation
 * By Mohaqa
 * 03-10-2007, 06:23 PM
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">در حال بارگذاری ...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} رکورد انتخاب شده";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "بستن";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "مقدار فیلد صحیح نیست";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "در حال بارگذاری ...";
}

Date.monthNames = [
   "ژانویه",
   "فوریه",
   "مارس",
   "آپریل",
   "می",
   "ژوئن",
   "جولای",
   "آگوست",
   "سپتامبر",
   "اکتبر",
   "نوامبر",
   "دسامبر"
];

Date.monthNumbers = {
  Jan : 0,
  Feb : 1,
  Mar : 2,
  Apr : 3,
  May : 4,
  Jun : 5,
  Jul : 6,
  Aug : 7,
  Sep : 8,
  Oct : 9,
  Nov : 10,
  Dec : 11
};

Date.dayNames = [
   "یکشنبه",
   "دوشنبه",
   "سه شنبه",
   "چهارشنبه",
   "پنجشنبه",
   "جمعه",
   "شنبه"
];

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "تایید",
      cancel : "بازگشت",
      yes    : "بله",
      no     : "خیر"
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
    todayText         : "امروز",
    minText           : "این تاریخ قبل از محدوده مجاز است",
    maxText           : "این تاریخ پس از محدوده مجاز است",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'ماه بعد (Control + Right)',
    prevText          : 'ماه قبل (Control+Left)',
    monthYearText     : 'یک ماه را انتخاب کنید (Control+Up/Down برای انتقال در سال)',
    todayTip          : "{0} (Spacebar)",
    format            : "y/m/d",
    okText            : "&#160;OK&#160;",
    cancelText        : "Cancel",
    startDay          : 0
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "صفحه",
      afterPageText  : "از {0}",
      firstText      : "صفحه اول",
      prevText       : "صفحه قبل",
      nextText       : "صفحه بعد",
      lastText       : "صفحه آخر",
      refreshText    : "بازخوانی",
      displayMsg     : "نمایش {0} - {1} of {2}",
      emptyMsg       : 'داده ای برای نمایش وجود ندارد'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "حداقل طول این فیلد برابر است با {0}",
      maxLengthText : "حداکثر طول این فیلد برابر است با {0}",
      blankText     : "این فیلد باید مقداری داشته باشد",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "حداقل مقدار این فیلد برابر است با {0}",
      maxText : "حداکثر مقدار این فیلد برابر است با {0}",
      nanText : "{0} یک عدد نیست"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "غیرفعال",
      disabledDatesText : "غیرفعال",
      minText           : "تاریخ باید پس از {0} باشد",
      maxText           : "تاریخ باید پس از {0} باشد",
      invalidText       : "{0} تاریخ صحیحی نیست - فرمت صحیح {1}",
      format            : "y/m/d"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "در حال بارگذاری ...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'مقدار این فیلد باید یک ایمیل با این فرمت باشد "user@domain.com"',
      urlText      : 'مقدار این آدرس باید یک آدرس سایت با این فرمت باشد "http:/'+'/www.domain.com"',
      alphaText    : 'مقدار این فیلد باید فقط از حروف الفبا و _ تشکیل شده باشد ',
      alphanumText : 'مقدار این فیلد باید فقط از حروف الفبا، اعداد و _ تشکیل شده باشد'
   });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'لطفا آدرس لینک را وارد کنید:',
    buttonTips : {
      bold : {
        title: 'تیره (Ctrl+B)',
        text: 'متن انتخاب شده را تیره می کند.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'ایتالیک (Ctrl+I)',
        text: 'متن انتخاب شده را ایتالیک می کند.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'زیرخط (Ctrl+U)',
        text: 'زیر هر نوشته یک خط نمایش می دهد.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'افزایش اندازه',
        text: 'اندازه فونت را افزایش می دهد.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'کاهش اندازه',
        text: 'اندازه متن را کاهش می دهد.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'رنگ زمینه متن',
        text: 'برای تغییر رنگ زمینه متن استفاده می شود.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'رنگ قلم',
        text: 'رنگ  قلم متن را تغییر می دهد.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'چیدن متن از سمت چپ',
        text: 'متن از سمت چپ چیده شده می شود.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'متن در وسط ',
        text: 'نمایش متن در قسمت وسط صفحه و رعابت سمت چپ و راست.',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'چیدن متن از سمت راست',
        text: 'متن از سمت راست پیده خواهد شد.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'لیست همراه با علامت',
        text: 'یک لیست جدید ایجاد می کند.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'لیست عددی',
        text: 'یک لیست عددی ایجاد می کند. ',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'لینک',
        text: 'متن انتخاب شده را به لینک تبدیل کنید.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'ویرایش سورس',
        text: 'رفتن به حالت ویرایش سورس.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "مرتب سازی افزایشی",
      sortDescText : "مرتب سازی کاهشی",
      lockText     : "قفل ستون ها",
      unlockText   : "بازکردن ستون ها",
      columnsText  : "ستون ها"
   });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "نام",
      valueText  : "مقدار",
      dateFormat : "Y/m/d"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "درگ برای تغییر اندازه.",
      collapsibleSplitTip : "برای تغییر اندازه درگ کنید."
   });
}
