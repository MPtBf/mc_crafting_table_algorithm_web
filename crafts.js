
import {items, craftingRecipes} from './minecraftData.js'



// Функция для нормализации матрицы крафта (удаление пустых строк и столбцов)
function normalizePattern(pattern) {
    // Создаем глубокую копию
    let result = JSON.parse(JSON.stringify(pattern));

    // Удаляем пустые строки сверху
    while (result.length > 0 && result[0].every(cell => cell === null)) {
        result.shift();
    }

    // Удаляем пустые строки снизу
    while (result.length > 0 && result[result.length - 1].every(cell => cell === null)) {
        result.pop();
    }

    // Удаляем пустые столбцы слева
    if (result.length > 0) {
        while (result[0].length > 0 && result.every(row => row[0] === null)) {
            result.forEach(row => row.shift());
        }
    }

    // Удаляем пустые столбцы справа
    if (result.length > 0) {
        while (result[0].length > 0 && result.every(row => row[row.length - 1] === null)) {
            result.forEach(row => row.pop());
        }
    }

    return result;
}

// Функция для проверки совпадения паттернов
function patternsMatch(craftingGrid, recipePattern, shapeless = false) {
    if (shapeless) {
        // Для бесформенного крафта просто сравниваем наборы предметов
        const gridItems = craftingGrid.flat().filter(item => item !== null);
        const recipeItems = recipePattern.flat().filter(item => item !== null);

        if (gridItems.length !== recipeItems.length) return false;

        // Создаем копии для модификации
        const gridCopy = [...gridItems].sort();
        const recipeCopy = [...recipeItems].sort();

        return gridCopy.every((item, index) => item === recipeCopy[index]);
    }

    // Для форменного крафта проверяем точное расположение
    const normalizedRecipe = normalizePattern(JSON.parse(JSON.stringify(recipePattern)));
    const gridHeight = craftingGrid.length;
    const gridWidth = craftingGrid[0].length;
    const recipeHeight = normalizedRecipe.length;
    const recipeWidth = normalizedRecipe[0].length;

    // Проверяем все возможные позиции размещения паттерна в сетке
    for (let startRow = 0; startRow <= gridHeight - recipeHeight; startRow++) {
        for (let startCol = 0; startCol <= gridWidth - recipeWidth; startCol++) {
            // Проверяем основное положение
            let match = true;
            for (let i = 0; i < recipeHeight && match; i++) {
                for (let j = 0; j < recipeWidth && match; j++) {
                    if (normalizedRecipe[i][j] !== craftingGrid[startRow + i][startCol + j]) {
                        match = false;
                    }
                }
            }

            // Если паттерн совпал, проверяем что все остальные ячейки пусты
            if (match) {
                let allOtherCellsEmpty = true;

                // Проверяем всю сетку 3x3
                for (let i = 0; i < gridHeight && allOtherCellsEmpty; i++) {
                    for (let j = 0; j < gridWidth && allOtherCellsEmpty; j++) {
                        // Если ячейка вне области паттерна и не пуста
                        if (i < startRow || i >= startRow + recipeHeight ||
                            j < startCol || j >= startCol + recipeWidth) {
                            if (craftingGrid[i][j] !== null) {
                                allOtherCellsEmpty = false;
                            }
                        }
                    }
                }

                if (allOtherCellsEmpty) return true;
            }

            // Проверяем отражение по вертикали если разрешено
            if (recipeWidth > 1) {
                match = true;
                for (let i = 0; i < recipeHeight && match; i++) {
                    for (let j = 0; j < recipeWidth && match; j++) {
                        const mirroredJ = recipeWidth - 1 - j;
                        if (normalizedRecipe[i][mirroredJ] !== craftingGrid[startRow + i][startCol + j]) {
                            match = false;
                        }
                    }
                }

                // Также проверяем что все остальные ячейки пусты
                if (match) {
                    let allOtherCellsEmpty = true;

                    for (let i = 0; i < gridHeight && allOtherCellsEmpty; i++) {
                        for (let j = 0; j < gridWidth && allOtherCellsEmpty; j++) {
                            if (i < startRow || i >= startRow + recipeHeight ||
                                j < startCol || j >= startCol + recipeWidth) {
                                if (craftingGrid[i][j] !== null) {
                                    allOtherCellsEmpty = false;
                                }
                            }
                        }
                    }

                    if (allOtherCellsEmpty) return true;
                }
            }
        }
    }

    return false;
}

function parsePattern(pattern, keys) {
    let parsedPattern = []
    pattern.forEach((row, i) => {
        parsedPattern.push([]);
        for (let key of row){
            let item = null
            if (key !== ' ') {
                item = keys[key].item
            }
            parsedPattern[i].push(item);
        }
    })
    return parsedPattern;
}

// Основная функция определения результата крафта
export function getCraftingResult(craftingGrid) {
    // Проверяем все рецепты
    for (const recipe of craftingRecipes) {
        if (patternsMatch(craftingGrid, parsePattern(recipe.pattern, recipe.key), recipe.type === 'crafting_shapeless')) {

            // console.log(`result is ${recipe.result} for crafting grid:`)
            // console.log(craftingGrid)
            return recipe.result.item
        }
    }

    // console.log(`result is null for crafting grid:`)
    // console.log(craftingGrid)
    return null; // Если рецепт не найден
}

// // Примеры использования:
//
// // Крафт деревянного меча
// const swordCraft = [
//     ['oak_planks', null, null],
//     ['oak_planks', null, null],
//     [null, 'stick', null]
// ];
// console.log('Деревянный меч:', getCraftingResult(swordCraft));
//
// // Крафт в другом положении (зеркально)
// const swordCraftMirrored = [
//     [null, null, 'oak_planks'],
//     [null, null, 'oak_planks'],
//     [null, 'stick', null]
// ];
// console.log('Деревянный меч (зеркально):', getCraftingResult(swordCraftMirrored));
//
// // Крафт маринованного паучьего глаза (бесформенный)
// const spiderEyeCraft = [
//     ['brown_mushroom', 'spider_eye', null],
//     [null, null, null],
//     [null, 'sugar', null]
// ];
// console.log('Маринованный паучий глаз:', getCraftingResult(spiderEyeCraft));
//
// // Крафт железного топора (с отражением)
// const axeCraft = [
//     [null, 'iron', 'iron'],
//     [null, 'iron', 'stick'],
//     [null, null, 'stick']
// ];
// console.log('Железный топор:', getCraftingResult(axeCraft));
//
// // Несуществующий крафт
// const invalidCraft = [
//     ['stone', 'stone', 'stone'],
//     ['stone', null, 'stone'],
//     ['stone', 'stone', 'stone']
// ];
// console.log('Несуществующий крафт:', getCraftingResult(invalidCraft));








