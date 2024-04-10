const api = require('api');
const {
    VK,
    MarketAttachment,
    MessageContext,
    Context,
    Attachment,
    Keyboard
} = require('vk-io');
const vk = new VK({
    token: '',
    pollingGroupId: 183634840
});
const commands = [];
const { HearManager } = require('@vk-io/hear')
const { QuestionManager } = require('vk-io-question')
const hearManager = new HearManager('<MessageContext>')
const questionManager = new QuestionManager()
vk.updates.use(questionManager.middleware)
vk.updates.on('message_new', hearManager.middleware)
const request = require('prequest');
const kazna = require('./base/kazna.json');
const empty = require("./function/empty.js");
const utils = require("./utils/utils.js");

const http = require('http'); 
const requests = require("request");
const rq = require("prequest");
const fs = require("fs"); 
const https = require('https'); 
const express = require("express");
const bodyParser = require("body-parser");




let giving = false;
const cars = [{
        name: 'Ferrari Enzo V5',
        cost: 1000000,
        id: 1
    },
    {
        name: 'Bugatti Chiron',
        cost: 2200000,
        id: 2
    },
    {
        name: 'McLaren F1',
        cost: 30000000,
        id: 3
    },
    {
        name: 'Lamborghini Avendator',
        cost: 41000000,
        id: 4
    },
    {
        name: 'SSC Tuatara',
        cost: 59000000,
        id: 5
    },
    {
        name: 'Bugatti Veryon',
        cost: 80000000,
        id: 6
    },
    {
        name: 'Лада Нива',
        cost: 100000000,
        id: 7
    },
    {
        name: 'Лада Калина',
        cost: 300000000,
        id: 8
    }
];

const yachts = [{
        name: 'Ванна',
        cost: 10000,
        id: 1
    },
    {
        name: 'Nauticat 331',
        cost: 10000000,
        id: 2
    },
    {
        name: 'Nordhavn 56 MS',
        cost: 15000000,
        id: 3
    },
    {
        name: 'Princess 60',
        cost: 25000000,
        id: 4
    },
    {
        name: 'Azimut 70',
        cost: 35000000,
        id: 5
    },
    {
        name: 'Dominator 40M',
        cost: 50000000,
        id: 6
    },
    {
        name: 'Moonen 124',
        cost: 60000000,
        id: 7
    },
    {
        name: 'Wider 150',
        cost: 65000000,
        id: 8
    },
    {
        name: 'Palmer Johnson 42M SuperSport',
        cost: 80000000,
        id: 9
    },
    {
        name: 'Wider 165',
        cost: 85000000,
        id: 10
    },
    {
        name: 'Eclipse',
        cost: 150000000,
        id: 11
    },
    {
        name: 'Dubai',
        cost: 300000000,
        id: 12
    },
    {
        name: 'Streets of Monaco',
        cost: 750000000,
        id: 13
    }
];

const stranas = [

    {
        name: 'Не указана',
        cost: 0,
        id: 1
    },
    {
        name: '🇺🇸США',
        cost: 0,
        id: 2
    },

    {
        name: '🇷🇺Россия',
        cost: 0,
        id: 3
    },

    {
        name: '🇰🇷Япония',
        cost: 0,
        id: 4
    },

    {
        name: '🇺🇦Украина',
        cost: 0,
        id: 5
    },
    {
        name: '🇰🇿Казахстан',
        cost: 0,
        id: 6
    },
    {
        name: '🇧🇾Белоруссия',
        cost: 0,
        id: 7
    }
];

const airplanes = [{
        name: 'Параплан',
        cost: 100000,
        id: 1
    },
    {
        name: 'АН-2',
        cost: 350000,
        id: 2
    },
    {
        name: 'Cessna-172E',
        cost: 700000,
        id: 3
    },
    {
        name: 'Supermarine Spitfire',
        cost: 1000000,
        id: 4
    },
    {
        name: 'BRM NG-5',
        cost: 1400000,
        id: 5
    },
    {
        name: 'Cessna T210',
        cost: 2600000,
        id: 6
    },
    {
        name: 'Beechcraft 1900D',
        cost: 5500000,
        id: 7
    },
    {
        name: 'Cessna 550',
        cost: 8000000,
        id: 8
    },
    {
        name: 'Hawker 4000',
        cost: 22400000,
        id: 9
    },
    {
        name: 'Learjet 31',
        cost: 45000000,
        id: 10
    },
    {
        name: 'Airbus A318',
        cost: 85000000,
        id: 11
    },
    {
        name: 'F-35A',
        cost: 160000000,
        id: 12
    },
    {
        name: 'Boeing 747-430 Custom',
        cost: 225000000,
        id: 13
    },
    {
        name: 'C-17A Globemaster III',
        cost: 350000000,
        id: 14
    },
    {
        name: 'F-22 Raptor',
        cost: 400000000,
        id: 15
    },
    {
        name: 'Airbus 380 Custom',
        cost: 600000000,
        id: 16
    },
    {
        name: 'B-2 Spirit Stealth Bomber',
        cost: 1359000000,
        id: 17
    }
];

const helicopters = [{
        name: 'Шарик с пропеллером',
        cost: 2,
        id: 1
    },
    {
        name: 'RotorWay Exec 162F',
        cost: 300000,
        id: 2
    },
    {
        name: 'Robinson R44',
        cost: 450000,
        id: 3
    },
    {
        name: 'Hiller UH-12C',
        cost: 1300000,
        id: 4
    },
    {
        name: 'AW119 Koala',
        cost: 2500000,
        id: 5
    },
    {
        name: 'MBB BK 117',
        cost: 4000000,
        id: 6
    },
    {
        name: 'Eurocopter EC130',
        cost: 7500000,
        id: 7
    },
    {
        name: 'Leonardo AW109 Power',
        cost: 10000000,
        id: 8
    },
    {
        name: 'Sikorsky S-76',
        cost: 15000000,
        id: 9
    },
    {
        name: 'Bell 429WLG',
        cost: 19000000,
        id: 10
    },
    {
        name: 'NHI NH90',
        cost: 35000000,
        id: 11
    },
    {
        name: 'Kazan Mi-35M',
        cost: 60000000,
        id: 12
    },
    {
        name: 'Bell V-22 Osprey',
        cost: 135000000,
        id: 13
    }
];

const homes = [{
        name: 'Коттедж Медведева',
        cost: 4500000,
        id: 1
    },
    {
        name: 'Особняк Порошенко',
        cost: 7250000,
        id: 2
    },
    {
        name: 'Дом на Рублёвке',
        cost: 10000000,
        id: 3
    },
    {
        name: 'Личный небоскрёб Tramp',
        cost: 15000000,
        id: 4
    },
    {
        name: 'Остров с особняком',
        cost: 19500000,
        id: 5
    },
    {
        name: 'Белый дом Путина',
        cost: 23000000,
        id: 6
    }
];

const apartments = [{
        name: 'Чердак',
        cost: 15000,
        id: 1
    },
    {
        name: 'Квартира в общежитии',
        cost: 55000,
        id: 2
    },
    {
        name: 'Однокомнатная квартира',
        cost: 175000,
        id: 3
    },
    {
        name: 'Двухкомнатная квартира',
        cost: 260000,
        id: 4
    },
    {
        name: 'Четырехкомнатная квартира',
        cost: 500000,
        id: 5
    },
    {
        name: 'Квартира в центре Москвы',
        cost: 1600000,
        id: 6
    },
    {
        name: 'Двухуровневая квартира',
        cost: 4000000,
        id: 7
    },
    {
        name: 'Квартира с Евроремонтом',
        cost: 6000000,
        id: 8
    }
];

const phones = [{
        name: 'Nokia 108',
        cost: 2500,
        id: 1
    },
    {
        name: 'Nokia 3310 (2017)',
        cost: 5000,
        id: 2
    },
    {
        name: 'ASUS ZenFone 4',
        cost: 20000,
        id: 3
    },
    {
        name: 'BQ Aquaris X',
        cost: 100000,
        id: 4
    },
    {
        name: 'Sony Xperia XA',
        cost: 150000,
        id: 5
    },
    {
        name: 'Samsung Galaxy S8',
        cost: 300000,
        id: 6
    },
    {
        name: 'Xiaomi Mi Mix',
        cost: 500000,
        id: 7
    },
    {
        name: 'Torex FS1',
        cost: 750000,
        id: 8
    },
    {
        name: 'iPhone X',
        cost: 2500000,
        id: 9
    }
];

const pets = [{
        name: 'Улитка',
        cost: 1000,
        id: 1
    },
    {
        name: 'Лягушка',
        cost: 25000,
        id: 2
    },
    {
        name: 'Заяц',
        cost: 500000,
        id: 3
    },
    {
        name: 'Свинья',
        cost: 300000000,
        id: 4
    },
    {
        name: 'Лиса',
        cost: 1250000000,
        id: 5
    },
    {
        name: 'Собака',
        cost: 5000000000,
        id: 6
    },
    {
        name: 'Панда',
        cost: 30000000000,
        id: 7
    },
    {
        name: 'Ястреб',
        cost: 180000000000,
        id: 8
    }
];


const petsupd = [{
        cost: 2000,
        id: 1
    },
    {
        cost: 50000,
        id: 2
    },
    {
        cost: 1000000,
        id: 3
    },
    {
        cost: 600000000,
        id: 4
    },
    {
        cost: 2500000000,
        id: 5
    },
    {
        cost: 10000000000,
        id: 6
    },
    {
        cost: 60000000000,
        id: 7
    },
    {
        cost: 360000000000,
        id: 8
    }
];

const farms = [{
        name: 'деревянная кирка',
        cost: 20500000,
        id: 1
    },
    {
        name: 'каменная кирка',
        cost: 100000000,
        id: 2
    },
    {
        name: 'железная  кирка',
        cost: 900000000,
        id: 3
    },
    {
        name: 'алмазная кирка',
        cost: 1000000000,
        id: 4
    }
];

const businesses = [
    [ // Бизнес #1
        { // Стандартный бизнес
            name: 'Шаурмечная',
            cost: 50000,
            earn: 200,
            workers: 1,
            id: 1,
            icon: '🥖'
        },

        { // Первое улучшение
            name: '5 шаурмечных',
            cost: 350000,
            earn: 1000,
            workers: 10,
            id: 1,
            icon: '🥖'
        },

        { // Второе улучшение
            name: 'Небольшая сеть шаурмечных',
            cost: 900000,
            earn: 2625,
            workers: 30,
            id: 1,
            icon: '🥖'
        },

        { // 3 улучшение
            name: 'Средняя сеть шаурмечных',
            cost: 1200000,
            earn: 3750,
            workers: 50,
            id: 1,
            icon: '🥖'
        },

        { // Последнее улучшение
            name: 'Лучшая шаурма в стране',
            cost: 4000000,
            earn: 11000,
            workers: 200,
            id: 1,
            icon: '🥖'
        }
    ],

    [{
            name: 'Ларёк',
            cost: 100000,
            earn: 700,
            workers: 1,
            id: 2,
            icon: '🏪'
        },

        {
            name: '5 ларьков',
            cost: 500000,
            earn: 3700,
            workers: 5,
            id: 2,
            icon: '🏪'
        },

        {
            name: 'Средняя сеть ларьков',
            cost: 950000,
            earn: 7725,
            workers: 40,
            id: 2,
            icon: '🏪'
        },

        {
            name: 'Ларьки во всех городах страны',
            cost: 8000000,
            earn: 37450,
            workers: 150,
            id: 2,
            icon: '🏪'
        },

        {
            name: 'Ларьки в каждой стране',
            cost: 17500000,
            earn: 79950,
            workers: 400,
            id: 2,
            icon: '🏪'
        }
    ],

    [{
            name: 'Забегаловка',
            cost: 300000,
            earn: 2700,
            workers: 3,
            id: 3,
            icon: '🍷'
        },

        {
            name: 'Общепит',
            cost: 450000,
            earn: 4350,
            workers: 7,
            id: 3,
            icon: '🍷'
        },

        {
            name: 'Ресторан',
            cost: 450000,
            earn: 7400,
            workers: 15,
            id: 3,
            icon: '🍷'
        },

        {
            name: 'Небольшая сеть ресторанов',
            cost: 4000000,
            earn: 19900,
            workers: 80,
            id: 3,
            icon: '🍷'
        },

        {
            name: 'Лучшие рестораны в стране',
            cost: 11000000,
            earn: 47400,
            workers: 300,
            id: 3,
            icon: '🍷'
        }
    ],

    [{
            name: 'Мини-магазин',
            cost: 500000,
            earn: 4100,
            workers: 15,
            id: 4,
            icon: '🏫'
        },

        {
            name: 'Магазин',
            cost: 1250000,
            earn: 9350,
            workers: 10,
            id: 4,
            icon: '🏫'
        },

        {
            name: 'Сеть магазинов',
            cost: 3000000,
            earn: 23350,
            workers: 70,
            id: 4,
            icon: '🏫'
        },

        {
            name: 'Сеть супермаркетов',
            cost: 20000000,
            earn: 109850,
            workers: 500,
            id: 4,
            icon: '🏫'
        }
    ],

    [{
            name: 'Завод в гараже',
            cost: 1500000,
            earn: 8800,
            workers: 5,
            id: 5,
            icon: '🏭'
        },

        {
            name: 'Средний завод',
            cost: 3500000,
            earn: 13800,
            workers: 20,
            id: 5,
            icon: '🏭'
        },

        {
            name: 'Сеть заводов',
            cost: 15000000,
            earn: 60800,
            workers: 200,
            id: 5,
            icon: '🏭'
        },

        {
            name: 'Главные заводы страны',
            cost: 50000000,
            earn: 274800,
            workers: 1000,
            id: 5,
            icon: '🏭'
        }
    ],

    [{
            name: 'Угольная шахта',
            cost: 25000000,
            earn: 84700,
            workers: 50,
            id: 6,
            icon: '⛏'
        },

        {
            name: 'Золотая шахта',
            cost: 50000000,
            earn: 117200,
            workers: 75,
            id: 6,
            icon: '⛏'
        },

        {
            name: 'Алмазная шахта',
            cost: 60000000,
            earn: 229700,
            workers: 200,
            id: 6,
            icon: '⛏'
        },

        {
            name: 'Алмазный карьер',
            cost: 90000000,
            earn: 432700,
            workers: 360,
            id: 6,
            icon: '⛏'
        },

        {
            name: 'Крупнейший алмазный карьер',
            cost: 200000000,
            earn: 709700,
            workers: 700,
            id: 6,
            icon: '⛏'
        }
    ],

    [{
            name: 'Маленький офис',
            cost: 80000000,
            earn: 229625,
            workers: 10,
            id: 7,
            icon: '🏢'
        },

        {
            name: 'Средний офис',
            cost: 240000000,
            earn: 329175,
            workers: 60,
            id: 7,
            icon: '🏢'
        },

        {
            name: 'Большой офис',
            cost: 240000000,
            earn: 614675,
            workers: 200,
            id: 7,
            icon: '🏢'
        },

        {
            name: 'Офис-небоскрёб',
            cost: 1000000000,
            earn: 1227275,
            workers: 700,
            id: 7,
            icon: '🏢'
        }
    ],

    [{
            name: 'Любительский GameDev',
            cost: 150000000,
            earn: 302000,
            workers: 5,
            id: 8,
            icon: '🕹'
        },

        {
            name: 'Инди GameDev',
            cost: 200000000,
            earn: 379500,
            workers: 10,
            id: 8,
            icon: '🕹'
        },

        {
            name: 'AA GameDev',
            cost: 750000000,
            earn: 1024500,
            workers: 50,
            id: 8,
            icon: '🕹'
        },

        {
            name: 'AAA GameDev',
            cost: 5000000000,
            earn: 6749500,
            workers: 500,
            id: 8,
            icon: '🕹'
        }
    ],

    [{
            name: 'Нефтевышка',
            cost: 500000000,
            earn: 707000,
            workers: 8,
            id: 9,
            icon: '🏜'
        },

        {
            name: 'Нефтеплатформа в море',
            cost: 750000000,
            earn: 1019000,
            workers: 20,
            id: 9,
            icon: '🏜'
        },

        {
            name: 'Нефтеплатформа в океане',
            cost: 1250000000,
            earn: 4049000,
            workers: 50,
            id: 9,
            icon: '🏜'
        },

        {
            name: '5 нефтеплатформ в океане',
            cost: 5000000000,
            earn: 15249000,
            workers: 250,
            id: 9,
            icon: '🏜'
        }
    ],

    [{
            name: 'Мини АЭС',
            cost: 800000000,
            earn: 1050700,
            workers: 40,
            id: 10,
            icon: '💡'
        },

        {
            name: 'Средняя АЭС',
            cost: 1200000000,
            earn: 1496200,
            workers: 75,
            id: 10,
            icon: '💡'
        },

        {
            name: 'АЭС с 5 энергоблоками',
            cost: 4250000000,
            earn: 3088700,
            workers: 300,
            id: 10,
            icon: '💡'
        },

        {
            name: 'Крупнейшая АЭС',
            cost: 10000000000,
            earn: 34843700,
            workers: 650,
            id: 10,
            icon: '💡'
        }
    ],

    [{
            name: 'Apple Store',
            cost: 25000000000,
            earn: 250000000,
            workers: 75,
            id: 11,
            icon: '🗺'
        },

        {
            name: 'Магазин Apple',
            cost: 3000000000000,
            earn: 1000000000,
            workers: 150,
            id: 11,
            icon: '🗺'
        },

        {
            name: 'Центральный Apple Store',
            cost: 9000000000000,
            earn: 5000000000,
            workers: 250,
            id: 11,
            icon: '🗺'
        },

        {
            name: 'Завод Apple',
            cost: 20000000000000,
            earn: 11000000000,
            workers: 500,
            id: 11,
            icon: '🗺'
        },

        {
            name: 'Заводы Apple по всему миру',
            cost: 100000000000000,
            earn: 45000000000,
            workers: 1000,
            id: 11,
            icon: '🗺'
        },

        {
            name: 'Заводы Apple по всему миру',
            cost: 200000000000000,
            earn: 55000000000,
            workers: 1500,
            id: 11,
            icon: '🗺'
        }
    ]
];
const works = [{
        name: 'Работник в Орифлейм',
        requiredLevel: 1,
        min: 1000,
        max: 3000,
        id: 1
    },
    {
        name: 'Программист в ITM',
        requiredLevel: 3,
        min: 7158,
        max: 12858,
        id: 2
    },
    {
        name: 'Уборщик в IT школе',
        requiredLevel: 5,
        min: 10000,
        max: 16000,
        id: 3
    },
    {
        name: 'Работник в Роскомнадзоре',
        requiredLevel: 6,
        min: 17000,
        max: 19000,
        id: 4
    },
    {
        name: 'Уборщик в Роскомнадзоре',
        requiredLevel: 7,
        min: 20000,
        max: 25000,
        id: 5
    },
    {
        name: 'Программист в Kaspersky',
        requiredLevel: 8,
        min: 10000,
        max: 50890,
        id: 6
    },
    {
        name: 'Зам.Президента IT школы',
        requiredLevel: 9,
        min: 50000,
        max: 78000,
        id: 7
    },
    {
        name: 'Президент IT школы',
        requiredLevel: 10,
        min: 125000,
        max: 135000,
        id: 8
    },
    {
        name: 'Основатель RuNet',
        requiredLevel: 14,
        min: 90000,
        max: 110000,
        id: 9
    },
    {
        name: 'Основатель DarkNet',
        requiredLevel: 15,
        min: 160000,
        max: 175000,
        id: 10
    },
    {
        name: 'Основатель Яндекса',
        requiredLevel: 16,
        min: 260534,
        max: 300436,
        id: 11
    },
    {
        name: 'Основатель Google',
        requiredLevel: 20,
        min: 634808,
        max: 1177088,
        id: 12
    }
];

const prefix = [{
        name: 'Нету',
        cost: 100,
        id: 1
    },
    {
        name: '💰Фортун💰',
        cost: 350,
        id: 2
    },
    {
        name: '💎Фартовый💎',
        cost: 500,
        id: 3
    },
    {
        name: '👑Мажор👑',
        cost: 750,
        id: 4
    },
    {
        name: '✨Топовая тян✨',
        cost: 50,
        id: 5
    },
    {
        name: '💰Сквайр💰',
        cost: 1000,
        id: 6
    },
    {
        name: '👻Призрачный👻',
        cost: 1200,
        id: 7
    },
    {
        name: '👔Джентльмен👔',
        cost: 1450,
        id: 8
    },
    {
        name: '🎅Новогодний🎅',
        cost: 1650,
        id: 9
    },
    {
        name: '🐧Пингвинутый🐧',
        cost: 1800,
        id: 10
    },
    {
        name: '🎓Всезнайка🎓',
        cost: 2050,
        id: 11
    },
    {
        name: '🌚Лучик Солнца🌝',
        cost: 2350,
        id: 12
    },
    {
        name: '🐾Котенок🐾',
        cost: 2650,
        id: 13
    },
    {
        name: '😇Боженька😇',
        cost: 5000,
        id: 14
    },
    {
        name: '|🔧|JavaScript|💻|Coder|🔧|',
        cost: 500000,
        id: 15
    }
];

const rotateText = {
    q: 'q',
    w: 'ʍ',
    e: 'ǝ',
    r: 'ɹ',
    t: 'ʇ',
    y: 'ʎ',
    u: 'u',
    i: 'ᴉ',
    o: 'o',
    p: 'p',
    a: 'ɐ',
    s: 's',
    d: 'd',
    f: 'ɟ',
    g: 'ƃ',
    h: 'ɥ',
    j: 'ɾ',
    k: 'ʞ',
    l: 'l',
    z: 'z',
    x: 'x',
    c: 'ɔ',
    v: 'ʌ',
    b: 'b',
    n: 'n',
    m: 'ɯ',

    й: 'ņ',
    ц: 'ǹ',
    у: 'ʎ',
    к: 'ʞ',
    е: 'ǝ',
    н: 'н',
    г: 'ɹ',
    ш: 'm',
    щ: 'm',
    з: 'ε',
    х: 'х',
    ъ: 'q',
    ф: 'ф',
    ы: 'ıq',
    в: 'ʚ',
    а: 'ɐ',
    п: 'u',
    р: 'd',
    о: 'о',
    л: 'v',
    д: 'ɓ',
    ж: 'ж',
    э: 'є',
    я: 'ʁ',
    ч: 'һ',
    с: 'ɔ',
    м: 'w',
    и: 'и',
    т: 'ɯ',
    ь: 'q',
    б: 'ƍ',
    ю: 'oı'
}

let btc = 3000;
let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

const promo = require('./base/promo.json');
const users = require('./users.json');
const {
    on
} = require('events');
const {
    SSL_OP_NO_TLSv1_1
} = require('constants');
const ms = require('ms');
const { error } = require('console');
let buttons = [];

setTimeout(async () => {
    const rq = await request('https://api.bitfinex.com/v1/pubticker/BTCUSD');

    if (!rq.ticker) return;
    if (!rq.ticker.price) return;

    btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
    const rq = await request('https://api.bitfinex.com/v1/pubticker/BTCUSD');

    if (!rq.ticker) return;
    if (!rq.ticker.price) return;

    btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
    await saveUsers();
    console.log('Server Save');
}, 95000);

setInterval(async () => {
    users.filter(x => x.misc.farm !== 0).map(x => {
        if (x.misc.farm === 1) {
            x.farm_btc += 20000;
        }

        if (x.misc.farm === 2) {
            x.farm_btc += 50000;
        }

        if (x.misc.farm === 3) {
            x.farm_btc += 80000;
        }
        if (x.misc.farm === 4) {
            x.farm_btc += 100000;
        }
    });
}, 900000);


setInterval(async () => {
    users.map(user => {
        for (var i = 0; i < user.business.length; i++) {
            const biz = businesses[user.business[i].id - 1][user.business[i].upgrade - 1];
            user.business[i].moneys += Math.floor(biz.earn / biz.workers * user.business[i].workers)
        }
    });
}, 3600000);

setInterval(async () => {
    users.map(user => {
        if (user.business) {
            const biz = businesses.find(x => x.id === user.business);
            if (!biz) return;

            user.biz += biz.earn;
        }
    });
}, 3600000);




function rand(min, max) {
    return Math.round(Math.random() * (max - min)) + min
}

function check(num) {
    if (num == 1) return "Открытый"
    if (num == 2) return "Закрытый"
}

