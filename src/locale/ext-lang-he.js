/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Hebrew Translations
 * By spartacus (from forums) 06-12-2007
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">...����</div>';

if(Ext2.View){
  Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
  Ext2.grid.GridPanel.prototype.ddText = "����� ������ {0}";
}

if(Ext2.TabPanelItem){
  Ext2.TabPanelItem.prototype.closeText = "���� ������";
}

if(Ext2.form.Field){
  Ext2.form.Field.prototype.invalidText = "���� ���� �� ����";
}

if(Ext2.LoadMask){
  Ext2.LoadMask.prototype.msg = "...����";
}

Date.monthNames = [
  "�����",
  "������",
  "���",
  "�����",
  "���",
  "����",
  "����",
  "������",
  "������",
  "�������",
  "������",
  "�����"
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
  "�",
  "�",
  "�",
  "�",
  "�",
  "�",
  "�"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext2.MessageBox){
  Ext2.MessageBox.buttonText = {
    ok     : "�����",
    cancel : "�����",
    yes    : "��",
    no     : "��"
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
    todayText         : "����",
    minText           : ".����� �� �� ���� ������ ������� �����",
    maxText           : ".����� �� �� ���� ������ ����� �����",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : '(Control+Right) ����� ���',
    prevText          : '(Control+Left) ����� �����',
    monthYearText     : '(������ ��� Control+Up/Down) ��� ����',
    todayTip          : "��� ����) {0})",
    format            : "d/m/Y",
    okText            : "&#160;�����&#160;",
    cancelText        : "�����",
    startDay          : 0
  });
}

if(Ext2.PagingToolbar){
  Ext2.apply(Ext2.PagingToolbar.prototype, {
    beforePageText : "����",
    afterPageText  : "{0} ����",
    firstText      : "���� �����",
    prevText       : "���� ����",
    nextText       : "���� ���",
    lastText       : "���� �����",
    refreshText    : "����",
    displayMsg     : "���� {0} - {1} ���� {2}",
    emptyMsg       : '��� ���� �����'
  });
}

if(Ext2.form.TextField){
  Ext2.apply(Ext2.form.TextField.prototype, {
    minLengthText : "{0} ����� ��������� ���� �� ���",
    maxLengthText : "{0} ����� ������ ���� �� ���",
    blankText     : "��� �� �����",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext2.form.NumberField){
  Ext2.apply(Ext2.form.NumberField.prototype, {
    minText : "{0} ���� ��������� ���� �� ���",
    maxText : "{0} ���� ������ ���� �� ���",
    nanText : "��� �� ���� {0}"
  });
}

if(Ext2.form.DateField){
  Ext2.apply(Ext2.form.DateField.prototype, {
    disabledDaysText  : "������",
    disabledDatesText : "������",
    minText           : "{0} ������ ���� �� ���� ����� ����",
    maxText           : "{0} ������ ���� �� ���� ����� ����",
    invalidText       : "{1} ��� �� ����� ���� - ���� ����� ������ {0}",
    format            : "m/d/y",
    altFormats        : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
  });
}

if(Ext2.form.ComboBox){
  Ext2.apply(Ext2.form.ComboBox.prototype, {
    loadingText       : "...����",
    valueNotFoundText : undefined
  });
}

if(Ext2.form.VTypes){
  Ext2.apply(Ext2.form.VTypes, {
    emailText    : '"user@domain.com" ��� �� ���� ����� ����� ���� �������� ������',
    urlText      : '"http:/'+'/www.domain.com" ��� �� ���� ����� ����� ������� ������',
    alphaText    : '_��� �� ���� ����� �� ������ �',
    alphanumText : '_��� �� ���� ����� �� ������, ������ �'
  });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : ':��� ���� �� ����� �������� ���� ������',
    buttonTips : {
      bold : {
        title: '(Ctrl+B) �����',
        text: '.���� �� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: '(Ctrl+I) ����',
        text: '.��� �� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: '(Ctrl+U) �� ����',
        text: '.���� �� ���� ���� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: '���� ����',
        text: '.���� ���� ���� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: '���� ����',
        text: '.���� ���� ���� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: '��� ��� �����',
        text: '.��� �� ��� ���� ���� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: '��� ����',
        text: '.��� �� ��� ����� ���� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: '���� �����',
        text: '.��� ����� �� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: '���� �����',
        text: '.��� ����� �� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: '���� �����',
        text: '.��� ����� �� ����� �����',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: '����� ������',
        text: '.���� ����� ������',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: '����� �������',
        text: '.���� ����� �������',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: '�����',
        text: '.���� �� ����� ����� ������',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: '����� ��� ����',
        text: '.��� ��� ����',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.grid.GridView){
  Ext2.apply(Ext2.grid.GridView.prototype, {
    sortAscText  : "���� ���� ����",
    sortDescText : "���� ���� ����",
    lockText     : "��� �����",
    unlockText   : "���� �����",
    columnsText  : "������"
  });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(���)',
    groupByText    : '��� ������� ��� ��� ��',
    showGroupsText : '��� �������'
  });
}

if(Ext2.grid.PropertyColumnModel){
  Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
    nameText   : "��",
    valueText  : "���",
    dateFormat : "m/j/Y"
  });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
  Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : ".���� ������ ����",
    collapsibleSplitTip : ".���� ������ ����. ����� ����� ������"
  });
}
