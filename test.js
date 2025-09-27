





const fs = require('fs').promises; // Асинхронные операции с файлами
const path = require('path');      // Работа с путями

/**
 * Функция для чтения всех JSON-файлов из папки и преобразования их в массив объектов.
 *
 * @param {string} folderPath - Путь к папке с рецептами.
 * @returns {Promise<Array<Object>>} Массив объектов из прочитанных JSON-файлов.
 */
async function parseJsonFiles(folderPath) {
    // Получить список всех файлов в папке
    const files = await fs.readdir(folderPath);

    // Фильтрация только JSON-файлов
    const jsonFiles = files.filter(file => path.extname(file) === '.json');

    // Чтение и парсинг каждого JSON-файла
    const results = await Promise.all(jsonFiles.map(async file => {
        const fullPath = path.join(folderPath, file);
        const rawData = await fs.readFile(fullPath, 'utf8');
        return JSON.parse(rawData);
    }));

    return results;
}

// Пример использования
parseJsonFiles('./minecraft_data/recipes')
    .then(recipesArray => {
        recipesArray.forEach(r => {
            console.dir(r, {depth: null})
            console.log(',')
        })
    })
    .catch(error => {
        console.error('Ошибка при чтении файлов:', error);
    });