function filter(text) {
    var filter0 = text.replace(/(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/ig, "<LINK REMOVED>")
    var filter1 = filter0.replace(/(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.|ТЕСТЕР|Павел Дуров)/ig, '[Запрещено]')
    return filter1
}




async function saveUsers() {
    require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
    return true;
}

async function saveKazna() {
    require('fs').writeFileSync('./base/kazna.json', JSON.stringify(users, null, '\t'));
    return true;
}


const {
    updates,
    snippets
} = vk;

updates.startPolling();
updates.on('message', async (message) => {
    if (Number(message.senderId) <= 0) return;
    if (/\[club183634840\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club183634840\|(.*)\]/ig, '').trim();

    if (!users.find(x => x.id === message.senderId)) {
        const [user_info] = await vk.api.users.get({
            user_id: message.senderId
        });
        const date = new Date();

        users.push({
            id: message.senderId,
            uid: users.length,
            roleplay: 0,
            test1: 0,
            test2: 0,
            test3: 0,
            test4: 0,
            test5: 0,
            test6: 0,
            test7: 0,
            test8: 0,
            test9: 0,
            test10: 0,
            test11: 0,
            test12: 0,
            test13: 0,
            test14: 0,
            test15: 0,
            test16: 0,
            test17: 0,
            test18: 0,
            test19: 0,
            test20: 0,
            test21: 0,
            test22: 0,
            test23: 0,
            test24: true,
            test25: false,
            test26: 1,
            podpis: 0,
            hei: 0,
            video: 0,
            kanal: false,
            knser: false,
            mikro: false,
            serkn: false,
            kakake: false,
            opit: 0,
            uggg: false,
            vivi: false,
            fggg: false,
            bonus_balance: false,
            xxxkn: false,
            herkn: false,
            bcase: false,
            orcase: false,
            huikn: false,
            govkn: false,
            gerkn: false,
            gggkn: false,
            zolkn: false,
            brilkn: false,
            monit: false,
            prosm: 0,
            dizlike: 0,
            kom: 0,
            global_podpis: 0,
            huih: 0,
            cers: 0,
            name: `Имя буд канала`,
            bbbb: 0,
            monk: false,
            podarki: 10,
            kaki: false,
            cip: 0,
            his: 0,
            like: 0,
            obor: false,
            balance: 1000,
            rubins: 0,
            bank: 0,
            diamonds: 0,
            emeralds: 0,
            verify: 0,
            pass: 0,
            coal: 0,
            a_war: false,
            iron: 0,
            uron: 0,
            war: false,
            cardgames: 0,
            hero_id: false,
            hero_name: `Герой не выбран`,
            hero_hp: 100,
            hero_zashita: 8,
            hero_ataka: 10,
            hero_kr_udar: 4,
            gold: 0,
            btc: 0,
            farm_btc: 0,
            straik: 0,
            prefix: 1,
            energy: 10,
            pay: false,
            gold: 0,
            biz: 0,
            ruda: 0,
            alvl: 0,
            givemyrub: false,
            stat: false,
            urabota: false,
            ymoney: 0,
            warns: 0,
            warn: 0,
            warn_p: `Нет`,
            rating: 0,
            regDate: `${date.getDate() < 10 ? [0] + (date.getDate() + 1) : date.getDate()}.${date.getMonth() < 10 ? [0] + (date.getMonth() + 1) : date.getMonth()}.${date.getFullYear()}`,
            mention: true,
            ban: false,
            timers: {
                translation: false,
                commands: false,
                clanwar: false,
                delacc: false,
                obva: false,
                blockpay: false,
                krik: false,
                mine: false,
                hasWorked: false,
                bonus: false,
                poxod: false,
                poxod2: false,
                shaxta: false,
            },
            tag: user_info.first_name,
            work: 0,
            sword: false,
            eda: false,
            times: false,
            call: 0,
            clan: 0,
            clans: [],
            ccard: false,
            business: [],
            bpriglos: 0,
            gpriglos: 0,
            mer: false,
            pp: 0,
            card: 0,
            seccard: 0,
            cardss: 0,
            messages: true,
            giverub: false,
            mute: false,
            message: 0,
            notifications: true,
            exp: 1,
            level: 1,
            referal: null,
            transport: {
                car: 0,
                yacht: 0,
                airplane: 0,
                strana: 1,
                helicopter: 0
            },
            realty: {
                home: 0,
                apartment: 0
            },
            misc: {
                phone: 0,
                farm: 0,
                farm_count: 0,
                pet: 0
            },
            marriage: {
                partner: 0,
                requests: [],
            },
            pet: {
                lvl: 0,
                poterl: false


            }
        });
    }


    bcase: false,

        message.user = users.find(x => x.id === message.senderId);
    if (message.user.ban) return;

    const bot = (text, params) => {
        return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
    }

    const command = commands.find(x => x[0].test(message.text));
    if (!command) return;

    if (message.user.exp >= 24) {
        message.user.exp = 1;
        message.user.level += 1;
    }

    message.args = message.text.match(command[0]);
    await command[1](message, bot);

    console.log(`Executed: VK_ID: ${message.user.id} ID: ${message.user.uid} Nickname: ${message.user.tag} Message: ${message.text} `)
});

const cmd = {
    on: (p, f) => {
        commands.push([p, f]);
    }
}

cmd.on(/^(?:qрешить|q решить)\s([^]+)$/i, async (message, bot) => {

    try {
        const result = eval(message.args[1]);

        if (typeof(result) === 'string') {
            return bot(` - я выполнил: ${result}`);
        } else if (typeof(result) === 'number') {
            return bot(` - я выполнил: ${result}`);
        } else {
            return bot(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`);
        }
    } catch (e) {
        console.error(e);
        return bot(`ошибка: 
${e.toString()}`);
    }
});

cmd.on(/^(?:qСтрана|q страна)$/i, async (message, bot) => {
    return bot(`Список стран:

	1.❓Не указана
	2.🇺🇸США
	3.🇷🇺Россия
	4.🇰🇷Япония
	5.🇺🇦Украина
	6.🇰🇿Казахстан
	7.🇧🇾Белоруссия
	Для выбора страны проживания введите:Страна [номер]`);
});


cmd.on(/^(?:qСтрана 8|q Страна 8)$/i, async (message, bot) => {
    let prize = utils.pick([1]);

    if (prize === 1) {
        message.user.transport.strana = 8;
        return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
    }
});

cmd.on(/^(?:qСтрана 7|q Страна 7)$/i, async (message, bot) => {
    let prize = utils.pick([1]);

    if (prize === 1) {
        message.user.transport.strana = 7;
        return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
    }
});

cmd.on(/^(?:qСтрана 6|q Страна 6)$/i, async (message, bot) => {
    let prize = utils.pick([1]);

    if (prize === 1) {
        message.user.transport.strana = 6;
        return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
    }
});

cmd.on(/^(?:qСтрана 5|q Страна 5)$/i, async (message, bot) => {
    let prize = utils.pick([1]);

    if (prize === 1) {
        message.user.transport.strana = 5;
        return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
    }
});

cmd.on(/^(?:qСтрана 4|q Страна 4)$/i, async (message, bot) => {
    let prize = utils.pick([1]);

    if (prize === 1) {
        message.user.transport.strana = 4;
        return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
    }
});

cmd.on(/^(?:qСтрана 3|q Страна 3)$/i, async (message, bot) => {
    let prize = utils.pick([1]);

    if (prize === 1) {
        message.user.transport.strana = 3;
        return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
    }
});


cmd.on(/^(?:qСтрана 2|q Страна 2)$/i, async (message, bot) => {
    let prize = utils.pick([1]);

    if (prize === 1) {
        message.user.transport.strana = 1;
        return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
    }
});

cmd.on(/^(?:qСтрана 1|q Страна 1)$/i, async (message, bot) => {
    let prize = utils.pick([1]);

    if (prize === 1) {
        message.user.transport.strana = 2;
        return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан‼`);
    }
});


/////*Ютуб*/////////////

cmd.on(/^(?:qсоздать канал|q создать канал)\s?([^]+)?/i, async (message, args, bot) => {
    let user = message.user
    let zaprets1 = message.args[1].toLowerCase();
    if (message.user.obor == false) return message.send(`${message.user.tag}, У вас нет оборудования!`);
    if (message.user.obor == true) {
        if (message.user.kanal == true) return message.send(`${message.user.tag}, У вас уже есть канал!`);
        if (message.user.kanal == false) {
            var zapret = /(&#4448;|вк бо т |вкботру|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|порно|botvk|ботвк|vkbot|кбот|bot vk)/
            if (zapret.test(zaprets1) == true) {
                return message.send(`${message.user.tag}, Придумайте адекватное название канала`);
            }
            var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
            var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
            var lol = filter0.test(zaprets1)
            var lol1 = filter1.test(zaprets1)
            if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) {
                return message.send(`${message.user.tag}, Придумайте адекватное название канала`);
            }
            if (message.args[1].length > 15) return message.send(`${message.user.tag}, Максимальная длина канала 15 символов.`);
            if (user.balance < 1000000) return message.send(`${message.user.tag} У вас не достаточно денег для создания канала, стоимость 1.000.000р`);
            user.balance -= 1000000;
            user.name = message.args[1];
            user.kanal = true;
            return message.send(`${message.user.tag}, Вы успешно создали канал: ${message.args[1]}`);
        }
    }
});

cmd.on(/^(?:qоборудование|q оборудование)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.obor == true) return message.send(`${message.user.tag}, У тебя уже есть оборудование!`);
    if (message.user.obor == false) {
        if (message.user.balance < 11000) return message.send(`${message.user.tag}, У вас не достаточно денег! Цена оборудования 11.000р.`);
        message.user.balance -= 11000;
        message.user.obor = true;
        return message.send(`${message.user.tag}, Вы успешно купили оборудование для съёмок! Вас ждёт светлое будущее`);
    }
});

cmd.on(/^(?:qканал|qanall|qanal|q канал)$/i, async (message, bot) => {

    let user = message.user
    let id = message.user.id
    if (message.user.kanal == false) return message.send(`(${message.user.tag}), У вас нет канала`);
    if (message.user.kanal == true) {
        return message.send(`
         (${message.user.tag}), твой канал 🔥
       📕 Название: ${message.user.name}
       😻 Подписчиков: ${message.user.podpis}
       🚫 Хейтеров: ${message.user.hei}
       👁 Просмотров: ${message.user.prosm}
       👍 Лайков: ${message.user.like}
       👎 Дизлайков: ${message.user.dizlike}
       💬 Комментариев: ${message.user.kom}
       🎥 Роликов: ${message.user.video}
       ⛔ Страйки: ${message.user.straik}

		Кнопки:\n` +
            (message.user.serkn == false ? ` ` : `Серебрянная кнопка: Получена\n`) +
            (message.user.zolkn == false ? ` ` : `Золотая кнопка: Получена\n`) +
            (message.user.brilkn == false ? ` ` : `Бриллиантовая кнопка: Получена\n`) +
            `
			`);
    }
    return message.send(text)
});

cmd.on(/^(?:qЗавод|q Завод)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id
    if (message.user.urabota == true) return message.send(`${message.user.tag}, Осталось, 5 Мин. `);
    message.user.urabota = true
    setTimeout(() => {
        message.user.urabota = false
    }, 15000);

    text = ' Ухх, тяжелый был денёк😃!\n💰Вы заработали: '
    let count = rand(1, 1);
    for (i = 0; i < count; i++) {
        x = rand(1, 100)
        if (x < 79) {
            mon = rand(100, 200)
            if (message.user.bonus_balance == true) mon = mon * 2;
            text += ` ${spaces(mon)}$\n`
            message.user.ymoney += mon
        }
        if (x > 79 && x < 80) {
            mon = 1
            text += `${spaces(mon)}$\n`
            message.user.ymoney += mon
        }
        if (x > 80) {
            mon = rand(1, 5)
            if (message.user.bonus_exs == true) mon = mon * 2;
            message.user.ymoney += mon
            text += `${mon}$\n`
        }


    }
    return message.send(text)
});

cmd.on(/^(?:qполучить серебряную кнопку|q получить серебряную кнопку)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (messageuser.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (messageuser.kanal == true) {
        if (messageuser.serkn == true) return message.send(`${message.user.tag},Ты уже получал кнопку!`);
        if (messageuser.serkn == false) {
            if (messageuser.podpis < 100000) return message.send(`${message.user.tag}, У вас не достаточно подписчиков. Нужно 100000`);

            message.user.serkn = true;
            return message.send(`${message.user.tag}, Вы получили серебрянную кнопку.`);
        }
    }
});

cmd.on(/^(?:qполучить золотую кнопку|q получить золотую кнопку)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.zolkn == true) return message.send(`${message.user.tag}, Ты уже получал кнопку!`);
        if (message.user.zolkn == false) {
            if (message.user.podpis < 1000000) return message.send(`${message.user.tag}, У вас не достаточно подписчиков. Нужно 1 миллион`);

            message.user.zolkn = true;
            return message.send(`${message.user.tag}, Вы получили золотую кнопку.`);
        }
    }
});

cmd.on(/^(?:qполучить бриллиантовую кнопку|q получить бриллиантовую кнопку)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.message.user.brilkn == true) return message.send(`${message.user.tag}, Ты уже получал кнопку!`);
        if (message.user.brilkn == false) {
            if (message.user.podpis < 10000000) return message.send(`${message.user.tag}, У вас не достаточно подписчиков. Нужно 10 миллионов`);

            message.user.brilkn = true;
            return message.send(`${message.user.tag}, Вы получили брилиантовую кнопку.`);
        }
    }
});

cmd.on(/^(?:qгулять|q гулять)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id
    if (user.vivi == true) return message.send(`${message.user.tag}, Гулять можно раз в 3 часа`);
    user.vivi = true
    setTimeout(() => {
        user.vivi = false
        vk.api.call('messages.send', {
            peer_id: user.id,
            message: `${message.user.tag}, Вы снова можете гулять!"`
        });
    }, 10800000);
    let rez = [1, 2].random();
    if (rez == 1) {
        let text = [].random();
        mones = rand(1000, 4000);
        message.user.balance += mones;
        return message.send(`${message.user.tag}, Гуляя, вы нашли кошелек в говне, в котором лежало ${spaces(mones)}р.`);
    }
    if (rez == 2) {
        let text = [].random();
        hmones = rand(30000, 90000);
        message.user.balance -= hmones;
        return message.send(`${message.user.tag}, Гуляя на Вас напала банда INZEWORLD, на лечение Вы потратили: ${spaces(hmones)}р.`);
    }
});

cmd.on(/^(?:qреклама|q реклама)$/i, async (message, bot) => {
    let user = message.user
    if (message.user.balance == null) return message.send(`⚠ Произошла ошибка ! Пожалуйста, сообщите в репорт.`);
    return message.send(`
    ${message.user.tag}, Хай, хочешь купить рекламу для своего канала😏?

✅Мы - самая надежная и законная компания по продаже рекламы, с нами ты достигнешь высот!

1.Тариф «Старт»:
　📈Прирост: ~ 1.000 сабов
　💸Цена: 15.000р.

2.Тариф «Нормал»:
　📈Прирост: ~ 10.000 сабов
　💸Цена: 75.000р.

3.Тариф «Про»:
　📈Прирост: ~ 100.000 сабов
　💸Цена: 750.000р.

4. Тариф «Мега»:
　💸Прирост: ~ 500.000 сабов
　💸Цена: 3.000.000р.

5. Тариф «Олд»:
　💸Прирост: ~ 1.000.000 сабов
　💸Цена: 30.000.000р.      

6. Тариф «Звезда»:
　💸Прирост: ~ 5.000.000 сабов
　💸Цена: 50.000.000р.      

6. Тариф «INZEWORLD»:
　💸Прирост: ~ 100.000.000 сабов
　💸Цена: 30.000.000.000р.      

🔥Для покупки введите реклама «нужный вам тариф»
　📈 пиши : реклама <нужный тариф»
　________________
  Пример : реклама INZEWORLD

    `)
});


cmd.on(/^(?:qпомощь|q помощь)\s(.*)$/i, async (message, bot) => {
    message.args[1] = message.args[1].toLowerCase();

    if (message.args[1] === 'переверни') {
        return message.send(`Команда "qПереверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
    }

    if (message.args[1] === 'шар') {
        return message.send(`Команда "qШар" используя магию рандома выводит случайное сообщение.`);
    }

    if (message.args[1] === 'инфа') {
        return message.send(`Команда "qИнфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "qШанс" или "qВероятность"`);
    }

    if (message.args[1] === 'выбери') {
        return message.send(`Команда "qВыбери" случайным образом выбирает один из двух предложенных вариантов.`);
    }

    if (message.args[1] === 'казино') {
        return message.send(`Команда "qКазино" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, х2, х5, х50). Чтобы поставить всю сумму введите "qКазино все" или "qКазино вабанк"`);
    }

    if (message.args[1] === 'кубик в жопе') {
        return message.send(`Команда "qКубик в жопе" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение.`);
    }

    if (message.args[1] === 'трейд') {
        return message.send(`Команда "qТрейд" - симулятор бинарных опционов. Введите "qТрейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "qТрейд вниз (сумма)" если будет уменьшаться.`);
    }

    if (message.args[1] === 'стаканчик') {
        return message.send(`С помощью команды "qСтаканчик" вы можете сыграть в аналог игры "Напёрстки". Чтобы играть введите "qСтаканчик [1-3] [сумма]".`);
    }

    if (message.args[1] === 'работа') {
        return message.send(`С помощью команды "qРабота" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "qРаботать"). Для увольнения с работы введите "qУволиться".`);
    }

    if (message.args[1] === 'бизнес') {
        return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		qБизнесы [номер] - купить бизнес
		qБизнес - ваш бизнес
		qБизнес снять - снять деньги со счёта бизнеса
		qПродать бизнес - продажа бизнеса`);
    }

    if (message.args[1] === 'реши') {
        return message.send(`Команда "qРеши" решает ваш пример (qРеши 5 + 5).
		Команда умеет:
		Складывать (+)
		Вычитать (-)
		Умножать (*)
		Делить (/)`);
    }

    if (message.args[1] === 'курс') {
        return message.send(`С помощью команды "qКурс" можно узнать курс блоков на данный момент.`);
    }

    if (message.args[1] === 'профиль') {
        return message.send(`Команда "qПрофиль" выводит вашу  статистику и информацию.`);
    }

    if (message.args[1] === 'баланс') {
        return message.send(`Команда "qБаланс" выводит кол-во рублей на вашем аккаунте.`);
    }


    if (message.args[1] === 'рейтинг') {
        return message.send(`Пустая команда "qРейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000.000р). Рейтинг влияет на ваше положение в топе.`);
    }

    if (message.args[1] === 'ник') {
        return message.send(`С помощью команды "qНик" можно выбрать себе ник. Также, ник можно делать кликабельным/некликабельным в топе "qНик вкл" и "qНик выкл"`);
    }

    if (message.args[1] === 'магазин') {
        return message.send(`Команда "qМагазин" выводит список категорий товаров, которые доступны для покупки.`);
    }

    if (message.args[1] === 'продать') {
        return message.send(`С помощью команды "qПродать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`);
    }

    if (message.args[1] === 'Перевод') {
        return message.send(`Команда "qПеревод" переводит указанную вами сумму любому игроку (qПеревод ${message.user.uid} 1000).`);
    }

    if (message.args[1] === 'топ') {
        return message.send(`Команда "qТоп" выводит 10 игроков с самым большим рейтингом.`);
    }

    if (message.args[1].includes('брак')) {
        return message.send(`Используя команды "qБрак", "qБраки", "qразвод", вы можете жениться/выходить замуж/разводиться.
		qБрак [id] - сделать предложение
		qБраки - список предложений
		qРазвод - ...`);
    }

    if (message.args[1] === 'дата') {
        return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
    }
});




cmd.on(/^(?:qтренды|q тренды)$/i, async (message, bot) => {
    let top = [];

    users.map(x => {
        top.push({
            podpis: x.podpis,
            tag: x.tag,
            id: x.id,
            mention: x.mention
        });
    });

    top.sort((a, b) => {
        return b.podpis - a.podpis;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++) {
            if (top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 5; i++) {
        if (!top[i]) return;
        const user = top[i];

        text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 🎬 ${utils.sp(user.podpis) } подписчиков
		`;
    }

    return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag}, у вас — 🎬 ${utils.sp(message.user.podpis)} сабов`);
});




cmd.on(/^(?:qснять|q снять)\s?([^]+)?/i, async (message, args, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.args[1].length < 2) return message.send(`Слишком мало символов в названии видео!`);
    if (message.args[1].length > 40) return message.send(`Слишком много символов в названии видео!`);
    if (message.user.kanal == false) return message.send(`У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.orcase == true) return message.send(`Снимать можно раз в 10 минут`);
        message.user.orcase = true
        setTimeout(() => {
            message.user.orcase = false
        }, 600000);
        if (message.args[1].length > 60) return message.send(`Максимальная длина ролика 60 символов.`);
        message.user.video += 1;
        mones = 1 + message.user.podpis + 3;
        message.user.ymoney += mones;
        likes = message.user.podpis + 2 - rand(2, 5);
        message.user.like += likes;
        dizlikes = message.user.hei - rand(10, 12);
        message.user.dizlike += dizlikes;
        prosm = 3 + message.user.podpis * rand(4, 6);
        message.user.prosm += prosm;
        podpis = rand(10, 30);
        message.user.podpis += podpis;
        message.user.global_podpis += podpis;
        heit = rand(20, 50);
        message.user.hei += heit;
        kom = 1 + message.user.podpis - rand(2, 3);
        message.user.kom += kom;
        return message.send(`${message.user.tag}, Вы успешно отсняли ролик: ${message.args[1]}\n\n🎬Статистика ролика:\n👁 Просмотров: ${spaces(prosm)}\n👍 Лайков: ${spaces(likes)}\n👎 Дизлайков: ${spaces(dizlikes)}\n💬 Комментариев: ${spaces(kom)}🎬Новых сабов: ${spaces(podpis)}\n🚫 Новых хейтеров: ${spaces(heit)}\n✅Ты на верном пути, продолжай выпускать ролики!:`);
    }
});

cmd.on(/^(?:qреклама старт|q реклама старт)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
        message.user.bcase = true
        setTimeout(() => {
            message.user.bcase = false
        }, 600000);
        if (message.user.balance < 150) return bot(`${message.user.tag}, У вас не достаточно денег.`);
        message.user.ymoney -= 15000;
        podpis = rand(700, 900);
        message.user.podpis += podpis;
        message.user.global_podpis += podpis;
        return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
    }
});

cmd.on(/^(?:qреклама нормал|q реклама нормал)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
        message.user.bcase = true
        setTimeout(() => {
            message.user.bcase = false
        }, 600000);
        if (message.user.balance < 75000) return bot(`${message.user.tag}, У вас не достаточно денег.`);
        message.user.ymoney -= 75000;
        podpis = rand(1000, 5000);
        message.user.podpis += podpis;
        message.user.global_podpis += podpis;
        return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
    }
});

cmd.on(/^(?:qреклама про|q реклама про)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
        message.user.bcase = true
        setTimeout(() => {
            message.user.bcase = false
        }, 600000);
        if (message.user.balance < 750000) return bot(`${message.user.tag}, У вас не достаточно денег.`);
        message.user.ymoney -= 750000;
        podpis = rand(100000, 130000);
        message.user.podpis += podpis;
        message.user.global_podpis += podpis;
        return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
    }
});

cmd.on(/^(?:qреклама мега|q реклама мега)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
        message.user.bcase = true
        setTimeout(() => {
            message.user.bcase = false
        }, 600000);
        if (message.user.balance < 3000000) return bot(`${message.user.tag}, У вас не достаточно денег.`);
        message.user.ymoney -= 3000000;
        podpis = rand(500000, 550000);
        message.user.podpis += podpis;
        message.user.global_podpis += podpis;
        return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
    }
});
cmd.on(/^(?:qреклама олд|q реклама олд)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
        message.user.bcase = true
        setTimeout(() => {
            message.user.bcase = false
        }, 600000);
        if (message.user.balance < 30000000) return bot(`${message.user.tag}, У вас не достаточно денег.`);
        message.user.ymoney -= 30000000;
        podpis = rand(50000, 100000, 50000);
        message.user.podpis += podpis;
        message.user.global_podpis += podpis;
        return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
    }
});
cmd.on(/^(?:qреклама Звезда|q реклама Звезда)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 10 минут `);
        message.user.bcase = true
        setTimeout(() => {
            message.user.bcase = false
        }, 600000);
        if (message.user.balance < 30000000) return bot(`${message.user.tag}, У вас не достаточно денег.`);
        message.user.ymoney -= 30000000;
        podpis = rand(999134, 500000);
        message.user.podpis += podpis;
        message.user.global_podpis += podpis;
        return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
    }
});
cmd.on(/^(?:qреклама INZEWORLD|q реклама INZEWORLD)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У вас нет канала!`);
    if (message.user.kanal == true) {
        if (message.user.bcase == true) return message.send(`${message.user.tag}, Покупать рекламу можно раз в 20 минут `);
        message.user.bcase = true
        setTimeout(() => {
            message.user.bcase = false
        }, 1200000);
        if (message.user.balance < 30000000000) return bot(`${message.user.tag}, У вас не достаточно денег.`);
        message.user.ymoney -= 30000000000;
        podpis = rand(999134, 30078000);
        message.user.podpis += podpis;
        message.user.global_podpis += podpis;
        return message.send(`${message.user.tag}, Реклама принесла вам ${spaces(podpis)} подписчиков`);
    }
});
cmd.on(/^(?:qубрать хейтеров|qубрать хуйтеров|q убрать хейтеров|q убрать хуйтеров)$/i, async (message, bot) => {
    let user = message.user
    let id = message.user.id

    if (message.user.kanal == false) return message.send(`${message.user.tag}, У тебя нет канала`);
    if (message.user.kanal == true) {
        if (message.user.balance < 5000000000) return bot(`${message.user.tag}, У вас не достаточно денег. Чтобы подкупить хейтеров на вашем балансе должно быть 5.000.000.000р.`);
        message.user.ymoney -= 5000000000;
        message.user.hei = 1;
        return message.send(`${message.user.tag}, Вы наняли киллеров и убили хейтеров!`);
    }
});



///////////////////////////////////////
cmd.on(/^(?:qreport|q report)\s?([^]+)?/i, async (message, args, bot) => {

    if (!message.args[1]) return message.send(`К сожалению Report В боте больше не работает. \n Что бы подать жалобу либо задать вопрос или же возникли проблемы то обратитесь  в поддержку discord перейдя по ссылке! https://discord.gg/uy3Bh8NE3k `);
});



cmd.on(/^(?:qjail|q jail)?\s([0-9]+)?\s?([0-9]+)\s([^]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    let i = config;
    if (message.user.alvl < 3) return message.send(`🔸 » Вы не Ассасин`);
    if (!i || !message.args[2] || !Number(message.args[1]) || !Number(message.args[2]) || !users[message.args[1]] || message.args[2] > 999 || message.args[2] < 1) return message.send(`⏺ » Проверьте вводимые данные:\n⏺ » jail [ID] [TIME(1-999)] [ПРИЧИНА]`);
    let time = message.args[2] * 60000;
    let id = Number(message.args[1])
    users[message.args[1]].ban = true;
    return message.send(`💰 » Вы посадили в тюрьму игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] на ${message.args[2]} минут`);
});

cmd.on(/^(?:qunjail|q unjail)\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (message.user.alvl < 2) return message.send(`🔸 » Вы не Ассасин`);
    if (!message.args[1] || !Number(message.args[1]) || !users[message.args[1]]) return message.send(`⏺ » Проверьте вводимые данные:\n⏺ » unjail [ID]`);
    return message.send(`💰 » Вы выпустили  игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag })] из тюрьмы`);

});

cmd.on(/^(?:qgivemycoins|q givemycoins)\s?([0-9]+)?/i, async (message, args, bot) => {
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if (message.user.alvl < 1) return message.send(`🔸 » Вы не Сквайр`);
    if (message.user.giverub == true) return message.send(`💰 » Выдавать валюту себе можно раз в 24ч`);
    if (message.user.alvl == 1) {
        if (!message.args[1] || message.args[1] < 0 || message.args[1] > 10000) return message.send(`💰 » Пример: givemycoins [1 - 10000р]`);
        message.user.balance += Number(message.args[1]);
    }
    message.user.giverub = true;
    setInterval(() => {
        message.user.giverub = false;
    }, 86400000);

    return message.send(`💰 » Вы выдали себе ${utils.sp(message.args[1])}р.`);
});



cmd.on(/^(?:qver|q ver)\s?([0-9]+)?$/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!message.args[1]) return message.send(`🔸 » Пример команды: ver [ID]`);
    if (message.user.alvl < 1) return message.send(`🔸 » Вы не Сквайр`);

    users[message.args[1]].verify = 1;

    vk.api.call('messages.send', {
        peer_id: users[message.args[1]].id,
        message: `✅ » Вам выдали Потдвержденный Акккунт`
    });
    return message.send(`✅ » Вы выдали Подтвержденный Аккаунт игроку [${users[message.args[1]].tag}].`);
});

cmd.on(/^(?:qunver|q ver)\s?([0-9]+)?$/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!message.args[1]) return message.send(`🔸 » Пример команды: unver [ID]`);
    if (!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
    if (message.user.alvl < 1) return message.send(`🔸 » Вы не Сквайр`);
    if (!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

    users[message.args[1]].verify = 0;

    vk.api.call('messages.send', {
        peer_id: users[message.args[1]].id,
        message: `✅ » У вас забрали Потдвержденный Акккунт`
    });
    return message.send(`✅ » Вы убрали Подтвержденный Аккаунт игроку [${users[message.args[1]].tag}].`);
});

cmd.on(/^(?:qвыдать|q выдать)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if (message.user.alvl < 4) return message.send(`🔸 » Вы не лорд`);
    if (!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'выдать [ID] [COUNT]'`);
    users[message.args[1]].balance += Number(message.args[2]);

    return message.send(`💰 » Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])}р.`);
});

cmd.on(/^(?:qremoverating|q removerating)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if (message.user.alvl < 5) return message.send(`🔸 » Вы не Ассасин`);
    if (!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'removerating [ID] [COUNT]'`);
    users[message.args[1]].rating -= Number(message.args[2]);

    return message.send(`💰 » Вы забрали у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])} рейтинга💰`);
});

