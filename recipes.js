// Starbucks drink recipes data
const recipesData = [
    // Hot Lattes
    {
        id: 1,
        drink_name: "Tall Hot Latte",
        size: "Tall",
        abbreviation: "L",
        shots: "1",
        syrup_pumps: "3",
        syrup_type: "specified syrup",
        milk_type: "2%",
        milk_line: "second line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "",
        preparation_method: "steam",
        category: "Latte",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "2% to second line on pitcher, aerate 3-5 seconds, 3 pumps of specified syrup into cup, 1 shot into cup, pour milk and top with foam.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Basic drink everyone should know"
    },
    {
        id: 2,
        drink_name: "Grande Hot Latte",
        size: "Grande",
        abbreviation: "L",
        shots: "2",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "2%",
        milk_line: "third line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "",
        preparation_method: "steam",
        category: "Latte",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "2% to third line on pitcher, aerate 3-5 seconds, 2 shots into cup, pour milk and top with foam.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Most common size"
    },
    {
        id: 3,
        drink_name: "Venti Hot Latte",
        size: "Venti",
        abbreviation: "L",
        shots: "2",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "2%",
        milk_line: "top line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "",
        preparation_method: "steam",
        category: "Latte",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "2% to top line on pitcher, aerate 3-5 seconds, 2 shots into cup, pour milk and top with foam.",
        seasonal: false,
        popular: false,
        prep_time: "2-3 minutes",
        tips: "Same shots as Grande"
    },

    // Americanos
    {
        id: 4,
        drink_name: "Tall Americano",
        size: "Tall",
        abbreviation: "A",
        shots: "2",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "hot water",
        toppings: "",
        preparation_method: "",
        category: "Americano",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "2 shots, hot water",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Fill to 1/4 inch below rim"
    },
    {
        id: 5,
        drink_name: "Grande Americano",
        size: "Grande",
        abbreviation: "A",
        shots: "3",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "hot water",
        toppings: "",
        preparation_method: "",
        category: "Americano",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "3 shots, hot water",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Most popular size"
    },
    {
        id: 6,
        drink_name: "Venti Americano",
        size: "Venti",
        abbreviation: "A",
        shots: "4",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "hot water",
        toppings: "",
        preparation_method: "",
        category: "Americano",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "4 shots, hot water",
        seasonal: false,
        popular: false,
        prep_time: "1-2 minutes",
        tips: "4 shots makes it extra strong"
    },

    // Iced Coffee
    {
        id: 7,
        drink_name: "Tall Iced Coffee",
        size: "Tall",
        abbreviation: "IC",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "third line",
        aeration_time: "",
        special_ingredients: "",
        toppings: "ice",
        preparation_method: "cold brew",
        category: "Coffee",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "No syrup if crossed out",
        full_recipe: "Iced coffee to third line cold cup, 3 pumps classic (unless slash through syrup line), ice",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Quick and simple cold drink"
    },
    {
        id: 8,
        drink_name: "Grande Iced Coffee",
        size: "Grande",
        abbreviation: "IC",
        shots: "",
        syrup_pumps: "4",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "third line",
        aeration_time: "",
        special_ingredients: "",
        toppings: "ice",
        preparation_method: "cold brew",
        category: "Coffee",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "No syrup if crossed out",
        full_recipe: "Iced coffee to third cold cup line, 4 pumps classic (unless slash through syrup line), ice",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Most popular cold coffee size"
    },
    {
        id: 9,
        drink_name: "Venti Iced Coffee",
        size: "Venti",
        abbreviation: "IC",
        shots: "",
        syrup_pumps: "6",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "third line",
        aeration_time: "",
        special_ingredients: "",
        toppings: "ice",
        preparation_method: "cold brew",
        category: "Coffee",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "No syrup if crossed out",
        full_recipe: "Iced coffee to third cold cup line, 6 pumps classic (unless slash through syrup line), ice",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Great for long days"
    },
    {
        id: 10,
        drink_name: "Trenta Iced Coffee",
        size: "Trenta",
        abbreviation: "IC",
        shots: "",
        syrup_pumps: "7",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "third line",
        aeration_time: "",
        special_ingredients: "",
        toppings: "ice",
        preparation_method: "cold brew",
        category: "Coffee",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "No syrup if crossed out",
        full_recipe: "Iced coffee to third line cold cup, 7 pumps classic (unless slash through syrup line), ice",
        seasonal: false,
        popular: false,
        prep_time: "1 minute",
        tips: "Largest size available"
    },
    {
        id: 11,
        drink_name: "Cold Brew",
        size: "All Sizes",
        abbreviation: "CB",
        shots: "",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "cold water",
        toppings: "ice",
        preparation_method: "cold brew",
        category: "Coffee",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "Cold Brew to first cold cup line, cold water to third line, ice",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Smoother than regular iced coffee"
    },

    // Macchiatos - Special preparation drinks that require specific layering
    {
        id: 12,
        drink_name: "Espresso Macchiato",
        size: "All Sizes",
        abbreviation: "EM",
        shots: "1-4",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "2%",
        milk_line: "first line",
        aeration_time: "3-5 seconds",
        special_ingredients: "foam",
        toppings: "",
        preparation_method: "steam",
        category: "Macchiato",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "Short cup. Pour 2% into first pitcher line, aerate for 3-5 seconds, pull shots into cup, spoon a dollop of foam onto shots.",
        seasonal: false,
        popular: false,
        prep_time: "2 minutes",
        tips: "Just a dollop of foam",
        quick_build: [
            "1. Steam milk (first line)",
            "2. Pull shots",
            "3. Add foam dollop"
        ],
        common_mods: {
            "Extra Foam": "Aerate 1-2 seconds longer",
            "Extra Hot": "Steam to 160°F",
            "More Shots": "Standard shot progression: Short(1), Tall(1), Grande(2), Venti(2)"
        }
    },
    {
        id: 13,
        drink_name: "Tall Caramel Macchiato",
        size: "Tall",
        abbreviation: "CM",
        shots: "1",
        syrup_pumps: "2",
        syrup_type: "vanilla",
        milk_type: "2%",
        milk_line: "second line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "caramel drizzle",
        preparation_method: "steam",
        category: "Macchiato",
        temperature: "Hot",
        difficulty: "Medium",
        important_notes: "Vanilla syrup, NOT caramel. Shots on top!",
        full_recipe: "Pour 2% to second line on pitcher, aerate 3-5 seconds, pull 1 shot into shot glasses, TWO pumps VANILLA into cup, fill cup 3/4 full with milk BEFORE the espresso, pour shots on onto milk, top with caramel drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "3-4 minutes",
        tips: "Remember: Vanilla syrup, shots on top",
        quick_build: [
            "1. Vanilla syrup (2 pumps)",
            "2. Steam milk (2nd line)",
            "3. Pour steamed milk",
            "4. Add shots on top",
            "5. Caramel drizzle"
        ],
        common_mods: {
            "Extra Caramel": "Extra drizzle in crosshatch pattern",
            "Soy/Almond/Oat": "Same build, alternative milk",
            "Iced": "Same syrup, milk to 3rd line, ice, shots on top",
            "Extra Shot": "+1 shot on top",
            "Sugar Free": "SF Vanilla available"
        }
    },
    {
        id: 14,
        drink_name: "Grande Caramel Macchiato",
        size: "Grande",
        abbreviation: "CM",
        shots: "2",
        syrup_pumps: "3",
        syrup_type: "vanilla",
        milk_type: "2%",
        milk_line: "third line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "caramel drizzle",
        preparation_method: "steam",
        category: "Macchiato",
        temperature: "Hot",
        difficulty: "Medium",
        important_notes: "Vanilla syrup, NOT caramel. Shots on top!",
        full_recipe: "Pour 2% to third line on pitcher, aerate 3-5 seconds, pull 2 shots into shot glasses, THREE pumps VANILLA into cup, fill cup 3/4 full with milk BEFORE the espresso, pour shots on onto milk, top with caramel drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "3-4 minutes",
        tips: "Most popular macchiato size",
        quick_build: [
            "1. Vanilla syrup (3 pumps)",
            "2. Steam milk (3rd line)",
            "3. Pour steamed milk",
            "4. Add shots on top",
            "5. Caramel drizzle"
        ],
        common_mods: {
            "Extra Caramel": "Extra drizzle in crosshatch pattern",
            "Soy/Almond/Oat": "Same build, alternative milk",
            "Iced": "Same syrup, milk to 3rd line, ice, shots on top",
            "Extra Shot": "+1 shot on top",
            "Sugar Free": "SF Vanilla available"
        }
    },
    {
        id: 15,
        drink_name: "Venti Caramel Macchiato",
        size: "Venti",
        abbreviation: "CM",
        shots: "2",
        syrup_pumps: "4",
        syrup_type: "vanilla",
        milk_type: "2%",
        milk_line: "fourth line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "caramel drizzle",
        preparation_method: "steam",
        category: "Macchiato",
        temperature: "Hot",
        difficulty: "Medium",
        important_notes: "Vanilla syrup, NOT caramel. Shots on top!",
        full_recipe: "Pour 2% to fourth line on pitcher, aerate 3-5 seconds, pull 2 shots into shot glasses, FOUR pumps VANILLA into cup, fill cup 3/4 full with milk BEFORE the espresso, pour shots on onto milk, top with caramel drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "3-4 minutes",
        tips: "Same shots as Grande",
        quick_build: [
            "1. Vanilla syrup (4 pumps)",
            "2. Steam milk (4th line)",
            "3. Pour steamed milk",
            "4. Add shots on top",
            "5. Caramel drizzle"
        ],
        common_mods: {
            "Extra Caramel": "Extra drizzle in crosshatch pattern",
            "Soy/Almond/Oat": "Same build, alternative milk",
            "Iced": "Same syrup, milk to 3rd line, ice, shots on top",
            "Extra Shot": "+1 shot on top",
            "Sugar Free": "SF Vanilla available"
        }
    },
    {
        id: 75,
        drink_name: "Grande Iced Caramel Macchiato",
        size: "Grande",
        abbreviation: "ICM",
        shots: "2",
        syrup_pumps: "3",
        syrup_type: "vanilla",
        milk_type: "2%",
        milk_line: "third line",
        aeration_time: "",
        special_ingredients: "",
        toppings: "caramel drizzle",
        preparation_method: "build",
        category: "Macchiato",
        temperature: "Cold",
        difficulty: "Medium",
        important_notes: "Vanilla syrup first, shots on TOP of milk",
        full_recipe: "3 pumps vanilla syrup, 2% to third line, add ice, TWO shots on top, finish with caramel drizzle",
        seasonal: false,
        popular: true,
        prep_time: "2 minutes",
        tips: "Build in order: vanilla, milk, ice, shots, drizzle",
        quick_build: [
            "1. Vanilla syrup (3 pumps)",
            "2. 2% milk to 3rd line",
            "3. Add ice",
            "4. Pour 2 shots on top",
            "5. Caramel drizzle"
        ]
    },
    {
        id: 76,
        drink_name: "Venti Iced Caramel Macchiato",
        size: "Venti",
        abbreviation: "ICM",
        shots: "3",
        syrup_pumps: "4",
        syrup_type: "vanilla",
        milk_type: "2%",
        milk_line: "third line",
        aeration_time: "",
        special_ingredients: "",
        toppings: "caramel drizzle",
        preparation_method: "build",
        category: "Macchiato",
        temperature: "Cold",
        difficulty: "Medium",
        important_notes: "Gets 3 shots unlike hot version",
        full_recipe: "4 pumps vanilla syrup, 2% to third line, add ice, THREE shots on top, finish with caramel drizzle",
        seasonal: false,
        popular: true,
        prep_time: "2 minutes",
        tips: "More shots than hot version",
        quick_build: [
            "1. Vanilla syrup (4 pumps)",
            "2. 2% milk to 3rd line",
            "3. Add ice",
            "4. Pour 3 shots on top",
            "5. Caramel drizzle"
        ]
    },
    {
        id: 85,
        drink_name: "Grande Caramel Frappuccino",
        size: "Grande",
        abbreviation: "CRF",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "caramel",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "3 pumps frap roast",
        toppings: "whip, caramel drizzle",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Easy",
        important_notes: "Not to be confused with Coffee Frappuccino (CF)",
        full_recipe: "3 pumps frappuccino roast into cold cup. Whole milk to bottom line. Pour into blender. 3 pumps of caramel. Add correctly sized scoop of ice, frappuccino base, blend. Top with whip and caramel drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Most ordered size of CRF"
    },
    {
        id: 86,
        drink_name: "Venti Caramel Frappuccino",
        size: "Venti",
        abbreviation: "CRF",
        shots: "",
        syrup_pumps: "4",
        syrup_type: "caramel",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "4 pumps frap roast",
        toppings: "whip, caramel drizzle",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Easy",
        important_notes: "Not to be confused with Coffee Frappuccino (CF)",
        full_recipe: "4 pumps frappuccino roast into cold cup. Whole milk to bottom line. Pour into blender. 4 pumps of caramel. Add correctly sized scoop of ice, frappuccino base, blend. Top with whip and caramel drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Extra caramel drizzle common request"
    },

    // Frappuccinos - Build Process: 1. Pumps 2. Coffee/Cream 3. Milk 4. Ice 5. Blend 6. Toppings
    {
        id: 16,
        drink_name: "Tall Coffee Frappuccino",
        size: "Tall",
        abbreviation: "CFR",
        shots: "",
        syrup_pumps: "2",
        syrup_type: "coffee base",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "2 pumps frappuccino roast, ice",
        toppings: "whipped cream optional",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Medium",
        important_notes: "Check proper ice level",
        full_recipe: "2 pumps frappuccino roast, 2 pumps coffee base, whole milk to bottom line, ice, blend on 1",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Ice to top black line for consistency",
        training_notes: [
            "Use cold bar pumps for base",
            "Fill ice just above the top line",
            "Always use whole milk unless requested otherwise",
            "Blend setting 1 is standard"
        ],
        quick_build: [
            "1. Frap Roast (2 pumps)",
            "2. Coffee Base (2 pumps)",
            "3. Whole milk to bottom line",
            "4. Ice to top line",
            "5. Blend on 1",
            "6. Whip cream (optional)"
        ],
        common_mods: {
            "Light Ice": "Ice to first line only",
            "Extra Coffee": "+1 pump frap roast",
            "No Coffee": "Use cream base instead",
            "Alternative Milk": "Same build, different milk",
            "Double Blended": "Blend twice on 1"
        },
        build_tips: {
            "Consistent Ice": "Fill just above line for proper texture",
            "Clean Blending": "Wash pitcher between different bases",
            "Pour Technique": "Center stream for even distribution"
        }
    },
    {
        id: 17,
        drink_name: "Grande Coffee Frappuccino",
        size: "Grande",
        abbreviation: "CFR",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "coffee base",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "3 pumps frappuccino roast, ice",
        toppings: "whipped cream optional",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Medium",
        important_notes: "Most common size - perfect your technique",
        full_recipe: "3 pumps frappuccino roast, 3 pumps coffee base, whole milk to bottom line, ice, blend on 1",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Most ordered size - focus on consistency",
        training_notes: [
            "3 is the magic number - 3 pumps of everything",
            "Ice level crucial for proper texture",
            "Listen to blender sound for consistency",
            "Check color for proper mixing"
        ],
        quick_build: [
            "1. Frap Roast (3 pumps)",
            "2. Coffee Base (3 pumps)",
            "3. Whole milk to bottom line",
            "4. Ice to top line",
            "5. Blend on 1",
            "6. Whip cream (optional)"
        ],
        common_mods: {
            "Light Ice": "Ice to first line only",
            "Extra Coffee": "+1 pump frap roast",
            "No Coffee": "Use cream base instead",
            "Alternative Milk": "Same build, different milk",
            "Double Blended": "Blend twice on 1"
        },
        build_tips: {
            "Consistent Ice": "Fill just above line for proper texture",
            "Clean Blending": "Wash pitcher between different bases",
            "Pour Technique": "Center stream for even distribution"
        }
    },
    {
        id: 18,
        drink_name: "Venti Coffee Frappuccino",
        size: "Venti",
        abbreviation: "CFR",
        shots: "",
        syrup_pumps: "4",
        syrup_type: "coffee base",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "4 pumps frappuccino roast, ice",
        toppings: "whipped cream optional",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Medium",
        important_notes: "Extra ice needed for proper consistency",
        full_recipe: "4 pumps frappuccino roast, 4 pumps coffee base, whole milk to bottom line, ice, blend on 1",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "May need extra blending time",
        training_notes: [
            "4 pumps of everything for Venti",
            "Extra ice crucial for texture",
            "May need longer blend time",
            "Check for complete mixing"
        ],
        quick_build: [
            "1. Frap Roast (4 pumps)",
            "2. Coffee Base (4 pumps)",
            "3. Whole milk to bottom line",
            "4. Ice to top line + extra",
            "5. Blend on 1",
            "6. Whip cream (optional)"
        ],
        common_mods: {
            "Light Ice": "Ice to first line only",
            "Extra Coffee": "+1 pump frap roast",
            "No Coffee": "Use cream base instead",
            "Alternative Milk": "Same build, different milk",
            "Double Blended": "Blend twice on 1"
        },
        build_tips: {
            "Consistent Ice": "Fill above line for proper texture",
            "Clean Blending": "Wash pitcher between different bases",
            "Pour Technique": "Center stream for even distribution",
            "Size Note": "May need extra ice for texture"
        }
    },

    // Tea Beverages - Shaking is crucial for proper mixing and cooling
    {
        id: 19,
        drink_name: "Tall Hot Brewed Tea",
        size: "Tall",
        abbreviation: "BT",
        shots: "",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "1 tea bag",
        toppings: "",
        preparation_method: "steep",
        category: "Tea",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "1 tea bag if tall, steep with hot water.",
        seasonal: false,
        popular: true,
        prep_time: "3-5 minutes",
        tips: "Let steep 3-5 minutes for full flavor",
        training_notes: [
            "Use appropriate water temperature for tea type",
            "Don't squeeze tea bag",
            "Fill to 1/4 inch below rim",
            "Double check tea type ordered"
        ],
        quick_build: [
            "1. Select correct tea",
            "2. Add 1 tea bag",
            "3. Add hot water",
            "4. Let steep 3-5 minutes"
        ],
        common_mods: {
            "Extra Hot": "Just use hotter water",
            "Light Water": "Fill 3/4 full",
            "No Water": "Steam milk instead for tea latte",
            "Extra Tea Bag": "Add second tea bag"
        },
        steep_times: {
            "Black Tea": "3-5 minutes",
            "Green Tea": "3 minutes",
            "Herbal Tea": "5 minutes"
        }
    },
    {
        id: 20,
        drink_name: "Tall Iced Black Tea",
        size: "Tall",
        abbreviation: "BT",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find tall size, pour tea to line, pour water to line, 3 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Always shake 10 times"
    },
    {
        id: 21,
        drink_name: "Tall Strawberry Açaí Refresher",
        size: "Tall",
        abbreviation: "SAR",
        shots: "",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "strawberry inclusions",
        toppings: "ice",
        preparation_method: "shake",
        category: "Refresher",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken, add inclusions first",
        full_recipe: "Get shaker, find tall size, pour strawberry liquid base to line, water to line, 1 scoop strawberries, ice, shake well, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Add inclusions before shaking",
        training_notes: [
            "Always shake refreshers",
            "Add inclusions first",
            "Check base-to-water ratio",
            "Pour carefully to include fruit"
        ],
        quick_build: [
            "1. Add strawberry inclusions",
            "2. Base to first line",
            "3. Water to second line",
            "4. Add ice",
            "5. Shake 10 times",
            "6. Pour everything into cup",
            "7. Top with ice if needed"
        ],
        common_mods: {
            "No Water": "Base to second line",
            "Light Ice": "Half ice scoop",
            "No Inclusions": "Skip fruit",
            "Extra Inclusions": "Double scoop fruit"
        },
        build_tips: {
            "Inclusion First": "Adds more flavor while shaking",
            "Ice Amount": "Fill to top line in shaker",
            "Pour Method": "Pour everything including fruit",
            "Water Ratio": "Equal parts base and water unless modified"
        }
    },
    {
        id: 22,
        drink_name: "Iced Green Tea Latte",
        size: "Tall",
        abbreviation: "IGTL",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "2%",
        milk_line: "third line",
        aeration_time: "",
        special_ingredients: "matcha powder",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Medium",
        important_notes: "Must be shaken to mix matcha",
        full_recipe: "2 scoops matcha, 3 pumps classic, 2% to third line, ice, shake well, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "2 minutes",
        tips: "Shake extra well to mix matcha",
        training_notes: [
            "Matcha can clump if not shaken well",
            "Check for even green color",
            "Use proper scoop for matcha",
            "Always shake with ice"
        ],
        quick_build: [
            "1. Add matcha powder (2 scoops)",
            "2. Add classic syrup (3 pumps)",
            "3. Add 2% milk to third line",
            "4. Fill shaker with ice",
            "5. Shake vigorously",
            "6. Pour into cup",
            "7. Top with ice"
        ],
        common_mods: {
            "No Classic": "Skip syrup",
            "Alternative Milk": "Same build with different milk",
            "Extra Matcha": "+1 scoop matcha",
            "Light Ice": "Half ice amount"
        },
        quality_checks: {
            "Color": "Should be vibrant green",
            "Texture": "No matcha clumps",
            "Mixing": "Well incorporated",
            "Temperature": "Cold and refreshing"
        }
    },

    // Hot Teas
    {
        id: 23,
        drink_name: "Hot Brewed Teavana Tea",
        size: "All",
        abbreviation: "BT",
        shots: "",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "tea bags",
        toppings: "",
        preparation_method: "steep",
        category: "Tea",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Number of tea bags varies by size",
        full_recipe: "1 tea bag if tall, 2 if grande or venti. Hot water.",
        seasonal: false,
        popular: true,
        prep_time: "3-5 minutes",
        tips: "Let steep 3-5 minutes for full flavor",
        training_notes: [
            "Black teas steep 3-5 minutes",
            "Green teas steep 3 minutes",
            "Herbal teas steep 5 minutes",
            "Don't squeeze tea bags"
        ]
    },

    // More Teas and Tea Lemonades
    {
        id: 24,
        drink_name: "Grande Passion/Black/Green Iced Tea",
        size: "Grande",
        abbreviation: "PT/BT/GT",
        shots: "",
        syrup_pumps: "4",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find grande size, pour tea to line, pour water to line, 4 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Always shake 10 times for proper mixing"
    },
    {
        id: 25,
        drink_name: "Grande Passion/Black/Green Iced Tea Lemonade",
        size: "Grande",
        abbreviation: "PTL/BTL/GTL",
        shots: "",
        syrup_pumps: "4",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "lemonade",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Use lemonade instead of water",
        full_recipe: "Get shaker, find grande size, pour tea to line, pour lemonade to line, 4 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Lemonade adds extra sweetness"
    },

    // Additional Refreshers
    {
        id: 26,
        drink_name: "Very Berry Refresher",
        size: "All",
        abbreviation: "BHR",
        shots: "",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "berry inclusions",
        toppings: "ice",
        preparation_method: "shake",
        category: "Refresher",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "2 scoops berries for trenta",
        full_recipe: "Get shaker, find correct size, pour very berry liquid base to line, water, 1 scoop berries (2 if trenta), ice, shake well, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Include berries when pouring"
    },
    {
        id: 27,
        drink_name: "Cool Lime Refresher",
        size: "All",
        abbreviation: "CLR",
        shots: "",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "lime",
        toppings: "ice",
        preparation_method: "shake",
        category: "Refresher",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "2 limes for trenta",
        full_recipe: "Get shaker, find correct size, pour cool lime liquid base to line, water, 1 lime (2 if trenta), ice, shake well, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Fresh lime adds extra zing"
    },

    // Specialty Drinks
    {
        id: 28,
        drink_name: "Misto",
        size: "All",
        abbreviation: "Mis",
        shots: "",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "2%",
        milk_line: "halfway",
        aeration_time: "3-5 seconds",
        special_ingredients: "brewed coffee",
        toppings: "",
        preparation_method: "steam",
        category: "Coffee",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Half coffee, half steamed milk",
        full_recipe: "Fill cup half way with brewed coffee, pour 2% milk into pitcher, aerate 3-5 seconds, finish like a latte. Half coffee, half steamed milk.",
        seasonal: false,
        popular: false,
        prep_time: "2-3 minutes",
        tips: "Like a cafe au lait"
    },

    // Mochas
    {
        id: 29,
        drink_name: "Grande Hot Mocha",
        size: "Grande",
        abbreviation: "M",
        shots: "2",
        syrup_pumps: "4",
        syrup_type: "mocha",
        milk_type: "2%",
        milk_line: "third line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "whip",
        preparation_method: "steam",
        category: "Mocha",
        temperature: "Hot",
        difficulty: "Medium",
        important_notes: "Always tops with whip",
        full_recipe: "2% to third line on pitcher, aerate 3-5 seconds, 4 pumps mocha, 2 shots, top with whip.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Chocolate sauce before shots"
    },

    // White Chocolate Mochas
    {
        id: 30,
        drink_name: "Grande Hot White Chocolate Mocha",
        size: "Grande",
        abbreviation: "WM",
        shots: "2",
        syrup_pumps: "4",
        syrup_type: "white chocolate",
        milk_type: "2%",
        milk_line: "top line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "whip",
        preparation_method: "steam",
        category: "Mocha",
        temperature: "Hot",
        difficulty: "Medium",
        important_notes: "White mocha is thicker",
        full_recipe: "2% to top line on pitcher, aerate 3-5 seconds, 4 pumps white chocolate, 2 shots, top with whip.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Very sweet drink"
    },

    // Cappuccinos
    {
        id: 31,
        drink_name: "Grande Cappuccino",
        size: "Grande",
        abbreviation: "C",
        shots: "2",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "2%",
        milk_line: "third line",
        aeration_time: "6-8 seconds",
        special_ingredients: "",
        toppings: "",
        preparation_method: "steam",
        category: "Cappuccino",
        temperature: "Hot",
        difficulty: "Hard",
        important_notes: "MUST FREE POUR MILK",
        full_recipe: "2% to third line on pitcher, aerate 6-8 seconds, 2 shots, MUST FREE POUR MILK. Ideally 50/50 milk to foam ratio. If dry cappuccino is requested aerate longer, if wet cappuccino requested aerate less.",
        seasonal: false,
        popular: true,
        prep_time: "3-4 minutes",
        tips: "Practice free pouring",
        training_notes: [
            "Longer aeration than latte",
            "Free pour is essential",
            "50/50 milk to foam",
            "Adjust aeration for dry/wet"
        ]
    },

    // Flat Whites
    {
        id: 32,
        drink_name: "Grande Flat White",
        size: "Grande",
        abbreviation: "FW",
        shots: "3",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "WHOLE",
        milk_line: "third line",
        aeration_time: "2-3 seconds",
        special_ingredients: "ristretto shots",
        toppings: "",
        preparation_method: "steam",
        category: "Flat White",
        temperature: "Hot",
        difficulty: "Expert",
        important_notes: "Uses RISTRETTO shots",
        full_recipe: "WHOLE MILK to third line on pitcher, aerate 2-3 seconds, 3 RISTRETTO SHOTS, free pour into cup and hopefully end with something like a white foam dot in your drink. Requires practice to perfect.",
        seasonal: false,
        popular: false,
        prep_time: "3-4 minutes",
        tips: "Aim for dot pattern",
        training_notes: [
            "Always whole milk",
            "Ristretto shots only",
            "Minimal aeration",
            "Practice dot technique"
        ]
    },

    // Latte Macchiatos
    {
        id: 33,
        drink_name: "Tall Latte Macchiato",
        size: "Tall",
        abbreviation: "LM",
        shots: "2",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "WHOLE",
        milk_line: "second line",
        aeration_time: "5",
        special_ingredients: "",
        toppings: "",
        preparation_method: "steam",
        category: "Macchiato",
        temperature: "Hot",
        difficulty: "Hard",
        important_notes: "Shots poured slowly over ~10 seconds",
        full_recipe: "WHOLE MILK to second line on pitcher, aerate 5 seconds, TWO shots into shot pitcher, pour milk into cup leaving room for the shots, pour the espresso into the latte over ~10 seconds. Should look like a latte with a small dot where the espresso was poured.",
        seasonal: false,
        popular: false,
        prep_time: "3-4 minutes",
        tips: "Slow shot pour is key",
        training_notes: [
            "Always whole milk",
            "Extra aeration time",
            "Pour shots slowly",
            "Look for dot pattern"
        ]
    },

    // Additional Basic Espresso Drinks
    {
        id: 34,
        drink_name: "Espresso",
        size: "Short",
        abbreviation: "E",
        shots: "1-4",
        syrup_pumps: "",
        syrup_type: "",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "",
        toppings: "",
        preparation_method: "pull",
        category: "Espresso",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Short cup only",
        full_recipe: "Short cup. Pull shot(s) directly into cup then serve.",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Serve immediately"
    },

    // Cold Lattes
    {
        id: 35,
        drink_name: "Tall Iced Latte",
        size: "Tall",
        abbreviation: "L",
        shots: "1",
        syrup_pumps: "3",
        syrup_type: "optional",
        milk_type: "2%",
        milk_line: "top",
        aeration_time: "",
        special_ingredients: "",
        toppings: "ice",
        preparation_method: "build",
        category: "Latte",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "3 pumps of syrup (if applicable) into cold cup, 1 shot into cup, 2% to top line of cup, rest ice.",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Build in order: syrup, shots, milk, ice"
    },
    {
        id: 36,
        drink_name: "Tall Caramel Apple Spice",
        size: "Tall",
        abbreviation: "CAS",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "cinnamon dolce",
        milk_type: "",
        milk_line: "second line",
        aeration_time: "",
        special_ingredients: "apple juice",
        toppings: "whip, caramel drizzle",
        preparation_method: "steam",
        category: "Other",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Steam apple juice",
        full_recipe: "Pour APPLE JUICE to second line on pitcher, steam, 3 pumps of cinnamon dolce syrup into cup, pour apple juice, top with whip and caramel drizzle.",
        seasonal: false,
        popular: false,
        prep_time: "2-3 minutes",
        tips: "Great fall drink"
    },
    {
        id: 37,
        drink_name: "Tall Hot Chocolate",
        size: "Tall",
        abbreviation: "HC",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "mocha",
        milk_type: "2%",
        milk_line: "second line",
        aeration_time: "3-5 seconds",
        special_ingredients: "1 pump vanilla",
        toppings: "whip, mocha drizzle",
        preparation_method: "steam",
        category: "Other",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Includes vanilla",
        full_recipe: "Pour 2% into second line on pitcher, aerate 3-5 seconds, 3 pumps of mocha and ONE of vanilla into cup, pour milk and top with whip and mocha drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Don't forget the vanilla pump"
    },

    // Tea Lattes
    {
        id: 38,
        drink_name: "Green Tea Latte",
        size: "Grande",
        abbreviation: "GRTL",
        shots: "",
        syrup_pumps: "4",
        syrup_type: "classic",
        milk_type: "2%",
        milk_line: "standard",
        aeration_time: "3-5 seconds",
        special_ingredients: "3 scoops matcha",
        toppings: "",
        preparation_method: "steam",
        category: "Tea Latte",
        temperature: "Hot",
        difficulty: "Medium",
        important_notes: "Mix matcha in pitcher",
        full_recipe: "Pour 2% milk into pitcher to the correct line, pump 4 pumps of classic syrup into cup, scoop 3 scoops of matcha into the PITCHER, aerate 3-5 second, pour into cup and serve.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Ensure matcha is well mixed"
    },

    // Additional Frappuccinos
    {
        id: 39,
        drink_name: "Grande Java Chip Frappuccino",
        size: "Grande",
        abbreviation: "JCF",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "mocha",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "3 scoops java chips",
        toppings: "whip, mocha drizzle",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Medium",
        important_notes: "Coffee version of DCCF",
        full_recipe: "3 frappuccino roast into cold cup. Whole milk to bottom line. Pour into blender. 3 pumps of mocha and 3 scoops of java chip. Add correctly sized scoop of ice, frappuccino base, blend. Top with whip and mocha drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "3-4 minutes",
        tips: "Ensure chips are fully blended"
    },
    {
        id: 40,
        drink_name: "Grande Double Chocolaty Chip Frappuccino",
        size: "Grande",
        abbreviation: "DCCF",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "mocha",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "3 scoops java chips",
        toppings: "whip, mocha drizzle",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Medium",
        important_notes: "Creme version of JCF",
        full_recipe: "Whole milk to bottom line of cold cup. Pour into blender. 3 pumps of mocha and 3 scoops of java chip. Add correctly sized scoop of ice, creme base, blend. Top with whip and mocha drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "3-4 minutes",
        tips: "Use creme base, no coffee"
    },
    
    // And so on for all variations...
    
    // Light/Skinny Versions
    {
        id: 41,
        drink_name: "Skinny Vanilla Latte",
        size: "Grande",
        abbreviation: "SKVL",
        shots: "2",
        syrup_pumps: "4",
        syrup_type: "sugar free vanilla",
        milk_type: "Nonfat",
        milk_line: "third line",
        aeration_time: "3-4 seconds",
        special_ingredients: "",
        toppings: "no whip",
        preparation_method: "steam",
        category: "Latte",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Sugar free and nonfat",
        full_recipe: "Skim (N) to second line on pitcher, aerate 3-4 seconds, 4 pumps of sugar free vanilla into cup, 2 shots into cup, pour milk and top with foam.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Never add whip to skinny drinks"
    },
    {
        id: 42,
        drink_name: "Tall Mocha Frappuccino",
        size: "Tall",
        abbreviation: "MF",
        shots: "",
        syrup_pumps: "2",
        syrup_type: "mocha",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "2 pumps frap roast",
        toppings: "whip",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "2 frappuccino roast into cold cup. Whole milk to bottom line. Pour into blender. 2 pumps of mocha. Add correctly sized scoop of ice, frappuccino base, blend. Top with whip.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Standard build pattern"
    },
    {
        id: 43,
        drink_name: "Grande Green Tea Frappuccino",
        size: "Grande",
        abbreviation: "GTF",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "3 scoops matcha",
        toppings: "whip",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Medium",
        important_notes: "Uses creme base",
        full_recipe: "Whole milk to bottom line of cold cup. Pour into blender. 3 scoops of matcha powder and 3 pumps of classic syrup. Add correctly sized scoop of ice, creme base, blend. Top with whip.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Mix matcha well"
    },
    {
        id: 44,
        drink_name: "Grande Strawberries and Creme Frappuccino",
        size: "Grande",
        abbreviation: "STCF",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "strawberry juice",
        toppings: "whip",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Easy",
        important_notes: "Uses strawberry juice",
        full_recipe: "Whole milk to bottom line of cold cup. Strawberry juice to second cold cup line. Pour into blender. 3 pumps of classic syrup. Add correctly sized scoop of ice, creme base, blend. Top with whip.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Double check juice line"
    },

    // More Tea Variants
    {
        id: 45,
        drink_name: "Grande Chai Tea Latte",
        size: "Grande",
        abbreviation: "Ch",
        shots: "",
        syrup_pumps: "4",
        syrup_type: "chai",
        milk_type: "2%",
        milk_line: "standard",
        aeration_time: "3-5 seconds",
        special_ingredients: "hot water",
        toppings: "",
        preparation_method: "steam",
        category: "Tea Latte",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Small amount hot water",
        full_recipe: "Pour 2% milk into pitcher to the correct line, aerate milk for 3-5 seconds, 4 pumps of Chai into the cup, add a small amount hot of water to the cup, fill the rest of cup with milk and serve.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Water helps mix chai"
    },
    {
        id: 46,
        drink_name: "Venti Chai Tea Latte",
        size: "Venti",
        abbreviation: "Ch",
        shots: "",
        syrup_pumps: "5",
        syrup_type: "chai",
        milk_type: "2%",
        milk_line: "top line",
        aeration_time: "3-5 seconds",
        special_ingredients: "hot water",
        toppings: "",
        preparation_method: "steam",
        category: "Tea Latte",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Small amount hot water",
        full_recipe: "Pour 2% milk into pitcher to the correct line, aerate milk for 3-5 seconds, 5 pumps of Chai into the cup, add a small amount hot of water to the cup, fill the rest of cup with milk and serve.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "More chai than grande"
    },

    // Complete Green Tea Series
    {
        id: 60,
        drink_name: "Tall Green Tea Latte",
        size: "Tall",
        abbreviation: "GRTL",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "2%",
        milk_line: "second line",
        aeration_time: "3-5 seconds",
        special_ingredients: "2 scoops matcha",
        toppings: "",
        preparation_method: "steam",
        category: "Tea Latte",
        temperature: "Hot",
        difficulty: "Medium",
        important_notes: "Mix matcha in pitcher",
        full_recipe: "Pour 2% milk into pitcher to the correct line, pump 3 pumps of classic syrup into cup, scoop 2 scoops of matcha into the PITCHER, aerate 3-5 second, pour into cup and serve.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Ensure matcha is well mixed"
    },
    {
        id: 61,
        drink_name: "Venti Green Tea Latte",
        size: "Venti",
        abbreviation: "GRTL",
        shots: "",
        syrup_pumps: "5",
        syrup_type: "classic",
        milk_type: "2%",
        milk_line: "top line",
        aeration_time: "3-5 seconds",
        special_ingredients: "4 scoops matcha",
        toppings: "",
        preparation_method: "steam",
        category: "Tea Latte",
        temperature: "Hot",
        difficulty: "Medium",
        important_notes: "Mix matcha in pitcher",
        full_recipe: "Pour 2% milk into pitcher to the correct line, pump 5 pumps of classic syrup into cup, scoop 4 scoops of matcha into the PITCHER, aerate 3-5 second, pour into cup and serve.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "More matcha than grande"
    },

    // Complete Caramel Apple Spice Series
    {
        id: 62,
        drink_name: "Venti Caramel Apple Spice",
        size: "Venti",
        abbreviation: "CAS",
        shots: "",
        syrup_pumps: "5",
        syrup_type: "cinnamon dolce",
        milk_type: "",
        milk_line: "third line",
        aeration_time: "",
        special_ingredients: "apple juice",
        toppings: "whip, caramel drizzle",
        preparation_method: "steam",
        category: "Other",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Steam apple juice",
        full_recipe: "Pour APPLE JUICE to third line on pitcher, steam, 5 pumps of cinnamon dolce syrup into cup, pour apple juice, top with whip and caramel drizzle.",
        seasonal: false,
        popular: false,
        prep_time: "2-3 minutes",
        tips: "Great fall drink"
    },

    // Complete Cold Tea Series
    {
        id: 63,
        drink_name: "Trenta Black Tea",
        size: "Trenta",
        abbreviation: "BT",
        shots: "",
        syrup_pumps: "7",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find trenta size, pour tea to line, pour water to line, 7 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Most pumps of any drink"
    },
    {
        id: 64,
        drink_name: "Trenta Green Tea",
        size: "Trenta",
        abbreviation: "GT",
        shots: "",
        syrup_pumps: "7",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find trenta size, pour tea to line, pour water to line, 7 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Most refreshing size"
    },

    // Complete Frappuccino Light Series
    {
        id: 65,
        drink_name: "Light Mocha Frappuccino",
        size: "Grande",
        abbreviation: "MFL",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "mocha",
        milk_type: "Nonfat",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "3 pumps frap roast",
        toppings: "no whip",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Easy",
        important_notes: "Light = nonfat milk, light base, no whip",
        full_recipe: "Like standard Mocha Frappuccino but with nonfat milk, light base, and no whip.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Never add whip"
    },

    // Complete Skinny Series
    {
        id: 66,
        drink_name: "Skinny Cinnamon Dolce Latte",
        size: "Grande",
        abbreviation: "SKCDL",
        shots: "2",
        syrup_pumps: "4",
        syrup_type: "sugar-free cinnamon dolce",
        milk_type: "Nonfat",
        milk_line: "third line",
        aeration_time: "3-5 seconds",
        special_ingredients: "",
        toppings: "no whip",
        preparation_method: "steam",
        category: "Latte",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Skinny = nonfat milk, sugar-free, no whip",
        full_recipe: "Like standard CDL but with nonfat milk, sugar-free syrup, and no whip.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Check sugar-free options"
    },    {
        id: 67,
        drink_name: "Oprah Chai Tea Latte",
        size: "All Sizes",
        abbreviation: "TOCH",
        shots: "",
        syrup_pumps: "3/4/5",
        syrup_type: "oprah chai",
        milk_type: "2%",
        milk_line: "standard",
        aeration_time: "3-5 seconds",
        special_ingredients: "hot water",
        toppings: "",
        preparation_method: "steam",
        category: "Tea Latte",
        temperature: "Hot",
        difficulty: "Easy",
        important_notes: "Small amount of hot water",
        full_recipe: "Pour 2% milk into pitcher to the correct line, aerate milk for 3-5 seconds, 3/4/5 pumps of Oprah into the cup, add a small amount hot of water to the cup, fill the rest of cup with milk and serve.",
        seasonal: false,
        popular: false,
        prep_time: "2-3 minutes",
        tips: "Similar build to regular chai"
    },
    {
        id: 68,
        drink_name: "Grande Cold Latte",
        size: "Grande",
        abbreviation: "L",
        shots: "2",
        syrup_pumps: "4",
        syrup_type: "optional",
        milk_type: "2%",
        milk_line: "top",
        aeration_time: "",
        special_ingredients: "",
        toppings: "ice",
        preparation_method: "build",
        category: "Latte",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "",
        full_recipe: "4 pumps of syrup (if applicable) into cold cup, 2 shots into cup, 2% to top line of cup, rest ice.",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "Build in order: syrup, shots, milk, ice"
    },
    {
        id: 69,
        drink_name: "Venti Cold Latte",
        size: "Venti",
        abbreviation: "L",
        shots: "3",
        syrup_pumps: "6",
        syrup_type: "optional",
        milk_type: "2%",
        milk_line: "top",
        aeration_time: "",
        special_ingredients: "",
        toppings: "ice",
        preparation_method: "build",
        category: "Latte",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Gets 3 shots unlike hot version",
        full_recipe: "SIX pumps of syrup (if applicable) into cold cup, THREE shots into cup, 2% to top line of cup, rest ice.",
        seasonal: false,
        popular: true,
        prep_time: "1-2 minutes",
        tips: "More syrup and shots than hot version"
    },
    {
        id: 70,
        drink_name: "Tall Caramel Frappuccino",
        size: "Tall",
        abbreviation: "CRF",
        shots: "",
        syrup_pumps: "2",
        syrup_type: "caramel",
        milk_type: "Whole",
        milk_line: "bottom line",
        aeration_time: "",
        special_ingredients: "2 pumps frap roast",
        toppings: "whip, caramel drizzle",
        preparation_method: "blend",
        category: "Frappuccino",
        temperature: "Blended",
        difficulty: "Easy",
        important_notes: "Not to be confused with Coffee Frappuccino (CF)",
        full_recipe: "2 pumps frappuccino roast into cold cup. Whole milk to bottom line. Pour into blender. 2 pumps of caramel. Add correctly sized scoop of ice, frappuccino base, blend. Top with whip and caramel drizzle.",
        seasonal: false,
        popular: true,
        prep_time: "2-3 minutes",
        tips: "Always top with caramel drizzle"
    },
    {
        id: 71,
        drink_name: "Tall Passion Iced Tea",
        size: "Tall",
        abbreviation: "PT",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find tall size, pour tea to line, pour water to line, 3 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Always shake 10 times"
    },
    {
        id: 72,
        drink_name: "Venti Passion Iced Tea",
        size: "Venti",
        abbreviation: "PT",
        shots: "",
        syrup_pumps: "6",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find venti size, pour tea to line, pour water to line, 6 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Always shake 10 times"
    },
    {
        id: 73,
        drink_name: "Tall Passion Tea Lemonade",
        size: "Tall",
        abbreviation: "PTL",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "lemonade",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Use lemonade instead of water",
        full_recipe: "Get shaker, find tall size, pour tea to line, pour lemonade to line, 3 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Lemonade adds extra sweetness"
    },
    {
        id: 74,
        drink_name: "Venti Passion Tea Lemonade",
        size: "Venti",
        abbreviation: "PTL",
        shots: "",
        syrup_pumps: "6",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "lemonade",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Use lemonade instead of water",
        full_recipe: "Get shaker, find venti size, pour tea to line, pour lemonade to line, 6 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Lemonade adds extra sweetness"
    },    {
        id: 77,
        drink_name: "Tall Black Iced Tea",
        size: "Tall",
        abbreviation: "BT",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find tall size, pour tea to line, pour water to line, 3 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Always shake 10 times"
    },
    {
        id: 78,
        drink_name: "Venti Black Iced Tea",
        size: "Venti",
        abbreviation: "BT",
        shots: "",
        syrup_pumps: "6",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find venti size, pour tea to line, pour water to line, 6 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Always shake 10 times"
    },
    {
        id: 79,
        drink_name: "Tall Green Iced Tea",
        size: "Tall",
        abbreviation: "GT",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find tall size, pour tea to line, pour water to line, 3 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Always shake 10 times"
    },
    {
        id: 80,
        drink_name: "Venti Green Iced Tea",
        size: "Venti",
        abbreviation: "GT",
        shots: "",
        syrup_pumps: "6",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "water",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Must be shaken",
        full_recipe: "Get shaker, find venti size, pour tea to line, pour water to line, 6 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Always shake 10 times"
    },
    {
        id: 81,
        drink_name: "Tall Black Tea Lemonade",
        size: "Tall",
        abbreviation: "BTL",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "lemonade",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Use lemonade instead of water",
        full_recipe: "Get shaker, find tall size, pour tea to line, pour lemonade to line, 3 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Lemonade adds extra sweetness"
    },
    {
        id: 82,
        drink_name: "Venti Black Tea Lemonade",
        size: "Venti",
        abbreviation: "BTL",
        shots: "",
        syrup_pumps: "6",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "lemonade",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Use lemonade instead of water",
        full_recipe: "Get shaker, find venti size, pour tea to line, pour lemonade to line, 6 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Lemonade adds extra sweetness"
    },
    {
        id: 83,
        drink_name: "Tall Green Tea Lemonade",
        size: "Tall",
        abbreviation: "GTL",
        shots: "",
        syrup_pumps: "3",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "lemonade",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Use lemonade instead of water",
        full_recipe: "Get shaker, find tall size, pour tea to line, pour lemonade to line, 3 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Lemonade adds extra sweetness"
    },
    {
        id: 84,
        drink_name: "Venti Green Tea Lemonade",
        size: "Venti",
        abbreviation: "GTL",
        shots: "",
        syrup_pumps: "6",
        syrup_type: "classic",
        milk_type: "",
        milk_line: "",
        aeration_time: "",
        special_ingredients: "lemonade",
        toppings: "ice",
        preparation_method: "shake",
        category: "Tea",
        temperature: "Cold",
        difficulty: "Easy",
        important_notes: "Use lemonade instead of water",
        full_recipe: "Get shaker, find venti size, pour tea to line, pour lemonade to line, 6 pumps classic (unless slash through syrup line), ice, shake, pour into cup",
        seasonal: false,
        popular: true,
        prep_time: "1 minute",
        tips: "Lemonade adds extra sweetness"
    }
];

