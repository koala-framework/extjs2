/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * List compiled by KillerNay on the extjs.com forums.
 * Thank you KillerNay!
 *
 * Thailand Translations
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">¡ÓÅÑ§âËÅŽ...</div>';

if(Ext2.View){
  Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
  Ext2.grid.GridPanel.prototype.ddText = "{0} àÅ×Í¡áÅéÇ·Ñé§ËÁŽá¶Ç";
}

if(Ext2.TabPanelItem){
  Ext2.TabPanelItem.prototype.closeText = "»ÔŽá·çº¹Õé";
}

if(Ext2.form.Field){
  Ext2.form.Field.prototype.invalidText = "€èÒ¢Í§ªèÍ§¹ÕéäÁè¶Ù¡µéÍ§";
}

if(Ext2.LoadMask){
  Ext2.LoadMask.prototype.msg = "¡ÓÅÑ§âËÅŽ...";
}

Date.monthNames = [
  "Á¡ÃÒ€Á",
  "¡ØÁŸÒÓŸÑ¹žì",
  "ÁÕ¹Ò€Á",
  "àÁÉÒÂ¹",
  "ŸÄÉÀÒ€Á",
  "ÁÔ¶Ø¹ÒÂ¹",
  "¡Ä¡¯Ò€Á",
  "ÊÔ§ËÒ€Á",
  "¡Ñ¹ÂÒÂ¹",
  "µØÅÒ€Á",
  "ŸÄÈšÔ¡ÒÂ¹",
  "žÑ¹ÇÒ€Á"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  "Á€" : 0,
  "¡Ÿ" : 1,
  "ÁÕ€" : 2,
  "àÁÂ" : 3,
  "Ÿ€" : 4,
  "ÁÔÂ" : 5,
  "¡€" : 6,
  "Ê€" : 7,
  "¡Â" : 8,
  "µ€" : 9,
  "ŸÂ" : 10,
  "ž€" : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
  "ÍÒ·ÔµÂì",
  "šÑ¹·Ãì",
  "ÍÑ§€ÒÃ",
  "ŸØ×ž",
  "ŸÄËÑÊºŽÕ",
  "ÈØ¡Ãì",
  "àÊÒÃì"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext2.MessageBox){
  Ext2.MessageBox.buttonText = {
    ok     : "µ¡Å§",
    cancel : "Â¡àÅÔ¡",
    yes    : "ãªè",
    no     : "äÁèãªè"
  };
}

if(Ext2.util.Format){
  Ext2.util.Format.date = function(v, format){
    if(!v) return "";
    if(!(v instanceof Date)) v = new Date(Date.parse(v));
    return v.dateFormat(format || "m/d/Y");
  };
}

if(Ext2.DatePicker){
  Ext2.apply(Ext2.DatePicker.prototype, {
    todayText         : "ÇÑ¹¹Õé",
    minText           : "This date is before the minimum date",
    maxText           : "This date is after the maximum date",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'àŽ×Í¹¶ÑŽä» (Control+Right)',
    prevText          : 'àŽ×Í¹¡èÍ¹Ë¹éÒ (Control+Left)',
    monthYearText     : 'àÅ×Í¡àŽ×Í¹ (Control+Up/Down to move years)',
    todayTip          : "{0} (Spacebar)",
    format            : "m/d/y",
    okText            : "&#160;µ¡Å§&#160;",
    cancelText        : "Â¡àÅÔ¡",
    startDay          : 0
  });
}

if(Ext2.PagingToolbar){
  Ext2.apply(Ext2.PagingToolbar.prototype, {
    beforePageText : "Ë¹éÒ",
    afterPageText  : "of {0}",
    firstText      : "Ë¹éÒáÃ¡",
    prevText       : "¡èÍ¹Ë¹éÒ",
    nextText       : "¶ÑŽä»",
    lastText       : "Ë¹éÒÊØŽ·éÒÂ",
    refreshText    : "ÃÕà¿Ãª",
    displayMsg     : "¡ÓÅÑ§áÊŽ§ {0} - {1} šÒ¡ {2}",
    emptyMsg       : 'äÁèÁÕ¢éÍÁÙÅáÊŽ§'
  });
}

if(Ext2.form.TextField){
  Ext2.apply(Ext2.form.TextField.prototype, {
    minLengthText : "The minimum length for this field is {0}",
    maxLengthText : "The maximum length for this field is {0}",
    blankText     : "This field is required",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext2.form.NumberField){
  Ext2.apply(Ext2.form.NumberField.prototype, {
    minText : "The minimum value for this field is {0}",
    maxText : "The maximum value for this field is {0}",
    nanText : "{0} is not a valid number"
  });
}

if(Ext2.form.DateField){
  Ext2.apply(Ext2.form.DateField.prototype, {
    disabledDaysText  : "»ÔŽ",
    disabledDatesText : "»ÔŽ",
    minText           : "The date in this field must be after {0}",
    maxText           : "The date in this field must be before {0}",
    invalidText       : "{0} is not a valid date - it must be in the format {1}",
    format            : "m/d/y",
    altFormats        : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
  });
}

if(Ext2.form.ComboBox){
  Ext2.apply(Ext2.form.ComboBox.prototype, {
    loadingText       : "¡ÓÅÑ§âËÅŽ...",
    valueNotFoundText : undefined
  });
}

if(Ext2.form.VTypes){
  Ext2.apply(Ext2.form.VTypes, {
    emailText    : 'This field should be an e-mail address in the format "user@domain.com"',
    urlText      : 'This field should be a URL in the format "http:/'+'/www.domain.com"',
    alphaText    : 'This field should only contain letters and _',
    alphanumText : 'This field should only contain letters, numbers and _'
  });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'Please enter the URL for the link:',
    buttonTips : {
      bold : {
        title: 'Bold (Ctrl+B)',
        text: 'Make the selected text bold.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'Italic (Ctrl+I)',
        text: 'Make the selected text italic.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'Underline (Ctrl+U)',
        text: 'Underline the selected text.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'Grow Text',
        text: 'Increase the font size.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Shrink Text',
        text: 'Decrease the font size.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'Text Highlight Color',
        text: 'Change the background color of the selected text.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'Font Color',
        text: 'Change the color of the selected text.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'Align Text Left',
        text: 'Align text to the left.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'Center Text',
        text: 'Center text in the editor.',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'Align Text Right',
        text: 'Align text to the right.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Bullet List',
        text: 'Start a bulleted list.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Numbered List',
        text: 'Start a numbered list.',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'Hyperlink',
        text: 'Make the selected text a hyperlink.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'Source Edit',
        text: 'Switch to source editing mode.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.grid.GridView){
  Ext2.apply(Ext2.grid.GridView.prototype, {
    sortAscText  : "Sort Ascending",
    sortDescText : "Sort Descending",
    lockText     : "Lock Column",
    unlockText   : "Unlock Column",
    columnsText  : "Columns"
  });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(None)',
    groupByText    : 'Group By This Field',
    showGroupsText : 'Show in Groups'
  });
}

if(Ext2.grid.PropertyColumnModel){
  Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
    nameText   : "Name",
    valueText  : "Value",
    dateFormat : "m/j/Y"
  });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
  Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Drag to resize.",
    collapsibleSplitTip : "Drag to resize. Double click to hide."
  });
}
