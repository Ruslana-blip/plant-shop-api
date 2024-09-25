const express = require('express');
const cors = require('cors'); // Імпортуємо cors
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Додаємо middleware для CORS
app.use(express.json());

const plants = {
	// ... ваші дані рослин
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

// Обробник для отримання окремої рослини за ID
app.get('/plants/:category/:id', (req, res) => {
	const category = req.params.category;
	const id = req.params.id;
	const plant = plants[category] ? plants[category][id] : null;

	if (plant) {
		res.json(plant);
	} else {
		res.status(404).json({ message: 'Plant not found' });
	}
});

// Запуск сервера
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
