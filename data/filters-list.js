const statuses = [
  {
    name: 'Період уточнень',
    id: 'active.enquiries'
  },
  {
    name: 'Прекваліфікація',
    id: 'active.pre-qualification'
  },
  {
    name: 'Подання пропозицій',
    id: 'active.tendering'
  },
  {
    name: 'Прекваліфікація (період оскарження)',
    id: 'active.pre-qualification.stand-still'
  },
  {
    name: 'Аукціон',
    id: 'active.auction'
  },
  {
    name: 'Кваліфікація переможця',
    id: 'active.qualification'
  },
  {
    name: 'Кваліфікація переможця (період оскарження)',
    id: 'active.qualification.stand-still'
  },
  {
    name: 'Пропозиції розглянуті',
    id: 'active.awarded'
  },
  {
    name: 'Торги не відбулися',
    id: 'unsuccessful'
  },
  {
    name: 'Торги відмінено',
    id: 'cancelled'
  },
  {
    name: 'Завершена',
    id: 'cancelled'
  },
  {
    name: 'Підготовка угоди',
    id: 'active'
  },
  {
    name: 'Підготовка до 2-го етапу',
    id: 'active.stage2.pending'
  },
  {
    name: 'Створення 2-го етапу',
    id: 'active.stage2.waiting'
  },
]

const procTypes = [
  {
    name: 'Спрощена закупівля',
    id: 'belowThreshold'
  },
  {
    name: 'Відкриті торги з особливостями',
    id: 'aboveThreshold'
  },
  {
    name: 'Відкриті торги',
    id: 'aboveThresholdUA'
  },
  {
    name: 'Відкриті торги з публікацією англійською мовою',
    id: 'aboveThresholdEU'
  },
  {
    name: 'Переговорна процедура',
    id: 'negotiation'
  },
  {
    name: 'Переговорна процедура (скорочена)',
    id: 'negotiation.quick'
  },
  {
    name: 'Переговорна процедура для потреб оборони',
    id: 'aboveThresholdUA.defense'
  },
  {
    name: 'Конкурентний діалог 1-ий етап',
    id: 'competitiveDialogueUA'
  },
  {
    name: 'Конкурентний діалог з публікацією англійською мовою 1-ий етап',
    id: 'competitiveDialogueEU'
  },
  {
    name: 'Конкурентний діалог 2-ий етап',
    id: 'competitiveDialogueUA.stage2'
  },
  {
    name: 'Конкурентний діалог з публікацією англійською мовою 2-ий етап',
    id: 'competitiveDialogueEU.stage2'
  },
  {
    name: 'Закупівля без використання електронної системи',
    id: 'reporting'
  },
  {
    name: 'Відкриті торги для закупівлі енергосервісу',
    id: 'esco'
  },
  {
    name: 'Укладання рамкової угоди',
    id: 'closeFrameworkAgreementUA'
  },
  {
    name: 'Відбір для закупівлі за рамковою угодою',
    id: 'closeFrameworkAgreementSelectionUA'
  },
  {
    name: 'Запит (ціни) пропозицій',
    id: 'priceQuotation'
  },
  {
    name: 'Спрощені торги із застосуванням електронної системи закупівель',
    id: 'simple.defense'
  }
]

const regions = [
  {
    name: 'місто Севастополь',
    id: '99'
  },
  {
    name: 'місто Київ',
    id: '1-6'
  },
  {
    name: 'Київська область',
    id: '7-9'
  },
  {
    name: 'Луганська область',
    id: '91-94'
  },
  {
    name: 'Полтавська область',
    id: '36-39'
  },
  {
    name: 'Житомирська область',
    id: '10-13'
  },
  {
    name: 'Волинська область',
    id: '43-45'
  },
  {
    name: 'Львівська область',
    id: '79-82'
  },
  {
    name: 'Чернівецька область',
    id: '58-60'
  },
  {
    name: 'Донецька область',
    id: '83-87'
  },
  {
    name: 'Черкаська область',
    id: '18-20'
  },
  {
    name: 'Харківська область',
    id: '61-64'
  },
  {
    name: 'Сумська область',
    id: '40-42'
  },
  {
    name: 'Автономна Республіка Крим',
    id: '95-98'
  },
  {
    name: 'Кіровоградська область',
    id: '25-28'
  },
  {
    name: 'Закарпатська область',
    id: '88-90'
  },
  {
    name: 'Хмельницька область',
    id: '29-32'
  },
  {
    name: 'Одеська область',
    id: '65-68'
  },
  {
    name: 'Чернігівська область',
    id: '14-17'
  },
  {
    name: 'Тернопільська область',
    id: '46-48'
  },
  {
    name: 'Івано-Франківська область',
    id: '76-78'
  },
  {
    name: 'Херсонська область',
    id: '73-75'
  },
  {
    name: 'Вінницька область',
    id: '21-24'
  },
  {
    name: 'Миколаївська область',
    id: '54-57'
  },
  {
    name: 'Рівненська область',
    id: '33-35'
  },
  {
    name: 'Дніпропетровська область',
    id: '49-53'
  },
  {
    name: 'Запорізька область',
    id: '69-72'
  },
]

module.exports = {
  statuses,
  procTypes,
  regions
}