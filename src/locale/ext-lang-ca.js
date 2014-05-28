/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Catalonian Translation by halkon_polako 6-12-2007
 * December correction halkon_polako 11-12-2007
 *
 * Synchronized with 2.2 version of ext-lang-en.js (provided by Condor 8 aug 2008) 
 *     by halkon_polako 14-aug-2008
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Carregant...</div>';

if(Ext2.DataView){
  Ext2.DataView.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
  Ext2.grid.GridPanel.prototype.ddText = "{0} fila(es) seleccionada(es)";
}

if(Ext2.LoadMask){
  Ext2.LoadMask.prototype.msg = "Carregant...";
}

Date.monthNames = [
  "Gener",
  "Febrer",
  "Mar&#231;",
  "Abril",
  "Maig",
  "Juny",
  "Juliol",
  "Agost",
  "Setembre",
  "Octubre",
  "Novembre",
  "Desembre"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Gen : 0,
  Feb : 1,
  Mar : 2,
  Abr : 3,
  Mai : 4,
  Jun : 5,
  Jul : 6,
  Ago : 7,
  Set : 8,
  Oct : 9,
  Nov : 10,
  Dec : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
  "Diumenge",
  "Dilluns",
  "Dimarts",
  "Dimecres",
  "Dijous",
  "Divendres",
  "Dissabte"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

Date.parseCodes.S.s = "(?:st|nd|rd|th)";

if(Ext2.MessageBox){
  Ext2.MessageBox.buttonText = {
    ok     : "Acceptar",
    cancel : "Cancel&#183;lar",
    yes    : "S&#237;",
    no     : "No"
  };
}

if(Ext2.util.Format){
  Ext2.util.Format.date = function(v, format){
    if(!v) return "";
    if(!(v instanceof Date)) v = new Date(Date.parse(v));
    return v.dateFormat(format || "d/m/Y");
  };
}

if(Ext2.DatePicker){
  Ext2.apply(Ext2.DatePicker.prototype, {
    todayText         : "Avui",
    minText           : "Aquesta data &#233;s anterior a la data m&#237;nima",
    maxText           : "Aquesta data &#233;s posterior a la data m&#224;xima",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'Mes Seg&#252;ent (Control+Fletxa Dreta)',
    prevText          : 'Mes Anterior (Control+Fletxa Esquerra)',
    monthYearText     : 'Seleccioni un mes (Control+Fletxa a Dalt o Abaix per canviar els anys)',
    todayTip          : "{0} (Barra d&#39;espai)",
    format            : "d/m/Y",
    okText            : "&#160;Acceptar&#160;",
    cancelText        : "Cancel&#183;lar",
    startDay          : 1
  });
}

if(Ext2.PagingToolbar){
  Ext2.apply(Ext2.PagingToolbar.prototype, {
    beforePageText : "P&#224;gina",
    afterPageText  : "de {0}",
    firstText      : "Primera P&#224;gina",
    prevText       : "P&#224;gina Anterior",
    nextText       : "P&#224;gina Seg&#252;ent",
    lastText       : "Darrera P&#224;gina",
    refreshText    : "Refrescar",
    displayMsg     : "Mostrant {0} - {1} de {2}",
    emptyMsg       : 'Sense dades per mostrar'
  });
}

if(Ext2.form.Field){
  Ext2.form.Field.prototype.invalidText = "El valor d&#39;aquest camp &#233;s inv&#224;lid";
}

if(Ext2.form.TextField){
  Ext2.apply(Ext2.form.TextField.prototype, {
    minLengthText : "El tamany m&#237;nim per aquest camp &#233;s {0}",
    maxLengthText : "El tamany m&#224;xim per aquest camp &#233;s {0}",
    blankText     : "Aquest camp &#233;s obligatori",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext2.form.NumberField){
  Ext2.apply(Ext2.form.NumberField.prototype, {
    decimalSeparator : ",",
    decimalPrecision : 2,
    minText : "El valor m&#237;nim per aquest camp &#233;s {0}",
    maxText : "El valor m&#224;xim per aquest camp &#233;s {0}",
    nanText : "{0} no &#233;s un nombre v&#224;lid"
  });
}

if(Ext2.form.DateField){
  Ext2.apply(Ext2.form.DateField.prototype, {
    disabledDaysText  : "Deshabilitat",
    disabledDatesText : "Deshabilitat",
    minText           : "La data en aquest camp ha de ser posterior a {0}",
    maxText           : "La data en aquest camp ha de ser inferior a {0}",
    invalidText       : "{0} no &#233;s una data v&#224;lida - ha de tenir el format {1}",
    format            : "d/m/Y",
    altFormats        : "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
  });
}

if(Ext2.form.ComboBox){
  Ext2.apply(Ext2.form.ComboBox.prototype, {
    loadingText       : "Carregant...",
    valueNotFoundText : undefined
  });
}

if(Ext2.form.VTypes){
  Ext2.apply(Ext2.form.VTypes, {
    emailText    : 'Aquest camp ha de ser una adre&#231;a de e-mail amb el format "user@domain.com"',
    urlText      : 'Aquest camp ha de ser una URL amb el format "http:/'+'/www.domain.com"',
    alphaText    : 'Aquest camp nom&#233;s pot contenir lletres i _',
    alphanumText : 'Aquest camp nom&#233;s por contenir lletres, nombres i _'
  });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'Si us plau, tecleixi la URL per l\'enlla&#231;:',
    buttonTips : {
      bold : {
        title: 'Negreta (Ctrl+B)',
        text: 'Posa el text seleccionat en negreta.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'It&#224;lica (Ctrl+I)',
        text: 'Posa el text seleccionat en it&#224;lica.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'Subratllat (Ctrl+U)',
        text: 'Subratlla el text seleccionat.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'Augmentar Text',
        text: 'Augmenta el tamany de la font de text.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Disminuir Text',
        text: 'Disminueix el tamany de la font de text.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'Color de fons',
        text: 'Canvia el color de fons del text seleccionat.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'Color de la font de text',
        text: 'Canvia el color del text seleccionat.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'Alinear a la esquerra',
        text: 'Alinea el text a la esquerra.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'Centrar el text',
        text: 'Centra el text a l\'editor',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'Alinear a la dreta',
        text: 'Alinea el text a la dreta.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Llista amb vinyetes',
        text: 'Comen&#231;a una llista amb vinyetes.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Llista numerada',
        text: 'Comen&#231;a una llista numerada.',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'Enlla&#231;',
        text: 'Transforma el text seleccionat en un enlla&#231;.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'Editar Codi',
        text: 'Canvia al mode d\'edici&#243; de codi.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.grid.GridView){
  Ext2.apply(Ext2.grid.GridView.prototype, {
    sortAscText  : "Ordenaci&#243; Ascendent",
    sortDescText : "Ordenaci&#243; Descendent",
    columnsText  : "Columnes"
  });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(Buit)',
    groupByText    : 'Agrupar Per Aquest Camp',
    showGroupsText : 'Mostrar en Grups'
  });
}

if(Ext2.grid.PropertyColumnModel){
  Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
    nameText   : "Nom",
    valueText  : "Valor",
    dateFormat : "d/m/Y"
  });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
  Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Cliqueu i arrossegueu per canviar el tamany del panell.",
    collapsibleSplitTip : "Cliqueu i arrossegueu per canviar el tamany del panell. Doble clic per ocultar-ho."
  });
}

if(Ext2.form.TimeField){
  Ext2.apply(Ext2.form.TimeField.prototype, {
    minText : "L\'hora en aquest camp ha de ser igual o posterior a {0}",
    maxText : "L\'hora en aquest camp ha de ser igual o anterior {0}",
    invalidText : "{0} no &#233;s un hora v&#224;lida",
    format : "g:i A",
    altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
  });
}

if(Ext2.form.CheckboxGroup){
  Ext2.apply(Ext2.form.CheckboxGroup.prototype, {
    blankText : "Ha de seleccionar almenys un &#233;tem d\'aquest group"
  });
}

if(Ext2.form.RadioGroup){
  Ext2.apply(Ext2.form.RadioGroup.prototype, {
    blankText : "Ha de seleccionar un &#233;tem d\'aquest grup"
  });
}