// Global state
let currentFilter = {
    showFavorites: false,
    showPopular: false,
    showSeasonal: false
};

let favorites = [];
let timers = {};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    loadFavorites();
    renderTable();
});

// Initialize UI elements
function initializeUI() {
    // Initialize filter dropdowns
    initializeDropdowns();
    
    // Add event listeners
    document.getElementById('searchBar').addEventListener('input', renderTable);
    document.getElementById('categoryFilter').addEventListener('change', renderTable);
    document.getElementById('sizeFilter').addEventListener('change', renderTable);
    document.getElementById('tempFilter').addEventListener('change', renderTable);
    document.getElementById('difficultyFilter').addEventListener('change', renderTable);
    
    // Quick action buttons
    document.getElementById('popularBtn').addEventListener('click', () => toggleQuickFilter('showPopular'));
    document.getElementById('seasonalBtn').addEventListener('click', () => toggleQuickFilter('showSeasonal'));
    document.getElementById('favoritesOnlyBtn').addEventListener('click', () => toggleQuickFilter('showFavorites'));
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);
}

// Initialize filter dropdowns
function initializeDropdowns() {
    // Category filter
    const categories = [...new Set(recipesData.map(recipe => recipe.category))].sort();
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.innerHTML = '<option value="">All Categories</option>' +
        categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    
    // Size filter
    const sizes = [...new Set(recipesData.map(recipe => recipe.size))].sort();
    const sizeFilter = document.getElementById('sizeFilter');
    sizeFilter.innerHTML = '<option value="">All Sizes</option>' +
        sizes.map(size => `<option value="${size}">${size}</option>`).join('');
    
    // Temperature filter
    const temps = [...new Set(recipesData.map(recipe => recipe.temperature))].sort();
    const tempFilter = document.getElementById('tempFilter');
    tempFilter.innerHTML = '<option value="">All Temps</option>' +
        temps.map(temp => `<option value="${temp}">${temp}</option>`).join('');
    
    // Difficulty filter
    const difficulties = [...new Set(recipesData.map(recipe => recipe.difficulty))].sort();
    const diffFilter = document.getElementById('difficultyFilter');
    diffFilter.innerHTML = '<option value="">All Difficulties</option>' +
        difficulties.map(diff => `<option value="${diff}">${diff}</option>`).join('');
}

