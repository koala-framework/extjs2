/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * German translation
 * By schmidetzki and humpdi
 * 04-07-2007
 * Updated by wm003 10-31-2007
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Übertrage Daten ...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} Zeile(n) ausgewählt";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Diesen Tab schließen";
}

if(Ext2.form.BasicForm){
   Ext2.form.BasicForm.prototype.waitTitle = "Bitte warten...";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Der Wert des Feldes ist nicht korrekt";
}

if(Ext2.LoadMask){
  Ext2.LoadMask.prototype.msg = "Übertrage Daten...";
}

Date.monthNames = [
   "Januar",
   "Februar",
   "März",
   "April",
   "Mai",
   "Juni",
   "Juli",
   "August",
   "September",
   "Oktober",
   "November",
   "Dezember"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Jan : 0,
  Feb : 1,
  "M\u00e4r" : 2,
  Apr : 3,
  Mai : 4,
  Jun : 5,
  Jul : 6,
  Aug : 7,
  Sep : 8,
  Okt : 9,
  Nov : 10,
  Dez : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
   "Sonntag",
   "Montag",
   "Dienstag",
   "Mittwoch",
   "Donnerstag",
   "Freitag",
   "Samstag"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Abbrechen",
      yes    : "Ja",
      no     : "Nein"
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
      todayText         : "Heute",
      minText           : "Dieses Datum liegt von dem erstmöglichen Datum",
      maxText           : "Dieses Datum liegt nach dem letztmöglichen Datum",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	    : Date.monthNames,
      dayNames		    : Date.dayNames,
      nextText          : "Nächster Monat (Strg/Control + Rechts)",
      prevText          : "Vorheriger Monat (Strg/Control + Links)",
      monthYearText     : "Monat auswählen (Strg/Control + Hoch/Runter, um ein Jahr auszuwählen)",
      todayTip          : "Heute ({0}) (Leertaste)",
      format            : "d.m.Y",
      okText            : "&#160;OK&#160;",
      cancelText        : "Abbrechen",
      startDay          : 1
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Seite",
      afterPageText  : "von {0}",
      firstText      : "Erste Seite",
      prevText       : "vorherige Seite",
      nextText       : "nächste Seite",
      lastText       : "letzte Seite",
      refreshText    : "Aktualisieren",
      displayMsg     : "Anzeige Eintrag {0} - {1} von {2}",
      emptyMsg       : "Keine Daten vorhanden"
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "Bitte geben Sie mindestens {0} Zeichen ein",
      maxLengthText : "Bitte geben Sie maximal {0} Zeichen ein",
      blankText     : "Dieses Feld darf nicht leer sein",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "Der Mindestwert für dieses Feld ist {0}",
      maxText : "Der Maximalwert für dieses Feld ist {0}",
      nanText : "{0} ist keine Zahl"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "nicht erlaubt",
      disabledDatesText : "nicht erlaubt",
      minText           : "Das Datum in diesem Feld muß nach dem {0} liegen",
      maxText           : "Das Datum in diesem Feld muß vor dem {0} liegen",
      invalidText       : "{0} ist kein valides Datum - es muß im Format {1} eingegeben werden",
      format            : "d.m.Y",
      altFormats        : "d.m.Y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Lade Daten ...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'Dieses Feld sollte eine E-Mail-Adresse enthalten. Format: "user@domain.com"',
      urlText      : 'Dieses Feld sollte eine URL enthalten. Format: "http:/'+'/www.domain.com"',
      alphaText    : 'Dieses Feld darf nur Buchstaben enthalten und _',
      alphanumText : 'Dieses Feld darf nur Buchstaben und Zahlen enthalten und _'
   });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'Bitte geben Sie die URL für den Link ein:',
    buttonTips : {
      bold : {
        title: 'Fett (Ctrl+B)',
        text: 'Erstellt den ausgewählten Text in Fettschrift.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'Kursiv (Ctrl+I)',
        text: 'Erstellt den ausgewählten Text in Schrägschrift.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'Unterstrichen (Ctrl+U)',
        text: 'Unterstreicht den ausgewählten Text.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'Text vergößern',
        text: 'Erhöht die Schriftgröße.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Text verkleinern',
        text: 'Verringert die Schriftgröße.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'Text farblich hervorheben',
        text: 'Hintergrundfarbe des ausgewählten Textes ändern.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'Schriftfarbe',
        text: 'Farbe des ausgewählten Textes ändern.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'Linksbündig',
        text: 'Setzt den Text linksbündig.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'Zentrieren',
        text: 'Zentriert den Text in Editor.',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'Rechtsbündig',
        text: 'Setzt den Text rechtsbündig.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Aufzählungsliste',
        text: 'Beginnt eine Aufzählungsliste mit Spiegelstrichen.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Numerierte Liste',
        text: 'Beginnt eine numerierte Liste.',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'Hyperlink',
        text: 'Erstellt einen Hyperlink aus dem ausgewählten text.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'Source bearbeiten',
        text: 'Zur Bearbeitung des Quelltextes wechseln.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Aufsteigend sortieren",
      sortDescText : "Absteigend sortieren",
      lockText     : "Spalte sperren",
      unlockText   : "Spalte freigeben (entsperren)",
      columnsText  : "Spalten"
   });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(Keine)',
    groupByText    : 'Dieses Feld gruppieren',
    showGroupsText : 'In Gruppen anzeigen'
  });
}

if(Ext2.grid.PropertyColumnModel){
  Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Name",
      valueText  : "Wert",
      dateFormat : "d.m.Y"
  });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
  Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Ziehen, um Größe zu ändern.",
    collapsibleSplitTip : "Ziehen, um Größe zu ändern. Doppelklick um Panel auszublenden."
  });
}

if(Ext2.form.TimeField){
   Ext2.apply(Ext2.form.TimeField.prototype, {
    minText : "Die Zeit muss gleich oder nach {0} liegen",
    maxText : "Die Zeit muss gleich oder vor {0} liegen",
    invalidText : "{0} ist keine gültige Zeit",
    format : "H:i"
   });
}
