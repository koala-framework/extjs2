/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * France (France) translation
 * By Thylia
 * 09-11-2007, 02:22 PM
 * updated to 2.2 by disizben (22 Sep 2008)
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">En cours de chargement...</div>';

if(Ext2.DataView){
   Ext2.DataView.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} ligne{1} sélectionnée{1}";
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

Date.parseCodes.S.s = "(?:er)";

Ext2.override(Date, {
	getSuffix : function() {
		return (this.getDate() == 1) ? "er" : "";
	}
});

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
      minText           : "Cette date est antérieure à la date minimum",
      maxText           : "Cette date est postérieure à la date maximum",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames		: Date.monthNames,
      dayNames			: Date.dayNames,
      nextText          : 'Mois suivant (CTRL+Flèche droite)',
      prevText          : "Mois précédent (CTRL+Flèche gauche)",
      monthYearText     : "Choisissez un mois (CTRL+Flèche haut ou bas pour changer d'année.)",
      todayTip          : "{0} (Barre d'espace)",
      okText            : "&#160;OK&#160;",
      cancelText        : "Annuler",
      format            : "d/m/y",
      startDay          : 1
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "Page",
      afterPageText  : "sur {0}",
      firstText      : "Première page",
      prevText       : "Page précédente",
      nextText       : "Page suivante",
      lastText       : "Dernière page",
      refreshText    : "Actualiser la page",
      displayMsg     : "Page courante {0} - {1} sur {2}",
      emptyMsg       : 'Aucune donnée à afficher'
   });
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "La valeur de ce champ est invalide";
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
      decimalSeparator : ",",
      decimalPrecision : 2,
      minText : "La valeur minimum de ce champ doit être de {0}",
      maxText : "La valeur maximum de ce champ doit être de {0}",
      nanText : "{0} n'est pas un nombre valide"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Désactivé",
      disabledDatesText : "Désactivé",
      minText           : "La date de ce champ ne peut être antérieure au {0}",
      maxText           : "La date de ce champ ne peut être postérieure au {0}",
      invalidText       : "{0} n'est pas une date valide - elle doit être au format suivant: {1}",
      format            : "d/m/y",
      altFormats        : "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
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
      emailText    : 'Ce champ doit contenir une adresse email au format: "usager@domaine.com"',
      urlText      : 'Ce champ doit contenir une URL au format suivant: "http:/'+'/www.domaine.com"',
      alphaText    : 'Ce champ ne peut contenir que des lettres et le caractère souligné (_)',
      alphanumText : 'Ce champ ne peut contenir que des caractères alphanumériques ainsi que le caractère souligné (_)'
   });
}

if(Ext2.form.HtmlEditor){
   Ext2.apply(Ext2.form.HtmlEditor.prototype, {
      createLinkText : "Veuillez entrer l'URL pour ce lien:",
          buttonTips : {
              bold : {
                  title: 'Gras (Ctrl+B)',
                  text: 'Met le texte sélectionné en gras.',
                  cls: 'x2-html-editor-tip'
              },
              italic : {
                  title: 'Italique (Ctrl+I)',
                  text: 'Met le texte sélectionné en italique.',
                  cls: 'x2-html-editor-tip'
              },
              underline : {
                  title: 'Souligné (Ctrl+U)',
                  text: 'Souligne le texte sélectionné.',
                  cls: 'x2-html-editor-tip'
              },
              increasefontsize : {
                  title: 'Agrandir la police',
                  text: 'Augmente la taille de la police.',
                  cls: 'x2-html-editor-tip'
              },
              decreasefontsize : {
                  title: 'Réduire la police',
                  text: 'Réduit la taille de la police.',
                  cls: 'x2-html-editor-tip'
              },
              backcolor : {
                  title: 'Couleur de surbrillance',
                  text: 'Modifie la couleur de fond du texte sélectionné.',
                  cls: 'x2-html-editor-tip'
              },
              forecolor : {
                  title: 'Couleur de police',
                  text: 'Modifie la couleur du texte sélectionné.',
                  cls: 'x2-html-editor-tip'
              },
              justifyleft : {
                  title: 'Aligner à gauche',
                  text: 'Aligne le texte à gauche.',
                  cls: 'x2-html-editor-tip'
              },
              justifycenter : {
                  title: 'Centrer',
                  text: 'Centre le texte.',
                  cls: 'x2-html-editor-tip'
              },
              justifyright : {
                  title: 'Aligner à droite',
                  text: 'Aligner le texte à droite.',
                  cls: 'x2-html-editor-tip'
              },
              insertunorderedlist : {
                  title: 'Liste à puce',
                  text: 'Démarre une liste à puce.',
                  cls: 'x2-html-editor-tip'
              },
              insertorderedlist : {
                  title: 'Liste numérotée',
                  text: 'Démarre une liste numérotée.',
                  cls: 'x2-html-editor-tip'
              },
              createlink : {
                  title: 'Lien hypertexte',
                  text: 'Transforme en lien hypertexte.',
                  cls: 'x2-html-editor-tip'
              },
              sourceedit : {
                  title: 'Code source',
                  text: 'Basculer en mode édition du code source.',
                  cls: 'x2-html-editor-tip'
              }
        }
   });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Tri croissant",
      sortDescText : "Tri décroissant",
      columnsText  : "Colonnes"
   });
}

if(Ext2.grid.GroupingView){
   Ext2.apply(Ext2.grid.GroupingView.prototype, {
      emptyGroupText : '(Aucun)',
      groupByText    : 'Grouper par ce champ',
      showGroupsText : 'Afficher par groupes'
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
      collapsibleSplitTip : "Cliquer et glisser pour redimensionner le panneau. Double-cliquer pour le cacher."
   });
}

if(Ext2.form.TimeField){
   Ext2.apply(Ext2.form.TimeField.prototype, {
      minText     : "L'heure de ce champ ne peut être antérieure à {0}",
      maxText     : "L'heure de ce champ ne peut être postérieure à {0}",
      invalidText : "{0} n'est pas une heure valide",
      format      : "H:i",
      altFormats  : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|h a|g a|g A|gi|hi|Hi|gia|hia|g|H"
   });
}

if(Ext2.form.CheckboxGroup){
  Ext2.apply(Ext2.form.CheckboxGroup.prototype, {
    blankText : "Vous devez sélectionner au moins un élément dans ce groupe"
  });
}

if(Ext2.form.RadioGroup){
  Ext2.apply(Ext2.form.RadioGroup.prototype, {
    blankText : "Vous devez sélectionner au moins un élément dans ce groupe"
  });
}