// Load favorites from localStorage
function loadFavorites() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
}

// Toggle quick filter buttons
function toggleQuickFilter(filterType) {
    currentFilter[filterType] = !currentFilter[filterType];
    document.getElementById(filterType === 'showFavorites' ? 'favoritesOnlyBtn' : 
                          filterType === 'showPopular' ? 'popularBtn' : 'seasonalBtn')
            .classList.toggle('active');
    renderTable();
}

// Clear all filters
function clearAllFilters() {
    // Reset dropdowns
    document.getElementById('searchBar').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('sizeFilter').value = '';
    document.getElementById('tempFilter').value = '';
    document.getElementById('difficultyFilter').value = '';
    
    // Reset quick filters
    currentFilter.showFavorites = false;
    currentFilter.showPopular = false;
    currentFilter.showSeasonal = false;
    
    // Reset quick filter buttons
    document.getElementById('popularBtn').classList.remove('active');
    document.getElementById('seasonalBtn').classList.remove('active');
    document.getElementById('favoritesOnlyBtn').classList.remove('active');
    
    renderTable();
}

// Render the recipe table
function renderTable() {
    const table = document.getElementById('drinksTable');
    const emptyState = document.getElementById('emptyState');
    
    // Get current filter values
    const searchText = document.getElementById('searchBar').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sizeFilter = document.getElementById('sizeFilter').value;
    const tempFilter = document.getElementById('tempFilter').value;
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    
    // Filter recipes
    let filteredRecipes = recipesData.filter(recipe => {
        // Text search
        if (searchText && !recipe.drink_name.toLowerCase().includes(searchText) && 
            !recipe.full_recipe?.toLowerCase().includes(searchText)) {
            return false;
        }
        
        // Dropdown filters
        if (categoryFilter && recipe.category !== categoryFilter) return false;
        if (sizeFilter && recipe.size !== sizeFilter) return false;
        if (tempFilter && recipe.temperature !== tempFilter) return false;
        if (difficultyFilter && recipe.difficulty !== difficultyFilter) return false;
        
        // Quick filters
        if (currentFilter.showFavorites && !favorites.includes(recipe.id)) return false;
        if (currentFilter.showPopular && !recipe.popular) return false;
        if (currentFilter.showSeasonal && !recipe.seasonal) return false;
        
        return true;
    });
    
    // Show empty state if no results
    if (filteredRecipes.length === 0) {
        table.style.display = 'none';
        emptyState.style.display = 'block';
        emptyState.innerHTML = `
            <h3>No recipes found</h3>
            <p>Try adjusting your filters or search terms</p>
        `;
        return;
    }
    
    // Hide empty state and show table
    table.style.display = 'table';
    emptyState.style.display = 'none';
    
    // Create table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>⭐</th>
            <th>DRINK NAME</th>
            <th>SIZE</th>
            <th>CATEGORY</th>
            <th>TEMP</th>
            <th>SHOTS</th>
            <th>SYRUP</th>
            <th>MILK</th>
            <th>NOTES</th>
        </tr>
    `;
    
    // Create table body
    const tbody = document.createElement('tbody');
    filteredRecipes.forEach(recipe => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <button class="favorite-btn ${favorites.includes(recipe.id) ? 'active' : ''}"
                        onclick="toggleFavorite(event, ${recipe.id})">⭐</button>
            </td>
            <td class="drink-name">${recipe.drink_name}</td>
            <td><span class="badge size-${recipe.size.toLowerCase()}">${recipe.size}</span></td>
            <td>${recipe.category}</td>
            <td><span class="badge temp-${recipe.temperature.toLowerCase()}">${recipe.temperature}</span></td>
            <td>${recipe.shots ? `<span class="highlight-shots">${recipe.shots}</span>` : '-'}</td>
            <td>${recipe.syrup_pumps ? `<span class="highlight-pumps">${recipe.syrup_pumps} ${recipe.syrup_type || ''}</span>` : '-'}</td>
            <td>${recipe.milk_type ? `${recipe.milk_type} to ${recipe.milk_line}` : '-'}</td>
            <td>${recipe.important_notes ? `<span class="special-note">${recipe.important_notes}</span>` : '-'}</td>
        `;
        
        // Add click handler for recipe details
        row.addEventListener('click', (e) => {
            if (!e.target.classList.contains('favorite-btn')) {
                showRecipeDetails(recipe);
            }
        });
        
        tbody.appendChild(row);
    });
    
    // Update table
    table.innerHTML = '';
    table.appendChild(thead);
    table.appendChild(tbody);
}

