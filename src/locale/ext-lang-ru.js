/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/*
 * Russian translation
 * By ZooKeeper (utf-8 encoding)
 * 6 November 2007
 */

Ext2.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Идет загрузка...</div>';

if(Ext2.View){
  Ext2.View.prototype.emptyText = "";
}

if(Ext2.grid.GridPanel){
  Ext2.grid.GridPanel.prototype.ddText = "{0} выбранных строк";
}

if(Ext2.TabPanelItem){
  Ext2.TabPanelItem.prototype.closeText = "Закрыть эту вкладку";
}

if(Ext2.form.Field){
  Ext2.form.Field.prototype.invalidText = "Значение в этом поле неверное";
}

if(Ext2.LoadMask){
  Ext2.LoadMask.prototype.msg = "Загрузка...";
}

Date.monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

Date.shortMonthNames = [
  "Янв",
  "Февр",
  "Март",
  "Апр",
  "Май",
  "Июнь",
  "Июль",
  "Авг",
  "Сент",
  "Окт",
  "Нояб",
  "Дек"
];

Date.getShortMonthName = function(month) {
  return Date.shortMonthNames[month];
};

Date.monthNumbers = {
  'Янв': 0,
  'Фев': 1,
  'Мар': 2,
  'Апр': 3,
  'Май': 4,
  'Июн': 5,
  'Июл': 6,
  'Авг': 7,
  'Сен': 8,
  'Окт': 9,
  'Ноя': 10,
  'Дек': 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

Date.getShortDayName = function(day) {
  return Date.dayNames[day].substring(0, 3);
};

if(Ext2.MessageBox){
  Ext2.MessageBox.buttonText = {
    ok     : "OK",
    cancel : "Отмена",
    yes    : "Да",
    no     : "Нет"
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
    todayText          : "Сегодня",
    minText            : "Эта дата раньше минимальной даты",
    maxText            : "Эта дата позже максимальной даты",
    disabledDaysText   : "",
    disabledDatesText  : "",
    monthNames         : Date.monthNames,
    dayNames           : Date.dayNames,
    nextText           : 'Следующий месяц (Control+Вправо)',
    prevText           : 'Предыдущий месяц (Control+Влево)',
    monthYearText      : 'Выбор месяца (Control+Вверх/Вниз для выбора года)',
    todayTip           : "{0} (Пробел)",
    format             : "d.m.y",
    okText             : "&#160;OK&#160;",
    cancelText         : "Отмена",
    startDay           : 1
  });
}

if(Ext2.PagingToolbar){
  Ext2.apply(Ext2.PagingToolbar.prototype, {
    beforePageText : "Страница",
    afterPageText  : "из {0}",
    firstText      : "Первая страница",
    prevText       : "Предыдущая страница",
    nextText       : "Следующая страница",
    lastText       : "Последняя страница",
    refreshText    : "Обновить",
    displayMsg     : "Отображаются записи с {0} по {1}, всего {2}",
    emptyMsg       : 'Нет данных для отображения'
  });
}

