const express = require('express');
const cors = require('cors'); // Імпортуємо cors
const app = express();

const corsOptions = {
	origin: ['http://localhost:5173', 'https://home-plants-phi.vercel.app'], // Дозволені джерела
	methods: 'GET,POST',
	allowedHeaders: 'Content-Type,Authorization',
};
app.use(cors(corsOptions)); // Додаємо middleware для CORS
app.use(express.json());
app.get('/', (req, res) => {
	res.send('CORS налаштовано!');
});
const plants = {
	'Decorative deciduous': {
		3: {
			category: 'Декоративно-листяні',
			category_en: 'Decorative deciduous',
			id: 30,
			name: 'Хамедорея',
			name_en: 'Hamedorea',
			price: 500,
			img: [
				'https://i.pinimg.com/564x/44/51/bd/4451bd3dbc4ef1e20caa4b5ed0aa8fd2.jpg',
				'https://i.pinimg.com/564x/2e/8a/9d/2e8a9d45c321e46cbc888a4b80dd5d99.jpg',
				'https://i.pinimg.com/564x/8e/3b/a9/8e3ba9cf221bbca66f7e5156a9fd6273.jpg',
			],
			height: 100,
			desc: 'Це рід пальм, що включає різні види, висота яких може варіюватися. Зазвичай, вони досягають висоти від 1 до 3 метрів, в залежності від конкретного виду. Наприклад, Хамедорея елеганс (Chamaedorea elegans) зазвичай має висоту близько 1-1.5 метра.',
			conditionsСare:
				'Хамедорея потребує яскравого, розсіяного світла, помірного поливу з підсиханням верхнього шару ґрунту, високої вологості повітря, легкого дренованого субстрату та підживлення рідким добривом під час активного росту',
			status: 'Розпродаж',
			soilType:
				'Хамедорея найкраще росте в добре дренованому, легкому ґрунті з додаванням торфу або піску.',
			temperature:
				'Оптимальна температура для хамедореї становить від 16°C до 24°C',
			lightRequirement:
				'Рослина потребує яскравого, але розсіяного світла, уникаючи прямого сонця.',
			humidityLevel:
				'Хамедорея любить високу вологість, тому її слід регулярно обприскувати або тримати в приміщеннях з вологою атмосферою.',
			desc_en:
				'This is a genus of palm trees that includes various species, the height of which can vary. Typically, they reach a height of 1 to 3 meters, depending on the specific species. For example, Chamaedorea elegans usually has a height of about 1-1.5 meters.',
			conditionsСare_en:
				'Chamaedorea needs bright, diffused light, moderate watering with drying of the top layer of soil, high humidity, light drained substrate and fertilizing with liquid fertilizer during active growth',
			status_en: 'Sale',
			soilType_en:
				'Chamaedorea grows best in well-drained, light soil with the addition of peat or sand.',
			temperature_en:
				'The optimal temperature for Chamaedorea is from 16°C to 24°C',
			lightRequirement_en:
				'The plant needs bright, but diffused light, avoiding direct sunlight.',
			humidityLevel_en:
				'Chamaedorea loves high humidity, so it should be regularly sprayed or kept in rooms with humidity atmosphere.',
		},
		4: {
			category: 'Декоративно-листяні',
			id: 40,
			name: 'Фікус Лірата Бамбіно',
			price: 1470,
			img: [
				'https://i.pinimg.com/control/564x/e0/45/ff/e045ff7d12d164ff37f040df0c7b6dd4.jpg',
				'https://i.pinimg.com/564x/57/50/97/57509737af0a49f1d6480346b10e8486.jpg',
				'https://i.pinimg.com/control/564x/8b/2b/c8/8b2bc8cca39beafb234f037feeb39e75.jpg',
			],
			height: 45,
			desc: "це компактна декоративно-листяна рослина з великими, вражаючими листками, які мають характерну хвилясту форму. Ця рослина додає елегантності будь-якому інтер'єру завдяки своїй пишній зелені і стрункій формі",
			conditionsСare:
				'потребує яскравого, розсіяного освітлення та помірного поливу, дозволяючи верхньому шару ґрунту підсохнути між поливами. Рекомендується регулярно обприскувати листя, щоб підтримувати необхідну вологість.',
			soilType:
				'Фікус Лірата Бамбіно потребує добре дренованого ґрунту, багатого на органічні речовини.',
			temperature:
				'Ідеальна температура для фікуса становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина потребує яскравого, але розсіяного світла без прямого сонячного проміння.',
			humidityLevel:
				'Фікус Лірата Бамбіно полюбляє високу вологість, тому корисно регулярно обприскувати листя.',
			category_en: 'Decorative-deciduous',
			name_en: 'Ficus Lyrata Bambino',
			desc_en:
				'this is a compact decorative-deciduous plant with large, impressive leaves that have a characteristic wavy shape. This plant adds elegance to any interior with its lush greenery and slender shape',
			conditionsСare_en:
				'requires bright, diffused lighting and moderate watering, allowing the top layer of soil to dry out between waterings. It is recommended to spray the leaves regularly to maintain the necessary humidity.',
			soilType_en:
				'Ficus Lyrata Bambino needs well-drained soil rich in organic matter.',
			temperature_en:
				'The ideal temperature for ficus is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant needs bright but diffused light without direct sunlight.',
			humidityLevel_en:
				'Ficus Lyrata Bambino likes high humidity, so it is useful to spray the leaves regularly.',
		},
		5: {
			category: 'Декоративно-листяні',
			id: 50,
			name: 'Кротон Екселент',
			price: 879,
			img: [
				'https://flowers.ua/images/Flowers/articles/293-img-1.jpg',
				'https://i.pinimg.com/564x/e6/48/12/e64812514944a7a719b23c1113cb8fb4.jpg',
				'https://i.pinimg.com/564x/82/4b/72/824b72cddee7e2a10553ec8528c10719.jpg',
			],
			height: 50,
			isFlowering: false,
			desc: "Це яскрава декоративно-листяна рослина, відома своїми великими, різнокольоровими листками, які мають насичені жовті, червоні та зелені відтінки. Завдяки своїй привабливій формі і кольору, ця рослина стає яскравим акцентом у будь-якому інтер'єрі.",
			conditionsСare:
				'Кротон Екселент потребує яскравого світла для підтримання насиченості кольорів, а полив має бути регулярним, дозволяючи верхньому шару ґрунту підсохнути між поливами. Важливо уникати застою води, щоб запобігти гниттю коренів',
			soilType:
				'Кротон Екселент потребує легкого, добре дренованого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для кротона становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина потребує яскравого, розсіяного світла, але без прямого сонячного проміння.',
			humidityLevel:
				'Кротон Екселент полюбляє високу вологість, тому обприскування листя буде корисним.',
			category_en: 'Decorative-deciduous',
			name_en: 'Croton Excellent',
			desc_en:
				'This is a bright decorative-deciduous plant, known for its large, multi-colored leaves, which have rich yellow, red and green shades. Due to its attractive shape and color, this plant becomes a bright accent in any interior.',
			conditionsСare_en:
				'Croton Excellent needs bright light to maintain the saturation of colors, and watering should be regular, allowing the top layer of soil to dry out between waterings. It is important to avoid waterlogging to prevent root rot.',
			soilType_en:
				'Croton Excellent needs light, well-drained soil rich in organic matter.',
			temperature_en: 'The optimum temperature for croton is 20°C to 25°C.',
			lightRequirement_en:
				'The plant needs bright, diffused light, but without direct sunlight.',
			humidityLevel_en:
				'Croton Excellent likes high humidity, so spraying the leaves will be useful.',
		},
		6: {
			category: 'Декоративно-листяні',
			id: 60,
			name: 'Заміокулькас',
			price: 1520,
			img: [
				'https://cdn.asterias.od.ua/images/81/81-2-61-700x700.jpg',
				'https://i.pinimg.com/564x/bf/8b/54/bf8b5447377e0345f64fa62c459b735e.jpg',
				'https://i.pinimg.com/564x/79/09/36/790936307b7ae1b99c4897462e176ae6.jpg',
			],
			height: 75,
			desc: 'відомий також як "щастя дерева" або "доларове дерево", є стійкою та невибагливою рослиною з глянцевими, темно-зеленими листками, які ростуть на м\'ясистих черешках. Ця рослина популярна завдяки своїй здатності витримувати низьку освітленість і нерегулярний полив, що робить її ідеальним вибором для офісів та житлових приміщень',
			conditionsСare:
				'потребує яскравого, але розсіяного світла, і не вимагає частого поливу — поливайте рослину, коли верхній шар ґрунту повністю підсохне. Важливо використовувати добре дренований ґрунт, щоб уникнути застою води.',
			soilType:
				'Заміокулькас потребує добре дренованого ґрунту з додаванням піску або перліту для кращого водовідведення.',
			temperature:
				'Ідеальна температура для заміокулькаса становить від 18°C до 26°C.',
			lightRequirement:
				'Рослина добре росте при яскравому непрямому світлі, але може переносити і затінені умови.',
			humidityLevel:
				'Заміокулькас добре переносить низький рівень вологості, але регулярне обприскування підвищує його комфорт.',
			category_en: 'Decorative-deciduous',
			name_en: 'Zamioculcas',
			desc_en:
				'also known as the "lucky tree" or "dollar tree", is a hardy and unpretentious plant with glossy, dark green leaves that grow on fleshy petioles. This plant is popular for its ability to withstand low light and irregular watering, making it an ideal choice for offices and residential premises',
			conditionsСare_en:
				'needs bright but diffused light, and does not require frequent watering - water the plant when the top layer of soil is completely dry. It is important to use well-drained soil to avoid waterlogging.',
			soilType_en:
				'Zamioculcas requires well-drained soil with the addition of sand or perlite for better drainage.',
			temperature_en:
				'The ideal temperature for Zamioculcas is between 18°C ​​and 26°C.',
			lightRequirement_en:
				'The plant grows well in bright indirect light, but can also tolerate shaded conditions.',
			humidityLevel_en:
				'Zamioculcas tolerates low humidity levels, but regular spraying increases its comfort.',
		},
		7: {
			category: 'Декоративно-листяні',
			id: 70,
			name: 'Фікус Кінкі',
			price: 890,
			img: [
				'https://i.pinimg.com/564x/b9/54/b7/b954b7fd3a93c1e243f4b6560209219a.jpg',
				'https://i.pinimg.com/564x/2a/c3/e7/2ac3e7b1300f2f050e3352261c0d1bc6.jpg',
				'https://i.pinimg.com/564x/3e/5e/51/3e5e51c15ea2b317e216af42b93de2e8.jpg',
			],
			height: 50,
			isFlowering: false,
			desc: 'це компактний і декоративний сорт фікуса з маленькими глянцевими зеленими листками з білими або кремовими краями. Він є популярною кімнатною рослиною завдяки своєму вишуканому зовнішньому вигляду і здатності добре рости в домашніх умовах. Його невеликий розмір робить його чудовим вибором для обмежених просторів.',
			conditionsСare:
				'потребує яскравого розсіяного світла, але може переносити і напівтінь. Поливати його варто тоді, коли верхній шар ґрунту підсихає. Уникайте перезволоження ґрунту. Для кращого росту використовуйте добре дренований ґрунт і забезпечте помірну вологість повітря.',
			soilType:
				'Фікус Кінкі потребує легкого, добре дренованого ґрунту з високим вмістом органіки.',
			temperature:
				'Оптимальна температура для фікуса становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина потребує яскравого розсіяного світла, проте уникайте прямих сонячних променів.',
			humidityLevel:
				'Фікус Кінкі полюбляє підвищену вологість, тому обприскування листя буде корисним.',
			category_en: 'Decorative-deciduous',
			name_en: 'Ficus Kinki',
			desc_en:
				'this is a compact and decorative variety of ficus with small glossy green leaves with white or cream edges. It is a popular houseplant due to its elegant appearance and ability to grow well indoors. Its small size makes it a great choice for limited spaces.',
			conditionsСare_en:
				'needs bright diffused light, but can tolerate partial shade. It should be watered when the top layer of soil dries out. Avoid overwatering the soil. For best growth, use well-drained soil and maintain moderate humidity.',
			soilType_en:
				'Ficus Kinki needs light, well-drained soil with a high organic content.',
			temperature_en: 'The optimum temperature for ficus is 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant needs bright diffused light, but avoid direct sunlight.',
			humidityLevel_en:
				'Ficus Kinki likes high humidity, so spraying the leaves will be useful.',
		},
		8: {
			category: 'Декоративно-листяні',
			id: 80,
			name: 'Монстера',
			price: 1650,
			img: [
				'https://i.pinimg.com/736x/a3/70/b0/a370b0d4d580afa46378a465502b5e32.jpg',
				'https://i.pinimg.com/564x/04/c5/6a/04c56ad01ab9d1db84646a150f35eea5.jpg',
				'https://i.pinimg.com/564x/7a/ee/f5/7aeef5fd34871ea84bafff216c1b8b0e.jpg',
			],
			height: 80,
			desc: "це популярна декоративна рослина, відома своїм екзотичним виглядом і великими, розрізаними листками, які можуть досягати вражаючих розмірів. Її темно-зелені листки мають характерні отвори і рвані краї, що надає їй оригінальний вигляд. Завдяки своїй невибагливості та витривалості, Монстера чудово підходить для вирощування в кімнатних умовах і є фаворитом серед дизайнерів інтер'єрів.",
			conditionsСare:
				'Монстера потребує яскравого, але розсіяного світла, може переносити напівтінь. Поливайте рослину, коли ґрунт зверху підсихає, уникаючи надлишкової вологи. Для кращого росту забезпечте високу вологість і періодично протирайте листки від пилу. Важливо також підпирати рослину, оскільки вона любить витися.',
			soilType:
				'Монстера потребує легкого, добре дренованого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Ідеальна температура для монстери становить від 18°C до 27°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому розсіяному світлу, але може витримувати і легке затінення.',
			humidityLevel:
				'Монстера полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Decorative-deciduous',
			name_en: 'Monstera',
			desc_en:
				'this is a popular ornamental plant, known for its exotic appearance and large, dissected leaves that can reach impressive sizes. Its dark green leaves have characteristic holes and torn edges, which gives it an original look. Due to its unpretentiousness and endurance, Monstera is great for growing indoors and is a favorite among interior designers.',
			conditionsСare_en:
				'Monstera needs bright but diffused light, can tolerate partial shade. Water the plant when the soil on top dries out, avoiding excess moisture. For better growth, provide high humidity and periodically wipe the leaves from dust. It is also important to support the plant, as it likes to climb.',
			soilType_en:
				'Monstera needs light, well-drained soil rich in organic matter.',
			temperature_en:
				'The ideal temperature for Monstera is between 18°C ​​and 27°C.',
			lightRequiremen_ent:
				'The plant prefers bright, diffused light, but can also tolerate light shading.',
			humidityLevel_en:
				'Monstera likes high humidity, so regular spraying of the leaves will be useful.',
		},
		9: {
			category: 'Декоративно-листяні',
			id: 90,
			name: 'Фікус Бенжаміна Екзотіка',
			price: 2440,
			img: [
				'https://i.pinimg.com/564x/45/41/3c/45413c7a0cadbda10b007ac6ea4232cd.jpg',
				'https://i.pinimg.com/564x/5a/aa/9e/5aaa9e671bd7f26539a4118fca3a30bc.jpg',
				'https://cdn.7days.ru/pic/36c/972854/1388843/86.jpg',
			],
			height: 150,
			desc: 'це елегантна кімнатна рослина з витонченими, дрібними, блискучими листками, що надають їй ніжного та розкішного вигляду. Вона відома своєю здатністю очищати повітря, тому популярна в офісах і житлових приміщеннях. Фікус Бенжаміна Екзотіка — це ідеальний вибір для створення затишної атмосфери в інтер’єрі.',
			conditionsСare:
				'потребує яскравого розсіяного світла, але також може рости в напівтіні. Важливо підтримувати рівномірний полив — ґрунт повинен бути злегка вологим, але не перезволоженим. Рослина чутлива до змін умов, тому варто уникати різких коливань температури та протягів.',
			soilType:
				'Фікус Бенжаміна Екзотіка потребує легкого, добре дренованого ґрунту з високим вмістом органіки.',
			temperature:
				'Оптимальна температура для фікуса становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому розсіяному світлу, але може витримувати легке затінення.',
			humidityLevel:
				'Фікус Бенжаміна Екзотіка полюбляє підвищену вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Decorative-deciduous',
			name_en: 'Ficus Benjamina Exotica',
			desc_en:
				'this is an elegant houseplant with elegant, small, shiny leaves, which give it a delicate and luxurious look. It is known for its ability to purify the air, which is why it is popular in offices and residential premises. Ficus Benjamina Exotica is an ideal choice for creating a cozy atmosphere in the interior.',
			conditionsСare_en:
				'needs bright diffused light, but can also grow in partial shade. It is important to maintain uniform watering - the soil should be slightly moist, but not overmoistened. The plant is sensitive to changes in conditions, so sudden fluctuations in temperature and drafts should be avoided.',
			soilType_en:
				'Ficus Benjamina Exotica needs light, well-drained soil with a high organic content.',
			temperature_en:
				'The optimum temperature for ficus is from 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant prefers bright diffused light, but can withstand light shading.',
			humidityLevel_en:
				'Ficus Benjamina Exotica likes high humidity, so regular spraying of the leaves will be useful.',
		},
		10: {
			category: 'Декоративно-листяні',
			id: 100,
			name: 'Традесканція Білоквіткова',
			price: 720,
			img: [
				'https://i.pinimg.com/control/564x/3c/d4/16/3cd41614312425742f46776ad913ef22.jpg',
				'https://i.pinimg.com/control/564x/9a/3c/7e/9a3c7e318b39bc4e6747a4f2dd4f2798.jpg',
				'https://i.pinimg.com/control/564x/ad/b7/e8/adb7e81c03384eb5cb0ebfed88554ba7.jpg',
			],
			height: 40,
			desc: 'це невибаглива декоративна рослина з ніжними білими квітами та довгими, звисаючими стеблами, вкритими зеленими або смугастими листками. Ця рослина відома своєю здатністю швидко рости, утворюючи густі килимки або вишукані каскадні форми, що робить її ідеальним вибором для підвісних горщиків або декоративних композицій.',
			conditionsСare:
				'любить яскраве розсіяне світло, але може витримувати і півтінь. Полив повинен бути регулярним, але не надмірним — ґрунт має бути вологим, але без застою води. Вона добре росте в умовах підвищеної вологості та потребує періодичного обрізання для збереження форми.',
			soilType:
				'Традесканція Білоквіткова потребує легкого, добре дренованого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Ідеальна температура для традесканції становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але може витримувати легке затінення.',
			humidityLevel:
				'Традесканція Білоквіткова полюбляє підвищену вологість, тому обприскування листя буде корисним.',
			category_en: 'Decorative-deciduous',
			name_en: 'White-flowered Tradescantia',
			desc_en:
				'is an unpretentious ornamental plant with delicate white flowers and long, drooping stems covered with green or striped leaves. This plant is known for its ability to grow quickly, forming dense mats or elegant cascading forms, which makes it an ideal choice for hanging pots or decorative compositions.',
			conditionsСare_en:
				'likes bright diffused light, but can also withstand partial shade. Watering should be regular, but not excessive - the soil should be moist, but without stagnant water. It grows well in high humidity and needs periodic pruning to maintain its shape.',
			soilType_en:
				'White-flowered Tradescantia requires light, well-drained soil rich in organic matter.',
			temperature_en:
				'The ideal temperature for Tradescantia is 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but can tolerate light shading.',
			humidityLevel_en:
				'White-flowered Tradescantia likes high humidity, so spraying the leaves will be useful.',
		},
	},
	'Ornamental-flowering': {
		11: {
			category: 'Декоративно-квітучі',
			id: 110,
			name: 'Спатифілум',
			price: 950,
			img: [
				'https://i.pinimg.com/736x/f1/7c/2b/f17c2bb497112cb7f1049e0e739a4a36.jpg',
				'https://i.pinimg.com/474x/52/42/93/524293248bacc89b18d0dd67615feaa6.jpg',
				'https://i.pinimg.com/564x/ba/00/f1/ba00f1242c394f0266edc3b56732d2a8.jpg',
			],
			height: 70,
			desc: 'відомий також як "жіноче щастя", — це вічнозелена кімнатна рослина з елегантними білими квітками і блискучими темно-зеленими листками. Він не тільки додає краси приміщенню, але й очищує повітря, що робить його популярним вибором для дому та офісу. Спатифілум відомий своєю невибагливістю та здатністю рости навіть у менш сприятливих умовах.',
			conditionsСare:
				'потребує яскравого розсіяного світла, але може рости й у затінених місцях. Поливати рослину слід регулярно, підтримуючи вологий ґрунт, але не допускаючи застою води. Він також любить підвищену вологість і потребує регулярного обприскування. Чутливий до протягів та різких перепадів температури.',
			soilType:
				'Спатифілум потребує легкого, добре дренованого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Ідеальна температура для спатифілума становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина добре росте при яскравому розсіяному світлі, але може переносити і легке затінення.',
			humidityLevel:
				'Спатифілум полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Ornamental-flowering',
			name_en: 'Spathiphyllum',
			desc_en:
				'also known as "female happiness", is an evergreen houseplant with elegant white flowers and shiny dark green leaves. It not only adds beauty to the room, but also purifies the air, making it a popular choice for home and office. Spathiphyllum is known for its unpretentiousness and ability to grow even in less favorable conditions.',
			conditionsСare_en:
				'needs bright diffused light, but can also grow in shaded places. The plant should be watered regularly, maintaining moist soil, but not allowing water to stagnate. It also likes high humidity and needs regular spraying. Sensitive to drafts and sudden changes in temperature.',
			soilType_en:
				'Spathiphyllum needs light, well-drained soil enriched with organic matter.',
			temperature_en:
				'The ideal temperature for spathiphyllum is from 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant grows well in bright diffused light, but can also tolerate light shading.',
			humidityLevel_en:
				'Spathiphyllum likes high humidity, so regular spraying of the leaves will be useful.',
		},
		12: {
			category: 'Декоративно-квітучі',
			id: 120,
			name: 'Лаванда Florium',
			price: 900,
			img: [
				'https://i.pinimg.com/564x/dd/c1/81/ddc18103d1f3fac0d4a335f5f771025b.jpg',
				'https://cdn.27.ua/sc--media--prod/default/fb/df/b2/fbdfb2da-09a0-4842-970d-5fe708e5f52e.jpg',
				'https://i.pinimg.com/564x/48/5f/77/485f77ba164d138a8feabbc8e8f0400f.jpg',
			],
			height: 40,
			desc: 'Лаванда Florium — це компактний сорт лаванди з інтенсивно синьо-фіолетовими квітками та сріблясто-зеленим листям. Вона відома своїм приємним ароматом, який заспокоює та створює атмосферу затишку. Ця лаванда чудово підходить для вирощування в саду, на балконі чи у кімнатних умовах, а також ідеальна для створення ароматних букетів чи декоративних композицій.',
			conditionsСare:
				'Лаванда потребує яскравого сонячного світла і добре дренованого ґрунту. Полив має бути помірним, особливо слід уникати перезволоження. Ця рослина стійка до посухи, тому поливати її варто лише тоді, коли ґрунт добре підсох. Лаванда полюбляє теплі місця і не переносить надмірну вологість та сильні морози.',
			soilType:
				'Лаванда Florium потребує добре дренованого ґрунту з нейтральною або слабо лужною реакцією.',
			temperature:
				'Оптимальна температура для лаванди становить від 15°C до 25°C.',
			lightRequirement:
				'Рослина потребує яскравого сонячного світла, від 6 до 8 годин на день.',
			humidityLevel:
				'Лаванда не любить високу вологість і краще росте в сухих умовах, тому надмірне поливання слід уникати.',
			category_en: 'Ornamental-flowering',
			name_en: 'Florium Lavender',
			desc_en:
				'Florium Lavender is a compact variety of lavender with intense blue-violet flowers and silver-green leaves. It is known for its pleasant aroma, which soothes and creates an atmosphere of comfort. This lavender is great for growing in the garden, on the balcony or indoors, and is also ideal for creating fragrant bouquets or decorative compositions.',
			conditionsСare_en:
				'Lavender needs bright sunlight and well-drained soil. Watering should be moderate, especially avoiding overwatering. This plant is drought-resistant, so it should only be watered when the soil is well dry. Lavender likes warm places and does not tolerate excessive humidity and severe frosts.',
			soilType_en:
				'Florium Lavender needs well-drained soil with a neutral or slightly alkaline reaction.',
			temperature_en:
				'The optimal temperature for lavender is from 15°C to 25°C.',
			lightRequirement_en:
				'The plant needs bright sunlight, from 6 to 8 hours a day.',
			humidityLevel_en:
				'Lavender does not like high humidity and grows better in dry conditions, so excessive watering should be avoided.',
		},
		13: {
			category: 'Декоративно-квітучі',
			id: 130,
			name: 'Азалія Мікс',
			price: 2500,
			img: [
				'https://shop.camellia.ua/upload/kamelia_flora/photos/4c/61/1200x1200/40125776_64749a2718ce1.JPG',
				'https://www.nl.ua/upload/iblock/c10/242669_2.jpeg',
				'https://begreen.com.ua/wp-content/uploads/Azaliya-v-gorshke-kupit-Kiev-LEPESTOK.jpg',
			],
			height: 60,
			desc: 'Азалія Мікс — це елегантна кімнатна рослина, яка прикрашена яскравими, пишними квітами різних відтінків, включаючи рожевий, червоний та білий. Завдяки своїй унікальній формі на штамбі, ця рослина стає справжньою окрасою будь-якого інтер’єру. Азалії відомі своєю красою та елегантністю, але також вимагають уваги і догляду.',
			conditionsСare:
				'Азалія потребує яскравого, але розсіяного світла. Вона любить прохолоду і найкраще росте при температурі +15...+20 °C. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, але уникати застою води. Важливо забезпечити їй високу вологість повітря, тому обприскування буде корисним. Після цвітіння рослину слід підрізати для підтримки її форми.',
			soilType:
				'Азалія Мікс потребує легкого, кисло-реактивного ґрунту, з хорошим дренажем.',
			temperature:
				'Оптимальна температура для азалії становить від 15°C до 20°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Азалія полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Decorative-flowering',
			name_en: 'Azalea Mix',
			desc_en:
				'Azalea Mix is ​​an elegant houseplant that is decorated with bright, lush flowers of various shades, including pink, red and white. Due to its unique shape on the stem, this plant becomes a real decoration of any interior. Azaleas are known for their beauty and elegance, but they also require attention and care.',
			conditionsСare_en:
				'Azalea needs bright but diffused light. It loves coolness and grows best at a temperature of +15...+20 °C. The plant should be watered regularly, maintaining soil moisture, but avoiding water stagnation. It is important to provide it with high air humidity, so spraying will be useful. After flowering, the plant should be pruned to maintain its shape.',
			soilType_en: 'Azalea Mix needs light, acidic soil with good drainage.',
			temperature_en: 'The optimum temperature for azalea is 15°C to 20°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Azalea likes high humidity, so regular spraying of the leaves will be useful.',
		},
		14: {
			category: 'Декоративно-квітучі',
			id: 140,
			name: 'Гортензія Мікс',
			price: 1800,
			img: [
				'https://i.pinimg.com/564x/ff/4e/07/ff4e0735664b0b2ba662d21e40d4ef02.jpg',
				'https://i.pinimg.com/564x/ad/8d/d1/ad8dd1c833af9d338ca5627b829852b7.jpg',
				'https://kvetki-minsk.by/wp-content/uploads/2017/12/%D0%B3%D0%BE%D1%80%D1%82%D0%B0-%D1%81%D0%B8%D0%BD%D1%8F%D1%8F.jpg',
			],
			height: 40,
			desc: "Гортензія Мікс — це яскрава кімнатна рослина з великими пишними квітами, які можуть мати різні відтінки: від блакитного до рожевого і білого. Вона відома своєю розкішною формою та пишним цвітінням, що робить її прекрасним акцентом у будь-якому інтер'єрі. Гортензії часто використовують для створення квіткових композицій і букетів.",
			conditionsСare:
				'Гортензія потребує яскравого, але розсіяного світла. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, але уникаючи застою води. Вона любить високу вологість, тому обприскування листя буде корисним. Оптимальна температура для росту — +18...+24 °C. Після цвітіння рекомендується підрізати рослину для підтримки її форми і стимуляції нового росту.',

			soilType:
				'Гортензія Мікс потребує родючого, добре дренованого ґрунту з кислотою або нейтральною реакцією.',
			temperature:
				'Оптимальна температура для гортензії становить від 15°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але може переносити легке затінення.',
			humidityLevel:
				'Гортензія полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Ornamental-flowering',
			name_en: 'Hydrangea Mix',
			desc_en:
				'Hydrangea Mix is ​​a bright houseplant with large lush flowers that can have different shades: from blue to pink and white. It is known for its luxurious shape and lush flowering, which makes it a beautiful accent in any interior. Hydrangeas are often used to create flower arrangements and bouquets.',
			conditionsСare_en:
				'Hydrangea needs bright but diffused light. The plant should be watered regularly, maintaining soil moisture, but avoiding water stagnation. It loves high humidity, so spraying the leaves will be useful. The optimum temperature for growth is +18...+24 °C. After flowering, it is recommended to prune the plant to maintain its shape and stimulate new growth.',

			soilType_en:
				'Hydrangea Mix needs fertile, well-drained soil with an acid or neutral reaction.',
			temperature_en:
				'The optimum temperature for hydrangea is from 15°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but can tolerate light shading.',
			humidityLevel_en:
				'Hydrangea likes high humidity, so regular spraying of the leaves will be useful.',
		},
		15: {
			category: 'Декоративно-квітучі',
			id: 150,
			name: 'Карісса Balemala',
			price: 950,
			img: [
				'https://cdn.27.ua/sc--media--prod/default/10/a4/c0/10a4c0d7-5b2a-48e2-8095-dd20014032a3.jpg',
				'https://file.agro-market.net/upload/resize_cache/iblock/e43/345_483_1/lc4kvu9p3dfjqklufgxgprhgram1kkfn.jpeg',
				'https://images.prom.ua/2413477481_w600_h600_2413477481.jpg',
			],
			height: 30,
			isFlowering: true,
			desc: 'Карісса Balemala — це компактна кімнатна рослина, що славиться своїми блискучими темно-зеленими листками та ароматними білими квітами, які переходять у маленькі червоні ягоди. Ця рослина не тільки приваблива, але й корисна, оскільки її ягоди їстівні та мають чудовий смак. Карісса чудово підходить для вирощування в контейнерах і може стати окрасою будь-якого інтер’єру.',
			conditionsСare:
				'Карісса Balemala потребує яскравого, але розсіяного світла. Поливати рослину слід помірно, дозволяючи верхньому шару ґрунту підсохнути між поливами. Вона добре росте при температурі +18...+25 °C і потребує періодичного обприскування, особливо в суху пору року. Важливо також забезпечити рослину добрим дренажем, щоб уникнути застою води.',
			soilType:
				'Карісса потребує легкого, добре дренованого ґрунту, з високим вмістом органіки.',
			temperature:
				'Оптимальна температура для карісси становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина потребує яскравого, непрямого світла, але може переносити і легке затінення.',
			humidityLevel:
				'Карісса добре переносить низький рівень вологості, але регулярне обприскування листя може бути корисним.',
			category_en: 'Decorative-flowering',
			name_en: 'Carissa Balemala',
			desc: 'Carissa Balemala is a compact houseplant, famous for its shiny dark green leaves and fragrant white flowers that turn into small red berries. This plant is not only attractive, but also useful, as its berries are edible and have a wonderful taste. Carissa is great for growing in containers and can decorate any interior.',
			conditionsСare_en:
				'Carissa Balemala needs bright but diffused light. The plant should be watered moderately, allowing the top layer of soil to dry out between waterings. It grows well at a temperature of +18...+25 °C and needs periodic spraying, especially in the dry season. It is also important to provide the plant with good drainage to avoid waterlogging.',
			soilType_en:
				'Carissa needs light, well-drained soil, with a high organic content.',
			temperature_en:
				'The optimum temperature for carissa is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant needs bright, indirect light, but can also tolerate light shading.',
			humidityLevel_en:
				'Carissa tolerates low humidity levels well, but regular spraying of the leaves can be beneficial.',
		},
		16: {
			category: 'Декоративно-квітучі',
			id: 160,
			name: 'Антуріум Success Red',
			price: 1450,
			img: [
				'https://yaskravaklumba.com.ua/image/cache/catalog/komnatnye/anturium/succes-red_01-500x500.jpg',
				'https://i.pinimg.com/564x/39/5f/80/395f806806bdb625f41761da31b02fd8.jpg',
				'https://i.pinimg.com/564x/05/c5/7f/05c57f96d5e6e3822081008fcf1d62a2.jpg',
			],
			height: 60,
			desc: 'Антуріум Success Red — це вражаюча кімнатна рослина з яскравими червоними квітами у формі серця і блискучими зеленими листками. Ця рослина є символом краси та процвітання і часто використовується для декорування інтер’єрів завдяки своїй екзотичній естетиці. Антуріум також славиться своєю здатністю очищати повітря, що робить його популярним вибором для дому та офісу.',
			conditionsСare:
				'Антуріум Success Red потребує яскравого, але розсіяного світла для оптимального цвітіння. Поливати рослину слід регулярно, але уникати перезволоження; ґрунт повинен бути злегка вологим, але не мокрим. Оптимальна температура для росту — +18...+28 °C, а також важливо підтримувати високу вологість повітря. Підживлення рослини слід проводити кожні 4-6 тижнів під час вегетаційного періоду.',
			soilType:
				'Антуріум Success Red потребує легкого, добре дренованого ґрунту з високим вмістом органіки.',
			temperature:
				'Оптимальна температура для антуріума становить від 18°C до 27°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Антуріум полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Decorative-flowering',
			name_en: 'Anthurium Success Red',
			desc_en:
				'Anthurium Success Red is a striking houseplant with bright red heart-shaped flowers and shiny green leaves. This plant is a symbol of beauty and prosperity and is often used to decorate interiors due to its exotic aesthetics. Anthurium is also famous for its ability to purify the air, making it a popular choice for homes and offices.',
			conditionsСare_en:
				'Anthurium Success Red needs bright but diffused light for optimal flowering. The plant should be watered regularly, but avoid overwatering; the soil should be slightly moist, but not wet. The optimal temperature for growth is +18...+28 °C, and it is also important to maintain high humidity. The plant should be fed every 4-6 weeks during the growing season.',
			soilType_en:
				'Anthurium Success Red requires light, well-drained soil with a high organic content.',
			temperature_en:
				'The optimum temperature for anthurium is from 18°C ​​to 27°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Anthurium likes high humidity, so regular spraying of the leaves will be useful.',
		},
		17: {
			category: 'Декоративно-квітучі',
			id: 170,
			name: 'Антуріум Black Queen',
			price: 1700,
			img: [
				'https://i.pinimg.com/564x/7b/a4/f3/7ba4f32b11b3a404e62dd37e47f4f964.jpg',
				'https://sharm24.com.ua/images/detailed/1/anthurium-an-black-queen-d17-l65.jpg',
				'https://i.pinimg.com/564x/89/69/bd/8969bda59b0eb5f1a07ad4a055727af4.jpg',
			],
			height: 70,
			isFlowering: true,
			desc: "Антуріум Black Queen — це вишукана кімнатна рослина, що вирізняється своїми темно-червоними або майже чорними квітами та глянцевими зеленими листками. Ця рослина додає екзотичності та елегантності будь-якому інтер'єру. Антуріум Black Queen не тільки привабливий, але й здатний очищати повітря, що робить його популярним вибором для дому та офісу.",
			conditionsСare:
				'Антуріум Black Queen потребує яскравого, але розсіяного світла для найкращого росту та цвітіння. Поливати рослину слід регулярно, дотримуючись помірності — ґрунт повинен бути вологим, але не мокрим. Оптимальна температура для росту — +18...+28 °C, і важливо підтримувати високу вологість повітря. Підживлення можна проводити кожні 4-6 тижнів під час вегетаційного періоду, щоб забезпечити рослині необхідні поживні речовини.',

			soilType:
				'Антуріум Black Queen потребує легкого, добре дренованого ґрунту з високим вмістом органіки.',
			temperature:
				'Оптимальна температура для антуріума становить від 18°C до 27°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Антуріум Black Queen полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Decorative-flowering',
			name_en: 'Anthurium Black Queen',
			desc_en:
				'Anthurium Black Queen is an exquisite houseplant, distinguished by its dark red or almost black flowers and glossy green leaves. This plant adds exoticism and elegance to any interior. Anthurium Black Queen is not only attractive, but also able to purify the air, which makes it a popular choice for home and office.',
			conditionsСare_en:
				'Anthurium Black Queen needs bright but diffused light for best growth and flowering. The plant should be watered regularly, observing moderation - the soil should be moist, but not wet. The optimal temperature for growth is +18...+28 °C, and it is important to maintain high humidity. Fertilizers can be applied every 4-6 weeks during the growing season to provide the plant with the nutrients it needs.',
			soilType_en:
				'Anthurium Black Queen requires light, well-drained soil with a high organic content.',
			temperature_en:
				'The optimum temperature for anthurium is between 18°C ​​and 27°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Anthurium Black Queen likes high humidity, so regular spraying of the leaves will be beneficial.',
		},
		18: {
			category: 'Декоративно-квітучі',
			id: 180,
			name: 'Азалія Мікс ',
			price: 950,
			img: [
				'https://img.auchan.ua/rx/q_90,ofmt_webp/auchan.ua/media/catalog/product/7/6/7600000115402_1.jpg',
				'https://i.pinimg.com/564x/40/1b/ae/401baebbb45d725db6f17c546da757bb.jpg',
				'https://images.floristics.info/images/stati_photo4/azalea-v-1/azalea-v-1-1.jpg',
			],
			height: '40',
			desc: "Азалія Мікс  — це компактна кімнатна рослина, що має яскраві та пишні квіти різних відтінків, таких як рожевий, червоний та білий. Ця рослина відзначається своєю красою і є ідеальним вибором для прикраси інтер'єру, надаючи йому свіжого вигляду. Азалії дуже популярні завдяки своїй елегантності та здатності цвісти в зимовий період.",
			conditionsСare:
				'Азалія потребує яскравого, але розсіяного світла для оптимального зростання. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, проте важливо уникати перезволоження. Азалія найкраще росте при температурі +15...+20 °C і потребує високої вологості повітря, тому обприскування буде корисним. Після цвітіння рекомендується підрізати рослину для підтримки її форми.',
			soilType:
				'Азалія Мікс потребує легкого, кисло-реактивного ґрунту, з хорошим дренажем.',
			temperature:
				'Оптимальна температура для азалії становить від 15°C до 20°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Азалія полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Decorative-flowering',
			name_en: 'Azalea Mix ',
			desc_en:
				'Azalea Mix is ​​a compact houseplant that has bright and lush flowers in various shades, such as pink, red and white. This plant is distinguished by its beauty and is an ideal choice for decorating the interior, giving it a fresh look. Azaleas are very popular due to their elegance and ability to bloom in the winter.',
			conditionsСare_en:
				'Azalea needs bright but diffused light for optimal growth. The plant should be watered regularly, maintaining soil moisture, but it is important to avoid waterlogging. Azalea grows best at a temperature of +15...+20 °C and needs high humidity, so spraying will be useful. After flowering, it is recommended to prune the plant to maintain its shape.',
			soilType_en: 'Azalea Mix needs light, acidic soil with good drainage.',
			temperature_en:
				'The optimum temperature for azalea is from 15°C to 20°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Azalea likes high humidity, so regular spraying of the leaves will be useful.',
		},
		19: {
			category: 'Декоративно-квітучі',
			id: 190,
			name: 'Хризантема',
			price: 450,
			img: [
				'https://cdn.asterias.od.ua/images/104/104-2-38-700x690.jpg',
				'https://i.pinimg.com/564x/79/31/90/793190d65dcd2f261fcc3d8afe87e640.jpg',
				'https://i.pinimg.com/564x/ab/69/77/ab6977961f9c076eaefc4e79aa8394cb.jpg',
			],
			height: 30,
			desc: 'Хризантема — це яскрава і жива кімнатна рослина, відома своїми різноманітними кольорами та формами квітів. Ця рослина символізує радість і дружбу, а також є популярним вибором для декорування інтер’єрів завдяки своєму тривалому цвітінню. Хризантеми можуть мати квіти різних відтінків — від жовтого до червоного та білого, що робить їх чудовим доповненням до будь-якого простору.',
			conditionsСare:
				'Хризантема потребує яскравого сонячного світла для найкращого цвітіння, але також може переносити часткову тінь. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, але уникаючи застою води. Оптимальна температура для росту — +15...+20 °C. Після цвітіння рослину рекомендується обрізати, щоб стимулювати новий ріст та підтримувати її форму.',
			soilType:
				'Хризантема потребує родючого, добре дренованого ґрунту з нейтральною реакцією.',
			temperature:
				'Оптимальна температура для хризантеми становить від 15°C до 20°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу, з більш ніж 6 годинами освітлення на день.',
			humidityLevel:
				"Хризантема не вимагає високої вологості, але регулярний полив є важливим для її здоров'я.",
			category_en: 'Decorative-flowering',
			name_en: 'Chrysanthemum',
			desc_en:
				'Chrysanthemum is a bright and vibrant houseplant, known for its variety of colors and flower shapes. This plant symbolizes joy and friendship, and is also a popular choice for decorating interiors due to its long flowering. Chrysanthemums can have flowers of various shades - from yellow to red and white, which makes them a wonderful addition to any space.',
			conditionsСare_en:
				'Chrysanthemum needs bright sunlight for the best flowering, but can also tolerate partial shade. The plant should be watered regularly, maintaining soil moisture, but avoiding waterlogging. The optimal temperature for growth is +15...+20 °C. After flowering, it is recommended to prune the plant to stimulate new growth and maintain its shape.',
			soilType_en:
				'Chrysanthemums require fertile, well-drained soil with a neutral reaction.',
			temperature_en:
				'The optimum temperature for chrysanthemums is between 15°C and 20°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight, with more than 6 hours of light per day.',
			humidityLevel_en:
				'Chrysanthemums do not require high humidity, but regular watering is important for their health.',
		},
		20: {
			category: 'Декоративно-квітучі',
			id: 200,
			name: 'Троянда Мікс 10x20 см',
			price: 1200,
			img: [
				'https://movakvitiv.com/wp-content/uploads/2022/09/troyanda-mistse.jpg',
				'https://images.prom.ua/5256935482_w640_h640_rozy-komnatnye-rozy.jpg',
				'https://supercomputer.com.ua/wp-content/uploads/komnatnaya-roza-foto-683-28565.jpg',
			],
			height: 40,
			desc: 'Троянда Мікс 10x20 см — це компактна кімнатна рослина, що має яскраві, ароматні квіти в різних кольорах, таких як червоний, рожевий, білий і жовтий. Ця рослина не тільки прикрашає інтер’єр, але й наповнює його чудовим ароматом. Троянди символізують кохання та красу, що робить їх популярним вибором для подарунків та декорування.',
			conditionsСare:
				'Троянда потребує яскравого світла для оптимального зростання і цвітіння. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, але уникати перезволоження. Оптимальна температура для росту — +18...+24 °C. Рослина також потребує підживлення під час вегетаційного періоду, щоб забезпечити необхідні поживні речовини. Після цвітіння рекомендується обрізати зів’ялі квіти для стимуляції нового цвітіння.',

			soilType:
				'Троянда Мікс потребує родючого, добре дренованого ґрунту з нейтральною або слабо кислою реакцією.',
			temperature:
				'Оптимальна температура для троянд становить від 15°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу, з не менше ніж 6 годинами освітлення на день.',
			humidityLevel:
				'Троянди вимагають середнього рівня вологості, тому регулярний полив важливий, особливо в спекотні дні.',
			category_en: 'Decorative-flowering',
			name_en: 'Rose Mix 10x20 cm',
			desc_en:
				'Rose Mix 10x20 cm is a compact houseplant with bright, fragrant flowers in a variety of colors, such as red, pink, white and yellow. This plant not only decorates the interior, but also fills it with a wonderful aroma. Roses symbolize love and beauty, which makes them a popular choice for gifts and decoration.',
			conditionsСare_en:
				'Rose needs bright light for optimal growth and flowering. The plant should be watered regularly, maintaining soil moisture, but avoiding waterlogging. The optimal temperature for growth is +18...+24 °C. The plant also needs feeding during the growing season to provide the necessary nutrients. After flowering, it is recommended to cut off faded flowers to stimulate new flowering.',
			soilType_en:
				'The Mix rose requires fertile, well-drained soil with a neutral or slightly acidic reaction.',
			temperature_en: 'The optimum temperature for roses is from 15°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight, with at least 6 hours of light per day.',
			humidityLevel_en:
				'Roses require a medium level of humidity, so regular watering is important, especially on hot days.',
		},
		21: {
			category: 'Декоративно-квітучі',
			id: 210,
			name: 'Ю-Джига Пеларгонія',
			price: 980,
			img: [
				'https://i.pinimg.com/564x/e4/74/c7/e474c748ac5a5f5123dcc40b1603c1aa.jpg',
				'https://i.pinimg.com/564x/15/5d/e4/155de4c4fb535626c73c483a3c8ce01e.jpg',
				'https://i.pinimg.com/564x/39/5f/f8/395ff8d14f26437cb95dbda17b35148f.jpg',
			],
			height: 40,
			desc: 'Ю-Джига Пеларгонія — це яскрава кімнатна рослина, відома своїми красивими квітами, які нагадують троянди, і стійким ароматом. Ця рослина додає елегантності будь-якому простору завдяки своїм пишним і соковитим листям, а також розкішному цвітінню. Пеларгонія часто використовується для прикраси інтер’єрів, а також підходить для вирощування на балконах і в садах.',
			conditionsСare:
				"Пеларгонія потребує яскравого світла для оптимального росту і цвітіння. Поливати рослину слід помірно, даючи ґрунту підсохнути між поливами, щоб уникнути перезволоження. Оптимальна температура для росту — +18...+24 °C. Пеларгонія не любить холод і протяги, тому важливо забезпечити їй комфортні умови. Регулярне підживлення в період активного росту допоможе підтримувати її здоров'я та красу.",
			soilType:
				'Ю-Джига Пеларгонія потребує легкого, добре дренованого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для пеларгонії становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але може витримувати і легке затінення.',
			humidityLevel:
				'Пеларгонія не любить надмірну вологість, тому полив слід здійснювати помірно.',
			status: 'Новинки',
			category_en: 'Ornamental-flowering',
			name_en: 'Yu-Jiga Pelargonium',
			desc_en:
				'Yu-Jiga Pelargonium is a bright houseplant known for its beautiful rose-like flowers and persistent fragrance. This plant adds elegance to any space with its lush and succulent foliage, as well as its luxurious blooms. Pelargonium is often used to decorate interiors, and is also suitable for growing on balconies and in gardens.',
			conditionsСare_en:
				'Pelargonium needs bright light for optimal growth and flowering. Water the plant moderately, allowing the soil to dry out between waterings to avoid waterlogging. The optimal temperature for growth is +18...+24 °C. Pelargonium does not like cold and drafts, so it is important to provide it with comfortable conditions. Regular feeding during the period of active growth will help maintain its health and beauty.',
			soilType_en:
				'Yu-Jiga Pelargonium needs light, well-drained soil enriched with organic matter.',
			temperature_en:
				'The optimal temperature for pelargonium is from 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but can also withstand light shading.',
			humidityLevel_en:
				'Pelargonium does not like excessive humidity, so watering should be done moderately.',
			status_en: 'New',
		},
	},
	Orchids: {
		0: {
			category: 'Орхідеї',
			id: 0,
			name: 'Дендробіум',
			price: 1700,
			img: [
				'https://shop.camellia.ua/upload/kamelia_flora/photos/49/2d/1200x1200/ce67be92_6475f990b5b9d.JPG',
				'https://i.pinimg.com/564x/ff/98/7e/ff987ebf55658084ba8ccc6156a34f82.jpg',
				'https://i.pinimg.com/564x/9b/d5/aa/9bd5aa6f7cfc03c26b4e32c49c91b232.jpg',
			],
			height: 74,
			desc: 'це один з найпопулярніших родів орхідей, що налічує понад 1800 видів. Ці вражаючі рослини відомі своїм різноманіттям форм, кольорів та розмірів. Вони можуть мати стебла від коротких до довгих, а квіти — від маленьких до великих, зазвичай з яскравими і насиченими кольорами: від білого до рожевого, жовтого, фіолетового та навіть синього.',
			conditionsСare:
				'потребує яскравого, розсіяного освітлення і регулярного поливу, але слід уникати перезволоження. Рослина краще росте в спеціалізованому субстраті для орхідей, який забезпечує добру аерацію коренів. Підживлюйте її під час активного росту, використовуючи добрива для орхідей, щоб підтримувати здоров’я та рясне цвітіння.',

			soilType:
				'Дендробіум потребує легкого, добре дренованого субстрату, що складається з кори та торфу.',
			temperature:
				'Оптимальна температура для дендробіума становить від 18°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Дендробіум полюбляє високу вологість, тому регулярне обприскування або установка вологи в повітрі будуть корисними.',
			status: 'Розпродаж',
			category_en: 'Orchids',
			name_en: 'Dendrobium',
			desc_en:
				'this is one of the most popular genera of orchids, with over 1,800 species. These striking plants are known for their variety of shapes, colors and sizes. They can have stems from short to long, and flowers from small to large, usually with bright and saturated colors: from white to pink, yellow, purple and even blue.',
			conditionsСare_en:
				'needs bright, diffused lighting and regular watering, but waterlogging should be avoided. The plant grows better in a specialized substrate for orchids, which provides good aeration of the roots. Feed during active growth with an orchid fertilizer to maintain health and abundant flowering.',

			soilType_en:
				'Dendrobiums need a light, well-drained substrate consisting of bark and peat.',
			temperature_en:
				'The optimum temperature for dendrobiums is between 18°C ​​and 25°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Dendrobiums like high humidity, so regular spraying or installing a humidifier will be beneficial.',
			status_en: 'Sale',
		},
		1: {
			category: 'Орхідеї',
			id: 10,
			name: 'Фаленопсис Біла',
			price: 1600,
			img: [
				'https://i.pinimg.com/564x/e8/34/b0/e834b0523a8f6f796e4644bf071b1c32.jpg',
				'https://i.pinimg.com/564x/fb/c9/c2/fbc9c29060d2081e7758b04452cbbc04.jpg',
				'https://shop.camellia.ua/upload/kamelia_flora/photos/5a/70/1200x1200/d96150a4_6358e68ec09cd.JPG',
			],
			height: 70,

			desc: 'це царські квіти, які є дуже популярними серед квітникарів. Незважаючи на те, що королівська орхідея вважається більш вимогливою, ніж звичайна, з доглядом за нею справиться навіть новачок.Королівські орхідеї досить високі, мають великі квіти та тривале цвітіння, яке на 1-2 місяці довше, ніж у звичайних орхідей. У діаметрі квітки можуть досягати 20 см. А забарвлення буває абсолютно різне: білі, рожеві, в цятку, в смужку, фіолетові та багато інших. ',
			conditionsСare:
				'Для довгого цвітіння орхідеям потрібно багато світла. Ідеальні умови для них в місцях куди сонце потрапляє на декілька годин в день (зранку чи ввечері)',

			soilType:
				'Фаленопсис Біла Королівська потребує легкого, добре дренованого субстрату, що складається з кори, моху та перліту.',
			temperature:
				'Оптимальна температура для фаленопсиса становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Фаленопсис полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Orchids',
			name_en: 'Phalaenopsis White',
			desc_en:
				'these are royal flowers that are very popular among flower growers. Despite the fact that the royal orchid is considered more demanding than the usual one, even a beginner can handle its care. Royal orchids are quite tall, have large flowers and long flowering, which is 1-2 months longer than that of ordinary orchids. The diameter of the flower can reach 20 cm. And the color is completely different: white, pink, spotted, striped, purple and many others. ',
			conditionsСare_en:
				'For long flowering, orchids need a lot of light. Ideal conditions for them are in places where the sun hits for several hours a day (morning or evening)',

			soilType_en:
				'Phalaenopsis White Royal needs a light, well-drained substrate consisting of bark, moss and perlite.',
			temperature_en:
				'The optimum temperature for Phalaenopsis is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Phalaenopsis likes high humidity, so regular spraying of the leaves will be useful.',
		},
		2: {
			category: 'Орхідеї',
			id: 20,
			name: 'Міні орхідея',
			price: 1200,
			img: [
				'https://shop.camellia.ua/upload/kamelia_flora/photos/74/ea/1200x1200/28ea8b7_6066ee212b9ea.JPG',
				'https://i.pinimg.com/564x/81/16/d4/8116d406642881df722994694b893265.jpg',
				'https://i.pinimg.com/474x/21/bc/98/21bc98d6c7481bcb1be7c881fefa41a2.jpg',
			],
			height: 35,
			isFlowering: true,
			desc: " це вишукана композиція з різних видів мініатюрних орхідей, представлених у стильному кашпо. Ці рослини відзначаються компактними розмірами, яскравими кольорами та елегантними формами, що робить їх ідеальними для прикраси будь-якого інтер'єру. Догляд за міні орхідеями простий: вони потребують яскравого, розсіяного світла і помірного поливу. Ця композиція додасть затишку і витонченості у ваш дім або офіс! ",
			conditionsСare:
				'Міні орхідея мікс потребує яскравого, розсіяного освітлення, помірного поливу і спеціалізованого субстрату для орхідей для підтримання здоров’я та цвітіння.',
			soilType:
				'Міні орхідея мікс в кашпо потребує легкого, добре дренованого субстрату, зазвичай з кори, моху та перліту.',
			temperature:
				'Оптимальна температура для міні орхідеї становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Міні орхідея полюбляє високу вологість, тому регулярне обприскування листя або використання зволожувача повітря буде корисним.',
			category_en: 'Orchids',
			name_en: 'Mini orchid',
			desc_en:
				' this is an exquisite composition of various types of miniature orchids presented in a stylish pot. These plants are distinguished by their compact size, bright colors and elegant shapes, which makes them ideal for decorating any interior. Caring for mini orchids is simple: they need bright, diffused light and moderate watering. This composition will add comfort and sophistication to your home or office! ',
			conditionsСare_en:
				'Mini orchid mix needs bright, diffused light, moderate watering and a specialized substrate for orchids to maintain health and flowering.',
			soilType_en:
				'Mini orchid mix in a pot needs a light, well-drained substrate, usually made of bark, moss and perlite.',
			temperature_en:
				'The optimum temperature for mini orchids is from 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'The mini orchid likes high humidity, so regular spraying of the leaves or using a humidifier will be useful.',
		},
		51: {
			category: 'Орхідеї',
			id: 510,
			name: 'Орхідея Фаленопсис Каскад',
			price: 1460,
			img: [
				'https://plantsroom.com.ua/wp-content/uploads/2024/07/img_8956-scaled.jpg',
				'https://i.pinimg.com/564x/b3/68/81/b36881e531c7932af6793a467efe47f9.jpg',
				'https://i.pinimg.com/564x/d7/a0/20/d7a02063d401230df61cbd2c7db21bb3.jpg',
			],
			height: 72,
			desc: 'Орхідея Фаленопсис Каскад - це елегантна і неповторна рослина з вигнутими квітконосами, що утворюють вражаючі каскади великих квітів. Ця орхідея відома своїми великими, яскравими квітами та довгим періодом цвітіння. Ідеально підходить для декору будь-якого простору, додаючи нотку розкоші та естетики. Вона легка в догляді: потребує помірного поливу та яскравого розсіяного світла. Орхідея Фаленопсис Каскад стане чудовим акцентом у вашому інтер’єрі.',
			conditionsСare:
				'Фаленопсис Каскад потребує яскравого, розсіяного освітлення, помірного поливу і субстрату для орхідей, щоб забезпечити її довготривале цвітіння.',
			soilType:
				'Орхідея Фаленопсис Каскад потребує легкого, добре дренованого субстрату, що складається з кори, моху та перліту.',
			temperature:
				'Оптимальна температура для Фаленопсиса Каскад становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Фаленопсис Каскад полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			status: 'Новинки',
			category_en: 'Orchids',
			name_en: 'Orchid Phalaenopsis Cascade',
			desc_en:
				'Orchid Phalaenopsis Cascade is an elegant and unique plant with curved flower stalks that form impressive cascades of large flowers. This orchid is known for its large, bright flowers and long flowering period. Perfect for decorating any space, adding a touch of luxury and aesthetics. It is easy to care for: it requires moderate watering and bright diffused light. The Phalaenopsis Cascade orchid will be a wonderful accent in your interior.',
			conditionsСare_en:
				'The Phalaenopsis Cascade needs bright, diffused lighting, moderate watering and an orchid substrate to ensure its long-lasting flowering.',
			soilType_en:
				'The Phalaenopsis Cascade orchid needs a light, well-drained substrate consisting of bark, moss and perlite.',
			temperature_en:
				'The optimum temperature for the Phalaenopsis Cascade is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'The Phalaenopsis Cascade loves high humidity, so regular spraying of the leaves will be useful.',
			status_en: 'New',
		},
		52: {
			category: 'Орхідеї',
			id: 520,
			name: 'Кімнатна рослина Камбрія мікс 12х60',
			price: 800,
			img: [
				'https://ukraflora.ua/image/cache/catalog/image/cache/catalog/content/gorschechka/kambrija_1stovbur_kaskad_1-1100x1100.webp',
				'https://floralife.com.ua/image/cache/catalog/houseplants/orchids/cambria-royal-100/orchid-cambria-royal-100-4-1000x1000.jpg',
				'https://cdn.27.ua/799/b4/96/242838_4.jpeg',
			],
			height: 60,
			desc: "Камбрія мікс - це екзотична кімнатна рослина, що поєднує кілька різновидів орхідей з вишуканими квітами. Вона відрізняється незвичайними формами квіток та приємним ароматом, що робить її ідеальною для декорування сучасних інтер'єрів. Камбрія проста в догляді, тому вона підходить як для досвідчених, так і для новачків у вирощуванні орхідей. Ця рослина додасть шарму і елегантності будь-якому приміщенню.",
			conditionsСare:
				'Камбрія мікс потребує яскравого розсіяного світла, регулярного, але помірного поливу та спеціального субстрату для орхідей для підтримання здоров’я і квітучості.',

			soilType:
				'Кімнатна рослина Камбрія мікс потребує легкого, добре дренованого субстрату, що складається з кори, моху та торфу.',
			temperature:
				'Оптимальна температура для камбрії становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Камбрія полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			status: 'Розпродаж',
			category_en: 'Orchids',
			name_en: 'Houseplant Cambria mix 12x60',
			desc_en:
				'Cambria mix is ​​an exotic houseplant that combines several varieties of orchids with exquisite flowers. It is distinguished by its unusual flower shapes and pleasant aroma, which makes it ideal for decorating modern interiors. Cambria is easy to care for, so it is suitable for both experienced and beginners in growing orchids. This plant will add charm and elegance to any room.',
			conditionsCare_en:
				'Cambria mix needs bright diffused light, regular but moderate watering and a special substrate for orchids to maintain health and flowering.',
			soilType_en:
				'Houseplant Cambria mix needs a light, well-drained substrate consisting of bark, moss and peat.',
			temperature_en:
				'Optimal The temperature for Cambria is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Cambria likes high humidity, so regular spraying of the leaves will be useful.',
			status_en: 'Sale',
		},
		53: {
			category: 'Орхідеї',
			id: 530,
			name: 'Фаленопсіс плямистий',
			price: 980,
			img: [
				'https://lorashen.ua/static/media/uploads/product/Rasteniya/.thumbnails/img_9315.jpg/img_9315-0x600.jpg',
				'https://images.prom.ua/5016348387_w640_h640_falenopsis-gorshechnoe-rastenie.jpg',
				'https://floralife.com.ua/image/cache/catalog/houseplants/phalaenopsis/phalaenopsis-boston-1/phalaenopsis-boston-6-1000x1000.jpg',
			],
			height: 80,
			desc: "Фаленопсіс плямистий - це надзвичайно приваблива кімнатна орхідея з унікальними квітами, вкритими плямами, що створюють екзотичний вигляд. Ця орхідея має довгу гілку з великими квітами, що тримаються на рослині протягом кількох місяців. Вона стане чудовою прикрасою для будь-якого інтер'єру, надаючи йому особливої вишуканості. Догляд за нею простий: достатньо помірного поливу та яскравого, але розсіяного світла.",
			conditionsСare:
				'Фаленопсіс плямистий потребує яскравого розсіяного освітлення, регулярного помірного поливу і субстрату для орхідей, що сприяє довготривалому цвітінню.',
			soilType:
				'Фаленопсіс плямистий потребує легкого, добре дренованого субстрату, що складається з кори, моху та перліту.',
			temperature:
				'Оптимальна температура для Фаленопсиса плямистого становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Фаленопсіс плямистий полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Orchids',
			name_en: 'Phalaenopsis spotted',
			desc_en:
				'Phalaenopsis spotted is an extremely attractive indoor orchid with unique flowers covered with spots that create an exotic look. This orchid has a long branch with large flowers that stay on the plant for several months. It will be a wonderful decoration for any interior, giving it a special sophistication. Caring for it is simple: moderate watering and bright, but diffused light are enough.',
			conditionsСare_en:
				'Phalaenopsis spotted needs bright diffused lighting, regular moderate watering and a substrate for orchids, which contributes to long-term flowering.',
			soilType_en:
				'Phalaenopsis spotted needs a light, well-drained substrate consisting of bark, moss and perlite.',
			temperature_en:
				'The optimum temperature for Phalaenopsis spotted is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Phalaenopsis variegated likes high humidity, so regular spraying of the leaves will be useful.',
		},
		54: {
			category: 'Орхідеї',
			id: 540,
			name: 'Орхідея Фаленопсис дві гілки 12/70 см, Жовтий',
			price: 950,
			img: [
				'https://paeonia.com.ua/image/cache/catalog/products/9594/additional3-800x800.webp',
				'https://i.pinimg.com/564x/29/b5/07/29b5076ead70bac635fa391a7984740b.jpg',
				'https://i.pinimg.com/564x/a3/df/5e/a3df5ecd276f252b318dc1bae1bac0dd.jpg',
			],
			height: 70,
			desc: "Жовтий Фаленопсис з двома гілками - це яскрава і вишукана орхідея, що привертає увагу своїми сонячно-жовтими квітами. Квіти розміщені на двох довгих гілках, що надає рослині розкішного вигляду. Ідеальна для прикраси будь-якого інтер'єру, орхідея додає нотки тепла та елегантності. Вона проста у догляді: потребує помірного поливу та яскравого, розсіяного світла. Фаленопсис чудово підходить як для дому, так і для офісу.",
			conditionsСare:
				'Орхідея Фаленопсис потребує яскравого розсіяного освітлення, регулярного помірного поливу і спеціального субстрату для орхідей, щоб зберегти її здоров’я та красу.',
			soilType:
				'Орхідея Фаленопсис потребує легкого, добре дренованого субстрату, що складається з кори, моху та перліту.',
			temperature:
				'Оптимальна температура для фаленопсиса становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Фаленопсис полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			status: 'Топ продажів',
			category_en: 'Orchids',
			name_en: 'Phalaenopsis Orchid two branches 12/70 cm, Yellow',
			desc_en:
				'Yellow Phalaenopsis with two branches is a bright and elegant orchid that attracts attention with its sunny yellow flowers. The flowers are placed on two long branches, which gives the plant a luxurious look. Ideal for decorating any interior, the orchid adds a touch of warmth and elegance. It is easy to care for: it needs moderate watering and bright, diffused light. Phalaenopsis is great for both home and office.',
			conditionsСare_en:
				'Phalaenopsis Orchid needs bright diffused lighting, regular moderate watering and a special substrate for orchids to maintain its health and beauty.',
			soilType_en:
				'Phalaenopsis Orchid needs a light, well-drained substrate consisting of bark, moss and perlite.',
			temperature_en:
				'The optimum temperature for Phalaenopsis is between 20°C and 25°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Phalaenopsis likes high humidity, so regular spraying of the leaves will be useful.',
			status_en: 'Top seller',
		},
		55: {
			category: 'Орхідеї',
			id: 25,
			name: 'Рослина Фаленопсіс Royal',
			price: 2600,
			img: [
				'https://www.pattiflora.it/cdn/shop/products/phaleno_blu_pattiflora_1200x1200.jpg?v=1645106668',
				'https://i.pinimg.com/control/564x/33/1b/9e/331b9eb282e0af7b200a3a161b1532af.jpg',
				'https://i.pinimg.com/564x/0d/2d/71/0d2d71df8e11d06fa0b1c0979ff05591.jpg',
			],
			height: 60,
			desc: "Фаленопсіс Royal Blue - це вражаюча кімнатна рослина з одним стовбуром, що привертає увагу своїми насиченими синіми квітами. Ця орхідея має елегантний вигляд і стане яскравим акцентом у будь-якому інтер'єрі. Квіти Фаленопсіс відомі своєю довговічністю і здатністю цвісти протягом тривалого часу. Догляд за нею не складає труднощів: достатньо помірного поливу та яскравого, розсіяного світла.",
			conditionsСare:
				'Фаленопсіс Royal Blue потребує яскравого розсіяного освітлення, регулярного помірного поливу і спеціального субстрату для орхідей для забезпечення оптимальних умов для зростання.',
			soilType:
				'Рослина Фаленопсіс Royal Blue потребує легкого, добре дренованого субстрату, що складається з кори, моху та перліту.',
			temperature:
				'Оптимальна температура для Фаленопсиса становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, розсіяному світлу, але слід уникати прямих сонячних променів.',
			humidityLevel:
				'Фаленопсіс полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Orchids',
			name_en: 'Phalaenopsis Royal Plant',
			desc_en:
				'The Phalaenopsis Royal Blue is a striking single-stemmed houseplant that attracts attention with its rich blue flowers. This orchid has an elegant appearance and will become a bright accent in any interior. Phalaenopsis flowers are known for their durability and ability to bloom for a long time. Caring for it is not difficult: moderate watering and bright, diffused light are enough.',
			conditionsСare_en:
				'Phalaenopsis Royal Blue needs bright diffused lighting, regular moderate watering and a special substrate for orchids to provide optimal conditions for growth.',
			soilType_en:
				'The Phalaenopsis Royal Blue plant needs a light, well-drained substrate consisting of bark, moss and perlite.',
			temperature_en:
				'The optimal temperature for Phalaenopsis is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright, diffused light, but direct sunlight should be avoided.',
			humidityLevel_en:
				'Phalaenopsis likes high humidity, so regular spraying of the leaves will be useful.',
		},
	},
	Succulents: {
		22: {
			category: 'Сукуленти',
			id: 220,
			name: 'Кактус Ехінопсис Різнокольоровий',
			price: 620,
			img: [
				'https://cdn.asterias.od.ua/images/26/26-1-37-700x702.jpg',
				'https://i.pinimg.com/564x/9a/89/a3/9a89a3934e1e5359400c4be4b3ee5cd6.jpg',
				'https://i.pinimg.com/564x/0b/76/0c/0b760ce84ba01ab00dd76329d44a6746.jpg',
			],
			height: 20,
			isFlowering: true,
			desc: 'Кактус Ехінопсис Мікс — це компактна кімнатна рослина, яка вражає своїми яскравими, різнокольоровими квітами, що розкриваються влітку. Ці кактуси мають характерні округлі форми та густі колючки, що робить їх привабливими для колекціонування. Ехінопсиси є невибагливими рослинами, які чудово підходять для початківців у світі кактусів.',
			conditionsСare:
				'Ехінопсис потребує яскравого сонячного світла для оптимального росту. Поливати кактус слід рідко, дозволяючи ґрунту повністю висохнути між поливами. Взимку полив майже зовсім зменшується. Оптимальна температура для росту — +18...+25 °C, а в зимовий період кактуси можуть витримувати температури до +10 °C. Ці рослини також не вимагають підживлення, але можуть виграти від додавання добрив під час вегетаційного періоду.',

			soilType:
				'Кактус Ехінопсис Мікс Різнокольоровий потребує добре дренованого, легкого ґрунту, що містить пісок або перліт.',
			temperature:
				'Оптимальна температура для ехінопсиса становить від 18°C до 30°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу, тому розміщення на південному вікні є ідеальним.',
			humidityLevel:
				'Ехінопсис не потребує високої вологості і краще росте в сухих умовах, тому надмірний полив слід уникати.',
			status: 'Топ продажів',
			category_en: 'Succulents',
			name_en: 'Cactus Echinopsis Multicolored',
			desc_en:
				'Cactus Echinopsis Mix is ​​a compact houseplant that impresses with its bright, colorful flowers that open in summer. These cacti have characteristic rounded shapes and thick spines, which makes them attractive for collecting. Echinopsis are unpretentious plants that are great for beginners in the world of cacti.',
			conditionsСare_en:
				'Echinopsis needs bright sunlight for optimal growth. The cactus should be watered rarely, allowing the soil to dry completely between waterings. In winter, watering is almost completely reduced. The optimal temperature for growth is +18...+25 °C, and in winter cacti can withstand temperatures down to +10 °C. These plants also do not require feeding, but may benefit from adding fertilizer during the growing season.',

			soilType_en:
				'Echinopsis Mix Multicolor Cactus needs well-drained, light soil containing sand or perlite.',
			temperature_en:
				'The optimum temperature for Echinopsis is between 18°C ​​and 30°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight, so a south-facing window is ideal.',
			humidityLevel_en:
				'Echinopsis does not require high humidity and grows better in dry conditions, so excessive watering should be avoided.',
			status_en: 'Top seller',
		},
		23: {
			category: 'Сукуленти',
			id: 230,
			name: 'Хавортія ',
			price: 450,
			img: [
				'https://i.pinimg.com/564x/77/e7/28/77e72839d9e0f5afe5c5f5d1b4dd50a8.jpg',
				'https://cdn.asterias.od.ua/images/136/136-14-20-700x583.jpg',
				'https://i.pinimg.com/564x/23/73/0f/23730fea17b4cb7a4c1821a9fc54c07d.jpg',
			],
			height: 15,
			isFlowering: false,
			desc: "Хавортія — це компактна сукулентна рослина з характерними товстими, м'ясистими листками, які можуть бути темно-зеленими або з білими смужками. Ця рослина ідеально підходить для вирощування в кімнатних умовах, оскільки вона стійка до посухи та не вимагає складного догляду. Хавортія привносить зелені акценти у ваш інтер’єр і є чудовим вибором для початківців у світі кімнатних рослин.",
			conditionsСare:
				'Хавортія потребує яскравого, але розсіяного світла. Поливати рослину слід рідко, даючи ґрунту повністю висохнути між поливами. Вона добре переносить тепле і сухе середовище, тому оптимальна температура для росту — +18...+24 °C. Взимку полив можна зменшити до мінімуму. Рослина не потребує частого підживлення, але можна використовувати добрива для кактусів у період активного росту.',
			soilType:
				'Хавортія потребує добре дренованого, легкого ґрунту, зазвичай з додаванням піску або перліту.',
			temperature:
				'Оптимальна температура для хавортії становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, але може переносити легке затінення.',
			humidityLevel:
				'Хавортія не потребує високої вологості, тому полив слід здійснювати помірно, уникаючи надмірного зволоження.',
			status: 'Розпродаж',
			category_en: 'Succulents',
			name_en: 'Haworthia ',
			desc_en:
				'Haworthia is a compact succulent plant with characteristic thick, fleshy leaves that can be dark green or with white stripes. This plant is ideal for growing indoors, as it is drought-resistant and does not require complex care. Haworthia brings green accents to your interior and is a great choice for beginners in the world of indoor plants.',
			conditionsСare_en:
				'Haworthia needs bright but diffused light. The plant should be watered rarely, allowing the soil to dry completely between waterings. It tolerates a warm and dry environment well, so the optimal temperature for growth is +18...+24 °C. In winter, watering can be reduced to a minimum. The plant does not require frequent feeding, but you can use a cactus fertilizer during the period of active growth.',
			soilType_en:
				'Haworthia requires well-drained, light soil, usually with the addition of sand or perlite.',
			temperature_en:
				'The optimum temperature for Haworthia is from 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, but can tolerate light shading.',
			humidityLevel_en:
				'Haworthia does not require high humidity, so watering should be done moderately, avoiding excessive moisture.',
			status_en: 'Sale',
		},
		24: {
			category: 'Сукуленти',
			id: 240,
			name: 'Алоє Мікс',
			price: 500,
			img: [
				'https://i.pinimg.com/736x/0e/fc/9b/0efc9be6472b86662759ed038059ec17.jpg',
				'https://i.pinimg.com/736x/5b/48/f6/5b48f657740a762334d2476986cfead6.jpg',
				'https://i.pinimg.com/564x/d2/74/7b/d2747b3b847205fd30cbdf6a68c668a1.jpg',
			],
			height: 28,
			desc: 'Алоє Мікс — це сукулентна кімнатна рослина, відома своїми соковитими листками, що містять корисні речовини, які часто використовуються в медицині та косметології. Алоє має гарний зелений колір та характерні колючі краї, що робить його привабливим елементом декору. Ця рослина проста в догляді, ідеально підходить для початківців.',
			conditionsСare:
				'Алоє потребує яскравого світла, але може також рости в умовах часткової тіні. Поливати рослину слід рідко, даючи ґрунту повністю висохнути між поливами. Оптимальна температура для росту — +20...+25 °C. Взимку полив можна зменшити, оскільки рослина входить у стан спокою. Алоє не потребує частого підживлення, однак можна використовувати добрива для сукулентів у період активного росту.',
			soilType:
				'Алоє Мікс потребує добре дренованого, легкого ґрунту, що складається з піску та перліту.',
			temperature:
				'Оптимальна температура для алоє становить від 20°C до 30°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує щонайменше 6 годин освітлення на день.',
			humidityLevel:
				'Алоє не потребує високої вологості і краще росте в сухих умовах, тому полив слід здійснювати помірно.',
			status: 'Новинки',
			category_en: 'Succulents',
			name_en: 'Aloe Mix',
			desc_en:
				'Aloe Mix is ​​a succulent houseplant known for its succulent leaves containing beneficial substances that are often used in medicine and cosmetology. Aloe has a beautiful green color and characteristic prickly edges, which makes it an attractive element of decor. This plant is easy to care for, ideal for beginners.',
			conditionsСare_en:
				'Aloe needs bright light, but can also grow in partial shade. The plant should be watered rarely, allowing the soil to dry completely between waterings. The optimal temperature for growth is +20...+25 °C. In winter, watering can be reduced, as the plant enters a state of rest. Aloe does not require frequent feeding, but you can use a succulent fertilizer during the period of active growth.',
			soilType_en:
				'Aloe Mix needs a well-drained, light soil consisting of sand and perlite.',
			temperature_en: 'The optimal temperature for aloe is from 20°C to 30°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 6 hours of light per day.',
			humidityLevel_en:
				'Aloe does not require high humidity and grows better in dry conditions, so watering should be done moderately.',
			status_en: 'New',
		},
		25: {
			category: 'Сукуленти',
			id: 250,
			name: 'Сукулент Красула Овата',
			price: 600,
			img: [
				'https://cdn.asterias.od.ua/images/128/128-1-3-700x668.jpg',
				'https://vsegda-pomnim.com/uploads/posts/2022-04/1650625930_8-vsegda-pomnim-com-p-krassula-vidi-foto-i-nazvaniya-tsvetenie-8.jpg',
				'https://i0.wp.com/succulentkupi.ru/wp-content/uploads/2021/04/krassula-jajcevidnaja-2.jpg?fit=2343%2C2343&ssl=1',
			],
			height: 30,
			desc: 'Красула Овата, також відома як "грошове дерево", — це популярна кімнатна рослина, яка вирізняється своїми круглими, м’ясистими листками та стійкістю до посухи. Вважається, що ця рослина приносить удачу та фінансовий добробут, що робить її бажаною для багатьох любителів рослин. Красула має компактну форму і добре підходить для вирощування в горщиках.',
			conditionsСare:
				'Красула Овата потребує яскравого світла, але може переносити і часткову тінь. Поливати рослину слід помірно, дозволяючи ґрунту повністю висохнути між поливами. Оптимальна температура для росту — +18...+24 °C. У зимовий період полив можна зменшити, оскільки рослина входить у стан спокою. Красула не потребує частого підживлення, але можна використовувати добрива для кактусів під час активного росту.',
			soilType:
				'Сукулент Красула Овата потребує добре дренованого, легкого ґрунту, збагаченого піском або перлітом.',
			temperature:
				'Оптимальна температура для красули становить від 18°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу, тому краще розміщувати її на південному вікні.',
			humidityLevel:
				'Красула Овата не потребує високої вологості і краще росте в сухих умовах, тому полив слід здійснювати помірно.',
			category_en: 'Succulents',
			name_en: 'Succulent Crassula Ovata',
			desc_en:
				'Crassula Ovata, also known as the "money tree", is a popular houseplant, distinguished by its round, fleshy leaves and drought resistance. It is believed that this plant brings good luck and financial well-being, which makes it desirable for many plant lovers. Crassula has a compact shape and is well suited for growing in pots.',
			conditionsСare_en:
				'Crassula Ovata needs bright light, but can also tolerate partial shade. The plant should be watered moderately, allowing the soil to dry completely between waterings. The optimal temperature for growth is +18...+24 °C. In winter, watering can be reduced, as the plant enters a state of rest. Crassula does not require frequent feeding, but you can use a cactus fertilizer during active growth.',
			soilType_en:
				'The succulent Crassula Ovata needs well-drained, light soil enriched with sand or perlite.',
			temperature_en:
				'The optimum temperature for Crassula is from 18°C ​​to 25°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight, so it is better to place it on a south-facing window.',
			humidityLevel_en:
				'Crassula Ovata does not require high humidity and grows better in dry conditions, so watering should be done moderately.',
		},
		26: {
			category: 'Сукуленти',
			id: 260,
			name: 'Ріпсаліс Мікс',
			price: 850,
			img: [
				'https://cdn.asterias.od.ua/images/48/48-5-19-700x549.jpg',
				'https://orchidsart.com/wp-content/uploads/2018/11/%D1%80%D0%B8%D0%BF%D1%81%D0%B0%D0%BB%D0%B8%D1%81-14%D1%81%D0%BC.jpg',
				'https://f-f.flowers/image/cache/catalog/image/cache/catalog/produkt/komnatnye_rasteniya/sukkulenty/8008-500x600.webp',
			],
			height: 30,
			isFlowering: false,
			desc: 'Ріпсаліс Мікс — це унікальна кімнатна рослина з довгими, звисаючими стеблами, яка належить до родини кактусових. Ця рослина славиться своєю екзотичною естетикою і здатністю адаптуватися до різних умов. Ріпсаліс може мати різні варіації забарвлення, від яскраво-зеленого до сірувато-зеленого, і є ідеальним вибором для ампельних композицій.',
			conditionsСare:
				'Ріпсаліс потребує яскравого, розсіяного світла. Поливати рослину слід помірно, дозволяючи верхньому шару ґрунту підсохнути між поливами. Оптимальна температура для росту — +18...+24 °C. Взимку полив можна зменшити. Ріпсаліс не потребує частого підживлення, але може виграти від додавання добрив для кактусів під час активного росту. Рослина також любить високу вологість, тому обприскування листя буде корисним.',
			soilType:
				'Ріпсаліс Мікс потребує добре дренованого, легкого ґрунту, що містить органічні речовини, такі як мох і перегній.',
			temperature:
				'Оптимальна температура для ріпсаліса становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, але може витримувати легке затінення.',
			humidityLevel:
				'Ріпсаліс полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			status: 'Топ продажів',
			category_en: 'Succulents',
			name_en: 'Rhipsalis Mix',
			desc_en:
				'Rhipsalis Mix is ​​a unique houseplant with long, hanging stems that belongs to the cactus family. This plant is famous for its exotic aesthetics and ability to adapt to different conditions. Rhipsalis can have different color variations, from bright green to grayish-green, and is an ideal choice for ampel compositions.',
			conditionsСare_en:
				'Rhipsalis needs bright, diffused light. The plant should be watered moderately, allowing the top layer of soil to dry out between waterings. The optimal temperature for growth is +18...+24 °C. In winter, watering can be reduced. Rhipsalis does not require frequent feeding, but may benefit from adding fertilizer for cacti during active growth. The plant also likes high humidity, so misting the leaves will be beneficial.',
			soilType_en:
				'Rhipsalis Mix needs well-drained, light soil containing organic matter such as moss and humus.',
			temperature_en:
				'The optimum temperature for Rhipsalis is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, but can tolerate light shading.',
			humidityLevel_en:
				'Rhipsalis likes high humidity, so misting the leaves regularly will be beneficial.',
			status_en: 'Top seller',
		},
		27: {
			category: 'Сукуленти',
			id: 270,
			name: 'Сансевієрія Cylindrica',
			price: 750,
			img: [
				'https://i.pinimg.com/564x/7f/30/f0/7f30f04117999454b2156f986fdcfa80.jpg',
				'https://i.pinimg.com/control/564x/72/e9/1c/72e91c5da7acb7a86e3fb33a865e3cea.jpg',
				'https://i.pinimg.com/564x/61/9e/ff/619eff7b4af64563930551206cb6a2c1.jpg',
			],
			height: 40,
			desc: 'Сансевієрія Cylindrica, або "зміїний язик", — це вражаюча кімнатна рослина з вертикальними, циліндричними листками, які можуть досягати значної висоти. Вона відома своєю здатністю витримувати різні умови вирощування, включаючи низьку освітленість і нерегулярний полив. Сансевієрія додає елегантності і сучасного вигляду будь-якому інтер’єру.',
			conditionsСare:
				'Сансевієрія потребує яскравого, але розсіяного світла, однак може рости і в умовах слабкого освітлення. Поливати рослину слід помірно, даючи ґрунту висохнути між поливами, щоб уникнути застою води. Оптимальна температура для росту — +18...+25 °C. Сансевієрія не потребує частого підживлення, але можна використовувати добрива для кактусів під час активного росту.',
			soilType:
				'Сансевієрія Cylindrica потребує добре дренованого, легкого ґрунту, збагаченого піском або перлітом.',
			temperature:
				'Оптимальна температура для сансевієрії становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, але може переносити і тінь.',
			humidityLevel:
				'Сансевієрія не потребує високої вологості і краще росте в сухих умовах, тому полив слід здійснювати помірно.',
			status: 'Новинки',
			category_en: 'Succulents',
			name_en: 'Sansevieria Cylindrica',
			desc_en:
				'Sansevieria Cylindrica, or "snake tongue", is a striking houseplant with upright, cylindrical leaves that can reach considerable heights. It is known for its ability to withstand a variety of growing conditions, including low light and irregular watering. Sansevieria adds elegance and a modern look to any interior.',
			conditionsСare_en:
				'Sansevieria needs bright but diffused light, but can also grow in low light conditions. The plant should be watered moderately, allowing the soil to dry out between waterings to avoid waterlogging. The optimum temperature for growth is +18...+25 °C. Sansevieria does not require frequent feeding, but you can use a cactus fertilizer during active growth.',
			soilType_en:
				'Sansevieria Cylindrica needs well-drained, light soil enriched with sand or perlite.',
			temperature_en:
				'The optimal temperature for Sansevieria is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, but can also tolerate shade.',
			humidityLevel_en:
				'Sansevieria does not require high humidity and grows better in dry conditions, so watering should be done moderately.',
			status_en: 'New',
		},
		29: {
			category: 'Сукуленти',
			id: 290,
			name: 'Кактус Ехінокактус Grusonii 27х25',
			price: 1200,
			img: [
				'https://cdn.asterias.od.ua/images/26/26-14-3-700x548.jpg',
				'https://i.pinimg.com/564x/6c/cd/6a/6ccd6a9d490f223a81c9d9f2da59fd10.jpg',
				'https://i.pinimg.com/564x/e2/42/f9/e242f98439ee8e9de2cf7790329531e0.jpg',
			],
			height: 25,
			desc: 'Кактус Ехінокактус Grusonii, відомий також як "золоте коло", — це видовий кактус, що характеризується великими, округлими формами і яскраво-жовтими колючками. Ця рослина вражає своєю естетикою і може стати справжнім акцентом у будь-якому інтер’єрі. Ехінокактус Grusonii є відносно простим у догляді, що робить його популярним вибором для любителів кактусів.',
			conditionsСare:
				'Ехінокактус потребує яскравого сонячного світла для оптимального росту і цвітіння. Поливати кактус слід рідко, дозволяючи ґрунту повністю висохнути між поливами, особливо в зимовий період. Оптимальна температура для росту — +18...+25 °C. Взимку кактус може витримувати нижчі температури, проте не нижче +10 °C. Ця рослина також не вимагає частого підживлення, однак можна використовувати спеціалізовані добрива для кактусів у період активного росту.',
			soilType:
				'Кактус Ехінокактус Grusonii потребує добре дренованого, легкого ґрунту, збагаченого піском або перлітом.',
			temperature:
				'Оптимальна температура для ехінокактуса становить від 18°C до 30°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу, тому краще розміщувати її на південному вікні.',
			humidityLevel:
				'Ехінокактус не потребує високої вологості і краще росте в сухих умовах, тому полив слід здійснювати помірно.',
			category_en: 'Succulents',
			name_en: 'Cactus Echinocactus Grusonii 27x25',
			desc_en:
				'Cactus Echinocactus Grusonii, also known as the "golden circle", is a species of cactus characterized by large, rounded shapes and bright yellow spines. This plant impresses with its aesthetics and can become a real accent in any interior. Echinocactus Grusonii is relatively easy to care for, which makes it a popular choice for cactus lovers.',
			conditionsСare_en:
				'Echinocactus needs bright sunlight for optimal growth and flowering. The cactus should be watered rarely, allowing the soil to dry completely between waterings, especially in winter. The optimal temperature for growth is +18...+25 °C. In winter, the cactus can withstand lower temperatures, but not below +10 °C. This plant also does not require frequent feeding, but you can use specialized fertilizers for cacti during the period of active growth.',
			soilType_en:
				'The cactus Echinocactus Grusonii needs well-drained, light soil enriched with sand or perlite.',
			temperature_en:
				'The optimum temperature for echinocactus is from 18°C ​​to 30°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight, so it is better to place it on a south-facing window.',
			humidityLevel_en:
				'Echinocactus does not require high humidity and grows better in dry conditions, so watering should be done moderately.',
		},
	},
	'Citrus plants': {
		30: {
			category: 'Цитрусові рослини',
			id: 300,
			name: 'Лимонне Дерево з Плодами',
			price: 2500,
			img: [
				'https://i.pinimg.com/564x/54/23/8c/54238c19bd79a125a6edd71b492611b9.jpg',
				'https://plantsroom.com.ua/wp-content/uploads/2024/07/img_8986.png',
				'https://i.pinimg.com/564x/a3/46/2d/a3462dee75d0ec3c2c90be4e05f43cb9.jpg',
			],
			height: 122,
			desc: 'Лимонне дерево — це унікальна кімнатна рослина, яка не тільки прикрашає ваш простір, але й може давати плоди. Ця рослина славиться своїми ароматними жовтими лимонами і красивими зеленими листям. Лимонне дерево також додає свіжість і природний шарм до інтер’єру, роблячи його чудовим вибором для тих, хто любить садівництво.',
			conditionsСare:
				'Лимонне дерево потребує яскравого сонячного світла, тому розмістіть його біля вікна. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, але уникати застою води. Оптимальна температура для росту — +20...+25 °C. Взимку рослина може потребувати зниження температури до +15 °C. Лимонне дерево також виграє від регулярного підживлення органічними добривами під час вегетаційного періоду.',
			soilType:
				'Лимонне дерево з плодами потребує добре дренованого, родючого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для лимонного дерева становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 8 годин освітлення на день.',
			humidityLevel:
				'Лимонне дерево полюбляє помірну вологість, тому регулярний полив та обприскування листя будуть корисними.',
			category_en: 'Citrus plants',
			name_en: 'Lemon Tree with Fruits',
			desc_en:
				'Lemon tree is a unique houseplant that not only decorates your space, but can also bear fruit. This plant is famous for its fragrant yellow lemons and beautiful green leaves. Lemon tree also adds freshness and natural charm to the interior, making it a great choice for those who love gardening.',
			conditionsСare_en:
				'Lemon tree needs bright sunlight, so place it near the window. The plant should be watered regularly, maintaining soil moisture, but avoiding water stagnation. The optimal temperature for growth is +20...+25 °C. In winter, the plant may need to lower the temperature to +15 °C. Lemon trees also benefit from regular fertilization with organic fertilizers during the growing season.',
			soilType_en:
				'A fruiting lemon tree needs well-drained, fertile soil rich in organic matter.',
			temperature_en:
				'The optimum temperature for a lemon tree is between 20°C and 25°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 8 hours of light per day.',
			humidityLevel_en:
				'Lemon trees like moderate humidity, so regular watering and spraying the leaves will be beneficial.',
		},

		31: {
			category: 'Цитрусові рослини',
			id: 310,
			name: 'Лаймове Дерево',
			price: 2200,
			img: [
				'https://cdn.27.ua/sc--media--prod/default/7f/a2/2e/7fa22e51-da6a-4a78-b997-a7cb25685da3.jpg',
				'https://i.pinimg.com/564x/75/aa/d3/75aad3070683208423afd8583d31b672.jpg',
				'https://i.pinimg.com/564x/1a/34/67/1a3467a6d1387478f303ad4c70cc78a1.jpg',
			],
			height: 70,
			desc: 'Лаймове дерево Citrus Lime — це чудова кімнатна рослина, яка не тільки вражає своїм декоративним виглядом, але й приносить смачні плоди. Лаймове дерево має яскраві зелені листя і ароматні білі квіти, що робить його популярним серед садівників. Ця рослина додає свіжість і тропічний шарм до будь-якого інтер’єру.',
			conditionsСare:
				'Лаймове дерево потребує яскравого сонячного світла, тому розмістіть його на південному або західному вікні. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, але уникаючи перезволоження. Оптимальна температура для росту — +20...+25 °C. Взимку температура може бути трохи нижчою, близько +15 °C. Лаймове дерево також потребує підживлення органічними добривами в період активного росту для забезпечення належного розвитку і плодоносіння.',
			soilType:
				'Лаймове дерево Citrus Lime потребує добре дренованого, родючого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для лаймового дерева становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 8 годин освітлення на день.',
			humidityLevel:
				'Лаймове дерево полюбляє помірну вологість, тому регулярний полив та обприскування листя будуть корисними.',
			status: 'Топ продажів',
			category_en: 'Citrus plants',
			name_en: 'Lime Tree',
			desc_en:
				'The Citrus Lime tree is a wonderful houseplant that not only impresses with its decorative appearance, but also bears delicious fruits. The lime tree has bright green leaves and fragrant white flowers, which makes it popular among gardeners. This plant adds freshness and tropical charm to any interior.',
			conditionsСare_en:
				'The lime tree needs bright sunlight, so place it on a south or west window. The plant should be watered regularly, maintaining soil moisture, but avoiding waterlogging. The optimal temperature for growth is +20...+25 °C. In winter, the temperature may be slightly lower, around +15 °C. Lime trees also need to be fertilized with organic fertilizers during the period of active growth to ensure proper development and fruiting.',
			soilType_en:
				'Lime trees Citrus Lime require well-drained, fertile soil enriched with organic matter.',
			temperature_en:
				'The optimum temperature for a lime tree is between 20°C and 25°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 8 hours of light per day.',
			humidityLevel_en:
				'Lime trees like moderate humidity, so regular watering and spraying the leaves will be beneficial.',
			status_en: 'Top seller',
		},
		32: {
			category: 'Цитрусові рослини',
			id: 320,
			name: 'Цісус Підвісний Mandaiana',
			price: 800,
			img: [
				'https://fleurplants.com.ua/image/cache/catalog/catalog/plants-to-1m/cissus-fp/cissus-fp-2-1200x800.jpg',
				'https://static.tildacdn.com/tild3438-6633-4230-b161-623362616164/6-47-700x511.jpg',
				'https://zvety.com/wp-content/uploads/cissus-640x480.jpg',
			],
			height: 60,
			isFlowering: false,
			desc: 'Цісус Mandaiana — це вражаюча ампельна рослина, яка славиться своїм декоративним виглядом і швидким ростом. Її зелена листя має характерну форму і створює пишну завісу, що робить цю рослину ідеальною для підвісних горщиків. Цісус є відмінним вибором для тих, хто хоче додати зелений акцент у свій інтер’єр.',
			conditionsСare:
				"Цісус потребує яскравого, але розсіяного світла для оптимального росту. Поливати рослину слід помірно, дозволяючи верхньому шару ґрунту підсохнути між поливами. Оптимальна температура для росту — +18...+24 °C. Взимку полив можна зменшити. Цісус не потребує частого підживлення, але можна використовувати рідкі добрива для кімнатних рослин у період активного росту, щоб підтримувати його здоров'я та красу.",
			soilType:
				'Цісус Підвісний Mandaiana потребує добре дренованого, легкого ґрунту, що містить органічні речовини та пісок.',
			temperature:
				'Оптимальна температура для цісуса становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, але може витримувати легке затінення.',
			humidityLevel:
				'Цісус полюбляє високу вологість, тому регулярне обприскування листя буде корисним.',
			status: 'Розпродаж',
			category_en: 'Citrus plants',
			name_en: 'Cisus Mandaiana',
			desc_en:
				'Cisus Mandaiana is a striking ampelous plant, renowned for its decorative appearance and rapid growth. Its green foliage has a distinctive shape and creates a lush curtain, making this plant ideal for hanging pots. Cissus is an excellent choice for those who want to add a green accent to their interior.',
			conditionsСare_en:
				'Cissus needs bright but diffused light for optimal growth. Water the plant moderately, allowing the top layer of soil to dry out between waterings. The optimal temperature for growth is +18...+24 °C. In winter, watering can be reduced. Cissus does not require frequent feeding, but you can use liquid fertilizers for indoor plants during the period of active growth to maintain its health and beauty.',
			soilType_en:
				'Cissus Hanging Mandaiana needs well-drained, light soil containing organic matter and sand.',
			temperature_en:
				'The optimal temperature for Cissus is from 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, but can withstand light shading.',
			humidityLevel_en:
				'Cissus likes high humidity, so regular spraying of the leaves will be useful.',
			status_en: 'Sale',
		},

		33: {
			category: 'Цитрусові рослини',
			id: 330,
			name: 'Цитрус Каламондін з Плодами',
			price: 3000,
			img: [
				'https://plantsroom.com.ua/wp-content/uploads/2024/06/img_7694.png',
				'https://i.pinimg.com/564x/0a/18/b8/0a18b8591069e6d93c1e35c4d75b2a04.jpg',
				'https://i.pinimg.com/564x/9e/8c/46/9e8c46ff3d9c46cab2f1e8b1ba579775.jpg',
			],
			height: 130,
			desc: 'Цитрус Каламондін — це декоративна кімнатна рослина, яка вражає своїми маленькими, ароматними плодами і пишною зеленню. Ця рослина має компактну форму, що робить її ідеальною для вирощування в горщиках. Каламондін не лише прикрашає інтер’єр, але й приносить плоди, які можна використовувати в кулінарії.',
			conditionsСare:
				'Каламондін потребує яскравого, розсіяного світла, тому розмістіть його біля вікна. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, але уникати застою води. Оптимальна температура для росту — +20...+25 °C. Взимку рослина може витримувати трохи нижчу температуру, близько +15 °C. Для забезпечення належного розвитку і плодоносіння каламондін потребує регулярного підживлення органічними добривами в період активного росту.',
			soilType:
				'Цитрус Каламондін на стовбурі з плодами потребує добре дренованого, родючого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для каламондіну становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 8 годин освітлення на день.',
			humidityLevel:
				'Каламондін полюбляє помірну вологість, тому регулярний полив та обприскування листя будуть корисними.',
			status: 'Новинки',
			category_en: 'Citrus plants',
			name_en: 'Calamondin Citrus with Fruits',
			desc_en:
				'Calamondin Citrus is a decorative houseplant that impresses with its small, fragrant fruits and lush greenery. This plant has a compact shape, which makes it ideal for growing in pots. Calamondin not only decorates the interior, but also bears fruits that can be used in cooking.',
			conditionsСare_en:
				'Calamondin needs bright, diffused light, so place it near a window. The plant should be watered regularly, maintaining soil moisture, but avoiding water stagnation. The optimal temperature for growth is +20...+25 °C. In winter, the plant can withstand a slightly lower temperature, about +15 °C. To ensure proper development and fruiting, Calamondin requires regular fertilizing with organic fertilizers during the period of active growth.',
			soilType_en:
				'Calamondin citrus on a trunk with fruits requires well-drained, fertile soil enriched with organic matter.',
			temperature_en:
				'The optimum temperature for Calamondin is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 8 hours of light per day.',
			humidityLevel_en:
				'Calamondin likes moderate humidity, so regular watering and spraying the leaves will be useful.',
			status_en: 'New',
		},
		34: {
			category: 'Цитрусові рослини',
			id: 340,
			name: 'Цитрус Мандарин',
			price: 2800,
			img: [
				'https://kvitosvit.com.ua/2041/mandarin-kimnatnij-abkhazkij.jpg',
				'https://i.pinimg.com/564x/19/d6/74/19d67425ff1beb418ae89c25f0d7c56e.jpg',
				'https://i.pinimg.com/564x/e2/25/a4/e225a4a8be1fb6770353c2db17a54257.jpg',
			],
			height: 110,
			isFlowering: true,
			desc: 'Цитрус Мандарин — це популярна кімнатна рослина, яка не тільки прикрашає ваш простір, але й може приносити смачні плоди. Мандаринове дерево має красиві, темно-зелені листя та ароматні білі квіти, що робить його чудовим акцентом у будь-якому інтер’єрі. Ця рослина також відома своїми смачними, соковитими плодами, які радують своїм смаком.',
			conditionsСare:
				'Мандарин потребує яскравого, сонячного світла, тому розмістіть його на південному або західному вікні. Поливати рослину слід регулярно, підтримуючи вологість ґрунту, але уникаючи застою води. Оптимальна температура для росту — +20...+25 °C. Взимку температура може бути трохи нижчою, близько +15 °C. Для активного росту і плодоносіння мандарин потребує регулярного підживлення органічними добривами.',
			soilType:
				'Цитрус Мандарин потребує добре дренованого, родючого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для мандарину становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 8 годин освітлення на день.',
			humidityLevel:
				'Мандарин полюбляє помірну вологість, тому регулярний полив та обприскування листя будуть корисними.',
			status: 'Новинки',
			category_en: 'Citrus plants',
			name_en: 'Citrus Mandarin',
			desc_en:
				'Citrus Mandarin is a popular houseplant that not only decorates your space, but can also bear delicious fruit. The tangerine tree has beautiful, dark green leaves and fragrant white flowers, making it a great accent in any interior. This plant is also known for its delicious, juicy fruits that delight with their taste.',
			conditionsСare_en:
				'Mandarin needs bright, sunny light, so place it on a south or west window. The plant should be watered regularly, maintaining soil moisture, but avoiding waterlogging. The optimal temperature for growth is +20...+25 °C. In winter, the temperature may be slightly lower, around +15 °C. For active growth and fruiting, tangerine requires regular fertilizing with organic fertilizers.',
			soilType_en:
				'Citrus Mandarin needs well-drained, fertile soil enriched with organic matter.',
			temperature_en:
				'The optimum temperature for tangerine is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 8 hours of light per day.',
			humidityLevel_en:
				'Tangerine likes moderate humidity, so regular watering and spraying the leaves will be useful.',
			status_en: 'New',
		},
	},
	'Exotic plants': {
		60: {
			category: 'Екзотичні рослини',
			id: 600,
			name: 'Банан кімнатний ',
			price: 1500,
			img: [
				'https://i.pinimg.com/564x/2b/98/e8/2b98e8ea9c3a15556eb5a79e9d435e37.jpg',
				'https://i.pinimg.com/564x/89/36/d4/8936d4c869e50d48ad1f2aa277656a4a.jpg',
				'https://i.pinimg.com/564x/2b/b3/79/2bb3797e61a74ffc7a8ba33a57c4e809.jpg',
			],
			height: 25,
			desc: "Банан кімнатний- це компактна рослина, яка відрізняється невеликими розмірами і привабливим виглядом. Цей плодовий банан ідеально підходить для домашнього вирощування, адже при належному догляді може давати невеликі, але смачні плоди. Рослина має зелене листя, що додає свіжості вашому інтер'єру. Догляд за ним не є складним: потрібно забезпечити достатнє освітлення і регулярний полив.",
			conditionsСare:
				'Банан кімнатний потребує яскравого, розсіяного світла, помірного поливу та родючого субстрату для оптимального росту та розвитку.',
			soilType:
				'Банан кімнатний  потребує добре дренованого, родючого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для кімнатного банана становить від 22°C до 28°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, але може переносити легке затінення.',
			humidityLevel:
				'Кімнатний банан полюбляє високу вологість, тому регулярне обприскування листя та підтримання вологості повітря будуть корисними.',
			category_en: 'Exotic plants',
			name_en: 'Indoor banana ',
			desc_en:
				'Indoor banana is a compact plant that is distinguished by its small size and attractive appearance. This fruit banana is ideal for home cultivation, because with proper care it can produce small but tasty fruits. The plant has green leaves that add freshness to your interior. Caring for it is not difficult: you need to provide sufficient lighting and regular watering.',
			conditionsСare_en:
				'Indoor banana needs bright, diffused light, moderate watering and a fertile substrate for optimal growth and development.',
			soilType_en:
				'Indoor banana needs well-drained, fertile soil enriched with organic matter.',
			temperature_en:
				'The optimal temperature for indoor banana is from 22°C to 28°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, but can tolerate light shading.',
			humidityLevel_en:
				'The indoor banana likes high humidity, so regular spraying of the leaves and maintaining air humidity will be useful.',
		},
		61: {
			category: 'Екзотичні рослини',
			id: 610,
			name: 'Мірт домашній Гостролистий',
			price: 1800,
			img: [
				'https://cdn.27.ua/sc--media--prod/default/54/67/fb/5467fb24-8ce1-439f-a4db-eedce98acacc.jpeg',
				'https://i.pinimg.com/564x/fc/df/96/fcdf961be43cf4bf1559be18c51e6501.jpg',
				'https://i.pinimg.com/564x/e1/40/21/e1402102b7bfd5e174b50a541d4388b0.jpg',
			],
			desc: "Мірт домашній Гостролистий - це елегантна кімнатна рослина, відома своїм ароматним листям та витонченими квітами. Ця рослина не тільки прикрашає інтер'єр, але й має корисні властивості, адже мірт часто використовується в ароматерапії. Гостролистий мірт відрізняється щільними, темно-зеленими листками і здатний рости до 30 см у висоту. Догляд за ним включає регулярний полив та яскраве, розсіяне освітлення.",
			conditionsСare:
				"Мірт домашній Гостролистий потребує яскравого, розсіяного світла, помірного поливу та родючого субстрату, щоб підтримувати своє здоров'я та красу.",
			soilType:
				'Мірт домашній Гостролистий потребує добре дренованого, легкого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для мірту становить від 15°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, але може витримувати легке затінення.',
			humidityLevel:
				'Мірт полюбляє помірну вологість, тому регулярне обприскування листя буде корисним.',
			category_en: 'Exotic plants',
			name_en: 'Myrtle, Spicy',
			desc_en:
				'Myrtle, Spicy is an elegant houseplant, known for its fragrant leaves and elegant flowers. This plant not only decorates the interior, but also has useful properties, because myrtle is often used in aromatherapy. Spicy myrtle is distinguished by dense, dark green leaves and can grow up to 30 cm in height. Care for it includes regular watering and bright, diffused lighting.',
			conditionsСare_en:
				'Myrtle, Spicy needs bright, diffused light, moderate watering and a fertile substrate to maintain its health and beauty.',
			soilType_en:
				'Myrtle, Spicy needs well-drained, light soil enriched with organic matter.',
			temperature_en:
				'The optimum temperature for myrtle is from 15°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, but can tolerate light shade.',
			humidityLevel_en:
				'Myrtle likes moderate humidity, so regular spraying of the leaves will be beneficial.',
		},
		62: {
			category: 'Екзотичні рослини',
			id: 620,
			name: 'Ананас Вікторія до 10 см',
			price: 1200,
			img: [
				'https://faterra.com/img/banner/ananas.jpg',
				'https://i.pinimg.com/564x/d8/d4/d8/d8d4d80ecfe24825a71f95bdb75be325.jpg',
				'https://yaskravaklumba.com.ua/image/cache/catalog/komnatnye/ananas/ananaskomnatnyj1-500x500.jpg',
			],
			height: 50,
			desc: 'Ананас Вікторія - це компактна кімнатна рослина, відома своїм привабливим виглядом та смачними плодами. Ця рослина досягає висоти до 10 см і має яскраво-зелене листя, що створює екзотичну атмосферу у вашому домі. При належному догляді ананас може давати невеликі плоди, що є великою перевагою для любителів кімнатних рослин. Догляд за ананасом Вікторія включає регулярний полив і яскраве, розсіяне світло.',
			conditionsСare:
				"Ананас Вікторія потребує яскравого, розсіяного світла, помірного поливу та добре дренованого субстрату для підтримання здоров'я рослини.",
			soilType:
				'Ананас Вікторія потребує добре дренованого, легкого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для ананаса становить від 20°C до 30°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 6 годин освітлення на день.',
			humidityLevel:
				'Ананас полюбляє високу вологість, тому регулярне обприскування листя та підтримання вологості повітря будуть корисними.',
			category_en: 'Exotic plants',
			name_en: 'Victoria pineapple up to 10 cm',
			desc_en:
				'Victoria pineapple is a compact houseplant known for its attractive appearance and delicious fruits. This plant reaches a height of up to 10 cm and has bright green leaves, which creates an exotic atmosphere in your home. With proper care, pineapple can produce small fruits, which is a great advantage for lovers of indoor plants. Victoria pineapple care includes regular watering and bright, diffused light.',
			conditionsСare_en:
				'Victoria pineapple requires bright, diffused light, moderate watering and a well-drained substrate to maintain the health of the plant.',
			soilType_en:
				'Victoria pineapple requires well-drained, light soil enriched with organic matter.',
			temperature_en:
				'The optimum temperature for pineapple is from 20°C to 30°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 6 hours of light per day.',
			humidityLevel_en:
				'Pineapple loves high humidity, so regular spraying of the leaves and maintaining air humidity will be useful.',
		},
		63: {
			category: 'Екзотичні рослини',
			id: 630,
			name: 'Лімонелла сорт Пурш',
			price: 1600,
			img: [
				'https://cdn.27.ua/sc--media--prod/default/e8/63/d5/e863d5fc-bf6b-42fb-a408-a708adcd9e05.jpeg',
				'https://i.pinimg.com/564x/fc/f1/c6/fcf1c6cfc84681e84fdc9a660f0c3688.jpg',
				'https://i.pinimg.com/564x/60/56/1b/60561bf56bf87812b169a3ce5a4d65b6.jpg',
			],
			height: 100,
			desc: 'Лімонелла сорт Пурша - це компактна кімнатна рослина, відома своїм цитрусовим ароматом та невеликими розмірами, що становлять від 11 до 20 см. Ця рослина має зелене листя і маленькі квіти, які можуть давати смачні плоди. Лімонелла є чудовим вибором для тих, хто хоче мати свіжий цитрусовий аромат у домі, а також насолоджуватися натуральними плодами. Догляд за нею включає яскраве, розсіяне світло та помірний полив.',
			conditionsСare:
				'Лімонелла сорт Пурша потребує яскравого, розсіяного світла, помірного поливу та родючого субстрату для забезпечення здорового росту та плодоношення.',
			soilType:
				'Лімонелла сорт Пурша потребує добре дренованого, родючого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для лімонелли становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 8 годин освітлення на день.',
			humidityLevel:
				'Лімонелла полюбляє помірну вологість, тому регулярний полив та обприскування листя будуть корисними.',
			category_en: 'Exotic houseplants',
			name_en: 'Limonella Pursch',
			desc_en:
				'Limonella Pursch is a compact houseplant known for its citrus scent and small size, ranging from 11 to 20 cm. This plant has green leaves and small flowers that can produce delicious fruits. Limonella is a great choice for those who want to have a fresh citrus scent in the home, as well as enjoy natural fruits. Care includes bright, diffused light and moderate watering.',
			conditionsСare_en:
				'Limonella variety Pursha needs bright, diffused light, moderate watering and a fertile substrate to ensure healthy growth and fruiting.',
			soilType_en:
				'Limonella variety Pursha needs well-drained, fertile soil enriched with organic matter.',
			temperature_en:
				'The optimum temperature for limonella is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 8 hours of light per day.',
			humidityLevel_en:
				'Limonella likes moderate humidity, so regular watering and spraying the leaves will be useful.',
		},
		64: {
			category: 'Екзотичні рослини',
			id: 640,
			name: 'Фейхоа Звичайний 21-30 см',
			price: 1900,
			img: [
				'https://i.pinimg.com/564x/d9/7b/cd/d97bcd0cc0e660d2f6d7f30a6deff799.jpg',
				'https://i.pinimg.com/564x/e1/95/f6/e195f68959a3e3bb015c5cef4ab49c18.jpg',
				'https://i.pinimg.com/564x/42/7c/95/427c95927d486b7a984b60e45e1c564a.jpg',
			],
			height: 90,
			desc: 'Фейхоа Звичайний - це декоративна кімнатна рослина з привабливими зеленими листками та білими квітами, що цвітуть навесні. Рослина досягає висоти від 21 до 30 см і відома своїми смачними плодами, що мають унікальний аромат і смак. Фейхоа є ідеальним вибором для кімнатного вирощування, адже при належному догляді може давати плоди. Догляд за цією рослиною включає яскраве, розсіяне світло та помірний полив.',
			conditionsСare:
				'Фейхоа Звичайний потребує яскравого, розсіяного світла, регулярного помірного поливу та родючого субстрату для оптимального росту і плодоношення.',
			soilType:
				'Фейхоа Звичайний потребує добре дренованого, родючого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для фейхоа становить від 15°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 6 годин освітлення на день.',
			humidityLevel:
				'Фейхоа полюбляє помірну вологість, тому регулярний полив та обприскування листя будуть корисними.',
			category_en: 'Exotic plants',
			name_en: 'Feijoa Common 21-30 cm',
			desc_en:
				'Feijoa Common is an ornamental houseplant with attractive green leaves and white flowers that bloom in spring. The plant reaches a height of 21 to 30 cm and is known for its delicious fruits, which have a unique aroma and taste. Feijoa is an ideal choice for indoor cultivation, because with proper care it can bear fruit. Care for this plant includes bright, diffused light and moderate watering.',
			conditionsСare_en:
				'Feijoa Common needs bright, diffused light, regular moderate watering and a fertile substrate for optimal growth and fruiting.',
			soilType_en:
				'Feijoa Common needs well-drained, fertile soil enriched with organic matter.',
			temperature_en:
				'The optimal temperature for feijoa is from 15°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 6 hours of light per day.',
			humidityLevel_en:
				'Feijoa likes moderate humidity, so regular watering and spraying the leaves will be useful.',
		},
		65: {
			category: 'Екзотичні рослини',
			id: 650,
			name: 'Розмарин',
			price: 1200,
			img: [
				'https://cactus.by/sites/default/files/products/img_9788.jpg',
				'https://i.pinimg.com/control/564x/05/45/e2/0545e28f9a6b91773b685ebd20f0cdd3.jpg',
				'https://i.pinimg.com/control/564x/a1/c8/46/a1c84625bd6ab3639aa3cf2e56617b2b.jpg',
			],
			height: 42,
			desc: "Розмарин - це ароматична кімнатна рослина висотою від 11 до 20 см, відома своїм яскравим смаком і ароматом, що робить його популярним у кулінарії. Рослина має вузьке зелене листя і може цвісти невеликими блакитними або фіолетовими квітами. Розмарин є чудовим доповненням до будь-якого інтер'єру, додаючи свіжість і природний вигляд. Догляд за розмарином простий: він потребує яскравого, сонячного світла і помірного поливу.",
			conditionsСare:
				'Розмарин потребує яскравого сонячного світла, помірного поливу та добре дренованого субстрату для забезпечення здорового росту.',
			soilType:
				'Розмарин потребує добре дренованого, легкого ґрунту, що містить піщані або гравійні компоненти.',
			temperature:
				'Оптимальна температура для розмарину становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 6 годин освітлення на день.',
			humidityLevel:
				'Розмарин не потребує високої вологості і краще росте в сухих умовах, тому полив слід здійснювати помірно.',
			status: 'Новинки',
			category_en: 'Exotic plants',
			name_en: 'Rosemary',
			desc_en:
				'Rosemary is an aromatic houseplant that grows 11 to 20 cm tall, known for its bright flavor and aroma, making it popular in cooking. The plant has narrow green leaves and can bloom with small blue or purple flowers. Rosemary is a great addition to any interior, adding freshness and a natural look. Rosemary care is simple: it needs bright, sunlight and moderate watering.',
			conditionsСare_en:
				'Rosemary needs bright sunlight, moderate watering and a well-drained substrate to ensure healthy growth.',
			soilType_en:
				'Rosemary needs well-drained, light soil containing sandy or gravelly components.',
			temperature_en:
				'The optimal temperature for rosemary is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'Plant prefers bright sunlight and needs at least 6 hours of light per day.',
			humidityLevel_en:
				'Rosemary does not need high humidity and grows better in dry conditions, so watering should be done moderately.',
			status_en: 'New',
		},
	},
	Florariums: {
		70: {
			category: 'Флораріуми',
			id: 700,
			name: 'Флораріум з орхідеєю',
			price: 3000,
			img: [
				'https://plantsroom.com.ua/wp-content/uploads/2024/06/img_6864-scaled.jpg',
				'https://i.pinimg.com/564x/6b/0d/7d/6b0d7d455936447ede1132bcca5fc76b.jpg',
				'https://i.pinimg.com/564x/3e/9f/1f/3e9f1ff87d5a3db55b5f12e715f0fff8.jpg',
			],
			height: 40,
			isFlowering: true,
			desc: "Флораріум з орхідеєю в куполі Красуня - це елегантна композиція, що об'єднує природу і сучасний дизайн. Заввишки 40 см, цей флораріум містить яскраву орхідею, що привертає увагу своїми розкішними квітами. Купольна форма створює оптимальні умови для росту рослини, захищаючи її від зовнішнього впливу. Це ідеальний вибір для декорування дому або офісу, додаючи нотку елегантності та стилю. Догляд за флораріумом полягає в забезпеченні яскравого, розсіяного світла та регулярному поливі.",
			conditionsСare:
				"Флораріум з орхідеєю потребує яскравого, розсіяного освітлення, помірного поливу та ретельного контролю вологості для підтримки здоров'я рослини.",
			soilType:
				'Флораріум з орхідеєю в куполі потребує спеціального субстрату для орхідей, який забезпечує хороший дренаж і повітропроникність.',
			temperature:
				'Оптимальна температура для орхідеї становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, тому рекомендується розміщувати флораріум на місці з хорошим освітленням.',
			humidityLevel:
				'Орхідея полюбляє високу вологість, тому регулярне обприскування листя та підтримання вологості повітря будуть корисними.',
			status: 'Топ продажів',
			category_en: 'Florariums',
			name_en: 'Florarium with orchid',
			desc_en:
				'Florarium with orchid in a dome Krasunya is an elegant composition that combines nature and modern design. At 40 cm high, this florarium contains a bright orchid that attracts attention with its luxurious flowers. The dome shape creates optimal conditions for the plant to grow, protecting it from external influences. It is an ideal choice for decorating a home or office, adding a touch of elegance and style. Caring for a florarium consists in providing bright, diffused light and regular watering.',
			conditionsСare_en:
				'Florarium with orchid needs bright, diffused lighting, moderate watering and careful humidity control to maintain the health of the plant.',
			soilType_en:
				'Florarium with orchid in a dome needs a special substrate for orchids that provides good drainage and air permeability.',
			temperature_en:
				'The optimum temperature for orchids is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, so it is recommended to place the florarium in a place with good lighting.',
			humidityLevel_en:
				'The orchid loves high humidity, so regular spraying of the leaves and maintaining air humidity will be useful.',
			status_en: 'Top seller',
		},
		71: {
			category: 'Флораріуми',
			id: 710,
			name: 'Флораріум з деревом Бонсаєм',
			price: 2500,
			img: [
				'https://cdn.27.ua/sc--media--prod/default/f3/32/dc/f332dcd4-bc3d-4779-8129-4b3dc4b13bb4.jpg',
				'https://i.pinimg.com/564x/08/5f/da/085fda036934e9a9d954c376049941d6.jpg',
				'https://i.pinimg.com/564x/3b/53/bf/3b53bf239a789732701455a922d59a27.jpg',
			],
			height: 18,
			desc: "Флораріум з деревом Бонсаєм Magic Gardens - це стильна і унікальна композиція розміром 25х12 см, яка чудово підійде для будь-якого інтер'єру. Це дерево Бонсаєм, вирощене в спеціальному флораріумі, додає нотку спокою та природної краси вашому простору. Бонсаї відомі своєю естетичною привабливістю та вимагають мінімального догляду, що робить їх ідеальним вибором для зайнятих людей. Догляд за флораріумом полягає в забезпеченні яскравого, розсіяного світла та помірного поливу.",
			conditionsСare:
				"Флораріум з деревом Бонсаєм потребує яскравого, розсіяного освітлення, помірного поливу та хорошого дренажу для підтримки здоров'я рослини.",
			soilType:
				'Флораріум з деревом Бонсаєм потребує добре дренованого ґрунту, збагаченого органічними речовинами, що забезпечує хорошу аерацію коренів.',
			temperature:
				'Оптимальна температура для бонсаю становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, тому краще розміщувати флораріум на місці з хорошим освітленням.',
			humidityLevel:
				'Бонсай полюбляє помірну вологість, тому регулярне обприскування листя та контроль за вологістю повітря будуть корисними.',
			category_en: 'Florariums',
			name_en: 'Florarium with Bonsai tree',
			desc_en:
				'The Magic Gardens Bonsai tree florarium is a stylish and unique composition measuring 25x12 cm, which will be perfect for any interior. This Bonsai tree, grown in a special florarium, adds a touch of tranquility and natural beauty to your space. Bonsai trees are known for their aesthetic appeal and require minimal care, which makes them an ideal choice for busy people. Florarium care consists of providing bright, diffused light and moderate watering.',
			conditionsСare_en:
				'The Bonsai tree florarium needs bright, diffused light, moderate watering and good drainage to maintain the health of the plant.',
			soilType_en:
				'The Bonsai tree florarium needs well-drained soil enriched with organic matter, which provides good aeration roots.',
			temperature_en:
				'The optimum temperature for bonsai is from 18°C ​​to 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, so it is better to place the florarium in a place with good lighting.',
			humidityLevel_en:
				'Bonsai likes moderate humidity, so regular spraying of the leaves and monitoring the humidity of the air will be useful.',
		},
		72: {
			category: 'Флораріуми',
			id: 720,
			name: 'Флораріум з сукулентами',
			price: 1800,
			img: [
				'https://i.pinimg.com/enabled_lo/564x/25/4f/d8/254fd864ebcfd1638d61755f6fa5632b.jpg',
				'https://i.pinimg.com/564x/8c/fa/11/8cfa11bb9e1697600fb3e60a28787ebb.jpg',
				'https://i.pinimg.com/564x/48/8f/57/488f57613988f3f6b7459724e15be443.jpg',
			],
			height: 20,
			isFlowering: false,
			desc: "Флораріум з сукулентами та імітацією водойми - це компактна композиція заввишки 10 см, що привносить елементи природи у ваш дім. Сукуленти, відомі своєю витривалістю та низькими вимогами до догляду, чудово поєднуються з імітацією водойми, створюючи стильний та заспокійливий вигляд. Ця рослина ідеально підходить для тих, хто хоче додати зелень до інтер'єру без зайвих турбот. Догляд за флораріумом передбачає яскраве, розсіяне світло та помірний полив.",
			conditionsСare:
				"Флораріум з сукулентами потребує яскравого, розсіяного освітлення, помірного поливу та дренажу для забезпечення здоров'я рослин.",
			soilType:
				'Флораріум з сукулентами потребує добре дренованого ґрунту, збагаченого піском або перлітом, щоб запобігти застою води.',
			temperature:
				'Оптимальна температура для сукулентів становить від 20°C до 30°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому сонячному світлу і потребує не менше 6 годин освітлення на день.',
			humidityLevel:
				'Сукуленти не потребують високої вологості і краще ростуть в сухих умовах, тому полив слід здійснювати помірно.',
			category_en: 'Florariums',
			name_en: 'Florarium with succulents',
			desc_en:
				'Florarium with succulents and imitation of a pond is a compact composition of 10 cm in height, which brings elements of nature into your home. Succulents, known for their endurance and low maintenance requirements, combine perfectly with imitation of a pond, creating a stylish and calming look. This plant is ideal for those who want to add greenery to the interior without unnecessary worries. Care for a florarium involves bright, diffused light and moderate watering.',
			conditionsСare_en:
				'Florarium with succulents needs bright, diffused light, moderate watering and drainage to ensure the health of the plants.',
			soilType_en:
				'Florarium with succulents needs well-drained soil, enriched with sand or perlite to prevent waterlogging.',
			temperature_en:
				'The optimum temperature for succulents is between 20°C and 30°C.',
			lightRequirement_en:
				'The plant prefers bright sunlight and needs at least 6 hours of light per day.',
			humidityLevel_en:
				'Succulents do not require high humidity and grow better in dry conditions, so watering should be done moderately.',
		},
		73: {
			category: 'Флораріуми',
			id: 730,
			name: 'Флораріум з орхідеєю',
			price: 3000,
			img: [
				'https://static.tildacdn.com/tild6536-3464-4666-b930-656235633832/17044151422131.jpg',
				'https://i.pinimg.com/564x/22/8e/9b/228e9b508e6d05184307a621d21286a7.jpg',
				'https://i.pinimg.com/564x/26/75/9d/26759dba8288ff32ace841b179da0340.jpg',
			],
			height: 50,
			isFlowering: true,
			desc: 'Флораріум з орхідеєю в куполі Красуня - це елегантна композиція, що поєднує в собі красу орхідеї та сучасний дизайн. Висотою 40 см, цей флораріум містить яскраву орхідею, яка привертає увагу своїми розкішними квітами. Купольна форма забезпечує оптимальні умови для росту рослини, захищаючи її від зовнішнього впливу. Це ідеальний вибір для декорування вашого дому або офісу, додаючи нотку елегантності та стилю. Догляд за флораріумом включає яскраве, розсіяне світло та помірний полив.',
			conditionsСare:
				"Флораріум з орхідеєю потребує яскравого, розсіяного освітлення, помірного поливу та ретельного контролю вологості для підтримки здоров'я рослини.",
			soilType:
				'Флораріум з орхідеєю в куполі потребує спеціального субстрату для орхідей, який забезпечує хороший дренаж і повітропроникність.',
			temperature:
				'Оптимальна температура для орхідеї становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, тому рекомендується розміщувати флораріум на місці з хорошим освітленням.',
			humidityLevel:
				'Орхідея полюбляє високу вологість, тому регулярне обприскування листя та підтримання вологості повітря будуть корисними.',
			status: 'Топ продажів',
			category_en: 'Florariums',
			name_en: 'Florarium with orchid',
			desc_en:
				'Florarium with orchid in a dome Krasunya is an elegant composition that combines the beauty of an orchid and modern design. At 40 cm high, this florarium contains a bright orchid that attracts attention with its luxurious flowers. The dome shape provides optimal conditions for the plant to grow, protecting it from external influences. This is an ideal choice for decorating your home or office, adding a touch of elegance and style. Florarium care includes bright, diffused light and moderate watering.',
			conditionsСare_en:
				'An orchid florarium requires bright, diffused light, moderate watering and careful humidity control to maintain the health of the plant.',
			soilType_en:
				'An orchid florarium in a dome requires a special orchid substrate that provides good drainage and air permeability.',
			temperature_en:
				'The optimum temperature for an orchid is from 20°C to 25°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, so it is recommended to place the florarium in a place with good lighting.',
			humidityLevel_en:
				'Orchids love high humidity, so regular spraying of the leaves and maintaining air humidity will be useful.',
			status_en: 'Top seller',
		},
		74: {
			category: 'Флораріуми',
			id: 740,
			name: 'Міні-флораріум Крапля',
			price: 800,
			img: [
				'https://shop-cdn1-2.vigbo.tech/shops/32378/products/22107493/images/2-d9b974d2bfe689c36e92c076e74ecc93.jpeg',
				'https://i.pinimg.com/564x/f4/ea/a8/f4eaa8c82ae65c9d734de531dbddda63.jpg',
				'https://i.pinimg.com/564x/38/91/7b/38917ba311b6ee837bb6d410d8855e63.jpg',
			],
			height: 16,
			isFlowering: false,
			desc: 'Міні-флораріум Крапля - це компактна і стильна композиція розміром 9х9 см, що ідеально підходить для прикрашання вашого простору. Цей міні-флораріум містить різноманітні сукуленти або маленькі рослини, які потребують мінімального догляду. Його унікальна форма нагадує краплю, додаючи нотку елегантності. Це ідеальний вибір для столу або підвіконня, де рослини можуть отримувати достатньо світла. Догляд за міні-флораріумом передбачає яскраве, розсіяне світло та помірний полив.',
			conditionsСare:
				'Міні-флораріум Крапля потребує яскравого, розсіяного освітлення, помірного поливу та дренажу для здорового росту рослин.',
			soilType:
				'Міні-флораріум Крапля потребує добре дренованого ґрунту, збагаченого перлітом або піском для забезпечення аерації коренів.',
			temperature:
				'Оптимальна температура для рослин у флораріумі становить від 18°C до 24°C.',
			lightRequirement:
				'Рослини віддають перевагу яскравому, непрямому світлу, тому рекомендується розміщувати флораріум на місці з хорошим освітленням.',
			humidityLevel:
				'Міні-флораріум потребує помірної вологості, тому регулярне обприскування листя та контроль за вологістю повітря будуть корисними.',
			category_en: 'Florariums',
			name_en: 'Mini Florarium Drop',
			desc_en:
				'Mini Florarium Drop is a compact and stylish arrangement measuring 9x9 cm, ideal for decorating your space. This mini florarium contains a variety of succulents or small plants that require minimal care. Its unique shape resembles a drop, adding a touch of elegance. It is an ideal choice for a table or windowsill where the plants can receive enough light. Mini florarium care involves bright, diffused light and moderate watering.',
			conditionsСare_en:
				'Mini florarium Kraplya needs bright, diffused light, moderate watering and drainage for healthy plant growth.',
			soilType_en:
				'Mini florarium Kraplya needs well-drained soil enriched with perlite or sand to ensure aeration of the roots.',
			temperature_en:
				'The optimum temperature for plants in a florarium is from 18°C ​​to 24°C.',
			lightRequirement_en:
				'Plants prefer bright, indirect light, so it is recommended to place the florarium in a place with good lighting.',
			humidityLevel_en:
				'Mini florarium needs moderate humidity, so regular spraying of the leaves and monitoring of air humidity will be useful.',
		},
		75: {
			category: 'Флораріуми',
			id: 38,
			name: 'Флораріум з орхідеєю',
			price: 3500,
			img: [
				'https://static.tildacdn.com/tild3539-3134-4639-b936-316636646131/4H1A7585-min.jpg',
				'https://i.pinimg.com/564x/31/fa/93/31fa93cd3789cc06c7ce05aa14c60489.jpg',
				'https://i.pinimg.com/564x/c8/ec/f0/c8ecf0f34f8e91d807aa6eb167621a58.jpg',
			],
			height: 55,
			isFlowering: true,
			desc: "Флораріум з орхідеєю - це розкішна композиція, яка стане яскравим акцентом у вашому інтер'єрі. Висотою 52 см, цей флораріум містить елегантну орхідею, яка привертає увагу своїми яскравими квітами та витонченими формами. Простора купольна конструкція забезпечує оптимальні умови для росту рослини, створюючи ідеальний мікроклімат. Це відмінний вибір для тих, хто шукає стильний елемент декору для дому чи офісу. Догляд за флораріумом включає яскраве, розсіяне світло та регулярний помірний полив.",
			conditionsСare:
				"Флораріум з орхідеєю потребує яскравого, розсіяного освітлення, помірного поливу та контролю вологості для підтримки здоров'я рослини.",
			soilType:
				'Флораріум з орхідеєю потребує спеціального субстрату для орхідей, що забезпечує хороший дренаж і повітропроникність.',
			temperature:
				'Оптимальна температура для орхідеї становить від 20°C до 25°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, тому флораріум слід розміщувати на місці з добрим освітленням.',
			humidityLevel:
				'Орхідея полюбляє високу вологість, тому регулярне обприскування листя та підтримання вологості повітря буде корисним.',
			category_en: 'Florariums',
			name_en: 'Orchid florarium',
			desc_en:
				'Orchid florarium is a luxurious composition that will become a bright accent in your interior. At 52 cm high, this florarium contains an elegant orchid that attracts attention with its bright flowers and graceful shapes. The spacious dome design provides optimal conditions for the plant to grow, creating the perfect microclimate. This is a great choice for those looking for a stylish element of decor for their home or office. Florarium care includes bright, diffused light and regular moderate watering.',
			conditionsСare_en:
				'Orchid florarium needs bright, diffused light, moderate watering and humidity control to maintain the health of the plant.',
			soilType_en:
				'Orchid florarium needs a special substrate for orchids that provides good drainage and air permeability.',
			temperature_en:
				'The optimum temperature for orchids is between 20°C and 25°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, so the florarium should be placed in a place with good lighting.',
			humidityLevel_en:
				'The orchid likes high humidity, so regularly spraying the leaves and maintaining air humidity will be useful.',
		},
	},
	Bonsai: {
		35: {
			category: 'Бонсай',
			id: 350,
			name: 'Бонсай на камені',
			price: 3200,
			img: [
				'https://magicgardens.com.ua/wp-content/uploads/2024/06/IMG_6246.jpg',
				'https://i.pinimg.com/736x/e7/22/b5/e722b5ea1844732c9512e9d085dfa2ca.jpg',
				'https://i.pinimg.com/564x/82/81/17/8281171126299aeb6f57b09a9a9c28a1.jpg',
			],
			height: 50,
			isFlowering: false,
			desc: 'Бонсай на камені — це унікальна композиція зі стабілізованих рослин, яка поєднує в собі природну красу і сучасні дизайнерські рішення. Стабілізовані рослини не потребують поливу і догляду, зберігаючи свій вигляд протягом тривалого часу. Цей бонсай — це стильна декоративна прикраса для дому чи офісу, яка створює атмосферу спокою та гармонії.',
			conditionsСare:
				'Оскільки рослини стабілізовані, вони не потребують поливу, освітлення або добрив. Їх слід тримати подалі від прямих сонячних променів і не піддавати впливу високої вологості. Ідеальна температура для збереження стабілізованих рослин — кімнатна, від +18 до +24 °C. Ця композиція є повністю автономною і не вимагає активного догляду.',
			soilType:
				'Бонсай на камені Magic Gardens потребує спеціального субстрату для бонсаїв, який забезпечує хорошу аерацію коренів і дренаж.',
			temperature:
				'Оптимальна температура для бонсаю становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, тому рекомендується розміщувати бонсай на місці з хорошим освітленням.',
			humidityLevel:
				'Бонсай з стабілізованими рослинами не потребує високої вологості, але регулярне обприскування може покращити загальний стан рослин.',
			status: 'Топ продажів',
			category_en: 'Bonsai',
			name_en: 'Bonsai on stone',
			desc_en:
				'Bonsai on stone is a unique composition of stabilized plants, which combines natural beauty and modern design solutions. Stabilized plants do not require watering and care, maintaining their appearance for a long time. This bonsai is a stylish decorative decoration for your home or office, creating an atmosphere of peace and harmony.',
			conditionsСare_en:
				'Since the plants are stabilized, they do not require watering, lighting or fertilizers. They should be kept away from direct sunlight and not exposed to high humidity. The ideal temperature for storing stabilized plants is room temperature, from +18 to +24 °C. This composition is completely autonomous and does not require active care.',
			soilType_en:
				'The Magic Gardens rock bonsai requires a special bonsai substrate that provides good root aeration and drainage.',
			temperature_en:
				'The optimal temperature for bonsai is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, so it is recommended to place the bonsai in a place with good lighting.',
			humidityLevel_en:
				'Bonsai with stabilized plants do not require high humidity, but regular spraying can improve the overall condition of the plants.',
			status_en: 'Top seller',
		},

		36: {
			category: 'Бонсай',
			id: 360,
			name: 'Бонсай над водоспадом',
			price: 3500,
			img: [
				'https://cdn.27.ua/sc--media--prod/default/2b/a4/25/2ba425d4-43d0-4df0-952c-1bf16dd2c7d0.jpg',
				'https://i.pinimg.com/564x/56/83/08/568308980f7cf06465e8e0dfe2a1ff32.jpg',
				'https://i.pinimg.com/enabled_lo/564x/ce/cd/0d/cecd0d0e8ded3eef7e88e17907d4dd6d.jpg',
			],
			height: 60,
			isFlowering: false,
			desc: 'Бонсай над водоспадом — це вражаюча композиція, яка поєднує в собі красу стабілізованих рослин і елементи водоспаду. Ця декоративна рослина створює атмосферу спокою та гармонії, роблячи будь-який простір більш затишним. Завдяки стабілізованим рослинам, бонсай зберігає свій природний вигляд без потреби в постійному догляді.',
			conditionsСare:
				'Стабілізовані рослини не потребують поливу, світла або добрив. Їх слід зберігати в приміщенні з кімнатною температурою, уникаючи прямих сонячних променів і високої вологості. Оптимальна температура для збереження композиції — від +18 до +24 °C. Це робить бонсай легким у догляді, що є чудовим варіантом для будь-якого інтер’єру.',
			soilType:
				'Бонсай над водоспадом Magic Garden потребує легкого, добре дренованого ґрунту, що дозволяє воді легко проходити через корені.',
			temperature:
				'Оптимальна температура для бонсаю становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, тому рекомендується розміщувати бонсай на місці з хорошим освітленням.',
			humidityLevel:
				'Бонсай полюбляє помірну вологість, тому регулярне обприскування листя та контроль за вологістю повітря будуть корисними.',
			status: 'Розпродаж',
			category_en: 'Bonsai',
			name_en: 'Bonsai over a waterfall',
			desc_en:
				'Bonsai over a waterfall is a spectacular composition that combines the beauty of stabilized plants and elements of a waterfall. This decorative plant creates an atmosphere of peace and harmony, making any space more comfortable. Thanks to stabilized plants, bonsai retains its natural appearance without the need for constant care.',
			conditionsСare_en:
				'Stabilized plants do not require watering, light or fertilizers. They should be stored indoors at room temperature, avoiding direct sunlight and high humidity. The optimal temperature for storing the composition is from +18 to +24 °C. This makes bonsai easy to care for, making it a great choice for any interior.',
			soilType_en:
				'The Magic Garden Waterfall Bonsai requires light, well-drained soil that allows water to easily pass through the roots.',
			temperature_en:
				'The optimum temperature for bonsai is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, so it is recommended to place the bonsai in a well-lit area.',
			humidityLevel_en:
				'Bonsai likes moderate humidity, so regular spraying of the leaves and monitoring the humidity of the air will be beneficial.',
			status_en: 'Sale',
		},
		37: {
			category: 'Бонсай',
			id: 370,
			name: 'Фікус Бонсай Мікрокарпа',
			price: 1500,
			img: [
				'https://i.pinimg.com/564x/9d/dc/a1/9ddca1efd842f33cdeca6346b158404b.jpg',
				'https://i.pinimg.com/enabled_lo/564x/0b/f9/fb/0bf9fb168c647e8637f66b0ad99348a4.jpg',
				'https://i.pinimg.com/enabled_lo/564x/1c/36/9a/1c369a6a839b733d9d1f4bcf75021bb4.jpg',
			],
			height: 30,
			isFlowering: false,
			desc: 'Фікус Бонсай Мікрокарпа — це елегантна і стильна кімнатна рослина, яка славиться своїми маленькими, глянцевими листочками і характерною формою стовбура. Ця рослина ідеально підходить для створення бонсай-композицій завдяки своїй здатності легко формуватися і піддаватися обрізанню. Фікус Мікрокарпа додасть витонченості та природної краси до будь-якого інтер’єру.',
			conditionsСare:
				'Фікус Мікрокарпа потребує яскравого, розсіяного світла, але може витримувати і часткову тінь. Поливати рослину слід помірно, дозволяючи верхньому шару ґрунту підсохнути між поливами. Оптимальна температура для росту — +18...+24 °C. Взимку слід уникати холодних протягів і забезпечувати рослині достатню вологість. Регулярне підживлення органічними добривами сприяє здоровому росту та розвитку рослини.',
			soilType:
				'Фікус Бонсай Мікрокарпа потребує добре дренованого, легкого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для фікуса становить від 20°C до 26°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, хоча може витримувати і легке затінення.',
			humidityLevel:
				'Фікус Бонсай Мікрокарпа полюбляє підвищену вологість, тому регулярне обприскування листя буде корисним.',
			status: 'Новинки',
			category_en: 'Bonsai',
			name_en: 'Ficus Bonsai Microcarpa',
			desc_en:
				'Ficus Bonsai Microcarpa is an elegant and stylish houseplant, famous for its small, glossy leaves and characteristic trunk shape. This plant is ideal for creating bonsai compositions due to its ability to be easily shaped and pruned. Ficus Microcarpa will add sophistication and natural beauty to any interior.',
			conditionsСare_en:
				'Ficus Microcarpa needs bright, diffused light, but can also withstand partial shade. The plant should be watered moderately, allowing the top layer of soil to dry out between waterings. The optimal temperature for growth is +18...+24 °C. In winter, cold drafts should be avoided and the plant should be provided with sufficient humidity. Regular fertilization with organic fertilizers promotes healthy growth and development of the plant.',
			soilType_en:
				'Ficus Bonsai Microcarpa needs well-drained, light soil enriched with organic matter.',
			temperature_en: 'The optimum temperature for ficus is from 20°C to 26°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, although it can withstand light shading.',
			humidityLevel_en:
				'Ficus Bonsai Microcarpa likes high humidity, so regular spraying of the leaves will be useful.',
			status_en: 'New',
		},
		38: {
			category: 'Бонсай',
			id: 380,
			name: 'Бонсай Magic Gardens',
			price: 1800,
			img: [
				'https://magicgardens.com.ua/wp-content/uploads/2023/04/IMG_8729.jpg',
				'https://i.pinimg.com/736x/ca/44/0c/ca440c1515e839aa09a8dcce408570b1.jpg',
				'https://i.pinimg.com/564x/57/38/ef/5738ef26a8cb896f368c3df8c5afaa40.jpg',
			],
			height: 20,
			desc: 'Бонсай Magic Gardens — це стильна і елегантна композиція, яка додасть вишуканості будь-якому інтер’єру. Завдяки своїй компактній формі і натуральному вигляду, цей бонсай стане чудовим акцентом на столі або підвіконні. Рослина вимагає мінімального догляду, що робить її ідеальним вибором для зайнятих людей.',
			conditionsСare:
				'Цей бонсай не потребує поливу, оскільки виготовлений з стабілізованих рослин. Рекомендується тримати його в приміщенні з кімнатною температурою, уникати прямих сонячних променів та високої вологості. Оптимальна температура для збереження композиції — від +18 до +24 °C. Це робить бонсай легким у догляді та ідеальним вибором для будь-якого простору.',
			soilType:
				'Бонсай Magic Gardens потребує легкого, добре дренованого ґрунту, збагаченого органічними речовинами.',
			temperature:
				'Оптимальна температура для бонсаю становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, тому рекомендується розміщувати бонсай на місці з хорошим освітленням.',
			humidityLevel:
				'Бонсай полюбляє помірну вологість, тому регулярне обприскування листя та контроль за вологістю повітря будуть корисними.',
			category_en: 'Bonsai',
			name_en: 'Bonsai Magic Gardens',
			desc_en:
				'Bonsai Magic Gardens is a stylish and elegant composition that will add sophistication to any interior. Thanks to its compact shape and natural appearance, this bonsai will be a great accent on a table or windowsill. The plant requires minimal care, which makes it an ideal choice for busy people.',
			conditionsСare_en:
				'This bonsai does not require watering, as it is made from stabilized plants. It is recommended to keep it in a room with room temperature, avoiding direct sunlight and high humidity. The optimal temperature for storing the composition is from +18 to +24 °C. This makes bonsai easy to care for and an ideal choice for any space.',
			soilType_en:
				'Magic Gardens bonsai requires light, well-drained soil rich in organic matter.',
			temperature_en:
				'The optimum temperature for bonsai is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, so it is recommended to place the bonsai in a well-lit area.',
			humidityLevel_en:
				'Bonsai likes moderate humidity, so regular spraying of the leaves and monitoring the humidity of the air will be useful.',
		},
		39: {
			category: 'Бонсай',
			id: 390,
			name: 'Мосаріум Бонсай',
			price: 2500,
			img: [
				'https://cdn.27.ua/sc--media--prod/default/85/d0/cc/85d0cc35-b654-405e-b2d8-3afc86ff338a.jpg',
				'https://i.pinimg.com/enabled_lo/564x/25/92/3d/25923d10de9e56fe4563d7d5ab392393.jpg',
				'https://i.pinimg.com/enabled_lo/564x/7b/47/68/7b476896be72ad57f3d600630b9253a4.jpg',
			],
			height: 25,
			isFlowering: false,
			desc: 'Мосаріум Бонсай — це вражаюча композиція, яка поєднує стабілізовані рослини в елегантному дизайні. Ця рослина створює затишну атмосферу в будь-якому інтер’єрі, надаючи йому нотку природності та естетики. Завдяки стабілізованим рослинам, бонсай зберігає свій вигляд без потреби в регулярному догляді.',
			conditionsСare:
				'Стабілізовані рослини не потребують поливу, світла або добрив. Рекомендується тримати мосаріум в кімнатній температурі, уникаючи прямих сонячних променів і високої вологості. Ідеальна температура для збереження композиції — від +18 до +24 °C. Це робить мосаріум легким у догляді та ідеальним для будь-якого простору.',
			soilType:
				'Мосаріум Бонсай зі стабілізованими рослинами Сад імператора потребує спеціального субстрату для бонсаїв, який забезпечує хороший дренаж і аерацію коренів.',
			temperature:
				'Оптимальна температура для бонсаю становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина віддає перевагу яскравому, непрямому світлу, тому рекомендується розміщувати мосаріум на місці з хорошим освітленням.',
			humidityLevel:
				'Бонсай зі стабілізованими рослинами не потребує високої вологості, але регулярне обприскування може покращити загальний стан рослин.',
			category_en: 'Bonsai',
			name_en: 'Mosarium Bonsai',
			desc_en:
				'Mosarium Bonsai is a striking composition that combines stabilized plants in an elegant design. This plant creates a cozy atmosphere in any interior, giving it a touch of naturalness and aesthetics. Thanks to stabilized plants, bonsai retains its appearance without the need for regular care.',
			conditionsСare_en:
				'Stabilized plants do not require watering, light or fertilizers. It is recommended to keep the mosarium at room temperature, avoiding direct sunlight and high humidity. The ideal temperature for storing the composition is from +18 to +24 °C. This makes the Mosarium easy to maintain and ideal for any space.',
			soilType_en:
				"The Mosarium Bonsai with Stabilized Plants Emperor's Garden requires a special substrate for bonsai, which provides good drainage and aeration of the roots.",
			temperature_en:
				'The optimal temperature for bonsai is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant prefers bright, indirect light, so it is recommended to place the Mosarium in a place with good lighting.',
			humidityLevel_en:
				'Bonsai with stabilized plants does not require high humidity, but regular spraying can improve the overall condition of the plants.',
		},
		40: {
			category: 'Бонсай',
			id: 400,
			name: 'Бонсай в банці Magic',
			price: 2000,
			img: [
				'https://cdn.27.ua/sc--media--prod/default/0d/aa/52/0daa5283-180e-4106-a601-7cba2bc93707.jpg',
				'https://i.pinimg.com/enabled_lo/564x/94/64/ec/9464eca9696035b231ef6bd943cb01ae.jpg',
				'https://i.pinimg.com/564x/c3/72/b0/c372b06c1687c188b74a62562a143a2d.jpg',
			],
			height: 12,
			isFlowering: false,
			desc: 'Бонсай в банці Magic — це унікальна декоративна композиція, яка поєднує в собі елегантність бонсая та стиль баночки. Ця рослина стане чудовим акцентом у вашому інтер’єрі, додаючи нотку природності та затишку. Завдяки стабілізованим рослинам, бонсай зберігає свій вигляд без потреби в регулярному догляді.',
			conditionsСare:
				'Стабілізовані рослини не потребують поливу, світла або добрив. Рекомендується розміщувати бонсай у кімнаті з нормальною температурою, уникаючи прямих сонячних променів і високої вологості. Ідеальна температура для збереження композиції — від +18 до +24 °C. Це робить бонсай легким у догляді та ідеальним вибором для будь-якого простору.',
			soilType:
				'Бонсай в банці Magic Gardens потребує добре дренованого субстрату для бонсаїв, що забезпечує кореням достатньо повітря.',
			temperature:
				'Оптимальна температура для бонсаю становить від 18°C до 24°C.',
			lightRequirement:
				'Рослина потребує яскравого, непрямого світла, тому розташування в місці з гарним освітленням буде оптимальним.',
			humidityLevel:
				'Бонсай в банці потребує помірної вологості, тому регулярне обприскування листя та контроль за вологістю повітря допоможуть підтримати здоровий стан рослини.',
			status: 'Топ продажів',
			category_en: 'Bonsai',
			name_en: 'Bonsai in a Magic jar',
			desc_en:
				'Bonsai in a Magic jar is a unique decorative composition that combines the elegance of a bonsai and the style of a jar. This plant will be a wonderful accent in your interior, adding a touch of naturalness and comfort. Thanks to stabilized plants, bonsai retains its appearance without the need for regular care.',
			conditionsСare_en:
				'Stabilized plants do not require watering, light or fertilizers. It is recommended to place bonsai in a room with normal temperature, avoiding direct sunlight and high humidity. The ideal temperature for storing the composition is from +18 to +24 °C. This makes bonsai easy to care for and an ideal choice for any space.',
			soilType_en:
				'Magic Gardens potted bonsai requires a well-drained bonsai substrate that provides the roots with enough air.',
			temperature_en:
				'The optimum temperature for bonsai is between 18°C ​​and 24°C.',
			lightRequirement_en:
				'The plant requires bright, indirect light, so a location with good lighting will be optimal.',
			humidityLevel_en:
				"Potted bonsai requires moderate humidity, so regular spraying of the leaves and monitoring the humidity of the air will help maintain the plant's healthy condition.",
			status_en: 'Top seller',
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

// Обробник для отримання списку рослин за категорією
app.get('/plants/:category', (req, res) => {
	const category = req.params.category;
	const categoryPlants = plants[category];

	if (categoryPlants) {
		res.json(categoryPlants);
	} else {
		res.status(404).json({ message: 'Category not found' });
	}
});

app.get('/plants/id/:id', (req, res) => {
	const id = parseInt(req.params.id); // Перетворюємо ID на число
	let foundPlant = null;

	// Шукаємо по всіх категоріях
	for (const category in plants) {
		const categoryPlants = plants[category]; // Отримуємо рослини в категорії
		// Шукаємо рослину з відповідним ID
		for (const plantId in categoryPlants) {
			if (categoryPlants[plantId].id === id) {
				foundPlant = categoryPlants[plantId]; // Зберігаємо знайдену рослину
				break; // Виходимо з внутрішнього циклу
			}
		}
		if (foundPlant) break; // Виходимо з зовнішнього циклу, якщо рослина знайдена
	}

	if (foundPlant) {
		res.json(foundPlant); // Повертаємо знайдену рослину у форматі JSON
	} else {
		res.status(404).json({ message: 'Plant not found' }); // Повертаємо помилку 404, якщо не знайшли рослину
	}
});

// Обробник для отримання всіх категорій
app.get('/plants/categories', (req, res) => {
	console.log('GET /plants/categories was called');
	const categories = Object.keys(plants);
	res.json(categories);
});
// Запуск сервера
app.listen(process.env.PORT || 3000, () => {
	console.log('Сервер працює');
});
