/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Greek (Old Version) Translations by Vagelis
 * 03-June-2007
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Öüñôùóç...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} åðéëåãìÝíç(åò) ãñáììÞ(Ýò)";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Êëåßóôå áõôÞ ôçí êáñôÝëá";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Ç ôéìÞ óôï ðåäßï äåí åßíáé Ýãêõñç";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Öüñôùóç...";
}

Date.monthNames = [
   "ÉáíïõÜñéïò",
   "ÖåâñïõÜñéïò",
   "ÌÜñôéïò",
   "Áðñßëéïò",
   "ÌÜéïò",
   "Éïýíéïò",
   "Éïýëéïò",
   "Áýãïõóôïò",
   "ÓåðôÝìâñéïò",
   "Ïêôþâñéïò",
   "ÍïÝìâñéïò",
   "ÄåêÝìâñéïò"
];

Date.dayNames = [
   "ÊõñéáêÞ",
   "ÄåõôÝñá",
   "Ôñßôç",
   "ÔåôÜñôç",
   "ÐÝìðôç",
   "ÐáñáóêåõÞ",
   "ÓÜââáôï"
];

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "ÅíôÜîåé",
      cancel : "Áêýñùóç",
      yes    : "Íáé",
      no     : "¼÷é"
   };
}

if(Ext2.util.Format){
   Ext2.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "ì/ç/Å");
   };
}

if(Ext2.DatePicker){
   Ext2.apply(Ext2.DatePicker.prototype, {
      todayText         : "ÓÞìåñá",
      minText           : "Ç çìåñïìçíßá áõôÞ åßíáé ðñéí ôçí ìéêñüôåñç çìåñïìçíßá",
      maxText           : "Ç çìåñïìçíßá áõôÞ åßíáé ìåôÜ ôçí ìåãáëýôåñç çìåñïìçíßá",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Åðüìåíïò ÌÞíáò (Control+Right)',
      prevText          : 'Ðñïçãïýìåíïò ÌÞíáò (Control+Left)',
      monthYearText     : 'ÅðéëÝîôå ÌÞíá (Control+Up/Down ãéá ìåôáêßíçóç óôá Ýôç)',
      todayTip          : "{0} (Spacebar)",
      format            : "ì/ç/Å"
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Óåëßäá",
      afterPageText  : "áðü {0}",
      firstText      : "Ðñþôç óåëßäá",
      prevText       : "Ðñïçãïýìåíç óåëßäá",
      nextText       : "Åðüìåíç óåëßäá",
      lastText       : "Ôåëåõôáßá óåëßäá",
      refreshText    : "ÁíáíÝùóç",
      displayMsg     : "ÅìöÜíéóç {0} - {1} áðü {2}",
      emptyMsg       : 'Äåí âñÝèçêáí åããñáöÝò ãéá åìöÜíéóç'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "Ôï åëÜ÷éóôï ìÝãåèïò ãéá áõôü ôï ðåäßï åßíáé {0}",
      maxLengthText : "Ôï ìÝãéóôï ìÝãåèïò ãéá áõôü ôï ðåäßï åßíáé {0}",
      blankText     : "Ôï ðåäßï áõôü åßíáé õðï÷ñåùôïêü",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "Ç åëÜ÷éóôç ôéìÞ ãéá áõôü ôï ðåäßï åßíáé {0}",
      maxText : "Ç ìÝãéóôç ôéìÞ ãéá áõôü ôï ðåäßï åßíáé {0}",
      nanText : "{0} äåí åßíáé Ýãêõñïò áñéèìüò"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "ÁðåíåñãïðïéçìÝíï",
      disabledDatesText : "ÁðåíåñãïðïéçìÝíï",
      minText           : "Ç çìåñïìçíßá ó' áõôü ôï ðåäßï ðñÝðåé íá åßíáé ìåôÜ áðü {0}",
      maxText           : "Ç çìåñïìçíßá ó' áõôü ôï ðåäßï ðñÝðåé íá åßíáé ðñéí áðü {0}",
      invalidText       : "{0} äåí åßíáé Ýãêõñç çìåñïìçíßá - ðñÝðåé íá åßíáé ôçò ìïñöÞò {1}",
      format            : "ì/ç/Å"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Öüñôùóç...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'Áõôü ôï ðåäßï ðñÝðåé íá åßíáé e-mail address ôçò ìïñöÞò "user@domain.com"',
      urlText      : 'Áõôü ôï ðåäßï ðñÝðåé íá åßíáé ìéá äéåýèõíóç URL ôçò ìïñöÞò "http:/'+'/www.domain.com"',
      alphaText    : 'Áõôü ôï ðåäßï ðñÝðåé íá ðåñéÝ÷åé ãñÜììáôá êáé _',
      alphanumText : 'Áõôü ôï ðåäßï ðñÝðåé íá ðåñéÝ÷åé ãñÜììáôá, áñéèìïýò êáé _'
   });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Áýîïõóá Ôáîéíüìçóç",
      sortDescText : "Öèßíïõóá Ôáîéíüìçóç",
      lockText     : "Êëåßäùìá óôÞëçò",
      unlockText   : "Îåêëåßäùìá óôÞëçò",
      columnsText  : "ÓôÞëåò"
   });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "¼íïìá",
      valueText  : "ÔéìÞ",
      dateFormat : "ì/ç/Å"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Óýñåôå ãéá áëëáãÞ ìåãÝèïõò.",
      collapsibleSplitTip : "Óýñåôå ãéá áëëáãÞ ìåãÝèïõò. Double click ãéá áðüêñõøç."
   });
}
