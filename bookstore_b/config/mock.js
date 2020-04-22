const { sequelize } = require('./sequelize');

const Category = require('../src/models/category.model');
const Book = require('../src/models/book.model');

sequelize.sync()
    .then(() => Category.create({
        title: 'Autobiography',
        sort_order: 4
    }))
    .then(() => Category.create({
        title: 'Drama',
        sort_order: 3
    }))
    .then(() => Category.create({
        title: 'Fiction',
        sort_order: 1
    }))
    .then(() => Category.create({
        title: 'History',
        sort_order: 2
    }))
    .then(() => Book.create({
        title: 'Происхождение',
        author: 'Дэн Браун',
        image: 'https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie.jpg',
        price: 710,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 2
    }))
    .then(() => Book.create({
        title: '1984',
        author: 'Джордж Оруэлл',
        image: 'https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg',
        price: 415,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 2
    }))
    .then(() => Book.create({
        title: 'Девушка в тумане',
        author: 'Донато Карризи',
        image: 'https://cv2.litres.ru/sbc/31635724_cover_185-elektronnaya-kniga-donato-karrizi-devushka-v-tumane.jpg',
        price: 464,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 2
    }))
    .then(() => Book.create({
        title: 'Империя должна умереть',
        author: 'Михаил Зыгарь',
        image: 'https://cv0.litres.ru/sbc/30804904_cover_185-elektronnaya-kniga-mihail-zygar-imperiya-dolzhna-umeret.jpg',
        price: 741,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 2
    }))
    .then(() => Book.create({
        title: 'Земное притяжение',
        author: 'Татьяна Устинова',
        image: 'https://cv9.litres.ru/sbc/30087292_cover_185-elektronnaya-kniga-tatyana-ustinova-zemnoe-prityazhenie.jpg',
        price: 317,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 1
    }))
    .then(() => Book.create({
        title: 'Зулейха открывает глаза',
        author: 'Гузель Яхина',
        image: 'https://cv5.litres.ru/sbc/17411250_cover_185-elektronnaya-kniga-guzel-yahina-zuleyha-otkryvaet-glaza-2.jpg',
        price: 254,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 1
    }))
    .then(() => Book.create({
        title: 'Очаровательный кишечник. Как самый могущественный орган управляет нами',
        author: 'Джулия Эндерс',
        image: 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_120/12178377-dzhuliya-enders-ocharovatelnyy-kishechnik-kak-samyy-moguschestvennyy-organ-upravlyaet-nami-12178377.jpg',
        price: 573,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 1
    }))
    .then(() => Book.create({
        title: 'iPhuck 10',
        author: 'Виктор Пелевин',
        image: 'https://cv7.litres.ru/sbc/31221870_cover_185-elektronnaya-kniga-viktor-pelevin-iphuck-10-25564903.jpg',
        price: 246,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 1
    }))
    .then(() => Book.create({
        title: '7 навыков высокоэффективных людей: Мощные...',
        author: 'Стивен Кови',
        image: 'https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_415/4239285--.jpg',
        price: 347,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 1
    }))
    .then(() => Book.create({
        title: 'Девушка во льду',
        author: 'Роберт Брындза',
        image: 'https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_415/27351732-robert-bryndza-12646976-devushka-vo-ldu.jpg',
        price: 882,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 4
    }))
    .then(() => Book.create({
        title: 'Магия утра. Как первый час дня определяет ваш успех',
        author: 'Хэл Элрод',
        image: 'https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/19063017-hel-elrod-magiya-utra.jpg',
        price: 829,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 4
    }))
    .then(() => Book.create({
        title: 'Азиатская европеизация. История Российского государства. Царь Петр...',
        author: 'Борис Акунин',
        image: 'https://cv3.litres.ru/sbc/31629439_cover_185-elektronnaya-kniga-boris-akunin-aziatskaya-evropeizaciya-istoriya-rossiyskogo-gosudarstva-car-petr-alekseevich.jpg',
        price: 389,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 4
    }))
    .then(() => Book.create({
        title: 'Ведьмак (сборник)',
        author: 'Анджей Сапковский',
        image: 'https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/6375365-andzhey-sapkovskiy-vedmak.jpg',
        price: 424,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 4
    }))
    .then(() => Book.create({
        title: 'Атлант расправил плечи',
        author: 'Айн Рэнд',
        image: 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/4236675-ayn-rend-atlant-raspravil-plechi.jpg',
        price: 157,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 4
    }))
    .then(() => Book.create({
        title: 'Цена вопроса. Том 1',
        author: 'Александра Маринина',
        image: 'https://cv6.litres.ru/sbc/33285466_cover_185-elektronnaya-kniga-aleksandra-marinina-cena-voprosa-tom-1-22638660.jpg',
        price: 664,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 3
    }))
    .then(() => Book.create({
        title: 'Исчезнувшая',
        author: 'Гиллиан Флинн',
        image: 'https://cv2.litres.ru/sbc/11029722_cover_185-elektronnaya-kniga-gillian-flinn-ischeznuvshaya.jpg',
        price: 476,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 3 
    }))
    .then(() => Book.create({
        title: 'Метро 2035',
        author: 'Дмитрий Глуховский',
        image: 'https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_120/10394259-dmitriy-gluhovskiy-metro-2035.jpg',
        price: 837,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 3 
    }))
    .then(() => Book.create({
        title: 'Снеговик',
        author: 'Ю Несбё',
        image: 'https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/4578362-u-nesbe-snegovik-4578362.jpg',
        price: 796,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 3  
    }))
    .then(() => Book.create({
        title: 'Как тренировать память. Не думайте о памяти – лучше используйте ее на все сто!',
        author: 'Джонатан Хэнкок',
        image: 'https://cv1.litres.ru/sbc/14195715_cover_185-elektronnaya-kniga-dzhonatan-henkok-kak-trenirovat-pamyat-ne-dumayte-o-pamyati-luchshe-ispolzuyte-ee-na-vse-sto.jpg',
        price: 399,      
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        count: 1,
        categoryId: 1
    }))
    .catch(err => console.log(err));