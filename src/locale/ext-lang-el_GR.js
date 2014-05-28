/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Greek translation
 * By thesilentman (utf8 encoding)
 * 27 Apr 2008
 *
 * Changes since previous (second) Version:
 * + added Date.shortMonthNames 
 * + added Date.getShortMonthName 
 * + added Date.monthNumbers
 * + added Ext2.grid.GroupingView
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Μεταφόρτωση δεδομένων...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} Επιλεγμένες σειρές";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Κλείστε το tab";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "Το περιεχόμενο του πεδίου δεν είναι αποδεκτό";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Μεταφόρτωση δεδομένων...";
}

Date.monthNames = [
   "Ιανουάριος",
   "Φεβρουάριος",
   "Μάρτιος",
   "Απρίλιος",
   "Μάιος",
   "Ιούνιος",
   "Ιούλιος",
   "Αύγουστος",
   "Σεπτέμβριος",
   "Οκτώβριος",
   "Νοέμβριος",
   "Δεκέμβριος"
];

Date.shortMonthNames = [
   "Ιαν",
   "Φεβ",
   "Μάρ",
   "Απρ",
   "Μάι",
   "Ιού",
   "Ιού",
   "Αύγ",
   "Σεπ",
   "Οκτ",
   "Νοέ",
   "Δεκ"
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
   "Κυριακή",
   "Δευτέρα",
   "Τρίτη",
   "Τετάρτη",
   "Πέμπτη",
   "Παρασκευή",
   "Σάββατο"
];

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Άκυρο",
      yes    : "Ναι",
      no     : "Όχι"
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
      todayText         : "Σήμερα",
      minText           : "Η Ημερομηνία είναι προγενέστερη από την παλαιότερη αποδεκτή",
      maxText           : "Η Ημερομηνία είναι μεταγενέστερη από την νεότερη αποδεκτή",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames  : Date.monthNames,
      dayNames    : Date.dayNames,
      nextText          : 'Επόμενος Μήνας (Control+Δεξί Βέλος)',
      prevText          : 'Προηγούμενος Μήνας (Control + Αριστερό Βέλος)',
      monthYearText     : 'Επιλογή Μηνός (Control + Επάνω/Κάτω Βέλος για μεταβολή ετών)',
      todayTip          : "{0} (ΠΛήκτρο Διαστήματος)",
      format            : "d/m/y"
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Σελίδα",
      afterPageText  : "από {0}",
      firstText      : "Πρώτη Σελίδα",
      prevText       : "Προηγούμενη Σελίδα",
      nextText       : "Επόμενη Σελίδα",
      lastText       : "Τελευταία Σελίδα",
      refreshText    : "Ανανέωση",
      displayMsg     : "Εμφάνιση {0} - {1} από {2}",
      emptyMsg       : 'Δεν υπάρχουν δεδομένα'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "Το μικρότερο αποδεκτό μήκος για το πεδίο είναι {0}",
      maxLengthText : "Το μεγαλύτερο αποδεκτό μήκος για το πεδίο είναι {0}",
      blankText     : "Το πεδίο είναι υποχρεωτικό",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "Η μικρότερη τιμή του πεδίου είναι {0}",
      maxText : "Η μεγαλύτερη τιμή του πεδίου είναι {0}",
      nanText : "{0} δεν είναι αποδεκτός αριθμός"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Ανενεργό",
      disabledDatesText : "Ανενεργό",
      minText           : "Η ημερομηνία αυτού του πεδίου πρέπει να είναι μετά την {0}",
      maxText           : "Η ημερομηνία αυτού του πεδίου πρέπει να είναι πριν την {0}",
      invalidText       : "{0} δεν είναι έγκυρη ημερομηνία - πρέπει να είναι στη μορφή {1}",
      format            : "d/m/y"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Μεταφόρτωση δεδομένων...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'Το πεδίο δέχεται μόνο διευθύνσεις Email σε μορφή "user@domain.com"',
      urlText      : 'Το πεδίο δέχεται μόνο URL σε μορφή "http:/'+'/www.domain.com"',
      alphaText    : 'Το πεδίο δέχεται μόνο χαρακτήρες και _',
      alphanumText : 'Το πεδίο δέχεται μόνο χαρακτήρες, αριθμούς και _'
   });
}

