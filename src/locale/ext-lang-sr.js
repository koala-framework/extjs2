/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * Serbian Latin Translation
 * by Atila Hajnal (latin, utf8 encoding)
 * sr
 * 14 Sep 2007
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Učitavam...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "Ne postoji ni jedan slog";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} izabranih redova";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Zatvori оvu »karticu«";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Unešena vrednost nije pravilna";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Učitavam...";
}

Date.monthNames = [
   "Januar",
   "Februar",
   "Mart",
   "April",
   "Мај",
   "Jun",
   "Јul",
   "Avgust",
   "Septembar",
   "Oktobar",
   "Novembar",
   "Decembar"
];

Date.dayNames = [
   "Nedelja",
   "Ponedeljak",
   "Utorak",
   "Sreda",
   "Četvrtak",
   "Petak",
   "Subota"
];

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "U redu",
      cancel : "Odustani",
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
      todayText         : "Danas",
      minText           : "Datum је ispred najmanjeg dozvoljenog datuma",
      maxText           : "Datum је nakon najvećeg dozvoljenog datuma",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Sledeći mesec (Control+Desno)',
      prevText          : 'Prethodni mesec (Control+Levo)',
      monthYearText     : 'Izaberite mesec (Control+Gore/Dole za izbor godine)',
      todayTip          : "{0} (Razmaknica)",
      format            : "d.m.y",
      startDay 		 : 1
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Strana",
      afterPageText  : "od {0}",
      firstText      : "Prva strana",
      prevText       : "Prethodna strana",
      nextText       : "Sledeća strana",
      lastText       : "Poslednja strana",
      refreshText    : "Osveži",
      displayMsg     : "Prikazana {0} - {1} od {2}",
      emptyMsg       : 'Nemam šta prikazati'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "Minimalna dužina ovog polja је {0}",
      maxLengthText : "Maksimalna dužina ovog polja је {0}",
      blankText     : "Polje је obavezno",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "Minimalna vrednost u polju је {0}",
      maxText : "Maksimalna vrednost u polju је {0}",
      nanText : "{0} nije pravilan broj"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Pasivno",
      disabledDatesText : "Pasivno",
      minText           : "Datum u ovom polju mora biti nakon {0}",
      maxText           : "Datum u ovom polju mora biti pre {0}",
      invalidText       : "{0} nije pravilan datum - zahtevani oblik je {1}",
      format            : "d.m.y",
      altFormats        : "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Učitavam...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'Ovo polje prihavata e-mail adresu isključivo u obliku "korisnik@domen.com"',
      urlText      : 'Ovo polje prihavata URL adresu isključivo u obliku "http:/'+'/www.domen.com"',
      alphaText    : 'Ovo polje može sadržati isključivo slova i znak _',
      alphanumText : 'Ovo polje može sadržati само slova, brojeve i znak _'
   });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Rastući redosled",
      sortDescText : "Opadajući redosled",
      lockText     : "Zaključaj kolonu",
      unlockText   : "Otključaj kolonu",
      columnsText  : "Kolone"
   });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Naziv",
      valueText  : "Vrednost",
      dateFormat : "d.m.Y"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Povući za izmenu veličine.",
      collapsibleSplitTip : "Povući za izmenu veličine. Dvostruku klik za sakrivanje."
   });
}
