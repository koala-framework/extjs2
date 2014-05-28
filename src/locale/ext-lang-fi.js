/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Finnish Translations
 * <tuomas.salo (at) iki.fi>
 * 'ä' should read as lowercase 'a' with two dots on top (&auml;)
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Ladataan...</div>';

if(Ext2.View){
  Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
  Ext2.grid.GridPanel.prototype.ddText = "{0} rivi(ä) valittu";
}

if(Ext2.TabPanelItem){
  Ext2.TabPanelItem.prototype.closeText = "Sulje tämä välilehti";
}

if(Ext2.LoadMask){
  Ext2.LoadMask.prototype.msg = "Ladataan...";
}

Date.monthNames = [
  "tammikuu",
  "helmikuu",
  "maaliskuu",
  "huhtikuu",
  "toukokuu",
  "kesäkuu",
  "heinäkuu",
  "elokuu",
  "syyskuu",
  "lokakuu",
  "marraskuu",
  "joulukuu"
];

Date.getShortMonthName = function(month) {
  //return Date.monthNames[month].substring(0, 3);
  return (month+1) + ".";
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
  if(name.match(/^(1?\d)\./)) {
	return -1+RegExp.$1;
  } else {
	return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
  }
};

Date.dayNames = [
  "sunnuntai",
  "maanantai",
  "tiistai",
  "keskiviikko",
  "torstai",
  "perjantai",
  "lauantai"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 2);
};

if(Ext2.MessageBox){
  Ext2.MessageBox.buttonText = {
    ok     : "OK",
    cancel : "Peruuta",
    yes    : "Kyllä",
    no     : "Ei"
  };
}

if(Ext2.util.Format){
  Ext2.util.Format.date = function(v, format){
    if(!v) return "";
    if(!(v instanceof Date)) v = new Date(Date.parse(v));
    return v.dateFormat(format || "j.n.Y");
  };
}

if(Ext2.DatePicker){
  Ext2.apply(Ext2.DatePicker.prototype, {
    todayText         : "Tänään",
    minText           : "Tämä päivämäärä on aikaisempi kuin ensimmäinen sallittu",
    maxText           : "Tämä päivämäärä on myöhäisempi kuin viimeinen sallittu",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'Seuraava kuukausi (Control+oikealle)',
    prevText          : 'Edellinen kuukausi (Control+vasemmalle)',
    monthYearText     : 'Valitse kuukausi (vaihda vuotta painamalla Control+ylös/alas)',
    todayTip          : "{0} (välilyönti)",
    format            : "j.n.Y",
    okText            : "&#160;OK&#160;",
    cancelText        : "Peruuta",
    startDay          : 1 // viikko alkaa maanantaista
  });
}

if(Ext2.PagingToolbar){
  Ext2.apply(Ext2.PagingToolbar.prototype, {
    beforePageText : "Sivu",
    afterPageText  : "/ {0}",
    firstText      : "Ensimmäinen sivu",
    prevText       : "Edellinen sivu",
    nextText       : "Seuraava sivu",
    lastText       : "Viimeinen sivu",
    refreshText    : "Päivitä",
    displayMsg     : "Näytetään {0} - {1} / {2}",
    emptyMsg       : 'Ei tietoja'
  });
}

if(Ext2.form.Field){
  Ext2.form.Field.prototype.invalidText = "Tämän kentän arvo ei kelpaa";
}

