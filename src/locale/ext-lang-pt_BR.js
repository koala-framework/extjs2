/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Portuguese/Brazil Translation by Weber Souza
 * 08 April 2007
 * Updated by Allan Brazute Alves (EthraZa)
 * 06 September 2007
 * Updated by Leonardo Lima
 * 05 March 2008
 * Updated by Juliano Tarini (jtarini)
 * 22 April 2008
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Carregando...</div>';

if(Ext2.View){
   Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
   Ext2.grid.GridPanel.prototype.ddText = "{0} linha(s) selecionada(s)";
}

if(Ext2.TabPanelItem){
   Ext2.TabPanelItem.prototype.closeText = "Fechar";
}

if(Ext2.form.Field){
   Ext2.form.Field.prototype.invalidText = "O valor para este campo &eacute; inv&aacute;lido";
}

if(Ext2.LoadMask){
    Ext2.LoadMask.prototype.msg = "Carregando...";
}

Date.monthNames = [
   "Janeiro",
   "Fevereiro",
   "Mar&ccedil;o",
   "Abril",
   "Maio",
   "Junho",
   "Julho",
   "Agosto",
   "Setembro",
   "Outubro",
   "Novembro",
   "Dezembro"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Jan : 0,
  Fev : 1,
  Mar : 2,
  Abr : 3,
  Mai : 4,
  Jun : 5,
  Jul : 6,
  Ago : 7,
  Set : 8,
  Out : 9,
  Nov : 10,
  Dez : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
   "Domingo",
   "Segunda",
   "Ter&ccedil;a",
   "Quarta",
   "Quinta",
   "Sexta",
   "S&aacute;bado"
];

if(Ext2.MessageBox){
   Ext2.MessageBox.buttonText = {
      ok     : "OK",
      cancel : "Cancelar",
      yes    : "Sim",
      no     : "N&atilde;o"
   };
}

if (Ext2.util.Format) {
  Ext2.util.Format.date = function(v, format){
    if (!v) return "";
    if (!(v instanceof Date)) v = new Date(Date.parse(v));
    return v.dateFormat(format || "d/m/Y");
  };
  Ext2.util.Format.brMoney = function(v){
    v = (Math.round((v - 0) * 100)) / 100;
    v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v + "0" : v);
    v = String(v);
    var ps = v.split('.');
    var whole = ps[0];
    var sub = ps[1] ? '.' + ps[1] : '.00';
    var r = /(\d+)(\d{3})/;
    while (r.test(whole)) {
      whole = whole.replace(r, '$1' + '.' + '$2');
    }
    v = whole + sub;
    if (v.charAt(0) == '-') {
      return '- R$ ' + v.substr(1);
    }
    return "R$ " + v;
  }
}

if(Ext2.DatePicker){
   Ext2.apply(Ext2.DatePicker.prototype, {
      todayText         : "Hoje",
      minText           : "Esta data &eacute; anterior a menor data",
      maxText           : "Esta data &eacute; posterior a maior data",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.monthNames,
      dayNames          : Date.dayNames,
      nextText          : 'Pr&oacute;ximo M&ecirc;s (Control+Direita)',
      prevText          : 'M&ecirc;s Anterior (Control+Esquerda)',
      monthYearText     : 'Escolha um M&ecirc;s (Control+Cima/Baixo para mover entre os anos)',
      todayTip          : "{0} (Espa&ccedil;o)",
      format            : "d/m/Y",
      okText            : "&#160;OK&#160;",
      cancelText        : "Cancelar",
      startDay          : 0
   });
}

if(Ext2.PagingToolbar){
   Ext2.apply(Ext2.PagingToolbar.prototype, {
      beforePageText : "P&aacute;gina",
      afterPageText  : "de {0}",
      firstText      : "Primeira P&aacute;gina",
      prevText       : "P&aacute;gina Anterior",
      nextText       : "Pr&oacute;xima P&aacute;gina",
      lastText       : "&Uacute;ltima P&aacute;gina",
      refreshText    : "Atualizar",
      displayMsg     : "<b>{0} &agrave; {1} de {2} registro(s)</b>",
      emptyMsg       : 'Sem registros para exibir'
   });
}