// Show recipe details
function showRecipeDetails(recipe) {
    const modal = document.getElementById('drinkModal');
    document.getElementById('modalDrinkName').textContent = recipe.drink_name;
    
    const details = document.getElementById('recipeDetails');
    details.innerHTML = `
        <div class="detail-section">
            <h3>Basic Information</h3>
            <p><strong>Size:</strong> ${recipe.size}</p>
            <p><strong>Category:</strong> ${recipe.category}</p>
            <p><strong>Temperature:</strong> ${recipe.temperature}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            ${recipe.abbreviation ? `<p><strong>Abbreviation:</strong> ${recipe.abbreviation}</p>` : ''}
            ${recipe.prep_time ? `<p><strong>Prep Time:</strong> ${recipe.prep_time}</p>` : ''}
        </div>

        <div class="detail-section">
            <h3>Recipe Details</h3>
            ${recipe.shots ? `<p><strong>Shots:</strong> ${recipe.shots}</p>` : ''}
            ${recipe.syrup_pumps ? `<p><strong>Syrup:</strong> ${recipe.syrup_pumps} pumps ${recipe.syrup_type || ''}</p>` : ''}
            ${recipe.milk_type ? `<p><strong>Milk:</strong> ${recipe.milk_type} to ${recipe.milk_line}</p>` : ''}
            ${recipe.aeration_time ? `<p><strong>Aeration:</strong> ${recipe.aeration_time}</p>` : ''}
            ${recipe.toppings ? `<p><strong>Toppings:</strong> ${recipe.toppings}</p>` : ''}
        </div>

        <div class="detail-section">
            <h3>Full Recipe</h3>
            <p>${recipe.full_recipe}</p>
        </div>

        ${recipe.tips ? `
        <div class="detail-section">
            <h3>Pro Tips</h3>
            <p>${recipe.tips}</p>
        </div>
        ` : ''}

        ${recipe.important_notes ? `
        <div class="detail-section">
            <h3>Important Notes</h3>
            <p class="special-note">${recipe.important_notes}</p>
        </div>
        ` : ''}
    `;
    
    modal.style.display = 'block';
}

// Toggle favorite status
function toggleFavorite(event, recipeId) {
    event.stopPropagation();
    const index = favorites.indexOf(recipeId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderTable();
}

// Modal functions
function closeDrinkModal() {
    document.getElementById('drinkModal').style.display = 'none';
}

function closeHelpModal() {
    document.getElementById('helpModal').style.display = 'none';
}

function closeAdminModal() {
    document.getElementById('adminModal').style.display = 'none';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// ...existing code...
