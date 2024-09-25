const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Категорії рослин
// const plants = {
//  'Folia decorativa': [
//    {
//      id: 1,
//      name: 'Philodendron',
//      name_uk: 'Філодендрон',
//      name_lat: 'Philodendron',
//      price: 150,
//    },
//    {
//      id: 2,
//      name: 'Monstera',
//      name_uk: 'Монстера',
//      name_lat: 'Monstera deliciosa',
//      price: 200,
//    },
//    {
//      id: 3,
//      name: 'Snake Plant',
//      name_uk: 'Зміїне рослина',
//      name_lat: 'Sansevieria trifasciata',
//      price: 100,
//    },
//    {
//      id: 4,
//      name: 'Pothos',
//      name_uk: 'Потос',
//      name_lat: 'Epipremnum aureum',
//      price: 120,
//    },
//    {
//      id: 5,
//      name: 'Fiddle Leaf Fig',
//      name_uk: 'Фігове дерево',
//      name_lat: 'Ficus lyrata',
//      price: 250,
//    },
//    {
//      id: 6,
//      name: 'Rubber Plant',
//      name_uk: 'Рослина-каучук',
//      name_lat: 'Ficus elastica',
//      price: 180,
//    },
//    {
//      id: 7,
//      name: 'ZZ Plant',
//      name_uk: 'ZZ-рослина',
//      name_lat: 'Zamioculcas zamiifolia',
//      price: 90,
//    },
//    {
//      id: 8,
//      name: 'Peace Lily',
//      name_uk: 'Лілія миру',
//      name_lat: 'Spathiphyllum',
//      price: 110,
//    },
//    {
//      id: 9,
//      name: 'Chinese Evergreen',
//      name_uk: 'Китайське вічнозелене',
//      name_lat: 'Aglaonema',
//      price: 130,
//    },
//    {
//      id: 10,
//      name: 'Spider Plant',
//      name_uk: 'Павук-рослина',
//      name_lat: 'Chlorophytum comosum',
//      price: 70,
//    },
//  ],
//  'Flora florens': [
//    { id: 11, name: 'Rose', name_uk: 'Роза', name_lat: 'Rosa', price: 100 },
//    {
//      id: 12,
//      name: 'Lavender',
//      name_uk: 'Лаванда',
//      name_lat: 'Lavandula',
//      price: 80,
//    },
//    {
//      id: 13,
//      name: 'Tulip',
//      name_uk: 'Тюльпан',
//      name_lat: 'Tulipa',
//      price: 90,
//    },
//    {
//      id: 14,
//      name: 'Sunflower',
//      name_uk: 'Соняшник',
//      name_lat: 'Helianthus annuus',
//      price: 75,
//    },
//    {
//      id: 15,
//      name: 'Daisy',
//      name_uk: 'Ромашка',
//      name_lat: 'Bellis perennis',
//      price: 50,
//    },
//    {
//      id: 16,
//      name: 'Peony',
//      name_uk: 'Півонія',
//      name_lat: 'Paeonia',
//      price: 120,
//    },
//    {
//      id: 17,
//      name: 'Orchid',
//      name_uk: 'Орхідея',
//      name_lat: 'Orchidaceae',
//      price: 200,
//    },
//    {
//      id: 18,
//      name: 'Chrysanthemum',
//      name_uk: 'Хризантема',
//      name_lat: 'Chrysanthemum',
//      price: 65,
//    },
//    {
//      id: 19,
//      name: 'Hydrangea',
//      name_uk: 'Гортензія',
//      name_lat: 'Hydrangea',
//      price: 140,
//    },
//    {
//      id: 20,
//      name: 'Marigold',
//      name_uk: 'Нагідки',
//      name_lat: 'Tagetes',
//      price: 40,
//    },
//  ],
//  Succulentiae: [
//    {
//      id: 21,
//      name: 'Aloe Vera',
//      name_uk: 'Алоє Вера',
//      name_lat: 'Aloe vera',
//      price: 120,
//    },
//    {
//      id: 22,
//      name: 'Cactus',
//      name_uk: 'Кактус',
//      name_lat: 'Cactaceae',
//      price: 60,
//    },
//    {
//      id: 23,
//      name: 'Jade Plant',
//      name_uk: 'Дерево щастя',
//      name_lat: 'Crassula ovata',
//      price: 150,
//    },
//    {
//      id: 24,
//      name: 'Echeveria',
//      name_uk: 'Ехеверія',
//      name_lat: 'Echeveria',
//      price: 80,
//    },
//    { id: 25, name: 'Sedum', name_uk: 'Седум', name_lat: 'Sedum', price: 45 },
//    {
//      id: 26,
//      name: 'Haworthia',
//      name_uk: 'Гавортія',
//      name_lat: 'Haworthia',
//      price: 70,
//    },
//    { id: 27, name: 'Agave', name_uk: 'Агаве', name_lat: 'Agave', price: 100 },
//    {
//      id: 28,
//      name: 'Sempervivum',
//      name_uk: 'Семперівум',
//      name_lat: 'Sempervivum',
//      price: 55,
//    },
//    {
//      id: 29,
//      name: 'Lithops',
//      name_uk: 'Літопс',
//      name_lat: 'Lithops',
//      price: 130,
//    },
//    {
//      id: 30,
//      name: 'Crassula',
//      name_uk: 'Красула',
//      name_lat: 'Crassula',
//      price: 90,
//    },
//  ],
//  Pteridophyta: [
//    {
//      id: 31,
//      name: 'Fern',
//      name_uk: 'Папороть',
//      name_lat: 'Pteridophyta',
//      price: 90,
//    },
//    {
//      id: 32,
//      name: 'Boston Fern',
//      name_uk: 'Бостонський папороть',
//      name_lat: 'Nephrolepis exaltata',
//      price: 110,
//    },
//    {
//      id: 33,
//      name: 'Asparagus Fern',
//      name_uk: 'Спаржевий папороть',
//      name_lat: 'Asparagus setaceus',
//      price: 95,
//    },
//    {
//      id: 34,
//      name: 'Staghorn Fern',
//      name_uk: 'Оленьовий папороть',
//      name_lat: 'Platycerium',
//      price: 140,
//    },
//    {
//      id: 35,
//      name: 'Maidenhair Fern',
//      name_uk: 'Волосся дівчини',
//      name_lat: 'Adiantum',
//      price: 120,
//    },
//  ],
//  'Plantae fructiferae': [
//    {
//      id: 36,
//      name: 'Apple Tree',
//      name_uk: 'Яблуня',
//      name_lat: 'Malus domestica',
//      price: 250,
//    },
//    {
//      id: 37,
//      name: 'Pear Tree',
//      name_uk: 'Груша',
//      name_lat: 'Pyrus',
//      price: 220,
//    },
//    {
//      id: 38,
//      name: 'Cherry Tree',
//      name_uk: 'Вишня',
//      name_lat: 'Prunus avium',
//      price: 300,
//    },
//    {
//      id: 39,
//      name: 'Peach Tree',
//      name_uk: 'Персик',
//      name_lat: 'Prunus persica',
//      price: 280,
//    },
//    {
//      id: 40,
//      name: 'Plum Tree',
//      name_uk: 'Слива',
//      name_lat: 'Prunus domestica',
//      price: 240,
//    },
//    {
//      id: 41,
//      name: 'Apricot Tree',
//      name_uk: 'Абрикос',
//      name_lat: 'Prunus armeniaca',
//      price: 260,
//    },
//    {
//      id: 42,
//      name: 'Fig Tree',
//      name_uk: 'Інжир',
//      name_lat: 'Ficus carica',
//      price: 270,
//    },
//    {
//      id: 43,
//      name: 'Lemon Tree',
//      name_uk: 'Лимон',
//      name_lat: 'Citrus limon',
//      price: 320,
//    },
//    {
//      id: 44,
//      name: 'Orange Tree',
//      name_uk: 'Апельсин',
//      name_lat: 'Citrus sinensis',
//      price: 310,
//    },
//    {
//      id: 45,
//      name: 'Grapefruit Tree',
//      name_uk: 'Грейпфрут',
//      name_lat: 'Citrus × paradisi',
//      price: 340,
//    },
//  ],
//  Cacti: [
//    {
//      id: 46,
//      name: 'Saguaro Cactus',
//      name_uk: 'Сагуаро',
//      name_lat: 'Carnegiea gigantea',
//      price: 150,
//    },
//    {
//      id: 47,
//      name: 'Barrel Cactus',
//      name_uk: 'Бочковий кактус',
//      name_lat: 'Ferocactus',
//      price: 130,
//    },
//    {
//      id: 48,
//      name: 'Christmas Cactus',
//      name_uk: 'Різдвяний кактус',
//      name_lat: 'Schlumbergera',
//      price: 140,
//    },
//    {
//      id: 49,
//      name: 'Pincushion Cactus',
//      name_uk: 'Подушковий кактус',
//      name_lat: 'Mammillaria',
//      price: 120,
//    },
//  ],
// };