cmd.on(/^(?:qget|q get)\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    let warns = '';
    if (!message.args[1] || !Number(message.args[1]) || !users[message.args[1]]) return message.send(`🔸 » Проверьте вводимые данные.`);
    for (i = 0; i < users[message.args[1]].warn_p.length; i++) {
        warns += `⛔ » ${users[message.args[1]].warn_p[i]}\n`
    }
    if (message.user.alvl < 1) return;
    let id = users[message.args[1]]
    return message.send(`
		📋 Информация об игроке [${id.tag}] 📋
		🔸 » Имя: ${id.tag}
		🔹 » ID: ${message.args[1]}
		🔹 » Цифровой: ${id.id}
		🔹 » VK: [id${id.id}|${id.tag}]
		🔹 » Баланс: ${utils.sp(id.balance)}
		🔹 » блоков: ${utils.sp(id.btc)}
		🔹 » Рубинов: ${utils.sp(id.rubins)}
		🔹 » Привилегия: ${id.alvl.toString().replace(/0/gi, "Смертный").replace(/1/gi, "Сквайр").replace(/2/gi, "Барон").replace(/3/gi, "Ассасин")}
		🔹 » Дата регистрации: ${id.regDate}

	
		` +
        (message.user.alvl >= 1 ? `🔸 » Уровень: ${id.level}\n` : ``) +
        (message.user.alvl >= 1 ? `🔸 » Опыт: ${id.exp}\n` : ``) +

        (message.user.alvl >= 1 ? `\n⚠ » Предупреждений: ${id.warn}\n` : ``) +
        (message.user.alvl >= 1 ? `⚠ » Причина: [${id.warn_p}]\n` : ``) +
        (message.user.alvl >= 1 ? `⚠ » Аккаунт [${id.ban.toString().replace(/false/gi, "не заблокирован").replace(/true/gi, "заблокирован")}]\n` : ``)
    );
});

cmd.on(/^(?:qвприву|q вприву)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (message.user.alvl < 5) return message.send(`Вы не лорд`)
    if (!message.args[1] || !message.args[2]) return message.send(`🔸 >> Пример команды: вприву [ID] [LVL(1-3)]`);
    if (message.args[4] > 4) return message.send(` 🔸 >> Максимальный админ-уровень 4!`)
    if (!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);
    users[message.args[1]].alvl = Number(message.args[2]);
    vk.api.call('messages.send', {
        peer_id: users[message.args[1]].id,
        message: `✅ » ${user.tag} Вам (@id${message.user.id}(${message.user.tag})) выдал   должность: ${message.args[2].toString().replace(/0/gi, "бюргера").replace(/1/gi, "Сквайра").replace(/2/gi, "Барона").replace(/3/gi, "Ассасина").replace(/4/gi, "Мага").replace(/5/gi, "лорда")}`
    });
    return message.send(` 🔸 >> Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]\n🔸 >> Админ-уровень: ${message.args[2]} [${message.args[2].toString().replace(/0/gi, "бюргер").replace(/1/gi, "Сквайр").replace(/2/gi, "Барон").replace(/3/gi, "Ассасин").replace(/4/gi, "Мага").replace(/5/gi, "лорда")}]`);
});


cmd.on(/^(?:qзабратьруб|qremoverub|q забратьруб|q removerub)\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (message.user.alvl < 3) return message.send(`🔸 » У вас нету доступа`);
    if (!message.args[1] || !users[message.args[1]]) return message.send(`💰 » Пример: 'removerub [ID]'`);
    users[message.args[1]].balance = 0;
    return message.send(`💰 » Вы забрали все рубли у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});

cmd.on(/^(?:qwarn|q warn|qпред|q пред)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: warn [ID] [ПРИЧИНА]`);
    if (message.user.alvl < 3) return message.send(`🔸 » Вы не Ассасин`);
    if (!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

    users[message.args[1]].warn += 1;
    users[message.args[1]].warn_p = `${message.args[2]}`

    let text = `✅ » ${user.tag} Вам выдали варн по причине: [${message.args[2]}]`
    if (users[message.args[1]].warn == 3) {
        users[message.args[1]].warn = 0;
        users[message.args[1]].ban = true;
        text += `\n🔸 » У вас 3 предупреждения.\n🔸 » Ваш аккаунт заблокирован.`
    }
    return message.send(`✅ » Вы выдали предупреждение игроку [${users[message.args[1]].tag}].`);
});

cmd.on(/^(?:qбонус|q бонус)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.timers.bonus == true) return bot(`Бонус можно взять через 24 часа`)
    let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    let carta = rand(1, 3);

    setTimeout(() => {
        message.user.timers.bonus = false;
    }, 86400000);

    message.user.timers.bonus = true;

    if (prize === 1) {
        message.user.balance += 500000;
        return bot(`вы выиграли 500.000р.`);
    }

    if (prize === 2) {
        message.user.btc += 100000;
        return bot(`вы выиграли 100.000Б.`);
    }

    if (prize === 3) {
        message.user.cardgames += 5;
        message.user.rating += 7;
        return bot(`вы выиграли 7👑 и 5 Карт Героя!`);
    }

    if (prize === 4) {

        message.user.rating += 4;
        return bot(`вы выиграли 4👑`);
    }

    if (prize === 5) {
        message.user.rating += 6;
        return bot(`вы выиграли 6👑`);
    }

    if (prize === 6) {
        message.user.rating += 1;
        return bot(`вы выиграли 1👑 `);
    }
    if (prize === 7) {
        message.user.rating += 12;
        return bot(`вы выиграли 12👑`);
    }
    if (prize === 8) {

        message.user.rating += 16;
        return bot(`вы выиграли 16👑`);
    }
    if (prize === 9) {
        message.user.balance += 50000000;
        return bot(`вы выиграли 50.000.000р. на свой баланс счёт `);
    }
    if (prize === 10) {
        message.user.balance += 700000;
        return bot(`вы выиграли 700.000р. на свой баланс счёт `);
    }

    if (prize === 11) {
        message.user.cardgames += 3;
        message.user.balance += 100000;
        return bot(`вы выиграли 100.000р. на свой баланс счёт и 3 Карту Героя!`);
    }

    if (prize === 12) {

        message.user.balance += 150000;
        return bot(`вы выиграли 150.000р. на свой баланс счёт`);
    }
});


cmd.on(/^(?:qКопать рубины|qРубины копать|q Копать рубины|q Рубины копать)$/i, async (message, args, bot) => {
    if (message.user.timers.shaxta) return message.send(`⚠Вы сможете копать рубины бонус через 10 минут`);
    let mine = utils.pick([1, 2, 3, 4, 5]);
    setTimeout(() => {
        message.user.timers.shaxta = false;
    }, 600000);

    message.user.timers.shaxta = true;

    if (mine === 1) {
        message.user.rubins += 50;
        message.user.exp += 10;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 50 рубинов💎`);
    }

    if (mine === 2) {
        message.user.rubins += 80;
        message.user.exp += 25;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 80 рубинов💎`);
    }

    if (mine === 3) {
        message.user.rubins += 100;
        message.user.exp += 32;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 100 рубинов💎`);
    }

    if (mine === 4) {
        message.user.rubins += 130;
        message.user.exp += 39;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 130 рубинов💎`);
    }

    if (mine === 5) {
        message.user.rubins += 180;
        message.user.exp += 43;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 180 рубинов💎`);
    }
});
cmd.on(/^(?:qсмник|q смник)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (message.user.alvl < 1) return message.send(`🔸 » Вы не Сквайр`);
    if (!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: смник [ID] [ИМЯ]`);
    users[message.args[1]].tag = message.args[2];
    return message.send(`✅ » Вы сменили ник игрока на: ${message.args[2]}`);
});

cmd.on(/^(?:qsetpet|q setpet)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => {
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (message.user.alvl < 1) return message.send(`🔸 » Вы не Сквайр`);
    if (!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: смник [ID] [ИМЯ]`);
    users[message.args[1]].misc.pet = message.args[2];
    return message.send(`✅ » Вы сменили питомца на: ${message.args[2]}`);
});


cmd.on(/^(?:qunwarn|q unwarn|qразпред|q разпред)\s?([0-9]+)?/i, async (message, args, bot) => {
    message.user.foolder += 1;
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!message.args[1]) return message.send(`🔸 » Пример команды: unwarn [ID]`);
    if (!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
    if (message.user.alvl < 3) return message.send(`🔸 » Вы не Ассасин`);
    if (!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

    users[message.args[1]].warn = 0;
    users[message.args[1]].warn_p = `Нету`;

    vk.api.call('messages.send', {
        peer_id: users[message.args[1]].id,
        message: `✅ » Ассасин снял Вам все предупреждения`
    });
    return message.send(`✅ » Вы сняли все предупреждения игроку [${users[message.args[1]].tag}].`);
});

cmd.on(/^(?:qban|q ban|qбан|q бан)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => {
    message.user.foolder += 1;
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: ban [ID] [ПРИЧИНА]`);
    if (!Number(message.args[1])) return message.send(`?? » Число должно быть цифрового вида.`);
    if (message.user.alvl < 3) return message.send(`🔸 » Вы не Aдминистратор`);
    if (!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

    users[message.args[1]].ban = true;



    return message.send(`✅ » Вы выдали блокировку аккаунта игроку [${users[message.args[1]].tag}].`);
});


cmd.on(/^(?:qunban|q unban|q разбан|qразбан)\s?([0-9]+)?/i, async (message, args, bot) => {
    message.user.foolder += 1;
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!message.args[1]) return message.send(`🔸 » Пример команды: unban [ID]`);
    if (!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
    if (message.user.alvl < 3) return message.send(`🔸 » Вы не Ассасин`);
    if (!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

    users[message.args[1]].ban = false;

    return message.send(`✅ » Вы сняли блокировку аккаунта игроку [${users[message.args[1]].tag}].`);
});

cmd.on(/^(?:qадмин|qпанель|qСквайр|qБарон|qлорд|q админ|q панель|q сквайр|q Барон|q лорд)$/i, async (message, bot) => {
    message.user.foolder += 1;

    if (message.user.alvl < 1) return message.send(`💀 » Тебе сюда нельзя « 💀`);
    if (message.user.alvl == 1) {
        return message.send(`
					☑ » Сквайр-Панель « ☑ 
✅ » get [ID] - проверить игрока.
✅ » смник [ID] [NAME] - изменить ник.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
✅ » givemycoins [сумма] - выдать себе рубли
✅ » Споиск - информация игрока
✅ » состав -  состав Сквайр и.т.д
`);
    }
    if (message.user.alvl == 2) {
        return message.send(`
					☑ » Барон-Панель « ☑
✅ » get [ID] - проверить игрока.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » givemer [ID] - выдать мэра 
✅ » giveballas [ID] - дать балласа 
✅ » dellballas [ID] - забрать балласа 
✅ » dellmer [ID] - забрать мэра 
✅ » Поиск - Узнать данные человека
✅ » givemycoins [сумма] - выдать себе рубли
✅ » Споиск - информация игрока
✅ » состав -  состав Барон и.т.д
`);
    }
    if (message.user.alvl == 3) {
        return message.send(`
					☑ » Админ-Панель « ☑
✅ » get [ID] - проверить игрока.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
✅ » jail [ID] [TIME] [ПРИЧИНА] - посадить игрока в тюрму.
✅ » unjail [ID] - Выпустить игрока из тюрмы.
✅ » all [Сообщение] - Рассылка в лс.
✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
✅ » warn [ID] - выдать предупреждение.
✅ » unwarn [ID] - снять все предупреждения.
✅ » removerating [ID] [кол-во] - Забрать рейтинг у игрока
✅ » вприву [ID] [1-2] - Выдать Привилегию.
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » givemer [ID] - выдать мэра 
✅ » givemycoins [сумма] - выдать себе рубли
✅ » giveballas [ID] - дать балласа 
✅ » dellballas [ID] - забрать балласа 
✅ » dellmer [ID] - забрать мэра 
✅ » Споиск - информация игрока
✅ » состав -  состав админов и.т.д
`);
    }
    if (message.user.alvl == 4) {
        return message.send(`
					☑ » Маг-Панель « ☑
					
✅ » get [ID] - проверить игрока.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
✅ » jail [ID] [TIME] [ПРИЧИНА] - посадить игрока в тюрму.
✅ » unjail [ID] - Выпустить игрока из тюрмы.
✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
✅ » warn [ID] - выдать предупреждение.
✅ » unwarn [ID] - снять все предупреждения.
✅ » выдать [ID] [сумма] - Выдать рубли.
✅ » забратьруб [ID] - аннулировать рубли игрока.
✅ » removerating [ID] [кол-во] - Забрать рейтинг у игрока
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » givemycoins [сумма] - выдать себе рубли
✅ » givemer [ID] - выдать мэра 
✅ » giveballas [ID] - дать балласа 
✅ » dellballas [ID] - забрать балласа 
✅ » Споиск - информация игрока
✅ » dellmer [ID] - забрать мэра 
✅ » состав -  состав админов и.т.д
`);
    }
    if (message.user.alvl == 5) {
        return message.send(`
					☑ » лорд-Панель « ☑
✅ » get [ID] - проверить игрока.
✅ » ver [ID] - дать подтверждёный акк игроку
✅ » unver [ID] - забрать подтверждёный акк у игрока
✅ » jail [ID] [TIME] [ПРИЧИНА] - посадить игрока в тюрму.
✅ » unjail [ID] - Выпустить игрока из тюрмы.
✅ » all [Сообщение] - Рассылка в лс.
✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
✅ » warn [ID] - выдать предупреждение.
✅ » unwarn [ID] - снять все предупреждения.
✅ » выдать [ID] [сумма] - Выдать рубли.
✅ » забратьруб [ID] - аннулировать рубли игрока.
✅ » removerating [ID] [кол-во] - Забрать рейтинг у игрока
✅ » вприву [ID] [1-2] - Выдать Привилегию.
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » givemycoins [сумма] - выдать себе рубли
✅ » koko [Сумма] [Активации]
✅ » givemer [ID] - выдать мэра 
✅ » giveballas [ID] - дать балласа 
✅ » dellballas [ID] - забрать балласа 
✅ » dellmer [ID] - забрать мэра 
✅ » Споиск - информация игрока
✅ » состав -  состав админов и.т.д
 `);
    }
    if (message.user.alvl == 6) {
        return message.send(`
					☑ » Анти грифер « ☑
✅ » проверитьпрф [ID] - проверить игрока.
✅ » jail [ID] [TIME] [ПРИЧИНА] - посадить игрока в тюрму.
✅ » unjail [ID] - Выпустить игрока из тюрмы.
✅ » all [Сообщение] - Рассылка в лс.
✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
✅ » warn [ID] - выдать предупреждение.
✅ » unwarn [ID] - снять все предупреждения.
✅ » выдать [ID] [сумма] - Выдать рубли.
✅ » забратьруб [ID] - аннулировать рубли игрока.
✅ » removerating [ID] [кол-во] - Забрать рейтинг у игрока
✅ » вприву [ID] [1-2] - Выдать Привилегию.
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » koko [Сумма] [Активации]
✅ » givemer - выдать мэра 
✅ » giveballas - дать балласа 
✅ » dellballas - забрать балласа 
✅ » givemycoins [сумма] - выдать себе рубли
✅ » dellmer - забрать мэра 
✅ » Споиск - информация игрока
✅ » состав -  состав админов и.т.д
`);
    }
    if (message.user.alvl == 7) {
        return message.send(`
					☑ » Король « ☑
✅ » проверитьпрф [ID] - проверить игрока.
✅ » jail [ID] [TIME] [ПРИЧИНА] - посадить игрока в тюрму.
✅ » unjail [ID] - Выпустить игрока из тюрмы.
✅ » all [Сообщение] - Рассылка в лс.
✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
✅ » warn [ID] - выдать предупреждение.
✅ » unwarn [ID] - снять все предупреждения.
✅ » выдать [ID] [сумма] - Выдать рубли.
✅ » забратьруб [ID] - аннулировать рубли игрока.
✅ » removerating [ID] [кол-во] - Забрать рейтинг у игрока
✅ » вприву [ID] [1-2] - Выдать Привилегию.
✅ » смник [ID] [ИМЯ] - Выдать ник.
✅ » koko [Сумма] [Активации]
✅ » givemer - выдать мэра 
✅ » giveballas - дать балласа 
✅ » dellballas - забрать балласа 
✅ » givemycoins [сумма] - выдать себе рубли
✅ » dellmer - забрать мэра 
✅ » Споиск - информация игрока
✅ » состав -  состав админов и.т.д
`);
    }

});



/////////////////
cmd.on(/^(?:qпромокод|q промокод)\s?([^]+)?/i, async (message, args, bot) => {
    if (!message.args[1]) return message.send(`📝 » Укажите промокод`);
    if (!promo[message.args[1]]) return message.send(`📝 » Такого промокода нету/либо закончились активации`);
    if (promo[message.args[1]].users[message.user]) return message.send(`📝 » Вы уже активировали промокод`);
    promo[message.args[1]].users[message.user] = {
        i: true
    };
    promo[message.args[1]].activ -= 1;
    if (promo[message.args[1]].type == 1) {
        message.user.balance += promo[message.args[1]].balance;
        message.send(`✅ » Вы активировали промокод!\n✅ » Вы получили: ${promo[message.args[1]].balance}$!\n 📛 » Осталось активаций: ${promo[message.args[1]].activ}`);
    }
    if (promo.type == 2) {
        message.user.rubins += promo[message.args[1]].balance;
        message.send(`✅ » Вы активировали промокод!\n✅ » Вы получили: ${promo[message.args[1]].balance} рубинов!\n 📛 » Осталось активаций: ${promo[message.args[1]].activ}`);
    }

    if (promo[message.rgs[1]].activ == 0) delete promo[message.args[1]];
    return
});

cmd.on(/^(?:qтоп|qtop|q топ|q top)$/i, async (message, bot) => {
    message.user.foolder += 1;
    let top = [];

    users.map(x => {
        top.push({
            balance: x.balance,
            rating: x.rating,
            disable_mentions: 1,
            tag: x.tag,
            id: x.id,
            mention: x.mention
        });
    });

    top.sort((a, b) => {
        return b.rating - a.rating;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++) {
            if (top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++) {
        if (!top[i]) return;
        const user = top[i];

        text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑 ${utils.sp(user.rating)} | р. ${utils.rn(user.balance)}
		`;
    }
    message.reply({
        disable_mentions: 1,
        message: text
    });
    return bot(`Топ игроков INZEWORLD	
—————————————————
${utils.gi(find() + 1)} Вы — 👑${utils.sp(message.user.rating)} | р. ${utils.rn(message.user.balance)}`);

});


cmd.on(/^(?:qkoko|q koko)\s?([0-9]+)?\s([0-9]+)?/i, async (message, args, bot) => {
    message.user.foolder += 1;
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if (message.user.alvl < 5) return message.send(`🔸 ➡ Доступ Запрещен`);
    if (!message.args[1]) return message.send(`🔸 » Пример команды: koko [Сумма] [Активации]`);
    var result = '';
    let words = 'промотоп';
    let max_position = words.length - 1;
    for (i = 0; i < 6; ++i) {
        position = Math.floor(Math.random() * max_position);
        result = result + words.substring(position, position + 1);
    }
    promo[result] = {
        activ: Number(message.args[2]),
        balance: Number(message.args[1]),
        users: {},
        type: 1
    }
    var text = `Промокод\nДля получения ${Number(message.args[1])}$ пишите:\nпромокод ${result}`
    var text = `Промокод на 🔸 » ${Number(message.args[1])} рублей \n🔸 » ${Number(message.args[2])} успешно создан \n🔸 » Чтобы использовать введите: Промокод ${result}`
    message.send(text)
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

cmd.on(/^(?:qпомощь|qкоманды|qменю|qhelp|qcommands|qcmds|начать|start|qхелп|▶ Назад|q помощь|q команды|q меню|q help|q commands|q cmds|q start|qхелп|▶ Меню)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`
⚠️⚠️Данный бот больше не будет поддерживаться, и в ближайшее время SavikVk будет отключен от серверов и будет отправлен в публичный архив GitHub.⚠️⚠️
(В разработке новый экземпляр)
архив: https://github.com/INZEWORLD/SavikVk
Мои команды:
	➾➖➾➖➾➖➾➖➾➖➾
	❓ Помощь - описание команд. Префикс Savik'a > q <
	[😉] » inzeworld - бот даст ссылки на данный проект
    [🙈] » me - придумать своё Rp
	➾➖➾➖➾➖➾➖➾➖➾
	💼 Разделы:
	1⃣🎉 » Развлекательные
	2⃣🚀 » Игры
	3⃣👔 » Деятельность
	4⃣🌽 » Питомец
	5⃣🏆 » Рпг
	6⃣💎 » Юкоманды
	7⃣💳 » Кпомощь - INZE карта 
	8⃣🔥 » Полезное
	9⃣💡 » Разное
	&#128287; RP - список  RP команд (Beta)
	➾➖➾➖➾➖➾➖➾➖➾
	▶ Введите «[q название или номер раздела 1⃣] » для просмотра остальных команд`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
            [{
            
            "action":
            {
            "type":"text",
            "label": "1⃣",
            "payload": "{\"button\": \"1\"}"
            },
            "color": "negative"
            },
            {
            "action":
            {
            "type":"text",
            "label": "2⃣",
            "payload": "{\"button\": \"1\"}"
            
            },
            "color": "positive"
            },
            {
                "action":
                {
                "type":"text",
                "label": "3⃣",
                "payload": "{\"button\": \"1\"}"
            },
            "color": "primary"
            },
            {
                "action":
                {
                "type":"text",
                "label": "4⃣",
                "payload": "{\"button\": \"1\"}"
            },
            "color": "negative"
            },
            {
                "action":
                {
                "type":"text",
                "label": "5⃣",
                "payload": "{\"button\": \"1\"}"
            },
            "color": "positive"
            
            }
             ],
             [
            {
                "action":
                {
                "type":"text",
                "label": "6⃣",
                "payload": "{\"button\": \"1\"}"
            
            },
            "color": "negative"
            },
            {
            
                "action":
                {
                "type":"text",
                "label": "7⃣",
                "payload": "{\"button\": \"1\"}"
            },
            "color": "positive"
            },
            {
                "action":
                {
                "type":"text",
                "label": "8⃣",
                "payload": "{\"button\": \"1\"}"
            },
            "color": "primary"
            },
            {
                "action":
                {
                "type":"text",
                "label": "9⃣",
                "payload": "{\"button\": \"1\"}"
            },
            "color": "negative"
            },
            {
                "action":
                {
                "type":"text",
                "label": "🔟",
                "payload": "{\"button\": \"1\"}"
            },
            "color": "positive"
            
            
            
            
            }
            ]
            ]
            })
            })
            });
           

cmd.on(/^(?:qminecraft|q minecraft)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`

➾➖➾➖➾➖➾➖➾➖➾
Служба поддержки: https://discord.gg/xTmekE7Urz `, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                    "action": {
                        "type": "open_link",
                        "payload": "{\"button\": \"1\"}",
                        "link": "https://mc.inzeworld.com",
                        "label": "Перейти на сайт",
                    }
                }],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});




cmd.on(/^(?:qOS|q OS)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`
▶ OS:
➾➖➾➖➾➖➾
1. Windows 
➾➖➾➖➾➖➾
2. Linux 
➾➖➾➖➾➖➾
3. Chrome OS
➾➖➾➖➾➖➾
4. Android
➾➖➾➖➾➖➾
5. Mac OS
➾➖➾➖➾➖➾
Проект: https://vk.com/inze_world`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "Windows"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "Linux"
                        },
                        "color": "negative"

                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"3\"}",
                            "label": "Chrome OS"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": "Android"
                        },
                        "color": "negative"

                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"5\"}",
                            "label": "Mac OS"
                        },
                        "color": "positive"


                    }
                ],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});

//////////////////////////////////////////////Семейство Windows//////////////////////////////////////////////////////////////////////////////////////////////////////////

cmd.on(/^(?:qWindows|qвиндовс|q Windows|q виндовс)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`
▶ Семейство Windows:
➾➖➾➖➾➖➾➖➾
 1. Windows 11 
 ➾➖➾➖➾➖➾➖➾
 2. Windows 10 
 ➾➖➾➖➾➖➾➖➾
 3. Windows 8
 ➾➖➾➖➾➖➾➖➾
4. Windows 7
➾➖➾➖➾➖➾➖➾
Проект: https://discord.gg/xTmekE7Urz`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qWindows 11"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qWindows 10"
                        },
                        "color": "negative"

                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"3\"}",
                            "label": "qWindows 8"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": "qWindows 7"
                        },
                        "color": "negative"


                    }
                ],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "positive"
                }]
            ]
        })
    })
});


cmd.on(/^(?:qWindows 11|qвиндовс 11|q Windows 11|q виндовс 11)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`Windows 11:
		➾➖➾➖➾➖➾➖➾➖➾
		Служба поддержки: https://discord.gg/xTmekE7Urz
		Мы регулярно обновляем Windows 10 и Windows 11
				Всё скачено с оффициального сайта microsoft
			во время установки будет выбор от домашней до Pro версии
		➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{

                    "action": {
                        "type": "open_link",
                        "payload": "{\"button\": \"1\"}",
                        "link": "https://drive.google.com/file/d/1FVcqy8mqFG6U2W6Sa5k1YteL52tpKBXF/view?usp=sharing",
                        "label": "Скачать Windows 11",
                    }
                }],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"2\"}",
                        "label": "qWindows"
                    },
                    "color": "positive"
                }],
                [{

                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});


cmd.on(/^(?:qWindows 10|qвиндовс 10|q Windows 10|q виндовс 10)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`Windows 10:
			➾➖➾➖➾➖➾➖➾➖➾
				Служба поддержки: https://discord.gg/xTmekE7Urz
				Мы регулярно обновляем Windows 10 и Windows 11
				Всё скачено с оффициального сайта microsoft
				От домашней до Pro версии
				
				Скачать: https://disk.yandex.ru/d/0FUbaH65L5s7-w
			➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                    "action": {
                        "type": "open_link",
                        "payload": "{\"button\": \"1\"}",
                        "link": "https://disk.yandex.ru/d/0FUbaH65L5s7-w",
                        "label": "Скачать Windows 10",
                    }
                }],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});




cmd.on(/^(?:qWindows 8|qвиндовс 8|q Windows 8|q виндовс 8)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`Windows 8:
			➾➖➾➖➾➖➾➖➾➖➾
			Служба поддержки: https://discord.gg/xTmekE7Urz
			
			Скачать: https://byrut.org/index.php?do=download&id=15124
			➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"2\"}",
                        "label": "qWindows"
                    },
                    "color": "positive"
                }],
                [{

                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});



cmd.on(/^(?:qWindows 7|qвиндовс 7|q Windows 7|q виндовс 7)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`Windows 7:
			➾➖➾➖➾➖➾➖➾➖➾
				Служба поддержки: https://discord.gg/xTmekE7Urz
				
				Скачать: https://windows64.net/213-windows-7-x64-maksimalnaya-s-2020-finalnymi-obnovleniyami.html
			➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"2\"}",
                        "label": "qWindows"
                    },
                    "color": "positive"
                }],
                [{

                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});




