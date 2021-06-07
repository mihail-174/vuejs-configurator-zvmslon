var config = new Vue({
  el: '#app',
  data: {
    nameAuto: '',
    costAuto: 0,
    chassis: {},
    chassisName: {},
    chassisCost: 0,
    pump: {},
    pumpName: {},
    pumpCost: 0,
    options: {},
    optionsListChecked: [],
    optionsCost: 0,
    autos: [
      {
        active: 'active',
        'name': 'АКН-10',
        'descr': 'Без открывания дна',
        'cost': 500000,
        'image': 'img/akn-10.jpg',
        'chassis': [
          {'id': 2690000, text: '260 л.с., Е-2, 154'},
          {'id': 2780000, text: '300 л.с., Е-4, 154'},
          {'id': 2900000, text: '300 л.с., Е-4, ZF9'}
        ],
        'pump': [
            {'id': 20000, text: '1 KO-505 (310 куб.м./час)'},
            {'id': 180000, text: '2 ВК-6M2 (240 куб.м./час)'},
            {'id': 280000, text: '3 PNR-122 (730 куб.м./час)'},
            {'id': 320000, text: '4 PNR-155 (930 куб.м./час)'}
        ],
        'options': [
          {'name': 'Изготовление цистерны большего объема (за каждый дополнительный 1 куб.м.)', 'cost': 15000},
          {'name': 'Дополнительная заливная горловина с площадкой обслуживания горловин по всей длине цистерны, с поручнями', 'cost': 30000},
          {'name': 'Люк диаметром 700 мм в заднем днище для очистки цистерны', 'cost': 30000},
          {'name': 'Подогрев сливного люка от выхлопных газов шасси', 'cost': 30000},
          {'name': 'Металлический инструментальный ящик с замком', 'cost': 10000},
          {'name': 'Изготовление цистерны (обечайки и днищ) из стали толщиной 5 мм вместо 4 мм', 'cost': 30000},
          {'name': 'Калибровка цистерны объемом 10 куб.м.', 'cost': 15000},
          {'name': 'Установка спального места на шасси', 'cost': 90000},
          {'name': 'Установка ДЗК за кабину', 'cost': 25000},
          {'name': 'Автономный отопитель кабины Планар-4Д, 24 В', 'cost': 25000},
          {'name': 'Установка тахографа с блоком СКЗИ', 'cost': 50000},
          {'name': 'Установка ГЛОНАСС', 'cost': 12000}
        ]
      },
      {
        'name': 'АКН-10ОД',
        'descr': 'с механическим открыванием дна',
        'cost': 560000,
        'image': 'img/akn-10od.jpg',
        'chassis': [
          {'id': 2690000, text: '260 л.с., Е-2, 154'},
          {'id': 2780000, text: '300 л.с., Е-4, 154'},
          {'id': 2900000, text: '300 л.с., Е-4, ZF9'}
        ],
        'pump': [
          {'id': 20000, text: '5 KO-505 (310 куб.м./час)'},
          {'id': 180000, text: '6 ВК-6M2 (240 куб.м./час)'},
          {'id': 280000, text: '7 PNR-122 (730 куб.м./час)'},
          {'id': 320000, text: '8 PNR-155 (930 куб.м./час)'}
        ],
        'options': [
          {'name': 'Изготовление цистерны большего объема (за каждый дополнительный 1 куб.м.)', 'cost': 15000},
          {'name': 'Дополнительная заливная горловина с площадкой обслуживания горловин по всей длине цистерны, с поручнями', 'cost': 30000},
          {'name': 'Подогрев сливного люка от выхлопных газов шасси', 'cost': 30000},
          {'name': 'Металлический инструментальный ящик с замком', 'cost': 10000},
          {'name': 'Изготовление цистерны (обечайки и днищ) из стали толщиной 5 мм вместо 4 мм', 'cost': 30000},
          {'name': 'Калибровка цистерны объемом 10 куб.м.', 'cost': 15000},
          {'name': 'Установка спального места на шасси', 'cost': 90000},
          {'name': 'Установка ДЗК за кабину', 'cost': 25000},
          {'name': 'Автономный отопитель кабины Планар-4Д, 24 В', 'cost': 25000},
          {'name': 'Установка тахографа с блоком СКЗИ', 'cost': 50000},
          {'name': 'Установка ГЛОНАСС', 'cost': 12000}
        ]
      },
      {
        'name': 'АКНС-10',
        'descr': 'с гидравлическим подъемом цистерны и откр.дна',
        'cost': 930000,
        'image': 'img/akns-10.jpg',
        'chassis': [
          {'id': 2690000, text: '260 л.с., Е-2, 154'},
          {'id': 2780000, text: '300 л.с., Е-4, 154'},
          {'id': 2900000, text: '300 л.с., Е-4, ZF9'}
        ],
        'pump': [
          {'id': 20000, text: '9 KO-505 (310 куб.м./час)'},
          {'id': 180000, text: '10 ВК-6M2 (240 куб.м./час)'},
          {'id': 280000, text: '11 PNR-122 (730 куб.м./час)'},
          {'id': 320000, text: '12 PNR-155 (930 куб.м./час)'}
        ],
        'options': [
          {'name': 'Дополнительная заливная горловина с площадкой обслуживания горловин по всей длине цистерны, с поручнями', 'cost': 30000},
          {'name': 'Подогрев сливного люка от выхлопных газов шасси', 'cost': 30000},
          {'name': 'Металлический инструментальный ящик с замком', 'cost': 10000},
          {'name': 'Изготовление цистерны (обечайки и днищ) из стали толщиной 5 мм вместо 4 мм', 'cost': 30000},
          {'name': 'Калибровка цистерны объемом 10 куб.м.', 'cost': 15000},
          {'name': 'Установка спального места на шасси', 'cost': 90000},
          {'name': 'Установка ДЗК за кабину', 'cost': 25000},
          {'name': 'Автономный отопитель кабины Планар-4Д, 24 В', 'cost': 25000},
          {'name': 'Установка тахографа с блоком СКЗИ', 'cost': 50000},
          {'name': 'Установка ГЛОНАСС', 'cost': 12000}
        ]
      }
    ]
  },
  computed: {
    totals: function(){
      return parseInt(this.costAuto) + parseInt(this.chassisCost) + parseInt(this.pumpCost) + parseInt(this.optionsCost);
    },
  },
  created: function () {
    this.nameAuto = this.autos[0].name + ' ' + this.autos[0].descr;
    this.costAuto = this.autos[0].cost;
    this.image = this.autos[0].image;
    this.chassis = this.autos[0].chassis;
    this.chassisName = this.chassis[0].text;
    this.chassisCost = this.chassis[0].id;
    this.pump = this.autos[0].pump;
    this.pumpName = this.pump[0].text;
    this.pumpCost = this.pump[0].id;
    this.options = this.autos[0].options;
  },
  methods: {
    loadAuto: function (i) {
      [].forEach.call( this.$el.querySelectorAll('.autos__auto') , function(elem) {
        elem.classList.remove('active');
      });
      this.$el.querySelectorAll('.autos__auto')[i].classList.add('active');
      this.nameAuto = this.autos[i].name + ' ' + this.autos[i].descr;
      this.costAuto = this.autos[i].cost;
      this.image = this.autos[i].image;
      this.chassis = this.autos[i].chassis;
      this.chassisName = this.chassis[0].text;
      this.chassisCost = this.chassis[0].id;
      this.pump = this.autos[i].pump;
      this.pumpName = this.pump[0].text;
      this.pumpCost = this.pump[0].id;
      this.options = this.autos[i].options;
      [].forEach.call( this.$el.querySelectorAll('.options input') , function(elem) {
        elem.checked = false;
      });
      this.optionsListChecked = [];
    },
    chassisSelect: function (event) {
      this.chassisName = this.chassis[event.target.selectedIndex].text;
    },
    pumpSelect: function (event) {
      this.pumpName = this.pump[event.target.selectedIndex].text;
    },
    optionsChoice: function (event) {
      this.optionsListChecked = [];
      var total = 0;
      var newthis = this;
      [].forEach.call( this.$el.querySelectorAll('.options input') , function(elem) {
        if (elem.checked) {
          newthis.optionsListChecked.push({'name': elem.parentElement.innerText, 'val': elem.value});
        }
      });
      this.optionsListChecked.forEach(function(elem){
        total+= parseInt(elem.val);
      });
      this.optionsCost = total;
    }
  }
});
