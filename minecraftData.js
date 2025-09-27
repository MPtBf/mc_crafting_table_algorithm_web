export const craftingRecipes = [
    {
        type: 'crafting_shaped',
        group: 'boat',
        pattern: ['# #', '###'],
        key: {'#': {item: 'minecraft:planks', data: 4}},
        result: {item: 'minecraft:acacia_boat'}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_door',
        pattern: ['##', '##', '##'],
        key: {'#': {item: 'minecraft:planks', data: 4}},
        result: {item: 'minecraft:acacia_door', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence',
        pattern: ['W#W', 'W#W'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 4}
        },
        result: {item: 'minecraft:acacia_fence', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence_gate',
        pattern: ['#W#', '#W#'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 4}
        },
        result: {item: 'minecraft:acacia_fence_gate'}
    },
    {
        type: 'crafting_shaped',
        group: 'planks',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:log2', data: 0}},
        result: {item: 'minecraft:planks', data: 4, count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_stairs',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:planks', data: 4}},
        result: {item: 'minecraft:acacia_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_slab',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:planks', data: 4}},
        result: {item: 'minecraft:wooden_slab', data: 4, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XSX', 'X#X', 'XSX'],
        key: {
            '#': {item: 'minecraft:redstone_torch'},
            S: {item: 'minecraft:stick'},
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:activator_rail', count: 6}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:stone', data: 3},
            {item: 'minecraft:cobblestone'}
        ],
        result: {item: 'minecraft:stone', data: 5, count: 2}
    },
    {
        type: 'crafting_shaped',
        pattern: ['III', ' i ', 'iii'],
        key: {
            I: {item: 'minecraft:iron_block'},
            i: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:anvil', data: 0}
    },
    {
        type: 'crafting_shaped',
        pattern: ['///', ' / ', '/_/'],
        key: {
            '/': {item: 'minecraft:stick'},
            _: {item: 'minecraft:stone_slab', data: 0}
        },
        result: {item: 'minecraft:armor_stand'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#', 'Y'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:flint'},
            Y: {item: 'minecraft:feather'}
        },
        result: {item: 'minecraft:arrow', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['GGG', 'GSG', 'OOO'],
        key: {
            S: {item: 'minecraft:nether_star'},
            G: {item: 'minecraft:glass'},
            O: {item: 'minecraft:obsidian'}
        },
        result: {item: 'minecraft:beacon'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['OOO', 'OOO', ' B '],
        key: {B: {item: 'minecraft:bowl'}, O: {item: 'minecraft:beetroot'}},
        result: {item: 'minecraft:beetroot_soup'}
    },
    {
        type: 'crafting_shaped',
        group: 'boat',
        pattern: ['# #', '###'],
        key: {'#': {item: 'minecraft:planks', data: 2}},
        result: {item: 'minecraft:birch_boat'}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_door',
        pattern: ['##', '##', '##'],
        key: {'#': {item: 'minecraft:planks', data: 2}},
        result: {item: 'minecraft:birch_door', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence',
        pattern: ['W#W', 'W#W'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 2}
        },
        result: {item: 'minecraft:birch_fence', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence_gate',
        pattern: ['#W#', '#W#'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 2}
        },
        result: {item: 'minecraft:birch_fence_gate'}
    },
    {
        type: 'crafting_shaped',
        group: 'planks',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:log', data: 2}},
        result: {item: 'minecraft:planks', data: 2, count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_stairs',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:planks', data: 2}},
        result: {item: 'minecraft:birch_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_slab',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:planks', data: 2}},
        result: {item: 'minecraft:wooden_slab', data: 2, count: 6}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 15},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 0}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 15},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 15}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 0}
        ],
        result: {item: 'minecraft:bed', data: 15}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 15}},
        result: {item: 'minecraft:carpet', data: 15, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 15, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 0}
        },
        result: {item: 'minecraft:stained_glass', data: 15, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 15}},
        result: {item: 'minecraft:stained_glass_pane', data: 15, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 0}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 15, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 0},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 15}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [{item: 'minecraft:blaze_rod'}],
        result: {item: 'minecraft:blaze_powder', count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 11},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 11},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 11}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 4}
        ],
        result: {item: 'minecraft:bed', data: 11}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 11}},
        result: {item: 'minecraft:carpet', data: 11, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 4},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 11, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 4}
        },
        result: {item: 'minecraft:stained_glass', data: 11, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 11}},
        result: {item: 'minecraft:stained_glass_pane', data: 11, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 4}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 11, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 4},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 11}
    },
    {
        type: 'crafting_shaped',
        group: 'boat',
        pattern: ['# #', '###'],
        key: {'#': {item: 'minecraft:planks', data: 0}},
        result: {item: 'minecraft:boat'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'XXX', 'XXX'],
        key: {X: {item: 'minecraft:dye', data: 15}},
        result: {item: 'minecraft:bone_block'}
    },
    {
        type: 'crafting_shapeless',
        group: 'bonemeal',
        ingredients: [{item: 'minecraft:bone_block'}],
        result: {item: 'minecraft:dye', data: 15, count: 9}
    },
    {
        type: 'crafting_shapeless',
        group: 'bonemeal',
        ingredients: [{item: 'minecraft:bone'}],
        result: {item: 'minecraft:dye', data: 15, count: 3}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:paper', data: 0},
            {item: 'minecraft:paper', data: 0},
            {item: 'minecraft:paper', data: 0},
            {item: 'minecraft:leather', data: 0}
        ],
        result: {item: 'minecraft:book', count: 1}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', 'XXX', '###'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ],
            X: {item: 'minecraft:book'}
        },
        result: {item: 'minecraft:bookshelf'}
    },
    {
        type: 'crafting_shaped',
        pattern: [' #X', '# X', ' #X'],
        key: {'#': {item: 'minecraft:stick'}, X: {item: 'minecraft:string'}},
        result: {item: 'minecraft:bow'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['# #', ' # '],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bowl', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:wheat'}},
        result: {item: 'minecraft:bread'}
    },
    {
        type: 'crafting_shaped',
        pattern: [' B ', '###'],
        key: {
            B: {item: 'minecraft:blaze_rod'},
            '#': {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:brewing_stand'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:brick'}},
        result: {item: 'minecraft:brick_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:brick_block'}},
        result: {item: 'minecraft:stone_slab', data: 4, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:brick_block'}},
        result: {item: 'minecraft:brick_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 12},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 12},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 12}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 3}
        ],
        result: {item: 'minecraft:bed', data: 12}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 12}},
        result: {item: 'minecraft:carpet', data: 12, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 3},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 12, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 3}
        },
        result: {item: 'minecraft:stained_glass', data: 12, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 12}},
        result: {item: 'minecraft:stained_glass_pane', data: 12, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 3}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 12, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 3},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 12}
    },
    {
        type: 'crafting_shaped',
        pattern: ['# #', ' # '],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:bucket'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['AAA', 'BEB', 'CCC'],
        key: {
            A: {item: 'minecraft:milk_bucket'},
            B: {item: 'minecraft:sugar'},
            C: {item: 'minecraft:wheat'},
            E: {item: 'minecraft:egg'}
        },
        result: {item: 'minecraft:cake'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['# ', ' X'],
        key: {
            '#': {item: 'minecraft:fishing_rod'},
            X: {item: 'minecraft:carrot'}
        },
        result: {item: 'minecraft:carrot_on_a_stick'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['# #', '# #', '###'],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:cauldron'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '# #', '###'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:chest'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['A', 'B'],
        key: {A: {item: 'minecraft:chest'}, B: {item: 'minecraft:minecart'}},
        result: {item: 'minecraft:chest_minecart'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#', '#'],
        key: {'#': {item: 'minecraft:stone_slab', data: 7}},
        result: {item: 'minecraft:quartz_block', data: 1}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#', '#'],
        key: {'#': {item: 'minecraft:stone_slab2', data: 0}},
        result: {item: 'minecraft:red_sandstone', data: 1}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#', '#'],
        key: {'#': {item: 'minecraft:stone_slab', data: 1}},
        result: {item: 'minecraft:sandstone', data: 1}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#', '#'],
        key: {'#': {item: 'minecraft:stone_slab', data: 5}},
        result: {item: 'minecraft:stonebrick', data: 3}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:clay_ball'}},
        result: {item: 'minecraft:clay'}
    },
    {
        type: 'crafting_shaped',
        pattern: [' # ', '#X#', ' # '],
        key: {
            '#': {item: 'minecraft:gold_ingot'},
            X: {item: 'minecraft:redstone'}
        },
        result: {item: 'minecraft:clock'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:coal_block'}},
        result: {item: 'minecraft:coal', data: 0, count: 9}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:coal', data: 0}},
        result: {item: 'minecraft:coal_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['DG', 'GD'],
        key: {
            D: {item: 'minecraft:dirt', data: 0},
            G: {item: 'minecraft:gravel'}
        },
        result: {item: 'minecraft:dirt', data: 1, count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:cobblestone'}},
        result: {item: 'minecraft:stone_slab', data: 3, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:cobblestone'}},
        result: {item: 'minecraft:cobblestone_wall', data: 0, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: [' # ', '#X#', 'III'],
        key: {
            '#': {item: 'minecraft:redstone_torch'},
            X: {item: 'minecraft:quartz'},
            I: {item: 'minecraft:stone', data: 0}
        },
        result: {item: 'minecraft:comparator'}
    },
    {
        type: 'crafting_shaped',
        pattern: [' # ', '#X#', ' # '],
        key: {
            '#': {item: 'minecraft:iron_ingot'},
            X: {item: 'minecraft:redstone'}
        },
        result: {item: 'minecraft:compass'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#X#'],
        key: {
            '#': {item: 'minecraft:wheat'},
            X: {item: 'minecraft:dye', data: 3}
        },
        result: {item: 'minecraft:cookie', count: 8}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:crafting_table'}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 9},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 6}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 9},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 9}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 6}
        ],
        result: {item: 'minecraft:bed', data: 9}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 9}},
        result: {item: 'minecraft:carpet', data: 9, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 6},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 9, count: 8}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:dye', data: 4},
            {item: 'minecraft:dye', data: 2}
        ],
        result: {item: 'minecraft:dye', data: 6, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 6}
        },
        result: {item: 'minecraft:stained_glass', data: 9, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 9}},
        result: {item: 'minecraft:stained_glass_pane', data: 9, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 6}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 9, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 6},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 9}
    },
    {
        type: 'crafting_shaped',
        group: 'boat',
        pattern: ['# #', '###'],
        key: {'#': {item: 'minecraft:planks', data: 5}},
        result: {item: 'minecraft:dark_oak_boat'}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_door',
        pattern: ['##', '##', '##'],
        key: {'#': {item: 'minecraft:planks', data: 5}},
        result: {item: 'minecraft:dark_oak_door', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence',
        pattern: ['W#W', 'W#W'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 5}
        },
        result: {item: 'minecraft:dark_oak_fence', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence_gate',
        pattern: ['#W#', '#W#'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 5}
        },
        result: {item: 'minecraft:dark_oak_fence_gate'}
    },
    {
        type: 'crafting_shaped',
        group: 'planks',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:log2', data: 1}},
        result: {item: 'minecraft:planks', data: 5, count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_stairs',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:planks', data: 5}},
        result: {item: 'minecraft:dark_oak_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_slab',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:planks', data: 5}},
        result: {item: 'minecraft:wooden_slab', data: 5, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['SSS', 'SIS', 'SSS'],
        key: {
            S: {item: 'minecraft:prismarine_shard'},
            I: {item: 'minecraft:dye', data: 0}
        },
        result: {item: 'minecraft:prismarine', data: 2}
    },
    {
        type: 'crafting_shaped',
        pattern: ['GGG', 'QQQ', 'WWW'],
        key: {
            Q: {item: 'minecraft:quartz'},
            G: {item: 'minecraft:glass'},
            W: [
                {item: 'minecraft:wooden_slab', data: 0},
                {item: 'minecraft:wooden_slab', data: 1},
                {item: 'minecraft:wooden_slab', data: 2},
                {item: 'minecraft:wooden_slab', data: 3},
                {item: 'minecraft:wooden_slab', data: 4},
                {item: 'minecraft:wooden_slab', data: 5}
            ]
        },
        result: {item: 'minecraft:daylight_detector'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'X#X', 'XRX'],
        key: {
            R: {item: 'minecraft:redstone'},
            '#': {item: 'minecraft:stone_pressure_plate'},
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:detector_rail', count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:diamond_block'}},
        result: {item: 'minecraft:diamond', count: 9}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', 'X#', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:diamond'}
        },
        result: {item: 'minecraft:diamond_axe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:diamond'}},
        result: {item: 'minecraft:diamond_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'X X'],
        key: {X: {item: 'minecraft:diamond'}},
        result: {item: 'minecraft:diamond_boots'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'XXX', 'XXX'],
        key: {X: {item: 'minecraft:diamond'}},
        result: {item: 'minecraft:diamond_chestplate'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'X X'],
        key: {X: {item: 'minecraft:diamond'}},
        result: {item: 'minecraft:diamond_helmet'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', ' #', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:diamond'}
        },
        result: {item: 'minecraft:diamond_hoe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'X X', 'X X'],
        key: {X: {item: 'minecraft:diamond'}},
        result: {item: 'minecraft:diamond_leggings'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', ' # ', ' # '],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:diamond'}
        },
        result: {item: 'minecraft:diamond_pickaxe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:diamond'}
        },
        result: {item: 'minecraft:diamond_shovel'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', 'X', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:diamond'}
        },
        result: {item: 'minecraft:diamond_sword'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['CQ', 'QC'],
        key: {
            Q: {item: 'minecraft:quartz'},
            C: {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:stone', data: 3, count: 2}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '#R#'],
        key: {
            R: {item: 'minecraft:redstone'},
            '#': {item: 'minecraft:cobblestone'},
            X: {item: 'minecraft:bow'}
        },
        result: {item: 'minecraft:dispenser'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '# #', '#R#'],
        key: {
            R: {item: 'minecraft:redstone'},
            '#': {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:dropper'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:emerald_block'}},
        result: {item: 'minecraft:emerald', count: 9}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:emerald'}},
        result: {item: 'minecraft:emerald_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: [' B ', 'D#D', '###'],
        key: {
            B: {item: 'minecraft:book'},
            '#': {item: 'minecraft:obsidian'},
            D: {item: 'minecraft:diamond'}
        },
        result: {item: 'minecraft:enchanting_table'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#E#', '###'],
        key: {
            '#': {item: 'minecraft:obsidian'},
            E: {item: 'minecraft:ender_eye'}
        },
        result: {item: 'minecraft:ender_chest'}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:ender_pearl'},
            {item: 'minecraft:blaze_powder'}
        ],
        result: {item: 'minecraft:ender_eye'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:end_stone'}},
        result: {item: 'minecraft:end_bricks', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['GGG', 'GEG', 'GTG'],
        key: {
            T: {item: 'minecraft:ghast_tear'},
            E: {item: 'minecraft:ender_eye'},
            G: {item: 'minecraft:glass'}
        },
        result: {item: 'minecraft:end_crystal'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['/', '#'],
        key: {
            '#': {item: 'minecraft:chorus_fruit_popped'},
            '/': {item: 'minecraft:blaze_rod'}
        },
        result: {item: 'minecraft:end_rod', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence',
        pattern: ['W#W', 'W#W'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 0}
        },
        result: {item: 'minecraft:fence', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence_gate',
        pattern: ['#W#', '#W#'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 0}
        },
        result: {item: 'minecraft:fence_gate'}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:spider_eye'},
            {item: 'minecraft:brown_mushroom'},
            {item: 'minecraft:sugar'}
        ],
        result: {item: 'minecraft:fermented_spider_eye'}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:gunpowder'},
            {item: 'minecraft:blaze_powder'},
            [
                {item: 'minecraft:coal', data: 0},
                {item: 'minecraft:coal', data: 1}
            ]
        ],
        result: {item: 'minecraft:fire_charge', count: 3}
    },
    {
        type: 'crafting_shaped',
        pattern: ['  #', ' #X', '# X'],
        key: {'#': {item: 'minecraft:stick'}, X: {item: 'minecraft:string'}},
        result: {item: 'minecraft:fishing_rod'}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [{item: 'minecraft:iron_ingot'}, {item: 'minecraft:flint'}],
        result: {item: 'minecraft:flint_and_steel'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['# #', ' # '],
        key: {'#': {item: 'minecraft:brick'}},
        result: {item: 'minecraft:flower_pot'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '# #', '###'],
        key: {'#': {item: 'minecraft:cobblestone'}},
        result: {item: 'minecraft:furnace'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['A', 'B'],
        key: {
            A: {item: 'minecraft:furnace'},
            B: {item: 'minecraft:minecart'}
        },
        result: {item: 'minecraft:furnace_minecart'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['# #', ' # '],
        key: {'#': {item: 'minecraft:glass'}},
        result: {item: 'minecraft:glass_bottle', count: 3}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:glass'}},
        result: {item: 'minecraft:glass_pane', count: 16}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:glowstone_dust'}},
        result: {item: 'minecraft:glowstone'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:gold_ingot'},
            X: {item: 'minecraft:apple'}
        },
        result: {item: 'minecraft:golden_apple', data: 0}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', 'X#', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:gold_ingot'}
        },
        result: {item: 'minecraft:golden_axe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'X X'],
        key: {X: {item: 'minecraft:gold_ingot'}},
        result: {item: 'minecraft:golden_boots'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:gold_nugget'},
            X: {item: 'minecraft:carrot'}
        },
        result: {item: 'minecraft:golden_carrot'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'XXX', 'XXX'],
        key: {X: {item: 'minecraft:gold_ingot'}},
        result: {item: 'minecraft:golden_chestplate'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'X X'],
        key: {X: {item: 'minecraft:gold_ingot'}},
        result: {item: 'minecraft:golden_helmet'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', ' #', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:gold_ingot'}
        },
        result: {item: 'minecraft:golden_hoe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'X X', 'X X'],
        key: {X: {item: 'minecraft:gold_ingot'}},
        result: {item: 'minecraft:golden_leggings'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', ' # ', ' # '],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:gold_ingot'}
        },
        result: {item: 'minecraft:golden_pickaxe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'X#X', 'XRX'],
        key: {
            R: {item: 'minecraft:redstone'},
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:gold_ingot'}
        },
        result: {item: 'minecraft:golden_rail', count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:gold_ingot'}
        },
        result: {item: 'minecraft:golden_shovel'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', 'X', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:gold_ingot'}
        },
        result: {item: 'minecraft:golden_sword'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:gold_ingot'}},
        result: {item: 'minecraft:gold_block'}
    },
    {
        type: 'crafting_shaped',
        group: 'gold_ingot',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:gold_block'}},
        result: {item: 'minecraft:gold_ingot', count: 9}
    },
    {
        type: 'crafting_shaped',
        group: 'gold_ingot',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:gold_nugget'}},
        result: {item: 'minecraft:gold_ingot'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:gold_ingot'}},
        result: {item: 'minecraft:gold_nugget', count: 9}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:stone', data: 3},
            {item: 'minecraft:quartz'}
        ],
        result: {item: 'minecraft:stone', data: 1}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 7},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 7},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 7}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 8}
        ],
        result: {item: 'minecraft:bed', data: 7}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 7}},
        result: {item: 'minecraft:carpet', data: 7, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 8},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 7, count: 8}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:dye', data: 0},
            {item: 'minecraft:dye', data: 15}
        ],
        result: {item: 'minecraft:dye', data: 8, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 8}
        },
        result: {item: 'minecraft:stained_glass', data: 7, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 7}},
        result: {item: 'minecraft:stained_glass_pane', data: 7, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 8}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 7, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 8},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 7}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 13},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 13},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 13}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 2}
        ],
        result: {item: 'minecraft:bed', data: 13}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 13}},
        result: {item: 'minecraft:carpet', data: 13, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 2},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 13, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 2}
        },
        result: {item: 'minecraft:stained_glass', data: 13, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 13}},
        result: {item: 'minecraft:stained_glass_pane', data: 13, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 2}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 13, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 2},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 13}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:wheat'}},
        result: {item: 'minecraft:hay_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:heavy_weighted_pressure_plate'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['I I', 'ICI', ' I '],
        key: {
            C: {item: 'minecraft:chest'},
            I: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:hopper'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['A', 'B'],
        key: {
            A: {item: 'minecraft:hopper'},
            B: {item: 'minecraft:minecart'}
        },
        result: {item: 'minecraft:hopper_minecart'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', 'X#', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:iron_axe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_bars', count: 16}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'X X'],
        key: {X: {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_boots'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'XXX', 'XXX'],
        key: {X: {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_chestplate'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##', '##'],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_door', count: 3}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'X X'],
        key: {X: {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_helmet'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', ' #', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:iron_hoe'}
    },
    {
        type: 'crafting_shaped',
        group: 'iron_ingot',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:iron_block'}},
        result: {item: 'minecraft:iron_ingot', count: 9}
    },
    {
        type: 'crafting_shaped',
        group: 'iron_ingot',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:iron_nugget'}},
        result: {item: 'minecraft:iron_ingot'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'X X', 'X X'],
        key: {X: {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_leggings'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_nugget', count: 9}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', ' # ', ' # '],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:iron_pickaxe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:iron_shovel'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', 'X', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:iron_sword'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:iron_trapdoor'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:leather'}
        },
        result: {item: 'minecraft:item_frame'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ],
            X: {item: 'minecraft:diamond'}
        },
        result: {item: 'minecraft:jukebox'}
    },
    {
        type: 'crafting_shaped',
        group: 'boat',
        pattern: ['# #', '###'],
        key: {'#': {item: 'minecraft:planks', data: 3}},
        result: {item: 'minecraft:jungle_boat'}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_door',
        pattern: ['##', '##', '##'],
        key: {'#': {item: 'minecraft:planks', data: 3}},
        result: {item: 'minecraft:jungle_door', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence',
        pattern: ['W#W', 'W#W'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 3}
        },
        result: {item: 'minecraft:jungle_fence', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence_gate',
        pattern: ['#W#', '#W#'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 3}
        },
        result: {item: 'minecraft:jungle_fence_gate'}
    },
    {
        type: 'crafting_shaped',
        group: 'planks',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:log', data: 3}},
        result: {item: 'minecraft:planks', data: 3, count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_stairs',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:planks', data: 3}},
        result: {item: 'minecraft:jungle_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_slab',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:planks', data: 3}},
        result: {item: 'minecraft:wooden_slab', data: 3, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['# #', '###', '# #'],
        key: {'#': {item: 'minecraft:stick'}},
        result: {item: 'minecraft:ladder', count: 3}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:dye', data: 4}},
        result: {item: 'minecraft:lapis_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:lapis_block'}},
        result: {item: 'minecraft:dye', data: 4, count: 9}
    },
    {
        type: 'crafting_shaped',
        pattern: ['~~ ', '~O ', '  ~'],
        key: {
            '~': {item: 'minecraft:string'},
            O: {item: 'minecraft:slime_ball'}
        },
        result: {item: 'minecraft:lead', count: 2}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:rabbit_hide'}},
        result: {item: 'minecraft:leather'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'X X'],
        key: {X: {item: 'minecraft:leather'}},
        result: {item: 'minecraft:leather_boots'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'XXX', 'XXX'],
        key: {X: {item: 'minecraft:leather'}},
        result: {item: 'minecraft:leather_chestplate'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'X X'],
        key: {X: {item: 'minecraft:leather'}},
        result: {item: 'minecraft:leather_helmet'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', 'X X', 'X X'],
        key: {X: {item: 'minecraft:leather'}},
        result: {item: 'minecraft:leather_leggings'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#'],
        key: {
            '#': {item: 'minecraft:cobblestone'},
            X: {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:lever'}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 3},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 12}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 3},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 12}
        ],
        result: {item: 'minecraft:bed', data: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 3}},
        result: {item: 'minecraft:carpet', data: 3, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 12},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 3, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'light_blue_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 1}],
        result: {item: 'minecraft:dye', data: 12}
    },
    {
        type: 'crafting_shapeless',
        group: 'light_blue_dye',
        ingredients: [
            {item: 'minecraft:dye', data: 4},
            {item: 'minecraft:dye', data: 15}
        ],
        result: {item: 'minecraft:dye', data: 12, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 12}
        },
        result: {item: 'minecraft:stained_glass', data: 3, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 3}},
        result: {item: 'minecraft:stained_glass_pane', data: 3, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 12}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 3, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 12},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 8},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 7}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 8},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 7}
        ],
        result: {item: 'minecraft:bed', data: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 8}},
        result: {item: 'minecraft:carpet', data: 8, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 7},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 8, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'light_gray_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 3}],
        result: {item: 'minecraft:dye', data: 7}
    },
    {
        type: 'crafting_shapeless',
        group: 'light_gray_dye',
        ingredients: [
            {item: 'minecraft:dye', data: 8},
            {item: 'minecraft:dye', data: 15}
        ],
        result: {item: 'minecraft:dye', data: 7, count: 2}
    },
    {
        type: 'crafting_shapeless',
        group: 'light_gray_dye',
        ingredients: [
            {item: 'minecraft:dye', data: 0},
            {item: 'minecraft:dye', data: 15},
            {item: 'minecraft:dye', data: 15}
        ],
        result: {item: 'minecraft:dye', data: 7, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'light_gray_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 8}],
        result: {item: 'minecraft:dye', data: 7}
    },
    {
        type: 'crafting_shapeless',
        group: 'light_gray_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 6}],
        result: {item: 'minecraft:dye', data: 7}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 7}
        },
        result: {item: 'minecraft:stained_glass', data: 8, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 8}},
        result: {item: 'minecraft:stained_glass_pane', data: 8, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 7}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 8, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 7},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 8}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:gold_ingot'}},
        result: {item: 'minecraft:light_weighted_pressure_plate'}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 5},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 10}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 5},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 5}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 10}
        ],
        result: {item: 'minecraft:bed', data: 5}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 5}},
        result: {item: 'minecraft:carpet', data: 5, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 10},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 5, count: 8}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:dye', data: 2},
            {item: 'minecraft:dye', data: 15}
        ],
        result: {item: 'minecraft:dye', data: 10, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 10}
        },
        result: {item: 'minecraft:stained_glass', data: 5, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 5}},
        result: {item: 'minecraft:stained_glass_pane', data: 5, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 10}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 5, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 10},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 5}
    },
    {
        type: 'crafting_shaped',
        pattern: ['A', 'B'],
        key: {A: {item: 'minecraft:pumpkin'}, B: {item: 'minecraft:torch'}},
        result: {item: 'minecraft:lit_pumpkin'}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 2},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 13}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 2},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 2}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 13}
        ],
        result: {item: 'minecraft:bed', data: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 2}},
        result: {item: 'minecraft:carpet', data: 2, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 13},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 2, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'magenta_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 2}],
        result: {item: 'minecraft:dye', data: 13}
    },
    {
        type: 'crafting_shapeless',
        group: 'magenta_dye',
        ingredients: [
            {item: 'minecraft:dye', data: 4},
            {item: 'minecraft:dye', data: 1},
            {item: 'minecraft:dye', data: 1},
            {item: 'minecraft:dye', data: 15}
        ],
        result: {item: 'minecraft:dye', data: 13, count: 4}
    },
    {
        type: 'crafting_shapeless',
        group: 'magenta_dye',
        ingredients: [
            {item: 'minecraft:dye', data: 4},
            {item: 'minecraft:dye', data: 1},
            {item: 'minecraft:dye', data: 9}
        ],
        result: {item: 'minecraft:dye', data: 13, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'magenta_dye',
        ingredients: [{item: 'minecraft:double_plant', data: 1}],
        result: {item: 'minecraft:dye', data: 13, count: 2}
    },
    {
        type: 'crafting_shapeless',
        group: 'magenta_dye',
        ingredients: [
            {item: 'minecraft:dye', data: 5},
            {item: 'minecraft:dye', data: 9}
        ],
        result: {item: 'minecraft:dye', data: 13, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 13}
        },
        result: {item: 'minecraft:stained_glass', data: 2, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 2}},
        result: {item: 'minecraft:stained_glass_pane', data: 2, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 13}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 2, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 13},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 2}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:magma_cream'}},
        result: {item: 'minecraft:magma'}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:blaze_powder'},
            {item: 'minecraft:slime_ball'}
        ],
        result: {item: 'minecraft:magma_cream'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:paper'},
            X: {item: 'minecraft:compass'}
        },
        result: {item: 'minecraft:map'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['MMM', 'MMM', 'MMM'],
        key: {M: {item: 'minecraft:melon'}},
        result: {item: 'minecraft:melon_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['M'],
        key: {M: {item: 'minecraft:melon'}},
        result: {item: 'minecraft:melon_seeds'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['# #', '###'],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:minecart'}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [{item: 'minecraft:cobblestone'}, {item: 'minecraft:vine'}],
        result: {item: 'minecraft:mossy_cobblestone'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:mossy_cobblestone'}},
        result: {item: 'minecraft:cobblestone_wall', data: 1, count: 6}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:stonebrick', data: 0},
            {item: 'minecraft:vine'}
        ],
        result: {item: 'minecraft:stonebrick', data: 1}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:brown_mushroom'},
            {item: 'minecraft:red_mushroom'},
            {item: 'minecraft:bowl'}
        ],
        result: {item: 'minecraft:mushroom_stew'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['NN', 'NN'],
        key: {N: {item: 'minecraft:netherbrick'}},
        result: {item: 'minecraft:nether_brick'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:nether_brick'}},
        result: {item: 'minecraft:nether_brick_fence', count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:nether_brick'}},
        result: {item: 'minecraft:stone_slab', data: 6, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:nether_brick'}},
        result: {item: 'minecraft:nether_brick_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:nether_wart'}},
        result: {item: 'minecraft:nether_wart_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ],
            X: {item: 'minecraft:redstone'}
        },
        result: {item: 'minecraft:noteblock'}
    },
    {
        type: 'crafting_shaped',
        group: 'planks',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:log', data: 0}},
        result: {item: 'minecraft:planks', data: 0, count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_stairs',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:planks', data: 0}},
        result: {item: 'minecraft:oak_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_slab',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:planks', data: 0}},
        result: {item: 'minecraft:wooden_slab', data: 0, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', 'RRQ', '###'],
        key: {
            Q: {item: 'minecraft:quartz'},
            R: {item: 'minecraft:redstone'},
            '#': {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:observer'}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 1},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 14}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 1},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 1}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 14}
        ],
        result: {item: 'minecraft:bed', data: 1}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 1}},
        result: {item: 'minecraft:carpet', data: 1, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 14},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 1, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'orange_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 5}],
        result: {item: 'minecraft:dye', data: 14}
    },
    {
        type: 'crafting_shapeless',
        group: 'orange_dye',
        ingredients: [
            {item: 'minecraft:dye', data: 1},
            {item: 'minecraft:dye', data: 11}
        ],
        result: {item: 'minecraft:dye', data: 14, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 14}
        },
        result: {item: 'minecraft:stained_glass', data: 1, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 1}},
        result: {item: 'minecraft:stained_glass_pane', data: 1, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 14}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 1, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 14},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 1}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: [
                {item: 'minecraft:wool', data: 0},
                {item: 'minecraft:wool', data: 1},
                {item: 'minecraft:wool', data: 2},
                {item: 'minecraft:wool', data: 3},
                {item: 'minecraft:wool', data: 4},
                {item: 'minecraft:wool', data: 5},
                {item: 'minecraft:wool', data: 6},
                {item: 'minecraft:wool', data: 7},
                {item: 'minecraft:wool', data: 8},
                {item: 'minecraft:wool', data: 9},
                {item: 'minecraft:wool', data: 10},
                {item: 'minecraft:wool', data: 11},
                {item: 'minecraft:wool', data: 12},
                {item: 'minecraft:wool', data: 13},
                {item: 'minecraft:wool', data: 14},
                {item: 'minecraft:wool', data: 15}
            ]
        },
        result: {item: 'minecraft:painting'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:reeds'}},
        result: {item: 'minecraft:paper', count: 3}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#', '#'],
        key: {'#': {item: 'minecraft:quartz_block', data: 0}},
        result: {item: 'minecraft:quartz_block', data: 2, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 6},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 9}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 6},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 6}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 9}
        ],
        result: {item: 'minecraft:bed', data: 6}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 6}},
        result: {item: 'minecraft:carpet', data: 6, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 9},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 6, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'pink_dye',
        ingredients: [{item: 'minecraft:double_plant', data: 5}],
        result: {item: 'minecraft:dye', data: 9, count: 2}
    },
    {
        type: 'crafting_shapeless',
        group: 'pink_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 7}],
        result: {item: 'minecraft:dye', data: 9}
    },
    {
        type: 'crafting_shapeless',
        group: 'pink_dye',
        ingredients: [
            {item: 'minecraft:dye', data: 1},
            {item: 'minecraft:dye', data: 15}
        ],
        result: {item: 'minecraft:dye', data: 9, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 9}
        },
        result: {item: 'minecraft:stained_glass', data: 6, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 6}},
        result: {item: 'minecraft:stained_glass_pane', data: 6, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 9}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 6, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 9},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['TTT', '#X#', '#R#'],
        key: {
            R: {item: 'minecraft:redstone'},
            '#': {item: 'minecraft:cobblestone'},
            T: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ],
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:piston'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['SS', 'SS'],
        key: {S: {item: 'minecraft:stone', data: 5}},
        result: {item: 'minecraft:stone', data: 6, count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['SS', 'SS'],
        key: {S: {item: 'minecraft:stone', data: 3}},
        result: {item: 'minecraft:stone', data: 4, count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['SS', 'SS'],
        key: {S: {item: 'minecraft:stone', data: 1}},
        result: {item: 'minecraft:stone', data: 2, count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['SS', 'SS'],
        key: {S: {item: 'minecraft:prismarine_shard'}},
        result: {item: 'minecraft:prismarine', data: 0}
    },
    {
        type: 'crafting_shaped',
        pattern: ['SSS', 'SSS', 'SSS'],
        key: {S: {item: 'minecraft:prismarine_shard'}},
        result: {item: 'minecraft:prismarine', data: 1}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:pumpkin'},
            {item: 'minecraft:sugar'},
            {item: 'minecraft:egg'}
        ],
        result: {item: 'minecraft:pumpkin_pie'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['M'],
        key: {M: {item: 'minecraft:pumpkin'}},
        result: {item: 'minecraft:pumpkin_seeds', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 10},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 5}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 10},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 10}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 5}
        ],
        result: {item: 'minecraft:bed', data: 10}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 10}},
        result: {item: 'minecraft:carpet', data: 10, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 5},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 10, count: 8}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:dye', data: 4},
            {item: 'minecraft:dye', data: 1}
        ],
        result: {item: 'minecraft:dye', data: 5, count: 2}
    },
    {
        type: 'crafting_shaped',
        pattern: ['-', '#', '-'],
        key: {
            '#': {item: 'minecraft:chest'},
            '-': {item: 'minecraft:shulker_shell'}
        },
        result: {item: 'minecraft:purple_shulker_box'}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 5}
        },
        result: {item: 'minecraft:stained_glass', data: 10, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 10}},
        result: {item: 'minecraft:stained_glass_pane', data: 10, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 5}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 10, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 5},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 10}
    },
    {
        type: 'crafting_shaped',
        pattern: ['FF', 'FF'],
        key: {F: {item: 'minecraft:chorus_fruit_popped'}},
        result: {item: 'minecraft:purpur_block', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#', '#'],
        key: {'#': {item: 'minecraft:purpur_slab', data: 0}},
        result: {item: 'minecraft:purpur_pillar'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:purpur_block'}},
        result: {item: 'minecraft:purpur_slab', data: 0, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:purpur_block'}},
        result: {item: 'minecraft:purpur_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:quartz'}},
        result: {item: 'minecraft:quartz_block', data: 0}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {
            '#': [
                {item: 'minecraft:quartz_block', data: 0},
                {item: 'minecraft:quartz_block', data: 1},
                {item: 'minecraft:quartz_block', data: 2}
            ]
        },
        result: {item: 'minecraft:stone_slab', data: 7, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#  ', '## ', '###'],
        key: {
            '#': [
                {item: 'minecraft:quartz_block', data: 0},
                {item: 'minecraft:quartz_block', data: 1},
                {item: 'minecraft:quartz_block', data: 2}
            ]
        },
        result: {item: 'minecraft:quartz_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'rabbit_stew',
        pattern: [' R ', 'CPM', ' B '],
        key: {
            P: {item: 'minecraft:baked_potato'},
            R: {item: 'minecraft:cooked_rabbit'},
            B: {item: 'minecraft:bowl'},
            C: {item: 'minecraft:carrot'},
            M: {item: 'minecraft:brown_mushroom'}
        },
        result: {item: 'minecraft:rabbit_stew'}
    },
    {
        type: 'crafting_shaped',
        group: 'rabbit_stew',
        pattern: [' R ', 'CPD', ' B '],
        key: {
            P: {item: 'minecraft:baked_potato'},
            R: {item: 'minecraft:cooked_rabbit'},
            B: {item: 'minecraft:bowl'},
            C: {item: 'minecraft:carrot'},
            D: {item: 'minecraft:red_mushroom'}
        },
        result: {item: 'minecraft:rabbit_stew'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X X', 'X#X', 'X X'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:rail', count: 16}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:redstone_block'}},
        result: {item: 'minecraft:redstone', count: 9}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:redstone'}},
        result: {item: 'minecraft:redstone_block'}
    },
    {
        type: 'crafting_shaped',
        pattern: [' R ', 'RGR', ' R '],
        key: {
            R: {item: 'minecraft:redstone'},
            G: {item: 'minecraft:glowstone'}
        },
        result: {item: 'minecraft:redstone_lamp'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:redstone'}
        },
        result: {item: 'minecraft:redstone_torch'}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 14},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 1}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 14},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 14}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 1}
        ],
        result: {item: 'minecraft:bed', data: 14}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 14}},
        result: {item: 'minecraft:carpet', data: 14, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 1},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 14, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'red_dye',
        ingredients: [{item: 'minecraft:beetroot'}],
        result: {item: 'minecraft:dye', data: 1}
    },
    {
        type: 'crafting_shapeless',
        group: 'red_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 0}],
        result: {item: 'minecraft:dye', data: 1}
    },
    {
        type: 'crafting_shapeless',
        group: 'red_dye',
        ingredients: [{item: 'minecraft:double_plant', data: 4}],
        result: {item: 'minecraft:dye', data: 1, count: 2}
    },
    {
        type: 'crafting_shapeless',
        group: 'red_dye',
        ingredients: [{item: 'minecraft:red_flower', data: 4}],
        result: {item: 'minecraft:dye', data: 1}
    },
    {
        type: 'crafting_shaped',
        pattern: ['NW', 'WN'],
        key: {
            W: {item: 'minecraft:nether_wart'},
            N: {item: 'minecraft:netherbrick'}
        },
        result: {item: 'minecraft:red_nether_brick'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:sand', data: 1}},
        result: {item: 'minecraft:red_sandstone', data: 0}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {
            '#': [
                {item: 'minecraft:red_sandstone', data: 0},
                {item: 'minecraft:red_sandstone', data: 1},
                {item: 'minecraft:red_sandstone', data: 2}
            ]
        },
        result: {item: 'minecraft:stone_slab2', data: 0, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#  ', '## ', '###'],
        key: {
            '#': [
                {item: 'minecraft:red_sandstone', data: 0},
                {item: 'minecraft:red_sandstone', data: 1},
                {item: 'minecraft:red_sandstone', data: 2}
            ]
        },
        result: {item: 'minecraft:red_sandstone_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 1}
        },
        result: {item: 'minecraft:stained_glass', data: 14, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 14}},
        result: {item: 'minecraft:stained_glass_pane', data: 14, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 1}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 14, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 1},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 14}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#X#', 'III'],
        key: {
            '#': {item: 'minecraft:redstone_torch'},
            X: {item: 'minecraft:redstone'},
            I: {item: 'minecraft:stone', data: 0}
        },
        result: {item: 'minecraft:repeater'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:sand', data: 0}},
        result: {item: 'minecraft:sandstone', data: 0}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {
            '#': [
                {item: 'minecraft:sandstone', data: 0},
                {item: 'minecraft:sandstone', data: 1},
                {item: 'minecraft:sandstone', data: 2}
            ]
        },
        result: {item: 'minecraft:stone_slab', data: 1, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#  ', '## ', '###'],
        key: {
            '#': [
                {item: 'minecraft:sandstone', data: 0},
                {item: 'minecraft:sandstone', data: 1},
                {item: 'minecraft:sandstone', data: 2}
            ]
        },
        result: {item: 'minecraft:sandstone_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['SCS', 'CCC', 'SCS'],
        key: {
            S: {item: 'minecraft:prismarine_shard'},
            C: {item: 'minecraft:prismarine_crystals'}
        },
        result: {item: 'minecraft:sea_lantern'}
    },
    {
        type: 'crafting_shaped',
        pattern: [' #', '# '],
        key: {'#': {item: 'minecraft:iron_ingot'}},
        result: {item: 'minecraft:shears'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['WoW', 'WWW', ' W '],
        key: {
            W: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ],
            o: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:shield'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', ' X '],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ],
            X: {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:sign', count: 3}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###', '###'],
        key: {'#': {item: 'minecraft:slime_ball'}},
        result: {item: 'minecraft:slime'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:slime'}},
        result: {item: 'minecraft:slime_ball', count: 9}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:red_sandstone', data: 0}},
        result: {item: 'minecraft:red_sandstone', data: 2, count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:sandstone', data: 0}},
        result: {item: 'minecraft:sandstone', data: 2, count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:snowball'}},
        result: {item: 'minecraft:snow'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:snow'}},
        result: {item: 'minecraft:snow_layer', count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:gold_nugget'},
            X: {item: 'minecraft:melon'}
        },
        result: {item: 'minecraft:speckled_melon'}
    },
    {
        type: 'crafting_shaped',
        pattern: [' # ', '#X#', ' # '],
        key: {
            '#': {item: 'minecraft:glowstone_dust'},
            X: {item: 'minecraft:arrow'}
        },
        result: {item: 'minecraft:spectral_arrow', count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'boat',
        pattern: ['# #', '###'],
        key: {'#': {item: 'minecraft:planks', data: 1}},
        result: {item: 'minecraft:spruce_boat'}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_door',
        pattern: ['##', '##', '##'],
        key: {'#': {item: 'minecraft:planks', data: 1}},
        result: {item: 'minecraft:spruce_door', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence',
        pattern: ['W#W', 'W#W'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 1}
        },
        result: {item: 'minecraft:spruce_fence', count: 3}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_fence_gate',
        pattern: ['#W#', '#W#'],
        key: {
            '#': {item: 'minecraft:stick'},
            W: {item: 'minecraft:planks', data: 1}
        },
        result: {item: 'minecraft:spruce_fence_gate'}
    },
    {
        type: 'crafting_shaped',
        group: 'planks',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:log', data: 1}},
        result: {item: 'minecraft:planks', data: 1, count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_stairs',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:planks', data: 1}},
        result: {item: 'minecraft:spruce_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_slab',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:planks', data: 1}},
        result: {item: 'minecraft:wooden_slab', data: 1, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#', '#'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:stick', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['S', 'P'],
        key: {
            P: {item: 'minecraft:piston'},
            S: {item: 'minecraft:slime_ball'}
        },
        result: {item: 'minecraft:sticky_piston'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:stone', data: 0}},
        result: {item: 'minecraft:stonebrick', data: 0, count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', 'X#', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:stone_axe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {
            '#': [
                {item: 'minecraft:stonebrick', data: 0},
                {item: 'minecraft:stonebrick', data: 1},
                {item: 'minecraft:stonebrick', data: 2},
                {item: 'minecraft:stonebrick', data: 3}
            ]
        },
        result: {item: 'minecraft:stone_slab', data: 5, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#  ', '## ', '###'],
        key: {
            '#': [
                {item: 'minecraft:stonebrick', data: 0},
                {item: 'minecraft:stonebrick', data: 1},
                {item: 'minecraft:stonebrick', data: 2},
                {item: 'minecraft:stonebrick', data: 3}
            ]
        },
        result: {item: 'minecraft:stone_brick_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:stone', data: 0}},
        result: {item: 'minecraft:stone_button'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', ' #', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:stone_hoe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', ' # ', ' # '],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:stone_pickaxe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:stone', data: 0}},
        result: {item: 'minecraft:stone_pressure_plate'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:stone_shovel'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###'],
        key: {'#': {item: 'minecraft:stone', data: 0}},
        result: {item: 'minecraft:stone_slab', data: 0, count: 6}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#  ', '## ', '###'],
        key: {'#': {item: 'minecraft:cobblestone'}},
        result: {item: 'minecraft:stone_stairs', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', 'X', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: {item: 'minecraft:cobblestone'}
        },
        result: {item: 'minecraft:stone_sword'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##', '##'],
        key: {'#': {item: 'minecraft:string'}},
        result: {item: 'minecraft:wool', data: 0}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:reeds'}},
        result: {item: 'minecraft:sugar'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X#X', '#X#', 'X#X'],
        key: {
            '#': [
                {item: 'minecraft:sand', data: 0},
                {item: 'minecraft:sand', data: 1}
            ],
            X: {item: 'minecraft:gunpowder'}
        },
        result: {item: 'minecraft:tnt'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['A', 'B'],
        key: {A: {item: 'minecraft:tnt'}, B: {item: 'minecraft:minecart'}},
        result: {item: 'minecraft:tnt_minecart'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: [
                {item: 'minecraft:coal', data: 0},
                {item: 'minecraft:coal', data: 1}
            ]
        },
        result: {item: 'minecraft:torch', count: 4}
    },
    {
        type: 'crafting_shaped',
        pattern: ['###', '###'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:trapdoor', count: 2}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [{item: 'minecraft:chest'}, {item: 'minecraft:tripwire_hook'}],
        result: {item: 'minecraft:trapped_chest'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['I', 'S', '#'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ],
            S: {item: 'minecraft:stick'},
            I: {item: 'minecraft:iron_ingot'}
        },
        result: {item: 'minecraft:tripwire_hook', count: 2}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {'#': {item: 'minecraft:hay_block'}},
        result: {item: 'minecraft:wheat', count: 9}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 0},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 15}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 0},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 0}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 0}},
        result: {item: 'minecraft:carpet', data: 0, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 15},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 0, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 15}
        },
        result: {item: 'minecraft:stained_glass', data: 0, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 0}},
        result: {item: 'minecraft:stained_glass_pane', data: 0, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 15}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 0, count: 8}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', 'X#', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:wooden_axe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['#'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:wooden_button'}
    },
    {
        type: 'crafting_shaped',
        group: 'wooden_door',
        pattern: ['##', '##', '##'],
        key: {'#': {item: 'minecraft:planks', data: 0}},
        result: {item: 'minecraft:wooden_door', count: 3}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XX', ' #', ' #'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:wooden_hoe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['XXX', ' # ', ' # '],
        key: {
            '#': {item: 'minecraft:stick'},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:wooden_pickaxe'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['##'],
        key: {
            '#': [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:wooden_pressure_plate'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', '#', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:wooden_shovel'}
    },
    {
        type: 'crafting_shaped',
        pattern: ['X', 'X', '#'],
        key: {
            '#': {item: 'minecraft:stick'},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:wooden_sword'}
    },
    {
        type: 'crafting_shapeless',
        ingredients: [
            {item: 'minecraft:book'},
            {item: 'minecraft:dye', data: 0},
            {item: 'minecraft:feather'}
        ],
        result: {item: 'minecraft:writable_book'}
    },
    {
        type: 'crafting_shaped',
        group: 'banner',
        pattern: ['###', '###', ' | '],
        key: {
            '#': {item: 'minecraft:wool', data: 4},
            '|': {item: 'minecraft:stick'}
        },
        result: {item: 'minecraft:banner', data: 11}
    },
    {
        type: 'crafting_shaped',
        group: 'bed',
        pattern: ['###', 'XXX'],
        key: {
            '#': {item: 'minecraft:wool', data: 4},
            X: [
                {item: 'minecraft:planks', data: 0},
                {item: 'minecraft:planks', data: 1},
                {item: 'minecraft:planks', data: 2},
                {item: 'minecraft:planks', data: 3},
                {item: 'minecraft:planks', data: 4},
                {item: 'minecraft:planks', data: 5}
            ]
        },
        result: {item: 'minecraft:bed', data: 4}
    },
    {
        type: 'crafting_shapeless',
        group: 'dyed_bed',
        ingredients: [
            {item: 'minecraft:bed', data: 0},
            {item: 'minecraft:dye', data: 11}
        ],
        result: {item: 'minecraft:bed', data: 4}
    },
    {
        type: 'crafting_shaped',
        group: 'carpet',
        pattern: ['##'],
        key: {'#': {item: 'minecraft:wool', data: 4}},
        result: {item: 'minecraft:carpet', data: 4, count: 3}
    },
    {
        type: 'crafting_shapeless',
        group: 'concrete_powder',
        ingredients: [
            {item: 'minecraft:dye', data: 11},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:sand', data: 0},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'},
            {item: 'minecraft:gravel'}
        ],
        result: {item: 'minecraft:concrete_powder', data: 4, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'yellow_dye',
        ingredients: [{item: 'minecraft:yellow_flower', data: 0}],
        result: {item: 'minecraft:dye', data: 11}
    },
    {
        type: 'crafting_shapeless',
        group: 'yellow_dye',
        ingredients: [{item: 'minecraft:double_plant', data: 0}],
        result: {item: 'minecraft:dye', data: 11, count: 2}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:glass'},
            X: {item: 'minecraft:dye', data: 11}
        },
        result: {item: 'minecraft:stained_glass', data: 4, count: 8}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_glass_pane',
        pattern: ['###', '###'],
        key: {'#': {item: 'minecraft:stained_glass', data: 4}},
        result: {item: 'minecraft:stained_glass_pane', data: 4, count: 16}
    },
    {
        type: 'crafting_shaped',
        group: 'stained_hardened_clay',
        pattern: ['###', '#X#', '###'],
        key: {
            '#': {item: 'minecraft:hardened_clay'},
            X: {item: 'minecraft:dye', data: 11}
        },
        result: {item: 'minecraft:stained_hardened_clay', data: 4, count: 8}
    },
    {
        type: 'crafting_shapeless',
        group: 'wool',
        ingredients: [
            {item: 'minecraft:dye', data: 11},
            {item: 'minecraft:wool', data: 0}
        ],
        result: {item: 'minecraft:wool', data: 4}
    },

];


export const items = {
    "minecraft:stone": "Камень",
    "minecraft:stone@1": "Гранит",
    "minecraft:stone@2": "Полированный гранит",
    "minecraft:stone@3": "Диорит",
    "minecraft:stone@4": "Полированный диорит",
    "minecraft:stone@5": "Андезит",
    "minecraft:stone@6": "Полированный андезит",
    "minecraft:grass": "Дёрн",
    "minecraft:dirt": "Земля",
    "minecraft:dirt@1": "Каменистая земля",
    "minecraft:dirt@2": "Подзол",
    "minecraft:cobblestone": "Булыжник",
    "minecraft:planks": "Дубовые доски",
    "minecraft:planks@1": "Еловые доски",
    "minecraft:planks@2": "Берёзовые доски",
    "minecraft:planks@3": "Доски из тропического дерева",
    "minecraft:planks@4": "Акациевые доски",
    "minecraft:planks@5": "Доски из тёмного дуба",
    "minecraft:sapling": "Саженец дуба",
    "minecraft:sapling@1": "Еловый саженец",
    "minecraft:sapling@2": "Саженец берёзы",
    "minecraft:sapling@3": "Саженец тропического дерева",
    "minecraft:sapling@4": "Саженец акации",
    "minecraft:sapling@5": "Саженец тёмного дуба",
    "minecraft:bedrock": "Бедрок",
    "minecraft:sand": "Песок",
    "minecraft:sand@1": "Красный песок",
    "minecraft:gravel": "Гравий",
    "minecraft:gold_ore": "Золотая руда",
    "minecraft:iron_ore": "Железная руда",
    "minecraft:coal_ore": "Каменный уголь",
    "minecraft:log": "Дуб",
    "minecraft:log@1": "Ель",
    "minecraft:log@2": "Берёза",
    "minecraft:log@3": "Тропическое дерево",
    "minecraft:leaves": "Дубовые листья",
    "minecraft:leaves@1": "Хвоя",
    "minecraft:leaves@2": "Берёзовые листья",
    "minecraft:leaves@3": "Листья тропического дерева",
    "minecraft:sponge": "Губка",
    "minecraft:sponge@1": "Мокрая губка",
    "minecraft:glass": "Стекло",
    "minecraft:lapis_ore": "Лазуритовая руда",
    "minecraft:lapis_block": "Лазуритовый блок",
    "minecraft:dispenser": "Раздатчик",
    "minecraft:sandstone": "Песчаник",
    "minecraft:sandstone@1": "Резной песчаник",
    "minecraft:sandstone@2": "Гладкий песчаник",
    "minecraft:noteblock": "Нотный блок",
    "minecraft:golden_rail": "Энергорельсы",
    "minecraft:detector_rail": "Рельсы с датчиком",
    "minecraft:sticky_piston": "Липкий поршень",
    "minecraft:web": "Паутина",
    "minecraft:tallgrass@1": "Трава",
    "minecraft:tallgrass@2": "Папоротник",
    "minecraft:deadbush": "Мёртвый куст",
    "minecraft:piston": "Поршень",
    "minecraft:wool": "Белая шерсть",
    "minecraft:wool@1": "Оранжевая шерсть",
    "minecraft:wool@2": "Пурпурная шерсть",
    "minecraft:wool@3": "Голубая шерсть",
    "minecraft:wool@4": "Жёлтая шерсть",
    "minecraft:wool@5": "Лаймовая шерсть",
    "minecraft:wool@6": "Розовая шерсть",
    "minecraft:wool@7": "Серая шерсть",
    "minecraft:wool@8": "Светло-серая шерсть",
    "minecraft:wool@9": "Бирюзовая шерсть",
    "minecraft:wool@10": "Фиолетовая шерсть",
    "minecraft:wool@11": "Синяя шерсть",
    "minecraft:wool@12": "Коричневая шерсть",
    "minecraft:wool@13": "Зелёная шерсть",
    "minecraft:wool@14": "Красная шерсть",
    "minecraft:wool@15": "Чёрная шерсть",
    "minecraft:yellow_flower": "Одуванчик",
    "minecraft:red_flower": "Мак",
    "minecraft:red_flower@1": "Синяя орхидея",
    "minecraft:red_flower@2": "Лук-батун",
    "minecraft:red_flower@3": "Голубой василёк",
    "minecraft:red_flower@4": "Красный тюльпан",
    "minecraft:red_flower@5": "Оранжевый тюльпан",
    "minecraft:red_flower@6": "Белый тюльпан",
    "minecraft:red_flower@7": "Розовый тюльпан",
    "minecraft:red_flower@8": "Ромашка",
    "minecraft:brown_mushroom": "Гриб",
    "minecraft:red_mushroom": "Гриб",
    "minecraft:gold_block": "Золотой блок",
    "minecraft:iron_block": "Железный блок",
    "minecraft:stone_slab": "Каменная плита",
    "minecraft:stone_slab@1": "Песчаниковая плита",
    "minecraft:stone_slab@3": "Булыжная плита",
    "minecraft:stone_slab@4": "Кирпичная плита",
    "minecraft:stone_slab@5": "Плита из каменных кирпичей",
    "minecraft:stone_slab@6": "Незеритовая плита",
    "minecraft:stone_slab@7": "Кварцевая плита",
    "minecraft:brick_block": "Кирпичи",
    "minecraft:tnt": "Динамит",
    "minecraft:bookshelf": "Книжная полка",
    "minecraft:mossy_cobblestone": "Замшелый булыжник",
    "minecraft:obsidian": "Обсидиан",
    "minecraft:torch": "Факел",
    "minecraft:mob_spawner": "Рассадник монстров",
    "minecraft:oak_stairs": "Дубовые ступеньки",
    "minecraft:chest": "Сундук",
    "minecraft:diamond_ore": "Алмазная руда",
    "minecraft:diamond_block": "Алмазный блок",
    "minecraft:crafting_table": "Верстак",
    "minecraft:farmland": "Пашня",
    "minecraft:furnace": "Печь",
    "minecraft:ladder": "Лестница",
    "minecraft:rail": "Рельсы",
    "minecraft:stone_stairs": "Булыжные ступеньки",
    "minecraft:lever": "Рычаг",
    "minecraft:stone_pressure_plate": "Каменная нажимная плита",
    "minecraft:wooden_pressure_plate": "Деревянная нажимная плита",
    "minecraft:redstone_ore": "Редстоуновая руда",
    "minecraft:redstone_torch": "Редстоуновый факел",
    "minecraft:stone_button": "Кнопка",
    "minecraft:snow_layer": "Снег",
    "minecraft:ice": "Лёд",
    "minecraft:snow": "Снег",
    "minecraft:cactus": "Кактус",
    "minecraft:clay": "Глина",
    "minecraft:jukebox": "Проигрыватель",
    "minecraft:fence": "Дубовый забор",
    "minecraft:pumpkin": "Тыква",
    "minecraft:netherrack": "Незерит",
    "minecraft:soul_sand": "Песок душ",
    "minecraft:glowstone": "Светокамень",
    "minecraft:lit_pumpkin": "Светильник Джека",
    "minecraft:stained_glass": "Белое стекло",
    "minecraft:stained_glass@1": "Оранжевое стекло",
    "minecraft:stained_glass@2": "Пурпурное стекло",
    "minecraft:stained_glass@3": "Голубое стекло",
    "minecraft:stained_glass@4": "Жёлтое стекло",
    "minecraft:stained_glass@5": "Лаймовое стекло",
    "minecraft:stained_glass@6": "Розовое стекло",
    "minecraft:stained_glass@7": "Серое стекло",
    "minecraft:stained_glass@8": "Светло-серое стекло",
    "minecraft:stained_glass@9": "Бирюзовое стекло",
    "minecraft:stained_glass@10": "Фиолетовое стекло",
    "minecraft:stained_glass@11": "Синее стекло",
    "minecraft:stained_glass@12": "Коричневое стекло",
    "minecraft:stained_glass@13": "Зелёное стекло",
    "minecraft:stained_glass@14": "Красное стекло",
    "minecraft:stained_glass@15": "Чёрное стекло",
    "minecraft:trapdoor": "Люк",
    "minecraft:monster_egg": "Камень с монстрами",
    "minecraft:monster_egg@1": "Булыжник с монстрами",
    "minecraft:monster_egg@2": "Каменный кирпич с монстрами",
    "minecraft:monster_egg@3": "Замшелый каменный кирпич с монстрами",
    "minecraft:monster_egg@4": "Потрескавшийся каменный кирпич с монстрами",
    "minecraft:monster_egg@5": "Резной каменный кирпич с монстрами",
    "minecraft:stonebrick": "Каменные кирпичи",
    "minecraft:stonebrick@1": "Замшелые каменные кирпичи",
    "minecraft:stonebrick@2": "Потрескавшиеся каменные кирпичи",
    "minecraft:stonebrick@3": "Резные каменные кирпичи",
    "minecraft:brown_mushroom_block": "Гриб",
    "minecraft:red_mushroom_block": "Гриб",
    "minecraft:iron_bars": "Железные прутья",
    "minecraft:glass_pane": "Стеклянная панель",
    "minecraft:melon_block": "Арбуз",
    "minecraft:vine": "Лианы",
    "minecraft:fence_gate": "Дубовая калитка",
    "minecraft:brick_stairs": "Кирпичные ступеньки",
    "minecraft:stone_brick_stairs": "Ступеньки из каменного кирпича",
    "minecraft:mycelium": "Мицелий",
    "minecraft:waterlily": "Кувшинка",
    "minecraft:nether_brick": "Незеритовые кирпичи",
    "minecraft:nether_brick_fence": "Незеритовый забор",
    "minecraft:nether_brick_stairs": "Незеритовые ступеньки",
    "minecraft:enchanting_table": "Чародейский стол",
    "minecraft:end_portal_frame": "Портал в Энд",
    "minecraft:end_stone": "Эндерняк",
    "minecraft:dragon_egg": "Яйцо дракона",
    "minecraft:redstone_lamp": "Редстоуновый фонарь",
    "minecraft:wooden_slab": "Дубовая плита",
    "minecraft:wooden_slab@1": "Еловая плита",
    "minecraft:wooden_slab@2": "Берёзовая плита",
    "minecraft:wooden_slab@3": "Плита из тропического дерева",
    "minecraft:wooden_slab@4": "Акациевая плита",
    "minecraft:wooden_slab@5": "Плита из тёмного дуба",
    "minecraft:sandstone_stairs": "Песчаниковые ступеньки",
    "minecraft:emerald_ore": "Изумрудная руда",
    "minecraft:ender_chest": "Эндер-сундук",
    "minecraft:tripwire_hook": "Крюк",
    "minecraft:emerald_block": "Изумрудный блок",
    "minecraft:spruce_stairs": "Еловые ступеньки",
    "minecraft:birch_stairs": "Берёзовые ступеньки",
    "minecraft:jungle_stairs": "Ступеньки из тропического дерева",
    "minecraft:command_block": "Командный блок",
    "minecraft:beacon": "Маяк",
    "minecraft:cobblestone_wall": "Булыжная ограда",
    "minecraft:cobblestone_wall@1": "Замшелая булыжная ограда",
    "minecraft:wooden_button": "Кнопка",
    "minecraft:anvil": "Наковальня",
    "minecraft:anvil@1": "Повреждённая наковальня",
    "minecraft:anvil@2": "Сильно повреждённая наковальня",
    "minecraft:trapped_chest": "Сундук-ловушка",
    "minecraft:light_weighted_pressure_plate": "Весовая пластина",
    "minecraft:heavy_weighted_pressure_plate": "Большегрузная весовая пластина",
    "minecraft:daylight_detector": "Датчик дневного света",
    "minecraft:redstone_block": "Редстоуновый блок",
    "minecraft:quartz_ore": "Незер-кварцевая руда",
    "minecraft:hopper": "Воронка",
    "minecraft:quartz_block": "Кварцевый блок",
    "minecraft:quartz_block@1": "Резной кварцевый блок",
    "minecraft:quartz_block@2": "Кварцевая колонна",
    "minecraft:quartz_stairs": "Кварцевые ступеньки",
    "minecraft:activator_rail": "Активирующие рельсы",
    "minecraft:dropper": "Выбрасыватель",
    "minecraft:stained_hardened_clay": "Белая керамика",
    "minecraft:stained_hardened_clay@1": "Оранжевая керамика",
    "minecraft:stained_hardened_clay@2": "Пурпурная керамика",
    "minecraft:stained_hardened_clay@3": "Голубая керамика",
    "minecraft:stained_hardened_clay@4": "Жёлтая керамика",
    "minecraft:stained_hardened_clay@5": "Лаймовая керамика",
    "minecraft:stained_hardened_clay@6": "Розовая керамика",
    "minecraft:stained_hardened_clay@7": "Серая керамика",
    "minecraft:stained_hardened_clay@8": "Светло-серая керамика",
    "minecraft:stained_hardened_clay@9": "Бирюзовая керамика",
    "minecraft:stained_hardened_clay@10": "Фиолетовая керамика",
    "minecraft:stained_hardened_clay@11": "Синяя керамика",
    "minecraft:stained_hardened_clay@12": "Коричневая керамика",
    "minecraft:stained_hardened_clay@13": "Зелёная керамика",
    "minecraft:stained_hardened_clay@14": "Красная керамика",
    "minecraft:stained_hardened_clay@15": "Чёрная керамика",
    "minecraft:stained_glass_pane": "Белая стеклянная панель",
    "minecraft:stained_glass_pane@1": "Оранжевая стеклянная панель",
    "minecraft:stained_glass_pane@2": "Пурпурная стеклянная панель",
    "minecraft:stained_glass_pane@3": "Голубая стеклянная панель",
    "minecraft:stained_glass_pane@4": "Жёлтая стеклянная панель",
    "minecraft:stained_glass_pane@5": "Лаймовая стеклянная панель",
    "minecraft:stained_glass_pane@6": "Розовая стеклянная панель",
    "minecraft:stained_glass_pane@7": "Серая стеклянная панель",
    "minecraft:stained_glass_pane@8": "Светло-серая стеклянная панель",
    "minecraft:stained_glass_pane@9": "Бирюзовая стеклянная панель",
    "minecraft:stained_glass_pane@10": "Фиолетовая стеклянная панель",
    "minecraft:stained_glass_pane@11": "Синяя стеклянная панель",
    "minecraft:stained_glass_pane@12": "Коричневая стеклянная панель",
    "minecraft:stained_glass_pane@13": "Зелёная стеклянная панель",
    "minecraft:stained_glass_pane@14": "Красная стеклянная панель",
    "minecraft:stained_glass_pane@15": "Чёрная стеклянная панель",
    "minecraft:leaves2": "Листья акации",
    "minecraft:leaves2@1": "Листья тёмного дуба",
    "minecraft:log2": "Акация",
    "minecraft:log2@1": "Тёмный дуб",
    "minecraft:acacia_stairs": "Акациевые ступеньки",
    "minecraft:dark_oak_stairs": "Ступеньки из тёмного дуба",
    "minecraft:slime": "Блок слизи",
    "minecraft:barrier": "Барьер",
    "minecraft:iron_trapdoor": "Железный люк",
    "minecraft:prismarine": "Призмарин",
    "minecraft:prismarine@1": "Призмариновые кирпичи",
    "minecraft:prismarine@2": "Тёмный призмарин",
    "minecraft:sea_lantern": "Морской фонарь",
    "minecraft:hay_block": "Сноп сена",
    "minecraft:carpet": "Белый ковёр",
    "minecraft:carpet@1": "Оранжевый ковёр",
    "minecraft:carpet@2": "Пурпурный ковёр",
    "minecraft:carpet@3": "Голубой ковёр",
    "minecraft:carpet@4": "Жёлтый ковёр",
    "minecraft:carpet@5": "Лаймовый ковёр",
    "minecraft:carpet@6": "Розовый ковёр",
    "minecraft:carpet@7": "Серый ковёр",
    "minecraft:carpet@8": "Светло-серый ковёр",
    "minecraft:carpet@9": "Бирюзовый ковёр",
    "minecraft:carpet@10": "Фиолетовый ковёр",
    "minecraft:carpet@11": "Синий ковёр",
    "minecraft:carpet@12": "Коричневый ковёр",
    "minecraft:carpet@13": "Зелёный ковёр",
    "minecraft:carpet@14": "Красный ковёр",
    "minecraft:carpet@15": "Чёрный ковёр",
    "minecraft:hardened_clay": "Терракота",
    "minecraft:coal_block": "Угольный блок",
    "minecraft:packed_ice": "Плотный лёд",
    "minecraft:double_plant": "Подсолнух",
    "minecraft:double_plant@1": "Сирень",
    "minecraft:double_plant@2": "Высокая трава",
    "minecraft:double_plant@3": "Раскидистый папоротник",
    "minecraft:double_plant@4": "Розовый куст",
    "minecraft:double_plant@5": "Пион",
    "minecraft:red_sandstone": "Красный песчаник",
    "minecraft:red_sandstone@1": "Резной красный песчаник",
    "minecraft:red_sandstone@2": "Гладкий красный песчаник",
    "minecraft:red_sandstone_stairs": "Ступеньки из красного песчаника",
    "minecraft:stone_slab2": "Плита из красного песчаника",
    "minecraft:spruce_fence_gate": "Еловая калитка",
    "minecraft:birch_fence_gate": "Берёзовая калитка",
    "minecraft:jungle_fence_gate": "Калитка из тропического дерева",
    "minecraft:dark_oak_fence_gate": "Калитка из тёмного дуба",
    "minecraft:acacia_fence_gate": "Акациевая калитка",
    "minecraft:spruce_fence": "Еловый забор",
    "minecraft:birch_fence": "Берёзовый забор",
    "minecraft:jungle_fence": "Забор из тропического дерева",
    "minecraft:dark_oak_fence": "Забор из тёмного дуба",
    "minecraft:acacia_fence": "Акациевый забор",
    "minecraft:end_rod": "Стержень Энда",
    "minecraft:chorus_plant": "Хорус",
    "minecraft:chorus_flower": "Цветок хоруса",
    "minecraft:purpur_block": "Пурпур",
    "minecraft:purpur_pillar": "Пурпуровый пилон",
    "minecraft:purpur_stairs": "Пурпуровые ступеньки",
    "minecraft:purpur_slab": "Пурпуровая плита",
    "minecraft:end_bricks": "Эндерняковые кирпичи",
    "minecraft:grass_path": "Тропа",
    "minecraft:repeating_command_block": "Повторяющий командный блок",
    "minecraft:chain_command_block": "Последовательный командный блок",
    "minecraft:magma": "Магма",
    "minecraft:nether_wart_block": "Блок нароста из Незера",
    "minecraft:red_nether_brick": "Красный незеритовый кирпич",
    "minecraft:bone_block": "Костный блок",
    "minecraft:structure_void": "Пустой блок",
    "minecraft:observer": "Наблюдатель",
    "minecraft:white_shulker_box": "Белый шалкеровый ящик",
    "minecraft:orange_shulker_box": "Оранжевый шалкеровый ящик",
    "minecraft:magenta_shulker_box": "Пурпурный шалкеровый ящик",
    "minecraft:light_blue_shulker_box": "Голубой шалкеровый ящик",
    "minecraft:yellow_shulker_box": "Жёлтый шалкеровый ящик",
    "minecraft:lime_shulker_box": "Лаймовый шалкеровый ящик",
    "minecraft:pink_shulker_box": "Розовый шалкеровый ящик",
    "minecraft:gray_shulker_box": "Серый шалкеровый ящик",
    "minecraft:silver_shulker_box": "Светло-серый шалкеровый ящик",
    "minecraft:cyan_shulker_box": "Бирюзовый шалкеровый ящик",
    "minecraft:purple_shulker_box": "Фиолетовый шалкеровый ящик",
    "minecraft:blue_shulker_box": "Синий шалкеровый ящик",
    "minecraft:brown_shulker_box": "Коричневый шалкеровый ящик",
    "minecraft:green_shulker_box": "Зелёный шалкеровый ящик",
    "minecraft:red_shulker_box": "Красный шалкеровый ящик",
    "minecraft:black_shulker_box": "Чёрный шалкеровый ящик",
    "minecraft:white_glazed_terracotta": "Белая глазурованная керамика",
    "minecraft:orange_glazed_terracotta": "Оранжевая глазурованная керамика",
    "minecraft:magenta_glazed_terracotta": "Пурпурная глазурованная керамика",
    "minecraft:light_blue_glazed_terracotta": "Голубая глазурованная керамика",
    "minecraft:yellow_glazed_terracotta": "Жёлтая глазурованная керамика",
    "minecraft:lime_glazed_terracotta": "Лаймовая глазурованная керамика",
    "minecraft:pink_glazed_terracotta": "Розовая глазурованная керамика",
    "minecraft:gray_glazed_terracotta": "Серая глазурованная керамика",
    "minecraft:silver_glazed_terracotta": "Светло-серая глазурованная керамика",
    "minecraft:cyan_glazed_terracotta": "Бирюзовая глазурованная керамика",
    "minecraft:purple_glazed_terracotta": "Фиолетовая глазурованная керамика",
    "minecraft:blue_glazed_terracotta": "Синяя глазурованная керамика",
    "minecraft:brown_glazed_terracotta": "Коричневая глазурованная керамика",
    "minecraft:green_glazed_terracotta": "Зелёная глазурованная керамика",
    "minecraft:red_glazed_terracotta": "Красная глазурованная керамика",
    "minecraft:black_glazed_terracotta": "Чёрная глазурованная керамика",
    "minecraft:concrete": "Белый бетон",
    "minecraft:concrete@1": "Оранжевый бетон",
    "minecraft:concrete@2": "Пурпурный бетон",
    "minecraft:concrete@3": "Голубой бетон",
    "minecraft:concrete@4": "Жёлтый бетон",
    "minecraft:concrete@5": "Лаймовый бетон",
    "minecraft:concrete@6": "Розовый бетон",
    "minecraft:concrete@7": "Серый бетон",
    "minecraft:concrete@8": "Светло-серый бетон",
    "minecraft:concrete@9": "Бирюзовый бетон",
    "minecraft:concrete@10": "Фиолетовый бетон",
    "minecraft:concrete@11": "Синий бетон",
    "minecraft:concrete@12": "Коричневый бетон",
    "minecraft:concrete@13": "Зелёный бетон",
    "minecraft:concrete@14": "Красный бетон",
    "minecraft:concrete@15": "Чёрный бетон",
    "minecraft:concrete_powder": "Белый цемент",
    "minecraft:concrete_powder@1": "Оранжевый цемент",
    "minecraft:concrete_powder@2": "Пурпурный цемент",
    "minecraft:concrete_powder@3": "Голубой цемент",
    "minecraft:concrete_powder@4": "Жёлтый цемент",
    "minecraft:concrete_powder@5": "Лаймовый цемент",
    "minecraft:concrete_powder@6": "Розовый цемент",
    "minecraft:concrete_powder@7": "Серый цемент",
    "minecraft:concrete_powder@8": "Светло-серый цемент",
    "minecraft:concrete_powder@9": "Бирюзовый цемент",
    "minecraft:concrete_powder@10": "Фиолетовый цемент",
    "minecraft:concrete_powder@11": "Синий цемент",
    "minecraft:concrete_powder@12": "Коричневый цемент",
    "minecraft:concrete_powder@13": "Зелёный цемент",
    "minecraft:concrete_powder@14": "Красный цемент",
    "minecraft:concrete_powder@15": "Чёрный цемент",
    "minecraft:structure_block": "Блок-конструктор",
    "minecraft:iron_shovel": "Железная лопата",
    "minecraft:iron_pickaxe": "Железная кирка",
    "minecraft:iron_axe": "Железный топор",
    "minecraft:flint_and_steel": "Огниво",
    "minecraft:apple": "Яблоко",
    "minecraft:bow": "Лук",
    "minecraft:arrow": "Стрела",
    "minecraft:coal": "Уголь",
    "minecraft:coal@1": "Древесный уголь",
    "minecraft:diamond": "Алмаз",
    "minecraft:iron_ingot": "Железный слиток",
    "minecraft:gold_ingot": "Золотой слиток",
    "minecraft:iron_sword": "Железный меч",
    "minecraft:wooden_sword": "Деревянный меч",
    "minecraft:wooden_shovel": "Деревянная лопата",
    "minecraft:wooden_pickaxe": "Деревянная кирка",
    "minecraft:wooden_axe": "Деревянный топор",
    "minecraft:stone_sword": "Каменный меч",
    "minecraft:stone_shovel": "Каменная лопата",
    "minecraft:stone_pickaxe": "Каменная кирка",
    "minecraft:stone_axe": "Каменный топор",
    "minecraft:diamond_sword": "Алмазный меч",
    "minecraft:diamond_shovel": "Алмазная лопата",
    "minecraft:diamond_pickaxe": "Алмазная кирка",
    "minecraft:diamond_axe": "Алмазный топор",
    "minecraft:stick": "Палка",
    "minecraft:bowl": "Миска",
    "minecraft:mushroom_stew": "Тушёные грибы",
    "minecraft:golden_sword": "Золотой меч",
    "minecraft:golden_shovel": "Золотая лопата",
    "minecraft:golden_pickaxe": "Золотая кирка",
    "minecraft:golden_axe": "Золотой топор",
    "minecraft:string": "Нить",
    "minecraft:feather": "Перо",
    "minecraft:gunpowder": "Порох",
    "minecraft:wooden_hoe": "Деревянная мотыга",
    "minecraft:stone_hoe": "Каменная мотыга",
    "minecraft:iron_hoe": "Железная мотыга",
    "minecraft:diamond_hoe": "Алмазная мотыга",
    "minecraft:golden_hoe": "Золотая мотыга",
    "minecraft:wheat_seeds": "Семена пшеницы",
    "minecraft:wheat": "Пшеница",
    "minecraft:bread": "Хлеб",
    "minecraft:leather_helmet": "Кожаный шлем",
    "minecraft:leather_chestplate": "Кожаная куртка",
    "minecraft:leather_leggings": "Кожаные штаны",
    "minecraft:leather_boots": "Кожаные ботинки",
    "minecraft:chainmail_helmet": "Койф",
    "minecraft:chainmail_chestplate": "Кольчуга",
    "minecraft:chainmail_leggings": "Кольчужные поножи",
    "minecraft:chainmail_boots": "Кольчужные ботинки",
    "minecraft:iron_helmet": "Железный шлем",
    "minecraft:iron_chestplate": "Железный нагрудник",
    "minecraft:iron_leggings": "Железные поножи",
    "minecraft:iron_boots": "Железные ботинки",
    "minecraft:diamond_helmet": "Алмазный шлем",
    "minecraft:diamond_chestplate": "Алмазный нагрудник",
    "minecraft:diamond_leggings": "Алмазные поножи",
    "minecraft:diamond_boots": "Алмазные ботинки",
    "minecraft:golden_helmet": "Золотой шлем",
    "minecraft:golden_chestplate": "Золотой нагрудник",
    "minecraft:golden_leggings": "Золотые поножи",
    "minecraft:golden_boots": "Золотые ботинки",
    "minecraft:flint": "Кремень",
    "minecraft:porkchop": "Сырая свинина",
    "minecraft:cooked_porkchop": "Жареная свинина",
    "minecraft:painting": "Картина",
    "minecraft:golden_apple": "Золотое яблоко",
    "minecraft:golden_apple@1": "Золотое яблоко",
    "minecraft:sign": "Табличка",
    "minecraft:wooden_door": "Дубовая дверь",
    "minecraft:bucket": "Ведро",
    "minecraft:water_bucket": "Ведро воды",
    "minecraft:lava_bucket": "Ведро лавы",
    "minecraft:minecart": "Вагонетка",
    "minecraft:saddle": "Седло",
    "minecraft:iron_door": "Железная дверь",
    "minecraft:redstone": "Редстоун",
    "minecraft:snowball": "Снежок",
    "minecraft:boat": "Дубовая лодка",
    "minecraft:leather": "Кожа",
    "minecraft:milk_bucket": "Молоко",
    "minecraft:brick": "Кирпич",
    "minecraft:clay_ball": "Глина",
    "minecraft:reeds": "Сахарный тростник",
    "minecraft:paper": "Бумага",
    "minecraft:book": "Книга",
    "minecraft:slime_ball": "Сгусток слизи",
    "minecraft:chest_minecart": "Грузовая вагонетка",
    "minecraft:furnace_minecart": "Самоходная вагонетка",
    "minecraft:egg": "Яйцо",
    "minecraft:compass": "Компас",
    "minecraft:fishing_rod": "Удочка",
    "minecraft:clock": "Часы",
    "minecraft:glowstone_dust": "Светокаменная пыль",
    "minecraft:fish": "Сырая треска",
    "minecraft:fish@1": "Сырой лосось",
    "minecraft:fish@2": "Рыба-клоун",
    "minecraft:fish@3": "Иглобрюх",
    "minecraft:cooked_fish": "Жареная треска",
    "minecraft:cooked_fish@1": "Жареный лосось",
    "minecraft:dye": "Чернильный мешок",
    "minecraft:dye@1": "Красный краситель",
    "minecraft:dye@2": "Зелёный краситель",
    "minecraft:dye@3": "Какао-бобы",
    "minecraft:dye@4": "Лазурит",
    "minecraft:dye@5": "Фиолетовый краситель",
    "minecraft:dye@6": "Бирюзовый краситель",
    "minecraft:dye@7": "Светло-серый краситель",
    "minecraft:dye@8": "Серый краситель",
    "minecraft:dye@9": "Розовый краситель",
    "minecraft:dye@10": "Лаймовый краситель",
    "minecraft:dye@11": "Жёлтый краситель",
    "minecraft:dye@12": "Голубой краситель",
    "minecraft:dye@13": "Пурпурный краситель",
    "minecraft:dye@14": "Оранжевый краситель",
    "minecraft:dye@15": "Костная мука",
    "minecraft:bone": "Кость",
    "minecraft:sugar": "Сахар",
    "minecraft:cake": "Торт",
    "minecraft:bed": "Белая кровать",
    "minecraft:bed@1": "Оранжевая кровать",
    "minecraft:bed@2": "Пурпурная кровать",
    "minecraft:bed@3": "Голубая кровать",
    "minecraft:bed@4": "Жёлтая кровать",
    "minecraft:bed@5": "Лаймовая кровать",
    "minecraft:bed@6": "Розовая кровать",
    "minecraft:bed@7": "Серая кровать",
    "minecraft:bed@8": "Светло-серая кровать",
    "minecraft:bed@9": "Бирюзовая кровать",
    "minecraft:bed@10": "Фиолетовая кровать",
    "minecraft:bed@11": "Синяя кровать",
    "minecraft:bed@12": "Коричневая кровать",
    "minecraft:bed@13": "Зелёная кровать",
    "minecraft:bed@14": "Красная кровать",
    "minecraft:bed@15": "Чёрная кровать",
    "minecraft:repeater": "Редстоуновый повторитель",
    "minecraft:cookie": "Печенье",
    "minecraft:filled_map": "Карта",
    "minecraft:shears": "Ножницы",
    "minecraft:melon": "Арбуз",
    "minecraft:pumpkin_seeds": "Семена тыквы",
    "minecraft:melon_seeds": "Семена арбуза",
    "minecraft:beef": "Сырая говядина",
    "minecraft:cooked_beef": "Стейк",
    "minecraft:chicken": "Курятина",
    "minecraft:cooked_chicken": "Жареная курица",
    "minecraft:rotten_flesh": "Гнилая плоть",
    "minecraft:ender_pearl": "Эндер-жемчуг",
    "minecraft:blaze_rod": "Огненный стержень",
    "minecraft:ghast_tear": "Слеза гаста",
    "minecraft:gold_nugget": "Кусочек золота",
    "minecraft:nether_wart": "Нарост из Незера",
    // "minecraft:potion@0 {Potion:"water"}": "Пузырёк воды",
    // "minecraft:potion@0 {Potion:"mundane"}": "Заурядное зелье",
    // "minecraft:potion@0 {Potion:"thick"}": "Густое зелье",
    // "minecraft:potion@0 {Potion:"awkward"}": "Мутное зелье",
    // "minecraft:potion@0 {Potion:"night_vision"}": "Зелье ночного зрения",
    // "minecraft:potion@0 {Potion:"long_night_vision"}": "Зелье ночного зрения",
    // "minecraft:potion@0 {Potion:"invisibility"}": "Зелье невидимости",
    // "minecraft:potion@0 {Potion:"long_invisibility"}": "Зелье невидимости",
    // "minecraft:potion@0 {Potion:"leaping"}": "Зелье прыгучести",
    // "minecraft:potion@0 {Potion:"long_leaping"}": "Зелье прыгучести",
    // "minecraft:potion@0 {Potion:"strong_leaping"}": "Зелье прыгучести",
    // "minecraft:potion@0 {Potion:"fire_resistance"}": "Зелье огнестойкости",
    // "minecraft:potion@0 {Potion:"long_fire_resistance"}": "Зелье огнестойкости",
    // "minecraft:potion@0 {Potion:"swiftness"}": "Зелье стремительности",
    // "minecraft:potion@0 {Potion:"long_swiftness"}": "Зелье стремительности",
    // "minecraft:potion@0 {Potion:"strong_swiftness"}": "Зелье стремительности",
    // "minecraft:potion@0 {Potion:"slowness"}": "Зелье замедления",
    // "minecraft:potion@0 {Potion:"long_slowness"}": "Зелье замедления",
    // "minecraft:potion@0 {Potion:"water_breathing"}": "Зелье водного дыхания",
    // "minecraft:potion@0 {Potion:"long_water_breathing"}": "Зелье водного дыхания",
    // "minecraft:potion@0 {Potion:"healing"}": "Зелье исцеления",
    // "minecraft:potion@0 {Potion:"strong_healing"}": "Зелье исцеления",
    // "minecraft:potion@0 {Potion:"harming"}": "Зелье вреда",
    // "minecraft:potion@0 {Potion:"strong_harming"}": "Зелье вреда",
    // "minecraft:potion@0 {Potion:"poison"}": "Зелье отравления",
    // "minecraft:potion@0 {Potion:"long_poison"}": "Зелье отравления",
    // "minecraft:potion@0 {Potion:"strong_poison"}": "Зелье отравления",
    // "minecraft:potion@0 {Potion:"regeneration"}": "Зелье регенерации",
    // "minecraft:potion@0 {Potion:"long_regeneration"}": "Зелье регенерации",
    // "minecraft:potion@0 {Potion:"strong_regeneration"}": "Зелье регенерации",
    // "minecraft:potion@0 {Potion:"strength"}": "Зелье силы",
    // "minecraft:potion@0 {Potion:"long_strength"}": "Зелье силы",
    // "minecraft:potion@0 {Potion:"strong_strength"}": "Зелье силы",
    // "minecraft:potion@0 {Potion:"weakness"}": "Зелье слабости",
    // "minecraft:potion@0 {Potion:"long_weakness"}": "Зелье слабости",
    // "minecraft:potion@0 {Potion:"luck"}": "Зелье удачи",
    "minecraft:glass_bottle": "Пузырёк",
    "minecraft:spider_eye": "Паучий глаз",
    "minecraft:fermented_spider_eye": "Маринованный паучий глаз",
    "minecraft:blaze_powder": "Огненный порошок",
    "minecraft:magma_cream": "Сгусток магмы",
    "minecraft:brewing_stand": "Зельеварка",
    "minecraft:cauldron": "Котёл",
    "minecraft:ender_eye": "Око Эндера",
    "minecraft:speckled_melon": "Сверкающий арбуз",
    "minecraft:spawn_egg@0 {EntityTag:{id:bat}}": "Яйцо призыва — Летучая мышь",
    "minecraft:spawn_egg@0 {EntityTag:{id:blaze}}": "Яйцо призыва — Всполох",
    "minecraft:spawn_egg@0 {EntityTag:{id:cave_spider}}": "Яйцо призыва — Пещерный паук",
    "minecraft:spawn_egg@0 {EntityTag:{id:chicken}}": "Яйцо призыва — Курица",
    "minecraft:spawn_egg@0 {EntityTag:{id:cow}}": "Яйцо призыва — Корова",
    "minecraft:spawn_egg@0 {EntityTag:{id:creeper}}": "Яйцо призыва — Крипер",
    "minecraft:spawn_egg@0 {EntityTag:{id:donkey}}": "Яйцо призыва — Осёл",
    "minecraft:spawn_egg@0 {EntityTag:{id:elder_guardian}}": "Яйцо призыва — Древний страж",
    "minecraft:spawn_egg@0 {EntityTag:{id:enderman}}": "Яйцо призыва — Эндермен",
    "minecraft:spawn_egg@0 {EntityTag:{id:endermite}}": "Яйцо призыва — Эндермит",
    "minecraft:spawn_egg@0 {EntityTag:{id:evocation_illager}}": "Яйцо призыва — Заклинатель",
    "minecraft:spawn_egg@0 {EntityTag:{id:ghast}}": "Яйцо призыва — Гаст",
    "minecraft:spawn_egg@0 {EntityTag:{id:guardian}}": "Яйцо призыва — Страж",
    "minecraft:spawn_egg@0 {EntityTag:{id:horse}}": "Яйцо призыва — Лошадь",
    "minecraft:spawn_egg@0 {EntityTag:{id:husk}}": "Яйцо призыва — Кадавр",
    "minecraft:spawn_egg@0 {EntityTag:{id:llama}}": "Яйцо призыва — Лама",
    "minecraft:spawn_egg@0 {EntityTag:{id:magma_cube}}": "Яйцо призыва — Магмовый куб",
    "minecraft:spawn_egg@0 {EntityTag:{id:mooshroom}}": "Яйцо призыва — Муухомор",
    "minecraft:spawn_egg@0 {EntityTag:{id:mule}}": "Яйцо призыва — Мул",
    "minecraft:spawn_egg@0 {EntityTag:{id:ocelot}}": "Яйцо призыва — Оцелот",
    "minecraft:spawn_egg@0 {EntityTag:{id:parrot}}": "Яйцо призыва — Попугай",
    "minecraft:spawn_egg@0 {EntityTag:{id:pig}}": "Яйцо призыва — Свинья",
    "minecraft:spawn_egg@0 {EntityTag:{id:polar_bear}}": "Яйцо призыва — Белый медведь",
    "minecraft:spawn_egg@0 {EntityTag:{id:rabbit}}": "Яйцо призыва — Кролик",
    "minecraft:spawn_egg@0 {EntityTag:{id:sheep}}": "Яйцо призыва — Овца",
    "minecraft:spawn_egg@0 {EntityTag:{id:shulker}}": "Яйцо призыва — Шалкер",
    "minecraft:spawn_egg@0 {EntityTag:{id:silverfish}}": "Яйцо призыва — Чешуйница",
    "minecraft:spawn_egg@0 {EntityTag:{id:skeleton}}": "Яйцо призыва — Скелет",
    "minecraft:spawn_egg@0 {EntityTag:{id:skeleton_horse}}": "Яйцо призыва — Лошадь-скелет",
    "minecraft:spawn_egg@0 {EntityTag:{id:slime}}": "Яйцо призыва — Слизень",
    "minecraft:spawn_egg@0 {EntityTag:{id:spider}}": "Яйцо призыва — Паук",
    "minecraft:spawn_egg@0 {EntityTag:{id:squid}}": "Яйцо призыва — Спрут",
    "minecraft:spawn_egg@0 {EntityTag:{id:stray}}": "Яйцо призыва — Зимогор",
    "minecraft:spawn_egg@0 {EntityTag:{id:vex}}": "Яйцо призыва — Вредина",
    "minecraft:spawn_egg@0 {EntityTag:{id:villager}}": "Яйцо призыва — Крестьянин",
    "minecraft:spawn_egg@0 {EntityTag:{id:vindication_illager}}": "Яйцо призыва — Поборник",
    "minecraft:spawn_egg@0 {EntityTag:{id:witch}}": "Яйцо призыва — Ведьма",
    "minecraft:spawn_egg@0 {EntityTag:{id:wither_skeleton}}": "Яйцо призыва — Визер-скелет",
    "minecraft:spawn_egg@0 {EntityTag:{id:wolf}}": "Яйцо призыва — Волк",
    "minecraft:spawn_egg@0 {EntityTag:{id:zombie}}": "Яйцо призыва — Зомби",
    "minecraft:spawn_egg@0 {EntityTag:{id:zombie_horse}}": "Яйцо призыва — Лошадь-зомби",
    "minecraft:spawn_egg@0 {EntityTag:{id:zombie_pigman}}": "Яйцо призыва — Свинозомби",
    "minecraft:spawn_egg@0 {EntityTag:{id:zombie_villager}}": "Яйцо призыва — Зомби-крестьянин",
    "minecraft:experience_bottle": "Пузырёк опыта",
    "minecraft:fire_charge": "Огненный заряд",
    "minecraft:writable_book": "Книга и перо",
    "minecraft:written_book": "Завершённая книга",
    "minecraft:emerald": "Изумруд",
    "minecraft:item_frame": "Рамка",
    "minecraft:flower_pot": "Цветочный горшок",
    "minecraft:carrot": "Морковь",
    "minecraft:potato": "Картофель",
    "minecraft:baked_potato": "Печёный картофель",
    "minecraft:poisonous_potato": "Ядовитый картофель",
    "minecraft:map": "Чистая карта",
    "minecraft:golden_carrot": "Золотая морковь",
    "minecraft:skull": "Череп",
    "minecraft:skull@1": "Череп визер-скелета",
    "minecraft:skull@2": "Голова зомби",
    "minecraft:skull@3": "Голова",
    "minecraft:skull@4": "Голова крипера",
    "minecraft:skull@5": "Голова дракона",
    "minecraft:carrot_on_a_stick": "Удочка с морковкой",
    "minecraft:nether_star": "Звезда из Незера",
    "minecraft:pumpkin_pie": "Тыквенный пирог",
    "minecraft:fireworks": "Фейерверк",
    "minecraft:firework_charge": "Пиротехническая звезда",
    "minecraft:comparator": "Редстоуновый компаратор",
    "minecraft:netherbrick": "Незеритовый кирпич",
    "minecraft:quartz": "Незер-кварц",
    "minecraft:tnt_minecart": "Вагонетка с динамитом",
    "minecraft:hopper_minecart": "Загрузочная вагонетка",
    "minecraft:prismarine_shard": "Осколок призмарина",
    "minecraft:prismarine_crystals": "Кристалл призмарина",
    "minecraft:rabbit": "Сырая крольчатина",
    "minecraft:cooked_rabbit": "Жареная крольчатина",
    "minecraft:rabbit_stew": "Тушёный кролик",
    "minecraft:rabbit_foot": "Кроличья лапка",
    "minecraft:rabbit_hide": "Кроличья шкурка",
    "minecraft:armor_stand": "Стойка для брони",
    "minecraft:iron_horse_armor": "Железная конская броня",
    "minecraft:golden_horse_armor": "Золотая конская броня",
    "minecraft:diamond_horse_armor": "Алмазная конская броня",
    "minecraft:lead": "Поводок",
    "minecraft:name_tag": "Бирка",
    "minecraft:command_block_minecart": "Вагонетка с командным блоком",
    "minecraft:mutton": "Сырая баранина",
    "minecraft:cooked_mutton": "Жареная баранина",
    "minecraft:banner@15": "Белый флаг",
    "minecraft:banner@14": "Оранжевый флаг",
    "minecraft:banner@13": "Пурпурный флаг",
    "minecraft:banner@12": "Голубой флаг",
    "minecraft:banner@11": "Жёлтый флаг",
    "minecraft:banner@10": "Лаймовый флаг",
    "minecraft:banner@9": "Розовый флаг",
    "minecraft:banner@8": "Серый флаг",
    "minecraft:banner@7": "Светло-серый флаг",
    "minecraft:banner@6": "Бирюзовый флаг",
    "minecraft:banner@5": "Фиолетовый флаг",
    "minecraft:banner@4": "Синий флаг",
    "minecraft:banner@3": "Коричневый флаг",
    "minecraft:banner@2": "Зелёный флаг",
    "minecraft:banner@1": "Красный флаг",
    "minecraft:banner": "Чёрный флаг",
    "minecraft:end_crystal": "Кристалл Энда",
    "minecraft:spruce_door": "Еловая дверь",
    "minecraft:birch_door": "Берёзовая дверь",
    "minecraft:jungle_door": "Дверь из тропического дерева",
    "minecraft:acacia_door": "Акациевая дверь",
    "minecraft:dark_oak_door": "Дверь из тёмного дуба",
    "minecraft:chorus_fruit": "Плод хоруса",
    "minecraft:chorus_fruit_popped": "Прожаренный плод хоруса",
    "minecraft:beetroot": "Свёкла",
    "minecraft:beetroot_seeds": "Семена свёклы",
    "minecraft:beetroot_soup": "Свекольный суп",
    "minecraft:dragon_breath": "Драконье дыхание",
    // "minecraft:splash_potion@0 {Potion:"water"}": "Взрывной пузырёк воды",
    // "minecraft:splash_potion@0 {Potion:"mundane"}": "Заурядное взрывное зелье",
    // "minecraft:splash_potion@0 {Potion:"thick"}": "Густое взрывное зелье",
    // "minecraft:splash_potion@0 {Potion:"awkward"}": "Взрывное мутное зелье",
    // "minecraft:splash_potion@0 {Potion:"night_vision"}": "Взрывное зелье ночного зрения",
    // "minecraft:splash_potion@0 {Potion:"long_night_vision"}": "Взрывное зелье ночного зрения",
    // "minecraft:splash_potion@0 {Potion:"invisibility"}": "Взрывное зелье невидимости",
    // "minecraft:splash_potion@0 {Potion:"long_invisibility"}": "Взрывное зелье невидимости",
    // "minecraft:splash_potion@0 {Potion:"leaping"}": "Взрывное зелье прыгучести",
    // "minecraft:splash_potion@0 {Potion:"long_leaping"}": "Взрывное зелье прыгучести",
    // "minecraft:splash_potion@0 {Potion:"strong_leaping"}": "Взрывное зелье прыгучести",
    // "minecraft:splash_potion@0 {Potion:"fire_resistance"}": "Взрывное зелье огнестойкости",
    // "minecraft:splash_potion@0 {Potion:"long_fire_resistance"}": "Взрывное зелье огнестойкости",
    // "minecraft:splash_potion@0 {Potion:"swiftness"}": "Взрывное зелье стремительности",
    // "minecraft:splash_potion@0 {Potion:"long_swiftness"}": "Взрывное зелье стремительности",
    // "minecraft:splash_potion@0 {Potion:"strong_swiftness"}": "Взрывное зелье стремительности",
    // "minecraft:splash_potion@0 {Potion:"slowness"}": "Взрывное зелье замедления",
    // "minecraft:splash_potion@0 {Potion:"long_slowness"}": "Взрывное зелье замедления",
    // "minecraft:splash_potion@0 {Potion:"water_breathing"}": "Взрывное зелье водного дыхания",
    // "minecraft:splash_potion@0 {Potion:"long_water_breathing"}": "Взрывное зелье водного дыхания",
    // "minecraft:splash_potion@0 {Potion:"healing"}": "Взрывное зелье исцеления",
    // "minecraft:splash_potion@0 {Potion:"strong_healing"}": "Взрывное зелье исцеления",
    // "minecraft:splash_potion@0 {Potion:"harming"}": "Взрывное зелье вреда",
    // "minecraft:splash_potion@0 {Potion:"strong_harming"}": "Взрывное зелье вреда",
    // "minecraft:splash_potion@0 {Potion:"poison"}": "Взрывное зелье отравления",
    // "minecraft:splash_potion@0 {Potion:"long_poison"}": "Взрывное зелье отравления",
    // "minecraft:splash_potion@0 {Potion:"strong_poison"}": "Взрывное зелье отравления",
    // "minecraft:splash_potion@0 {Potion:"regeneration"}": "Взрывное зелье регенерации",
    // "minecraft:splash_potion@0 {Potion:"long_regeneration"}": "Взрывное зелье регенерации",
    // "minecraft:splash_potion@0 {Potion:"strong_regeneration"}": "Взрывное зелье регенерации",
    // "minecraft:splash_potion@0 {Potion:"strength"}": "Взрывное зелье силы",
    // "minecraft:splash_potion@0 {Potion:"long_strength"}": "Взрывное зелье силы",
    // "minecraft:splash_potion@0 {Potion:"strong_strength"}": "Взрывное зелье силы",
    // "minecraft:splash_potion@0 {Potion:"weakness"}": "Взрывное зелье слабости",
    // "minecraft:splash_potion@0 {Potion:"long_weakness"}": "Взрывное зелье слабости",
    // "minecraft:splash_potion@0 {Potion:"luck"}": "Взрывное зелье удачи",
    "minecraft:spectral_arrow": "Спектральная стрела",
    // "minecraft:tipped_arrow@0 {Potion:"night_vision"}": "Стрела ночного зрения",
    // "minecraft:tipped_arrow@0 {Potion:"long_night_vision"}": "Стрела ночного зрения",
    // "minecraft:tipped_arrow@0 {Potion:"invisibility"}": "Стрела невидимости",
    // "minecraft:tipped_arrow@0 {Potion:"long_invisibility"}": "Стрела невидимости",
    // "minecraft:tipped_arrow@0 {Potion:"leaping"}": "Стрела прыгучести",
    // "minecraft:tipped_arrow@0 {Potion:"long_leaping"}": "Стрела прыгучести",
    // "minecraft:tipped_arrow@0 {Potion:"strong_leaping"}": "Стрела прыгучести",
    // "minecraft:tipped_arrow@0 {Potion:"fire_resistance"}": "Стрела огнестойкости",
    // "minecraft:tipped_arrow@0 {Potion:"long_fire_resistance"}": "Стрела огнестойкости",
    // "minecraft:tipped_arrow@0 {Potion:"swiftness"}": "Стрела стремительности",
    // "minecraft:tipped_arrow@0 {Potion:"long_swiftness"}": "Стрела стремительности",
    // "minecraft:tipped_arrow@0 {Potion:"strong_swiftness"}": "Стрела стремительности",
    // "minecraft:tipped_arrow@0 {Potion:"slowness"}": "Стрела замедления",
    // "minecraft:tipped_arrow@0 {Potion:"long_slowness"}": "Стрела замедления",
    // "minecraft:tipped_arrow@0 {Potion:"water_breathing"}": "Стрела водного дыхания",
    // "minecraft:tipped_arrow@0 {Potion:"long_water_breathing"}": "Стрела водного дыхания",
    // "minecraft:tipped_arrow@0 {Potion:"healing"}": "Стрела исцеления",
    // "minecraft:tipped_arrow@0 {Potion:"strong_healing"}": "Стрела исцеления",
    // "minecraft:tipped_arrow@0 {Potion:"harming"}": "Стрела вреда",
    // "minecraft:tipped_arrow@0 {Potion:"strong_harming"}": "Стрела вреда",
    // "minecraft:tipped_arrow@0 {Potion:"poison"}": "Стрела отравления",
    // "minecraft:tipped_arrow@0 {Potion:"long_poison"}": "Стрела отравления",
    // "minecraft:tipped_arrow@0 {Potion:"strong_poison"}": "Стрела отравления",
    // "minecraft:tipped_arrow@0 {Potion:"regeneration"}": "Стрела регенерации",
    // "minecraft:tipped_arrow@0 {Potion:"long_regeneration"}": "Стрела регенерации",
    // "minecraft:tipped_arrow@0 {Potion:"strong_regeneration"}": "Стрела регенерации",
    // "minecraft:tipped_arrow@0 {Potion:"strength"}": "Стрела силы",
    // "minecraft:tipped_arrow@0 {Potion:"long_strength"}": "Стрела силы",
    // "minecraft:tipped_arrow@0 {Potion:"strong_strength"}": "Стрела силы",
    // "minecraft:tipped_arrow@0 {Potion:"weakness"}": "Стрела слабости",
    // "minecraft:tipped_arrow@0 {Potion:"long_weakness"}": "Стрела слабости",
    // "minecraft:tipped_arrow@0 {Potion:"luck"}": "Стрела удачи",
    // "minecraft:lingering_potion@0 {Potion:"water"}": "Пузырёк с водяной взвесью",
    // "minecraft:lingering_potion@0 {Potion:"mundane"}": "Заурядное туманное зелье",
    // "minecraft:lingering_potion@0 {Potion:"thick"}": "Густое туманное зелье",
    // "minecraft:lingering_potion@0 {Potion:"awkward"}": "Мутное туманное зелье",
    // "minecraft:lingering_potion@0 {Potion:"night_vision"}": "Туманное зелье ночного зрения",
    // "minecraft:lingering_potion@0 {Potion:"long_night_vision"}": "Туманное зелье ночного зрения",
    // "minecraft:lingering_potion@0 {Potion:"invisibility"}": "Туманное зелье невидимости",
    // "minecraft:lingering_potion@0 {Potion:"long_invisibility"}": "Туманное зелье невидимости",
    // "minecraft:lingering_potion@0 {Potion:"leaping"}": "Туманное зелье прыгучести",
    // "minecraft:lingering_potion@0 {Potion:"long_leaping"}": "Туманное зелье прыгучести",
    // "minecraft:lingering_potion@0 {Potion:"strong_leaping"}": "Туманное зелье прыгучести",
    // "minecraft:lingering_potion@0 {Potion:"fire_resistance"}": "Туманное зелье огнестойкости",
    // "minecraft:lingering_potion@0 {Potion:"long_fire_resistance"}": "Туманное зелье огнестойкости",
    // "minecraft:lingering_potion@0 {Potion:"swiftness"}": "Туманное зелье стремительности",
    // "minecraft:lingering_potion@0 {Potion:"long_swiftness"}": "Туманное зелье стремительности",
    // "minecraft:lingering_potion@0 {Potion:"strong_swiftness"}": "Туманное зелье стремительности",
    // "minecraft:lingering_potion@0 {Potion:"slowness"}": "Туманное зелье замедления",
    // "minecraft:lingering_potion@0 {Potion:"long_slowness"}": "Туманное зелье замедления",
    // "minecraft:lingering_potion@0 {Potion:"water_breathing"}": "Туманное зелье водного дыхания",
    // "minecraft:lingering_potion@0 {Potion:"long_water_breathing"}": "Туманное зелье водного дыхания",
    // "minecraft:lingering_potion@0 {Potion:"healing"}": "Туманное зелье исцеления",
    // "minecraft:lingering_potion@0 {Potion:"strong_healing"}": "Туманное зелье исцеления",
    // "minecraft:lingering_potion@0 {Potion:"harming"}": "Туманное зелье урона",
    // "minecraft:lingering_potion@0 {Potion:"strong_harming"}": "Туманное зелье урона",
    // "minecraft:lingering_potion@0 {Potion:"poison"}": "Туманное зелье отравления",
    // "minecraft:lingering_potion@0 {Potion:"long_poison"}": "Туманное зелье отравления",
    // "minecraft:lingering_potion@0 {Potion:"strong_poison"}": "Туманное зелье отравления",
    // "minecraft:lingering_potion@0 {Potion:"regeneration"}": "Туманное зелье регенерации",
    // "minecraft:lingering_potion@0 {Potion:"long_regeneration"}": "Туманное зелье регенерации",
    // "minecraft:lingering_potion@0 {Potion:"strong_regeneration"}": "Туманное зелье регенерации",
    // "minecraft:lingering_potion@0 {Potion:"strength"}": "Туманное зелье силы",
    // "minecraft:lingering_potion@0 {Potion:"long_strength"}": "Туманное зелье силы",
    // "minecraft:lingering_potion@0 {Potion:"strong_strength"}": "Туманное зелье силы",
    // "minecraft:lingering_potion@0 {Potion:"weakness"}": "Туманное зелье слабости",
    // "minecraft:lingering_potion@0 {Potion:"long_weakness"}": "Туманное зелье слабости",
    // "minecraft:lingering_potion@0 {Potion:"luck"}": "Туманное зелье удачи",
    "minecraft:shield": "Щит",
    "minecraft:elytra": "Элитры",
    "minecraft:spruce_boat": "Еловая лодка",
    "minecraft:birch_boat": "Берёзовая лодка",
    "minecraft:jungle_boat": "Лодка из тропического дерева",
    "minecraft:acacia_boat": "Акациевая лодка",
    "minecraft:dark_oak_boat": "Лодка из тёмного дуба",
    "minecraft:totem_of_undying": "Тотем бессмертия",
    "minecraft:shulker_shell": "Панцирь шалкера",
    "minecraft:iron_nugget": "Кусочек железа",
    "minecraft:knowledge_book": "Книга знаний",
    "minecraft:record_13": "Пластинка",
    "minecraft:record_cat": "Пластинка",
    "minecraft:record_blocks": "Пластинка",
    "minecraft:record_chirp": "Пластинка",
    "minecraft:record_far": "Пластинка",
    "minecraft:record_mall": "Пластинка",
    "minecraft:record_mellohi": "Пластинка",
    "minecraft:record_stal": "Пластинка",
    "minecraft:record_strad": "Пластинка",
    "minecraft:record_ward": "Пластинка",
    "minecraft:record_11": "Пластинка",
    "minecraft:record_wait": "Пластинка",
}