//////////////////////////семейство Linux///////////////////////////////
cmd.on(/^(?:qLinux|qлинукс|q Linux|q линукс)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`Linux:
		➾➖➾➖➾➖➾➖➾➖➾
		 	Служба поддержки: https://discord.gg/xTmekE7Urz
		 	
		 	Скачать: https://www.linux.org/pages/download/
		➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "positive"
                }]
            ]
        })
    })
});




cmd.on(/^(?:9⃣|q Разное|qРазное )$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`[💡] » Разное:
➾➖➾➖➾➖➾➖➾➖➾➖➾
[📒] » Профиль
[💲] » Баланс
[🤝] » Споиск - информация игрока
[👑] » Рейтинг - ваш рейтинг
[💉] » Банды-команды банд
[✒] » Ник [ник/вкл/выкл]
[🛒] » Магазин
[➖] » Продать [предмет]
[⛏️] » кирка - добыча руд в шахте
[🤝] » перевод [id] [сумма]
[🤝] » блок передать [id] [сумма] - передать блоков
[🏆] » Топ
[💞] » Брак [id] - сделать предложение
[💞] » Браки - список предложений
[💎] » Бонус - ежедневный бонус
[⌚] » Дата [id] - дата регистрации игрока
[📒] » Получить Паспорт - вы получаете паспорт
➾➖➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qПрофиль"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qБаланс"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qБонус"
                        },
                        "color": "positive"
                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qМагазин"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qкирка"
                        },
                        "color": "positive"

                    }
                ],
                [{

                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "qтоп"
                    },
                    "color": "positive"

                }],
                [{

                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"

                }]
            ]
        })
    })
});

cmd.on(/^(?:8⃣|qПолезное|qПолезное 8⃣|q Полезное|q Полезное 8⃣)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`[🔥] » Полезное:
➾➖➾➖➾➖➾➖➾➖➾➖➾
[♦] » Страны - список стран
[🔊] » Музыка - рандом музыка
[🖼] » Пикча - рандом пикча
[🎬] » amv - рандом amv видео
[🎬] » MMV - рандом MMV
[🖼] » Loli - отпровляет рандом лоли
[🎬] » Genshin - отпровляет рандом видео Genshin
[👾] » Статистика - Информация о проекте.
[📊] » решить [2+2] - решает примеры +/-
[🕐] » Время - показывет время
[📊] » Курс
[🎊] » ПСтатус [Ваш статус] - Установка статуса профиля
[✅] Подтвержденные - Показывает подтвержденные Аккаунты
➾➖➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "🖼 Пикча"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "🎬 amv"
                        },
                        "color": "positive"
                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "🖼 Loli"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "🎬 Genshin"
                        },
                        "color": "positive"
                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "🎬 MMV"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "🕐 Время"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "📊 Курс"
                        },
                        "color": "positive"
                    }
                ],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"


                }]
            ]
        })
    })
});


cmd.on(/^(?:7⃣|qКпомощь|qКпомощь 7⃣|qКпомощь 7|q Кпомощь|q Кпомощь 7⃣|q Кпомощь 7)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`[💳] » INZEBANK:
➾➖➾➖➾➖➾➖➾➖➾➖➾
[💳] » Карта - купить карту
[💳] » Кположить (сумма) - положить деньги на счёт
[💳] » Кснять (сумма) - снять деньги со счёта
[💳] » банк снять всё - снимает всю сумму со счёта
➾➖➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qКарта"
                        },
                        "color": "negative"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qбанк снять всё"
                        },
                        "color": "positive"
                    }
                ],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"


                }]
            ]
        })
    })
});


cmd.on(/^(?:6⃣|qЮкоманды|qЮкоманды 6⃣|qЮкоманды 6|q Юкоманды|q Юкоманды 6⃣|q Юкоманды 6)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`💎 » Юкоманды:
➾➖➾➖➾➖➾➖➾➖➾➖➾
		[💻] » Создать канал «название» - Создать канал
[💾] » Оборудование - Покупка оборудования
[📈] » Реклама - Реклама для вашего канал
[🎬] » Снять «название» - Снять видео
[🔥] » Канал - Статистика вашего канала
[🔨] » Завод - Работать на заводе
[🔝] » Тренды - Тренды Ютуба
[🙈] » Убрать хейтеров - Убирает всех хейтеров с канала
➾➖➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qОборудование"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qРеклама"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qЗавод"
                        },
                        "color": "positive"
                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"3\"}",
                            "label": "qТренды"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"3\"}",
                            "label": "qУбрать хейтеров"
                        },
                        "color": "positive"
                    }
                ],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"3\"}",
                        "label": "qКанал"
                    },
                    "color": "negative"
                }],
                [{
                    "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "positive"


                }]
            ]

        })

    })
});


cmd.on(/^(?:5⃣|qРпг|qРпг 5⃣|qРпг 5|q Рпг|q Рпг 5⃣|q Рпг 5)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`[🏆] » Рпг:
		➾➖➾➖➾➖➾➖➾➖➾
		[💠] » Открыть - открыть Карту Героя.
		[👦] » Герои - список Героев
		[⚔] » Атаковать [ID(игрока)]
		[💠] » Карты - узнать сколько карт
		➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qОткрыть"
                        },
                        "color": "negative"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qГерои"
                        },
                        "color": "negative"
                    }
                ],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"2\"}",
                        "label": "qКарты"
                    },
                    "color": "positive"
                }],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "positive"


                }]
            ]
        })
    })
});


cmd.on(/^(?:qкарты|q карты)$/i, async (message, bot) => {
    message.user.foolder += 1;
    let text = `Ваши карты: ${utils.sp(message.user.cardgames)}`;
    return bot(text);
});




cmd.on(/^(?:4⃣|qПитомец|qПитомец 4⃣|qПитомец 4|q Питомец|q Питомец 4⃣|q Питомец 4)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`[🌽] » Питомец:
		➾➖➾➖➾➖➾➖➾➖➾
		[🐒] » Инфопет - информация
		[🐪] » Питомец поход
		[🌟] » Питомец улучшить
		➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qИнфопет"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qПитомец поход"
                        },
                        "color": "positive"
                    }
                ],
                [{

                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qПитомец улучшить"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qмагазин"
                        },
                        "color": "positive"
                    }
                ],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"

                }]
            ]
        })
    })
});

cmd.on(/^(?:3⃣|qДеятельность|qДеятельность 2⃣|qДеятельность 2|q Деятельность|q Деятельность 2⃣|q Деятельность 2)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`[👔] » Деятельность:
		➾➖➾➖➾➖➾➖➾➖➾
		[👔] » Работы - список работ
		[🔨] » Работать
		[❌] » Уволиться
		[🍀] » Гулять - заработать денюжку
		[🚕]» Таксовать - работать таксистом
		[📈] » Бизнес [1-2] - статистика
		[👷] » Бизнес нанять [1-2] [кол-во]
		[💵] » Бизнес снять [1-2] [кол-во] - снять деньги со счёта
		[✅] » Бизнес улучшить [номер]
		[💎] » Копать рубины
		[⛏] » Шахта - Поработать на шахте
		➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qРаботы"
                        },
                        "color": "negative"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qРаботать"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qУволиться"
                        },
                        "color": "positive"
                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qГулять"
                        },
                        "color": "positive"

                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qКопать рубины"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qШахта"
                        },
                        "color": "positive"
                    }
                ],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"


                }]
            ]

        })

    })
});

cmd.on(/^(?:2⃣|qИгры|qИгры 2⃣|qИгры 2|q Игры|q Игры 2⃣|q Игры 2)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`[🚀] » Список игр:
    ➾➖➾➖➾➖➾➖➾➖➾
    [🔫] » Рулетка - русская рулетка
    [🎲] » кубик в жопе - [1-6]
    [🎰] » Казино [сумма]
    [📈] » Трейд [вверх/вниз] [сумма]
    [🥛] » Стаканчик [1-3] [сумма]
    [🌟] » монетка [ставка] [орел/решка]
    ➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "qРулетка"
                    },
                    "color": "negative"
                }],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "positive"

                }]
            ]
        })
    })
});


vk.updates.on('message_event', async (context) => {
    let result = null
    const [user_info] = await vk.api.users.get({ user_ids: context.userId})
    const user = users.filter(x => x.id === context.userId)[0]
    if(context.eventPayload.text === '1') 
    vk.api.messages.send ({random_id: utils.random(-2000000000,2000000000), peer_id: context.peerId, 
     message: `[🎉] » Развлекательные:
    ➾➖➾➖➾➖➾➖➾➖➾
    [😐] » Анекдот
    [↪] » Переверни [фраза]
    [🔮] » Шар [фраза]
    [📊] » Инфа [фраза]
    [⚖] » Выбери [фраза] или [фраза2]
    [☺] » Ники
    ➾➖➾➖➾➖➾➖➾➖➾`, 
    keyboard: JSON.stringify({
                "inline": true,
                "buttons": [
                    [{
                            "action": {
                                "type": "text",
                                "payload": "{\"button\": \"1\"}",
                                "label": "qАнекдот"
                            },
                            "color": "negative"
                        },
                        {
                            "action": {
                                "type": "text",
                                "payload": "{\"button\": \"2\"}",
                                "label": "qНики"
                            },
                            "color": "positive"
                        }
                    ],
                    [{
                        "action": {
                            "type": "callback",
                            "label": "▶ Назад",
                            "payload": {
                            "type":"show_snackbar",
                            "text": "▶ Назад"}
                        },
                        "color": "positive"
    
                    }]
                ]
            })
        })
    
    });
     

vk.updates.on('message_event', async (context) => {
    let result = null
    const [user_info] = await vk.api.users.get({ user_ids: context.userId})
    const user = users.filter(x => x.id === context.userId)[0]
    if(context.eventPayload.text === '2') 
    vk.api.messages.send ({random_id: utils.random(-2000000000,2000000000), peer_id: context.peerId, 
     message: `[🚀] » Список игр:
     ➾➖➾➖➾➖➾➖➾➖➾
     [🔫] » Рулетка - русская рулетка
     [🎲] » кубик в жопе - [1-6]
     [🎰] » Казино [сумма]
     [📈] » Трейд [вверх/вниз] [сумма]
     [🥛] » Стаканчик [1-3] [сумма]
     [🌟] » монетка [ставка] [орел/решка]
     ➾➖➾➖➾➖➾➖➾➖➾`, 
    keyboard: JSON.stringify({
                "inline": true,
                "buttons": [
                    [{
                            "action": {
                                "type": "text",
                                "payload": "{\"button\": \"1\"}",
                                "label": "qРулетка"
                            },
                            "color": "negative"
                       
                        }],
                        [{
                            
                        "action": {
                            "type": "callback",
                            "label": "▶ Назад",
                            "payload": {
                            "type":"show_snackbar",
                            "text": "▶ Назад"}
                        },
                        "color": "positive"
    
                    }]
                ]
            })
        })
    
    });


cmd.on(/^(?:1⃣|qРазвлекательные|qРазвлекательные 1⃣|qРазвлекательные 1|q Развлекательные|q Развлекательные 1⃣|q Развлекательные 1)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`[🎉] » Развлекательные:
➾➖➾➖➾➖➾➖➾➖➾
[😐] » Анекдот
[↪] » Переверни [фраза]
[🔮] » Шар [фраза]
[📊] » Инфа [фраза]
[⚖] » Выбери [фраза] или [фраза2]
[☺] » Ники
➾➖➾➖➾➖➾➖➾➖➾`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qАнекдот"
                        },
                        "color": "negative"
                    },
                    {
                        "action": {
                            "type": "callback",
                            "label": "1⃣",
                            "payload": {
                            "type":"show_snackbar",
                            "text": "1"}
                        },
                        "color": "positive"
                    }
                ],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "positive"

                }]
            ]
        })
    })

});





cmd.on(/^(?:qанекдот|q анекдот)$/i, async (message, bot) => {

    let textanek = utils.pick(['Как называют человека, который продал свою печень?\n Обеспеченный.\n Почему шутить можно над всеми, кроме безногих? — Шутки про них обычно не заходят..........', 'Зачем скачивать порно-ролик с карликом? «Он занимает меньше места.', '"Как называется избушка Бабы-Яги лесбиянки? ", — Лисбушка.', 'Почему Буратино хочет на Кавказ? Потому что там могут вырезать семью.', 'Маш, что у тебя за трусы? Это же просто две веревки какие-то! Они же ни от чего не защищают! --- У девушек трусы не для защиты, а для нападения']);

    return bot(`анекдот: 

	${textanek}`)
});

cmd.on(/^(?:qочистить чат|q очистить чат)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.alvl < 3) return message.send(`Доступно только Админу.`);
    return message.send("&#4448;\n".repeat(1000) + "Чат Очищен Приятного общения-Игры!");
});

cmd.on(/^(?:qмонетка|q монетка)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {


    if (!message.args[1]) return message.reply(`Ⓜ » Проверьте вводимые данные:\nⓂ »  монетка ставка орел/решка`);
    let user = message.user;
    if (message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Ставка не может быть меньше 0 или равна 0` : `Ставка не может превышать баланс`);

    let a = rand(1, 100);
    if (a > 50) {
        if (message.args[2].toLowerCase() == 'решка') {
            message.user.balance += Math.round(message.args[1]);
            return bot(`вам выпала 'Решка' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
        }
        if (message.args[2].toLowerCase() == 'орел') {
            message.user.balance -= Math.round(message.args[1]);
            return bot(`вам выпала 'Решка' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
        }
    }
    if (a < 50) {
        if (message.args[2].toLowerCase() == 'решка') {
            message.user.balance -= Math.round(message.args[1]);
            return bot(`вам выпал 'Орел' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
        }
        if (message.args[2].toLowerCase() == 'орел') {
            message.user.balance += Math.round(message.args[1]);
            return bot(`вам выпал 'Орел' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
        }
    }
    return message.reply(`[Подсказка] » монетка [ставка] [орел/решка]`);
});

cmd.on(/^(?:qтаксовать|q таксовать)$/i, async (message, bot) => {
    if (message.user.opit < 5000) return bot(`Что бы Таксовать вам нужно 5 000 опыта.
Недостаточно опыта! Заработать его можно командой "Шахта" ⚠`);
    if (message.user.energy < 0) return bot(`Вы сильно устали.
⚠ Энергия появляется каждые 60 минут!`);

    taxicash = utils.random(2489, 20500);
    message.user.energy -= 5;
    message.user.balance += taxicash;

    if (message.user.energy < 0) {

        setTimeout(() => {
            message.user.energy = 10;
        }, 3600000);

        return bot(`вы заработали ${utils.sp(taxicash)}р.
Энергия закончилась. ⚠`);

    }

    if (message.user.energy > 0) bot(`Вы заработали ${utils.sp(taxicash)}р.`);

});



cmd.on(/^(?:qАккаунты|qПривилегии|qДонат|q Аккаунты|q Привилегии|q Донат)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`
💠Аккаунты: 
	(Недоступно)

🔹Что бы купить донат, перейдите к оплате
🔹Укажите в коментариях свой цифровой айди профиля в савике и название доната
`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                    "action": {
                        "type": "open_link",
                        "payload": "{\"button\": \"1\"}",
                        "link": "https://vk.com/keksikapp?mid=-183634840",
                        "label": "Купить донат",

                    }
                }],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "qПоддержка"
                    },
                    "color": "negative"

                }],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});

cmd.on(/^(?:qВалюта|qДеньги|q Валюта|q Деньги)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`
💰Валюта:  
(Недоступно)   
🔹 Что бы купить Валюту, перейдите к оплате  
🔹 Укажите в коментариях свой цифровой айди профиля в савике и название доната
`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                    "action": {
                        "type": "open_link",
                        "payload": "{\"button\": \"1\"}",
                        "link": "https://vk.com/keksikapp?mid=-183634840",
                        "label": "Купить донат",
                    }
                }],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "qПоддержка"
                    },
                    "color": "negative"

                }],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});

cmd.on(/^(?:qПоддержка|q Поддержка)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return message.send(`24/7 

  Служба поддержки: (Больше не поддерживается)
	Или напишите команду "Report" что бы получить ссылки`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"
                }]
            ]
        })
    })
});

cmd.on(/^(?:dellmer)\s(.*)$/i, async (message, bot) => {
    if (message.user.alvl < 2) return;

    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!user) return bot(`неверный ID игрока`);

    user.mer = false;

    await bot(`[👾]Вы забрали мера у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});



cmd.on(/^(?:qмер|qмэр|q мер|q мэр)$/i, async (message, bot) => {
    if (!message.user.mer) return bot(`[👨‍✈]Вы не мер!`);

    await bot(`[👨‍✈]Команды мера:
>>q klock-закрыть казино
>>q kopen-открыть казино
>>q block-закрыть банк
>>q bopen-открыть банк
`);
});

cmd.on(/^(?:qklock|q klock)$/i, async (message, bot) => {
    if (!message.user.mer) return bot(`[👨‍✈]Вы не мер!`);

    user.balance = kazna.kazino;
    kazna.kazino = true;

    await bot(`>>[👨‍✈]Вы закрыли казино,что-бы открыть введите "kopen"`);
});

cmd.on(/^(?:qkopen|q kopen)$/i, async (message, bot) => {
    if (!message.user.mer) return bot(`[👨‍✈]Вы не мер!`);

    user.balance = kazna.kazino;
    kazna.kazino = false;

    await bot(`>>[👨‍✈]Вы открыли казино,что-бы закрыть введите "klock"`);
});

cmd.on(/^(?:qblock|q block)$/i, async (message, bot) => {
    if (!message.user.mer) return bot(`[👨‍✈]Вы не мер!`);

    user.balance = kazna.bank;
    kazna.bank = true;

    await bot(`>>[👨‍✈]Вы закрыли банк,что-бы открыть введите "bopen"`);
});

cmd.on(/^(?:qbopen|q bopen)$/i, async (message, bot) => {
    if (!message.user.mer) return bot(`[👨‍✈]Вы не мер!`);

    user.balance = kazna.kazino;
    kazna.bank = false;

    await bot(`>>[👨‍✈]Вы открыли банк,что-бы закрыть введите "block"`);
});

cmd.on(/^(?:qgivemer|q givemer)\s(.*)$/i, async (message, bot) => {
    if (message.user.alvl < 2) return;

    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!user) return bot(`неверный ID игрока`);

    user.mer = true;

    await bot(`[👾]Вы дали мера игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});




cmd.on(/^(?:qПстатус|q Пстатус|q поставить статус|qпоставить статус)\s?([^]+)?/i, (message) => { // Сама команда
    let user = message.user;
    user.stat = message.args[1];
    return message.send(`Вы успешно установили свой персональный статус\n -- Ваш персональный статус: ${message.args[1]}.`); // Исполнительный текст
});

//////////////////////////RP Команды///////////////////////////////////
cmd.on(/^(?:me)\s?([^]+)?/i, async (message, args) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
	 @id${user.id}(${message.user.tag}) ${message.args[1]}  @id${c} (${b.tag})`);
});



cmd.on(/^(?:обнять)(\s?https\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i, async (message, args) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого обнять? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
	${['🤗|']}  @id${user.id}(${message.user.tag}) обнял(а) @id${c} (${b.tag})`);

    return message.send({
        attachment: utils.pick([, "doc2000061272_646666419", "doc2000061336_642577558", "doc2000061140_647650660", "doc2000061050_642963720", "doc2000061385_643963867"])
    });

});




cmd.on(/^(?:!!kick)\s(.*)$/i, async (message, bot) => {
    if (message.user.alvl < 5) return;
    let argses = message.text.split("!!kick ");
    argses[1] = argses[1].replace(/https/ig, '')
                         .replace(/http/ig, '')
                         .replace(/\:/ig, '')
                         .replace(/m\.vk\.com/ig, '')
                         .replace(/@\.vk\.com/ig, '')
                         .replace(/vk\.com/ig, '')
                         .replace(/\//ig, '');
    let user = await vk.api.utils.resolveScreenName({
        screen_name: argses[1]
    });
   
    if (user.object_id) {
        api.messages.removeChatUser({
            chat_id: 1497,
            member_id: user.object_id
        });
    }
});


cmd.on(/^(?:Уебать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого уебать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
		${['👊🏻|']}  @id${user.id}(${message.user.tag}) уебал(а) @id${c} (${b.tag})
		
		`);
    return message.send({
        attachment: utils.pick([, "doc562730528_645178557", "doc306499517_647835030", "doc306499517_647835029", "doc306499517_647835027", "doc306499517_647835026", "doc2000005177_643300818", "doc2000005507_648140578"])
    });

});

cmd.on(/^(?:отсосать|отсос|соснуть)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`У кого сосать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
			${['😋|']}  @id${user.id}(${message.user.tag}) отсосал(а) у @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "photo-205230700_457239336", "photo-205230700_457239335", "photo-205230700_457239334", "photo-205230700_457239333", "photo-205230700_457239332", "photo-205230700_457239331", "photo-205230700_457239330", "photo-205230700_457239329", "photo-205230700_457239328", "photo-205230700_457239326", "photo-205230700_457239325", "photo-205230700_457239324", "photo-205230700_457239323", "photo-205230700_457239322", "photo-205230700_457239321", "photo-205230700_457239320", "photo-205230700_457239319", "photo-205230700_457239318", "photo-205230700_457239317", "photo-205230700_457239285", "photo-205230700_457239284", "photo-205230700_457239283", "photo-205230700_457239282", "photo-205230700_457239281", "photo-205230700_457239280", "photo-205230700_457239279", "photo-205230700_457239278", "photo-205230700_457239277", "photo-205230700_457239276", "photo-205230700_457239181", "photo-205230700_457239179", "photo-205230700_457239178", "photo-205230700_457239177", "photo-205230700_457239176", "photo-205230700_457239175", "photo-205230700_457239174", "photo-205230700_457239173", "photo-205230700_457239172", "photo-205230700_457239171", "photo-205230700_457239170", "photo-205230700_457239169", "photo-205230700_457239168", "photo-205230700_457239167", "photo-205230700_457239166", "photo-205230700_457239165", "photo-205230700_457239164", "photo-205230700_457239163", "photo-205230700_457239162", "photo-205230700_457239161", "photo-205230700_457239090", "photo-205230700_457239089", "photo-205230700_457239087", "photo-205230700_457239086", "photo-205230700_457239085", "photo-205230700_457239084", "photo-205230700_457239083", "photo-205230700_457239082", "photo-205230700_457239080", "photo-205230700_457239079", "photo-205230700_457239078", "photo-205230700_457239077", "photo-205230700_457239076", "photo-205230700_457239075", "photo-205230700_457239074"])
    });

});

cmd.on(/^(?:секс)$/i, async (message, bot) => {
    let user = message.user;
    if (message.chatId === 2000000411) return;
    if (!message.forwards[0]) return message.reply(`С кем занятся сексом? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
				${['😍|']}  @id${user.id}(${message.user.tag}) занялся(ась) сексом с @id${c} (${b.tag})`);
});

cmd.on(/^(?:изнасиловать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого насиловать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
					${['😍|']}  @id${user.id}(${message.user.tag}) изнасиловал(а) @id${c} (${b.tag})`);
});

cmd.on(/^(?:трах|трахнуть)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(` Кого трахать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
						${['😍|']}  @id${user.id}(${message.user.tag}) трахнул(а) @id${c} (${b.tag})`);
});

cmd.on(/^(?:отлизать|отлиз)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`у кого отлизать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
					${['😋|']}  @id${user.id}(${message.user.tag}) отлизал(а) у @id${c} (${b.tag})
					
					`);
});

cmd.on(/^(?:пожать руку)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Ты пожал самому себе руку (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
						${['🤝|']}  @id${user.id}(${message.user.tag}) пожал(а) руку @id${c} (${b.tag})
						
						`);
    return message.send({
        attachment: utils.pick([, "doc2000061861_644479576", "doc2000062189_644818290", "doc2000062555_643221032", "doc2000061747_644671681", "doc2000062441_646250854", "doc2000062489_648031705", "doc2000062525_644610459", "doc2000062261_647606161", "doc2000062261_647606161", "doc2000062012_644949513", "doc2000061870_641583497"])
    });

});

cmd.on(/^(?:обоссать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Ты обоссал самого себя  (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
							${['🌧|']}  @id${user.id}(${message.user.tag}) обоссал(а) @id${c} (${b.tag})
							
							`);
    return message.send({
        attachment: utils.pick([, "photo-205230700_457239220", "photo-205230700_457239218", "photo-205230700_457239217", "photo-205230700_457239216"])
    });

});

cmd.on(/^(?:шлёпнуть|отшлёпать|шлёп|шлепнуть|отшлепать|шлеп)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Ты шлёпнул себе по жопе (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
								${['😳|']}  @id${user.id}(${message.user.tag}) шлёпнул(а) @id${c} (${b.tag})
								
								`);
    return message.send({
        attachment: utils.pick([, "doc562730528_645179968", "doc2000006042_645294213", "doc2000006067_641019858", "doc2000005371_647670138", "doc2000005584_642625195"])
    });
});



cmd.on(/^(?:кастрировать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Ты отрубил себе пенис везде кровь (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
									${['✂|']}  @id${user.id}(${message.user.tag}) кастрировал(а) @id${c} (${b.tag})
									
									`);
});

cmd.on(/^(?:кусь|укусить)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(` Кого кусать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
										${['🙃|']}  @id${user.id}(${message.user.tag}) сделал(а) кусь @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc562730528_645179943", "doc2000061515_647073488", "doc2000062075_649156607", "doc2000061919_644558978", "doc2000062103_644438511", "doc2000061347_644415631", "doc2000061428_644336649", "doc2000061243_643366259", "doc2000062092_643338856", "doc2000061669_640372788", "doc2000062030_643945159"])
    });

});


cmd.on(/^(?:ущипнуть|щипнуть)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого ущипнуть? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
											${['🤞|']}  @id${user.id}(${message.user.tag}) ущипнул(а) @id${c} (${b.tag})
											
											`);
    return message.send({
        attachment: utils.pick([, "doc2000061602_649084568", "doc2000061560_642050981", "doc2000062440_645324761", "doc2000062169_644303167", "doc2000062385_644116764", "doc2000061672_643041864", "doc2000061812_641009587", "doc2000062450_642059164", "doc2000061568_641723589", "doc2000061760_644180458"])
    });

});




cmd.on(/^(?:Погладить)$/i, async (message, bot) => { 
    let user = message.user; 
    if (user.alvl < 0) return; 
    if (!message.forwards[0]) return message.reply(`Кого погладить? (Перешлите сообщение)`); 
    let c = message.forwards[0].senderId; 
   

    // If user not found, return
    if (!b) return message.reply(`Пользователь не найден`);

    message.send(`👋🏻| @id${user.id}(${message.user.tag}) Погладил(а) @id${c} (${b.tag})`); 

    // Simplified random selection
    let attachments = [
        "doc2000020884_648112490", 
        "doc2000021601_649962767", 
        "doc2000021014_649897666", 
        "doc2000021604_646341320", 
        "doc2000021354_650425905", 
        "doc2000021520_649370202", 
        "doc2000021009_644544090", 
        "doc2000021040_650616799"
    ];

    message.send({
        attachment: attachments[Math.floor(Math.random() * attachments.length)]
    });
});



cmd.on(/^(?:уебать об пол|уебатьобпол)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`(Кого уебать об пол? Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
	${['🙃|']}  @id${user.id}(${message.user.tag}) уебал(а) об пол @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "photo-205230700_457239233"])
    });
});

