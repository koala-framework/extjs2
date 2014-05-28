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
 *
 * Hungarian Translations (utf-8 encoded)
 * by Amon <amon@theba.hu> (27 Apr 2008)
 * encoding fixed by Vili (17 Feb 2009)
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Betöltés...</div>';

if(Ext2.View){
  Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
  Ext2.grid.GridPanel.prototype.ddText = "{0} kiválasztott sor";
}

if(Ext2.TabPanelItem){
  Ext2.TabPanelItem.prototype.closeText = "Fül bezárása";
}

if(Ext2.form.Field){
  Ext2.form.Field.prototype.invalidText = "Hibás érték!";
}

if(Ext2.LoadMask){
  Ext2.LoadMask.prototype.msg = "Betöltés...";
}

Date.monthNames = [
  "Január",
  "Február",
  "Március",
  "Április",
  "Május",
  "Június",
  "Július",
  "Augusztus",
  "Szeptember",
  "Október",
  "November",
  "December"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  'Jan' : 0,
  'Feb' : 1,
  'Már' : 2,
  'Ápr' : 3,
  'Máj' : 4,
  'Jún' : 5,
  'Júl' : 6,
  'Aug' : 7,
  'Sze' : 8,
  'Okt' : 9,
  'Nov' : 10,
  'Dec' : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
  "Vasárnap",
  "Hétfő",
  "Kedd",
  "Szerda",
  "Csütörtök",
  "Péntek",
  "Szombat"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext2.MessageBox){
  Ext2.MessageBox.buttonText = {
    ok     : "OK",
    cancel : "Mégsem",
    yes    : "Igen",
    no     : "Nem"
  };
}

if(Ext2.util.Format){
  Ext2.util.Format.date = function(v, format){
    if(!v) return "";
    if(!(v instanceof Date)) v = new Date(Date.parse(v));
    return v.dateFormat(format || "Y m d");
  };
}

if(Ext2.DatePicker){
  Ext2.apply(Ext2.DatePicker.prototype, {
    todayText         : "Mai nap",
    minText           : "A dátum korábbi a megengedettnél",
    maxText           : "A dátum későbbi a megengedettnél",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'Köv. hónap (CTRL+Jobbra)',
    prevText          : 'Előző hónap (CTRL+Balra)',
    monthYearText     : 'Válassz hónapot (Évválasztás: CTRL+Fel/Le)',
    todayTip          : "{0} (Szóköz)",
    format            : "y-m-d",
    okText            : "&#160;OK&#160;",
    cancelText        : "Mégsem",
    startDay          : 0
  });
}

if(Ext2.PagingToolbar){
  Ext2.apply(Ext2.PagingToolbar.prototype, {
    beforePageText : "Oldal",
    afterPageText  : "a {0}-ból/ből",
    firstText      : "Első oldal",
    prevText       : "Előző oldal",
    nextText       : "Következő oldal",
    lastText       : "Utolsó oldal",
    refreshText    : "Frissítés",
    displayMsg     : "{0} - {1} sorok láthatók a {2}-ból/ből",
    emptyMsg       : 'Nincs megjeleníthető adat'
  });
}

if(Ext2.form.TextField){
  Ext2.apply(Ext2.form.TextField.prototype, {
    minLengthText : "A mező tartalma legalább {0} hosszú kell legyen",
    maxLengthText : "A mező tartalma legfeljebb {0} hosszú lehet",
    blankText     : "Kötelezően kitöltendő mező",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext2.form.NumberField){
  Ext2.apply(Ext2.form.NumberField.prototype, {
    minText : "A mező tartalma nem lehet kissebb, mint {0}",
    maxText : "A mező tartalma nem lehet nagyobb, mint {0}",
    nanText : "{0} nem szám"
  });
}

if(Ext2.form.DateField){
  Ext2.apply(Ext2.form.DateField.prototype, {
    disabledDaysText  : "Nem választható",
    disabledDatesText : "Nem választható",
    minText           : "A dátum nem lehet korábbi, mint {0}",
    maxText           : "A dátum nem lehet későbbi, mint {0}",
    invalidText       : "{0} nem megfelelő dátum - a helyes formátum: {1}",
    format            : "Y m d",
    altFormats        : "Y-m-d|y-m-d|y/m/d|m/d|m-d|md|ymd|Ymd|d"
  });
}

if(Ext2.form.ComboBox){
  Ext2.apply(Ext2.form.ComboBox.prototype, {
    loadingText       : "Betöltés...",
    valueNotFoundText : undefined
  });
}

if(Ext2.form.VTypes){
  Ext2.apply(Ext2.form.VTypes, {
    emailText    : 'A mező email címet tartalmazhat, melynek formátuma "felhasználó@szolgáltató.hu"',
    urlText      : 'A mező webcímet tartalmazhat, melynek formátuma "http:/'+'/www.weboldal.hu"',
    alphaText    : 'A mező csak betűket és aláhúzást (_) tartalmazhat',
    alphanumText : 'A mező csak betűket, számokat és aláhúzást (_) tartalmazhat'
  });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'Add meg a webcímet:',
    buttonTips : {
      bold : {
        title: 'Félkövér (Ctrl+B)',
        text: 'Félkövérré teszi a kijelölt szöveget.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'Dőlt (Ctrl+I)',
        text: 'Dőlté teszi a kijelölt szöveget.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'Aláhúzás (Ctrl+U)',
        text: 'Aláhúzza a kijelölt szöveget.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'Szöveg nagyítás',
        text: 'Növeli a szövegméretet.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Szöveg kicsinyítés',
        text: 'Csökkenti a szövegméretet.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'Háttérszín',
        text: 'A kijelölt szöveg háttérszínét módosítja.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'Szövegszín',
        text: 'A kijelölt szöveg színét módosítja.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'Balra zárt',
        text: 'Balra zárja a szöveget.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'Középre zárt',
        text: 'Középre zárja a szöveget.',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'Jobbra zárt',
        text: 'Jobbra zárja a szöveget.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Felsorolás',
        text: 'Felsorolást kezd.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Számozás',
        text: 'Számozott listát kezd.',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'Hiperlink',
        text: 'A kijelölt szöveget linkké teszi.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'Forrás nézet',
        text: 'Forrás nézetbe kapcsol.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.grid.GridView){
  Ext2.apply(Ext2.grid.GridView.prototype, {
    sortAscText  : "Növekvő rendezés",
    sortDescText : "Csökkenő rendezés",
    lockText     : "Oszlop zárolás",
    unlockText   : "Oszlop feloldás",
    columnsText  : "Oszlopok"
  });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(Nincs)',
    groupByText    : 'Oszlop szerint csoportosítás',
    showGroupsText : 'Csoportos nézet'
  });
}

if(Ext2.grid.PropertyColumnModel){
  Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
    nameText   : "Név",
    valueText  : "Érték",
    dateFormat : "Y m j"
  });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
  Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Átméretezés húzásra.",
    collapsibleSplitTip : "Átméretezés húzásra. Eltüntetés duplaklikk."
  });
}