if(Ext2.form.TextField){
  Ext2.apply(Ext2.form.TextField.prototype, {
    minLengthText : "Минимальная длина этого поля {0}",
    maxLengthText : "Максимальная длина этого поля {0}",
    blankText     : "Это поле обязательно для заполнения",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext2.form.NumberField){
  Ext2.apply(Ext2.form.NumberField.prototype, {
    minText : "Значение этого поля не может быть меньше {0}",
    maxText : "Значение этого поля не может быть больше {0}",
    nanText : "{0} не является числом"
  });
}

if(Ext2.form.DateField){
  Ext2.apply(Ext2.form.DateField.prototype, {
    disabledDaysText  : "Не доступно",
    disabledDatesText : "Не доступно",
    minText           : "Дата в этом поле должна быть позде {0}",
    maxText           : "Дата в этом поле должна быть раньше {0}",
    invalidText       : "{0} не является правильной датой - дата должна быть указана в формате {1}",
    format            : "d.m.y",
    altFormats        : "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
  });
}

if(Ext2.form.ComboBox){
  Ext2.apply(Ext2.form.ComboBox.prototype, {
    loadingText       : "Загрузка...",
    valueNotFoundText : undefined
  });
}

if(Ext2.form.VTypes){
  Ext2.apply(Ext2.form.VTypes, {
    emailText     : 'Это поле должно содержать адрес электронной почты в формате "user@domain.com"',
    urlText       : 'Это поле должно содержать URL в формате "http:/'+'/www.domain.com"',
    alphaText     : 'Это поле должно содержать только латинские буквы и символ подчеркивания "_"',
    alphanumText  : 'Это поле должно содержать только латинские буквы, цифры и символ подчеркивания "_"'
  });
}

if(Ext2.form.HtmlEditor){
  Ext2.apply(Ext2.form.HtmlEditor.prototype, {
    createLinkText : 'Пожалуйста введите адрес:',
    buttonTips : {
      bold : {
        title: 'Полужирный (Ctrl+B)',
        text: 'Применение полужирного начертания к выделенному тексту.',
        cls: 'x2-html-editor-tip'
      },
      italic : {
        title: 'Курсив (Ctrl+I)',
        text: 'Применение курсивного начертания к выделенному тексту.',
        cls: 'x2-html-editor-tip'
      },
      underline : {
        title: 'Подчёркнутый (Ctrl+U)',
        text: 'Подчёркивание выделенного текста.',
        cls: 'x2-html-editor-tip'
      },
      increasefontsize : {
        title: 'Увеличить размер',
        text: 'Увеличение размера шрифта.',
        cls: 'x2-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Уменьшить размер',
        text: 'Уменьшение размера шрифта.',
        cls: 'x2-html-editor-tip'
      },
      backcolor : {
        title: 'Заливка',
        text: 'Изменение цвета фона для выделенного текста или абзаца.',
        cls: 'x2-html-editor-tip'
      },
      forecolor : {
        title: 'Цвет текста',
        text: 'Измение цвета текста.',
        cls: 'x2-html-editor-tip'
      },
      justifyleft : {
        title: 'Выровнять текст по левому краю',
        text: 'Выровнивание текста по левому краю.',
        cls: 'x2-html-editor-tip'
      },
      justifycenter : {
        title: 'По центру',
        text: 'Выровнивание текста по центру.',
        cls: 'x2-html-editor-tip'
      },
      justifyright : {
        title: 'Выровнять текст по правому краю',
        text: 'Выровнивание текста по правому краю.',
        cls: 'x2-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Маркеры',
        text: 'Начать маркированный список.',
        cls: 'x2-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Нумерация',
        text: 'Начать нумернованный список.',
        cls: 'x2-html-editor-tip'
      },
      createlink : {
        title: 'Вставить гиперссылку',
        text: 'Создание ссылки из выделенного текста.',
        cls: 'x2-html-editor-tip'
      },
      sourceedit : {
        title: 'Исходный код',
        text: 'Переключиться на исходный код.',
        cls: 'x2-html-editor-tip'
      }
    }
  });
}

if(Ext2.form.BasicForm){
  Ext2.form.BasicForm.prototype.waitTitle = "Пожалуйста подождите...";
}

if(Ext2.grid.GridView){
  Ext2.apply(Ext2.grid.GridView.prototype, {
    sortAscText  : "Сортировать по возрастанию",
    sortDescText : "Сортировать по убыванию",
    lockText     : "Закрепить столбец",
    unlockText   : "Снять закрепление столбца",
    columnsText  : "Столбцы"
  });
}

if(Ext2.grid.GroupingView){
  Ext2.apply(Ext2.grid.GroupingView.prototype, {
    emptyGroupText : '(Пусто)',
    groupByText    : 'Группировать по этому полю',
    showGroupsText : 'Отображать по группам'
  });
}

if(Ext2.grid.PropertyColumnModel){
  Ext2.apply(Ext2.grid.PropertyColumnModel.prototype, {
    nameText   : "Название",
    valueText  : "Значение",
    dateFormat : "d.m.Y"
  });
}

if(Ext2.SplitLayoutRegion){
  Ext2.apply(Ext2.SplitLayoutRegion.prototype, {
    splitTip            : "Тяните для изменения размера.",
    collapsibleSplitTip : "Тяните для изменения размера. Двойной щелчок спрячет панель."
  });
}

if(Ext2.layout.BorderLayout && Ext2.layout.BorderLayout.SplitRegion){
  Ext2.apply(Ext2.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Тяните для изменения размера.",
    collapsibleSplitTip : "Тяните для изменения размера. Двойной щелчок спрячет панель."
  });
}