cmd.on(/^(?:ломать пальцы|ломатьпальцы)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кому ломать пальцы? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`${['🙃|']}  @id${user.id}(${message.user.tag}) ломает пальцы @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000060813_647877771", "photo-205230700_457239234", "doc249315511_632075983"])
    });
});

cmd.on(/^(?:сделать негром|сделатьнегром)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(` Кого сделать негром? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`${['👨🏿|']}  @id${user.id}(${message.user.tag}) сделал(а) негром @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "photo-205230700_457239242", "photo-205230700_457239241", "photo-205230700_457239240", "photo-205230700_457239239", "photo-205230700_457239238", "photo-205230700_457239237", "photo-205230700_457239236", "photo-205230700_457239235", "photo-205230700_457239041", "photo-205230700_457239040", "photo-205230700_457239039", "photo-205230700_457239038", "photo-205230700_457239037", "photo-205230700_457239036", "photo-205230700_457239035"])
    });
});

cmd.on(/^(?:заразить)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого заразить? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) заразил(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632077472", "doc249315511_632077419"])
    });
});

cmd.on(/^(?:забанить|бан)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого банить? (Перешлите сообщение что бы выдать бан)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`${['🙂|']}  @id${user.id}(${message.user.tag}) забанил(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "photo-205230700_457239248", "photo-205230700_457239247", "photo-205230700_457239246", "photo-205230700_457239245", "photo-205230700_457239244", "photo-205230700_457239243", "photo-205230700_457239034", "photo-205230700_457239033", "photo-205230700_457239032", "photo-205230700_457239031", "photo-205230700_457239030", "photo-205230700_457239029"])
    });
});

cmd.on(/^(?:надеть ошейник|надетьошейник)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Ты надел на себя ошейник (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` ${['🙃|']}  @id${user.id}(${message.user.tag}) надел(а) ошейник на @id${c} (${b.tag})`);
});

cmd.on(/^(?:Сделатьгеем|Сделать геем)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого сделать геем? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`${['👨🏿|']}  @id${user.id}(${message.user.tag}) сделал(а) геем @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "photo-205230700_457239041", "photo-205230700_457239040", "photo-205230700_457239039", "photo-205230700_457239038", "photo-205230700_457239037", "photo-205230700_457239036", "photo-205230700_457239035"])
    });
});

cmd.on(/^(?:тыквочко|тык в очко)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(` В чьё очко тыкнуть?  (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) тыкнул(а) в очко @id${c} (${b.tag})`);
});
cmd.on(/^(?:съесть)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого Съесть? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) съел(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000061951_641621426", "doc2000061970_644876466", "doc2000061696_646337788", "doc2000061354_646598808", "doc2000061114_645475572", "doc2000061539_642457308", "doc2000061596_648420229", "doc2000062033_649448800", "doc2000061969_648048277", "doc2000061171_645661389", "doc2000062004_643637201"])
    });
});
cmd.on(/^(?:воскресить)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого воскрешать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` @id${user.id}(${message.user.tag}) вокресил(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000061416_644305320", "doc2000061621_642476108", "doc2000061557_642687997"])
    });
});
cmd.on(/^(?:убить|зарезать|растрелять|застрелить)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого Убить? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) убил(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000061404_643838240", "doc2000061308_640245151", "doc2000060957_641364658", "doc2000061174_641911820", "doc2000061527_64363905", "doc2000061202_645435808", "doc2000061474_646204539", "doc2000061269_647214505", "doc2000060700_641006928", "doc2000060990_641135345", "doc2000061234_644902627"])
    });
});
cmd.on(/^(?:сделать лесбиянкой)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого сделать лесбиянкой?(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) сделал(а) лесбиянкой @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632077732", "doc249315511_632077757", "doc249315511_632077684", "doc249315511_632077592", "doc249315511_632077625", "doc249315511_632077515"])
    });
});
cmd.on(/^(?:обнять всех)$/i, async (message, bot) => {
    message.send(`@id${user.id}(${message.user.tag}) обнял(а) всех`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632079453", "doc249315511_632079405", "doc249315511_632079336", "doc249315511_632079290", "doc249315511_632079211", "doc249315511_632079162", "doc249315511_632079109", "doc249315511_632079028"])
    });
});
cmd.on(/^(?:убить всех)$/i, async (message, bot) => {
    message.send(`@id${user.id}(${message.user.tag}) убил(а) всех`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632079888", ""])
    });
});
cmd.on(/^(?:спать|бай|уложить спать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого  уложить спать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) уложил(а) спать @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000060560_641858775", "doc2000060916_642225254", "doc2000061228_644480615", "doc2000061552_644477193", "doc2000060745_642775819", "doc2000061567_640681112", "doc2000061363_639522270", "doc2000061609_641139622", "doc2000061307_644640032"])
    });
});
cmd.on(/^(?:поцеловать|тьмок|засосать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого целовать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) поцеловал(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc306499517_654529539", "doc306499517_654529570", "doc306499517_654529566", "doc306499517_654529558", "doc306499517_654529555", "doc306499517_654529553", "doc306499517_654529547", "doc306499517_654529545", "doc306499517_654529542", "doc306499517_654529563", "doc306499517_650519477", "doc2000021244_646576615", "doc2000021498_650917978", "doc2000021629_647321610", "doc2000021378_649253783", "doc2000021227_648405552", "doc2000021310_648233566", "doc2000021540_645062983", "doc2000020708_647941618"])
    });
});
cmd.on(/^(?:чмокнуть|чмок)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого чмокнуть? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) чмокнул(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000021099_647259087", "doc2000021664_650421544", "doc2000021169_648116480", "doc2000021630_649744115", "doc2000021291_650390546", "doc2000021300_650068618", "doc2000021132_648139411", "doc2000020901_643287372", "doc2000021674_645387579"])
    });
});
cmd.on(/^(?:умереть)$/i, async (message, bot) => {
    message.send(`@id${message.user.id}(${message.user.tag}) умер(ла)`);
    return message.send({
        attachment: utils.pick([, "doc2000061778_645414939", "doc2000061764_641523769", "doc2000061896_642384641", "doc2000061102_642667842", "doc2000061804_649437979", "doc2000061804_649437979", "doc2000062013_644355662", "doc2000061690_643892337", "doc2000061037_645783835", "doc2000061070_641872962"])
    });
});
cmd.on(/^(?:почесать себе яйца)$/i, async (message, bot) => {
    message.send(`@id${message.user.id}(${message.user.tag}) почесал(ла) яйца`);
});
cmd.on(/^(?:понюхать руку)$/i, async (message, bot) => {
    message.send(`@id${message.user.id}(${message.user.tag}) понюхал(ла) руку`);
    return message.send({
        attachment: utils.pick([, "doc562730528_645178803"])
    });
});
cmd.on(/^(?:понюхать|нюхать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого нюхать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) понюхал(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632074591", "doc249315511_632074652"])
    });
});
cmd.on(/^(?:лизь|лизнуть|облизать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого облизать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) лизнул(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000021474_650155008", "doc2000021050_646879105", "doc2000021244_646585480", "doc2000021716_645480921", "doc2000021104_651594954", "doc2000021457_643826264", "doc2000021355_648127941", "doc2000021469_645783561", "doc2000021021_651188650", "doc2000020791_643583431"])
    });
});
cmd.on(/^(?:покормить|накормить|напоить)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого накормить? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) накормил(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632075054", "doc249315511_632074883", "doc249315511_632074851", "doc2000061742_646912087", "doc2000062177_642166886", "doc2000062575_643387617", "doc2000062371_646510965", "doc2000061731_640504953", "doc2000062101_645305706", "doc2000062404_643995459", "doc2000061940_642216694", "doc2000062163_646028530", "doc2000062038_649958527"])
    });
});
cmd.on(/^(?:почесать яйца)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кому почесать яйца ? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) почесал(а) яйца @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc562730528_645179327"])
    });
});
cmd.on(/^(?:связать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого связывть (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) связал(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632080634", "doc249315511_632080691", "doc249315511_632080903", "doc249315511_632080801", "doc249315511_632080717"])
    });
});
cmd.on(/^(?:Дать пять)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Ты дал самому себе пять (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) дал(а) пять @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000062414_646075384", "doc2000061604_642555920", "doc2000062321_646894805", "doc2000061791_639859468", "doc2000061820_644848806", "doc2000062297_642334131", "doc2000062029_642122758", "doc2000062154_644663128", "doc2000062540_641292228", "doc2000061625_642701107"])
    });
});
cmd.on(/^(?:Прижать|Прижать к себе)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого прижимать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) прижал(а) к себе  @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632075289", "doc249315511_632075180", "doc249315511_632075217"])
    });
});
cmd.on(/^(?:Отравить)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого травить? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) отравил(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632081659"])
    });
});
cmd.on(/^(?:Потрогать)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого потрогать? (Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag})  потрогал(а) @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc562730528_645179879", "doc249315511_632082343", "doc249315511_632082460", "doc249315511_632082375", "doc249315511_632082413"])
    });
});
cmd.on(/^(?:Пнуть)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`Кого пнуть?(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag})  пнул(а)  @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000062036_643119173", "doc2000062154_644671429", "doc2000062113_645206645", "doc2000061909_641486142", "doc2000062166_643877527", "doc2000062578_642112938", "doc2000062489_648037512", "doc2000062491_648050308", "doc2000061998_643579052", "doc2000062416_644441783"])
    });
});
cmd.on(/^(?:Почесать себе пизду|почесать себе пезду|чесать себе пизду|чешется пизда|чешется пезда)$/i, async (message, bot) => {
    let user = message.user;
    message.send(` @id${user.id}(${message.user.tag})  почесал(а) пизду `);
});
cmd.on(/^(?:напасть)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`на кого напасть?(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag}) напал(а) на @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000061983_643153121", "doc2000061214_639226512", "doc2000061563_645467490", "doc2000061573_639759475", "doc2000061727_644136722", "doc2000061534_646029030", "doc2000061062_642385703", "2000061441_646170332", "doc2000061243_643346613"])
    });
});
cmd.on(/^(?:повалить|поволить)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`кого повалить?(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` @id${user.id}(${message.user.tag})  повалил(а)  @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632082706"])
    });
});
cmd.on(/^(?:Почесать пизду|Почесать пезду|чесать пизду)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`У кого почесать пезду?(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` @id${user.id}(${message.user.tag})  почесал(а) пезду  @id${c} (${b.tag})`);
});
cmd.on(/^(?:бухать|бухнуть|набухаться)$/i, async (message, bot) => {
    let user = message.user;
    message.send(`@id${user.id}(${message.user.tag})  набухался(ась) `);
    return message.send({
        attachment: utils.pick([, "doc249315511_632084832", "doc249315511_632084677", "doc249315511_632084616", "doc249315511_632084490", "doc249315511_632084447", "doc249315511_632084418", "doc249315511_632084565"])
    });
});
cmd.on(/^(?:пить чай|чай|пью чай)$/i, async (message, bot) => {
    let user = message.user;
    message.send(`@id${user.id}(${message.user.tag})  пьёт чай`);
    return message.send({
        attachment: utils.pick([, "doc2000060706_642386767", "doc2000060879_643563271", "doc2000061003_645460022", "doc2000061236_647990379", "doc2000060936_644285006", "doc2000061348_647081862", "doc2000061053_644400985", "doc2000060785_644011041", "doc2000060817_642966169"])
    });
});
cmd.on(/^(?:пить пиво|пью пиво|пиво)$/i, async (message, bot) => {
    let user = message.user;
    message.send(`@id${user.id}(${message.user.tag})  пьёт пиво`);
    return message.send({
        attachment: utils.pick([, "doc249315511_632085287", "doc249315511_632085176", "doc249315511_632085093", "doc249315511_632085067", "doc249315511_632085036", "doc249315511_632085017", "doc249315511_632084996"])
    });
});
cmd.on(/^(?:выпить чай|выпить чаю)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`У кого почесать пезду?(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(`@id${user.id}(${message.user.tag})  пьёт чай с @id${c} (${b.tag})`);
    return message.send({
        attachment: utils.pick([, "doc2000060706_642386767", "doc2000060879_643563271", "doc2000061003_645460022", "doc2000061236_647990379", "doc2000060936_644285006", "doc2000061348_647081862", "doc2000061053_644400985", "doc2000060785_644011041", "doc2000060817_642966169"])
    });
});
cmd.on(/^(?:|qRP|qRP команды|qкоманды RP|🔟|qрп|qRP 1|qрп 1|q RP|q RP команды|q команды RP|q рп|q RP 1|q рп 1|q рп команды|qрп команды)$/i, async (message, bot) => {
    await bot(`[RP] » команды:
➾➖➾➖➾➖➾➖➾➖➾
1) страница RP команд
введите команду RP/рп 2
что бы открыть вторую страницу 
___________________________
почесать себе яйца
почесать яйца (человек)
понюхать руку
понюхать
покормить
чмокнуть
Прижать
поцеловать
кусь
обнять
лизь
Погладить
Уебать
отсосать
секс
отлизать
пожать руку
обоссать
шлёпнуть
напасть
связать
Дать пять
Отравить
Потрогать
Пнуть
_______________
<ответить на сообщение человека
или переслать>
➾➖➾➖➾➖➾➖➾➖➾`,
        {
            keyboard: JSON.stringify({
                "inline": true,
                "buttons": [
                    [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qRP 2"
                        },
                        "color": "negative"
                    }]
                ]
            })
        })
});

cmd.on(/^(?:|qRP 2|qрп 2|q RP 2|q рп 2)$/i, async (message, bot) => {
    await bot(`[RP] » команды:
	➾➖➾➖➾➖➾➖➾➖➾
	2) страница RP команд
	введите команду RP/рп 1
	что бы открыть первую страницу 
	___________________________
	Почесать себе  пизду
	Почесать пизду (человек)
	повалить
	бухать
	пить пиво
	пить чай
	выпить чай (человек)
	кастрировать
	спать
	ущипнуть
	уебать об пол 
	ломать пальцы 
	сделать негром 
	Сделать геем
	сделать лесбиянкой
	заразить 
	забанить 
	надеть ошейник 
	тык в очко 
	съесть 
	убить
	обнять всех
	убить всех
	умереть
	воскресить
	______________
	<ответить на сообщение человека
	или переслать>
	➾➖➾➖➾➖➾➖➾➖➾`,

        {
            keyboard: JSON.stringify({
                "inline": true,
                "buttons": [
                    [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qRP 1"
                        },
                        "color": "negative"
                    }]
                ]
            })
        })
});



cmd.on(/^(?:qСпоиск|q Споиск)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 0) return;
    if (!message.forwards[0]) return message.reply(`(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    message.send(` 
⚡ ID: ${b.uid} 
📗 Имя: @id${c} (${b.tag}) 
💰 Баланс: ${b.balance} 
`);
});

cmd.on(/^(?:qонлайн|q онлайн)$/i, async (message, bot) => {

    message.user.floder += 1;
    if (!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "online",


    }).then(async function(response) {
        let text = `[📗] || Список людей,которые в онлайн:\n\n`;
        await response.profiles.map(e => {
            if (e.id < 1) return;
            if (e.online != 0) text += `${[ '😎', '😏', '🙂',  '😌', '🤤', '😇', '😳', '😂', '😝', '🙄', '😝', '😘', '😗', '😙', '😛', ].random()} || *id${e.id} (${e.first_name.slice(0,1)}. ${e.last_name})\n`;
        })
        message.reply({
            disable_mentions: 1,
            message: text
        });
    })
});

cmd.on(/^(?:qофлайн|q офлайн)$/i, async (message, bot) => {
    message.user.floder += 1;
    if (!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "ofline"
    }).then(async function(response) {
        let text = `[📗] || Список людей,которые не в сети:\n\n`;
        await response.profiles.map(e => {
            if (e.id < 1) return;
            if (e.oflain != 0) text += `${['😍', '😎', '😏', '🙂', '🙃', '😌', '🤤', '😇', '😳', '😂', '😝', '🙄', '😝', '😘', '😗', '😙', '😛', '🤑'].random()} || *id${e.id} (${e.first_name.slice(0,1)}. ${e.last_name})\n`;
        })
        message.reply({
            disable_mentions: 1,
            message: text
        });
    })
});




cmd.on(/^(?:qрандом музыка|qмузыка|q рандом музыка|q музыка)$/i, async (message) => {
    return message.send(`Держи трек `, {
        attachment: utils.pick([, "audio306499517_456239583", "audio306499517_456239584", "audio474499173_456301915", "audio371745462_456504795", "audio-2001760687_82760687", "audio306499517_456239509", "audio306499517_456239536", "audio306499517_456239539", "audio306499517_456239541", "audio306499517_456239543", "audio306499517_456239549", "audio306499517_456239550", "audio306499517_456239551", "audio306499517_456239552", "audio306499517_456239553", "audio306499517_456239554", "audio306499517_456239555", "audio306499517_456239563", "audio306499517_456239565", "audio306499517_456239567", "audio306499517_456239570", "audio306499517_456239571", "audio306499517_456239572", "audio306499517_456239573", "audio306499517_456239574", "audio306499517_456239575", "audio306499517_456239578", "audio306499517_456239580", "audio439500376_456242127", "audio439500376_456242181", "audio439500376_456242249", "audio439500376_456242250", "audio439500376_456242261", "audio439500376_456242263", "audio439500376_456242269", "audio439500376_456242279", "audio439500376_456242305", "audio439500376_456242303", "audio439500376_456242338", "audio439500376_456242342", "audio439500376_456242346", "audio439500376_456242358", "audio439500376_456242359", "audio439500376_456242364", "audio306499517_456239475", "audio454695734_456240184", "audio306499517_456239471", "audio306499517_456239470", "audio306499517_456239468", "audio306499517_456239464", "audio306499517_456239463", "audio306499517_456239461", "audio306499517_456239460", "audio306499517_456239455", "audio306499517_456239452", "audio306499517_456239448", "audio306499517_456239445", "audio306499517_456239442", "audio306499517_456239439", "audio306499517_456239440", "audio306499517_456239438", "audio306499517_456239433", "audio306499517_456239429", "audio306499517_456239424", "audio306499517_456239421", "audio306499517_456239418", "audio306499517_456239417", "audio306499517_456239412", "audio306499517_456239409", "audio306499517_456239408", "audio306499517_456239391", "audio306499517_456239399", "audio306499517_456239398", "audio306499517_456239388", "audio306499517_456239387", "audio306499517_456239383", "audio306499517_456239380", "audio306499517_456239379", "audio306499517_456239371", "audio306499517_456239368", "audio306499517_456239367", "audio306499517_456239363", "audio306499517_456239362", "audio306499517_456239343", "audio306499517_456239341", "audio306499517_456239338", "audio306499517_456239337", "audio306499517_456239330", "audio306499517_456239329", "audio306499517_456239320", "audio306499517_456239314", "audio306499517_456239308", "audio306499517_456239305", "audio306499517_456239302", "audio306499517_456239300", "audio306499517_456239298", "audio306499517_456239286", "audio306499517_456239285", "audio306499517_456239270"])
    });
});

cmd.on(/^(?:qрандом пикча|qпикча|🖼 Пикча|q рандом пикча|q пикча)$/i, async (message) => {
    return message.send(`Держи`, {
        attachment: utils.pick([, "photo-204806377_457239207", "photo-204806377_457239206", "photo-204806377_457239205", "photo-204806377_457239204", "photo-204806377_457239203", "photo-204806377_457239202", "photo-204806377_457239201", "photo-204806377_457239200", "photo-204806377_457239199", "photo-204806377_457239198", "photo-204806377_457239197", "photo-204806377_457239196", "photo-204806377_457239195", "photo-204806377_457239194", "photo-204806377_457239193", "photo-204806377_457239192", "photo-204806377_457239191", "photo-204806377_457239190", "photo-204806377_457239189", "photo-204806377_457239188", "photo-204806377_457239187", "photo-204806377_457239186", "photo-204806377_457239185", "photo-204806377_457239184", "photo-204806377_457239183", "photo-204806377_457239182", "photo-204806377_457239181", "photo-204806377_457239180", "photo-204806377_457239179", "photo-204806377_457239178", "photo-204806377_457239177", "photo-204806377_457239176", "photo-204806377_457239175", "photo-204806377_457239174", "photo-204806377_457239102", "photo-204806377_457239103", "photo-204806377_457239104", "photo-204806377_457239107", "photo-204806377_457239106", "photo-204806377_457239105", "photo-204806377_457239107", "photo-204806377_457239109", "photo-204806377_457239110", "photo-204806377_457239111", "photo-204806377_457239173", "photo-204806377_457239172", "photo-204806377_457239171", "photo-204806377_457239170", "photo-204806377_457239169", "photo-204806377_457239168", "photo-204806377_457239167", "photo-204806377_457239166", "photo-204806377_457239165", "photo-204806377_457239164", "photo-204806377_457239163", "photo-204806377_457239162", "photo-204806377_457239161", "photo-204806377_457239160", "photo-204806377_457239159", "photo-204806377_457239156", "photo-204806377_457239154", "photo-204806377_457239152", "photo-204806377_457239151", "photo-204806377_457239150", "photo-204806377_457239149", "photo-204806377_457239148", "photo-204806377_457239147", "photo-204806377_457239146", "photo-204806377_457239145", "photo-204806377_457239144", "photo-204806377_457239143", "photo-204806377_457239142", "photo-204806377_457239141", "photo-204806377_457239140", "photo-204806377_457239139", "photo-204806377_457239137", "photo-204806377_457239136", "photo-204806377_457239135", "photo-204806377_457239134", "photo-204806377_457239133", "photo-204806377_457239132", "photo-204806377_457239130", "photo-204806377_457239129", "photo-204806377_457239128", "photo-204806377_457239127", "photo-204806377_457239126", "photo-204806377_457239125", "photo-204806377_457239124", "photo-204806377_457239123", "photo-204806377_457239122", "photo-204806377_457239121", "photo-204806377_457239120", "photo-204806377_457239119", "photo-204806377_457239118", "photo-204806377_457239117", "photo-204806377_457239116", "photo-204806377_457239115", "photo-204806377_457239114", "photo-204806377_457239113", "photo-204806377_457239112", "photo-204806377_457239038", "photo-204806377_457239038", "photo-204806377_457239039", "photo-204806377_457239025", "photo-204806377_457239024", "photo-204806377_457239023", "photo-204806377_457239022", "photo-204806377_457239021", "photo-204806377_457239020", "photo-204806377_457239019", "photo-204806377_457239018", "photo-204806377_457239017", "photo-204806377_457239037", "photo-204806377_457239036", "photo-204806377_457239035", "photo-204806377_457239034", "photo-204806377_457239033", "photo-204806377_457239032", "photo-204806377_457239031", "photo-204806377_457239030", "photo-204806377_457239029", "photo-204806377_457239028", "photo-204806377_457239047", "photo-204806377_457239046", "photo-204806377_457239045", "photo-204806377_457239044", "photo-204806377_457239043", "photo-204806377_457239042", "photo-204806377_457239041", "photo-204806377_457239040", "photo-204806377_457239048", "photo-204806377_457239086", "photo-204806377_457239100", "photo-204806377_457239099", "photo-204806377_457239098", "photo-204806377_457239097", "photo-204806377_457239096", "photo-204806377_457239095", "photo-204806377_457239094", "photo-204806377_457239093", "photo-204806377_457239092", "photo-204806377_457239091", "photo-204806377_457239090", "photo-204806377_457239089", "photo-204806377_457239088", "photo-204806377_457239087", "photo-204806377_457239085", "photo-204806377_457239084", "photo-204806377_457239083", "photo-204806377_457239082", "photo-204806377_457239081", "photo-204806377_457239080", "photo-204806377_457239079", "photo-204806377_457239078", "photo-204806377_457239077", "photo-204806377_457239076", "photo-204806377_457239075", "photo-204806377_457239074", "photo-204806377_457239073", "photo-204806377_457239072", "photo-204806377_457239071", "photo-204806377_457239068", "photo-204806377_457239070", "photo-204806377_457239069", "photo-204806377_457239068", "photo-204806377_457239067", "photo-204806377_457239066", "photo-204806377_457239065", "photo-204806377_457239064", "photo-204806377_457239063", "photo-204806377_457239062", "photo-204806377_457239061", "photo-204806377_457239060", "photo-204806377_457239059", "photo-204806377_457239058", "photo-204806377_457239057", "photo-204806377_457239056", "photo-204806377_457239055", "photo-204806377_457239054", "photo-204806377_457239053", "photo-204806377_457239052", "photo-204806377_457239051", "photo-204806377_457239050", "photo-204806377_457239049"])
    });
});




cmd.on(/^(?:qLoli|qлоли|🖼 Loli|q Loli|q лоли|Ещё лоли)$/i, async (message) => {
    return message.send({
        attachment: utils.pick([, "photo-183041459_456239027", "photo-199312537_457239739", "photo-199312537_457239573", "photo-199312537_457239572", "photo-199312537_457239570", "photo-199312537_457239564", "photo-199312537_457239563", "photo-199312537_457239389", "photo-199312537_457239337", "photo-149959198_457283461", "photo-149959198_457283707", "photo-149959198_457283709", "photo-149959198_457283701", "photo-149959198_457283693", "photo-110791608_399256943", "photo-110791608_398989162", "photo-110791608_397147409", "photo-110791608_397147051", "photo-82387324_456244970", "photo-82387324_456244942", "photo-168004490_456239019", "photo-183041459_456239101", "photo-183041459_456239084", "photo-183041459_456239083", "photo-183041459_456239082", "photo-112194038_457268576", "photo-112194038_457268576", "video-178324819_456239029", "photo-112194038_457268576", "photo-112194038_457268661", "photo-112194038_457268667", "photo-112194038_457268669", "photo-112194038_457268711", "photo-112194038_457268719", "photo-112194038_457268753", "photo-112194038_457268763", "photo-112194038_457268843", "photo-112194038_457268867", "photo-112194038_457268868", "photo-112194038_457268874", "photo-112194038_457268887", "photo-112194038_457268893", "photo-112194038_457268904", "photo-112194038_457268913", "photo-112194038_457268922", "photo-112194038_457268935", "photo-112194038_457268933", "photo-112194038_457268943", "photo-112194038_457268949", "photo-112194038_457268950", "photo-112194038_457269018", "photo-112194038_457269047", "photo-112194038_457269051", "photo-112194038_457269052", "photo-112194038_457269060", "photo-112194038_457269107", "photo-193024800_457239063", "photo-193024800_457239059", "photo-193024800_457239077", "photo-193024800_457239083", "photo-193024800_457239091", "photo-193024800_457239112", "photo-193024800_457239113", "photo-193024800_457239116", "photo-193024800_457239117", "photo-193024800_457239128", "photo-193024800_457239137", "photo-193024800_457239144", "photo-193024800_457239140", "photo-193024800_457239163", "photo-193024800_457239164", "photo-193024800_457239169", "photo-193024800_457239180", "photo-193024800_457239240", "photo-193024800_457239249", "photo-193024800_457239251", "photo-193024800_457239268", "photo-193024800_457239288", "photo-193024800_457239303", "photo-193024800_457239309", "photo-193024800_457239314", "photo-193024800_457239395", "photo-193024800_457239407", "photo-193024800_457239426", "photo-82387324_456244986", "photo-82387324_456244990", "photo-112194038_457269213", "photo-112194038_457269214", "photo-112194038_457269215", "photo-112194038_457269217", "photo-112194038_457269219", "photo-97534125_456240926", "photo-97534125_456240934", "photo-97534125_456240943", "photo-97534125_456240993", "photo-97534125_456240996", "photo-97534125_456240997", "photo-97534125_456240935", "photo-163071157_457248281", "photo-163071157_457248302", "photo-149959198_457283425", "photo-149959198_457283430", "photo-149959198_457283440", "photo-149959198_457283443", "photo-149959198_457283452", "photo-107312056_457302054", "photo-138794053_457277417", "photo-138794053_457277418", "photo-138794053_457277422", "photo-138794053_457277431", "photo-138794053_457277432"])
    });
});

cmd.on(/^(?:qamv видео|qamv|qамв|🎬 amv|q amv видео|q amv|q амв)$/i, async (message) => {
    return message.send({
        attachment: utils.pick([, "video-198089079_456239207", "video-198089079_456239211", "video-198089079_456239204", "video-198089079_456239219", "video-198089079_456239218", "video-198089079_456239217", "video-198089079_456239188", "video-198089079_456239189", "video-198089079_456239192", "video-198089079_456239194", "video-198089079_456239197", "video-198089079_456239199", "video-198089079_456239200", "video-198089079_456239203", "video-198089079_456239209", "video-198089079_456239210", "video-198089079_456239212", "video-198089079_456239213", "video-198089079_456239214", "video-198089079_456239215", "video-198089079_456239216"])
    });
});

cmd.on(/^(?:qGenshin|qгеншин|qGenshin Impact|🎬 Genshin|q Genshin|q геншин|q Genshin Impact)$/i, async (message) => {
    return message.send({
        attachment: utils.pick([, "video-198089079_456239185", "video-198089079_456239178", "video-198089079_456239177", "video-198089079_456239176", "video-152086344_456247461", "video-196522046_456239889", "video-196522046_456239854", "video-196522046_456239573", "video-196522046_456239724", "video-196522046_456239897", "video-196522046_456239868", "video-196522046_456239867", "video-196522046_456239866", "video-196522046_456239866", "video-198089079_456239100"])
    });
});

cmd.on(/^(?:qMMV|qммв|🎬 MMV|q MMV|q ммв)$/i, async (message) => {
    return message.send({
        attachment: utils.pick([, "video-198089079_456239159", "video-198089079_456239160", "video-198089079_456239157", "video-198089079_456239158", "video-198089079_456239156", "video-198089079_456239155", "video-198089079_456239154", "video-198089079_456239152", "video-198089079_456239153", "video-198089079_456239151", "video-191405134_456239337", "video-191405134_456239301", "video402440538_456239086", "video-150012530_456239322", "video-150012530_456239358", "video-150012530_456239411", "video-150012530_456239494", "video-150012530_456239500", "video-95840836_456239505", "video576214927_456239031", "video-95840836_456239547", "video576214927_456239036", "video-150012530_456239430"])
    });
});
cmd.on(/^(?:qтест|qко|q тест|q ко)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return bot(`♻ Uptime ${uptime.days}:${uptime.hours}:${uptime.min}:${uptime.sec}`);
});

cmd.on(/^(?:qправила|qrules|q правила|q rules)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return bot(`
🔻 ➾ Актуальный список правил '' бота « 🔻 
📝 ➾ Для бесед/чатов с ботом « 📝 

🔞 ➾ Наказание: Бан || Предупреждение. 
🔸 ➾ 1. Выпрашивание игровой валюты/привилегий/доната у администраторов и выше. 
🔸 ➾ 2. оскорбления в репорт. 
🔸 ➾ 3. Оскорбление проекта. 
🔸 ➾ 4. Обман администрации/игроков. 

🔞 ➾ Наказание: 'Молчанка'(60-240) минут || Предупреждение 
🔸 ➾ 5. Оскорбление чувств игрока(ов). 
🔸 ➾ 7. Выдача себя за Sozdatel/adimn/moder. 


🔞 ➾ Наказание: Бан || Предупреждение. 
🔸 ➾ 10. Использование БАГов, скрытие их от разработчика 
🔸 ➾ 11. Накрутка любых игровых средств с фейковых аккаунтов. 
🔸 ➾ 12. Пиар/реклама 

СНЯТИЕ С АДМИНКИ 
🔸 ➾ 1. Продажа доната.
🔸 ➾ 2. Выдача валюты.

НАШ САЙТ: INZEWORLD.COM
Discord - https://discord.gg/xTmekE7Urz 
и Наш Server Minecraft - https://vk.com/inze_world

⛔» Незнание правил не освобождает от ответственности.`)
});

cmd.on(/^(?:qINZEWORLD|qпроект|qинзеворлд|q INZEWORLD|q проект|q инзеворлд)/i, async (message, args, bot) => {
    message.user.foolder += 1;
    message.send(`
НАШ САЙТ | Служба поддержки: INZEWORLD.COM
➾➖➾➖➾➖➾➖➾➖➾➖➾
Mы в vk: https://vk.com/inze_world
➾➖➾➖➾➖➾➖➾➖➾➖➾
/k/WebM⚡ - https://vk.com/00kkkkkkk
➾➖➾➖➾➖➾➖➾➖➾➖➾
Savik Bot - https://vk.com/savikbot
➾➖➾➖➾➖➾➖➾➖➾➖➾
Беседа - https://vk.me/join/AJQ1d73QmQ5wykLCbjDz9tS3 
➾➖➾➖➾➖➾➖➾➖➾➖➾
Discord server: https://discord.gg/xTmekE7Urz`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "positive"
                }]
            ]
        })
    })
});

