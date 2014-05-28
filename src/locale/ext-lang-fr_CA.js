/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * France (Canadian) translation
 * By BernardChhun
 * 04-08-2007, 03:07 AM
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">En cours de chargement...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} ligne(s) sélectionné(s)";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Fermer cette onglet";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "La valeur de ce champ est invalide";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "En cours de chargement...";
}

Date.shortMonthNames = [
   "Janv",
   "Févr",
   "Mars",
   "Avr",
   "Mai",
   "Juin",
   "Juil",
   "Août",
   "Sept",
   "Oct",
   "Nov",
   "Déc"
];

Date.getShortMonthName = function(month) {
  return Date.shortMonthNames[month];
};

Date.monthNames = [
   "Janvier",
   "Février",
   "Mars",
   "Avril",
   "Mai",
   "Juin",
   "Juillet",
   "Août",
   "Septembre",
   "Octobre",
   "Novembre",
   "Décembre"
];

Date.monthNumbers = {
  "Janvier" : 0,
  "Février" : 1,
  "Mars" : 2,
  "Avril" : 3,
  "Mai" : 4,
  "Juin" : 5,
  "Juillet" : 6,
  "Août" : 7,
  "Septembre" : 8,
  "Octobre" : 9,
  "Novembre" : 10,
  "Décembre" : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[Ext2.util.Format.capitalize(name)];
};

Date.dayNames = [
   "Dimanche",
   "Lundi",
   "Mardi",
   "Mercredi",
   "Jeudi",
   "Vendredi",
   "Samedi"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Annuler",
      yes    : "Oui",
      no     : "Non"
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
      todayText         : "Aujourd'hui",
      minText           : "Cette date est plus petite que la date minimum",
      maxText           : "Cette date est plus grande que la date maximum",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : 'Prochain mois (CTRL+Fléche droite)',
      prevText          : 'Mois précédent (CTRL+Fléche gauche)',
      monthYearText     : 'Choissisez un mois (CTRL+Fléche haut ou bas pour changer d\'année.)',
      todayTip          : "{0} (Barre d'espace)",
      format            : "d/m/y"
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Page",
      afterPageText  : "de {0}",
      firstText      : "Première page",
      prevText       : "Page précédente",
      nextText       : "Prochaine page",
      lastText       : "Dernière page",
      refreshText    : "Recharger la page",
      displayMsg     : "Page courante {0} - {1} de {2}",
      emptyMsg       : 'Aucune donnée à afficher'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "La longueur minimum de ce champ est de {0} caractères",
      maxLengthText : "La longueur maximum de ce champ est de {0} caractères",
      blankText     : "Ce champ est obligatoire",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "La valeur minimum de ce champ doit être de {0}",
      maxText : "La valeur maximum de ce champ doit être de {0}",
      nanText : "{0} n'est pas un nombre valide"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Désactivé",
      disabledDatesText : "Désactivé",
      minText           : "La date de ce champ doit être avant le {0}",
      maxText           : "La date de ce champ doit être après le {0}",
      invalidText       : "{0} n'est pas une date valide - il doit être au format suivant: {1}",
      format            : "d/m/y"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "En cours de chargement...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'Ce champ doit contenir un courriel et doit être sous ce format: "usager@domaine.com"',
      urlText      : 'Ce champ doit contenir une URL sous le format suivant: "http:/'+'/www.domaine.com"',
      alphaText    : 'Ce champ ne peut contenir que des lettres et le caractère souligné (_)',
      alphanumText : 'Ce champ ne peut contenir que des caractères alphanumériques ainsi que le caractère souligné (_)'
   });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Tri ascendant",
      sortDescText : "Tri descendant",
      lockText     : "Verrouillé la colonne",
      unlockText   : "Déverrouillé la colonne",
      columnsText  : "Colonnes"
   });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Propriété",
      valueText  : "Valeur",
      dateFormat : "d/m/Y"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Cliquer et glisser pour redimensionner le panneau.",
      collapsibleSplitTip : "Cliquer et glisser pour redimensionner le panneau. Double-cliquer pour cacher le panneau."
   });
}