if(Ext2.form.TextField){
   Ext2.apply(Ext2.form.TextField.prototype, {
      minLengthText : "O tamanho m&iacute;nimo para este campo &eacute; {0}",
      maxLengthText : "O tamanho m&aacute;ximo para este campo &eacute; {0}",
      blankText     : "Este campo &eacute; obrigat&oacute;rio.",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext2.form.NumberField){
   Ext2.apply(Ext2.form.NumberField.prototype, {
      minText : "O valor m&iacute;nimo para este campo &eacute; {0}",
      maxText : "O valor m&aacute;ximo para este campo &eacute; {0}",
      nanText : "{0} n&atilde;o &eacute; um n&uacute;mero v&aacute;lido"
   });
}

if(Ext2.form.DateField){
   Ext2.apply(Ext2.form.DateField.prototype, {
      disabledDaysText  : "Desabilitado",
      disabledDatesText : "Desabilitado",
      minText           : "A data deste campo deve ser posterior a {0}",
      maxText           : "A data deste campo deve ser anterior a {0}",
      invalidText       : "{0} n&atilde;o &eacute; uma data v&aacute;lida - deve ser informado no formato {1}",
      format            : "d/m/Y"
   });
}

if(Ext2.form.ComboBox){
   Ext2.apply(Ext2.form.ComboBox.prototype, {
      loadingText       : "Carregando...",
      valueNotFoundText : undefined
   });
}

if(Ext2.form.VTypes){
   Ext2.apply(Ext2.form.VTypes, {
      emailText    : 'Este campo deve ser um endere&ccedil;o de e-mail v&aacute;lido, no formado "usuario@dominio.com.br"',
      urlText      : 'Este campo deve ser uma URL no formato "http:/'+'/www.dominio.com.br"',
      alphaText    : 'Este campo deve conter apenas letras e _',
      alphanumText : 'Este campo deve conter apenas letras, n&uacute;meros e _'
   });
}

if(Ext2.form.HtmlEditor){
   Ext2.apply(Ext2.form.HtmlEditor.prototype, {
        createLinkText : 'Porfavor, entre com a URL do link:',
        buttonTips : {
            bold : {
               title: 'Negrito (Ctrl+B)',
               text: 'Deixa o texto selecionado em negrito.',
               cls: 'x2-html-editor-tip'
            },
            italic : {
               title: 'Italico (Ctrl+I)',
               text: 'Deixa o texto selecionado em italico.',
               cls: 'x2-html-editor-tip'
            },
            underline : {
               title: 'Sublinhado (Ctrl+U)',
               text: 'Sublinha o texto selecionado.',
               cls: 'x2-html-editor-tip'
           },
           increasefontsize : {
               title: 'Aumentar Texto',
               text: 'Aumenta o tamanho da fonte.',
               cls: 'x2-html-editor-tip'
           },
           decreasefontsize : {
               title: 'Diminuir Texto',
               text: 'Diminui o tamanho da fonte.',
               cls: 'x2-html-editor-tip'
           },
           backcolor : {
               title: 'Cor de Fundo',
               text: 'Muda a cor do fundo do texto selecionado.',
               cls: 'x2-html-editor-tip'
           },
           forecolor : {
               title: 'Cor da Fonte',
               text: 'Muda a cor do texto selecionado.',
               cls: 'x2-html-editor-tip'
           },
           justifyleft : {
               title: 'Alinhar &agrave; Esquerda',
               text: 'Alinha o texto &agrave; esquerda.',
               cls: 'x2-html-editor-tip'
           },
           justifycenter : {
               title: 'Centralizar Texto',
               text: 'Centraliza o texto no editor.',
               cls: 'x2-html-editor-tip'
           },
           justifyright : {
               title: 'Alinhar &agrave; Direita',
               text: 'Alinha o texto &agrave; direita.',
               cls: 'x2-html-editor-tip'
           },
           insertunorderedlist : {
               title: 'Lista com Marcadores',
               text: 'Inicia uma lista com marcadores.',
               cls: 'x2-html-editor-tip'
           },
           insertorderedlist : {
               title: 'Lista Numerada',
               text: 'Inicia uma lista numerada.',
               cls: 'x2-html-editor-tip'
           },
           createlink : {
               title: 'Hyperliga&ccedil;&atilde;o',
               text: 'Transforma o texto selecionado em um hyperlink.',
               cls: 'x2-html-editor-tip'
           },
           sourceedit : {
               title: 'Editar Fonte',
               text: 'Troca para o modo de edi&ccedil;&atilde;o de c&oacute;digo fonte.',
               cls: 'x2-html-editor-tip'
           }
        }
   });
}

if(Ext2.grid.GridView){
   Ext2.apply(Ext2.grid.GridView.prototype, {
      sortAscText  : "Ordem Ascendente",
      sortDescText : "Ordem Descendente",
      lockText     : "Bloquear Coluna",
      unlockText   : "Desbloquear Coluna",
      columnsText  : "Colunas"
   });
}

if(Ext2.grid.PropertyColumnModel){
   Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
      nameText   : "Nome",
      valueText  : "Valor",
      dateFormat : "d/m/Y"
   });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
   Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "Arraste para redimensionar.",
      collapsibleSplitTip : "Arraste para redimensionar. Duplo clique para esconder."
   });
}
