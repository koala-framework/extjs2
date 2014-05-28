/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Polish Translations
 * By vbert 17-April-2007
 * Updated by mmar 16-November-2007
 * Encoding: utf-8
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Wczytywanie danych...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} wybrano wiersze(y)";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Zamknij zakładkę";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Wartość tego pola jest niewłaściwa";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Wczytywanie danych...";
}

Date.monthNames = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Sty : 0,
  Lut : 1,
  Mar : 2,
  Kwi : 3,
  Maj : 4,
  Cze : 5,
  Lip : 6,
  Sie : 7,
  Wrz : 8,
  Paź : 9,
  Lis : 10,
  Gru : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
];

Date.getShortDayName = function(day) {
	switch(day) {
		case 0: return 'ndz';
		case 1: return 'pon';
		case 2: return 'wt';
		case 3: return 'śr';
		case 4: return 'czw';
		case 5: return 'pt';				
		case 6: return 'sob';
                default: return '';
	}
};

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Anuluj",
      yes    : "Tak",
      no     : "Nie"
   };
}

if(Ext2.util.Format){
   Ext2.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "Y-m-d");
   };
}

if(Ext2.DatePicker){
	Ext2.apply(Ext2.DatePicker.prototype, {
		startDay			: 1,
		todayText			: "Dzisiaj",
		minText				: "Data jest wcześniejsza od daty minimalnej",
		maxText				: "Data jest późniejsza od daty maksymalnej",
		disabledDaysText	: "",
		disabledDatesText	: "",
		monthNames			: Date.monthNames,
		dayNames			: Date.dayNames,
		nextText			: "Następny miesiąc (Control+StrzałkaWPrawo)",
		prevText			: "Poprzedni miesiąc (Control+StrzałkaWLewo)",
		monthYearText		: "Wybierz miesiąc (Control+Up/Down aby zmienić rok)",
		todayTip			: "{0} (Spacja)",
		format				: "Y-m-d",
		okText            	: "&#160;OK&#160;",
    	cancelText        	: "Anuluj",
    	startDay          	: 1
	});
}

if(Ext2.PagingToolbar){
	Ext2.apply(Ext2.PagingToolbar.prototype, {
		beforePageText	: "Strona",
		afterPageText	: "z {0}",
		firstText		: "Pierwsza strona",
	    prevText		: "Poprzednia strona",
		nextText		: "Następna strona",
	    lastText		: "Ostatnia strona",
		refreshText		: "Odśwież",
	    displayMsg		: "Wyświetlono {0} - {1} z {2}",
		emptyMsg		: "Brak danych do wyświetlenia"
	});
}

if(Ext2.form.TextField){
	Ext2.apply(Ext2.form.TextField.prototype, {
	    minLengthText	: "Minimalna ilość znaków dla tego pola to {0}",
		maxLengthText	: "Maksymalna ilość znaków dla tego pola to {0}",
	    blankText		: "To pole jest wymagane",
		regexText		: "",
	    emptyText		: null
	});
}

if(Ext2.form.NumberField){
	Ext2.apply(Ext2.form.NumberField.prototype, {
	    minText	: "Minimalna wartość dla tego pola to {0}",
	    maxText	: "Maksymalna wartość dla tego pola to {0}",
		nanText	: "{0} to nie jest właściwa wartość"
	});
}

if(Ext2.form.DateField){
	Ext2.apply(Ext2.form.DateField.prototype, {
	    disabledDaysText	: "Wyłączony",
	    disabledDatesText	: "Wyłączony",
		minText				: "Data w tym polu musi być późniejsza od {0}",
	    maxText				: "Data w tym polu musi być wcześniejsza od {0}",
		invalidText			: "{0} to nie jest prawidłowa data - prawidłowy format daty {1}",
	    format				: "Y-m-d",
    	altFormats    	    : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
	});
}

if(Ext2.form.ComboBox){
	Ext2.apply(Ext2.form.ComboBox.prototype, {
		loadingText       : "Wczytuję...",
		valueNotFoundText : undefined
	});
}

if(Ext2.form.VTypes){
	Ext2.apply(Ext2.form.VTypes, {
	    emailText		: 'To pole wymaga podania adresu e-mail w formacie: "nazwa@domena.pl"',
	    urlText			: 'To pole wymaga podania adresu strony www w formacie: "http:/'+'/www.domena.pl"',
		alphaText		: 'To pole wymaga podania tylko liter i _',
		alphanumText	: 'To pole wymaga podania tylko liter, cyfr i _'
	});
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'Wprowadź adres URL strony:',
    buttonTips : {
      bold : {
        title: 'Pogrubienie (Ctrl+B)',
        text: 'Ustaw styl zaznaczonego tekstu na pogrubiony.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'Kursywa (Ctrl+I)',
        text: 'Ustaw styl zaznaczonego tekstu na kursywę.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'Podkreślenie (Ctrl+U)',
        text: 'Podkreśl zaznaczony tekst.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'Zwiększ czcionkę',
        text: 'Zwiększ rozmiar czcionki.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Zmniejsz czcionkę',
        text: 'Zmniejsz rozmiar czcionki.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'Wyróżnienie',
        text: 'Zmień kolor wyróżnienia zaznaczonego tekstu.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'Kolor czcionki',
        text: 'Zmień kolor zaznaczonego tekstu.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'Do lewej',
        text: 'Wyrównaj tekst do lewej.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'Wyśrodkuj',
        text: 'Wyrównaj tekst do środka.',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'Do prawej',
        text: 'Wyrównaj tekst do prawej.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Lista wypunktowana',
        text: 'Rozpocznij listę wypunktowaną.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Lista numerowana',
        text: 'Rozpocznij listę numerowaną.',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'Hiperłącze',
        text: 'Przekształć zaznaczony tekst w hiperłącze.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'Edycja źródła',
        text: 'Przełącz w tryb edycji źródła.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.grid.GridView){
	Ext2.apply(Ext2.grid.GridView.prototype, {
	    sortAscText		: "Sortuj rosnąco",
	    sortDescText	: "Sortuj malejąco",
		lockText		: "Zablokuj kolumnę",
	    unlockText		: "Odblokuj kolumnę",
		columnsText		: "Kolumny"
	});
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(None)',
    groupByText    : 'Grupuj po tym polu',
    showGroupsText : 'Pokaż w grupach'
  });
}

if(Ext2.grid.PropertyColumnModel){
	Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
	    nameText	: "Nazwa",
	    valueText	: "Wartość",
		dateFormat	: "Y-m-d"
	});
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
	Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
	    splitTip			: "Przeciągnij aby zmienić rozmiar.",
		collapsibleSplitTip	: "Przeciągnij aby zmienić rozmiar. Kliknij dwukrotnie aby ukryć."
	});
}