if(Ext2.form.TextField){
  Ext2.apply(Ext2.form.TextField.prototype, {
    minLengthText : "Tämän kentän minimipituus on {0}",
    maxLengthText : "Tämän kentän maksimipituus on {0}",
    blankText     : "Tämä kenttä on pakollinen",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext2.form.NumberField){
  Ext2.apply(Ext2.form.NumberField.prototype, {
    minText : "Tämän kentän pienin sallittu arvo on {0}",
    maxText : "Tämän kentän suurin sallittu arvo on {0}",
    nanText : "{0} ei ole numero"
  });
}

if(Ext2.form.DateField){
  Ext2.apply(Ext2.form.DateField.prototype, {
    disabledDaysText  : "Ei käytössä",
    disabledDatesText : "Ei käytössä",
    minText           : "Tämän kentän päivämäärän tulee olla {0} jälkeen",
    maxText           : "Tämän kentän päivämäärän tulee olla ennen {0}",
    invalidText       : "Päivämäärä {0} ei ole oikeassa muodossa - kirjoita päivämäärä muodossa {1}",
    format            : "j.n.Y",
    altFormats        : "j.n.|d.m.|mdy|mdY|d|Y-m-d|Y/m/d"
  });
}

if(Ext2.form.ComboBox){
  Ext2.apply(Ext2.form.ComboBox.prototype, {
    loadingText       : "Ladataan...",
    valueNotFoundText : undefined
  });
}

if(Ext2.form.VTypes){
  Ext2.apply(Ext2.form.VTypes, {
    emailText    : 'Syötä tähän kenttään sähköpostiosoite, esim. "etunimi.sukunimi@osoite.fi"',
    urlText      : 'Syötä tähän kenttään URL-osoite, esim. "http:/'+'/www.osoite.fi"',
    alphaText    : 'Syötä tähän kenttään vain kirjaimia (a-z, A-Z) ja alaviivoja (_)',
    alphanumText : 'Syötä tähän kenttään vain kirjaimia (a-z, A-Z), numeroita (0-9) ja alaviivoja (_)'
  });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'Anna linkin URL-osoite:',
    buttonTips : {
      bold : {
        title: 'Lihavoi (Ctrl+B)',
        text: 'Lihavoi valittu teksti.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'Kursivoi (Ctrl+I)',
        text: 'Kursivoi valittu teksti.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'Alleviivaa (Ctrl+U)',
        text: 'Alleviivaa valittu teksti.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'Suurenna tekstiä',
        text: 'Kasvata tekstin kirjasinkokoa.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Pienennä tekstiä',
        text: 'Pienennä tekstin kirjasinkokoa.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'Tekstin korostusväri',
        text: 'Vaihda valitun tekstin taustaväriä.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'Tekstin väri',
        text: 'Vaihda valitun tekstin väriä.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'Tasaa vasemmalle',
        text: 'Tasaa teksti vasempaan reunaan.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'Keskitä',
        text: 'Keskitä teksti.',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'Tasaa oikealle',
        text: 'Tasaa teksti oikeaan reunaan.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Luettelo',
        text: 'Luo luettelo.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Numeroitu luettelo',
        text: 'Luo numeroitu luettelo.',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'Linkki',
        text: 'Tee valitusta tekstistä hyperlinkki.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'Lähdekoodin muokkaus',
        text: 'Vaihda lähdekoodin muokkausnäkymään.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.form.BasicForm){
  Ext2.form.BasicForm.prototype.waitTitle = "Odota...";
}

if(Ext2.grid.GridView){
  Ext2.apply(Ext2.grid.GridView.prototype, {
    sortAscText  : "Järjestä A-Ö",
    sortDescText : "Järjestä Ö-A",
    lockText     : "Lukitse sarake",
    unlockText   : "Vapauta sarakkeen lukitus",
    columnsText  : "Sarakkeet"
  });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(ei mitään)',
    groupByText    : 'Ryhmittele tämän kentän mukaan',
    showGroupsText : 'Näytä ryhmissä'
  });
}

if(Ext2.grid.PropertyColumnModel){
  Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
    nameText   : "Nimi",
    valueText  : "Arvo",
    dateFormat : "j.m.Y"
  });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
  Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Muuta kokoa vetämällä.",
    collapsibleSplitTip : "Muuta kokoa vetämällä. Piilota kaksoisklikkauksella."
  });
}
