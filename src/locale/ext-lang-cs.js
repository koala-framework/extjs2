/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Czech Translations
 * Translated by Tomáš Korčák (72)
 * 2008/02/08 18:02, Ext-2.0.1
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Prosím čekejte...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} vybraných řádků";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Zavřít záložku";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Hodnota v tomto poli je neplatná";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Prosím čekejte...";
}

Date.monthNames = [
   "Leden",
   "Únor",
   "Březen",
   "Duben",
   "Květen",
   "Červen",
   "Červenec",
   "Srpen",
   "Září",
   "Říjen",
   "Listopad",
   "Prosinec"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

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

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
   "Neděle",
   "Pondělí",
   "Úterý",
   "Středa",
   "Čtvrtek",
   "Pátek",
   "Sobota"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Storno",
      yes    : "Ano",
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
      todayText         : "Dnes",
      minText           : "Datum nesmí být starší než je minimální",
      maxText           : "Datum nesmí být dřívější než je maximální",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Následující měsíc (Control+Right)',
      prevText          : 'Předcházející měsíc (Control+Left)',
      monthYearText     : 'Zvolte měsíc (ke změně let použijte Control+Up/Down)',
      todayTip          : "{0} (Spacebar)",
      format            : "d.m.Y",
      okText            : "&#160;OK&#160;",
      cancelText        : "Storno",
      startDay          : 1
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Strana",
      afterPageText  : "z {0}",
      firstText      : "První strana",
      prevText       : "Přecházející strana",
      nextText       : "Následující strana",
      lastText       : "Poslední strana",
      refreshText    : "Aktualizovat",
      displayMsg     : "Zobrazeno {0} - {1} z celkových {2}",
      emptyMsg       : 'Žádné záznamy nebyly nalezeny'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "Pole nesmí mít méně {0} znaků",
      maxLengthText : "Pole nesmí být delší než {0} znaků",
      blankText     : "This field is required",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "Hodnota v tomto poli nesmí být menší než {0}",
      maxText : "Hodnota v tomto poli nesmí být větší než {0}",
      nanText : "{0} není platné číslo"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Neaktivní",
      disabledDatesText : "Neaktivní",
      minText           : "Datum v tomto poli nesmí být starší než {0}",
      maxText           : "Datum v tomto poli nesmí být novější než {0}",
      invalidText       : "{0} není platným datem - zkontrolujte zda-li je ve formátu {1}",
      format            : "d.m.Y",
      altFormats        : "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Prosím čekejte...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'V tomto poli může být vyplněna pouze emailová adresa ve formátu "uživatel@doména.cz"',
      urlText      : 'V tomto poli může být vyplněna pouze URL (adresa internetové stránky) ve formátu "http:/'+'/www.doména.cz"',
      alphaText    : 'Toto pole může obsahovat pouze písmena abecedy a znak _',
      alphanumText : 'Toto pole může obsahovat pouze písmena abecedy, čísla a znak _'
   });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'Zadejte URL adresu odkazu:',
    buttonTips : {
      bold : {
        title: 'Tučné (Ctrl+B)',
        text: 'Označí vybraný text tučně.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'Kurzíva (Ctrl+I)',
        text: 'Označí vybraný text kurzívou.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'Podtržení (Ctrl+U)',
        text: 'Podtrhne vybraný text.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'Zvětšit písmo',
        text: 'Zvětší velikost písma.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Zúžit písmo',
        text: 'Zmenší velikost písma.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'Barva zvýraznění textu',
        text: 'Označí vybraný text tak, aby vypadal jako označený zvýrazňovačem.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'Barva písma',
        text: 'Změní barvu textu.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'Zarovnat text vlevo',
        text: 'Zarovná text doleva.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'Zarovnat na střed',
        text: 'Zarovná text na střed.',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'Zarovnat text vpravo',
        text: 'Zarovná text doprava.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Odrážky',
        text: 'Začne seznam s odrážkami.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Číslování',
        text: 'Začne číslovaný seznam.',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'Internetový odkaz',
        text: 'Z vybraného textu vytvoří internetový odkaz.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'Zdrojový kód',
        text: 'Přepne do módu úpravy zdrojového kódu.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Řadit vzestupně",
      sortDescText : "Řadit sestupně",
      lockText     : "Ukotvit sloupec",
      unlockText   : "Uvolnit sloupec",
      columnsText  : "Sloupce"
   });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(Žádná data)',
    groupByText    : 'Seskupit dle tohoto pole',
    showGroupsText : 'Zobrazit ve skupině'
  });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Název",
      valueText  : "Hodnota",
      dateFormat : "j.m.Y"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Tahem změnit velikost.",
      collapsibleSplitTip : "Tahem změnit velikost. Dvojklikem skrýt."
   });
}
