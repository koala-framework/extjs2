/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Slovenian translation by Matjaž (UTF-8 encoding)
 * 25 April 2007
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Nalagam...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} izbranih vrstic";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Zapri zavihek";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Neveljavna vrednost";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Nalagam...";
}

Date.monthNames = [
   "Januar",
   "Februar",
   "Marec",
   "April",
   "Maj",
   "Junij",
   "Julij",
   "Avgust",
   "September",
   "Oktober",
   "November",
   "December"
];

Date.dayNames = [
   "Nedelja",
   "Ponedeljek",
   "Torek",
   "Sreda",
   "Četrtek",
   "Petek",
   "Sobota"
];

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "V redu",
      cancel : "Prekliči",
      yes    : "Da",
      no     : "Ne"
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
      todayText         : "Danes",
      minText           : "Navedeni datum je pred spodnjim datumom",
      maxText           : "Navedeni datum je za zgornjim datumom",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Naslednji mesec (Control+Desno)',
      prevText          : 'Prejšnji mesec (Control+Levo)',
      monthYearText     : 'Izberite mesec (Control+Gor/Dol za premik let)',
      todayTip          : "{0} (Preslednica)",
      format            : "d.m.y",
      startDay          : 1
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Stran",
      afterPageText  : "od {0}",
      firstText      : "Prva stran",
      prevText       : "Prejšnja stran",
      nextText       : "Naslednja stran",
      lastText       : "Zadnja stran",
      refreshText    : "Osveži",
      displayMsg     : "Prikazujem {0} - {1} od {2}",
      emptyMsg       : 'Ni podatkov za prikaz'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "Minimalna dolžina tega polja je {0}",
      maxLengthText : "Maksimalna dolžina tega polja je {0}",
      blankText     : "To polje je obvezno",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "Minimalna vrednost tega polja je {0}",
      maxText : "Maksimalna vrednost tega polja je {0}",
      nanText : "{0} ni veljavna številka"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Onemogočen",
      disabledDatesText : "Onemogočen",
      minText           : "Datum mora biti po {0}",
      maxText           : "Datum mora biti pred {0}",
      invalidText       : "{0} ni veljaven datum - mora biti v tem formatu {1}",
      format            : "d.m.y"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Nalagam...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'To polje je e-mail naslov formata "ime@domena.si"',
      urlText      : 'To polje je URL naslov formata "http:/'+'/www.domena.si"',
      alphaText    : 'To polje lahko vsebuje samo črke in _',
      alphanumText : 'To polje lahko vsebuje samo črke, številke in _'
   });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Sortiraj naraščajoče",
      sortDescText : "Sortiraj padajoče",
      lockText     : "Zakleni stolpec",
      unlockText   : "Odkleni stolpec",
      columnsText  : "Stolpci"
   });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Ime",
      valueText  : "Vrednost",
      dateFormat : "j.m.Y"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Potegni za razširitev.",
      collapsibleSplitTip : "Potegni za razširitev. Dvojni klik, če želite skriti."
   });
}