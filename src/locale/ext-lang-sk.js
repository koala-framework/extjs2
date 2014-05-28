/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 */
 
 /*  Slovak Translation by Michal Thomka
  *  14 April 2007
  */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Nahrávam...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} označených riadkov";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Zavrieť túto záložku";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Hodnota v tomto poli je nesprávna";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Nahrávam...";
}

Date.monthNames = [
   "Január",
   "Február",
   "Marec",
   "Apríl",
   "Máj",
   "Jún",
   "Júl",
   "August",
   "September",
   "Október",
   "November",
   "December"
];

Date.dayNames = [
   "Nedeľa",
   "Pondelok",
   "Utorok",
   "Streda",
   "Štvrtok",
   "Piatok",
   "Sobota"
];

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Zrušiť",
      yes    : "Áno",
      no     : "Nie"
   };
}

if(Ext2.util.Format){
   Ext2.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "d.m.Y");
   };
}


if(Ext2.DatePicker){
   Ext2.apply(Ext2.DatePicker.prototype, {
      todayText         : "Dnes",
      minText           : "Tento dátum je menší ako minimálny možný dátum",
      maxText           : "Tento dátum je väčší ako maximálny možný dátum",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.monthNames,
      dayNames          : Date.dayNames,
      nextText          : 'Ďalší Mesiac (Control+Doprava)',
      prevText          : 'Predch. Mesiac (Control+Doľava)',
      monthYearText     : 'Vyberte Mesiac (Control+Hore/Dole pre posun rokov)',
      todayTip          : "{0} (Medzerník)",
      format            : "d.m.Y"
   });
}


if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Strana",
      afterPageText  : "z {0}",
      firstText      : "Prvá Strana",
      prevText       : "Predch. Strana",
      nextText       : "Ďalšia Strana",
      lastText       : "Posledná strana",
      refreshText    : "Obnoviť",
      displayMsg     : "Zobrazujem {0} - {1} z {2}",
      emptyMsg       : 'iadne dáta'
   });
}


if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "Minimálna dĺžka pre toto pole je {0}",
      maxLengthText : "Maximálna dĺžka pre toto pole je {0}",
      blankText     : "Toto pole je povinné",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "Minimálna hodnota pre toto pole je {0}",
      maxText : "Maximálna hodnota pre toto pole je {0}",
      nanText : "{0} je nesprávne číslo"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Zablokované",
      disabledDatesText : "Zablokované",
      minText           : "Dátum v tomto poli musí byť až po {0}",
      maxText           : "Dátum v tomto poli musí byť pred {0}",
      invalidText       : "{0} nie je správny dátum - musí byť vo formáte {1}",
      format            : "d.m.Y"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Nahrávam...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'Toto pole musí byť e-mailová adresa vo formáte "user@domain.com"',
      urlText      : 'Toto pole musí byť URL vo formáte "http:/'+'/www.domain.com"',
      alphaText    : 'Toto pole može obsahovať iba písmená a znak _',
      alphanumText : 'Toto pole može obsahovať iba písmená, čísla a znak _'
   });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Zoradiť vzostupne",
      sortDescText : "Zoradiť zostupne",
      lockText     : "Zamknúť stľpec",
      unlockText   : "Odomknúť stľpec",
      columnsText  : "Stľpce"
   });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Názov",
      valueText  : "Hodnota",
      dateFormat : "d.m.Y"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Potiahnite pre zmenu rozmeru",
      collapsibleSplitTip : "Potiahnite pre zmenu rozmeru. Dvojklikom schováte."
   });
}
