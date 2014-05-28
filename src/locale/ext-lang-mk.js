/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * Macedonia translation
 * By PetarD petar.dimitrijevic@vorteksed.com.mk (utf8 encoding)
 * 23 April 2007
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Вчитувам...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} избрани редици";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Затвори tab";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Вредноста во ова поле е невалидна";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Вчитувам...";
}

Date.monthNames = [
   "Јануари",
   "Февруари",
   "Март",
   "Април",
   "Мај",
   "Јуни",
   "Јули",
   "Август",
   "Септември",
   "Октомври",
   "Ноември",
   "Декември"
];

Date.dayNames = [
   "Недела",
   "Понеделник",
   "Вторник",
   "Среда",
   "Четврток",
   "Петок",
   "Сабота"
];

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "Потврди",
      cancel : "Поништи",
      yes    : "Да",
      no     : "Не"
   };
}

if(Ext2.util.Format){
   Ext2.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "d.m.y");
   };
}

if(Ext2.DatePicker){
   Ext2.apply(Ext2.DatePicker.prototype, {
      todayText         : "Денеска",
      minText           : "Овој датум е пред најмалиот датум",
      maxText           : "Овој датум е пред најголемиот датум",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Следен месец (Control+Стрелка десно)',
      prevText          : 'Претходен месец (Control+Стрелка лево)',
      monthYearText     : 'Изберете месец (Control+Стрелка горе/Стрелка десно за менување година)',
      todayTip          : "{0} (Spacebar)",
      format            : "d.m.y"
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Страница",
      afterPageText  : "од {0}",
      firstText      : "Прва Страница",
      prevText       : "Претходна Страница",
      nextText       : "Следна Страница",
      lastText       : "Последна Страница",
      refreshText    : "Освежи",
      displayMsg     : "Прикажувам {0} - {1} од {2}",
      emptyMsg       : 'Нема податоци за приказ'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "Минималната должина за ова поле е {0}",
      maxLengthText : "Максималната должина за ова поле е {0}",
      blankText     : "Податоците во ова поле се потребни",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "Минималната вредност за ова поле е {0}",
      maxText : "Максималната вредност за ова поле е {0}",
      nanText : "{0} не е валиден број"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Неактивно",
      disabledDatesText : "Неактивно",
      minText           : "Датумот во ова поле мора да биде пред {0}",
      maxText           : "Датумот во ова поле мора да биде по {0}",
      invalidText       : "{0} не е валиден датум - мора да биде во формат {1}",
      format            : "d.m.y"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Вчитувам...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'Ова поле треба да биде e-mail адреса во формат "user@domain.com"',
      urlText      : 'Ова поле треба да биде URL во формат "http:/'+'/www.domain.com"',
      alphaText    : 'Ова поле треба да содржи само букви и _',
      alphanumText : 'Ова поле треба да содржи само букви, бројки и _'
   });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Сортирај Растечки",
      sortDescText : "Сортирај Опаѓачки",
      lockText     : "Заклучи Колона",
      unlockText   : "Отклучи колона",
      columnsText  : "Колони"
   });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Име",
      valueText  : "Вредност",
      dateFormat : "m.d.Y"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Повлечете за менување на големината.",
      collapsibleSplitTip : "Повлечете за менување на големината. Дупли клик за криење."
   });
}