cmd.on(/^(?:qпереверни|q переверни)\s([^]+)$/i, async (message, bot) => {
    message.user.foolder += 1;
    let text = ``;
    message.args[1].split('').map(x => {
        if (rotateText[x]) {
            text += rotateText[x];
        }
    });

    return bot(`держи : "${text.split('').reverse().join('')}"`)
});

cmd.on(/^(?:qшар|q шар)\s([^]+)$/i, async (message, bot) => {
    message.user.foolder += 1;
    const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
    return bot(phrase);
});



cmd.on(/^(?:qинфа|qшанс|qвероятность|q инфа|q шанс|q вероятность)\s([^]+)$/i, async (message, bot) => {
    message.user.foolder += 1;
    const phrase = utils.pick(['шанс этого', 'мне кажется около']);
    const percent = utils.random(100);
    return bot(`${phrase} ${percent}%`)
});

cmd.on(/^(?:qвыбери|q выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
    message.user.foolder += 1;
    const first = message.args[1];
    const second = message.args[2];

    const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
    return bot(`${phrase}`);
});




cmd.on(/(?:qпрофиль|qпроф|qпрф|qаккаунт|qПрофиль|q профиль|q проф|q прф|q аккаунт|q Профиль|Вернуться в прошлый раздел профиля)$/i, async (message, bot) => {

    let mosh = message.user.hero_hp + message.user.hero_zashita + message.user.hero_ataka + message.user.hero_kr_udar
    message.user.foolder += 1;
    var ver = (message.user.verify == 0) ? "❌" : "✅"
    var pass = (message.user.pass == 0) ? "❌" : "✅"
    let text = ``;

    text += `┇🔎┇ ID: ${message.user.uid}\n`;
    text += `┇🔗┇ Ссылка: vk.com/id${message.user.id}\n`;
    text += `┇💰┇ Рублей: ${utils.sp(message.user.balance)}р\n`;
    if (message.user.mer == true) text += `┇✅┇ Мер:✅\n`;
    text += `┇💥┇ Опыта: ${utils.sp(message.user.opit)}\n`;
    text += `┇🔋┇ Энергии: ${utils.sp(message.user.energy)}\n`;
    if (message.user.stat == false) text += `┇🎊┇ Статус профиля: не установлен\n`;
    text += `┇🎊┇ Статус профиля: ${message.user.stat}\n`

    if (message.user.transport.strana) text += `┇♦┇Страна: ${stranas[message.user.transport.strana - 1].name}\n`;
    if (message.user.ccard) text += `┇💳┇ Баланс карте: ${message.user.card}р\n`;
    text += `┇▫┇ блоков: ${utils.sp(message.user.btc)}\n`;
    text += `┇👑┇ Рейтинг: ${utils.sp(message.user.rating)}\n\n`;

    if (message.user.pass == 1) text += `┇✅┇Паспорт: ${pass}\n`;
    if (message.user.pass == 0) text += `┇❌┇Паспорт: ${pass}\n`;
    if (message.user.verify == 0) text += `┇❌┇Верификация: ${ver}\n`;
    if (message.user.verify == 1) text += `┇✅┇Верификация: ${ver}\n\n`;

    if (message.user.kanal == false) text += `┇🎬┇Канал: Ещё не создан\n\n`;
    if (message.user.kanal == true) text += `┇🎬┇Канал:${message.user.name}\n\n`;

    text += `┇💎┇Алмазов: ${message.user.diamonds}\n`;
    text += `┇💠┇Изумрудов: ${message.user.emeralds}\n`;
    text += `┇🗨┇Угля: ${message.user.coal}\n`;
    text += `┇⬜┇Железа: ${message.user.iron}\n`;
    text += `┇💛┇Золото: ${message.user.gold}\n\n`; {
        text += `┇💰┇ Професия:\n`;
        if (message.user.work) text += `┇👔┇ Работа: ${works[message.user.work - 1].name}\n`; {
            for (var i = 0; i < message.user.business.length; i++) {
                text += `⠀${ businesses[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].icon } ${businesses[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].name}\n`;
            }
        }
    }


    return bot(`🔰 Tвой профиль:\n${text}`, {
        keyboard: JSON.stringify({
            "inline": true,

            "buttons": [
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "Второй раздел профиля"

                    },
                    "color": "negative"
                }],
                [


                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qБонус"
                        },
                        "color": "positive"
                    }
                ],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": "qРаботать"
                    },
                    "color": "positive"
                }],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": "▶ Меню"
                    },
                    "color": "negative"

                }]
            ]
        })
    });
});




cmd.on(/(?:qпрофиль 2|qпроф 2|qпрф 2|qаккаунт 2|qПрофиль 2|q профиль 2|q проф 2|q прф 2|q аккаунт 2|q Профиль 2|qпрофиль2|qпроф2|qпрф2|qаккаунт2|qПрофиль2|q профиль2|q проф2|q прф2|q аккаунт2|q Профиль2|Второй раздел профиля)$/i, async (message, bot) => {
    let mosh = message.user.hero_hp + message.user.hero_zashita + message.user.hero_ataka + message.user.hero_kr_udar
    message.user.foolder += 1;
    var ver = (message.user.verify == 0) ? "❌" : "✅"
    var pass = (message.user.pass == 0) ? "❌" : "✅"
    let text = ``;

    text += `┇🌟┇ Уровень: ${message.user.level} [${message.user.exp}/24]\n`;
    if (message.user.foolder) text += `┇&#128228;┇Использовано команд:${message.user.foolder}\n\n`;

    text += `┇💎┇ Рубины: ${utils.sp(message.user.rubins)}\n`;
    text += `┇⛔┇ Статус: ${message.user.alvl.toString().replace(/0/gi, "Игрок").replace(/1/gi, "Сквайр").replace(/2/gi, "Барон").replace(/3/gi, "Ассасин").replace(/4/gi, "Маг").replace(/5/gi, "лорд")}\n\n`;

    text += `\n┇👬┇ || Рпг Персонаж:\n`;
    text += `┇👤┇ » Герой: ${message.user.hero_name}`;
    text += `\n┇🔯┇ Характеристики:\n`;
    text += `┇❤┇ » Здоровье: ${message.user.hero_hp}%\n`;
    text += `┇💊┇ » Защита: ${message.user.hero_zashita}%\n`;
    text += `┇💣┇ » Атака: ${message.user.hero_ataka}%\n`;
    text += `┇🔪┇ » Критический урон: ${message.user.hero_kr_udar}%\n`;
    text += `┇💉┇ » Мощь: ${mosh}%\n\n`;

    text += `\n┇⚠┇ Варнов: ${message.user.warn}`;
    text += `\n┇⚠┇ Причинa: ${message.user.warn_p}\n\n`;


    if (message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
        message.user.realty.home || message.user.realty.apartment ||
        message.user.misc.phone || message.user.misc.farm || message.user.business) {
        text += `┇🏠┇ Имущество:\n`;
        if (message.user.transport.car) text += `⠀┇🚗┇ Машина: ${cars[message.user.transport.car - 1].name}\n`;
        if (message.user.transport.yacht) text += `┇🛥┇Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
        if (message.user.transport.airplane) text += `⠀┇🛩┇ Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
        if (message.user.transport.helicopter) text += `⠀┇🚁┇ Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
        if (message.user.realty.home) text += `⠀┇🏠┇Дом: ${homes[message.user.realty.home - 1].name}\n`;
        if (message.user.realty.apartment) text += `⠀┇🌇┇ Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;
        if (message.user.misc.phone) text += `⠀┇📱┇ Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
        if (message.user.misc.farm) text += `⠀┇⛏️┇ кирка: ${farms[message.user.misc.farm - 1].name} (1 шт.)\n`;
        if (message.user.business.length != 0) {
            for (var i = 0; i < message.user.business.length; i++) {
                text += `⠀${ businesses[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].icon } ${businesses[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].name}\n`;
            }
        }
    }


    return bot(`🔰 Вторая часть профиля:\n${text}`, {
        keyboard: JSON.stringify({
            "inline": true,

            "buttons": [
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "Вернуться в прошлый раздел профиля"

                    },
                    "color": "negative"
                }],
                [


                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qБонус"
                        },
                        "color": "positive"
                    }
                ],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": "qРаботать"
                    },
                    "color": "positive"
                }],
                [{
                    "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": "▶ Меню"
                    },
                    "color": "negative"

                }]
            ]
        })
    });
});




cmd.on(/^(?:qбаланс|q баланс)$/i, async (message, bot) => {
    message.user.foolder += 1;
    let text = `💰 На руках: ${utils.sp(message.user.balance)}р\n💎Рубины: ${utils.sp(message.user.rubins)}\n`;
    if (message.user.btc) text += `\n▫ Блоков: ${utils.sp(message.user.btc)}Б`;
    if (message.user.ymoney) text += ` 😻подписчиков: ${message.user.podpis}\n`;
    if (message.user.card) text += `💳 Баланс INZE карты: ${message.user.card}р.`;
    return bot(text);
});

cmd.on(/^(?:qшахта|q шахта)$/i, async (message, bot) => {
    message.user.foolder += 1;
    message.user.opit += 1000;
    if (message.user.exp < 1) return bot(`мало опыта!`);
    if (message.user.alvl <= 1) {
        if (message.user.timers.mine) return bot(`прости, но ты уже работал(а) на шахте!
		Шахта будет доступна в течении 1 дня.`);

        setTimeout(() => {
            message.user.timers.mine = false;
        }, 86400000);

        message.user.timers.mine = true;
    }
    const coals = utils.random(500);
    const irons = utils.random(150);
    const golds = utils.random(100);
    const emeralds = utils.random(20);
    const diamondss = utils.random(10);

    message.user.coal += coals;
    message.user.iron += irons;
    message.user.gold += golds;
    message.user.diamonds += diamondss;
    message.user.emeralds += emeralds;

    return bot(`в шахте, вы нашли:
			&#128488; Угля: ${utils.sp(coals)}
		&#11036; Железа: ${utils.sp(irons)}
		&#128155; Золото: ${utils.sp(golds)}
		&#128142; Алмазов: ${utils.sp(diamondss)}
		&#128160; Изумрудов: ${utils.sp(emeralds)}
		💥 Заработано Опыта: 1000`);
});


cmd.on(/^(?:qуведомления|q уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
    if (message.args[1].toLowerCase() === 'выкл') {
        message.user.notifications = false;
        return bot(`уведомления отключены! 🔕`);
    }

    if (message.args[1].toLowerCase() === 'вкл') {
        return bot(`уведомления включены! 🔔`);
    }
});
cmd.on(/^(?:qкарта|qкарта|Qкарта|Q карта)$/i, async (message, bot) => {
    if (kazna.bank == true) return bot(`[👨‍✈]Мер закрыл банк!`);
    message.user.foolder += 1;
    message.user.foolder += 1;
    if (message.user.ccard == true) return message.send(`У вас уже ЕСТЬ карта INZEBANK.`); {
        var result = '';
        var words = '0123456789';
        var max_position = words.length - 1;
        for (i = 0; i < 16; ++i) {
            position = Math.floor(Math.random() * max_position);
            result = result + words.substring(position, position + 1);
        }
        var results = '';
        var wordss = '0123456789';
        for (i = 0; i < 3; ++i) {
            position = Math.floor(Math.random() * max_position);
            results = results + wordss.substring(position, position + 1);
        }
        message.user.cardss = result;
        message.user.seccard = results;
        message.user.balance -= 3500;
        message.user.ccard = true;
        return message.send(`
<-  &#4448;800&#4448; 📞
[INZEBANK] ${new Date().getHours()}:${new Date().getMinutes()}
❜Добрый день, ${message.user.tag}.
Вы успешно приобрели карту VISA! Вот информация о карте:
========================
(INZEBANK)
Номер карты: ${result}
Ваш CVC: ***
========================
Также, было снято 3.000р. с вашего баланса, за приобретение карты INZEWORLD.❜`);
    }
});



cmd.on(/^(?:qКположить|q Кположить|q Карта положить|qКарта положить)\s([0-9]+)$/i, async (message, bot) => {
    if (kazna.bank == true) return bot(`[👨‍✈]Мер закрыл банк!`);
    message.user.foolder += 1;
    if (message.args[1] >= 500000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много кладёшь? Макс. сумма : 500.000.000.000р.`);
    if (message.user.ccard == false) return bot(`у вас нет карты.`);
    const user = await users.find(x => x.uid === Number(message.args[1]));
    if (!message.args[1]) return message.send(`[!] Введите сумму.`);
    if (message.args[1] < 0) return bot(`сумма не должна быть ниже 0.`);
    if (message.args[1] > message.user.balance) return bot(`на вашем счету недостаточно средств!`);
    message.user.balance -= Number(message.args[1]);
    message.user.card += Number(message.args[1]);
    return message.send(`
<-  &#4448;800&#4448; 📞
[INZEBANK] ${new Date().getHours()}:${new Date().getMinutes()}
❜На вашу карту (${message.user.cardss}) было зачислено: ${Number(message.args[1])}р.
Ваш баланс на карте составляет: ${message.user.card}р`);
});

cmd.on(/^(?:qКснять|q Кснять|qКарта снять|q Карта снять)\s([0-9]+)$/i, async (message, bot) => {
    if (kazna.bank == true) return bot(`[👨‍✈]Мер закрыл банк!`);
    message.user.foolder += 1;

    if (message.args[1] >= 10000000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много снимаешь? Макс. сумма : 100.000.00.000.000р. `);
    if (message.user.ccard == false) return bot(`у вас нет карты.`);
    if (!message.args[1]) return message.send(`[!] >> Введите сумму.`);
    if (message.args[1] > message.user.card) return bot(`на вашем счету не достаточно средств!`);
    let stavkaa = 10;
    let summa = Number(message.args[1]);
    proc = Number(summa) / 100 * Number(stavkaa);

    let vivod = Number(summa) - Number(proc);


    message.user.card -= summa;
    message.user.balance += Math.round(vivod);
    return message.send(`
  <-  &#4448;800&#4448; 📞
  [INZEBANK]] ${new Date().getHours()}:${new Date().getMinutes()}
С вашей карты (${message.user.cardss}) было снято: ${Math.round(vivod)}р. (С комиссией)
Ваш баланс на карте составляет: ${message.user.card}р`);

});




cmd.on(/^(?:qбанк|q банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.card);

    if (message.user.ccard == false) return bot(`у вас нет карты.`);

    if (message.args[1] > message.user.card) return bot(`на вашем счету не достаточно средств!`);
    let stavkaa = 10;
    let summa = Number(message.args[1]);
    proc = Number(summa) / 100 * Number(stavkaa);



    let vivod = Number(summa) - Number(proc);
    message.user.card -= summa;
    message.user.balance += Math.round(vivod);
    return message.send(`
  <-  &#4448;800 &#4448; 📞
  [INZEBANK] ${new Date().getHours()}:${new Date().getMinutes()}
С вашей карты (${message.user.cardss}) было снято: ${Math.round(vivod)}р. (С комиссией)
Ваш баланс на карте составляет: ${message.user.card}р`);
});

cmd.on(/^(?:qперевод|q перевод|qперевести|q перевести)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
    if (message.chat) return message.send(`совершать переводы можно только в ЛС `);
    message.user.foolder += 1;
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if (!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));

    if (message.args[2] <= 0) return;

    if (message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}р`);
    else if (message.args[2] <= message.user.balance) {
        let user = users.find(x => x.uid === Number(message.args[1]));
        if (!user) return bot(`неверный ID игрока`);

        if (user.uid === message.user.uid) return bot(`неверный ID`);

        message.user.balance -= message.args[2];
        user.balance += message.args[2];

        await bot(`вы перевели игроку @id${user.id}(${user.tag}) ${utils.sp(message.args[2])}р.`);
    }
});
cmd.on(/^(?:qблок передать|q блок передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
    message.user.foolder += 1;
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.btc);

    if (!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));

    if (message.args[2] <= 0) return;

    if (message.args[2] > message.user.btc) return bot(`Недостаточно блоков
💰 блоков: ${utils.sp(message.user.btc)} блоков`);
    else if (message.args[2] <= message.user.btc) {
        let user = users.find(x => x.uid === Number(message.args[1]));
        if (!user) return bot(`неверный ID игрока`);

        if (user.uid === message.user.uid) return bot(`неверный ID`);

        message.user.btc -= message.args[2];
        user.btc += message.args[2];

        await bot(`вы передали игроку @id${user.id}(${user.tag}) ${utils.sp(message.args[2])} `);
    }
});
cmd.on(/^(?:qрейтинг|q рейтинг)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.on(/^(?:qник|q ник|Qник|Q ник)\s(вкл|выкл)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.args[1].toLowerCase() === 'вкл') {
        message.user.mention = true;
        return bot(`гиперссылка включена!`);
    }

    if (message.args[1].toLowerCase() === 'выкл') {
        message.user.mention = false;
        return bot(`гиперссылка отключена!`);
    }
});

cmd.on(/^(?:qник|q ник|Qник|Q ник)\s(.*)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.args[1].length >= 30) return bot(`максимальная длина ника 30 символов`);

    message.user.tag = message.args[1];
    return bot(`Теперь ваш ник: "${message.user.tag}"`);
});




cmd.on(/^(?:qмагазин|q магазин|Qмагазин|Q магазин)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return bot(`разделы магазина:
➾➖➾➖➾➖➾➖➾
🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты
➾➖➾➖➾➖➾➖➾
🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры
➾➖➾➖➾➖➾➖➾
📌 Остальное:
⠀⠀📱 Телефоны
⠀⠀⛏️ кирки
⠀⠀👑 Рейтинг [кол-во] - 250.000.000.000р
  🐪 Питомцы - список питомцев
⠀⠀💼 Бизнесы
⠀⠀▫ блок [кол-во]
➾➖➾➖➾➖➾➖➾

🔎 Для покупки используйте "[q категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'кирка 2', 'блок 100', 'Рейтинг 10'])}"`, {
        keyboard: JSON.stringify({
            "inline": true,
            "buttons": [
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qМашины"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qЯхты"
                        },
                        "color": "positive"
                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qСамолеты"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"1\"}",
                            "label": "qВертолеты"
                        },
                        "color": "positive"
                    }
                ],
                [{
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qДома"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qКвартиры"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                            "type": "text",
                            "payload": "{\"button\": \"2\"}",
                            "label": "qТелефоны"
                        },
                        "color": "positive"
                    }
                ],
                [{
                      "action": {
                        "type": "text",
                        "label": "▶ Назад",
                        "payload": "{\"button\": \"3\"}",
                    },
                    "color": "negative"


                }]
            ]
        })
    })
});



cmd.on(/^(?:qСтатистика|qстата|q Статистика|q стата)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return bot(`
	 🔧 Техническая информация бота 
➾➖➾➖➾➖➾➖➾➖➾➖➾
(наш Discord: https://discord.gg/uy3Bh8NE3k ) 🔧
➾➖➾➖➾➖➾➖➾➖➾➖➾
(сайт INZEWORLD.COM)
➾➖➾➖➾➖➾➖➾➖➾➖➾
⚙ » OC: Debian-11-x86_64
🔐 » Версия savik'a: 6.7
💻 » Аккаунтов : ${users.length}\n 📈 Время работы бота » Д: ${uptime.days} | Ч: ${uptime.hours} | Мин: ${uptime.min} | Сек: ${uptime.sec}
			
`);
});

function getRandomElement(array) {
    return array[getRandomInt(array.lenght - 1)];
}