if(Ext2.form.HtmlEditor){
   Ext2.apply(Ext2.form.HtmlEditor.prototype, {
        createLinkText : 'Δώστε τη διεύθυνση (URL) για το σύνδεσμο (link):',
        buttonTips : {
            bold : {
               title: 'Έντονα (Ctrl+B)',
               text: 'Κάνετε το προεπιλεγμένο κείμενο έντονο.',
               cls: 'x2-html-editor-tip'
            },
            italic : {
               title: 'Πλάγια (Ctrl+I)',
               text: 'Κάνετε το προεπιλεγμένο κείμενο πλάγιο.',
               cls: 'x2-html-editor-tip'
            },
            underline : {
               title: 'Υπογράμμιση (Ctrl+U)',
               text: 'Υπογραμμίζετε το προεπιλεγμένο κείμενο.',
               cls: 'x2-html-editor-tip'
           },
           increasefontsize : {
               title: 'Μεγέθυνση κειμένου',
               text: 'Μεγαλώνετε τη γραμματοσειρά.',
               cls: 'x2-html-editor-tip'
           },
           decreasefontsize : {
               title: 'Σμίκρυνση κειμένου',
               text: 'Μικραίνετε τη γραμματοσειρά.',
               cls: 'x2-html-editor-tip'
           },
           backcolor : {
               title: 'Χρώμα Φόντου Κειμένου',
               text: 'Αλλάζετε το χρώμα στο φόντο του προεπιλεγμένου κειμένου.',
               cls: 'x2-html-editor-tip'
           },
           forecolor : {
               title: 'Χρώμα Γραμματοσειράς',
               text: 'Αλλάζετε το χρώμα στη γραμματοσειρά του προεπιλεγμένου κειμένου.',               
               cls: 'x2-html-editor-tip'
           },
           justifyleft : {
               title: 'Αριστερή Στοίχιση Κειμένου',
               text: 'Στοιχίζετε το κείμενο στα αριστερά.',
               cls: 'x2-html-editor-tip'
           },
           justifycenter : {
               title: 'Κεντράρισμα Κειμένου',
               text: 'Στοιχίζετε το κείμενο στο κέντρο.',
               cls: 'x2-html-editor-tip'
           },
           justifyright : {
               title: 'Δεξιά Στοίχιση Κειμένου',
               text: 'Στοιχίζετε το κείμενο στα δεξιά.',
               cls: 'x2-html-editor-tip'
           },
           insertunorderedlist : {
               title: 'Εισαγωγή Λίστας Κουκίδων',
               text: 'Ξεκινήστε μια λίστα με κουκίδες.',
               cls: 'x2-html-editor-tip'
           },
           insertorderedlist : {
               title: 'Εισαγωγή Λίστας Αρίθμησης',
               text: 'Ξεκινήστε μια λίστα με αρίθμηση.',
               cls: 'x2-html-editor-tip'
           },
           createlink : {
               title: 'Hyperlink',
               text: 'Μετατρέπετε το προεπιλεγμένο κείμενο σε Link.',
               cls: 'x2-html-editor-tip'
           },
           sourceedit : {
               title: 'Επεξεργασία Κώδικα',
               text: 'Μεταβαίνετε στη λειτουργία επεξεργασίας κώδικα.',
               cls: 'x2-html-editor-tip'
           }
        }
   });
}


if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Αύξουσα ταξινόμηση",
      sortDescText : "Φθίνουσα ταξινόμηση",
      lockText     : "Κλείδωμα στήλης",
      unlockText   : "Ξεκλείδωμα στήλης",
      columnsText  : "Στήλες"
   });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
  emptyGroupText : '(Καμμία)',
  groupByText    : 'Ομαδοποίηση βάσει αυτού του πεδίου',
  showGroupsText : 'Να εμφανίζεται στις ομάδες'
  });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Όνομα",
      valueText  : "Περιεχόμενο",
      dateFormat : "m/d/Y"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Σύρετε για αλλαγή μεγέθους.",
      collapsibleSplitTip : "Σύρετε για αλλαγή μεγέθους. Διπλό κλικ για απόκρυψη."
   });
}