const plants = {
	Orchidaceae: {
		0: {
			name: 'Дендробіум',
			price: 500,
			img: 'https://shop.camellia.ua/upload/kamelia_flora/photos/49/2d/1200x1200/ce67be92_6475f990b5b9d.JPG',
			flowerSize: '50',
			isFlowering: true,
			desc: 'це один з найпопулярніших родів орхідей, що налічує понад 1800 видів. Ці вражаючі рослини відомі своїм різноманіттям форм, кольорів та розмірів. Вони можуть мати стебла від коротких до довгих, а квіти — від маленьких до великих, зазвичай з яскравими і насиченими кольорами: від білого до рожевого, жовтого, фіолетового та навіть синього.',
			conditionsСare:
				'потребує яскравого, розсіяного освітлення і регулярного поливу, але слід уникати перезволоження. Рослина краще росте в спеціалізованому субстраті для орхідей, який забезпечує добру аерацію коренів. Підживлюйте її під час активного росту, використовуючи добрива для орхідей, щоб підтримувати здоров’я та рясне цвітіння.',
			light: true,
			temperature: '+18...+25',
			watering: 'помірний',
		},
		1: {
			name: 'Фаленопсис Біла Королівська',
			price: 700,
			img: 'https://shop.camellia.ua/upload/kamelia_flora/photos/5a/70/1200x1200/d96150a4_6358e68ec09cd.JPG',
			flowerSize: '70',
			isFlowering: true,
			desc: 'це царські квіти, які є дуже популярними серед квітникарів. Незважаючи на те, що королівська орхідея вважається більш вимогливою, ніж звичайна, з доглядом за нею справиться навіть новачок.Королівські орхідеї досить високі, мають великі квіти та тривале цвітіння, яке на 1-2 місяці довше, ніж у звичайних орхідей. У діаметрі квітки можуть досягати 20 см. А забарвлення буває абсолютно різне: білі, рожеві, в цятку, в смужку, фіолетові та багато інших. ',
			conditionsСare:
				'Для довгого цвітіння орхідеям потрібно багато світла. Ідеальні умови для них в місцях куди сонце потрапляє на декілька годин в день (зранку чи ввечері)',
			light: true,
			temperature: '+15...+30',
			watering: 'помірний',
		},
		2: {
			name: 'Міні орхідея мікс в кашпо',
			price: 2000,
			img: 'https://shop.camellia.ua/upload/kamelia_flora/photos/74/ea/1200x1200/28ea8b7_6066ee212b9ea.JPG',
			flowerSize: '35',
			isFlowering: true,
			desc: " це вишукана композиція з різних видів мініатюрних орхідей, представлених у стильному кашпо. Ці рослини відзначаються компактними розмірами, яскравими кольорами та елегантними формами, що робить їх ідеальними для прикраси будь-якого інтер'єру. Догляд за міні орхідеями простий: вони потребують яскравого, розсіяного світла і помірного поливу. Ця композиція додасть затишку і витонченості у ваш дім або офіс! ",
			conditionsСare:
				'Міні орхідея мікс потребує яскравого, розсіяного освітлення, помірного поливу і спеціалізованого субстрату для орхідей для підтримання здоров’я та цвітіння.',
			light: true,
			temperature: '+18...+25',
			watering: 'помірний',
		},
	},
	Foliage: {
		3: {
			name: 'Хамедорея',
			price: 500,
			img: 'https://polysad.com/media/cache/article_huge/chamaedorea1-660ec190e06af046980317.jpg.jpeg',
			flowerSize: '100',
			isFlowering: false,
			desc: ' це рід пальм, що включає різні види, висота яких може варіюватися. Зазвичай, вони досягають висоти від 1 до 3 метрів, в залежності від конкретного виду. Наприклад, Хамедорея елеганс (Chamaedorea elegans) зазвичай має висоту близько 1-1.5 метра.',
			conditionsСare:
				'Хамедорея потребує яскравого, розсіяного світла, помірного поливу з підсиханням верхнього шару ґрунту, високої вологості повітря, легкого дренованого субстрату та підживлення рідким добривом під час активного росту',
			light: true,
			temperature: '+18...+24',
			watering: 'помірний',
		},
		4: {
			name: 'Фікус Лірата Бамбіно',
			price: 630,
			img: 'https://cdn.27.ua/sc--media--prod/default/e3/72/dc/e372dcdd-4cec-4c6e-90a2-bb1b9062f963.jpeg',
			flowerSize: '45',
			isFlowering: false,
			desc: "це компактна декоративно-листяна рослина з великими, вражаючими листками, які мають характерну хвилясту форму. Ця рослина додає елегантності будь-якому інтер'єру завдяки своїй пишній зелені і стрункій формі",
			conditionsСare:
				'потребує яскравого, розсіяного освітлення та помірного поливу, дозволяючи верхньому шару ґрунту підсохнути між поливами. Рекомендується регулярно обприскувати листя, щоб підтримувати необхідну вологість.',
			light: true,
			temperature: '+18...+24',
			watering: 'помірний',
		},
		5: {
			name: 'Кротон Екселент',
			price: '749',
			img: 'https://flowers.ua/images/Flowers/articles/293-img-1.jpg',
			flowerSize: '70',
			isFlowering: false,
			desc: "це яскрава декоративно-листяна рослина, відома своїми великими, різнокольоровими листками, які мають насичені жовті, червоні та зелені відтінки. Завдяки своїй привабливій формі і кольору, ця рослина стає яскравим акцентом у будь-якому інтер'єрі.",
			conditionsСare:
				'Кротон Екселент потребує яскравого світла для підтримання насиченості кольорів, а полив має бути регулярним, дозволяючи верхньому шару ґрунту підсохнути між поливами. Важливо уникати застою води, щоб запобігти гниттю коренів',
			light: true,
			temperature: '+18...+24',
			watering: 'помірний',
		},
		6: {
			name: 'Заміокулькас',
			price: '1520',
			img: 'https://cdn.asterias.od.ua/images/81/81-2-61-700x700.jpg',
			flowerSize: '75',
			isFlowering: false,
			desc: 'відомий також як "щастя дерева" або "доларове дерево", є стійкою та невибагливою рослиною з глянцевими, темно-зеленими листками, які ростуть на м\'ясистих черешках. Ця рослина популярна завдяки своїй здатності витримувати низьку освітленість і нерегулярний полив, що робить її ідеальним вибором для офісів та житлових приміщень',
			conditionsСare:
				'потребує яскравого, але розсіяного світла, і не вимагає частого поливу — поливайте рослину, коли верхній шар ґрунту повністю підсохне. Важливо використовувати добре дренований ґрунт, щоб уникнути застою води.',
			light: false,
			temperature: '+15...+25',
			watering: 'помірний',
		},
		4: {
			name: '',
			price: '',
			img: '',
			flowerSize: '45',
			isFlowering: null,
			desc: '',
			conditionsСare: '',
			light: null,
			temperature: '+18...+24',
			watering: 'помірний',
		},
	},
};
app.get('/', (req, res) => {
	res.send('Welcome to the Plant API! Use /plants to see the list of plants.');
});

// Обробник для маршруту /plants
app.get('/plants', (req, res) => {
	res.json(plants);
});

// Обробник для favicon.ico
app.get('/favicon.ico', (req, res) => {
	res.status(204).end(); // Повертає статус 204 (No Content)
});

// Запуск сервера
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