cmd.on(/^(?:qпродать|q продать|Qпродать|Q продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    let options = {
        count: null
    }

    message.args[2] = message.args[1].split(' ')[1];

    if (!message.args[2]) options.count = 1;
    if (message.args[2]) {
        message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
        message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
        message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

        message.args[2] = Math.floor(Number(message.args[2]));
        if (message.args[2] <= 0) return;

        if (!message.args[2]) options.count = 1;
        else if (message.args[2]) options.count = message.args[2];
    }

    if (/машин/i.test(message.args[1].toLowerCase())) {
        if (!message.user.transport.car) return bot(`у вас нет машины`);
        let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

        message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
        message.user.transport.car = 0;

        return bot(`вы продали свою машину за ${utils.sp(a)}р.`);
    }

    if (/яхт/i.test(message.args[1].toLowerCase())) {
        if (!message.user.transport.yacht) return bot(`у вас нет яхты`);
        let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

        message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
        message.user.transport.yacht = 0;

        return bot(`вы продали свою яхту за ${utils.sp(a)}р.`);
    }

    if (/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase())) {
        if (!message.user.transport.airplane) return bot(`у вас нет самолёта`);
        let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

        message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
        message.user.transport.airplane = 0;

        return bot(`вы продали свой самолёт за ${utils.sp(a)}р.`);
    }

    if (/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase())) {
        if (!message.user.transport.helicopter) return bot(`у вас нет самолёта`);
        let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

        message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
        message.user.transport.helicopter = 0;

        return bot(`вы продали свой вертолёт за ${utils.sp(a)}р.`);
    }

    if (/дом/i.test(message.args[1].toLowerCase())) {
        if (!message.user.realty.home) return bot(`у вас нет дома`);
        let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

        message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
        message.user.realty.home = 0;

        return bot(`вы продали свой дом за ${utils.sp(a)}р.`);
    }

    if (/квартир/i.test(message.args[1].toLowerCase())) {
        if (!message.user.realty.apartment) return bot(`у вас нет квартиры`);
        let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

        message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
        message.user.realty.apartment = 0;

        return bot(`вы продали свою квартиру за ${utils.sp(a)}р.`);
    }

    if (/телефон/i.test(message.args[1].toLowerCase())) {
        if (!message.user.misc.phone) return bot(`у вас нет телефона`);
        let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

        message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
        message.user.misc.phone = 0;

        return bot(`вы продали свой телефон за ${utils.sp(a)}р.`);
    }

    if (/питомца/i.test(message.args[1].toLowerCase())) {
        if (!message.user.pets.pet) return bot(`у вас нет питомца`);
        let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

        message.user.balance += Math.floor(pets[message.user.pets.pet - 1].cost * 0.85);
        message.user.pets.pet = 0;

        return bot(`вы продали свой телефон за ${utils.sp(a)}р.`);
    }

    if (/кирку/i.test(message.args[1].toLowerCase())) {
        if (!message.user.misc.farm) return bot(`у вас нет кирки`);
        let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

        message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
        message.user.misc.farm = 0;

        return bot(`вы продали свою кирку за ${utils.sp(a)}р.`);
    }

    if (/рейтинг/i.test(message.args[1].toLowerCase())) {
        if (options.count > message.user.rating) return bot(`у вас нет рейтинга`);
        let a = (250000000 * options.count);

        message.user.balance += Math.floor(a);
        message.user.rating -= options.count;

        return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
    }

    if (/бизнес/i.test(message.args[1].toLowerCase())) {
        if (message.user.business.length == 0) return bot(`у вас нет бизнеса`);
        if (options.count < 1 || options.count > 2) return bot(`используйте: Продать бизнес [1 или 2]`);
        if (message.user.business.length < options.count) return bot(`у вас нет этого бизнеса`);
        options.count--;
        let a = Math.floor(businesses[message.user.business[options.count].id - 1][message.user.business[options.count].upgrade - 1].cost * 0.85);

        message.user.balance += Math.floor(a);
        message.user.business.splice(options.count, 1);

        return bot(`вы продали свой бизнес за ${ utils.sp(a) }р.`);
    }


    if (/блок/i.test(message.args[1].toLowerCase())) {
        if (options.count > message.user.btc) return bot(`недостаточно блоков`);
        let a = Math.floor(25 * options.count);

        message.user.balance += Math.floor(a);
        message.user.btc -= options.count;

        return bot(`вы продали ${options.count}Б. за ${utils.sp(a)}р.`);
    }


    if (/рубин/i.test(message.args[1].toLowerCase())) {
        if (options.count > message.user.rubins) return bot(`недостаточно рубинов`);
        let rubins = (10631 * options.count);

        message.user.balance += rubins;
        message.user.rubins -= options.count

        return bot(`вы продали ${options.count} рубины за ${utils.sp(rubins)}р.`);
    }

    if (/угль/i.test(message.args[1].toLowerCase())) {
        if (options.count > message.user.coal) return bot(`недостаточно угля`);
        let coals = (476 * options.count);

        message.user.balance += coals;
        message.user.coal -= options.count;

        return bot(`вы продали ${options.count} угль за ${utils.sp(coals)}р.`);
    }

    if (/железо/i.test(message.args[1].toLowerCase())) {
        if (options.count > message.user.iron) return bot(`недостаточно железа`);
        let irons = (862 * options.count);

        message.user.balance += irons;
        message.user.iron -= options.count;

        return bot(`вы продали ${options.count} слиток железа за ${utils.sp(irons)}р.`);
    }

    if (/золото/i.test(message.args[1].toLowerCase())) {
        if (options.count > message.user.gold) return bot(`недостаточно золота`);
        let golds = (2347 * options.count);

        message.user.balance += golds;
        message.user.gold -= options.count;

        return bot(`вы продали ${options.count} слиток золота за ${utils.sp(golds)}р.`);
    }

    if (/алмаз/i.test(message.args[1].toLowerCase())) {
        if (options.count > message.user.diamonds) return bot(`недостаточно алмаза`);
        let diamonds = (1931 * options.count);

        message.user.balance += diamonds;
        message.user.diamonds -= options.count;

        return bot(`вы продали ${options.count} алмаз за ${utils.sp(diamonds)}р.`);
    }

    if (/изумруд/i.test(message.args[1].toLowerCase())) {
        if (options.count > message.user.emeralds) return bot(`недостаточно эмеральда`);
        let emeralds = (9731 * options.count);

        message.user.balance += emeralds;
        message.user.emeralds -= options.count;

        return bot(`вы продали ${options.count} эмеральд за ${utils.sp(emeralds)}р.`);
    }
});
cmd.on(/^(?:qВремя|qtime|🕐 Время|q Время|q time)/i, async (msg, bot) => {
    return bot(`
	Время сейчас:
⏰ | Москва: ${new Date().getHours()}:${new Date().getMinutes()}
➾➖➾➖➾➖➾
⏳ | Азия/Токио: ${new Date().getHours()+6}:${new Date().getMinutes()}
➾➖➾➖➾➖➾
⏰ | Екатеринбург: ${new Date().getHours()+2}:${new Date().getMinutes()}
➾➖➾➖➾➖➾
⏳ | Баку: ${new Date().getHours()+1}:${new Date().getMinutes()}
➾➖➾➖➾➖➾
⏰ | Якутск: ${new Date().getHours()+6}:${new Date().getMinutes()}
➾➖➾➖➾➖➾`);
});



cmd.on(/^(?:qмашины|qмашина|q машины|q машина)\s?([0-9]+)?$/i, async (message, bot) => {
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"!`);
    message.user.foolder += 1;
    if (!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Ferrari Enzo V5 (1.000.000р.)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Bugatti Chiron (2.200.000р.)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. McLaren F1 (30.000.000р.)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Lamborghini Aventador (41.000.000р.)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. SSC Tuatara (59.000.000р.)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Bugatti Veryon Super (80.000.000р.)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. Лада Нива (100.000.000р.)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Лада Калина (300.000.000р.)
Для покупки введите "Машина [номер]"`);

    const sell = cars.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.transport.car = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}р.`);
    }
});
cmd.on(/^(?:qяхты|qяхта|qяхты|qяхта)\s?([0-9]+)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"!`);
    if (!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000р.)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000р.)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000р.)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000р.)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000р.)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000р.)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000р.)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000р.)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000р.)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000р.)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000р.)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000р.)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000р.)

Для покупки введите "Яхта [номер]"`);

    const sell = yachts.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.transport.yacht = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
    }
});
cmd.on(/(?:qрестарт|qrestart|qreboot|qsr|qrl|q рестарт|q restart|q reboot|q sr|q rl)$/i, (message) => {
    if (message.senderId !== 306499517 | message.senderId !== 306499517) return message.send(`<Error #404>`); // Доступ.
    message.send(`Запущен процесс перезапуска системы..`)
    setTimeout(() => {
        message.send(`Процесс: ${rand(24,9)}%`)
    }, 400);
    setTimeout(() => {
        message.send(`Оптимизация загрузки: ${rand(46,19)}%`)
    }, 1000);
    setTimeout(() => {
        message.send(`загрузка... ${rand(82,19)}%`)
    }, 2000);
    setTimeout(() => {
        message.send(`загрузка... ${rand(100,100)}%`)
    }, 3500);
    setTimeout(() => {
        message.send(`Savik успешно Ymer.`)
    }, 4500);
    setTimeout(() => {
        process.exit(-1);
    }, 5000); // Процесс рестарта.
});

cmd.on(/(?:qstartbot|qBotstart|q startbot|q Botstart)$/i, (message) => {
    if (message.senderId !== 306499517 | message.senderId !== 306499517) return message.send(`<Error #403>`); // Доступ.
    message.send(`Запуск бота..`)
    setTimeout(() => {
        message.send(`Проверка цельность файлов на: ${rand(1,9)}%`)
    }, 400);
    setTimeout(() => {
        message.send(`Процесс проверки: ${rand(10,19)}%`)
    }, 2500);
    setTimeout(() => {
        message.send(`Процесс проверки завершён`)
    }, 4000);
    setTimeout(() => {
        message.send(`Загрузка данных : ${rand(20,25)}%`)
    }, 6700);
    setTimeout(() => {
        message.send(`Выделение RAM : ${rand(30,37)}%`)
    }, 9700);
    setTimeout(() => {
        message.send(`Loading...   ${rand(40,49)}%`)
    }, 11700);
    setTimeout(() => {
        message.send(`Loading...   ${rand(50,54)}%`)
    }, 14700);
    setTimeout(() => {
        message.send(`Loading...   ${rand(60,84)}%`)
    }, 17000);
    setTimeout(() => {
        message.send(`Loading...   ${rand(85,98)}%`)
    }, 21500);
    setTimeout(() => {
        message.send(`Loading...   ${rand(99,100)}%`)
    }, 25300);
    setTimeout(() => {
        message.send(`Система работает.`)
    }, 27000);
});

cmd.on(/^(?:qГет|q Гет)$/i, async (message, bot) => {
    let user = message.user;
    if (user.alvl < 2) return;
    if (!message.forwards[0]) return message.reply(`(Перешлите сообщение)`);
    let c = message.forwards[0].senderId;
    let b = users.find(x => x.id === Number(c));
    let mosh = b.hero_hp + b.hero_zashita + b.hero_ataka + b.hero_kr_udar
    message.send(` 
	⚡ ID: ${b.uid} 
	📗 Имя: @id${c} (${b.tag}) 
	➾➖➾➖➾➖➾➖➾➖➾➖➾
	💰 Баланс: ${utils.sp(b.balance)}
	💥 Опыта: ${utils.sp(b.opit)} 
	▫ блоков: ${utils.sp(b.btc)}
    👑 Рейтинг: ${utils.sp(b.rating)}
    ➾➖➾➖➾➖➾➖➾➖➾➖➾
	🔗 Ссылка: vk.com/id${b.id}
	🎊 Статус профиля: ${b.stat.toString().replace(/false/gi, "Нету")}
	⛔ Привелегия: ${b.alvl.toString().replace(/0/gi, "Смертный").replace(/1/gi, "Сквайр").replace(/2/gi, "Барон").replace(/3/gi, "Ассасин").replace(/4/gi, "[Маг]").replace(/5/gi, "Лорд")}
	⚠  Предупреждений: ${b.warn}
	💡  Дата регистрации: ${b.regDate}
	❗  Причина: ${b.warn_p}
	⛔  [Бан: ${b.ban.toString().replace(/false/gi, "Нету]").replace(/true/gi, "Есть]")}
	➾➖➾➖➾➖➾➖➾➖➾➖➾
	👤 Герой: ${b.hero_name}
	➾➖➾➖➾➖➾➖➾➖➾➖➾
	🔯 Характеристики:
		    ❤ Здоровье: ${b.hero_hp}%
		    💊 Защита: ${b.hero_zashita}%
		    💣 Атака: ${b.hero_ataka}%
		    🔪 Критический урон: ${b.hero_kr_udar}%
		    💉 Мощь: ${mosh}%`);
});

cmd.on(/^(?:qсамол(?:е|ё)т|qсамол(?:е|ё)ты|q самол(?:е|ё)т|q самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"!`);
    if (!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000р.)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000р.)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000р.)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000р.)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000р.)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000р.)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000р.)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000р.)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000р.)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000р.)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000р.)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000р.)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000р.)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000р.)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000р.)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000р.)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000р.)

Для покупки введите "Самолет [номер]"`);

    const sell = airplanes.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.transport.airplane = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}р.`);
    }
});

cmd.on(/^(?:qвертолёты|q вертолёты|q вертолеты|q вертолеты|q вертолет|qвертолет|q вертолёт|qвертолёт)\s?([0-9]+)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"!`);
    if (!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2р.)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000р.)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000р.)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000р.)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000р.)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000р.)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000р.)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000р.)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000р.)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000р.)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000р.)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000р.)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000р.)

Для покупки введите "Вертолет [номер]"`);

    const sell = helicopters.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.transport.helicopter = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}р.`);
    }
});

cmd.on(/^(?:qТоп Ники|qprefix|qники|q Топ Ники|q prefix|q ники)\s?([0-9]+)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (!message.args[1]) return bot(`Ники:
${message.user.prefix === 2 ? '🔹' : '🔸'} 2. 💰гамагей💰
${message.user.prefix === 3 ? '🔹' : '🔸'} 3. 💎шальной колдунчег💎 
${message.user.prefix === 4 ? '🔹' : '🔸'} 4. 👑ананас👑 
${message.user.prefix === 5 ? '🔹' : '🔸'} 5. ✨чёрный✨
${message.user.prefix === 6 ? '🔹' : '🔸'} 6. 💰алахагбар💰 
${message.user.prefix === 7 ? '🔹' : '🔸'} 7. 👻Призрачный гандон 👻
${message.user.prefix === 9 ? '🔹' : '🔸'} 9. 🎅негр🎅 
${message.user.prefix === 10 ? '🔹' : '🔸'} 10. 🐧Пингвинутый🐧 
${message.user.prefix === 12 ? '🔹' : '🔸'} 12. 🌚Лучик говна🌝 
${message.user.prefix === 14 ? '🔹' : '🔸'} 14. 😇Божиха😇 
${message.user.prefix === 2 ? '🔹' : '🔸'} 15. 💰Одуванчик в жопе💰 
${message.user.prefix === 3 ? '🔹' : '🔸'} 16. 💎Бомжик 💎 
${message.user.prefix === 4 ? '🔹' : '🔸'} 17. 👑Тортик в ротик👑 
${message.user.prefix === 5 ? '🔹' : '🔸'} 18. ✨самодрочер✨ 
${message.user.prefix === 8 ? '🔹' : '🔸'} 21. 👔Рожа ебанная👔
${message.user.prefix === 9 ? '🔹' : '🔸'} 22. 🎅Сасанта🎅
${message.user.prefix === 6 ? '🔹' : '🔸'} 19. 💰Кросовком по жопе💰 
${message.user.prefix === 7 ? '🔹' : '🔸'} 20. 👻Кубок в жопе👻 
${message.user.prefix === 10 ? '🔹' : '🔸'} 23. 🐧Подуха уурва🐧 
${message.user.prefix === 11 ? '🔹' : '🔸'} 24. 🎓Ковёр🎓 
${message.user.prefix === 12 ? '🔹' : '🔸'} 25. 🌚покет в жопе🌝 
${message.user.prefix === 13 ? '🔹' : '🔸'} 26. 🐾Диван зассал🐾 
${message.user.prefix === 14 ? '🔹' : '🔸'} 27. 😇Богиня членов 😇 
${message.user.prefix === 15 ? '🔹' : '🔸'} 27. ||пердун||"`);

    const sell = prefix.find(x => x.id === Number(message.args[1]));
    message.user.foolder += 1;
    if (!sell) return;
    if (message.user.prefix) return bot(`у вас уже есть префикс (${prefix[message.user.prefix- 2].name})`);

    if (message.user.rubins < sell.cost) return bot(`недостаточно рубинов`);
    else if (message.user.rubins >= sell.cost) {
        message.user.rubins -= sell.cost;
        message.user.prefix = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)} рубинов`);
    }
});

cmd.on(/^(?:qдом|qдома|q дом|q дома)\s?([0-9]+)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"!`);
    if (!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коттедж Медведева (4.500.000р.)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Особняк Порошенко (7.250.000р.)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Дом на Рублёвке (10.000.000р.)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Личный небоскрёб Tramp'a(15.000.000р.)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Остров с особняком (19.500.000р.)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Белый дом Путина (23.000.000р.)

Для покупки введите "Дом [номер]"`);

    const sell = homes.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.realty.home = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}р.`);
    }
});

cmd.on(/^(?:qквартира|qквартиры|q квартира|q квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"!`);
    if (!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000р.)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000р.)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000р.)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000р.)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000р.)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000р.)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000р.)


Для покупки введите "Квартира [номер]"`);

    const sell = apartments.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.realty.apartment = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}р.`);
    }
});

cmd.on(/^(?:qтелефон|qтелефоны|q телефон|q телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"!`);
    if (!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (2500р.)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (5000р.)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.0000р.)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.0000р.)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.0000р.)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.0000р.)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.0000р.)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Torex FS1 (75.0000р.)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (250.0000р.)

Для покупки введите "Телефон [номер]"`);

    const sell = phones.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.misc.phone = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}р.`);
    }
});

cmd.on(/^(?:qпитомцы|q питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
    if (!message.args[1]) return bot(`питомцы:
🐌 1. Улитка (1.000р.)
🐸 2. Лягушка (25.000р.)
🐰 3. Заяц (500.000р.)
🐷 4. Свинья (300.000.000р.)
🦊 5. Лиса (1.250.000.000р.)
🐶 6. Собака (5.000.000.000р.)
🐼 7. Панда (30.000.000.000р.)
🦅 8. Ястреб (180.000.000.000р.)

🚩Для покупки введите "Питомцы [номер]"`);

    const sell = pets.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.misc.pet) return bot(`У Вас уже есть питомец.`);

    if (message.user.balance < sell.cost) return bot(`Вам нужно ${utils.sp(sell.cost)}р. для покупки.`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.misc.pet = sell.id;
        message.user.pet.lvl += 1;

        return bot(`Вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень.`);
    }
});

cmd.on(/^(?:qИнфопет|q Инфопет)$/i, async (message, bot) => {
    if (message.user.misc.pet < 1) return bot(`У Вас нет питомца.`);
    else {
        return bot(`информация:
🐌 Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}р.
🌟 Уровень: ${message.user.pet.lvl}`);
    }

});




cmd.on(/^(?:qпитомец улучшить|q питомец улучшить)$/i, async (message, bot) => {
    if (message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
    else {

        if (message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`Недостаточно денег.`);

        var priceupd = petsupd[message.user.misc.pet - 1].cost * message.user.pet.lvl;

        var lvlpoupd = message.user.pet.lvl + 1;

        message.user.balance -= priceupd;
        message.user.pet.lvl += 1;

        return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}р.
💰 Ваш баланс: ${utils.sp(message.user.balance)}р.`);


    }

});

cmd.on(/^(?:qпитомец поход|q питомец поход)$/i, async (message, bot) => {
    if (message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
    else {

        if (message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал!`);

        let cashfind = utils.random(736, 2879);
        message.user.balance += cashfind;
        message.user.timers.poxod = true;

        setTimeout(() => {
            message.user.timers.poxod = false;
        }, 3600000);

        return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца!`);
    }

});

cmd.on(/^(?:qкирки|⛏️ кирки|q кирки|⛏️ кирки )\s?([0-9]+)?$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (!message.args[1]) return bot(`Майнинг кирок: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. деревянная кирка 200.000б./15мин (20.500.000р.)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. каменная кирка 300.000 б./15мин (100.000.000р.)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. железная  кирка 500.000 б./15мин (900.000.000р.)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. алмазная кирка 1.000.000 б./15мин (1.000.000.000р.)
Для покупки введите "кирки [номер]"`);

    const sell = farms.find(x => x.id === Number(message.args[1]));
    if (!sell) return;
    if (message.user.misc.farm) return bot(`у вас уже есть кирка (${farms[message.user.misc.farm - 1].name}), введите "Продать кирк"`);

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;
        message.user.misc.farm = sell.id;

        return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}р.`);
    }
});
cmd.on(/^(?:qрейтинг|q рейтинг)\s(.*)$/i, async (message, bot) => {
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

    if (!Number(message.args[1])) return;
    message.args[1] = Math.floor(Number(message.args[1]));

    if (message.args[1] <= 0) return;

    if ((message.args[1] * 250000000000) > message.user.balance) return bot(`у вас недостаточно денег`);
    else if ((message.args[1] * 250000000000) <= message.user.balance)

    {
        message.user.balance -= (message.args[1] * 250000000000);
        message.user.rating += message.args[1];

        return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 250000000000)}р.`);
    }
});

cmd.on(/^(?:qбизнесы|q бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"!`);
    if (!message.args[1]) return bot(`Бизнесы:
🔹 1. Шаурмичная - 50.000р.
⠀ 💰 Прибыль: 200р/час
🔹 2. Ларёк - 100.000р.
⠀ 💰 Прибыль: 700р/час
🔹 3. Забегаловка - 300.000р.
⠀ 💰 Прибыль: 2.700р./час
🔹 4. Мини-Магазин - 500.000р.
⠀ 💰 Прибыль: 4.100р/час
🔹 5. Завод в гараже - 1.500.000р.
⠀ 💰 Прибыль: 8.800р/час
🔹 6.Угольная Шахта - 25.000.000р.
⠀ 💰 Прибыль: 84.700р/час
🔹 7. Маленький Офис - 80.000.000р.
⠀ 💰 Прибыль: 229.625р/час
🔹 8. Любительский GameDev - 150.000.000р.
⠀ 💰 Прибыль: 302.000р/час
🔹 9. Нефтевышка - 500.000.000р.
⠀ 💰 Прибыль: 707.000р/час
🔹 10. Мини АЭС - 800.000.000р.
⠀ 💰 Прибыль: 1.050.700р/час
🔸 11. Apple Store - 250.000.000.00р. 
⠀ 💰 Прибыль: 250.000.000р/час
❓ Для покупки введите «Бизнесы [номер]»
`);

    if (message.user.business.length == 2) return bot(`у вас уже есть 2 бизнеса`);

    message.args[1] = Number(message.args[1]) - 1;
    const sell = businesses[message.args[1]][0];
    if (sell == null) return;
    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    message.user.balance -= sell.cost;
    message.user.business.push({
        "id": message.args[1] + 1,
        "upgrade": 1,
        "workers": 1,
        "moneys": 0
    });

    return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}р.`);
});


cmd.on(/^(?:qРулетка|q Рулетка)$/i, async (message, bot) => {


    if (message.user.balance == 0) return message.reply("🔔 Играть в игры можно с балансом выше 0! 🔔");
    if (message.user.pp == 1) return message.reply(`${message.user.tag}, ты уже в игре!`);
    message.reply(`[💀💀💀💀💀💀💀💀💀💀💀💀💀💀] | ${message.user.tag}, Вы начали игру "Русская Рулетка"\n\n [💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀] | Задача этой игры: Вам дано 3 выстрела... Если в Вас не попала пуля, то мы дадим на ваш баланс 500.000р, а если в вас попала пуля, то весь ваш баланс и ваша жизнь обнуляется.\n\n[⚠] » Чтобы сделать выстрел, то отправьте боту - 🔫
	или пропишите команду "выстрел"`);
    return message.user.pp = 1;
});



cmd.on(/^(?:🔫|qвыстрел|q выстрел|Q выстрел|Q выстрел)$/i, async (message, bot) => {

    let balance = message.user.balance;
    let pp = message.user.pp;
    let p = 3 - pp;
    let ran = ["вы выжили", "вы погибли"];
    let rand = ran.random();

    if (message.user.pp == 0) return;
    if (message.user.pp > 0) {
        if (rand != "вы выжили") {
            message.user.pp += 1;
            if (message.user.pp == 4) {
                message.user.pp = 0;
                message.user.balance += 500000;
                return message.reply(`[😅] >> ${message.user.tag}, поздравляем! Вы выжили в этой страшной игре!\n[☺] » Мы подарили вам - 100.000р.`);
            }
            message.reply(`1...`);
            message.reply(`2...`);
            message.reply(`3...`);
            message.reply(`*БАХ!!*`);
            return message.reply(`[😎] >> Пуля непопала вам в голову - вы выжили\n[🍀] » Вам повезло. Стреляйте дальше!\n[😧] » Осталось выстрелов: ` + p);

        }
        if (rand != "вы погибли") {
            message.reply(`1...`);
            message.reply(`2...`);
            message.reply(`3...`);
            message.reply(`*БАХ!!*`);
            message.reply(`[🤕] >> Пуля попала вам в голову - вы погибли\n[😞] » Удача повернулась к вам спиной.\n[😶] » Вы проиграли жизнь. `);
            message.user.balance = 5000;
            message.user.podpis = 0;
            message.user.hei = 0;
            message.user.video = 0;
            message.user.kanal = false;
            message.user.knser = false;
            message.user.mikro = false;
            message.user.serkn = false;
            message.user.kakake = false;
            message.user.opit = 0;
            message.user.uggg = false;
            message.user.vivi = false;
            message.user.fggg = false;
            message.user.bonus_balance = false;
            message.user.xxxkn = false;
            message.user.herkn = false;
            message.user.bcase = false;
            message.user.orcase = false;
            message.user.huikn = false;
            message.user.govkn = false;
            message.user.gerkn = false;
            message.user.gggkn = false;
            message.user.zolkn = false;
            message.user.brilkn = false;
            message.user.monit = false;
            message.user.prosm = 0;
            message.user.dizlike = 0;
            message.user.kom = 0;
            message.user.global_podpis = 0;
            message.user.huih = 0;
            message.user.cers = 0;
            message.user.name = `Имя буд канала`;
            message.user.bbbb = 0;
            message.user.monk = false;
            message.user.podarki = 10;
            message.user.kaki = false;
            message.user.cip = 0;
            message.user.his = 0;
            message.user.like = 0;
            message.user.obor = false;
            message.user.rubins = 0;
            message.user.bank = 0;
            message.user.diamonds = 0;
            message.user.emeralds = 0;
            message.user.verify = 0;
            message.user.pass = 0;
            message.user.coal = 0;
            message.user.a_war = false;
            message.user.iron = 0;
            message.user.uron = 0;
            message.user.war = false;
            message.user.cardgames = 0;
            message.user.hero_id = false;
            message.user.hero_name = `Герой не выбран`;
            message.user.hero_hp = 100;
            message.user.hero_zashita = 8;
            message.user.hero_ataka = 10;
            message.user.hero_kr_udar = 4;
            message.user.gold = 0;
            message.user.btc = 0;
            message.user.farm_btc = 0;
            message.user.straik = 0;
            message.user.prefix = 1;
            message.user.energy = 10;
            message.user.pay = false;
            message.user.gold = 0;
            message.user.biz = 0;
            message.user.ruda = 0;
            message.user.alvl = 0;
            message.user.givemyrub = false;
            message.user.stat = false;
            message.user.urabota = false;
            message.user.ymoney = 0;
            message.user.warns = 0;
            message.user.warn = 0;
            message.user.warn_p = `Нет`;
            message.user.rating = 0;
            message.user.mention = true;
            message.user.ban = false;
            message.user.translation = false;
            message.user.commands = false;
            message.user.clanwar = false;
            message.user.delacc = false;
            message.user.obva = false;
            message.user.blockpay = false;
            message.user.krik = false;
            message.user.mine = false;
            message.user.hasWorked = false;
            message.user.bonus = false;
            message.user.poxod = false;
            message.user.poxod2 = false;
            message.user.shaxta = false;
            message.user.work = 0;
            message.user.sword = false;
            message.user.eda = false;
            message.user.times = false;
            message.user.call = 0;
            message.user.clan = 0;
            message.user.ccard = false;
            message.user.bpriglos = 0;
            message.user.gpriglos = 0;
            message.user.mer = false;
            message.user.pp = 0;
            message.user.card = 0;
            message.user.seccard = 0;
            message.user.cardss = 0;
            message.user.messages = true;
            message.user.giverub = false;
            message.user.mute = false;
            message.user.message = 0;
            message.user.notifications = true;
            message.user.exp = 1;
            message.user.level = 1;
            message.user.car = 0;
            message.user.yacht = 0;
            message.user.airplane = 0;
            message.user.strana = 1;
            message.user.helicopter = 0;
            message.user.home = 0;
            message.user.apartment = 0;
            message.user.phone = 0;
            message.user.farm = 0;
            message.user.farm_count = 0;
            message.user.pet = 0;
            message.user.partner = 0;
            message.user.lvl = 0;
            message.user.poterl = false;
            return message.user.pp = 0;
        }
    }


});


cmd.on(/^(?:qкурс|q курс|📊 Курс)$/i, async (message, bot) => {
    message.user.foolder += 1;
    return bot(`курс валют на данный момент:
💸блок: ${utils.sp(btc)}$`);
});

cmd.on(/^(?:qблок|q блок)\s(.*)$/i, async (message, bot) => {
    message.user.foolder += 1;
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

    if (!Number(message.args[1])) return;
    message.args[1] = Math.floor(Number(message.args[1]));

    if (message.args[1] <= 0) return;

    if ((message.args[1] * btc) > message.user.balance) return bot(`недостаточно денег
Курс блока: ${btc}р.`);
    else if ((message.args[1] * btc) <= message.user.balance) {
        message.user.balance -= (message.args[1] * btc);
        message.user.btc += message.args[1];

        return bot(`вы купили ${utils.sp(message.args[1])}Б. за ${utils.sp(message.args[1] * btc)}р.`);
    }
});


cmd.on(/^(?:qПолучить паспорт|q Получить паспорт)$/i, async (message, bot) => {
    if (message.user.pass > 0) return bot(`у вас уже есть паспорт!`);

    let prize = utils.pick([1]);
    if (prize === 1) {
        message.user.pass = 1;
        message.user.balance = 100000;
        return bot(`🧔 Здравствуйте , я Антон Имомеев с вас за паспорт 100.000 рублей!
 
Для получения паспорта , пожалуйста, ознакомьтесь с нашими правилами бота. Напишите "Правила" и вступите в сообщество Savik'a.

И так же рекомендуем по желанию присоединится в дискорд сервер Savik'a (https://discord.gg/uy3Bh8NE3k)

🧔 Прочитав правила, Вы автоматически получаете паспорт  соглашаетесь с ними и несете полную ответственность.
 
🧔 Благодаря паспорту, Вам будут доступны многие команды. Вы сможете спокойно устроиться на легальную работу и зарабатывать деньги. Благодаря паспорту, вы сможете купить себе имущество. Также Вы сможете вступить в гражданский брак. `);
    }
});




cmd.on(/^(?:q брак|qбрак)(\s?https\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i, (message, bot) => {
    message.user.foolder += 1;
    if (message.user.pass < 1) return bot(`Нету паспорта! Как его получить можно узнать в разделе "qПолезное"`);

    if (message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
    if (Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!user) return bot(`неверный ID`);

    if (user.marriage.partner) return bot(`этот человек уже состоит в браке`);

    if (user.marriage.requests.find(x => x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

    if (message.user.marriage.requests.find(x => x == message.args[1])) {
        message.user.marriage.requests = [];
        message.user.marriage.partner = user.uid;

        user.marriage.requests = [];
        user.marriage.partner = message.user.uid;

        return bot(`вы вступили в брак с игроком "${user.tag}"
📒 » Дорогие молодые! От всего сердца INZEWORLD поздравляет Вас с вступлением в законный брак и образованием семьи! Любовь – самые прекрасные чувство в человеческой жизни. Пусть Ваша любовь будет такой же долгой, как Ваша жизнь! Живите в любви, счастье и радости, пусть у Вас будут здоровые и жизнерадостные дети, и будьте верной опорой Вашим отцам и матерям. В добрый час, дорогие! Горько!...
  💍 » С этого момента вы объявляетись мужем и женой!`);
    }

    user.marriage.requests.push(message.user.uid);
    return bot(`вы сделали предложение игроку "${user.tag}"`);
});




cmd.on(/^(?:qбраки|q браки)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.user.marriage.partner) return bot(`вы уже состоите в браке`);
    return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});



cmd.on(/^(?:qразвод|q развод)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (!message.user.marriage.partner) return bot(`вы не состоите в браке`);

    let user = users.find(x => x.uid === message.user.marriage.partner);

    message.user.marriage.partner = 0;
    user.marriage.partner = 0;

    return bot(`вы теперь свободный человек`);
});



cmd.on(/^(?:qдата|q дата)\s([0-9]+)$/i, async (message, bot) => {
    message.user.foolder += 1;
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (!user) return bot(`неверный ID`);

    return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.on(/^(?:qработа|q работа)\s([0-9]+)$/i, async (message, bot) => {
    if (message.user.pass < 1) return bot(`Нету паспорта! Как его получить можно узнать в разделе "qПолезное"!`);
    message.user.foolder += 1;
    if (message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

    const work = works.find(x => x.id === Number(message.args[1]));
    if (!work) return console.log(message.args[1]);

    if (work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
    else if (work.requiredLevel <= message.user.level) {
        message.user.work = work.id;
        return bot(`Вы устроились - ${work.name}
		👔 Введите команду "qРаботать"`);
    }
});



cmd.on(/^(?:qработы|q работы)$/i, async (message, bot) => {
    if (message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "qПолезное"`);
    message.user.foolder += 1;
    if (message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
    return bot(`профессии:
	🔹 1. Работник в Орифлейм - зарплата ~ 25.000р. ~ 1LVL
	🔹 2. Программист в ITM - зарплата ~ 40.000р.  ~ 2LVL
	🔹 3. Уборшик в IT школе - зарплата ~ 45.000р. ~ 3LVL
	🔹 4. Работник в Роскомнадзоре - зарплата ~ 50.000р. ~ 4LVL
	🔹 5. Уборщик в Роскомнадзоре - зарплата ~ 80.000р. ~ 5LVL
	🔹 6. Программист в Kaspersky - зарплата ~ 94.890р. ~ 6LVL
	🔹 7. Зам.Президента IT школы - зарплата ~ 125.000р. ~ 7LVL
	🔹 8. Президент IT школы - зарплата ~ 135.000р. ~ 8LVL
	🔹 9. Основатель RuNet'a - зарплата ~ 175.000р. ~ 9LVL
	🔹 10.Основатель DarkNet'a - зарплата ~ 175.0000р. ~ 10LVL
	🔹 11.Основатель Яндекса - зарплата ~ 7.501.000.434.436р. ~ 11LVL
	🔹 12.Основатель Google - зарплата ~ 175.000.043.443.688р. ~ 12LVL

	Для трудоустройства введите "Работа [номер]`);
});



cmd.on(/^(?:qработать|q работать)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "qРаботы"`);

    if (message.user.timers.hasWorked) return bot(`рабочий день закончен.
	 ваш ур. постепенно повышается.
	⏳ Вы сможете работать в ближайшие 10 минут`);

    setTimeout(() => {
        message.user.timers.hasWorked = false;
    }, 600000);

    message.user.timers.hasWorked = true;

    const work = works.find(x => x.id === message.user.work);
    const earn = utils.random(work.min, work.max);

    message.user.balance += earn;
    message.user.exp += 1;

    return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}р`);
});

cmd.on(/^(?:qуволиться|q уволиться)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (!message.user.work) return bot(`вы нигде не работаете`);

    message.user.work = 0;
    return bot(`вы уволились со своей работы`);
});



cmd.on(/^(?:qкубик в жопе|qкуб в жопе|q кубик в жопе|q куб в жопе)\s([1-6])$/i, async (message, bot) => {
    message.user.foolder += 1;
    const int = utils.pick([1, 2, 3, 4, 5, 6]);
    if (int == message.args[1]) {
        message.user.balance += 1000;
        return bot(`вы успешно запихали кубик в попку! Приз 1.000р`);
    } else return bot(`вы не смогли запихать кубик в попку(
	Выпало число в жопе  ${int}`);
});

cmd.on(/^(?:qказино|qставка|q казино|q ставка)\s(.*)$/i, async (message, bot) => {
    if (kazna.kazino == true) return bot(`[👨‍✈]Мер закрыл казино!`);
    message.user.foolder += 1;
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if (!Number(message.args[1])) return;
    message.args[1] = Math.floor(Number(message.args[1]));

    if (message.args[1] <= 0) return;

    if (message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
    else if (message.args[1] <= message.user.balance) {
        message.user.balance -= message.args[1];
        const multiply = utils.pick([0.7, 0.10, 0.3, 0.6, 0, 1, 0.4, 0.2, 1, 0.9, 0.8, 0.6, 0.7, 1, 0.34, 0.9, 1.4, 0.56, 0.1, 1.14, 0.11, 0.32, 0.1, 0.7, 1, 0.3, 0.58, 1.1, 0.3, 0.2, 0.1, 0.3, 0.4, 0.2, 1, 0.6, 0.1, 0.7, 0.8, 1, 2.5, 0.8, 0.2, 1.6, 0.5, 1, 0.1, 1.16, 0.8, 0.5, 2.2, 0.5, 0.97, 0.18, 1.4, 0.66, 1, 0.99, 0.3, 2, 0.3, 0.7, 0.30, 0.79, 0.1, 1, 1.8, 0.50, 2, 0.30, 2, 0.3, 1.1, 0.8, ]);

        message.user.balance += Math.floor(message.args[1] * multiply);
        return message.send(`
		[${['😐','🤐', '😝', '😰', '🤧'].random()}] >> ${multiply === 1 ? `Ваши деньги остаются при вас` : `${multiply < 1 ? `Вы просрали ${utils.sp(message.args[1] * multiply)}р.` : `Вы выиграли ${utils.sp(message.args[1] * multiply)}р.`}`} (x${multiply})
		
		[💰] || Ваш баланс: ${utils.sp(message.user.balance)}р.`);
    }
});


cmd.on(/^(?:qтрейд|q трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
    message.user.foolder += 1;
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if (!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));

    if (message.args[2] <= 0) return;

    if (message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
    else if (message.args[2] <= message.user.balance) {
        message.user.balance -= message.args[2];

        const rand = utils.pick([0, 1]);
        const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

        if (rand === nav) {
            const multiply = utils.pick([0.7, 0.8, 0.9, 0.95, 1, 1.5, 1.7, 1.6, 0.1, 2, 1.2, 2]);
            message.user.balance += Math.floor(message.args[2] * multiply);

            return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(45)}р.
			✅ Вы заработали +${message.args[2] * multiply}р.
			💰 Баланс: ${message.user.balance}р.`);
        } else {
            return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(13)}р.
			❌ Вы просрали ${message.args[2]}р.
			💰 Баланс: ${message.user.balance}`);
        }
    }
});

cmd.on(/^(?:qстаканчик|qстаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
    message.user.foolder += 1;
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if (!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));

    if (message.args[2] <= 0) return;

    if (message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
    else if (message.args[2] <= message.user.balance) {
        message.user.balance -= message.args[2];

        const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
        const cup = utils.random(1, 3);

        if (cup == message.args[1]) {
            message.user.balance += Math.floor(message.args[2] * multiply);
            return bot(`вы угадали! Приз ${message.args[2] * multiply}`);
        } else {
            return bot(`вы не угадали, это был ${cup} стаканчик`);
        }
    }
});

cmd.on(/^(?:qбизнес|q бизнес)\s(\d)$/i, async (message, bot) => {
    message.args[1] = Math.floor(Number(message.args[1]));
    if (message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес [1 или 2]`);
    if (message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
    message.args[1]--;
    const biz = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1];

    return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(Math.floor(biz.earn / biz.workers * message.user.business[message.args[1]].workers))}р./час
	💼 Рабочих: ${message.user.business[message.args[1]].workers}/${biz.workers}
	💰 На счёте: ${utils.sp(message.user.business[message.args[1]].moneys)}р.

	${ (businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] != null ? "✅ Доступно улучшение! (" + utils.sp(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost) + "р.)" : "") }`);
});

cmd.on(/^(?:qбизнес|q бизнес)\s(?:снять)\s(.*)\s(.*)$/i, async (message, bot) => {
    message.args[1] = Math.floor(Number(message.args[1]));
    if (message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: qБизнес снять [1 или 2] [количество]`);
    if (message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
    message.args[1]--;
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.business[message.args[1]].moneys);
    if (!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));
    if (message.args[2] <= 0) return bot(`вы не можете снять столько со счёта бизнеса`);
    if (message.args[2] > message.user.business[message.args[1]].moneys) return bot(`у вас нет денег на счёте этого бизнеса`);

    message.user.balance += message.args[2];
    message.user.business[message.args[1]].moneys -= message.args[2];

    return bot(`вы сняли со счёта своего бизнеса ${utils.sp(message.args[2])}р.`);
});

cmd.on(/^(?:qбизнес|q бизнес)\s(?:улучшить)\s(.*)$/i, async (message, bot) => {
    message.args[1] = Math.floor(Number(message.args[1]));
    if (message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес улучшить [1 или 2]`);
    if (message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
    message.args[1]--;
    if (businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] == null) return bot(`нет доступных улучшений для вашего бизнеса`);
    const cost = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost;
    if (cost > message.user.balance) return bot(`у вас недостаточно денег для улучшения`);
    message.user.balance -= cost;
    message.user.business[message.args[1]].upgrade++;

    return bot(`вы улучшили бизнес #${message.args[1] + 1} за ${utils.sp(cost)}р.`);
});

cmd.on(/^(?:qбизнес|q бизнес)\s(?:нанять)\s(.*)\s(.*)$/i, async (message, bot) => {
    message.args[1] = Math.floor(Number(message.args[1]));
    message.args[2] = Math.floor(Number(message.args[2]));
    if (message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес нанять [1 или 2] [кол-во работников]`);
    if (message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
    message.args[1]--;
    if (message.user.business[message.args[1]].workers + message.args[2] > businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1].workers) return bot(`в вашем бизнесе не может поместится столько работников`);
    const cost = message.args[2] * 0;
    if (cost > message.user.balance) return bot(`у вас недостаточно денег для покупки рабочих`);
    message.user.balance -= cost;
    message.user.business[message.args[1]].workers += message.args[2];

    return bot(`вы наняли ${message.args[2]} рабочих для бизнеса #${message.args[1] + 1}`);
});

cmd.on(/^(?:qкирка|q кирка)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (!message.user.misc.farm) return bot(`у вас нет кирки`);
    if (!message.user.farm_btc) return bot(`на вашей шахте пусто, новые блоки появятся в течении 24ч.`);

    const btc_ = message.user.farm_btc;

    message.user.btc += message.user.farm_btc;
    message.user.farm_btc = 0;

    return bot(`вы собрали ${utils.sp(btc_)}Б., следующие блоки появятся через час 
	▫ блоков: ${utils.sp(message.user.btc)}Б.`);
});


cmd.on(/^(?:qсейф|q сейф)\s([0-9]+)$/i, async (message, bot) => {
    message.user.foolder += 1;
    if (message.args[1] < 10 || message.args[1] >= 100) return;

    const int = utils.random(10, 99);
    message.args[1] = Number(message.args[1]);

    if (int === message.args[1]) {
        message.user.balance += 100000000;
        return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 100.000.000р.`);
    } else if (int !== message.args[1]) {
        return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 100.000.000р.`);
    }
});

cmd.on(/^(?:qко|qтест|q ко|q тест)$/i, async (message, args, bot) => {
    message.user.foolder += 1;
    return message.send(`&#10004; » Работаю! Uptime: ${uptime.days}:${uptime.hours}:${uptime.min}:${uptime.sec}`);
});

cmd.on(/^!!allвсем\s([^]+)/i, async (message, args, bot) => {
    message.user.foolder += 1;
    if (message.user.alvl < 5) return;
    users.filter(x => x.id !== 1).map(zz => {
        vk.api.messages.send({
            user_id: zz.id,
            message: `\n${message.args[1]}`
        });
    });
    let people = 0;
    for (let id in users) {
        vk.api.call('messages.send', {
            chat_id: id,
            message: ` \n${message.args[1]}`
        });
    }
    return message.send(`💬 || Я успешно сделал рассылку! Посмотрите, как будет видно другим:\n\n[Savik Bot], Сегодня в ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n"${message.args[1]}"`);

});

cmd.on(/^!!!allбеседы\s([^]+)/i, async (message, args, bot) => {
    message.user.foolder += 1;
    if (message.user.alvl < 5) return;

    let people = 0;
    for (let id in users) {
        vk.api.call('messages.send', {
            chat_id: id,
            message: ` \n${message.args[1]}`
        });
    }
    return message.send(`💬 || Я успешно сделал рассылку! Посмотрите, как будет видно другим:\n\n[Savik Bot], Сегодня в ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n"${message.args[1]}"`);

});




cmd.on(/^(?:qсостав|q состав)/i, async (message, args, bot) => {
    let systems, sozdatels, admins, moders, premiu, mag, osnov, chat;
    osnov = '\n⚕ ➾лорд\n';
    mag = '\n⚕ ➾маг\n';
    admins = '\n⚕ ➾Ассасин\n';
    premiu = '\n⚕ ➾Барон\n';
    moders = '\n⚕ ➾Сквайр\n';
    for (let id in users) {
        if (users[id]) {
            let user = users[id];
            if (user.alvl == 5) osnov += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
            if (user.alvl == 4) mag += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
            if (user.alvl == 3) admins += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
            if (user.alvl == 2) premiu += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
            if (user.alvl == 1) moders += `🔹 » @id${users[id].id}(${users[id].tag})\n`;
        }
    }
    let text = `\n`;
    if (osnov.length != 24) text += osnov;
    if (mag.length != 24) text += mag;
    if (admins.length != 24) text += admins;
    if (premiu.length != 24) text += premiu;
    if (moders.length != 24) text += moders;
    return message.send(`${text}`);
});

cmd.on(/^(?:qverify|qподтвержденные|q verify|q подтвержденные)$/i, async (message, args, bot) => {
    let verify, chat;
    verify = '\n✅Подтвержденные Аккаунты✅\n';
    for (let id in users) {
        if (users[id]) {
            let user = users[id];

            if (user.verify == 1) verify += `🔹 » @id${users[id].id}(${users[id].tag}) [ID: ${users[id].uid}]\n`;
        }
    }
    let text = `\n`;
    if (verify.length != 24) text += verify;
    return message.send(`${text}`);
});




cmd.on(/^(?:qатаковать|q атаковать)\s?([0-9]+)?/i, async (message, args, bot) => {
    if (!message.args[1]) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Пример команды: "атаковать ID(игрока)"`);
    let i = Number(message.args[1])
    if (message.user.uid == i) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Упс... Вы указали свой ID`);
    let a = users[i];
    if (!users[i]) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Упс... Такого игрока не найдено.`);
    if (message.user.war == true) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Вы уже атаковали в этом часу.`);
    if (a.war == true) return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 На этого игрока уже нападали.`);



    let summ_user = message.user.hero_hp + message.user.hero_zashita + message.user.hero_ataka;
    let summ_a = a.hero_hp + a.hero_zashita + a.hero_ataka;

    if (rand(0, 1) == 1) {
        summ_user += message.user.hero_kr_udar;
    }
    if (rand(0, 1) == 1) {
        summ_a += a.hero_kr_udar;
    }
    if (message.user.gun != false) {
        summ_user += message.user.uron;
    }
    if (a.gun != false) {
        summ_a += a.uron;
    }

    if (summ_user > summ_a) {
        message.user.hero_hp += 9;
        message.user.hero_zashita += 10;
        message.user.hero_ataka += 6;
        message.user.hero_kr_udar += 4;
        message.user.rubins += rand(100, 250);
        if (message.user.alvl == 1) {
            message.user.rubins += rand(50, 200);
        }
        message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь ${a.tag} ${summ_a}%

				🏁 Победу одержал ${message.user.tag}!
				💰 Герой получает получает  рубины ${utils.sp(message.user.rubins)}
				📢 Характеристики Героя улучшены на ${utils.sp(message.user.hero_hp)}%
				
			`);
    }
    if (summ_user < summ_a) {
        a.hero_hp += 5;
        a.hero_zashita += 6;
        a.hero_ataka += 3;
        a.hero_kr_udar += 4;
        a.coins += rand(50, 200);
        if (a.alvl == 1) {
            message.user.rubins += rand(50, 200);
        }
        message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь ${a.tag} ${summ_a}%

				🏁 Победу одержал ${a.tag}!
				💰 <${a.tag}> получает  рубины ${utils.sp(message.user.rubins)}
				📢 Характеристики его Героя улучшены на ${utils.sp(message.a.hero_hp)}%
			`);
    }
    if (summ_a == summ_user) {
        message.send(`@id${message.user.id}(${message.user.tag}),
				⚔ Мощь Вашего героя: ${summ_user}%
				⚔ Мощь ${a.tag} ${summ_a}%

				🏁 Шансы равны...
				🏁 Бой не состоялся.
			`);
    }
    message.user.war = true;
    a_war = true;
    setTimeout(() => {
        message.user.war = false;
        a_war = false;
    }, 3600000); // 3600000 
});

cmd.on(/^(?:qоткрыть|q открыть)\s?([^]+)?/i, async (message, args, bot) => {
    let i = message.args[1];
    let user = message.user;
    if (!i) {
        if (message.user.cardgames < 1) return message.send(`📛 У вас нет Карт Героя.`);
        message.user.cardgames -= 1;
        let new_card = card(user);

        return message.send(`@id${message.user.id}(${message.user.tag}),
		 		⏩ Вы открыли Карту Героя
		 		🗡 К характеристике <${new_card[0].toString().replace(/hp/gi, "Здоровье").replace(/zashita/gi, "Защита").replace(/ataka/gi, "Атака").replace(/kr_udar/gi, "Критический Удар")}>
		 		➕ Добавлено ${new_card[1]}%
		 	`, {
            attachment: new_card[2]
        });
    }
    return message.send(`@id${message.user.id}(${message.user.tag}),\n📛 Чтобы открыть карту, напишите: "Открыть"`);
});

cmd.on(/^(?:✅ Герои|qгерои|q герои|✅ Герои)/i, async (message, bot) => {
    return message.send(`@id${message.user.id}(${message.user.tag}),\n✅ Укажите номер героя\n- - - - -\n${text_hero()}\nДля выбора героя введите "Герой [ид]"`)
});

cmd.on(/^(?:qГерой|q Герой)\s?([0-9]+)?/i, async (message, args, bot) => {
    let i = Number(message.args[1])
    if (i < 0 || i > 6) return message.send(`📛 Номер должен быть > 0 и < 6`);
    if (i) {
        message.user.hero_id = i;
        message.user.hero_name = heros[i].group;
        return message.send(`@id${message.user.id}(${message.user.tag}),
			⚔ Вы выбрали героя: ${heros[i].group}
			🗡 Описание: ${heros[i].text}
			- - - - - - - - - - - - - - hero - - - - - - - - - - - - - -
			`);
    }
});

//----------|•Функции•|-----------\\

function card(user) {
    card_hp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].random();
    card_hp_url = [0, 'photo-205230700_457239118']
    ////////
    card_zashita = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].random();
    card_zashita_url = [0, 'photo-205230700_457239120']
    ////////
    card_ataka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].random();
    card_ataka_url = [0, 'photo-205230700_457239119']
    ////////
    card_kr_udar = [1, 2, 3, 4, 5].random();
    card_kr_udar_url = [0, 'photo-167936449_456239109']
    ////////
    let a = rand(1, 4);
    if (a == 1) {
        user.hero_hp += Number(card_hp);
        return ['hp', card_hp, card_hp_url[card_hp]];
    }
    if (a == 2) {
        user.hero_zashita += Number(card_zashita);
        return ['zashita', card_zashita, card_zashita_url[card_zashita]];
    }
    if (a == 3) {
        user.hero_ataka += Number(card_ataka);
        return ['ataka', card_ataka, card_ataka_url[card_ataka]];
    }
    if (a == 4) {
        user.hero_kr_udar += Number(card_kr_udar);
        return ['kr_udar', card_kr_udar, card_kr_udar_url[card_kr_udar]];
    }
}

//-----------------------------------------------------\\

function text_hero() {
    let text = '';
    for (i = 1; i < 7; i++) {
        var h = heros[i];
        text += `⏩ Герой: ${h.group}
- - - - - 
📜 Описание: ${h.text}
- - - - - 
[🆔] » ${i}
 - - - - -
      `
    }
    return text
}

//-----------------------------------------------------\\

const heros = {
    "1": {
        group: "Маг",
        text: `Волшебник — герой, посвятивший свою жизнь изучению древних мистических таинств и искусств. Он не способен сражаться в первых рядах, но при должной поддержке успеет нанести огромный урон, пока противники будут тщетно пытаться добраться до него.`
    },
    "2": {
        group: "Техник",
        text: `Техник — герой, чьи технологии и машины позволяют выполнить любую задачу, какую только можно придумать. Сам по себе он довольно хил, но мощная броня и совершенное оружие решают эту проблему за него. `
    },
    "3": {
        group: "Воин",
        text: `Воин — герой, для которого долг и честь — краеугольные камни жизни. Закалённый в боях, он может принять на себя главный удар вражеских сил, при этом сокрушая противников по всем фронтам.`
    },
    "4": {
        group: "Варвар",
        text: `Варвар — герой, которого не волнует ничего, кроме его жажды сражений, крови и побед. Он будет биться с врагами лицом к лицу до тех пор, пока не погибнет он, или, что куда более вероятно, они. `
    },
    "5": {
        group: "Командир",
        text: `Командир — герой, присутствие которого на поле боя само по себе воодушевляет союзников. До тех пор, пока его не победили, его отряды будут биться с удвоенным пылом и отвагой — а победить его весьма трудно. `
    },
    "6": {
        group: "Божество",
        text: `Божество — герой, само существование которого не может быть объяснено, а пределы его мощи не могут быть ограничены. Сражаясь с ним, враг может быть обманут кажущейся хрупкостью — перед тем, как единственный удар покончит с ним.`
    }
}

//-----------------------------------------------------\\
function check(user) {
    if (user.hero_id == false) return message.send(`\n‼ Упс...‼\n У вас нет персонажа.]\n1&#8419; Этап. Выбор персонажа.\n&#9193; "Герои" - список персонажей.`);
}

//------------------------------------------------------------------------------------\\
var uptime = {
    sec: 0,
    min: 0,
    hours: 0,
    days: 0
}
//------------------------------------------------------------------------------------\\

setInterval(() => {
    uptime.sec++;
    if (uptime.sec == 60) {
        uptime.sec = 0;
        uptime.min += 1;
    }
    if (uptime.min == 60) {
        uptime.min = 0;
        uptime.hours += 1;
    }
    if (uptime.hours == 24) {
        uptime.hours = 0;
        uptime.days += 1;
    }
}, 1000);

//------------------------------------------------------------------------------------\\

function spaces(string) {
    if (typeof string !== "string") string = string.toString();
    return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};

Array.prototype.random = function() {
    return this[Math.floor(this.length * Math.random())];
}

function rand(min, max) {
    return Math.round(Math.random() * (max - min)) + min
}

function getRandomInt(x, y) {
    return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
}

function getRandomElement(array) {
    return array[getRandomInt(array.lenght - 1)];
}


function getRandomElement(array) {
    return array[getRandomInt(array.length - 1)];
}