import { useState, useEffect } from "react";

const recipes = [
  {
    id: 1, name: "Garlic Butter Chicken & Rice",
    protein: "Chicken", taste: "Savory", method: "Pan-fry / Sauté",
    cuisine: "Western/Fusion", time: "35 min", servings: 6,
    link: "https://www.instagram.com/reel/DUw-8olk38q/?igsh=MWdtcXZtczM1NDhjMg==",
    nutrition: { calories: 520, protein: 34, carbs: 38, fat: 24, fiber: 1 },
    tags: ["creamy", "comfort food", "rice"],
    ingredients: ["2 servings white rice", "2 tbsp unsalted butter", "3 cloves garlic, minced", "Salt & pepper", "400–500g chicken thigh/breast fillet", "½ tsp garlic powder", "½ tsp paprika", "½ tsp dried oregano", "1–2 tbsp oil", "1 tbsp butter (for sauce)", "100–150ml cooking cream", "40–50g cheddar cheese, grated", "Optional: 30ml water/broth", "Optional: parsley or cilantro"],
    steps: ["Marinate chicken with garlic powder, salt, pepper, paprika, oregano for at least 2 hrs.", "Cook chicken in oil on medium heat until golden. Set aside.", "In same pan, melt butter, sauté garlic on low until fragrant.", "Add cooking cream and stir. Add cheddar, cook until melted and thickened.", "Return chicken, coat in sauce. Season to taste. Serve with garlic butter rice."],
  },
  {
    id: 10, name: "Korean Chicken Rice Bowl (치킨 덮밥)",
    protein: "Chicken", taste: "Savory", method: "Pan-fry / Sauté",
    cuisine: "Korean", time: "35 min", servings: 4,
    nutrition: { calories: 480, protein: 32, carbs: 45, fat: 16, fiber: 2 },
    tags: ["spicy", "rice bowl", "egg"],
    ingredients: ["300g chicken thigh meat", "½ onion", "2–3 cheongyang chili peppers", "1.5–2 tbsp soy sauce", "2 tbsp mirin", "1.5 tbsp sugar", "1.5–2 tbsp gochugaru", "Sesame oil to taste", "3 eggs", "Steamed rice"],
    steps: ["Pan-fry chicken thigh until golden brown.", "Add onion, chili peppers, soy sauce, mirin, sugar, gochugaru, sesame oil. Stir-fry together.", "Beat eggs, pour over top. Cook lightly until just set. Serve over rice."],
  },
  {
    id: 13, name: "Waterless Chicken Soup",
    protein: "Chicken", taste: "Savory", method: "Steaming / Braising",
    cuisine: "Indonesian", time: "38 min", servings: 6,
    nutrition: { calories: 310, protein: 28, carbs: 12, fat: 14, fiber: 3 },
    tags: ["healthy", "soup", "no water added"],
    ingredients: ["1 whole chicken", "1 onion", "1 red apple", "¼ head napa cabbage", "1 knob ginger", "3 dates (optional)", "1 tsp salt", "1 tsp pepper", "1 clove garlic", "1 spring onion", "Oil"],
    steps: ["Marinate chicken with salt, pepper, garlic, spring onion, and ginger.", "Layer onion, apple, cabbage, and dates at the bottom of pot.", "Place chicken on top. Cook on low heat — vegetables release moisture naturally.", "Simmer until chicken is fully cooked and tender."],
  },
  {
    id: 18, name: "Ayam Masak Saus Tiram",
    protein: "Chicken", taste: "Savory", method: "Deep-fry + Stir-fry",
    cuisine: "Indonesian", time: "50 min", servings: 6,
    nutrition: { calories: 420, protein: 30, carbs: 18, fat: 22, fiber: 2 },
    tags: ["oyster sauce", "spicy", "glossy sauce"],
    ingredients: ["750g chicken thigh, cut small", "½ tsp salt + ½ tsp MSG", "1 tbsp oyster sauce + 1 tbsp soy sauce (marinade)", "6 cloves garlic, sliced", "2 slices ginger, julienned", "½ onion", "350ml water", "3 tbsp oyster sauce", "2 tbsp kecap manis", "4 red + 4 green chilies, sliced", "½ tsp cornstarch + 2 tbsp water"],
    steps: ["Mix chicken with marinade, rest 30 min.", "Deep-fry in hot oil until golden.", "Sauté garlic, ginger, onion until soft.", "Add water, oyster sauce, kecap manis, MSG, pepper. Bring to boil.", "Add chilies and fried chicken. Cook 5 min.", "Add cornstarch slurry, stir until sauce thickens. Serve."],
  },
  {
    id: 25, name: "Salted Egg Chicken",
    protein: "Chicken", taste: "Savory", method: "Deep-fry + Sauté",
    cuisine: "Asian Fusion", time: "35 min", servings: 6,
    nutrition: { calories: 580, protein: 35, carbs: 28, fat: 34, fiber: 1 },
    tags: ["salted egg", "crispy", "indulgent"],
    ingredients: ["300g chicken thigh", "1 tsp chicken stock powder", "½ tsp grated ginger", "1 tsp sesame oil, salt, pepper, ½ tbsp cornstarch (marinade)", "1 cup flour + ½ cup cornstarch + ½ tsp baking powder (coating)", "4 salted egg yolks, mashed", "3 cloves garlic, minced", "Bird's eye chilies", "15–20 curry leaves", "½ cup milk or evaporated milk", "Butter, salt, sugar, pepper, MSG"],
    steps: ["Marinate chicken, coat in flour mixture.", "Double-fry until crispy (second fry hotter).", "Sauté garlic, chilies, curry leaves in butter.", "Add salted egg yolks, cook until foamy.", "Add milk, season to taste.", "Turn off heat, toss with fried chicken."],
  },
  {
    id: 26, name: "Sesame Chicken Claypot Rice",
    protein: "Chicken", taste: "Savory", method: "Claypot / Stovetop",
    cuisine: "Chinese", time: "35 min", servings: 4,
    nutrition: { calories: 490, protein: 31, carbs: 52, fat: 16, fiber: 2 },
    tags: ["claypot", "one-pot", "guo ba"],
    ingredients: ["~190g jasmine rice, washed", "300–400g boneless chicken thighs (skin-on preferred)", "150ml chicken stock", "1 tbsp sesame oil", "1 tbsp neutral oil", "3–5 ginger slices", "2 tbsp rice wine", "Wolfberries", "Salt", "Spring onions for garnish"],
    steps: ["Sear chicken skin-side down until golden. Set aside.", "Salt chicken generously.", "Add sesame oil + ginger to pot. Stir-fry 1–2 min. Add rice, stir 1 min.", "Add chicken stock, level rice, push chicken pieces in.", "Cover, cook on low 15–20 min until done.", "Add wolfberries, garnish with spring onions. A rice crust (guo ba) may form at the bottom — that's the best part!"],
  },
  {
    id: 15, name: "Salted Scallion Chicken Rice",
    protein: "Chicken", taste: "Savory", method: "Stovetop / Rice Cooker",
    cuisine: "Asian", time: "40 min", servings: 6,
    nutrition: { calories: 430, protein: 28, carbs: 48, fat: 12, fiber: 1 },
    tags: ["sesame oil", "spring onion", "rice"],
    ingredients: ["280g rice", "280g boneless chicken", "½ tbsp oyster sauce", "½ tbsp light soy sauce", "1½ tbsp sesame oil", "¾ tsp salt", "½ tsp sugar", "Ground black pepper", "2 stalks spring onion", "4 cloves garlic", "½ tbsp white sesame seeds"],
    steps: ["Marinate chicken with all sauces and seasonings.", "Cook rice as usual. Place marinated chicken on top before cooking starts.", "Once done, shred or slice chicken and mix with rice.", "Top with spring onion, garlic, and sesame seeds."],
  },
  {
    id: 28, name: "Oyakodon",
    protein: "Chicken", taste: "Savory", method: "Simmering",
    cuisine: "Japanese", time: "25 min", servings: 4,
    nutrition: { calories: 460, protein: 30, carbs: 50, fat: 12, fiber: 1 },
    tags: ["egg", "rice bowl", "dashi", "torotoro"],
    ingredients: ["1 large boneless chicken thigh (~350g)", "1 medium yellow onion, thinly sliced", "4 large eggs, lightly whisked (keep streaks)", "4 servings steamed Japanese short-grain rice", "300ml water + 1 tsp dashi powder", "4 tbsp soy sauce", "4 tbsp mirin", "Shredded nori to garnish"],
    steps: ["Cut chicken into bite-sized pieces.", "Cold start: combine broth with raw chicken and onion in cold pan. Turn to medium heat.", "Once boiling, skim foam. Reduce to low and simmer ~5 min.", "Turn heat to medium. Pour ⅔ of egg in a circle.", "Once first layer begins to set, pour remaining egg. Turn off heat while still slightly runny.", "Slide over warm rice. Garnish with nori."],
  },
  {
    id: 29, name: "Marry Me Chicken",
    protein: "Chicken", taste: "Savory", method: "Pan-fry / Sauté",
    cuisine: "Italian-inspired", time: "30 min", servings: 4,
    nutrition: { calories: 540, protein: 42, carbs: 14, fat: 32, fiber: 2 },
    tags: ["creamy", "sun-dried tomato", "parmesan"],
    ingredients: ["650g boneless skinless chicken breasts (~4)", "50g plain flour", "1 tbsp olive oil", "3 garlic cloves, crushed", "150g sun-dried tomatoes, drained", "1 tsp dried oregano", "2 tsp paprika", "150ml double cream", "200ml chicken stock", "50g parmesan, grated", "15g fresh basil", "½ lemon, juiced", "Salt and pepper"],
    steps: ["Coat chicken in flour.", "Cook in hot oil 5 min each side. Remove to plate.", "On low heat, add garlic, sun-dried tomatoes, oregano, paprika. Stir 3–5 min.", "Add cream, stock, parmesan, salt and pepper. Stir.", "Return chicken to sauce. Cover, cook 5 min. Flip, cook another 5 min.", "Remove from heat. Add basil and lemon juice."],
  },
  {
    id: 23, name: "Sapi Cah Cabai",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "45 min", servings: 6,
    nutrition: { calories: 380, protein: 28, carbs: 16, fat: 22, fiber: 3 },
    tags: ["spicy", "chili", "wok"],
    ingredients: ["500g beef", "2 tsp baking soda (tenderizer)", "2 tbsp cornstarch", "2 tbsp soy sauce", "1 tbsp sesame oil", "3 tbsp oyster sauce", "1 tsp black pepper", "3 tbsp cornstarch solution (thickener)", "2 large green chilies", "5 curly green chilies", "2 large red chilies", "5 curly red chilies", "½ onion"],
    steps: ["Tenderize beef with baking soda. Rinse well. Marinate with cornstarch, soy sauce, sesame oil, oyster sauce, pepper.", "Stir-fry beef on high heat until browned. Set aside.", "Stir-fry onion and chilies until fragrant.", "Return beef, add oyster sauce.", "Add cornstarch solution to thicken. Serve."],
  },
  {
    id: 24, name: "Hotplate Beef Tofu Telur",
    protein: "Beef", taste: "Savory", method: "Steaming",
    cuisine: "Indonesian", time: "33 min", servings: 4,
    nutrition: { calories: 320, protein: 26, carbs: 10, fat: 18, fiber: 1 },
    tags: ["tofu", "egg", "meal prep", "high protein"],
    ingredients: ["250g minced beef", "2 tbsp oyster sauce", "1 tbsp low-cal kecap manis", "1 tbsp chili oil (optional)", "50ml warm water + 1 tsp stock + 1 tbsp tapioca starch", "1 pack silken tofu", "1–2 eggs, beaten", "Chili and spring onion to garnish"],
    steps: ["Mix minced beef with sauces and starch mixture.", "Pour into heat-proof dish. Layer with silken tofu and beaten egg.", "Steam 15–20 minutes until set.", "Garnish with chili and spring onion. Serve on a hot plate."],
  },
  {
    id: 16, name: "Sukiyaki",
    protein: "Beef", taste: "Savory", method: "Hot Pot",
    cuisine: "Japanese", time: "35 min", servings: 6,
    nutrition: { calories: 420, protein: 30, carbs: 22, fat: 20, fiber: 3 },
    tags: ["hot pot", "mushrooms", "tofu", "noodles"],
    ingredients: ["1 lb thinly sliced ribeye", "1 piece beef fat", "½ cup mirin", "½ cup sake", "2 tbsp sugar", "½ cup soy sauce", "1 large green onion (white part)", "1 bunch enoki mushrooms", "5 shiitake mushrooms", "1 bunch shimeji mushrooms", "1 bunch shungiku (chrysanthemum greens)", "1 pack firm tofu", "1 pack shirataki noodles", "1 beaten egg per person (dipping)"],
    steps: ["Rinse and cut all ingredients.", "Heat mirin, sake, sugar until dissolved and alcohol evaporates (~3–5 min). Add soy sauce.", "In hot pot, heat beef fat. Char the white part of green onion.", "Add all remaining ingredients.", "Pour sauce over and simmer until cooked through.", "Dip in beaten egg and enjoy."],
  },
  {
    id: 11, name: "Japanese Curry",
    protein: "Beef", taste: "Savory", method: "Simmering",
    cuisine: "Japanese", time: "35 min", servings: 4,
    nutrition: { calories: 510, protein: 28, carbs: 58, fat: 16, fiber: 5 },
    tags: ["curry", "comfort food", "easy"],
    ingredients: ["5–7 oz yellow/gold potatoes", "1–2 carrots", "½ white/yellow onion", "½–¾ lb beef cubes", "3–4 Japanese curry blocks (e.g. Golden Curry)", "3 cups water", "Rice or udon noodles"],
    steps: ["Peel and chop potatoes, carrots, onion.", "Sauté beef and vegetables on medium-high for 5 min.", "Add 3 cups water. Boil then simmer 15 min.", "Add curry blocks. Add more water if too thick.", "Serve over rice or udon noodles."],
  },
  {
    id: 2, name: "Lasagna Cake (Joel's)",
    protein: "Minced Beef", taste: "Savory", method: "Baking + Simmering",
    cuisine: "Italian-inspired", time: "55 min", servings: 6,
    nutrition: { calories: 680, protein: 38, carbs: 52, fat: 32, fiber: 4 },
    tags: ["bolognese", "bechamel", "mashed potato", "showstopper"],
    ingredients: ["1kg minced beef", "500g tomato puree", "2 onions, 1 carrot, 135g celery", "Spices: salt, beef stock, sugar, pepper, thyme, rosemary", "Bechamel: 25g butter + 25g flour + 400–500ml milk", "Mashed potato: ~900g potatoes, 100g butter, 250g milk", "Red cheddar (for crispy topping)", "Mozzarella", "Instant lasagna sheets (ready to bake)", "Garnish: thyme, parsley, paprika"],
    steps: ["Roll beef into balls, pan-sear until browned.", "Sauté onion, carrot, celery. Add garlic, tomato puree, spices.", "Return beef. Simmer on lowest heat 3–4 hours.", "Bechamel: make roux with butter+flour, gradually add milk, stir until thick.", "Mashed potato: steam, mash through sieve, mix with butter and milk.", "Bake red cheddar at 140–150°C for 30–40 min until crispy.", "Assemble in 20cm springform: bechamel → cheese → lasagna → ragù, repeat 3–4 layers.", "Cover with foil. Bake 180°C for 45–50 min. Remove foil, bake 200°C for 10 min.", "Cool, coat sides with mashed potato, decorate with red cheddar crispy."],
  },
  {
    id: 14, name: "Classic Lasagna",
    protein: "Minced Beef", taste: "Savory", method: "Baking + Simmering",
    cuisine: "Italian", time: "90 min", servings: 6,
    nutrition: { calories: 620, protein: 36, carbs: 48, fat: 28, fiber: 4 },
    tags: ["bechamel", "mozzarella", "cheddar", "spinach"],
    ingredients: ["1kg minced beef or mutton", "2–3 tbsp olive oil", "1 onion, 1 carrot, 1–2 celery sticks diced", "4 garlic cloves", "1 tbsp chili flakes", "2 cans chopped tomatoes", "1 tbsp Italian herbs", "3 beef stock cubes", "¼ cup tomato paste + 1 cup water", "Bechamel: 4 tbsp butter + 4 tbsp flour + 3 cups cold milk", "Lasagna sheets (1–2 boxes)", "300g mozzarella + 300g white cheddar grated", "Spinach, basil (optional)"],
    steps: ["Sauté onion, carrot, celery. Add garlic and chili flakes.", "Brown minced meat. Add tomatoes, herbs, stock cubes, tomato paste, water.", "Simmer 20–30 min until thick.", "Bechamel: melt butter, whisk in flour, gradually add cold milk, stir until thick.", "Layer: meat sauce → lasagna sheets → bechamel → cheese. Repeat.", "Top with cheese. Bake at 180°C for 35–40 min until golden and bubbling."],
  },
  {
    id: 19, name: "Chilli Oil Stove Top Lasagna",
    protein: "Vegetarian", taste: "Savory", method: "Stovetop",
    cuisine: "Fusion", time: "25 min", servings: 6,
    nutrition: { calories: 390, protein: 14, carbs: 52, fat: 14, fiber: 4 },
    tags: ["no-bake", "quick", "coconut milk", "chili oil"],
    ingredients: ["2 tbsp olive oil", "½ onion chopped", "2 cloves garlic", "1 carrot diced", "200g tomato purée", "½ cup coconut milk", "½ cup water", "½ tsp chili flakes", "½ tsp oregano", "1 spoonful chili oil", "8–10 lasagna sheets broken in half", "1 cup grated mozzarella", "Salt and pepper"],
    steps: ["Sauté onion 1 min. Add garlic, chili oil, chili flakes, oregano.", "Add carrot, cook 2–3 min.", "Add tomato purée. Add water and coconut milk. Season.", "Break lasagna sheets in half, place in sauce. Cook 8–10 min.", "Top with mozzarella, cover until melted. Garnish with spring onions and chili oil."],
  },
  {
    id: 17, name: "Hokkaido Salmon Miso Hot Pot",
    protein: "Salmon", taste: "Savory", method: "Hot Pot / Simmering",
    cuisine: "Japanese", time: "35 min", servings: 2,
    nutrition: { calories: 380, protein: 32, carbs: 18, fat: 18, fiber: 3 },
    tags: ["miso", "hot pot", "tofu", "warming"],
    ingredients: ["150g salmon fillet", "200g napa cabbage", "½ stalk negi (long green onion)", "50g enoki mushrooms", "150g silken tofu", "1 tsp grated ginger", "10g butter", "500ml water + 1 tsp dashi powder", "2 tbsp miso", "2 tbsp sake", "2 tsp mirin", "1 tsp soy sauce", "Black pepper, green onion, doubanjiang (optional)"],
    steps: ["Cut all ingredients into bite-sized pieces.", "Combine water, dashi, miso, sake, mirin, soy sauce in pot. Heat.", "Add vegetables and salmon. Cook until heated through.", "Finish with grated ginger and butter. Garnish and serve."],
  },
  {
    id: 31, name: "Shrimp Steamed Rice (Rice Cooker)",
    protein: "Shrimp", taste: "Savory", method: "Rice Cooker / Steaming",
    cuisine: "Asian Fusion", time: "20 min", servings: 1,
    nutrition: { calories: 340, protein: 24, carbs: 42, fat: 7, fiber: 3 },
    tags: ["one-pot", "easy", "turmeric", "egg"],
    ingredients: ["½ cup jasmine rice", "½ cup water", "¼ tsp dark soy sauce", "1 tsp soy sauce", "Turmeric to taste", "3 oz shrimp", "2 oz carrots and peas", "1 egg", "Salt, pepper, green onions, sesame oil"],
    steps: ["Wash and drain rice. Add ½ cup water.", "Add turmeric, dark soy sauce, soy sauce. Stir.", "Place shrimp and carrots & peas on top.", "Start rice cooker. At ~15 min, drizzle 1 beaten egg on top.", "Once done, add green onions and sesame oil. Mix and season."],
  },
  {
    id: 22, name: "Tumis Tahu Tempe Teri",
    protein: "Tofu & Tempeh", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "36 min", servings: 6,
    nutrition: { calories: 220, protein: 16, carbs: 14, fat: 11, fiber: 4 },
    tags: ["anchovy", "plant-based", "budget-friendly"],
    ingredients: ["Tofu, tempeh, dried anchovies (teri)", "4 shallots, 2 garlic cloves", "5 red + 5 green chilies", "2 tomatoes", "1 tbsp oyster sauce", "¼ tsp stock powder", "¼ tsp MSG", "½ tsp sugar", "⅛ tsp salt", "50ml water"],
    steps: ["Fry tofu, tempeh, and anchovies separately until golden.", "Sauté shallots, garlic, chilies until fragrant.", "Add tomatoes and all sauces and seasonings with water.", "Return tofu, tempeh, anchovies. Stir and cook until well combined."],
  },
  {
    id: 21, name: "Air Fryer Eggplant with Oyster Sauce",
    protein: "Vegetable", taste: "Savory", method: "Air Fryer",
    cuisine: "Asian", time: "34 min", servings: 4,
    nutrition: { calories: 140, protein: 3, carbs: 18, fat: 6, fiber: 5 },
    tags: ["vegan-adaptable", "quick", "air fryer", "low calorie"],
    ingredients: ["Purple eggplants", "Spring onions sliced", "Dried or fresh chili", "Garlic minced", "Sugar, soy sauce, oyster sauce, sesame oil, oil"],
    steps: ["Air fry eggplants at 180°C for 12 min.", "Mix all sauce ingredients in a bowl.", "Slit the eggplants and pour sauce over.", "Air fry at 200°C for 5–7 min.", "Top with fresh spring onions and serve."],
  },
  {
    id: 9, name: "Turkish Pide (Cheesy)",
    protein: "Flour / Dough", taste: "Baking", method: "Baking",
    cuisine: "Turkish", time: "45 min + proofing", servings: 4,
    nutrition: { calories: 520, protein: 18, carbs: 68, fat: 18, fiber: 2 },
    tags: ["bread", "mozzarella", "yeasted", "savory bake"],
    ingredients: ["200ml warm UHT full cream milk", "5g instant yeast", "1 tbsp sugar", "30g unsalted butter melted", "320g high-protein flour", "30g full cream milk powder", "½ tsp salt", "100ml evaporated milk (glaze)", "Mozzarella cheese", "Black and white sesame seeds"],
    steps: ["Mix warm milk, butter, yeast, sugar. Rest 5–10 min until foamy.", "Mix flour, milk powder, salt. Combine with yeast mixture. Knead 15 min.", "Proof in oiled bowl for 1 hour.", "Deflate, divide into 4 portions (~140–150g). Rest 10 min.", "Flatten into oblong shapes. Fill with cheese, seal ends.", "Final proof 30–45 min.", "Brush with evaporated milk, sprinkle sesame seeds. Bake 220°C for 12–15 min."],
  },
  {
    id: 20, name: "Easiest Sandwich Bread",
    protein: "Flour / Dough", taste: "Baking", method: "Baking",
    cuisine: "Western", time: "50 min + rise", servings: 16,
    nutrition: { calories: 180, protein: 4, carbs: 32, fat: 4, fiber: 1 },
    tags: ["no-knead", "beginner", "everyday bread"],
    ingredients: ["5¾ cups all-purpose flour", "¼ cup sugar", "1 packet instant yeast (2¼ tsp)", "2 tsp salt", "2½ cups lukewarm water", "⅓ cup oil"],
    steps: ["Whisk flour, sugar, yeast, salt. Add water and oil. Stir into a rough sticky dough.", "Cover and let rise 2 hours until doubled.", "Grease and flour two loaf pans.", "Divide in half, loosely shape into logs, place in pans.", "Cover and rise 30 min – 1 hour.", "Bake at 350°F (175°C) ~30 min until deeply golden.", "Cool before slicing."],
  },
  {
    id: 4, name: "Brown Butter Hojicha × Earl Grey Cookies",
    protein: "Flour / Butter", taste: "Baking", method: "Baking",
    cuisine: "Western/Japanese Fusion", time: "30 min + chill", servings: 9,
    nutrition: { calories: 420, protein: 5, carbs: 52, fat: 22, fiber: 1 },
    tags: ["brown butter", "hojicha", "white chocolate bark", "gourmet"],
    ingredients: ["80g cold unsalted butter cubed", "100g browned butter cooled", "2 tsp hojicha powder", "1 Earl Grey tea bag ground (dough)", "150g demerara/brown sugar + 110g granulated sugar", "1 egg + 1 yolk (room temp)", "2 tsp vanilla", "1 tsp white miso (optional)", "240g AP flour", "¾ tsp baking soda", "½ tsp salt + flaky salt for topping", "300g white chocolate + 1 Earl Grey tea bag (bark)", "100g unmelted white chocolate (for tempering)"],
    steps: ["Bark: melt 300g white choc with ground tea. Pour over 100g unmelted choc to temper. Spread, chill 20 min. Break into chunks.", "Brown 100g butter, mix with hojicha, tea, sugars. Cool 10–15 min.", "Cream in 80g cold butter. Add egg, yolk, vanilla, miso. Mix until glossy.", "Fold in flour, baking soda, salt until just combined. Fold in 250g bark.", "Scoop 80–90g balls. Chill 1 hr or overnight.", "Bake 190°C for 9–12 min. Shape with cutter, top with bark + flaky salt. Cool 10 min."],
  },
  {
    id: 5, name: "Soft Hojicha Cookies (No Mixer, No Chill)",
    protein: "Flour / Butter", taste: "Baking", method: "Baking",
    cuisine: "Japanese-inspired", time: "20 min", servings: 8,
    nutrition: { calories: 280, protein: 3, carbs: 36, fat: 13, fiber: 1 },
    tags: ["hojicha", "easy", "no-chill", "tea-flavored"],
    ingredients: ["113g unsalted butter", "175g all-purpose flour", "½ tsp baking powder", "½ tsp baking soda", "½ tsp fine sea salt", "10g hojicha powder", "125g granulated white sugar", "1 large egg"],
    steps: ["Preheat oven to 350°F (fan) or 375°F (no fan). Line baking sheet.", "Melt butter and let cool completely (soft but NOT hot).", "Whisk all dry ingredients and sugar together.", "Stir in melted butter and egg until combined.", "Scoop 8 balls (~3 tbsp each), space 3 inches apart.", "Bake 8–10 min until edges set, centres gooey.", "Cool on pan 10 min before eating."],
  },
  {
    id: 6, name: "Miso White Chocolate Brown Butter Cookies",
    protein: "Flour / Butter", taste: "Baking", method: "Baking",
    cuisine: "Western/Japanese Fusion", time: "30 min + chill", servings: 10,
    nutrition: { calories: 390, protein: 5, carbs: 46, fat: 21, fiber: 2 },
    tags: ["miso", "spelt flour", "white chocolate", "gut health"],
    ingredients: ["145g unsalted butter", "125g coconut sugar (or brown sugar)", "55g raw sugar", "1 large egg + 1 yolk (room temp)", "¼ tsp vanilla powder or 1 tsp vanilla essence", "135g wholegrain spelt flour", "60g plain flour", "½ tsp baking soda", "¼ tsp baking powder", "½ tsp salt", "1 tbsp white miso paste", "110–120g white chocolate chunks", "Flaky salt for topping"],
    steps: ["Brown butter until amber. Off heat, whisk in miso. Rest 10 min.", "Mix butter with both sugars.", "Add egg, yolk, vanilla. Beat well.", "Fold in flours, baking soda, baking powder, salt just until combined.", "Fold in white chocolate chunks.", "Refrigerate at least 4 hours (overnight best).", "Rest 15 min outside fridge. Shape into ~100g balls.", "Bake at 200°C (fan 180°C) for 11–13 min. Sprinkle flaky salt. Cool 10 min."],
  },
  {
    id: 7, name: "OG Crunchy Cookies (Lebaran)",
    protein: "Flour / Butter", taste: "Baking", method: "Baking",
    cuisine: "Indonesian", time: "45 min", servings: 45,
    nutrition: { calories: 95, protein: 1, carbs: 11, fat: 5, fiber: 0 },
    tags: ["crunchy", "chocolate", "Lebaran"],
    ingredients: ["110g unsalted butter (room temp)", "65g light brown sugar + 40g granulated sugar", "1 egg (50g)", "2 tsp vanilla extract", "180g medium-protein flour", "¼ tsp baking soda", "Pinch of salt", "150g chocolate (compound or couverture)"],
    steps: ["Cream butter and both sugars until light.", "Add egg and vanilla. Mix well.", "Fold in flour, baking soda, and salt.", "Stir in chocolate pieces.", "Portion and bake until crunchy and golden."],
  },
  {
    id: 8, name: "Seasalt Chocolate Cookie (Lebaran)",
    protein: "Flour / Butter", taste: "Baking", method: "Baking",
    cuisine: "Indonesian", time: "45 min", servings: 53,
    nutrition: { calories: 88, protein: 1, carbs: 10, fat: 5, fiber: 0 },
    tags: ["chocolate couverture", "sea salt", "Lebaran", "milk powder"],
    ingredients: ["150g unsalted butter (room temp)", "140g light brown sugar + 50g granulated sugar", "1 egg (50g)", "1 tsp vanilla extract", "¼ tsp salt", "250g medium-protein flour", "½ tsp baking soda + 1 tsp baking powder", "160g chocolate couverture", "35g milk powder", "Sea salt flakes for topping"],
    steps: ["Cream butter with both sugars.", "Add egg and vanilla. Mix well.", "Fold in flour, baking soda, baking powder, salt, milk powder.", "Fold in chocolate couverture chunks.", "Portion into ~15g pieces.", "Bake and top with sea salt flakes while warm."],
  },
  {
    id: 27, name: "No Added Sugar Apple Fritters",
    protein: "Fruit / Oats", taste: "Baking", method: "Baking",
    cuisine: "Western", time: "25 min", servings: 6,
    nutrition: { calories: 130, protein: 3, carbs: 22, fat: 4, fiber: 3 },
    tags: ["healthy", "sugar-free", "apple", "oats"],
    ingredients: ["2 apples finely diced", "1 egg", "1 tbsp melted coconut oil", "1 tsp cinnamon", "Pinch of baking powder", "¼ cup oats", "¼ cup rice flour", "Optional: coconut butter, maple syrup, or icing sugar to serve"],
    steps: ["Preheat oven to 190°C / 180°C fan.", "Whisk egg and coconut oil.", "Add diced apples.", "Add cinnamon, oats, rice flour, baking powder. Mix.", "Scoop heaped spoonfuls onto lined baking tray.", "Bake 14–17 min until slightly golden."],
  },
  {
    id: 12, name: "Date & Walnut Loaf",
    protein: "Fruit / Flour", taste: "Baking", method: "Baking",
    cuisine: "Western", time: "58 min", servings: 10,
    nutrition: { calories: 210, protein: 4, carbs: 34, fat: 7, fiber: 3 },
    tags: ["dates", "walnuts", "no refined sugar", "loaf"],
    ingredients: ["14 large medjool dates", "1 cup warm oat milk (or any milk)", "1½ cups self-raising flour", "1 tsp baking powder", "½ cup oil", "Walnuts and chocolate chips"],
    steps: ["Preheat oven to 180°C.", "Blend dates with warm milk until smooth.", "Add remaining ingredients and mix.", "Pour into prepared loaf tin. Top with walnuts.", "Bake 40–45 minutes."],
  },
  {
    id: 3, name: "Freezer Miso Soup Stock",
    protein: "Soy / Dashi", taste: "Savory", method: "No-Cook / Freeze",
    cuisine: "Japanese", time: "15 min + freeze", servings: 30,
    nutrition: { calories: 35, protein: 2, carbs: 4, fat: 1, fiber: 1 },
    tags: ["meal prep", "make-ahead", "quick breakfast", "freeze"],
    ingredients: ["650g miso (additive-free)", "2 sachets granulated dashi (~20g)", "Dried vegetables, dried wakame, kiriboshi daikon, dried sakura shrimp, tororo, dried shijimi clams, bonito flakes — all to taste", "Optional add-ins: aburaage, shiitake, clams"],
    steps: ["Combine all ingredients in a large bowl. Mix well.", "Transfer to a storage container and freeze.", "To serve: scoop 1 tbsp frozen miso into a bowl. Pour hot water over, stir well.", "Optional: wrap individual portions in cling wrap for packed lunch."],
  },
  {
    id: 30, name: "Pandan Lemon Chrysanthemum Cold Brew Tea",
    protein: "Herbal", taste: "Drink", method: "Cold Brew / No-Cook",
    cuisine: "Asian", time: "6 hrs hands-off", servings: 8,
    nutrition: { calories: 25, protein: 0, carbs: 7, fat: 0, fiber: 0 },
    tags: ["caffeine-free", "floral", "pandan", "spa vibes"],
    ingredients: ["4–5 stalks pandan leaves", "1 lemon", "2 tbsp honey", "3 tbsp dried chrysanthemum flowers", "2L water"],
    steps: ["Gently smash lemon and mix with honey.", "Layer pandan, chrysanthemum, lemon-honey in a large jar.", "Add room-temperature water.", "Refrigerate 6 hours or overnight before serving."],
  },
  {
    id: 100, name: "Cumi Krispi Pedas Manis",
    protein: "Squid", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/24635168",
    nutrition: { calories: 260, protein: 20, carbs: 18, fat: 10, fiber: 1 },
    tags: ["crispy", "spicy", "sweet"],
    ingredients: ["200 gr cumi", "3/4 sdt baking powder", "1/2 jeruk nipis", "2 siung bawang putih", "1/2 sdt jahe", "2 sdm telur", "1/2 sdt garam", "1 sdt kaldu jamur", "Sejumput merica", "4 sdm tepung tapioka", "3 sdm tepung terigu protein sedang", "Tepung tapioka", "1 sdm minyak", "1 sdm margarin", "1/2 bawang bombai", "3 siung bawang putih", "3 cabai rawit merah (opsional)", "1 batang daun bawang", "2 sdm saus tomat", "2 sdm saus sambal", "1 sdm saus tiram", "1 sdt kecap ikan", "2 sdt gula pasir"],
    steps: ["Potong tipis cumi, masukkan ke mangkuk.", "Marinasi dengan bawang putih parut, jahe parut, jeruk nipis, garam, kaldu jamur, merica, baking powder, dan telur. Aduk rata, diamkan 15–60 menit.", "Tambahkan tepung tapioka dan tepung terigu, aduk rata.", "Balur lagi dengan tepung tapioka, aduk rata. Diamkan 3 menit lalu saring.", "Goreng cumi api besar sampai kecokelatan, tiriskan.", "Cincang bawang putih, potong kotak bawang bombai, cabai rawit, dan daun bawang.", "Panaskan margarin + sedikit minyak, tumis bawang putih, bombai, cabai sampai wangi.", "Masukkan saus tomat, saus sambal, saus tiram, kecap ikan, gula. Tumis sebentar api kecil lalu masukkan cumi goreng, aduk rata.", "Masukkan daun bawang, aduk rata.", "Sajikan."],
  },
  {
    id: 101, name: "Ayam Panggang Madu",
    protein: "Chicken", taste: "Savory", method: "Roasting",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/16808146?ref=profile",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["sweet", "grilled"],
    ingredients: ["1 ekor ayam negeri (±1,2 kg)", "1 jeruk nipis", "5 siung bawang putih", "1 jempol jahe", "2 sdm saus tiram", "2 sdm kecap asin", "1 sdm gula palem", "1 sdm kaldu ayam bubuk", "1/2 sdt merica", "1/2 sdt bubuk ngohiong", "1 sdm minyak wijen", "1/4 sdt pewarna makanan merah (opsional)", "4 sdm madu", "1 sdt minyak wijen", "2 sdt kecap asin"],
    steps: ["Iris besar jahe dan bawang putih. Marinasi ayam dengan jeruk nipis, bawang putih, jahe, kecap asin, saus tiram, gula palem, merica, kaldu ayam bubuk, bubuk ngohiong, minyak wijen, dan pewarna merah (opsional). Aduk rata.", "Tutup cling wrap sambil ditekan-tekan, diamkan di kulkas semalaman.", "Keringkan ayam. Tusukkan tongkat rotisserie, jepit hingga kencang. Ikat bagian paha.", "Panggang 60 menit (api bawah besar, api atas kecil) / oven 180°C.", "Saus cocol: campur madu, minyak wijen, kecap asin.", "Setelah 40 menit, oles ayam dengan olesan lalu panggang lagi. Istirahatkan 15 menit sebelum dipotong.", "Sajikan."],
  },
  {
    id: 102, name: "Sop Ayam ala Pak Min Klaten",
    protein: "Chicken", taste: "Savory", method: "Boiling / Soup",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/24584500?ref=search&find_method=search_top&search_term=sop+ayam+pak+min+klaten",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["soup"],
    ingredients: ["1 ekor ayam kampung, potong 8", "1 wortel (opsional)", "Daun bawang secukupnya", "Daun seledri secukupnya (boleh skip)", "Bawang goreng (opsional)", "5 siung bawang putih", "1/2 bawang bombay", "3 ruas jahe", "1/4 buah pala", "2 batang serai, geprek (opsional)", "3 lembar daun salam", "5 lembar daun jeruk (buang tulang)", "2 cm kayu manis", "1/2 sdm kaldu bubuk", "1/2 sdm lada bubuk", "1 sdt gula", "1 sdt garam"],
    steps: ["Cuci bersih ayam, potong sesuai selera. Siapkan bahan lain.", "Haluskan bumbu halus lalu tumis dengan sedikit minyak sampai berubah warna (api sedang-kecil, aduk agar tidak gosong).", "Rebus ayam dengan air secukupnya ±5 menit, angkat & cuci lagi. Buang air rebusan pertama.", "Tuang air bersih, didihkan. Masukkan ayam, wortel, bumbu halus, dan bumbu pelengkap. Kecilkan api, masak ±1 jam.", "Saat matang, cek rasa. Masukkan daun bawang & seledri.", "Taburi bawang goreng saat disajikan."],
  },
  {
    id: 103, name: "Tempe Orek",
    protein: "Tofu & Tempeh", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/24744742?ref=profile",
    nutrition: { calories: 200, protein: 14, carbs: 14, fat: 10, fiber: 4 },
    tags: ["Indonesian"],
    ingredients: ["600 gr tempe", "2 sdm minyak", "7 siung bawang merah", "2 cm lengkuas", "4 lembar daun salam", "3–4 sdm kecap manis", "2–3 sdm gula merah", "1/4 sdt merica", "2 sdm MAGGI Saus Tiram", "2 sachet MAGGI Magic Lezat", "500 ml air", "3 cabai gendot hijau", "2 cabai merah besar", "3 butir kemiri, geprek", "5 siung bawang putih, geprek", "3 sdm minyak"],
    steps: ["Blender kemiri dan bawang putih dengan minyak sampai halus.", "Iris bawang merah, geprek lengkuas, potong-potong tempe.", "Tumis bawang merah, lengkuas, daun salam sampai bawang kecokelatan.", "Masukkan bumbu halus, tumis sampai harum.", "Masukkan tempe, air, kecap manis, MAGGI Saus Tiram, MAGGI Magic Lezat, merica, gula merah. Masak.", "Masukkan cabai hijau & cabai merah, masak sampai matang dan air menyusut.", "Sajikan."],
  },
  {
    id: 104, name: "Tempe Chili Padi",
    protein: "Tofu & Tempeh", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    nutrition: { calories: 200, protein: 14, carbs: 14, fat: 10, fiber: 4 },
    tags: ["spicy"],
    ingredients: ["330 gr tempe", "1 sdm bumbu marinasi tempe instan", "4 sdm maizena", "3 sdm air", "5 siung bawang putih", "6 siung bawang merah", "50 gr cabai rawit merah", "50 gr cabai rawit hijau", "4 lembar daun jeruk", "2 sdt kaldu jamur", "2 sdt gula pasir", "1/8 sdt merica", "100 ml air", "1 sdm air asam jawa", "Nasi putih"],
    steps: ["Potong memanjang tempe dan iris miring.", "Campur bumbu marinasi instan + maizena + air, aduk rata. Masukkan tempe, aduk rata.", "Goreng tempe sampai kecokelatan, tiriskan.", "Chopper: haluskan bawang putih, bawang merah, cabai rawit merah, cabai rawit hijau, dan daun jeruk.", "Tumis bumbu dasar sampai wangi. Tambahkan air, kaldu jamur, gula, merica, air asam jawa, dan tempe. Tumis sesaat.", "Sajikan."],
  },
  {
    id: 105, name: "Chicken Teriyaki",
    protein: "Chicken", taste: "Savory", method: "Stir-fry",
    cuisine: "Japanese", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/23930893?ref=profile",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["sweet"],
    ingredients: ["4 pcs paha ayam filet dengan kulit (total 750 gr)", "8 sdm saus teriyaki", "1/2 jeruk nipis", "1/4 sdt merica", "2 sdm maizena", "3 siung bawang putih, geprek", "100 ml air", "50 gr saus teriyaki", "1/2 sdm mentega tawar (opsional)", "3 siung bawang putih", "1/2 bawang bombai", "1/2 sdm mentega tawar (opsional)", "50 gr saus teriyaki"],
    steps: ["Marinasi ayam dengan jeruk nipis, bawang putih, merica, maizena dan saus teriyaki. Diamkan min. 2 jam atau semalaman di kulkas.", "Ayam panggang: panaskan sedikit minyak, masukkan ayam, masak sampai sedikit kecokelatan di semua sisi.", "Masukkan air dan saus teriyaki, masak 5 menit api sedang sambil ditutup. Masukkan mentega, masak sesaat.", "Untuk tumis: iris bawang putih, iris tebal bawang bombai, potong-potong ayam.", "Panaskan sedikit minyak, tumis bawang putih sebentar lalu masukkan ayam. Tumis api besar sampai sedikit kecokelatan.", "Masukkan bawang bombai, tumis sebentar. Masukkan saus teriyaki dan mentega, masak beberapa saat.", "Sajikan."],
  },
  {
    id: 106, name: "Nashville Chicken",
    protein: "Chicken", taste: "Savory", method: "Deep-fry",
    cuisine: "American", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/16796137?ref=profile",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["quick & easy"],
    ingredients: ["500 gr dada ayam filet", "2 sdt kaldu ayam bubuk", "1/3 sdt garam", "1/3 sdt merica", "1 sdt gula pasir", "1/2 sdm bawang putih bubuk", "1/2 sdm cabai bubuk / bubuk paprika asap", "2 sdt tabasco", "300 gr tepung terigu protein sedang", "2 sdt baking powder", "3 sdm maizena", "1 sdt garam", "1 sdt merica", "2 butir telur", "100 ml susu", "2 sdm campuran tepung kering", "1 sdt paprika bubuk (opsional)", "1 sdm paprika bubuk", "1 sdt cabai rawit bubuk", "1 sdt bawang putih bubuk", "2 sdt kaldu jamur", "2 sdt gula palem", "150 ml minyak panas", "2 sdt tabasco"],
    steps: ["Potong miring ayam lalu sayat-sayat.", "Marinasi dengan garam, merica, kaldu ayam bubuk, gula, bawang putih bubuk, cabai/paprika bubuk, dan tabasco. Tutup, diamkan min. 2 jam atau semalaman di kulkas.", "Tepung kering: campur terigu, maizena, garam, merica, baking powder.", "Tepung basah: campur telur, susu, dan 2 sdm campuran tepung kering. Tambahkan paprika bubuk (opsional).", "Balur ayam: tepung kering → tepung basah → tepung kering.", "Goreng api sedang-besar sampai keemasan, tiriskan.", "Minyak pedas: campur semua bumbu kering + gula palem, tuang minyak panas, aduk. Tambahkan tabasco.", "Celupkan ayam ke minyak pedas sampai rata.", "Sajikan dengan roti panggang & pickled gherkins."],
  },
  {
    id: 107, name: "Ayam Goreng Hong Kong",
    protein: "Chicken", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/16662355?ref=profile",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["crispy"],
    ingredients: ["1 kg paha ayam", "1/2 sdm garam", "1 sdm gula pasir", "1/2 sdm kaldu bubuk/penyedap", "1/2 sdt merica", "1/2 sdt bubuk ngohiong", "1 sdm kecap hitam", "2 sdm saus tiram", "2 sdt minyak wijen", "6 siung bawang putih", "1 jempol jahe", "2 sdm minyak", "500 ml air", "2 sdm maizena", "2 siung bawang putih", "5 cabai keriting merah", "10 cabai rawit merah", "50 ml air", "1/4 sdt garam", "1 sdt gula pasir", "1 sdt cuka", "Daun ketumbar", "Nasi putih", "Timun", "Minyak bawang putih goreng"],
    steps: ["Marinasi ayam dengan kecap hitam, saus tiram, garam, gula, kaldu bubuk, merica, bubuk ngohiong. Aduk rata.", "Tambahkan minyak wijen, aduk rata. Diamkan 1–2 jam suhu ruang.", "Sambal: blender cabai rawit, cabai keriting, bawang putih, air. Masukkan ke wajan.", "Tambahkan garam, gula, cuka. Masak sebentar.", "Iris jahe, geprek bawang putih. Panaskan minyak, tumis bawang putih & jahe hingga wangi. Masukkan ayam beserta bumbu marinasi, masak sesaat.", "Masukkan air, masak 20–30 menit api kecil. Angkat ayam.", "Buang jahe & bawang. Masukkan larutan maizena, masak sampai agak mengental.", "Goreng ayam api sedang sampai kering, tiriskan.", "Sajikan dengan pelengkap."],
  },
  {
    id: 108, name: "Tumis Jamur Shimeji Brokoli Tahu",
    protein: "Vegetable", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    nutrition: { calories: 150, protein: 6, carbs: 16, fat: 7, fiber: 4 },
    tags: ["Indonesian"],
    ingredients: ["1 tahu jepang bulat", "1 bungkus jamur shimeji", "Brokoli (sesuai selera)", "5 sdm saos tiram", "1/4 sdt lada", "1 sdm kecap asin", "1/4 sdt gula", "Minyak untuk menggoreng tahu", "50 gr maizena", "Air secukupnya (±300 ml)", "Garam untuk merebus brokoli", "1 sdt kaldu bubuk", "1 siung bawang putih, cincang"],
    steps: ["Cuci brokoli lalu rebus sebentar (±5 menit). Siram air dingin.", "Potong tahu tebal 1–2 cm, balur maizena, goreng sampai kedua sisi kecoklatan.", "Tumis bawang putih sampai harum. Masukkan kaldu bubuk, lada, garam, kecap asin, saos tiram, dan air. Koreksi rasa.", "Setelah mendidih, masukkan jamur dan brokoli. Masak sebentar.", "Tambahkan larutan maizena agar mengental.", "Tuang ke piring, taruh tahu goreng di atasnya (atau campur sekalian sesuai selera)."],
  },
  {
    id: 109, name: "Garlic Butter Saikoro",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/15607562",
    nutrition: { calories: 420, protein: 30, carbs: 12, fat: 22, fiber: 2 },
    tags: ["buttery"],
    ingredients: ["5 siung bawang putih, potong pipih", "3 siung bawang putih, cincang", "1/2 bawang bombay, iris tipis memanjang", "20 gr butter", "1 sdm kecap manis", "2 sdm kecap asin Korea", "250 gr saikoro beef", "Lada putih secukupnya", "Lada hitam secukupnya", "Garam secukupnya", "Air secukupnya", "Minyak sayur"],
    steps: ["Tap-tap saikoro beef dengan tisu dapur untuk menyerap sisa air.", "Bumbui dengan garam, lada putih, lada hitam. Balur rata, sisihkan.", "Goreng bawang putih iris sampai coklat keemasan, sisihkan (minyaknya jangan dibuang).", "Pakai minyak bekas bawang putih untuk memasak saikoro beef sampai semua sisi kecoklatan. Sisihkan (minyak jangan dibuang).", "Pakai minyak bekas, tumis bawang bombay sampai layu & harum. Masukkan bawang putih cincang, tumis sampai harum.", "Masukkan kecap asin, tambahkan sedikit air, lalu masukkan kecap manis. Aduk rata.", "Masukkan butter dan sedikit lada putih. Aduk rata, koreksi rasa.", "Tata daging di piring, tuang saus, taburi bawang putih goreng. Sajikan."],
  },
  {
    id: 110, name: "Ayam Telur Asin",
    protein: "Chicken", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["Indonesian"],
    ingredients: ["1 potong dada ayam fillet", "1 butir telur (untuk rendaman sebelum digoreng)", "200 gr tepung terigu + sedikit tepung beras (campur)", "3 butir kuning telur asin rebus (pilih yang merah)", "2 siung bawang putih, cincang", "200–300 ml susu fresh milk", "Daun kari secukupnya", "Cabai rawit potong secukupnya", "Minyak untuk menggoreng secukupnya", "Lada & garam secukupnya"],
    steps: ["Potong dada ayam fillet. Campur dengan 1 telur kocok lepas, sedikit garam & lada. Diamkan 1 jam di kulkas.", "Pisahkan telur asin rebus: gunakan kuningnya saja. Hancurkan dengan garpu.", "Balur ayam dengan campuran tepung, goreng sampai kecoklatan, angkat.", "Wajan anti lengket: tumis bawang putih sampai wangi. Masukkan kuning telur asin halus, aduk sampai sedikit berbusa (±1–2 menit).", "Tambahkan fresh milk, cabai rawit, daun kari. Cek rasa, tambah garam jika perlu. Masak sampai creamy.", "Tuang saus saat penyajian."],
  },
  {
    id: 111, name: "Ayam Goreng Mentega",
    protein: "Chicken", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/25072270?ref=profile",
    image: "https://img-global.cpcdn.com/recipes/50e1beb3df269597/1200x630cq80/photo.jpg",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["crispy", "buttery"],
    ingredients: ["350 gr paha ayam filet", "1/2 jeruk nipis", "2 sdm maizena", "1/2 sdm kaldu bubuk", "1/2 bawang bombai", "3 siung bawang putih", "1 sdm minyak", "1 sdm margarin", "2 sdm kecap manis", "1 sdm saus tiram", "1/2 sdt kecap Maggi"],
    steps: ["Marinasi ayam dengan jeruk nipis, maizena, kaldu bubuk. Aduk rata, diamkan 10–15 menit.", "Iris bawang bombai, cincang kasar bawang putih.", "Panaskan sedikit minyak, masak ayam sampai kering & kecokelatan. Sisihkan lalu potong-potong.", "Tumis bawang putih & bawang bombai sampai wangi. Masukkan ayam, kecap manis, saus tiram, kecap Maggi, margarin. Masak cepat api besar.", "Sajikan."],
  },
  {
    id: 112, name: "Udang Tumis Tomat",
    protein: "Shrimp", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/25146964?ref=profile",
    nutrition: { calories: 280, protein: 24, carbs: 16, fat: 10, fiber: 2 },
    tags: ["Indonesian"],
    ingredients: ["275 gr udang kupas frozen", "3 sdm maizena", "1/4 sdt merica", "1 sdt kaldu bubuk", "3/4 bawang bombai", "3 siung bawang putih", "1 cm jahe", "1 sdm saus tiram", "3 sdm saus tomat", "1 sdm saus sambal (opsional)", "75 ml air", "1 sdt gula pasir"],
    steps: ["Marinasi udang dengan maizena, merica, kaldu bubuk. Aduk rata, diamkan.", "Potong kotak kecil bawang bombai. Cincang bawang putih dan jahe.", "Panaskan sedikit minyak, goreng udang api besar sebentar, tiriskan.", "Sisihkan sebagian minyak. Tumis bawang bombai, bawang putih, jahe sampai wangi. Tambahkan saus tiram, saus tomat, saus sambal (opsional), gula, dan air. Masak sebentar.", "Masukkan udang goreng, masak sampai meresap.", "Sajikan."],
  },
  {
    id: 113, name: "Beef Pepper Rice",
    protein: "Beef", taste: "Savory", method: "Rice Cooker / Steaming",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/24987517?ref=profile&find_method=profile",
    nutrition: { calories: 420, protein: 30, carbs: 12, fat: 22, fiber: 2 },
    tags: ["quick & easy"],
    ingredients: ["350 gr beras jepang", "400 ml air", "150 gr jagung pipil", "1 bawang bombai", "1 sdt lada hitam", "2 sdt kaldu bubuk", "250 gr daging sapi iris", "2 siung bawang putih", "2 cm jahe", "3 sdm saus teriyaki", "2 sdm saus tiram", "1 sdm maizena", "50 ml air", "100 ml minyak", "1/2 bawang bombai", "5 siung bawang putih", "4 cm jahe", "1 sdm minyak wijen", "2 sdm saus teriyaki", "1–2 sdm saus tiram", "3 sdm minyak aromatik", "1 batang daun bawang, iris", "2 sdm mentega asin"],
    steps: ["Marinasi daging dengan bawang putih parut, jahe parut, saus teriyaki, saus tiram, maizena dan air. Aduk rata, diamkan.", "Potong kotak bawang bombai.", "Rice cooker: masukkan beras, air, daging marinasi, jagung pipil, bawang bombai, lada hitam, kaldu bubuk. Masak sampai matang.", "Chopper: haluskan bawang putih, bawang bombai, dan minyak.", "Iris jahe lalu tumis bumbu halus + jahe sampai wangi dan sedikit kecokelatan. Pindah ke mangkuk, tambahkan minyak wijen, aduk.", "Tambahkan saus teriyaki, saus tiram, minyak aromatik dan mentega ke nasi, lalu torch (opsional).", "Masukkan daun bawang, aduk rata.", "Sajikan."],
  },
  {
    id: 114, name: "Cumi Saus Tiram",
    protein: "Squid", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/25213849?ref=profile&find_method=profile",
    nutrition: { calories: 260, protein: 20, carbs: 18, fat: 10, fiber: 1 },
    tags: ["Indonesian"],
    ingredients: ["500 gr cumi", "1 sdt baking powder", "1 sdm kecap inggris", "1 sdt garam", "1/4 sdt merica", "1 sdm maizena", "3 sdm saus tiram", "1 sdm kecap manis", "1 sdm kecap inggris", "1 sdm kecap ikan", "2 sdt gula pasir", "1/2 sdt kaldu ayam bubuk", "2 sdm maizena", "300 ml air", "1 sdt minyak wijen", "1/2 bawang bombai kecil", "5 siung bawang merah", "5 siung bawang putih", "2 cabai merah", "1 batang daun bawang", "4 cm jahe", "1 sdm margarin"],
    steps: ["Potong-potong cumi, belah dua bagian kepala dan buang bagian mata.", "Marinasi dengan garam, merica, kecap inggris, baking powder dan maizena. Aduk rata, diamkan min. 15 menit.", "Cincang bawang putih & bawang merah. Iris tebal bawang bombai. Iris miring cabai merah, daun bawang, dan jahe.", "Campur air, saus tiram, kecap inggris, kecap ikan, kecap manis, kaldu ayam bubuk, gula dan maizena, aduk rata.", "Panaskan minyak, goreng cumi sebentar, tiriskan dan sisihkan sebagian minyak.", "Tumis bawang putih, bawang merah dan jahe hingga wangi, masukkan margarin, tumis sesaat.", "Masukkan bawang bombai dan cabai merah, tumis hingga wangi.", "Masukkan larutan saus, masak hingga mendidih. Masukkan cumi, daun bawang dan minyak wijen, aduk rata.", "Sajikan."],
  },
  {
    id: 115, name: "Ikan Steam Bawang Putih",
    protein: "Fish", taste: "Savory", method: "Steaming",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/16841207?ref=profile",
    nutrition: { calories: 240, protein: 26, carbs: 10, fat: 8, fiber: 1 },
    tags: ["steamed"],
    ingredients: ["300 gr ikan dori filet", "20 gr sohun kering, rendam air", "1 jempol jahe", "1 batang daun bawang", "15 siung bawang putih", "50 ml minyak", "1/8 sdt garam", "1/4 sdt kaldu jamur", "1/8 sdt merica", "2 sdm kecap asin", "1 sdm saus tiram", "1 sdt gula pasir", "150 ml air panas", "1/4 sdt kaldu jamur"],
    steps: ["Iris tipis miring daun bawang untuk garnish, dan potong besar daun bawang lainnya. Petik daun ketumbar (jika pakai) lalu masukkan daun ketumbar dan daun bawang garnish ke air es.", "Blender kasar bawang putih. Panaskan minyak, masukkan bawang putih, garam, kaldu jamur, merica. Masak hingga sedikit kuning, tiriskan.", "Susun sohun, daun bawang dan jahe di piring tahan panas.", "Keringkan dori, potong-potong, susun di piring. Kukus 7 menit.", "Saus: campur air panas, gula, kecap asin, saus tiram, kaldu jamur. Aduk rata.", "Taburkan bawang putih goreng di atas ikan, tuang sebagian saus. Kukus lagi 3 menit.", "Susun daun bawang & daun ketumbar di atas ikan, siram minyak panas.", "Sajikan."],
  },
  {
    id: 116, name: "Tumis Tahu Teri Tauge",
    protein: "Vegetable", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/24802903?ref=search&search_term=toge+teri+tahu",
    nutrition: { calories: 150, protein: 6, carbs: 16, fat: 7, fiber: 4 },
    tags: ["Indonesian"],
    ingredients: ["10 tahu putih sedang, potong kotak", "Segenggam tauge", "1 sdm teri kasar", "2 cabe merah keriting, iris kasar", "100 ml air", "1 lembar daun salam", "Gula, garam, kaldu jamur secukupnya", "1 sdm saus tiram", "1 sdm kecap manis", "3 siung bawang merah", "3 siung bawang putih", "1/4 sachet terasi ABC", "2 cabe rawit setan"],
    steps: ["Siapkan semua bahan. Goreng tahu sampai berkulit, tiriskan.", "Tumis teri dengan sedikit minyak sampai berubah warna.", "Masukkan bumbu uleg, tumis sampai matang dan harum.", "Tambahkan saus tiram, tuang sedikit air. Masukkan tahu goreng dan tauge.", "Aduk sebentar saja agar tauge tetap renyah. Koreksi rasa, angkat.", "Sajikan dengan nasi hangat (dan ikan goreng jika ada)."],
  },
  {
    id: 117, name: "Sup Bakso Ayam Sayuran",
    protein: "Vegetable", taste: "Savory", method: "Boiling / Soup",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/16833206?ref=profile",
    nutrition: { calories: 150, protein: 6, carbs: 16, fat: 7, fiber: 4 },
    tags: ["soup"],
    ingredients: ["400 gr dada ayam filet", "2 sdt garam", "1 sdm gula pasir", "2 sdt kaldu bubuk/penyedap", "1 putih telur", "2 sdt baking powder", "100 gr tahu putih", "2 sdm bawang merah goreng", "1 siung bawang putih", "50 gr maizena/tepung sagu/tepung tapioka", "80–100 ml air dingin", "1 sdm kecap ikan (opsional)", "1/4 sdt merica", "300 gr tulang rongkong ayam (rebus 5 menit)", "3 liter air", "2 sdt garam", "1/8 sdt merica", "1 sdm gula pasir", "2 sdt kaldu jamur/penyedap"],
    steps: ["Didihkan air, masukkan tulang rongkong. Rebus 1 jam api kecil lalu bumbui garam, merica, gula, kaldu jamur.", "Food processor: haluskan dada ayam, garam, kaldu jamur, gula, merica, bawang putih, bawang merah goreng sampai lengket.", "Masukkan tahu putih, putih telur, baking powder, kecap ikan, maizena, dan air es. Haluskan rata lalu masukkan sebagian adonan ke piping bag.", "Isi tahu pong dengan adonan, semprotkan di tengah kulit tahu, lipat lalu pipihkan. Goreng api kecil-sedang sampai sedikit kecokelatan.", "Potong miring terong, belah tengah lalu isi adonan. Goreng sampai kecokelatan.", "Isi paprika, pare, dan brokoli dengan adonan, ratakan dengan bantuan air.", "Rebus pelengkap isi di api kecil-sedang sampai matang, tiriskan.", "Susun pelengkap dalam mangkuk, tuang kuah, tambahkan daun bawang & garlic oil."],
  },
  {
    id: 119, name: "Brokoli Daging Sapi",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/272975",
    nutrition: { calories: 420, protein: 30, carbs: 12, fat: 22, fiber: 2 },
    tags: ["Indonesian"],
    ingredients: ["300 gr brokoli, lepas per kuntum, cuci bersih", "150 gr daging sapi has dalam, iris tipis", "50 gr bawang bombai, iris bulat", "2 sdm saus tiram", "1 sdt tepung maizena + sedikit air (larutan)", "1 sdt minyak wijen", "50 ml air", "6 sdm minyak goreng", "1 sdm kecap ikan", "1/2 sdt merica", "1/4 sdt soda kue"],
    steps: ["Rendam/baluri daging sapi dengan bumbu perendam, diamkan 30 menit.", "Rebus brokoli 2 menit, tiriskan. Sisihkan.", "Panaskan 3 sdm minyak, tumis daging sapi sampai matang. Sisihkan.", "Panaskan lagi 3 sdm minyak, tumis bawang bombai sampai layu. Masukkan saus tiram, daging, air, brokoli, dan minyak wijen. Aduk rata.", "Tambahkan larutan maizena, aduk sebentar sampai mengental. Angkat dan sajikan."],
  },
  {
    id: 122, name: "Udang Mayonnaise",
    protein: "Shrimp", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/13439365",
    nutrition: { calories: 280, protein: 24, carbs: 16, fat: 10, fiber: 2 },
    tags: ["Indonesian"],
    ingredients: ["300 gr udang ukuran 25, kupas kulit", "1/2 sdt jahe halus", "1 putih telur", "150 gr tepung maizena", "1/2 sdt baking soda", "Garam & lada (sesuai selera)", "Minyak goreng secukupnya", "6 sdm mayones", "2 sdm susu kental manis", "5 sdm madu", "2 sdm air jeruk nipis", "1/4 sdt garam", "1–2 sdm saus sambal", "1/2 siung bawang putih halus"],
    steps: ["Belah udang model butterfly.", "Marinasi udang dengan jahe halus, baking soda, putih telur, garam, merica, dan sedikit maizena. Diamkan 10–15 menit suhu ruang.", "Dynamite mayo original: campur mayones, air jeruk nipis, susu kental manis, madu. Tambahkan sedikit garam.", "Dynamite mayo pedas: tambahkan saus sambal dan bawang putih ke mayo original.", "Balur udang dengan tepung maizena sampai rata, lalu saring.", "Goreng udang sampai matang, tiriskan.", "Campur udang goreng dengan dynamite mayo, aduk rata.", "Sajikan (enak dengan bihun jagung goreng, tabur wijen hitam & daun bawang)."],
  },
  {
    id: 123, name: "Udang Saus Padang",
    protein: "Shrimp", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/9069941?search_term=udang",
    nutrition: { calories: 280, protein: 24, carbs: 16, fat: 10, fiber: 2 },
    tags: ["Indonesian"],
    ingredients: ["250 gr udang", "250 gr cumi", "1 jeruk nipis", "1 jagung manis", "1 batang daun bawang", "1/2 bawang bombay", "3 lembar daun jeruk", "250 ml air", "1 sdt maizena (larutkan dengan sedikit air)", "4 sdm minyak goreng", "3 sdm saus tomat", "2 sdm saus sambal", "1 sdm saus tiram", "1/2 sdt kecap manis", "2 siung bawang putih", "3 siung bawang merah", "3 cabe merah", "3 cabe rawit (sesuai selera)", "1/2 sdt garam", "1 sdt gula"],
    steps: ["Siangi udang (buang kepala, kupas kulit sisakan ekor, buang kotoran). Bersihkan cumi lalu potong.", "Lumuri udang & cumi dengan jeruk nipis, diamkan sebentar, bilas, tiriskan.", "Potong jagung, rebus sampai matang. Tiriskan.", "Iris bawang bombay & daun bawang.", "Campur bahan saus di mangkuk, aduk rata.", "Ulek bumbu sampai halus.", "Tumis 1/2 bagian bawang bombay sampai harum. Masukkan bumbu halus & daun jeruk, tumis sampai tanak.", "Tambahkan saus dan air, aduk sampai mendidih.", "Masukkan udang & cumi, masak sampai udang berubah warna.", "Masukkan jagung, sisa bawang bombay, dan daun bawang. Koreksi rasa.", "Masukkan larutan maizena, aduk sampai mengental. Sajikan."],
  },
  {
    id: 124, name: "Udang Goreng Tepung",
    protein: "Shrimp", taste: "Savory", method: "Deep-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/4570003",
    nutrition: { calories: 280, protein: 24, carbs: 16, fat: 10, fiber: 2 },
    tags: ["crispy"],
    ingredients: ["250 gr udang, buang kepala", "6 sdm tepung terigu", "1 sdm tepung maizena", "2 siung bawang putih", "1 sdt garam (opsional)", "Air secukupnya"],
    steps: ["Cuci bersih udang, sisihkan.", "Campur terigu + maizena. Ambil 2 sdm untuk adonan basah. Ulek bawang putih + garam, campur dengan 2 sdm campuran tepung. Tambahkan sedikit air (tidak terlalu kental/encer). Masukkan udang ke adonan basah.", "Gulingkan ke adonan kering (tips: kocok dalam wadah tertutup agar rata).", "Ketok-ketok udang agar tepung yang tidak menempel jatuh (tips: taruh di saringan lalu goyangkan).", "Goreng di minyak panas sampai kecoklatan.", "Simpan sisa di wadah tertutup jika belum dimakan."],
  },
  {
    id: 125, name: "Udang Bakar Madu",
    protein: "Shrimp", taste: "Savory", method: "Roasting",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/16352102",
    nutrition: { calories: 280, protein: 24, carbs: 16, fat: 10, fiber: 2 },
    tags: ["sweet", "grilled"],
    ingredients: ["500 gr udang utuh", "1/3 sdt garam", "1/4 sdt merica", "1 jeruk nipis", "3 sdm madu", "2 sdm saus tomat", "2 sdm saus sambal rasa bawang putih", "1 sdm saus tiram", "2 sdm margarin (suhu ruang)", "2 sdm air"],
    steps: ["Buang bagian kepala/ujung tajam, belah punggung udang, buang kotorannya.", "Marinasi udang dengan jeruk nipis, garam, dan merica. Diamkan sebentar.", "Campur madu, saus sambal, saus tomat, saus tiram, dan margarin. Aduk rata.", "Tambahkan air, aduk rata.", "Panaskan sedikit minyak, masukkan udang, masak hingga setengah matang di kedua sisi.", "Masukkan saus, aduk sebentar.", "Sajikan."],
  },
  {
    id: 126, name: "Ebi Furai Ala HOKBEN",
    protein: "Shrimp", taste: "Savory", method: "Deep-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/11163602",
    nutrition: { calories: 280, protein: 24, carbs: 16, fat: 10, fiber: 2 },
    tags: ["crispy"],
    ingredients: ["8 ekor udang (ukuran 30–40 ekor/kg)", "Tepung terigu secukupnya", "Tepung roti secukupnya", "Minyak untuk menggoreng secukupnya", "2 sdm tepung terigu", "1/2 butir telur", "50 ml susu/cream/santan", "Garam, merica, kaldu jamur/penyedap (sesuai selera)", "Bawang putih parut secukupnya"],
    steps: ["Kupas udang, buang kotorannya, lalu bilas.", "Kerat bagian perut udang tiap ±1/2 cm (jangan terlalu dalam).", "Tekan/pijat punggung udang sampai urat di punggung putus, supaya udang lurus.", "Buat adonan tepung basah: campur tepung terigu, telur, cream/susu/santan, bawang putih, dan bumbu.", "Balur udang: tepung terigu kering → adonan tepung basah → tepung roti.", "Goreng sampai keemasan."],
  },
  {
    id: 127, name: "Shrimp Roll",
    protein: "Shrimp", taste: "Savory", method: "Deep-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/881446",
    nutrition: { calories: 280, protein: 24, carbs: 16, fat: 10, fiber: 2 },
    tags: ["quick & easy"],
    ingredients: ["100 gram udang segar", "150 gram dada ayam tanpa tulang", "2 siung bawang putih, haluskan", "1/4 bawang bombay, cincang halus", "1 putih telur", "1 sdt kecap asin", "1 sdm minyak wijen", "1 sdm minyak sayur", "1/2 sdt garam (secukupnya)", "1/2 sdm gula (secukupnya)", "1/4 sdt lada putih (secukupnya)", "2 sdm tepung sagu", "2 sdm tepung maizena", "1 sdm breadcrump (untuk adonan)", "Breadcrump (untuk membalur)", "1 telur ayam (untuk membalur)", "1 telur ayam + sisa kuning telur (dari adonan)", "1 sdm margarin cair", "1 sdm maizena, larutkan dalam 50 ml air matang", "Garam secukupnya"],
    steps: ["Bersihkan udang, buang kepala & kupas. Cacah halus (disarankan pakai pisau agar juicy).", "Bersihkan dada ayam, cacah halus.", "Campur semua bahan adonan (bawang putih, bombay, kecap asin, minyak wijen, minyak sayur, garam, gula, lada putih, tepung sagu, maizena, putih telur, breadcrump) lalu aduk rata dengan udang & ayam.", "Kulit: kocok lepas telur, masukkan margarin cair dan larutan maizena, aduk sampai halus.", "Panaskan pan anti lengket. Tuang adonan kulit, ratakan (tanpa dibalik). Ulangi sampai habis.", "Setelah kulit dingin, taruh isian di atas kulit, gulung rapat.", "Kukus 20–30 menit. Dinginkan lalu potong sesuai selera.", "Balur potongan dengan telur lalu breadcrump. Bisa langsung goreng atau simpan di freezer."],
  },
  {
    id: 128, name: "Tom yam udang steamboat",
    protein: "Shrimp", taste: "Savory", method: "Boiling / Soup",
    cuisine: "Thai", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/16185175",
    nutrition: { calories: 280, protein: 24, carbs: 16, fat: 10, fiber: 2 },
    tags: ["soup", "steamed"],
    ingredients: ["350 gram udang (kepala untuk kaldu)", "500 ml air", "Kepala udang", "Minyak secukupnya (untuk menumis & blender bumbu)", "5 bawang merah", "4 bawang putih", "10 cabai keriting", "8 cabai kering", "1 sdm merica", "1 sdt terasi", "4 batang serai", "1 ruas lengkuas", "5 daun jeruk", "2 jeruk nipis", "Pokcoy/sayuran lain secukupnya", "1 wortel", "6 crab stick (opsional)", "4 otak-otak (opsional)", "1 sdm garam", "1 sdt kaldu bubuk ayam", "1 sdm madu/gula pasir", "1 sdm kaldu jamur", "4 sdm kecap ikan"],
    steps: ["Bersihkan udang, pisahkan kepalanya.", "Tumis sebentar kepala udang, tambah 500 ml air. Setelah jadi kaldu, saring.", "Blender bumbu halus, tumis sampai benar-benar matang. Masukkan air kaldu udang.", "Masukkan bumbu aromatik dan bumbu penyedap. Jeruk nipis masukkan sedikit-sedikit sambil tes rasa.", "Jika rasa sudah pas, masukkan wortel dulu sampai empuk, lalu udang dan pelengkap lain bertahap (yang cepat matang masuk terakhir).", "Sajikan."],
  },
  {
    id: 129, name: "Ayam Kungpao",
    protein: "Chicken", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/205433",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["Indonesian"],
    ingredients: ["3 potong fillet paha, potong kotak", "3 siung bawang putih, cincang", "3 buah cabe kering, potong kotak", "1 bawang bombay, potong kotak", "1 sdm saos tomat", "1 sdm saos tiram", "2 sdm kecap manis", "1 sdt gula pasir", "1 sdt minyak wijen", "1 batang daun bawang, potong agak besar", "Lada secukupnya"],
    steps: ["Goreng ayam sampai berkulit, sisihkan.", "Panaskan minyak, tumis bawang bombay dan bawang putih sampai harum. Masukkan cabe kering, aduk.", "Masukkan ayam, aduk. Tambahkan kecap manis, saos tiram, saos tomat, gula, lada. Tuangi sedikit air, masak sampai matang, koreksi rasa.", "Tambahkan daun bawang dan minyak wijen, aduk. Angkat dan sajikan."],
  },
  {
    id: 130, name: "Ayam Asam Manis",
    protein: "Chicken", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/2220404",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["sweet"],
    ingredients: ["250 gr daging ayam (boleh campur kulit)", "1 wortel, potong korek api", "1 timun jepang kecil, ambil dagingnya lalu potong korek api", "1 nanas kecil, potong kecil-kecil", "5 sdm tepung terigu", "4 sdm tepung sagu/tapioka", "2 sdm tepung beras", "1 sdt garam", "1 sdt lada", "1 bawang bombay, iris memanjang", "6 siung bawang putih, cincang", "2 cm jahe, geprek", "2 cabe merah besar, iris serong (bisa paprika)", "1 sdt lada", "1 sdt garam", "2 sdm gula pasir", "4–5 sdm saus tomat", "1 sdm saus tiram", "1 sdm minyak wijen", "Minyak goreng", "Sedikit air", "1 sdt sagu/kanji/maizena (pengental)"],
    steps: ["Campur semua bahan pelapis. Ambil 2–3 sdm ke wadah lain, beri sedikit air (±30–50 ml) agar jadi adonan basah (jangan terlalu kental/encer).", "Masukkan ayam ke larutan basah, diamkan sebentar. Gulingkan ke tepung kering sampai terbalut rata.", "Goreng ayam di minyak panas api sedang sampai kuning kecoklatan. Angkat.", "Saus: tumis bawang bombay, bawang putih, jahe sampai harum. Tambahkan sedikit air.", "Masukkan saus tomat, saus tiram, minyak wijen, lada, gula, garam. Masukkan timun, wortel, nanas. Masak sampai sayur agak layu.", "Larutkan pengental dengan 2–3 sdm air, tuang ke wajan. Aduk sampai mendidih, koreksi rasa.", "Masukkan ayam goreng, aduk rata. Matikan api dan sajikan."],
  },
  {
    id: 131, name: "Ayam goreng bawang putih",
    protein: "Chicken", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/15687862",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["crispy"],
    ingredients: ["250 gr ayam", "10 siung bawang putih, geprek (asli 9)", "1 butir telur", "2 sdm maizena", "1/4 sdt merica bubuk", "1 buah jeruk nipis", "Minyak goreng secukupnya", "5 butir bawang merah", "3 siung bawang putih", "1 sdt ketumbar", "1/2 ruas kunyit", "1/2 ruas jahe", "1/2 sdm garam", "1/2 sdm gula pasir"],
    steps: ["Ulek semua bumbu halus, sisihkan.", "Campur telur dan maizena sampai rata. Masukkan ayam dan bumbu halus, aduk rata. Diamkan 15 menit (lebih enak 30 menit/semalaman).", "Geprek bawang putih (dengan kulit). Masukkan ke adonan ayam lalu goreng bersama ayam sampai kecoklatan."],
  },
  {
    id: 132, name: "Sayap Ayam Goreng dengan Oseng Bawang",
    protein: "Chicken", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/16108115",
    nutrition: { calories: 380, protein: 28, carbs: 14, fat: 18, fiber: 2 },
    tags: ["crispy"],
    ingredients: ["10 pcs sayap ayam", "5 siung bawang putih halus", "1 butir telur", "1 sdm cuka / air jeruk lemon", "1 sdt baking powder (opsional)", "6 sdm tepung tapioka", "2 sdt kaldu", "1 sdt garam", "1/2 sdm gula", "1/2 sdt merica", "2 saset terasi", "100 gr bawang merah kecil utuh", "3 siung bawang putih halus", "2 batang daun bawang", "15 cabai rawit merah", "10 cabai rawit hijau", "50 ml air", "1 sdm saus tiram", "1/4 sdt garam", "1/2 sdm gula", "1/4 sdt kaldu bubuk/penyedap"],
    steps: ["Belah sayap jadi 2. Marinasi dengan bawang putih halus, telur, tepung tapioka, cuka, baking powder, kaldu, garam, gula, merica. Aduk rata.", "Bakar terasi, hancurkan lalu saring masuk ke adonan ayam. Diamkan min. 30 menit.", "Goreng ayam hingga kecokelatan, tiriskan.", "Potong daun bawang dan cabai. Panaskan sedikit minyak, tumis bawang putih halus sebentar lalu masukkan bawang merah dan bagian putih daun bawang, tumis hingga wangi.", "Masukkan air, saus tiram, garam, gula, kaldu bubuk. Masak sebentar lalu masukkan cabai dan sisa daun bawang, aduk rata.", "Sajikan sayap ayam goreng dengan oseng sambal bawang."],
  },
  {
    id: 133, name: "Beef Teriyaki (ala hokben)",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/3905717",
    nutrition: { calories: 420, protein: 30, carbs: 12, fat: 22, fiber: 2 },
    tags: ["sweet"],
    ingredients: ["500 gr daging sapi", "1 buah bawang bombay", "Gula & garam secukupnya", "Bahan marinasi: 5 sdm kecap manis; 8 sdm saus teriyaki; 4 sdm kecap asin; 2 sdm minyak wijen; 3 siung bawang putih halus; jahe 2 cm halus; lada bubuk secukupnya", "1 sdm margarin"],
    steps: ["Iris tipis memanjang daging sapi. Cuci bersih darahnya, rendam dengan bahan marinasi. Diamkan ±30 menit (kulkas/suhu ruang).", "Panaskan 1 sdm margarin/mentega. Masukkan daging, tumis dan tutup wajan supaya air tidak menguap.", "Saat air dari daging keluar, cek rasa lalu tambahkan gula/garam bila perlu. Saat hampir matang, masukkan irisan bombay agar tidak terlalu layu."],
  },
  {
    id: 134, name: "Bulgogi (Korean Beef BBQ)",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Korean", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/12998098",
    nutrition: { calories: 420, protein: 30, carbs: 12, fat: 22, fiber: 2 },
    tags: ["quick & easy"],
    ingredients: ["500 gr daging sapi shabu/sukiyaki (mis. has dalam)", "1 wortel sedang, potong korek api", "1 bawang bombay, potong-potong", "3 tangkai daun bawang, iris", "Bumbu marinasi: 8 sdm kecap asin; 2 sdm gula; 2 sdm madu; 2 sdm minyak wijen; 1 sdt lada hitam; 4 siung bawang putih cincang halus; 1/2 bawang bombay cincang halus; 1 apel/pir parut halus", "Taburan: wijen sangrai; irisan daun bawang"],
    steps: ["Siapkan bahan. Iris tipis daging (lebih mudah saat setengah beku). Campur dengan bumbu marinasi, diamkan di kulkas 2 jam.", "Masak daging dengan api sedang tanpa minyak (wajan anti lengket), bolak-balik hingga berubah warna.", "Tambahkan wortel & daun bawang, aduk pelan sampai rata, masak hingga matang.", "Saat daun bawang sedikit layu, masukkan wijen, aduk sebentar lalu angkat.", "Sajikan dan beri taburan daun bawang & wijen. Cocok dengan kimchi & nasi hangat."],
  },
  {
    id: 135, name: "BEEF YAKINIKU ala HOKBEN",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Japanese", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/14933826",
    nutrition: { calories: 420, protein: 30, carbs: 12, fat: 22, fiber: 2 },
    tags: ["quick & easy"],
    ingredients: ["350 g daging iris tipis (atau sliced beef)", "1 bawang bombay sedang, belah 2 lalu iris 1/2 cm", "1 paprika hijau kecil, belah 3 lalu iris 1/2 cm", "200 ml air", "1 sdt jahe parut + 2 sdm air (pakai airnya saja)", "1 sdm saus tiram", "1 sdt minyak wijen", "1 sdt maizena, larutkan dengan sedikit air", "Bumbu marinasi: 3 sdm shoyu/kecap asin; 1 sdm saus tiram; 2 sdt gula pasir"],
    steps: ["Iris tipis daging. Campur bumbu marinasi, rendam daging min. 1 jam (atau semalaman di kulkas).", "Panaskan 1 sdm minyak. Tumis bawang bombay 1 menit, angkat. Tumis paprika 1 menit, angkat. Sisihkan.", "Panaskan 3 sdm minyak. Masukkan daging, masak sampai airnya habis sambil dipisah-pisah. Lanjutkan sampai kecoklatan.", "Masukkan air, air jahe, saus tiram, minyak wijen. Cek rasa (bisa tambah garam/gula/air).", "Masukkan larutan maizena, aduk sampai mendidih lagi.", "Masukkan kembali bawang bombay & paprika, aduk sebentar lalu matikan api."],
  },
  {
    id: 136, name: "Baby kailan with oyster sauce",
    protein: "Vegetable", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/15784279",
    nutrition: { calories: 150, protein: 6, carbs: 16, fat: 7, fiber: 4 },
    tags: ["quick & easy"],
    ingredients: ["1 ikat baby kailan", "5 butir bawang putih", "1 buah cabe merah keriting", "1/2 sdt tepung maizena (larutkan)", "4–5 sdm oyster sauce / saus tiram", "Minyak wijen secukupnya", "Garam secukupnya", "Kaldu jamur secukupnya", "Air es secukupnya", "Air mineral secukupnya"],
    steps: ["Didihkan air, tambahkan sedikit garam dan setetes minyak wijen. Rebus baby kailan sebentar.", "Matikan api, angkat, pindahkan ke air es sebentar lalu tata di piring.", "Cincang bawang putih, iris cabe. Panaskan minyak wijen, tumis bawang putih & cabe hingga harum.", "Tambahkan air mineral & saus tiram, masak hingga mendidih dengan api kecil. Tambahkan garam & kaldu, koreksi rasa. Masukkan larutan maizena, aduk sebentar lalu matikan api.", "Siramkan saus di atas baby kailan. Taburi wijen putih bila suka."],
  },
  {
    id: 137, name: "Tumis brokoli ayam jamur",
    protein: "Vegetable", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/6714444",
    nutrition: { calories: 150, protein: 6, carbs: 16, fat: 7, fiber: 4 },
    tags: ["Indonesian"],
    ingredients: ["150 g filet dada ayam, potong dadu", "1 kuntum brokoli, lepas per kuntum", "5 buah jamur kancing, potong-potong", "1/2 bawang bombay, iris panjang", "2 siung bawang putih, cincang", "1 sdm saus tiram", "1 sdm kecap Bango light", "1/2 sdt merica bubuk", "1/2 sdt garam", "100 ml air panas", "1 sdt maizena, larutkan dengan air"],
    steps: ["Panaskan minyak/Blueband, goreng ayam sebentar sampai berubah warna. Angkat.", "Tumis bawang putih dan bawang bombay hingga harum (pakai wajan bekas ayam).", "Masukkan brokoli, aduk sampai layu. Masukkan jamur dan ayam, aduk rata. Tambahkan gula (opsional), kecap, saus tiram, merica, kaldu bubuk, aduk rata.", "Tuang air panas, koreksi rasa. Jika sudah pas, tuang larutan maizena, aduk sebentar, angkat dan sajikan."],
  },
  {
    id: 138, name: "Sapi Cabe Hijau (Dendeng Batokok Lado Ijo)",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/5809330",
    nutrition: { calories: 420, protein: 30, carbs: 12, fat: 22, fiber: 2 },
    tags: ["spicy"],
    ingredients: ["250 gram daging sengkel sapi", "Lengkuas, geprek", "2 lembar daun salam", "2 lembar daun jeruk", "Seujung sendok teh ketumbar bubuk", "Garam secukupnya", "Cabe hijau: 2 genggam cabe hijau (keriting + rawit, sesuaikan pedas)", "6 siung bawang merah", "1 buah tomat hijau", "Garam & gula secukupnya", "1/2 buah jeruk limau"],
    steps: ["Ungkep daging sapi yang sudah dipotong dengan lengkuas, daun salam, daun jeruk, ketumbar bubuk dan garam sampai empuk.", "Geprek daging (jangan sampai hancur).", "Panaskan minyak, goreng sebentar daging yang sudah digeprek. Angkat, sisihkan.", "Haluskan cabe hijau, bawang merah, tomat. Tambahkan garam & sedikit gula, lalu kucuri jeruk.", "Panaskan sedikit minyak, tumis sambal cabe hijau sampai layu. Angkat dan tuang di atas daging. Sajikan dengan nasi hangat."],
  },
  {
    id: 139, name: "Sop Iga Sapi Segar Sederhana",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/5706797",
    nutrition: { calories: 420, protein: 30, carbs: 12, fat: 22, fiber: 2 },
    tags: ["soup"],
    ingredients: ["1/2 kg iga sapi", "1/4 kg daging sapi", "3 lembar daun salam", "Jahe sebesar ibu jari, geprek", "1 sdt garam", "Air secukupnya untuk merebus", "Sayuran (sesuai selera): 2 wortel; 2 kentang; 2 batang daun bawang; 3 batang seledri", "Bumbu halus: 1 bawang merah; 5 bawang putih; 1 sdt lada bubuk; sedikit pala; jahe seruas jari geprek; 2 lembar daun salam; 5 lembar daun jeruk", "Garam, gula, kaldu bubuk (opsional) secukupnya", "Bawang goreng untuk taburan"],
    steps: ["Cuci iga & daging, presto dengan 3 lembar daun salam, jahe, dan 1 sdt garam selama 15–20 menit. Dinginkan, simpan di kulkas agar lemak mengapung lalu buang lemak. Potong daging, saring air kaldunya.", "Kupas/cuci/potong sayuran.", "Didihkan air + air kaldu, masukkan iga & daging, wortel, kentang.", "Tumis bumbu halus hingga harum, masukkan ke rebusan beserta minyaknya. Tambahkan daun salam & daun jeruk. Masak hingga matang.", "Terakhir masukkan daun bawang lalu seledri, angkat.", "Sajikan dengan taburan bawang goreng."],
  },
  {
    id: 140, name: "Jamur Tiram Krispy • Renyah Tahan lama",
    protein: "Vegetable", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/13466245",
    nutrition: { calories: 150, protein: 6, carbs: 16, fat: 7, fiber: 4 },
    tags: ["quick & easy"],
    ingredients: ["250 gram jamur tiram", "Bahan kering: 1 sachet kecil bumbu ayam kentucky; 2 sdm tepung maizena; 3 sdm tepung terigu", "Bahan basah: 3 sdm bahan kering; air secukupnya"],
    steps: ["Cuci bersih jamur tiram lalu keringkan. Campur semua bahan kering dalam baskom.", "Campur bahan basah dalam mangkok, beri air secukupnya (jangan terlalu kental/encer).", "Masukkan jamur ke adonan basah lalu ke adonan kering sambil dicubit-cubit agar keriting. Goreng di minyak panas dengan api kecil satu per satu sampai coklat keemasan."],
  },
  {
    id: 141, name: "Cumi Lada Garam Tepung Ladang Lima",
    protein: "Squid", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/12356724",
    nutrition: { calories: 260, protein: 20, carbs: 18, fat: 10, fiber: 1 },
    tags: ["Indonesian"],
    ingredients: ["250 gr baby cumi/cumi, iris 1 cm", "1 sdm saus tiram", "1 butir telur", "1 sdm tepung maizena", "1 sdt merica", "Sejumput garam", "Bahan tepung kering: secukupnya tepung serbaguna Ladang Lima", "Topping bawang cabai: 3 batang daun bawang; 10 bawang putih cincang; 5 cabe keriting; 5 cabe rawit merah; sejumput merica; sejumput garam himalayan; 1 sdt kaldu jamur; 1 sdm mentega (untuk menumis)"],
    steps: ["Potong cumi, marinasi dengan saus tiram, garam, telur, maizena dan merica selama 1 jam.", "Buat topping cabai garam: lelehkan mentega, tumis bawang putih (jangan terlalu garing), masukkan cabe, daun bawang, garam, lada, dan kaldu jamur. Sisihkan.", "Panaskan minyak. Celupkan cumi yang sudah dimarinasi ke tepung kering, tepuk-tepuk agar tidak terlalu tebal, lalu goreng hingga kuning keemasan.", "Taburkan topping bawang cabai."],
  },
  {
    id: 142, name: "Tahu Crispy Cabe Garam",
    protein: "Vegetable", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    link: "https://cookpad.com/id/resep/2665068",
    nutrition: { calories: 150, protein: 6, carbs: 16, fat: 7, fiber: 4 },
    tags: ["crispy", "spicy"],
    ingredients: ["5 buah tahu", "5 sdm tepung terigu", "3 sdm tepung maizena", "1 gelas air", "1 sdt garam", "1/2 sdt lada bubuk", "3 buah cabe keriting merah, iris kecil-kecil", "3 buah cabe rawit merah, iris kecil-kecil", "3 buah bawang putih, geprek halus", "1 buah daun bawang, iris tipis"],
    steps: ["Potong dadu tahu lalu celupkan ke adonan (terigu, maizena, garam, lada) yang sudah dilarutkan dengan air.", "Goreng tahu hingga kecoklatan, tiriskan.", "Tumis cabe merah keriting, cabe rawit merah, bawang putih, daun bawang dan garam dengan sedikit minyak hingga agak kering.", "Masukkan tahu, aduk hingga tercampur rata.", "Matikan api, sajikan."],
  },
  {
    id: 144, name: "Pancake",
    protein: "Flour / Butter", taste: "Baking", method: "Baking",
    cuisine: "Western", time: "~35 min", servings: 4,
    link: "https://www.recipetineats.com/pancake-recipe/",
    nutrition: { calories: 280, protein: 5, carbs: 38, fat: 12, fiber: 1 },
    tags: ["quick & easy"],
    ingredients: ["46 g plain / all purpose flour (Note 1)", "85 tsp baking powder (NOT baking soda / bi-carb) (Note 1)", "08 g white sugar (caster / super fine is best but not essential)", "Pinch of salt", "46 large egg (~50g / 2oz in shell)", "46 ml milk (any type, any fat %)", "85 tsp butter, for cooking", "46 tsp vanilla extract or essence"],
    steps: ["Whisk dry: Place flour, baking powder, sugar and salt in a bowl, whisk to combine.", "Add wet ingredients: Add egg, milk and vanilla. Whisk until lump free (no longer than 30 seconds).", "Melt then wipe off most butter: Heat a non-stick pan over medium/medium-high. Add a tiny bit of butter and swirl to melt, then mostly wipe off with paper towel.", "Pour 1/4 cup batter into the middle of the pan.", "Cook: Swirl lightly to spread to ~11cm circle. When bubbles rise to surface, flip and cook other side until golden.", "Keep warm and repeat: Remove pancake and keep warm in low oven. Use more butter every 2 to 3 pancakes.", "Serve with toppings of choice!"],
  },
  {
    id: 145, name: "Mapo Tofu",
    protein: "Minced Beef", taste: "Savory", method: "Simmering",
    cuisine: "Chinese", time: "~30 min", servings: 2,
    nutrition: { calories: 420, protein: 28, carbs: 12, fat: 28, fiber: 2 },
    tags: ["spicy", "sichuan", "tofu", "numbing"],
    ingredients: [
      "3 tbsp neutral oil",
      "1/2 lbs ground beef or pork",
      "1 inch knob ginger, minced",
      "4 cloves garlic, minced",
      "2 scallions (white portion sliced; save green portion for garnish)",
      "2 tbsp doubanjiang",
      "2 tsp Sichuan chili flakes",
      "1–2 tsp Sichuan peppercorn powder",
      "1 tsp soy sauce",
      "2 tsp sugar",
      "1/2 tsp white pepper",
      "1 cup chicken or beef stock",
      "1 lbs soft / silken tofu",
      "2 tsp cornstarch + 3 tbsp water (slurry)",
      "1 tsp sesame oil",
    ],
    steps: [
      "Mince ginger and garlic, slice white portion of scallions. Save green portion for garnish.",
      "Drain and cut tofu into cubes. Simmer in salted water for 2–3 minutes to firm up, then set aside.",
      "Heat oil in a deep pan on medium heat. Sauté ground meat 6–7 minutes until water evaporates, fat renders, and mince is browned.",
      "Add white scallions, ginger, garlic, doubanjiang, Sichuan chili flakes, and peppercorn powder. Sauté 3–4 minutes until fragrant.",
      "Deglaze with shaoxing wine, simmer 2–3 minutes, then season with soy sauce, sugar, and white pepper.",
      "Pour in stock, add tofu, and bring to a simmer.",
      "Pour cornstarch slurry and gently mix until sauce thickens.",
      "Finish with sesame oil, serve with rice, and garnish with green scallions.",
    ],
  },
  {
    id: 146, name: "Honey Garlic Crispy Chicken",
    protein: "Chicken", taste: "Savory", method: "Pan-fry / Sauté",
    cuisine: "Asian Fusion", time: "30 min", servings: 6,
    nutrition: { calories: 420, protein: 32, carbs: 18, fat: 22, fiber: 1 },
    tags: ["crispy", "honey garlic", "sticky", "weeknight"],
    ingredients: [
      "4 boneless chicken thighs, skin on (about 500g / 1–1.2 lb)",
      "1.5 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp garlic powder",
      "1/4 tsp salt",
      "Black pepper to taste",
      "1/4 cup cornstarch (for coating)",
      "1/4 cup oil (for pan frying)",
      "2 tbsp butter",
      "1 bulb garlic, finely minced",
      "1 tbsp soy sauce",
      "1 tbsp honey",
      "Dried parsley for garnish (optional)",
    ],
    steps: [
      "Debone chicken thighs if needed, keep skin on. Wash and pat dry with paper towels.",
      "Lightly score the meat side a few times, then flip and gently pound with the back of a knife so it cooks evenly and stays flat.",
      "Mix soy sauce, oyster sauce, garlic powder, salt, and black pepper. Marinate chicken for at least 15 minutes.",
      "Lightly coat each chicken thigh with cornstarch, shaking off the excess.",
      "In a large pan over low-medium heat, add oil and place chicken skin side down. Pan fry 4–5 minutes per side until golden brown and crispy (internal temp 74°C / 165°F).",
      "Remove chicken and set aside. Pour out excess oil. Melt butter over low heat, add minced garlic and cook until fragrant. Stir in honey and soy sauce, simmer until slightly thickened.",
      "Return chicken to pan, coat both sides in sauce. Garnish with dried parsley and serve with steamed jasmine rice.",
    ],
  },
  {
    id: 147, name: "Beef and Broccoli",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Chinese", time: "~20 min", servings: 2,
    nutrition: { calories: 380, protein: 36, carbs: 22, fat: 16, fiber: 4 },
    tags: ["takeout", "stir-fry", "broccoli", "quick"],
    ingredients: [
      "1 lb beef flank steak, thinly sliced against the grain (⅛–¼ inch thick)",
      "3 tbsp water",
      "1 tbsp Shaoxing cooking wine",
      "½ tsp kosher salt",
      "¼ tsp baking soda",
      "2 tbsp cornstarch",
      "1 tbsp neutral oil (for marinade)",
      "½ cup light soy sauce",
      "½ cup water (for sauce)",
      "3 tbsp granulated sugar",
      "2 tbsp cornstarch (for sauce)",
      "1 tsp toasted sesame oil",
      "1 lb broccoli, cut into florets",
      "1 tbsp garlic, minced (about 2 cloves)",
      "1 tbsp ginger, peeled and minced",
      "Oil as needed for stir frying",
      "Toasted sesame seeds for garnish (optional)",
    ],
    steps: [
      "Slice flank steak thinly against the grain, no thicker than ¼ inch.",
      "Combine beef with water, oil, Shaoxing wine, salt, cornstarch, and baking soda. Mix well and marinate 10–15 minutes (or overnight).",
      "Mix all sauce ingredients together until no dry cornstarch remains. Set aside.",
      "Boil broccoli florets in salted water for 2–3 minutes until just tender. Drain and set aside.",
      "In a wok over medium-high heat, add oil and stir fry beef until about 90% cooked. Separate slices to cook evenly. Remove and set aside.",
      "Keep 2 tbsp oil in the wok. Add minced garlic and ginger, cook until fragrant, about 15 seconds.",
      "Pour in the sauce and bring to a simmer, stirring frequently until thickened and glossy.",
      "Reduce to medium-low heat, return beef and broccoli to the pan. Toss until evenly coated. Garnish with sesame seeds and serve hot.",
    ],
  },
  {
    id: 148, name: "Terong Raos",
    protein: "Vegetable", taste: "Savory", method: "Deep-fry + Stir-fry",
    cuisine: "Indonesian", time: "35 min", servings: 2,
    nutrition: { calories: 280, protein: 5, carbs: 42, fat: 12, fiber: 6 },
    tags: ["terong", "crispy", "sambal", "spicy"],
    ingredients: [
      "300 gr terong",
      "100 gr tepung terigu protein sedang",
      "30 gr tepung maizena",
      "1 sdt cabe bubuk halus",
      "¼ sdt kunyit bubuk",
      "1½ sdt baking powder",
      "1 sdt kaldu ayam bubuk",
      "1 sdt penyedap",
      "¼ sdt merica",
      "300 ml air dingin",
      "6 siung bawang merah",
      "3 siung bawang putih",
      "6 buah cabe keriting merah",
      "4 siung bawang merah, iris",
      "2 buah cabai rawit, iris",
      "2 buah cabe merah keriting, iris",
      "2 buah cabai hijau, iris",
      "2 lembar daun salam",
      "1 batang serai, geprek",
      "3 lembar daun jeruk",
      "½ blok terasi",
      "1–2 sdm gula merah pekat",
      "1 sdt kaldu ayam bubuk",
      "½ sdt penyedap",
    ],
    steps: [
      "Potong terong sesuai selera. Sisihkan.",
      "Buat adonan celup: campur terigu, maizena, cabe bubuk, kunyit, baking powder, kaldu ayam, penyedap, dan merica. Tambahkan air dingin sedikit-sedikit, aduk hingga adonan kental tapi bisa mengalir.",
      "Celupkan potongan terong ke adonan, goreng dalam minyak panas hingga keemasan dan crispy. Angkat dan tiriskan.",
      "Haluskan: bawang merah, bawang putih, cabe keriting merah, dan terasi.",
      "Tumis bumbu halus dengan sedikit minyak hingga matang dan harum. Masukkan daun salam, serai, dan daun jeruk.",
      "Masukkan irisan bawang merah, cabai rawit, cabe merah keriting, dan cabai hijau. Tumis sebentar.",
      "Tambahkan gula merah, kaldu ayam, dan penyedap. Masak hingga bumbu mengental dan meresap.",
      "Masukkan terong goreng, aduk rata hingga terbalut bumbu. Sajikan.",
    ],
  },
  {
    id: 149, name: "Terong Asem Manis Pedas",
    protein: "Vegetable", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "30 min", servings: 3,
    nutrition: { calories: 140, protein: 3, carbs: 22, fat: 5, fiber: 5 },
    tags: ["asem manis", "pedas", "terong", "vegetarian"],
    ingredients: [
      "3 bh terong ukuran besar",
      "Tepung maizena secukupnya untuk membaluri terong",
      "Cuka + air secukupnya untuk merendam terong",
      "6 siung bawang putih",
      "Cabe rawit sesuai selera",
      "Irisan daun bawang",
      "2 sdm kecap asin",
      "1 sdm cuka beras",
      "2 sdm tepung maizena",
      "2 sdm air",
      "Garam dan gula secukupnya",
    ],
    steps: [
      "Potong terong sesuai selera, rendam dalam campuran cuka dan air sebentar agar tidak hitam. Tiriskan.",
      "Baluri terong dengan tepung maizena hingga rata, lalu goreng hingga kecokelatan. Tiriskan dan sisihkan.",
      "Cincang halus bawang putih dan cabe rawit.",
      "Tumis bawang putih dan cabe rawit hingga harum dan matang.",
      "Tambahkan kecap asin, cuka beras, garam, dan gula. Aduk rata.",
      "Larutkan maizena dengan air, tuang ke dalam tumisan. Aduk hingga saus mengental.",
      "Masukkan terong goreng, aduk rata hingga terbalut saus. Taburi irisan daun bawang. Sajikan.",
    ],
  },
  {
    id: 150, name: "Brown Butter Chocolate Chip Banana Bread",
    protein: "Fruit / Flour", taste: "Baking", method: "Baking",
    cuisine: "Western", time: "75 min", servings: 6,
    nutrition: { calories: 420, protein: 5, carbs: 58, fat: 20, fiber: 3 },
    tags: ["brown butter", "banana bread", "chocolate chip", "loaf"],
    ingredients: [
      "3 ripe bananas",
      "9 tbsp unsalted butter (browned to ~½ cup)",
      "1 large egg, room temperature",
      "¾ cup brown sugar",
      "¼ cup white sugar",
      "1½ cups all-purpose flour",
      "1 tsp baking soda",
      "½ tsp baking powder",
      "½ tsp salt",
      "1 tsp cinnamon",
      "1 tsp vanilla",
      "1 to 1½ cups semi-sweet chocolate chips",
    ],
    steps: [
      "Brown butter over medium heat until golden and nutty. Transfer to a bowl and chill 5 minutes until warm, not hot.",
      "Mash bananas in a large bowl. Whisk in browned butter (½ cup), sugars, egg, and vanilla until smooth.",
      "Add flour, baking soda, baking powder, salt, and cinnamon. Mix until just combined.",
      "Preheat oven to 175°C / 350°F. Fold in ~1 cup chocolate chips.",
      "Pour into a lined loaf pan, top with remaining chocolate chips.",
      "Bake 60 minutes, covering loosely with foil halfway through.",
      "Toothpick test: moist crumbs = done. Bake 5–10 more minutes if needed. Cool before slicing.",
    ],
  },
  {
    id: 151, name: "Ayam Madu",
    protein: "Chicken", taste: "Savory", method: "Pan-fry / Sauté",
    cuisine: "Indonesian", time: "55 min", servings: 4,
    nutrition: { calories: 340, protein: 30, carbs: 16, fat: 14, fiber: 0 },
    tags: ["madu", "honey", "glossy", "halal"],
    ingredients: [
      "3 pcs paha ayam fillet",
      "2 sdm saus tiram (untuk marinasi)",
      "2 siung bawang putih, parut",
      "1 cm jahe, parut",
      "Garam secukupnya",
      "Lada putih secukupnya",
      "2 sdm kecap asin",
      "3 sdm saus tiram",
      "3 sdm madu",
      "100 ml air",
    ],
    steps: [
      "Marinasi ayam dengan saus tiram, bawang putih parut, jahe parut, garam, dan lada putih. Diamkan 30 menit.",
      "Panaskan sedikit minyak, pan sear ayam hingga berubah warna dan kecokelatan di kedua sisi.",
      "Tuangkan campuran kecap asin, saus tiram, madu, dan air ke dalam pan. Masak ayam hingga saus meresap dan mengkilat.",
      "Sajikan dengan nasi putih hangat.",
    ],
  },
  {
    id: 152, name: "Daging Empal Gepuk Basah",
    protein: "Beef", taste: "Savory", method: "Simmering",
    cuisine: "Indonesian", time: "25 min", servings: 6,
    nutrition: { calories: 380, protein: 32, carbs: 18, fat: 20, fiber: 2 },
    tags: ["empal", "gepuk", "Sunda", "kelapa sangrai"],
    ingredients: [
      "1 kg daging sapi bagian paha / khas luar (sudah di-presto)",
      "15 siung bawang merah",
      "10 siung bawang putih",
      "3 buah cabe merah besar",
      "5 buah kemiri",
      "5 cm jahe",
      "3 lembar daun salam",
      "5 lembar daun jeruk",
      "2 batang serai",
      "250 ml kaldu",
      "8 cm lengkuas, parut",
      "3 sdm air asam jawa",
      "100 gr kelapa parut, sangrai",
      "3 sdt ketumbar bubuk",
      "½ sdt merica",
      "1 sdt garam",
      "1 sdt kaldu jamur",
      "100 gr gula merah",
    ],
    steps: [
      "Potong dan memarkan daging sapi yang sudah di-presto hingga pipih.",
      "Blender bawang merah, bawang putih, cabe merah, kemiri, dan jahe hingga halus.",
      "Tumis bumbu halus bersama daun salam, daun jeruk, dan serai hingga bumbu matang dan harum.",
      "Masukkan lengkuas parut, kaldu, garam, kaldu jamur, merica, gula merah, ketumbar, dan air asam jawa. Aduk rata.",
      "Masukkan daging, masak 5 menit hingga bumbu meresap.",
      "Tambahkan kelapa sangrai, lanjutkan memasak hingga agak kering.",
      "Sajikan dengan nasi, lalapan, dan sambal terasi.",
    ],
  },
  {
    id: 153, name: "Cumi Goreng Saus Mentega",
    protein: "Squid", taste: "Savory", method: "Deep-fry + Stir-fry",
    cuisine: "Indonesian", time: "30 min", servings: 6,
    nutrition: { calories: 280, protein: 22, carbs: 24, fat: 10, fiber: 1 },
    tags: ["crispy", "saus mentega", "cumi", "anti alot"],
    ingredients: [
      "500 gr cumi segar, potong ring dan bersihkan",
      "1 sdm air jeruk nipis",
      "120 gr tepung terigu",
      "30 gr tepung maizena",
      "½ sdt baking powder",
      "¼ sdt garam",
      "180 ml air soda dingin",
      "2 sdm margarin",
      "3 siung bawang putih, cincang",
      "2 sdm kecap manis",
      "1 sdm saus tiram",
      "1 sdt kecap asin",
      "1 sdm kecap inggris",
      "½ sdt gula",
      "¼ sdt MSG",
      "¼ sdt merica",
    ],
    steps: [
      "Potong cumi bentuk ring, bersihkan. Balur dengan jeruk nipis, diamkan 10 menit.",
      "Campur tepung terigu, maizena, baking powder, garam, dan merica. Tuang air soda dingin sedikit-sedikit hingga jadi adonan kental.",
      "Panaskan minyak api sedang. Celup cumi ke batter, goreng hingga kering dan crunchy. Angkat dan tiriskan.",
      "Panaskan margarin di wajan. Tumis bawang putih hingga harum.",
      "Masukkan kecap manis, saus tiram, kecap asin, kecap inggris, gula, MSG, dan merica. Masak hingga sedikit mengental.",
      "Masukkan cumi goreng, aduk cepat 10–15 detik hingga saus melapisi cumi. Sajikan hangat.",
    ],
  },
  {
    id: 154, name: "Udang Saus Balado",
    protein: "Shrimp", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~40 min", servings: 5,
    nutrition: { calories: 290, protein: 22, carbs: 20, fat: 14, fiber: 3 },
    tags: ["balado", "pedas", "petai", "kentang"],
    ingredients: [
      "350 gr udang",
      "½ sdm perasan jeruk nipis (marinasi)",
      "1 sdt garam (marinasi)",
      "¼ sdt merica (marinasi)",
      "50 gr bawang merah (bumbu halus)",
      "5 siung bawang putih (bumbu halus)",
      "70 gr cabai merah keriting",
      "130 gr cabai merah tanjung",
      "200 gr kentang, potong-potong",
      "100 ml minyak",
      "50 gr bawang merah, iris",
      "8 lembar daun jeruk",
      "1 batang serai, geprek",
      "½ sdm garam",
      "½ sdm penyedap",
      "2 sdt gula pasir",
      "1 sdt perasan jeruk nipis",
      "50 gr petai kupas",
      "20 buah cabai rawit hijau",
      "50 ml air",
    ],
    steps: [
      "Potong bagian tajam udang, belah punggung lalu bersihkan.",
      "Marinasi udang dengan jeruk nipis, garam, dan merica. Aduk rata.",
      "Goreng udang sebentar, tiriskan. Goreng kentang hingga kecokelatan, tiriskan.",
      "Rebus cabai merah tanjung dan cabai keriting sebentar, tiriskan.",
      "Masukkan bawang putih, bawang merah, dan cabai rebus ke food chopper, haluskan.",
      "Iris bawang merah dan geprek serai.",
      "Panaskan minyak, tumis bawang merah iris, serai, dan daun jeruk hingga wangi. Masukkan bumbu halus, tumis hingga harum.",
      "Masukkan garam, penyedap, gula, jeruk nipis, udang, kentang, petai, dan cabai rawit hijau. Aduk rata, tambahkan air. Masak hingga bumbu meresap.",
      "Sajikan dengan nasi putih.",
    ],
  },
  {
    id: 155, name: "Telur Asam Manis",
    protein: "Vegetable", taste: "Savory", method: "Pan-fry / Sauté",
    cuisine: "Indonesian", time: "~20 min", servings: 6,
    nutrition: { calories: 180, protein: 8, carbs: 14, fat: 10, fiber: 1 },
    tags: ["telur", "asam manis", "budget-friendly", "quick"],
    ingredients: [
      "6 butir telur",
      "Garam secukupnya",
      "2 siung bawang putih, cincang",
      "½ buah bawang bombai, iris",
      "1 buah cabai merah tanjung, buang biji, iris miring",
      "1 sdm minyak",
      "1 sdm margarin",
      "2 sdm saus tomat",
      "2 sdm saus sambal",
      "½ sdt cuka",
      "½ sdm saus tiram",
      "1 sdt maizena",
      "2 sdt gula pasir",
      "150 ml air",
    ],
    steps: [
      "Panaskan sedikit minyak, goreng telur ceplok dengan sedikit garam hingga matang. Sisihkan.",
      "Campur air, saus tomat, saus sambal, saus tiram, gula pasir, cuka, dan maizena. Aduk rata untuk saus asam manis.",
      "Panaskan sedikit minyak, tumis bawang putih hingga wangi. Masukkan bawang bombai dan cabai merah, tumis sesaat.",
      "Tuang campuran saus asam manis dan margarin. Masak hingga mendidih dan sedikit mengental.",
      "Masukkan telur ceplok, masak beberapa saat hingga saus meresap. Sajikan dengan nasi putih.",
    ],
  },
  {
    id: 156, name: "Oseng Tahu Telur Kucai",
    protein: "Tofu & Tempeh", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~25 min", servings: 4,
    nutrition: { calories: 190, protein: 12, carbs: 10, fat: 11, fiber: 2 },
    tags: ["tahu", "telur", "kucai", "ebi"],
    ingredients: [
      "6 buah tahu putih, potong-potong",
      "1 butir telur, kocok lepas",
      "80 gr kucai, potong-potong",
      "1 sdt gula pasir",
      "½ sdt garam",
      "1 sdm saus tiram",
      "1 sdt kaldu jamur",
      "50 ml air",
      "Minyak untuk menumis",
      "1 sdm ebi kering, rendam air panas",
      "5 siung bawang putih",
      "5 siung bawang merah",
      "5 buah cabai rawit merah",
      "5 buah cabai merah keriting",
    ],
    steps: [
      "Masukkan bawang merah, bawang putih, cabai merah keriting, cabai rawit, dan ebi ke food chopper. Haluskan.",
      "Potong-potong tahu, kocok telur lalu campurkan ke tahu. Aduk rata.",
      "Panaskan sedikit minyak, masak campuran tahu dan telur hingga kecokelatan. Sisihkan.",
      "Panaskan sedikit minyak, tumis bumbu halus hingga wangi.",
      "Masukkan tahu, air, garam, kaldu jamur, gula pasir, dan saus tiram. Masak beberapa saat.",
      "Masukkan kucai, masak sesaat hingga layu. Sajikan dengan nasi putih.",
    ],
  },
  {
    id: 157, name: "Sapi Saus Lada Hitam",
    protein: "Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~25 min", servings: 3,
    nutrition: { calories: 360, protein: 28, carbs: 18, fat: 18, fiber: 1 },
    tags: ["lada hitam", "black pepper", "sapi iris", "quick"],
    ingredients: [
      "200 gr daging sapi iris",
      "2 sdm maizena (marinasi)",
      "2 sdm air (marinasi)",
      "1 sdm kecap asin (marinasi)",
      "3 siung bawang putih, cincang",
      "5 siung bawang merah, cincang",
      "4 buah cabai merah keriting, iris",
      "½ buah bawang bombai, iris",
      "1–2 sdm minyak",
      "½ sdm lada hitam kasar",
      "2 sdm saus tiram",
      "½ sdm saus tomat",
      "½ sdm saus sambal (opsional)",
      "1 sdm kecap manis",
      "1 sdm margarin",
      "225 ml air",
      "1 sdm maizena (pengental)",
    ],
    steps: [
      "Campurkan maizena, kecap asin, dan air. Masukkan daging sapi iris, aduk perlahan. Marinasi 10 menit.",
      "Cincang bawang putih dan bawang merah. Iris bawang bombai dan cabai merah keriting.",
      "Panaskan minyak, tumis bawang merah dan bawang putih hingga wangi. Masukkan bawang bombai, cabai, dan daging sapi. Aduk rata.",
      "Masukkan lada hitam, tumis sesaat. Tambahkan saus tiram, kecap manis, saus sambal, saus tomat, dan margarin. Masak sesaat.",
      "Larutkan maizena dengan air, tuang ke wajan. Masak hingga mendidih dan mengental.",
      "Sajikan dengan nasi putih dan telur mata sapi.",
    ],
  },
  {
    id: 158, name: "Sayap Ayam Kecap Inggris",
    protein: "Chicken", taste: "Savory", method: "Air Fryer",
    cuisine: "Indonesian", time: "~45 min", servings: 6,
    nutrition: { calories: 320, protein: 28, carbs: 6, fat: 18, fiber: 0 },
    tags: ["air fryer", "sayap ayam", "kecap inggris", "easy"],
    ingredients: [
      "600 gr sayap ayam, belah dua",
      "1½ sdm bawang putih bubuk (atau 3 siung bawang putih, haluskan)",
      "1 sdm kaldu ayam bubuk",
      "2 sdm kecap inggris",
      "1½ sdm kecap manis",
    ],
    steps: [
      "Marinasi sayap ayam dengan bawang putih bubuk, kaldu ayam bubuk, kecap inggris, dan kecap manis. Aduk rata, diamkan 30 menit atau semalaman di kulkas.",
      "Masukkan sayap ayam ke air fryer, oles dengan sisa bumbu marinasi. Panggang 170°C selama 15 menit.",
      "Di tengah proses, balik sayap dan oles kembali dengan sisa marinasi. Panggang hingga matang dan kecokelatan.",
      "Sajikan hangat.",
    ],
  },
  {
    id: 159, name: "Chicken Luncheon",
    protein: "Chicken", taste: "Savory", method: "Steaming",
    cuisine: "Indonesian", time: "~60 min", servings: 6,
    nutrition: { calories: 310, protein: 26, carbs: 10, fat: 18, fiber: 0 },
    tags: ["luncheon meat", "homemade", "meal prep", "steam"],
    ingredients: [
      "12 gr daun bawang cung bagian putih, iris",
      "30 gr minyak (untuk minyak aromatik)",
      "275 gr paha ayam filet",
      "75 gr daging sapi cincang",
      "100 gr kulit ayam",
      "1 sdt garam",
      "1 sdm gula pasir",
      "2 sdt kaldu jamur",
      "½ sdm kaldu ayam bubuk",
      "¼ sdt merica",
      "1 sdt baking powder",
      "2 sdt bawang putih bubuk",
      "1 sdt angkak bubuk",
      "100 gr es batu / air es",
      "1 butir putih telur",
      "1½ sdm kecap asin",
      "25 gr tapioka / sang fen",
      "2 sdm tepung roti putih",
    ],
    steps: [
      "Didihkan air, rebus kulit ayam beberapa saat. Tiriskan.",
      "Iris daun bawang cung bagian putih, tumis dengan minyak sebentar. Sisihkan sebagai minyak aromatik.",
      "Masukkan paha ayam, daging sapi cincang, kulit ayam rebus, garam, gula, merica, kaldu jamur, kaldu ayam bubuk, baking powder, bawang putih bubuk, angkak, dan es batu ke food processor. Haluskan hingga lengket.",
      "Tambahkan minyak aromatik, putih telur, kecap asin, tapioka, dan tepung roti. Haluskan kembali hingga rata.",
      "Tuang adonan ke loyang yang sudah dialasi baking paper, ratakan dan hentakkan ke meja. Tutup dengan aluminium foil.",
      "Kukus 40 menit api sedang-kecil. Diamkan hingga dingin lalu potong-potong.",
      "Panaskan sedikit minyak, goreng potongan chicken luncheon hingga sedikit kecokelatan. Sajikan dengan nasi dan telur mata sapi.",
    ],
  },
  {
    id: 160, name: "Ayam Cincang Kemangi",
    protein: "Minced Beef", taste: "Savory", method: "Stir-fry",
    cuisine: "Indonesian", time: "~25 min", servings: 5,
    nutrition: { calories: 300, protein: 26, carbs: 8, fat: 16, fiber: 1 },
    tags: ["kemangi", "ayam giling", "pedas", "terasi"],
    ingredients: [
      "350 gr paha ayam giling",
      "1 sdm kecap manis (marinasi)",
      "1½ sdm saus tiram (marinasi)",
      "1 sdt kecap maggi / kecap ikan (marinasi)",
      "4 siung bawang putih, cincang",
      "4 siung bawang merah, cincang",
      "5 buah cabai merah keriting, iris",
      "8 buah cabai rawit hijau, iris",
      "1 batang serai bagian putih, cincang",
      "4 gr terasi, bakar",
      "2 sdm minyak",
      "10 buah bawang merah kecil, utuh",
      "2 sdt gula pasir",
      "¼ sdt merica",
      "½ sdt kaldu bubuk",
      "½ sdm saus tiram",
      "25 gr kemangi",
    ],
    steps: [
      "Campurkan ayam giling dengan kecap manis, saus tiram, dan kecap maggi. Aduk rata.",
      "Cincang bawang putih, bawang merah, dan serai. Iris cabai merah keriting dan cabai rawit hijau.",
      "Panaskan minyak, tumis bawang putih dan bawang merah hingga wangi. Masukkan terasi bakar, serai, dan cabai. Tumis hingga harum.",
      "Masukkan ayam yang sudah dimarinasi, masak hingga matang. Tambahkan bawang merah utuh, gula, merica, kaldu bubuk, dan saus tiram. Masak sesaat.",
      "Masukkan kemangi, aduk sebentar hingga layu. Sajikan dengan nasi putih, telur mata sapi, dan perasan jeruk limau.",
    ],
  },
  {
    id: 161, name: "Hainan Chicken Rice",
    protein: "Chicken", taste: "Savory", method: "Rice Cooker / Steaming",
    cuisine: "Asian", time: "~45 min", servings: 5,
    nutrition: { calories: 480, protein: 30, carbs: 52, fat: 14, fiber: 1 },
    tags: ["one-pot", "rice cooker", "nasi hainan", "comfort food"],
    ingredients: [
      "5 pcs paha ayam fillet",
      "5 siung bawang putih, cincang",
      "3 cm jahe, cincang",
      "1 sdm margarin",
      "500 gr beras",
      "750 ml kaldu ayam",
      "2 sdm kecap asin",
      "1 sdt kaldu jamur",
      "2 sdm minyak wijen",
      "Sambal jahe untuk pelengkap",
      "Kaldu ayam untuk pelengkap",
      "Jahe iris + cabe rawit untuk pelengkap",
    ],
    steps: [
      "Lelehkan margarin di wajan.",
      "Tumis bawang putih dan jahe hingga kecokelatan dan harum.",
      "Masukkan beras, aduk hingga tercampur rata dengan tumisan.",
      "Tambahkan kecap asin, kaldu jamur, dan minyak wijen. Aduk rata.",
      "Pindahkan beras ke rice cooker, tuang kaldu ayam. Letakkan paha ayam fillet di atas beras.",
      "Masak dengan rice cooker hingga matang. Sajikan dengan sambal jahe, semangkuk kaldu, dan jahe iris beserta cabe rawit.",
    ],
  },
  {
    id: 162, name: "Tongseng Ayam",
    protein: "Chicken", taste: "Savory", method: "Simmering",
    cuisine: "Indonesian", time: "~35 min", servings: 4,
    nutrition: { calories: 350, protein: 30, carbs: 16, fat: 16, fiber: 3 },
    tags: ["tongseng", "kol", "kunyit", "Jawa"],
    ingredients: [
      "500 gr paha ayam fillet",
      "3 cm lengkuas, geprek",
      "1 batang serai",
      "2 lembar daun jeruk",
      "1 lembar daun salam",
      "10 siung bawang merah, iris",
      "4 siung bawang putih, iris",
      "1 sdt kunyit bubuk",
      "3 sdm kecap manis",
      "½ bonggol kol, potong-potong",
      "2 batang daun bawang, iris",
      "1 buah tomat, potong",
      "½ sdt garam",
      "1 sdt kaldu jamur",
      "½ sdt lada putih",
      "Air secukupnya",
    ],
    steps: [
      "Panaskan minyak, masukkan ayam. Masak hingga kandungan air berkurang.",
      "Masukkan irisan bawang merah dan bawang putih, tambahkan serai, lengkuas, daun jeruk, dan daun salam. Tumis hingga harum.",
      "Masukkan kunyit bubuk dan kecap manis, aduk rata.",
      "Tambahkan air secukupnya, masak hingga bumbu meresap.",
      "Tambahkan garam, kaldu jamur, dan lada putih. Aduk rata.",
      "Masukkan kol, tomat, dan daun bawang. Masak hingga matang. Sajikan.",
    ],
  },
];

// ─── ENRICHMENT ────────────────────────────────────────────────────────────────
function enrichRecipe(r) {
  const ing = (r.ingredients || []).join(" ").toLowerCase();
  const steps = (r.steps || []).join(" ").toLowerCase();
  const name = r.name.toLowerCase();
  const method = (r.method || "").toLowerCase();

  const isDeepFried = method.includes("deep") ||
    steps.includes("goreng di minyak") || steps.includes("minyak panas") ||
    name.includes("goreng tepung") || name.includes("krispi") || name.includes("ebi furai") ||
    name.includes("nashville") || name.includes("shrimp roll") || name.includes("jamur tiram krispy");

  const hasGluten =
    ing.includes("tepung terigu") || ing.includes("all purpose flour") ||
    ing.includes("tepung protein") || ing.includes("plain flour") ||
    ing.includes("self-raising flour") || ing.includes("lasagna sheet") ||
    ing.includes("tepung roti") || ing.includes("breadcrumb");

  const isComplete =
    name.includes("sukiyaki") || name.includes("curry") ||
    name.includes("brokoli daging") || name.includes("tumis brokoli ayam") ||
    name.includes("hotplate beef tofu") || name.includes("sop iga") ||
    name.includes("sop ayam") || name.includes("sup bakso") ||
    name.includes("tom yam") || name.includes("ishikari") ||
    name.includes("beef pepper rice") || name.includes("shrimp steamed rice") ||
    name.includes("sesame chicken claypot") || name.includes("oyakodon") ||
    name.includes("waterless chicken") || name.includes("salted scallion chicken rice") ||
    name.includes("garlic butter chicken");

  const isVegSide = (r.protein === "Vegetable" || r.protein === "Tofu & Tempeh" || r.protein === "Vegetarian") && !isComplete;

  const timeStr = (r.time || "").replace("~","");
  const timeMatch = timeStr.match(/(\d+)/);
  const cookMins = timeMatch ? parseInt(timeMatch[1]) : 45;
  const isQuick = cookMins <= 35;

  return { ...r, isDeepFried, hasGluten, isComplete, isVegSide, isQuick, cookMins };
}

// ─── CONSTANTS ─────────────────────────────────────────────────────────────────
const PROTEIN_GROUPS = {
  "🐔 Chicken":        ["Chicken"],
  "🥩 Beef":           ["Beef", "Minced Beef"],
  "🦐 Shrimp":         ["Shrimp"],
  "🦑 Squid":          ["Squid"],
  "🐟 Fish":           ["Fish", "Salmon"],
  "🥦 Vegetables":     ["Vegetable", "Vegetarian", "Tofu & Tempeh"],
  "🧁 Baking":         ["Flour / Butter", "Flour / Dough", "Fruit / Oats", "Fruit / Flour"],
  "🍵 Drinks":         ["Herbal", "Soy / Dashi"],
};

const METHOD_ICONS = {
  "Pan-fry / Sauté":"🥘","Stir-fry":"🔥","Baking":"🔥","Hot Pot":"🫕",
  "Hot Pot / Simmering":"🫕","Simmering":"♨️","Steaming / Braising":"♨️",
  "Steaming":"♨️","Rice Cooker / Steaming":"🍚","Deep-fry + Stir-fry":"🫙",
  "Deep-fry + Sauté":"🫙","Claypot / Stovetop":"🏺","Stovetop / Rice Cooker":"🍚",
  "Stovetop":"🍳","Baking + Simmering":"🔥","Air Fryer":"💨",
  "Cold Brew / No-Cook":"❄️","No-Cook / Freeze":"🧊","Deep-fry":"🫙",
  "Boiling / Soup":"🍲","Roasting":"🔥",
};

const ACCENTS = ["#d97706","#16a34a","#0284c7","#db2777","#7c3aed","#ea580c","#059669","#2563eb","#9333ea","#ca8a04","#dc2626","#0891b2"];

const HUSBAND_PROTEIN_PER_MEAL = 33;
const WIFE_PROTEIN_PER_MEAL = 33;
const COMBINED_PROTEIN_GOAL = 66;

// Light mode color tokens
const C = {
  bg: "#f8f7f4",
  surface: "#ffffff",
  surfaceHover: "#f1ede6",
  border: "#e5e0d8",
  borderStrong: "#d1c9be",
  text: "#1c1917",
  textMuted: "#78716c",
  textFaint: "#a8a29e",
  headerBg: "#ffffff",
  stickyBg: "#ffffffee",
  shadow: "0 1px 3px rgba(0,0,0,0.08)",
  shadowMd: "0 4px 12px rgba(0,0,0,0.1)",
  orange: "#d97706",
  orangeLight: "#fef3c7",
  orangeBorder: "#fde68a",
  green: "#16a34a",
  greenLight: "#dcfce7",
  greenBorder: "#bbf7d0",
  red: "#dc2626",
  redLight: "#fee2e2",
  blue: "#2563eb",
  blueLight: "#dbeafe",
  yellow: "#ca8a04",
  yellowLight: "#fefce8",
};

// ─── RECIPE DETAIL PAGE ────────────────────────────────────────────────────────
function RecipeDetail({ recipe, onBack, accent }) {
  const acc = accent || C.orange;
  const r = enrichRecipe(recipe);
  const proteinPerServing = recipe.nutrition.protein;

  const warnings = [];
  if (r.isDeepFried) warnings.push({ icon: "⚠️", text: "Deep-fried — not ideal for wife's IBD" });
  if (r.hasGluten) warnings.push({ icon: "🌾", text: "Contains gluten — limit for wife" });

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Top bar */}
      <div style={{ background: C.stickyBg, borderBottom: `1px solid ${C.border}`, backdropFilter: "blur(8px)", padding: "12px 20px", position: "sticky", top: 0, zIndex: 10, display: "flex", alignItems: "center", gap: "12px" }}>
        <button onClick={onBack} style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text, borderRadius: "8px", padding: "7px 14px", cursor: "pointer", fontSize: "13px", fontWeight: 600, boxShadow: C.shadow }}>
          ← Back
        </button>
        <span style={{ fontSize: "13px", color: C.textMuted }}>{recipe.cuisine} · {recipe.method}</span>
      </div>

      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "28px 20px 60px" }}>
        {/* Hero image */}
        {recipe.image && (
          <div style={{ marginBottom: "20px", borderRadius: "14px", overflow: "hidden", boxShadow: C.shadowMd }}>
            <img src={recipe.image} alt={recipe.name}
              style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
          </div>
        )}

        {/* Header */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "11px", color: acc, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "8px" }}>
            {recipe.taste} · {recipe.protein}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, color: C.text, margin: "0 0 10px", lineHeight: 1.2 }}>{recipe.name}</h1>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "10px" }}>
            <span style={{ fontSize: "13px", color: C.textMuted }}>⏱ {recipe.time}</span>
            <span style={{ color: C.border }}>·</span>
            <span style={{ fontSize: "13px", color: C.textMuted }}>👤 {recipe.servings} servings</span>
            <span style={{ color: C.border }}>·</span>
            <span style={{ fontSize: "13px", color: C.textMuted }}>{METHOD_ICONS[recipe.method] || "🍴"} {recipe.method}</span>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {recipe.tags.map(t => (
              <span key={t} style={{ fontSize: "11px", color: acc, background: C.orangeLight, padding: "3px 10px", borderRadius: "20px", border: `1px solid ${C.orangeBorder}` }}>#{t}</span>
            ))}
            {r.isComplete && <span style={{ fontSize: "11px", color: C.green, background: C.greenLight, padding: "3px 10px", borderRadius: "20px", border: `1px solid ${C.greenBorder}` }}>✓ Complete dish</span>}
          </div>
        </div>

        {/* Warnings */}
        {warnings.length > 0 && (
          <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "12px", padding: "12px 16px", marginBottom: "16px" }}>
            {warnings.map((w, i) => (
              <div key={i} style={{ fontSize: "13px", color: "#c2410c", display: "flex", gap: "8px", marginBottom: i < warnings.length - 1 ? "6px" : 0 }}>
                <span>{w.icon}</span><span>{w.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Nutrition */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", padding: "16px", marginBottom: "20px", boxShadow: C.shadow }}>
          <div style={{ fontSize: "11px", color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "12px" }}>Nutrition per serving (estimated)</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "6px", marginBottom: "12px" }}>
            {[["Cal", recipe.nutrition.calories, ""], ["Protein", recipe.nutrition.protein, "g"], ["Carbs", recipe.nutrition.carbs, "g"], ["Fat", recipe.nutrition.fat, "g"], ["Fiber", recipe.nutrition.fiber, "g"]].map(([label, val, unit]) => (
              <div key={label} style={{ textAlign: "center", background: C.bg, borderRadius: "8px", padding: "8px 4px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: C.text }}>{val}<span style={{ fontSize: "11px", color: C.textMuted }}>{unit}</span></div>
                <div style={{ fontSize: "10px", color: C.textFaint, textTransform: "uppercase", marginTop: "2px" }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "12px", color: C.textMuted, borderTop: `1px solid ${C.border}`, paddingTop: "10px", lineHeight: 1.6 }}>
            🏃 Husband ~{HUSBAND_PROTEIN_PER_MEAL}g/meal &nbsp;·&nbsp; 👩 Wife ~{WIFE_PROTEIN_PER_MEAL}g/meal
            <span style={{ color: proteinPerServing >= 25 ? C.green : C.orange, fontWeight: 600 }}>
              {" · "}{proteinPerServing}g protein/serving {proteinPerServing >= 25 ? "✓" : "— consider 2 servings"}
            </span>
          </div>
        </div>

        {/* Ingredients */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", padding: "18px", marginBottom: "16px", boxShadow: C.shadow }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Ingredients</h2>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
            {recipe.ingredients.map((ing, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: C.text, padding: "7px 0", borderBottom: i < recipe.ingredients.length - 1 ? `1px solid ${C.border}` : "none", lineHeight: 1.5 }}>
                <span style={{ color: acc, fontSize: "8px", marginTop: "6px", flexShrink: 0 }}>◆</span>
                {ing}
              </li>
            ))}
          </ul>
        </div>

        {/* Directions — no onClick anywhere on this container */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", padding: "18px", marginBottom: "16px", boxShadow: C.shadow }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Directions</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {recipe.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "10px 0", borderBottom: i < recipe.steps.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ background: acc, color: "#fff", borderRadius: "50%", width: "24px", height: "24px", minWidth: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, marginTop: "1px" }}>{i + 1}</div>
                <p style={{ margin: 0, fontSize: "14px", color: C.text, lineHeight: 1.7 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {recipe.link && (
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <a href={recipe.link} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: acc, textDecoration: "none", background: C.orangeLight, padding: "9px 20px", borderRadius: "20px", border: `1px solid ${C.orangeBorder}`, fontWeight: 600 }}>
              📎 View original source →
            </a>
          </div>
        )}
        <p style={{ color: C.textFaint, fontSize: "11px", textAlign: "center", marginTop: "24px" }}>* Nutrition values are estimates.</p>
      </div>
    </div>
  );
}

// ─── RECIPE CARD ───────────────────────────────────────────────────────────────
function RecipeCard({ recipe, onSelect, accentColor, proteinContext }) {
  // proteinContext = { proteinFromStep1, goal } — passed only in Step 2
  const acc = accentColor || C.orange;
  const r = enrichRecipe(recipe);
  const [hov, setHov] = useState(false);

  // Compute inline protein badge for Step 2
  let proteinBadge = null;
  if (proteinContext) {
    const combined = proteinContext.proteinFromStep1 + (recipe.nutrition.protein * 2);
    const meets = combined > proteinContext.goal;
    const pct = Math.min(100, Math.round((combined / proteinContext.goal) * 100));
    proteinBadge = { combined, meets, pct };
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={e => { e.stopPropagation(); onSelect(recipe, acc); }}
      onKeyDown={e => e.key === "Enter" && onSelect(recipe, acc)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? C.surfaceHover : C.surface,
        border: `1px solid ${proteinBadge?.meets && recipe.nutrition.protein > 0 ? C.greenBorder : C.border}`,
        borderLeft: `3px solid ${proteinBadge && recipe.nutrition.protein > 0 ? (proteinBadge.meets ? C.green : C.orange) : acc}`,
        borderRadius: "10px",
        padding: "0",
        cursor: "pointer",
        transition: "background 0.12s",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: "0",
        boxShadow: C.shadow,
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {/* Left thumbnail — only if image exists */}
      {recipe.image && (
        <img src={recipe.image} alt={recipe.name}
          style={{ width: "72px", minWidth: "72px", objectFit: "cover", display: "block", borderRight: `1px solid ${C.border}` }} />
      )}

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0, padding: "12px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "5px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", fontWeight: 600, color: C.text, lineHeight: 1.3 }}>{recipe.name}</span>
          {r.isComplete && <span style={{ fontSize: "10px", background: C.greenLight, color: C.green, padding: "1px 7px", borderRadius: "10px", border: `1px solid ${C.greenBorder}`, flexShrink: 0 }}>complete</span>}
          {proteinBadge?.meets && recipe.nutrition.protein > 0 && (
            <span style={{ fontSize: "10px", background: C.greenLight, color: C.green, padding: "1px 7px", borderRadius: "10px", border: `1px solid ${C.greenBorder}`, flexShrink: 0, fontWeight: 700 }}>
              ✓ completes protein
            </span>
          )}
        </div>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "10px", color: C.textMuted, background: C.bg, padding: "2px 7px", borderRadius: "20px", border: `1px solid ${C.border}` }}>{METHOD_ICONS[recipe.method] || "🍴"} {recipe.method}</span>
          <span style={{ fontSize: "10px", color: C.textMuted, background: C.bg, padding: "2px 7px", borderRadius: "20px", border: `1px solid ${C.border}` }}>⏱ {recipe.time}</span>
          {r.isDeepFried && <span style={{ fontSize: "10px", color: "#c2410c", background: "#fff7ed", padding: "2px 7px", borderRadius: "20px", border: "1px solid #fed7aa" }}>⚠️ deep-fried</span>}
          {r.hasGluten && <span style={{ fontSize: "10px", color: C.yellow, background: C.yellowLight, padding: "2px 7px", borderRadius: "20px", border: "1px solid #fde68a" }}>🌾 gluten</span>}
        </div>
      </div>

      {/* Right — protein + arrow */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: "2px", flexShrink: 0, padding: "12px 14px" }}>
        <span style={{ fontSize: "14px", fontWeight: 700, color: proteinBadge && recipe.nutrition.protein > 0 ? (proteinBadge.meets ? C.green : C.orange) : acc }}>{recipe.nutrition.protein}g</span>
        <span style={{ fontSize: "10px", color: C.textFaint }}>protein</span>
        <span style={{ fontSize: "12px", color: C.textFaint }}>›</span>
      </div>
    </div>
  );
}

// ─── TODAY PLANNER ─────────────────────────────────────────────────────────────
function MealSummaryPage({ protein, veg, onBack, onSelect }) {
  const recipes = [protein, veg].filter(Boolean);
  const proteinTotal = ((protein?.nutrition?.protein || 0) + (veg?.nutrition?.protein || 0)) * 2;
  const pct = Math.min(100, Math.round((proteinTotal / COMBINED_PROTEIN_GOAL) * 100));
  const ok = pct >= 80;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: C.stickyBg, borderBottom: `1px solid ${C.border}`, backdropFilter: "blur(8px)", padding: "12px 20px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={onBack} style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text, borderRadius: "10px", padding: "7px 12px", cursor: "pointer", fontSize: "13px", fontWeight: 600, boxShadow: C.shadow }}>← Back</button>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: C.text }}>Today's Meal</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "24px 16px 60px" }}>

        {/* Protein summary card */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", padding: "16px", marginBottom: "20px", boxShadow: C.shadowMd }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>Protein summary</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ fontSize: "13px", color: C.textMuted }}>Combined (2 servings)</span>
            <span style={{ fontSize: "13px", fontWeight: 700, color: ok ? C.green : C.orange }}>{proteinTotal}g / {COMBINED_PROTEIN_GOAL}g goal</span>
          </div>
          <div style={{ background: C.bg, borderRadius: "6px", height: "8px", overflow: "hidden", border: `1px solid ${C.border}`, marginBottom: "8px" }}>
            <div style={{ width: `${pct}%`, height: "100%", background: ok ? C.green : C.orange, borderRadius: "6px", transition: "width 0.3s" }} />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {protein && <span style={{ fontSize: "11px", color: C.textMuted }}>{protein.nutrition.protein * 2}g from {protein.name}</span>}
            {protein && veg && <span style={{ color: C.border }}>·</span>}
            {veg && <span style={{ fontSize: "11px", color: C.textMuted }}>{veg.nutrition.protein * 2}g from {veg.name}</span>}
          </div>
        </div>

        {/* Recipe cards — full detail */}
        {recipes.map((recipe, i) => {
          const r = enrichRecipe(recipe);
          const acc = i === 0 ? C.orange : C.green;
          const label = i === 0 ? "🥩 Protein dish" : "🥦 Vegetable side";
          return (
            <div key={recipe.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden", marginBottom: "16px", boxShadow: C.shadowMd }}>
              {/* Recipe header */}
              <div style={{ borderLeft: `4px solid ${acc}`, padding: "16px 18px", borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontSize: "10px", color: acc, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: C.text, marginBottom: "6px" }}>{recipe.name}</div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: C.textMuted }}>⏱ {recipe.time}</span>
                  <span style={{ color: C.border }}>·</span>
                  <span style={{ fontSize: "12px", color: C.textMuted }}>👤 {recipe.servings} servings</span>
                  <span style={{ color: C.border }}>·</span>
                  <span style={{ fontSize: "12px", color: C.textMuted }}>{METHOD_ICONS[recipe.method] || "🍴"} {recipe.method}</span>
                  <span style={{ color: C.border }}>·</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: acc }}>{recipe.nutrition.protein}g protein/srv</span>
                </div>
                {/* Warnings */}
                <div style={{ display: "flex", gap: "6px", marginTop: "8px", flexWrap: "wrap" }}>
                  {r.isDeepFried && <span style={{ fontSize: "10px", color: "#c2410c", background: "#fff7ed", padding: "2px 8px", borderRadius: "20px", border: "1px solid #fed7aa" }}>⚠️ Deep-fried</span>}
                  {r.hasGluten && <span style={{ fontSize: "10px", color: C.yellow, background: C.yellowLight, padding: "2px 8px", borderRadius: "20px", border: "1px solid #fde68a" }}>🌾 Gluten</span>}
                  {recipe.tags?.map(t => <span key={t} style={{ fontSize: "10px", color: C.textMuted, background: C.bg, padding: "2px 8px", borderRadius: "20px", border: `1px solid ${C.border}` }}>#{t}</span>)}
                </div>
              </div>

              {/* Ingredients */}
              <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px" }}>Ingredients</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {recipe.ingredients?.map((ing, j) => (
                    <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "4px 0", borderBottom: j < recipe.ingredients.length - 1 ? `1px solid ${C.border}` : "none", fontSize: "13px", color: C.text }}>
                      <span style={{ color: acc, fontSize: "8px", marginTop: "6px", flexShrink: 0 }}>◆</span>
                      {ing}
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div style={{ padding: "14px 18px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px" }}>Directions</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {recipe.steps?.map((step, j) => (
                    <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "8px 0", borderBottom: j < recipe.steps.length - 1 ? `1px solid ${C.border}` : "none" }}>
                      <div style={{ background: acc, color: "#fff", borderRadius: "50%", width: "22px", height: "22px", minWidth: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, marginTop: "1px" }}>{j + 1}</div>
                      <p style={{ margin: 0, fontSize: "13px", color: C.text, lineHeight: 1.65 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Source link */}
              {recipe.link && (
                <div style={{ padding: "10px 18px", borderTop: `1px solid ${C.border}`, background: C.bg }}>
                  <a href={recipe.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: acc, textDecoration: "none", fontWeight: 600 }}>📎 View original source →</a>
                </div>
              )}
            </div>
          );
        })}

        <p style={{ fontSize: "11px", color: C.textFaint, textAlign: "center" }}>* Nutrition values are estimates.</p>
      </div>
    </div>
  );
}

function TodayPlanner({ allRecipes, onSelect }) {
  const [step, setStep] = useState(1); // 1 = protein, 2 = veg
  const [browsedProtein, setBrowsedProtein] = useState(null);
  const [browsedVeg, setBrowsedVeg] = useState(null);
  const [pickedProtein, setPickedProtein] = useState(null);
  const [pickedVeg, setPickedVeg] = useState(null);
  const [wifeFilter, setWifeFilter] = useState(true);
  const [quickOnly, setQuickOnly] = useState(false);
  const [showMealSummary, setShowMealSummary] = useState(false);

  const enriched = allRecipes.map(enrichRecipe);
  const savory = enriched.filter(r => r.taste === "Savory");

  const proteinGroupsAvailable = Object.entries(PROTEIN_GROUPS).filter(([label, proteins]) =>
    !["🧁 Baking","🍵 Drinks","🥦 Vegetables"].includes(label) && savory.some(r => proteins.includes(r.protein))
  );

  const applyFilters = recs => {
    let out = recs;
    if (wifeFilter) out = out.filter(r => !r.isDeepFried);
    if (quickOnly) out = out.filter(r => r.isQuick);
    return out;
  };

  const browsedProteins = browsedProtein ? PROTEIN_GROUPS[browsedProtein] : [];
  const completeDishes = applyFilters(savory.filter(r => r.isComplete && browsedProteins.includes(r.protein)));
  const proteinDishes  = applyFilters(savory.filter(r => browsedProteins.includes(r.protein) && !r.isComplete && !r.isVegSide));
  const vegSides       = savory.filter(r => r.isVegSide);

  const hasPick = pickedProtein || pickedVeg;

  const clearAll = () => {
    setPickedProtein(null);
    setPickedVeg(null);
    setBrowsedProtein(null);
    setBrowsedVeg(null);
    setStep(1);
    setShowMealSummary(false);
  };

  if (showMealSummary) {
    return (
      <div style={{ position: "fixed", inset: 0, zIndex: 200, overflowY: "auto", background: C.bg }}>
        <MealSummaryPage protein={pickedProtein} veg={pickedVeg} onBack={() => setShowMealSummary(false)} onSelect={onSelect} />
      </div>
    );
  }
  return (
    <div>
      {/* ── Sticky picked section ── */}
      {hasPick && (
        <div style={{ position: "sticky", top: "94px", zIndex: 9, marginBottom: "16px" }}>
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", padding: "12px 14px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.07em" }}>Today's Meal</span>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                {pickedProtein && pickedVeg && (
                  <button onClick={() => setShowMealSummary(true)} title="View full meal plan"
                    style={{ background: C.orange, border: "none", borderRadius: "8px", padding: "5px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: 700, color: "#fff", boxShadow: C.shadow }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                      <polyline points="17 21 17 13 7 13 7 21"/>
                      <polyline points="7 3 7 8 15 8"/>
                    </svg>
                    View recipes
                  </button>
                )}
                <button onClick={clearAll} style={{ background: "none", border: "none", color: C.textFaint, cursor: "pointer", fontSize: "12px", fontWeight: 600 }}>Clear ×</button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: pickedProtein && pickedVeg ? "1fr 1fr" : "1fr", gap: "8px" }}>
              {pickedProtein && (
                <div style={{ background: C.orangeLight, border: `1px solid ${C.orangeBorder}`, borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>🥩 Protein</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: C.text, lineHeight: 1.3, marginBottom: "4px" }}>{pickedProtein.name}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", color: C.textMuted }}>⏱ {pickedProtein.time} · {pickedProtein.nutrition.protein}g protein</span>
                    <button onClick={() => setPickedProtein(null)} style={{ background: "none", border: "none", color: C.textFaint, cursor: "pointer", fontSize: "14px", lineHeight: 1, padding: "0 2px" }}>×</button>
                  </div>
                </div>
              )}
              {pickedVeg && (
                <div style={{ background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>🥦 Vegetable</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: C.text, lineHeight: 1.3, marginBottom: "4px" }}>{pickedVeg.name}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", color: C.textMuted }}>⏱ {pickedVeg.time} · {pickedVeg.nutrition.protein}g protein</span>
                    <button onClick={() => setPickedVeg(null)} style={{ background: "none", border: "none", color: C.textFaint, cursor: "pointer", fontSize: "14px", lineHeight: 1, padding: "0 2px" }}>×</button>
                  </div>
                </div>
              )}
            </div>
            {/* Protein progress bar — counts both protein dish AND veg dish */}
            {(pickedProtein || pickedVeg) && (() => {
              const proteinTotal = ((pickedProtein?.nutrition?.protein || 0) + (pickedVeg?.nutrition?.protein || 0)) * 2;
              const pct = Math.min(100, Math.round((proteinTotal / COMBINED_PROTEIN_GOAL) * 100));
              const ok = pct >= 80;
              return (
                <div style={{ marginTop: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "11px", color: C.textMuted }}>Combined protein (2 servings)</span>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: ok ? C.green : C.orange }}>{proteinTotal}g / {COMBINED_PROTEIN_GOAL}g goal</span>
                  </div>
                  <div style={{ background: C.bg, borderRadius: "4px", height: "6px", overflow: "hidden", border: `1px solid ${C.border}` }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: ok ? C.green : C.orange, borderRadius: "4px", transition: "width 0.3s" }} />
                  </div>
                  {pickedProtein && pickedVeg && (
                    <div style={{ fontSize: "10px", color: C.textFaint, marginTop: "4px" }}>
                      {pickedProtein.nutrition.protein * 2}g from protein dish + {pickedVeg.nutrition.protein * 2}g from veg dish
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ── Filters ── */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "18px" }}>
        <button onClick={() => setWifeFilter(w => !w)} style={{ padding: "6px 13px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, cursor: "pointer", border: `1px solid ${wifeFilter ? "#fed7aa" : C.border}`, background: wifeFilter ? "#fff7ed" : C.surface, color: wifeFilter ? "#c2410c" : C.textMuted, boxShadow: C.shadow }}>
          {wifeFilter ? "👩 Wife-friendly ON" : "👩 Wife-friendly OFF"}
        </button>
        <button onClick={() => setQuickOnly(q => !q)} style={{ padding: "6px 13px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, cursor: "pointer", border: `1px solid ${quickOnly ? "#bfdbfe" : C.border}`, background: quickOnly ? C.blueLight : C.surface, color: quickOnly ? C.blue : C.textMuted, boxShadow: C.shadow }}>
          {quickOnly ? "⚡ ≤35 min ON" : "⚡ ≤35 min OFF"}
        </button>
      </div>

      {/* ── Step tabs ── */}
      <div style={{ display: "flex", gap: "0", marginBottom: "20px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "10px", overflow: "hidden", boxShadow: C.shadow }}>
        {[{ id: 1, label: "Step 1 — Protein" }, { id: 2, label: "Step 2 — Vegetables" }].map(s => (
          <button key={s.id} onClick={() => setStep(s.id)} style={{ flex: 1, padding: "10px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600, background: step === s.id ? C.orange : "transparent", color: step === s.id ? "#fff" : C.textMuted, transition: "all 0.15s" }}>
            {s.label}
          </button>
        ))}
      </div>

      {/* ── Step 1: Protein ── */}
      {step === 1 && (
        <div>
          <div style={{ fontSize: "12px", color: C.textMuted, fontWeight: 600, marginBottom: "12px" }}>
            What protein do you have in the freezer?
          </div>

          {/* Protein group pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            {proteinGroupsAvailable.map(([label]) => {
              const active = browsedProtein === label;
              return (
                <button key={label} onClick={() => setBrowsedProtein(active ? null : label)}
                  style={{ padding: "8px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.12s", border: `1px solid ${active ? C.orange : C.border}`, background: active ? C.orangeLight : C.surface, color: active ? C.orange : C.text, boxShadow: C.shadow }}>
                  {label}
                </button>
              );
            })}
          </div>

          {browsedProtein && (
            <>
              {/* Complete dishes */}
              {completeDishes.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "11px", color: C.green, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>✓ Complete dishes — no veg side needed</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    {completeDishes.map(r => (
                      <div key={r.id} style={{ display: "flex", gap: "8px", alignItems: "stretch" }}>
                        <div style={{ flex: 1 }}><RecipeCard recipe={r} onSelect={onSelect} accentColor={C.green} /></div>
                        <button onClick={() => { setPickedProtein(r); setPickedVeg(null); }}
                          style={{ flexShrink: 0, padding: "0 14px", background: pickedProtein?.id === r.id ? C.green : C.surface, border: `1px solid ${pickedProtein?.id === r.id ? C.green : C.border}`, borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: 700, color: pickedProtein?.id === r.id ? "#fff" : C.green, boxShadow: C.shadow, transition: "all 0.12s" }}>
                          {pickedProtein?.id === r.id ? "✓" : "Pick"}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Protein-only dishes */}
              <div style={{ marginBottom: "8px" }}>
                <div style={{ fontSize: "11px", color: C.orange, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>{browsedProtein} dishes</div>
                {proteinDishes.length === 0
                  ? <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "16px", textAlign: "center", color: C.textMuted, fontSize: "13px" }}>No results — try turning off filters above.</div>
                  : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      {proteinDishes.map((r, i) => (
                        <div key={r.id} style={{ display: "flex", gap: "8px", alignItems: "stretch" }}>
                          <div style={{ flex: 1 }}><RecipeCard recipe={r} onSelect={onSelect} accentColor={ACCENTS[i % ACCENTS.length]} /></div>
                          <button onClick={() => setPickedProtein(pickedProtein?.id === r.id ? null : r)}
                            style={{ flexShrink: 0, padding: "0 14px", background: pickedProtein?.id === r.id ? C.orange : C.surface, border: `1px solid ${pickedProtein?.id === r.id ? C.orange : C.border}`, borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: 700, color: pickedProtein?.id === r.id ? "#fff" : C.orange, boxShadow: C.shadow, transition: "all 0.12s" }}>
                            {pickedProtein?.id === r.id ? "✓" : "Pick"}
                          </button>
                        </div>
                      ))}
                    </div>
                  )
                }
              </div>

              {/* Next step nudge */}
              {pickedProtein && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <button onClick={() => setStep(2)}
                    style={{ padding: "11px 28px", background: C.orange, color: "#fff", border: "none", borderRadius: "20px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: "0 2px 8px rgba(217,119,6,0.3)" }}>
                    Next — pick a vegetable →
                  </button>
                </div>
              )}
            </>
          )}

          {!browsedProtein && (
            <div style={{ textAlign: "center", padding: "40px 20px", color: C.textFaint }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>🧊</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: C.textMuted }}>Tap a protein above to see dishes</div>
            </div>
          )}
        </div>
      )}

      {/* ── Step 2: Vegetables ── */}
      {step === 2 && (
        <div>
          <div style={{ fontSize: "12px", color: C.textMuted, fontWeight: 600, marginBottom: "16px" }}>
            What vegetables do you have?
          </div>

          {(() => {
            const proteinFromStep1 = (pickedProtein?.nutrition?.protein || 0) * 2;
            const gap = Math.max(0, COMBINED_PROTEIN_GOAL - proteinFromStep1);
            const minProteinPerServing = Math.ceil(gap / 2);
            const proteinContext = pickedProtein ? { proteinFromStep1, goal: COMBINED_PROTEIN_GOAL } : null;

            const vegGroups = {};
            vegSides.forEach(r => {
              const key = r.name.toLowerCase().includes("brokoli") || r.name.toLowerCase().includes("broccoli") ? "🥦 Broccoli"
                : r.name.toLowerCase().includes("jamur") || r.name.toLowerCase().includes("mushroom") ? "🍄 Mushroom"
                : r.name.toLowerCase().includes("tahu") || r.name.toLowerCase().includes("tofu") ? "🫘 Tofu"
                : r.name.toLowerCase().includes("tempe") ? "🫘 Tempeh"
                : r.protein === "Tofu & Tempeh" ? "🫘 Tofu & Tempeh"
                : r.name.toLowerCase().includes("eggplant") || r.name.toLowerCase().includes("terong") ? "🍆 Eggplant"
                : r.name.toLowerCase().includes("kailan") || r.name.toLowerCase().includes("bayam") || r.name.toLowerCase().includes("spinach") ? "🥬 Greens"
                : "🥗 Other";
              if (!vegGroups[key]) vegGroups[key] = [];
              vegGroups[key].push(r);
            });

            // Sort: "completes protein" first, then by protein desc
            const displayList = (browsedVeg ? (vegGroups[browsedVeg] || []) : [...vegSides]).sort((a, b) => {
              if (!pickedProtein) return b.nutrition.protein - a.nutrition.protein;
              const aMeets = proteinFromStep1 + (a.nutrition.protein * 2) > COMBINED_PROTEIN_GOAL;
              const bMeets = proteinFromStep1 + (b.nutrition.protein * 2) > COMBINED_PROTEIN_GOAL;
              if (aMeets && !bMeets) return -1;
              if (!aMeets && bMeets) return 1;
              return b.nutrition.protein - a.nutrition.protein;
            });

            return (
              <>
                {/* Group filter pills */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                  <button onClick={() => setBrowsedVeg(null)}
                    style={{ padding: "7px 13px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, cursor: "pointer", border: `1px solid ${!browsedVeg ? C.green : C.border}`, background: !browsedVeg ? C.greenLight : C.surface, color: !browsedVeg ? C.green : C.textMuted, boxShadow: C.shadow }}>
                    All
                  </button>
                  {Object.keys(vegGroups).map(grp => (
                    <button key={grp} onClick={() => setBrowsedVeg(browsedVeg === grp ? null : grp)}
                      style={{ padding: "7px 13px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, cursor: "pointer", border: `1px solid ${browsedVeg === grp ? C.green : C.border}`, background: browsedVeg === grp ? C.greenLight : C.surface, color: browsedVeg === grp ? C.green : C.textMuted, boxShadow: C.shadow }}>
                      {grp}
                    </button>
                  ))}
                </div>

                {/* Single unified veg list with inline protein context */}
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  {displayList.map(r => (
                    <div key={r.id} style={{ display: "flex", gap: "8px", alignItems: "stretch" }}>
                      <div style={{ flex: 1 }}>
                        <RecipeCard
                          recipe={r}
                          onSelect={onSelect}
                          accentColor={C.green}
                          proteinContext={proteinContext}
                        />
                      </div>
                      <button onClick={() => setPickedVeg(pickedVeg?.id === r.id ? null : r)}
                        style={{ flexShrink: 0, padding: "0 14px", background: pickedVeg?.id === r.id ? C.green : C.surface, border: `1px solid ${pickedVeg?.id === r.id ? C.green : C.border}`, borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: 700, color: pickedVeg?.id === r.id ? "#fff" : C.green, boxShadow: C.shadow, transition: "all 0.12s" }}>
                        {pickedVeg?.id === r.id ? "✓" : "Pick"}
                      </button>
                    </div>
                  ))}
                </div>

                {pickedVeg && (
                  <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <button onClick={() => setStep(1)}
                      style={{ padding: "11px 28px", background: C.green, color: "#fff", border: "none", borderRadius: "20px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: "0 2px 8px rgba(22,163,74,0.3)" }}>
                      ✓ Meal planned! Back to step 1
                    </button>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}

// ─── GROCERY HELPERS ───────────────────────────────────────────────────────────

// Keywords that identify pantry staples (seasonings/condiments to stock)
const PANTRY_KEYWORDS = [
  { key: "soy sauce",      match: ["kecap asin","soy sauce","shoyu"], label: "Soy sauce / Kecap asin" },
  { key: "kecap manis",    match: ["kecap manis","sweet soy"], label: "Kecap manis" },
  { key: "oyster sauce",   match: ["saus tiram","oyster sauce"], label: "Saus tiram / Oyster sauce" },
  { key: "sesame oil",     match: ["minyak wijen","sesame oil"], label: "Minyak wijen / Sesame oil" },
  { key: "fish sauce",     match: ["kecap ikan","fish sauce"], label: "Kecap ikan / Fish sauce" },
  { key: "teriyaki sauce", match: ["saus teriyaki","teriyaki sauce"], label: "Saus teriyaki" },
  { key: "chili sauce",    match: ["saus sambal","chili sauce","sambal"], label: "Saus sambal / Chili sauce" },
  { key: "tomato sauce",   match: ["saus tomat","tomato sauce","tomato puree","tomato purée"], label: "Saus tomat / Tomato sauce" },
  { key: "cornstarch",     match: ["maizena","cornstarch","tepung maizena","tepung tapioka","tapioka"], label: "Maizena / Cornstarch" },
  { key: "cooking wine",   match: ["mirin","sake","arak masak","rice wine"], label: "Mirin / Sake / Rice wine" },
  { key: "dashi",          match: ["kaldu bubuk","dashi","chicken stock","beef stock","kaldu ayam","kaldu sapi","kaldu jamur"], label: "Stock powder / Dashi" },
  { key: "miso",           match: ["miso"], label: "Miso paste" },
  { key: "vinegar",        match: ["cuka","vinegar","air asam"], label: "Cuka / Vinegar" },
  { key: "honey",          match: ["madu","honey"], label: "Madu / Honey" },
  { key: "coconut milk",   match: ["santan","coconut milk"], label: "Santan / Coconut milk" },
  { key: "msg",            match: ["msg","penyedap","kaldu bubuk jamur"], label: "MSG / Penyedap rasa" },
  { key: "sugar",          match: ["gula merah","brown sugar","gula palem","palm sugar"], label: "Gula merah / Brown sugar" },
  { key: "baking soda",    match: ["baking soda","soda kue"], label: "Baking soda" },
];

// Main protein keywords (to separate from pantry)
const PROTEIN_KEYWORDS = ["ayam","chicken","sapi","beef","udang","shrimp","cumi","squid","ikan","fish","tempe","tahu","tofu","daging","fillet","filet","paha","dada","sayap","iga","saikoro","ribeye","minced","mince"];
// Pantry base (always in kitchen, no need to list)
const ALWAYS_IN_PANTRY = ["garam","salt","gula pasir","sugar","merica","pepper","lada","bawang putih","garlic","bawang merah","shallot","bawang bombay","onion","jahe","ginger","minyak","oil","mentega","butter","margarin","air","water"];

// Extract protein ingredient lines from a recipe
function extractProteinIngredients(recipe) {
  const nameL = recipe.name.toLowerCase();
  const proteinType = recipe.protein;
  return (recipe.ingredients || []).filter(ing => {
    const i = ing.toLowerCase();
    // Skip if it's clearly a sauce/condiment line
    if (i.includes("saus") || i.includes("sauce") || i.includes("kecap") || i.includes("minyak") || i.includes("bumbu")) return false;
    return PROTEIN_KEYWORDS.some(kw => i.includes(kw));
  });
}

// Extract veg ingredient lines from a veg recipe
function extractVegIngredients(recipe) {
  return (recipe.ingredients || []).filter(ing => {
    const i = ing.toLowerCase();
    if (i.includes("saus") || i.includes("sauce") || i.includes("kecap") || i.includes("minyak") || i.includes("maizena") || i.includes("garam") || i.includes("gula") || i.includes("lada") || i.includes("merica") || i.includes("bawang")) return false;
    return true;
  }).slice(0, 4); // top 4 main veg ingredients
}

// Scan all planned recipes for needed pantry items
function extractPantryNeeds(allPlannedRecipes) {
  const allIngText = allPlannedRecipes.flatMap(r => r.ingredients || []).join(" ").toLowerCase();
  return PANTRY_KEYWORDS.filter(p => p.match.some(m => allIngText.includes(m))).map(p => p.label);
}

// ─── PICKER ACCORDION ─────────────────────────────────────────────────────────
function PickerAccordion({ protein, recs, onPick }) {
  const [open, setOpen] = useState(true);
  const emoji = {
    "Chicken": "🐔", "Beef": "🥩", "Minced Beef": "🥩", "Shrimp": "🦐",
    "Squid": "🦑", "Fish": "🐟", "Salmon": "🐟", "Tofu & Tempeh": "🫘",
    "Vegetable": "🥦", "Vegetarian": "🥦",
    "Flour / Butter": "🧁", "Flour / Dough": "🧁", "Fruit / Oats": "🍎",
  }[protein] || "🍴";

  return (
    <div style={{ marginBottom: "8px" }}>
      {/* Accordion header */}
      <button onClick={() => setOpen(o => !o)} style={{
        width: "100%", background: open ? C.orangeLight : C.bg,
        border: `1px solid ${open ? C.orangeBorder : C.border}`,
        borderRadius: open ? "10px 10px 0 0" : "10px",
        padding: "9px 14px", cursor: "pointer",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        transition: "all 0.12s",
      }}>
        <span style={{ fontSize: "13px", fontWeight: 700, color: open ? C.orange : C.text }}>
          {emoji} {protein}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "11px", color: C.textMuted, fontWeight: 500 }}>{recs.length} dish{recs.length !== 1 ? "es" : ""}</span>
          <span style={{ fontSize: "12px", color: C.textMuted }}>{open ? "▲" : "▼"}</span>
        </span>
      </button>

      {/* Accordion body */}
      {open && (
        <div style={{ border: `1px solid ${C.orangeBorder}`, borderTop: "none", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
          {recs.map((r, i) => (
            <div key={r.id} onClick={() => onPick(r)}
              style={{
                background: C.surface, padding: "10px 14px", cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px",
                borderTop: i > 0 ? `1px solid ${C.border}` : "none",
                transition: "background 0.1s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.surfaceHover}
              onMouseLeave={e => e.currentTarget.style.background = C.surface}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: C.text, marginBottom: "3px" }}>{r.name}</div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", color: C.textMuted }}>⏱ {r.time}</span>
                  <span style={{ color: C.border, fontSize: "10px" }}>·</span>
                  <span style={{ fontSize: "11px", color: C.textMuted }}>{r.nutrition.protein}g protein</span>
                  <span style={{ color: C.border, fontSize: "10px" }}>·</span>
                  <span style={{ fontSize: "11px", color: C.textMuted }}>{r.cuisine}</span>
                </div>
              </div>
              <span style={{ color: C.green, fontSize: "18px", fontWeight: 700, flexShrink: 0 }}>+</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── WEEKLY PLANNER ────────────────────────────────────────────────────────────
function WeeklyPlanner({ allRecipes, onSelect }) {
  const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const empty = () => ({ protein: null, veg: null, complete: null });
  const [plan, setPlan] = useState(() => Object.fromEntries(DAYS.map(d => [d, empty()])));
  const [pickingFor, setPickingFor] = useState(null);
  const [search, setSearch] = useState("");
  const [pickerFilter, setPickerFilter] = useState(null); // protein/cuisine/cuisine group
  const [pickerSort, setPickerSort] = useState("default"); // default | time | protein
  const [groceryOpen, setGroceryOpen] = useState(true);

  const enriched = allRecipes.map(enrichRecipe).filter(r => r.taste === "Savory");

  const getOptions = () => {
    if (!pickingFor) return [];
    let pool = search.trim() ? enriched.filter(r => r.name.toLowerCase().includes(search.toLowerCase())) : enriched;
    if (pickingFor.slot === "veg") return pool.filter(r => r.isVegSide);
    if (pickingFor.slot === "complete") return pool.filter(r => r.isComplete);
    return pool.filter(r => !r.isVegSide && !r.isComplete);
  };

  const pick = r => {
    const { day, slot } = pickingFor;
    setPlan(prev => ({ ...prev, [day]: { ...prev[day], [slot]: r } }));
    setPickingFor(null);
    setSearch("");
    setPickerFilter(null);
    setPickerSort("default");
  };

  const totalProtein = day => {
    const d = plan[day];
    return ((d.protein?.nutrition?.protein || 0) + (d.complete?.nutrition?.protein || 0)) * 2;
  };

  // Compute grocery list from plan
  const allPlanned = Object.values(plan).flatMap(d => [d.protein, d.veg, d.complete].filter(Boolean));
  const hasAnyPlan = allPlanned.length > 0;

  // Proteins: group by protein type, collect ingredient lines + recipe names
  const proteinRecipes = Object.values(plan).flatMap(d => [d.protein, d.complete].filter(Boolean));
  const proteinMap = {}; // { "Chicken": [{ recipe, ingLines }] }
  proteinRecipes.forEach(r => {
    const key = r.protein;
    if (!proteinMap[key]) proteinMap[key] = [];
    const lines = extractProteinIngredients(r);
    proteinMap[key].push({ name: r.name, lines });
  });

  // Vegetables: from veg side dishes + veg in complete dishes
  const vegRecipes = Object.values(plan).flatMap(d => [d.veg].filter(Boolean));
  const vegItems = []; // { recipeName, lines }
  vegRecipes.forEach(r => {
    const lines = extractVegIngredients(r);
    if (lines.length) vegItems.push({ name: r.name, lines });
  });

  // Pantry
  const pantryNeeds = extractPantryNeeds(allPlanned);

  // ── Smart shopping list: combine quantities, exclude pantry staples ──
  const buildShoppingList = () => {
    const allLines = allPlanned.flatMap(r => r.ingredients || []);

    // All words to exclude (pantry staples + condiments)
    const EXCLUDE_KEYWORDS = [
      ...ALWAYS_IN_PANTRY,
      ...PANTRY_KEYWORDS.flatMap(p => p.match),
      "secukupnya","opsional","optional","to taste","sesuai selera","sdt","sdm","ml","gr","kg","cc",
    ];

    // Parse a quantity + unit + ingredient name from a line
    // e.g. "3 buah cabe merah keriting" → { qty: 3, unit: "buah", name: "cabe merah keriting" }
    const parse = (line) => {
      const l = line.trim();
      // Match leading number (int or fraction like 1/2) + optional unit word
      const m = l.match(/^([\d\/\.½¼¾]+)\s*([a-zA-Z]{1,5}\s)?(.+)/);
      if (m) {
        const qty = eval(m[1].replace("½","0.5").replace("¼","0.25").replace("¾","0.75")) || 1;
        const unit = (m[2] || "").trim().toLowerCase();
        const name = m[3].trim().toLowerCase().replace(/\s*\(.*?\)/g,"").replace(/,.*$/,"").trim();
        return { qty, unit, name, original: l };
      }
      return { qty: 1, unit: "", name: l.toLowerCase().replace(/\s*\(.*?\)/g,"").replace(/,.*$/,"").trim(), original: l };
    };

    // Check if a line should be excluded (pantry/condiment/staple)
    const shouldExclude = (name) => {
      const n = name.toLowerCase();
      return EXCLUDE_KEYWORDS.some(kw => n.includes(kw.toLowerCase()));
    };

    // Group by normalized ingredient name, summing quantities
    const grouped = {};
    allLines.forEach(line => {
      if (!line || line.trim().length < 2) return;
      const parsed = parse(line);
      if (shouldExclude(parsed.name)) return;
      const key = parsed.name;
      if (!grouped[key]) {
        grouped[key] = { qty: 0, unit: parsed.unit, name: parsed.name, originals: [] };
      }
      grouped[key].qty += parsed.qty;
      grouped[key].originals.push(parsed.original);
    });

    // Format back to readable strings
    return Object.values(grouped).sort((a,b) => a.name.localeCompare(b.name)).map(g => {
      const qtyStr = g.qty % 1 === 0 ? String(g.qty) : g.qty.toFixed(1);
      const unitStr = g.unit ? ` ${g.unit}` : "";
      // Capitalize first letter of name
      const nameStr = g.name.charAt(0).toUpperCase() + g.name.slice(1);
      return `${qtyStr}${unitStr} ${nameStr}`.trim();
    });
  };

  // ── Download: open full plan in new tab ──
  const handleDownload = () => {
    const dateStr = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    const uniqueRecipes = [...new Map(allPlanned.map(r => [r.id, r])).values()];
    const shoppingItems = buildShoppingList();

    const planRows = DAYS.map(day => {
      const d = plan[day];
      const prot = totalProtein(day);
      const protColor = prot >= COMBINED_PROTEIN_GOAL ? "#16a34a" : prot > 0 ? "#d97706" : "#a8a29e";
      if (!d.protein && !d.veg && !d.complete)
        return `<tr><td class="day">${day}</td><td colspan="2" style="color:#a8a29e;font-style:italic">—</td><td style="color:#a8a29e;text-align:right">—</td></tr>`;
      return `<tr>
        <td class="day">${day}</td>
        <td>${d.complete ? `<strong>${d.complete.name}</strong> <span class="tag green">complete</span>` : d.protein ? `<strong>${d.protein.name}</strong>` : "—"}</td>
        <td>${d.veg ? `<strong>${d.veg.name}</strong>` : "—"}</td>
        <td style="text-align:right;font-weight:700;color:${protColor}">${prot > 0 ? `${prot}g` : "—"}</td>
      </tr>`;
    }).join("");

    const shoppingHtml = shoppingItems.length
      ? `<ul class="shop-list">${shoppingItems.map(l => `<li>&#9744; ${l}</li>`).join("")}</ul>`
      : "<p style='color:#a8a29e;font-style:italic'>No items.</p>";

    const pantryHtml = pantryNeeds.map(p => `<span class="pantry-pill">${p}</span>`).join("");

    const recipeHtml = uniqueRecipes.map(r => {
      const er = enrichRecipe(r);
      const warns = [er.isDeepFried ? "⚠️ Deep-fried" : null, er.hasGluten ? "🌾 Gluten" : null].filter(Boolean).join(" · ");
      return `<div class="recipe">
        <h3>${r.name}</h3>
        <div class="rmeta">${r.protein} · ${r.method} · ⏱ ${r.time} · ${r.nutrition.protein}g protein/srv${warns ? ` · <span style="color:#c2410c">${warns}</span>` : ""}</div>
        <div class="two-col">
          <div><h4>Ingredients</h4><ul class="ing">${(r.ingredients||[]).map(i=>`<li>${i}</li>`).join("")}</ul></div>
          <div><h4>Directions</h4><ol class="steps">${(r.steps||[]).map((s,i)=>`<li><span class="snum">${i+1}</span>${s}</li>`).join("")}</ol></div>
        </div>
        ${r.link ? `<div style="margin-top:8px;font-size:11px"><a href="${r.link}" style="color:#d97706">📎 Source →</a></div>` : ""}
      </div>`;
    }).join("");

    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Our Kitchen — Weekly Plan ${dateStr}</title><style>
*{box-sizing:border-box;margin:0;padding:0}body{font-family:Georgia,serif;color:#1c1917;background:#fff;padding:40px;max-width:860px;margin:0 auto;font-size:13px;line-height:1.6}
h1{font-size:24px;font-weight:700;margin-bottom:3px}.sub{font-size:12px;color:#78716c;margin-bottom:28px}
h2{font-size:14px;font-weight:700;color:#d97706;text-transform:uppercase;letter-spacing:.08em;margin:28px 0 12px;padding-bottom:6px;border-bottom:2px solid #fde68a}
h3{font-size:15px;font-weight:700;margin-bottom:4px}h4{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#78716c;margin-bottom:8px}
table{width:100%;border-collapse:collapse}th{background:#f8f7f4;font-size:11px;font-weight:700;text-transform:uppercase;color:#78716c;padding:7px 10px;text-align:left;border-bottom:2px solid #e5e0d8}
td{padding:8px 10px;border-bottom:1px solid #e5e0d8;vertical-align:top}.day{font-weight:700;width:56px}
.tag{font-size:10px;padding:1px 6px;border-radius:10px;font-weight:600}.green{background:#dcfce7;color:#16a34a;border:1px solid #bbf7d0}
.shop-list{list-style:none;padding:0;columns:2;column-gap:32px}.shop-list li{font-size:13px;padding:5px 0;border-bottom:1px solid #f0ece8;break-inside:avoid}
.pantry-pills{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}.pantry-pill{font-size:12px;color:#7c3aed;background:#f3e8ff;padding:3px 10px;border-radius:20px;border:1px solid #ddd6fe}
.recipe{margin-bottom:28px;padding-bottom:24px;border-bottom:1px solid #e5e0d8;page-break-inside:avoid}.rmeta{font-size:12px;color:#78716c;margin-bottom:12px}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:20px}.ing{padding-left:16px}.ing li{font-size:12px;padding:2px 0}
.steps{list-style:none;padding:0}.steps li{display:flex;gap:8px;font-size:12px;padding:4px 0;border-bottom:1px solid #f0ece8;align-items:flex-start}
.snum{background:#d97706;color:#fff;border-radius:50%;width:17px;height:17px;min-width:17px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;margin-top:2px}
.print-btn{display:block;margin:32px auto 0;padding:10px 28px;background:#d97706;color:#fff;border:none;border-radius:20px;font-size:13px;font-weight:700;cursor:pointer}
@media print{.print-btn{display:none}.recipe{page-break-inside:avoid}}
</style></head><body>
<h1>Our Kitchen 🍳</h1><div class="sub">Weekly Plan · ${dateStr} · ${uniqueRecipes.length} recipe${uniqueRecipes.length!==1?"s":""} planned</div>
<h2>📅 Meal Plan</h2>
<table><thead><tr><th>Day</th><th>Protein / Complete dish</th><th>Vegetable side</th><th style="text-align:right">Protein (2 srv)</th></tr></thead><tbody>${planRows}</tbody></table>
<h2>🛒 Shopping List</h2>
<p style="font-size:11px;color:#78716c;margin-bottom:12px">Quantities combined · pantry staples excluded · ${shoppingItems.length} items</p>
${shoppingHtml}
${pantryHtml?`<div style="margin-top:20px"><h4 style="color:#7c3aed;margin-bottom:8px">🫙 Also check pantry for:</h4><div class="pantry-pills">${pantryHtml}</div></div>`:""}
<h2>📖 Recipes</h2>${recipeHtml||"<p style='color:#a8a29e;font-style:italic'>No recipes planned.</p>"}
<button class="print-btn" onclick="window.print()">🖨 Print / Save as PDF</button>
</body></html>`;

    try {
      const w = window.open("about:blank", "_blank");
      if (w) {
        w.document.open();
        w.document.write(html);
        w.document.close();
      } else {
        // Fallback: data URI
        const encoded = "data:text/html;charset=utf-8," + encodeURIComponent(html);
        const a = document.createElement("a");
        a.href = encoded;
        a.download = `our-kitchen-${new Date().toISOString().slice(0,10)}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch(e) {
      console.error("Download error:", e);
    }
  };

  return (
    <div>
      {/* ── Download button ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "14px" }}>
        <button
          onClick={handleDownload}
          disabled={!hasAnyPlan}
          style={{
            display: "flex", alignItems: "center", gap: "7px",
            padding: "9px 18px", borderRadius: "20px", fontSize: "13px", fontWeight: 700,
            cursor: hasAnyPlan ? "pointer" : "not-allowed",
            border: `1px solid ${hasAnyPlan ? C.orange : C.border}`,
            background: hasAnyPlan ? C.orangeLight : C.bg,
            color: hasAnyPlan ? C.orange : C.textFaint,
            boxShadow: hasAnyPlan ? C.shadow : "none",
            transition: "all 0.15s",
          }}>
          ⬇ Download weekly plan
        </button>
      </div>

      {/* ── Day grid ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        {DAYS.map(day => {
          const d = plan[day];
          const prot = totalProtein(day);
          const protOk = prot >= COMBINED_PROTEIN_GOAL * 0.8;
          const hasSomething = d.protein || d.veg || d.complete;
          return (
            <div key={day} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "12px", padding: "12px 14px", boxShadow: C.shadow }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 700, color: C.text, fontSize: "14px" }}>{day}</span>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  {prot > 0 && (
                    <span style={{ fontSize: "11px", fontWeight: 600, color: protOk ? C.green : C.orange, background: protOk ? C.greenLight : C.orangeLight, padding: "2px 8px", borderRadius: "10px" }}>
                      {prot}g {protOk ? "✓" : "↑ low protein"}
                    </span>
                  )}
                  {hasSomething && (
                    <button onClick={() => setPlan(p => ({ ...p, [day]: empty() }))}
                      style={{ background: "none", border: "none", color: C.textFaint, cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: "0 4px" }}>×</button>
                  )}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
                {[
                  { slot: "complete", label: "✓ Complete", filled: d.complete, color: C.green, lightColor: C.greenLight, borderColor: C.greenBorder },
                  { slot: "protein",  label: "🥩 Protein",  filled: d.protein,  color: C.orange, lightColor: C.orangeLight, borderColor: C.orangeBorder },
                  { slot: "veg",      label: "🥦 Veg",       filled: d.veg,      color: C.green, lightColor: C.greenLight, borderColor: C.greenBorder },
                ].map(({ slot, label, filled, color, lightColor, borderColor }) => (
                  <div key={slot} onClick={() => setPickingFor({ day, slot })}
                    style={{ minHeight: "56px", background: filled ? lightColor : C.bg, border: `1px dashed ${filled ? borderColor : C.borderStrong}`, borderRadius: "8px", padding: "8px", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {filled ? (
                      <>
                        <div style={{ fontSize: "10px", color, fontWeight: 600, marginBottom: "2px" }}>{label}</div>
                        <div style={{ fontSize: "11px", color: C.text, fontWeight: 600, lineHeight: 1.3 }}>{filled.name}</div>
                        {filled.nutrition?.protein && <div style={{ fontSize: "10px", color: C.textMuted, marginTop: "2px" }}>{filled.nutrition.protein}g protein</div>}
                      </>
                    ) : (
                      <div style={{ fontSize: "11px", color: C.textFaint, textAlign: "center" }}>+ {label}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Grocery List (below day grid) ── */}
      {hasAnyPlan && (
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "14px", marginBottom: "16px", boxShadow: C.shadow, overflow: "hidden" }}>
          <button onClick={() => setGroceryOpen(o => !o)}
            style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: C.text }}>🛒 Shopping List</span>
            <span style={{ fontSize: "12px", color: C.textMuted }}>{groceryOpen ? "▲ hide" : "▼ show"}</span>
          </button>

          {groceryOpen && (() => {
            const shoppingItems = buildShoppingList();
            return (
              <div style={{ borderTop: `1px solid ${C.border}`, padding: "14px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: C.textMuted, marginBottom: "10px" }}>
                    Combined from all planned recipes · pantry staples excluded · <strong>{shoppingItems.length} items</strong>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {shoppingItems.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: C.text, padding: "6px 0", borderBottom: i < shoppingItems.length - 1 ? `1px solid ${C.border}` : "none" }}>
                        <span style={{ color: C.orange, flexShrink: 0, fontSize: "12px", marginTop: "1px" }}>☐</span>
                        {item}
                      </div>
                    ))}
                    {shoppingItems.length === 0 && (
                      <div style={{ fontSize: "13px", color: C.textFaint, fontStyle: "italic" }}>No items to show.</div>
                    )}
                  </div>
                </div>
                {pantryNeeds.length > 0 && (
                  <>
                    <div style={{ height: "1px", background: C.border }} />
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>🫙 Check pantry first</div>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {pantryNeeds.map(p => (
                          <span key={p} style={{ fontSize: "12px", color: "#7c3aed", background: "#f3e8ff", padding: "4px 10px", borderRadius: "20px", border: "1px solid #ddd6fe" }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* ── Bottom sheet picker ── */}
      {pickingFor && (() => {
        const base = (() => {
          let pool = enriched;
          if (search.trim()) pool = pool.filter(r => r.name.toLowerCase().includes(search.toLowerCase()) || r.cuisine.toLowerCase().includes(search.toLowerCase()));
          if (pickingFor.slot === "veg") pool = pool.filter(r => r.isVegSide);
          else if (pickingFor.slot === "complete") pool = pool.filter(r => r.isComplete);
          else pool = pool.filter(r => !r.isVegSide && !r.isComplete);
          return pool;
        })();

        // Build filter pills from what's in the pool
        const proteinCounts = {};
        const cuisineCounts = {};
        base.forEach(r => {
          proteinCounts[r.protein] = (proteinCounts[r.protein] || 0) + 1;
          cuisineCounts[r.cuisine] = (cuisineCounts[r.cuisine] || 0) + 1;
        });

        // Time buckets
        const timeBuckets = { "⚡ ≤20 min": r => r.cookMins <= 20, "🕐 21–40 min": r => r.cookMins > 20 && r.cookMins <= 40, "🕑 40+ min": r => r.cookMins > 40 };

        // Apply active filter
        let filtered = [...base];
        if (pickerFilter) {
          if (pickerFilter.type === "protein") filtered = filtered.filter(r => r.protein === pickerFilter.value);
          if (pickerFilter.type === "cuisine") filtered = filtered.filter(r => r.cuisine === pickerFilter.value);
          if (pickerFilter.type === "time") filtered = filtered.filter(timeBuckets[pickerFilter.value]);
        }

        // Apply sort
        if (pickerSort === "time") filtered.sort((a, b) => a.cookMins - b.cookMins);
        else if (pickerSort === "protein") filtered.sort((a, b) => b.nutrition.protein - a.nutrition.protein);

        const PILL = (label, active, onClick) => (
          <button key={label} onClick={onClick} style={{ padding: "5px 11px", borderRadius: "20px", fontSize: "11px", fontWeight: 600, cursor: "pointer", border: `1px solid ${active ? C.orange : C.border}`, background: active ? C.orangeLight : C.bg, color: active ? C.orange : C.textMuted, flexShrink: 0 }}>
            {label}
          </button>
        );

        const dismiss = () => { setPickingFor(null); setSearch(""); setPickerFilter(null); setPickerSort("default"); };

        return (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}
            onClick={dismiss}>
            <div style={{ background: C.surface, borderRadius: "20px 20px 0 0", width: "100%", maxWidth: "640px", maxHeight: "85vh", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 -8px 32px rgba(0,0,0,0.15)" }}
              onClick={e => e.stopPropagation()}>

              {/* Header */}
              <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
                <div style={{ width: "36px", height: "4px", background: C.border, borderRadius: "2px", margin: "0 auto 12px" }} />
                <div style={{ fontSize: "14px", fontWeight: 700, color: C.text, marginBottom: "10px" }}>
                  {pickingFor.slot === "veg" ? "🥦 Pick a vegetable side" : pickingFor.slot === "complete" ? "✓ Pick a complete dish" : "🥩 Pick a protein dish"} — {pickingFor.day}
                </div>
                <input value={search} onChange={e => setSearch(e.target.value)} autoFocus placeholder="Search…"
                  style={{ width: "100%", boxSizing: "border-box", background: C.bg, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "8px 12px", color: C.text, fontSize: "13px", outline: "none", marginBottom: "10px" }} />

                {/* Filter + Sort pills */}
                <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "4px" }}>
                  {/* Sort pills */}
                  {PILL("⚡ Quickest", pickerSort === "time", () => setPickerSort(s => s === "time" ? "default" : "time"))}
                  {PILL("💪 Most protein", pickerSort === "protein", () => setPickerSort(s => s === "protein" ? "default" : "protein"))}

                  {/* Divider dot */}
                  <span style={{ color: C.border, alignSelf: "center", flexShrink: 0 }}>·</span>

                  {/* Time bucket filters */}
                  {Object.keys(timeBuckets).map(label => {
                    const count = base.filter(timeBuckets[label]).length;
                    if (!count) return null;
                    const active = pickerFilter?.type === "time" && pickerFilter.value === label;
                    return PILL(`${label} (${count})`, active, () => setPickerFilter(active ? null : { type: "time", value: label }));
                  })}

                  {/* Divider dot */}
                  <span style={{ color: C.border, alignSelf: "center", flexShrink: 0 }}>·</span>

                  {/* Protein group filters (only for protein slot) */}
                  {pickingFor.slot !== "veg" && Object.entries(proteinCounts).sort((a,b) => b[1]-a[1]).map(([p, count]) => {
                    const active = pickerFilter?.type === "protein" && pickerFilter.value === p;
                    return PILL(`${p} (${count})`, active, () => setPickerFilter(active ? null : { type: "protein", value: p }));
                  })}

                  {/* Cuisine filters */}
                  {Object.entries(cuisineCounts).filter(([,c]) => c >= 2).sort((a,b) => b[1]-a[1]).map(([c, count]) => {
                    const active = pickerFilter?.type === "cuisine" && pickerFilter.value === c;
                    return PILL(`${c} (${count})`, active, () => setPickerFilter(active ? null : { type: "cuisine", value: c }));
                  })}
                </div>
              </div>

              {/* Recipe list — accordion by main ingredient */}
              <div style={{ overflowY: "auto", padding: "8px 14px 28px" }}>
                <div style={{ fontSize: "11px", color: C.textFaint, padding: "4px 2px 8px" }}>{filtered.length} recipe{filtered.length !== 1 ? "s" : ""}</div>
                {filtered.length === 0 && <p style={{ color: C.textMuted, textAlign: "center", marginTop: "24px", fontSize: "13px" }}>No matches — try clearing a filter above.</p>}
                {(() => {
                  // Group by protein/main ingredient
                  const groups = {};
                  filtered.forEach(r => {
                    if (!groups[r.protein]) groups[r.protein] = [];
                    groups[r.protein].push(r);
                  });
                  return Object.entries(groups).map(([protein, recs]) => (
                    <PickerAccordion key={protein} protein={protein} recs={recs} onPick={pick} />
                  ));
                })()}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ─── BROWSE VIEW ───────────────────────────────────────────────────────────────
function BrowseView({ allRecipes, onSelect, customIds = [], onDelete }) {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState(null);

  const enriched = allRecipes.map(enrichRecipe);
  const filtered = search.trim()
    ? (() => {
        // Split query into individual words — all must match somewhere in the recipe
        const words = search.trim().toLowerCase().split(/\s+/);
        return enriched.filter(r => {
          const haystack = [
            r.name,
            ...r.tags,
            r.cuisine,
            r.method,
            r.protein,
          ].join(" ").toLowerCase();
          return words.every(w => haystack.includes(w));
        });
      })()
    : enriched;

  const groups = Object.entries(PROTEIN_GROUPS).map(([label, proteins], i) => ({
    label, accent: ACCENTS[i % ACCENTS.length],
    recs: filtered.filter(r => proteins.includes(r.protein)),
  })).filter(g => g.recs.length > 0);

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search recipes, methods, tags…"
        style={{ width: "100%", boxSizing: "border-box", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "10px 14px", color: C.text, fontSize: "13px", outline: "none", marginBottom: "14px", boxShadow: C.shadow }} />

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
        <button onClick={() => setActiveGroup(null)}
          style={{ padding: "5px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, cursor: "pointer", border: `1px solid ${!activeGroup ? C.orange : C.border}`, background: !activeGroup ? C.orangeLight : C.surface, color: !activeGroup ? C.orange : C.textMuted }}>
          All ({filtered.length})
        </button>
        {customIds.length > 0 && (
          <button onClick={() => setActiveGroup(activeGroup === "__custom__" ? null : "__custom__")}
            style={{ padding: "5px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, cursor: "pointer", border: `1px solid ${activeGroup === "__custom__" ? C.green : C.border}`, background: activeGroup === "__custom__" ? C.greenLight : C.surface, color: activeGroup === "__custom__" ? C.green : C.textMuted }}>
            ✨ Added by you ({customIds.length})
          </button>
        )}
        {groups.map(g => (
          <button key={g.label} onClick={() => setActiveGroup(activeGroup === g.label ? null : g.label)}
            style={{ padding: "5px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, cursor: "pointer", border: `1px solid ${activeGroup === g.label ? g.accent : C.border}`, background: activeGroup === g.label ? `${g.accent}18` : C.surface, color: activeGroup === g.label ? g.accent : C.textMuted }}>
            {g.label} ({g.recs.length})
          </button>
        ))}
      </div>

      {/* "Added by you" special group */}
      {activeGroup === "__custom__" && (
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 700, color: C.green, marginBottom: "10px", paddingBottom: "6px", borderBottom: `2px solid ${C.greenBorder}` }}>
            ✨ Added by you <span style={{ fontSize: "12px", color: C.textFaint, fontWeight: 400, fontFamily: "sans-serif" }}>({customIds.length})</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            {filtered.filter(r => customIds.includes(r.id)).map(r => (
              <div key={r.id} style={{ display: "flex", gap: "8px", alignItems: "stretch" }}>
                <div style={{ flex: 1 }}><RecipeCard recipe={r} onSelect={onSelect} accentColor={C.green} /></div>
                <button onClick={() => onDelete(r.id)}
                  title="Remove recipe"
                  style={{ flexShrink: 0, padding: "0 12px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "10px", cursor: "pointer", color: C.textFaint, fontSize: "16px", boxShadow: C.shadow }}>
                  🗑
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeGroup !== "__custom__" && groups.filter(g => !activeGroup || g.label === activeGroup).map(g => (
        <div key={g.label} style={{ marginBottom: "24px" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 700, color: g.accent, marginBottom: "10px", paddingBottom: "6px", borderBottom: `2px solid ${g.accent}30` }}>
            {g.label} <span style={{ fontSize: "12px", color: C.textFaint, fontWeight: 400, fontFamily: "sans-serif" }}>({g.recs.length})</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            {g.recs.map(r => (
              <div key={r.id} style={{ display: "flex", gap: "8px", alignItems: "stretch" }}>
                <div style={{ flex: 1 }}><RecipeCard recipe={r} onSelect={onSelect} accentColor={g.accent} /></div>
                {customIds.includes(r.id) && (
                  <button onClick={() => onDelete(r.id)}
                    title="Remove recipe"
                    style={{ flexShrink: 0, padding: "0 12px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "10px", cursor: "pointer", color: C.textFaint, fontSize: "16px", boxShadow: C.shadow }}>
                    🗑
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── ADD RECIPE MODAL ──────────────────────────────────────────────────────────
function AddRecipeModal({ onClose, onAdd }) {
  const [mode, setMode] = useState("text"); // "text" | "instagram"
  const [text, setText] = useState("");
  const [igUrl, setIgUrl] = useState("");
  const [status, setStatus] = useState("idle"); // idle | fetching | parsing | done | error
  const [parsed, setParsed] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const PARSE_PROMPT = (recipeText) => `Parse the following recipe text into a JSON object. Return ONLY valid JSON, no markdown, no explanation.

The JSON must have these fields:
- name: string
- protein: one of ["Chicken","Beef","Minced Beef","Shrimp","Squid","Fish","Salmon","Tofu & Tempeh","Vegetable","Vegetarian","Flour / Butter","Flour / Dough","Fruit / Oats","Fruit / Flour","Soy / Dashi","Herbal"]
- taste: one of ["Savory","Baking","Drink"]
- method: one of ["Pan-fry / Sauté","Stir-fry","Baking","Hot Pot","Simmering","Steaming","Rice Cooker / Steaming","Deep-fry","Boiling / Soup","Roasting","Air Fryer","Cold Brew / No-Cook","No-Cook / Freeze","Stovetop"]
- cuisine: string (e.g. "Indonesian", "Japanese", "Korean", "Western")
- time: string (e.g. "30 min", "~45 min")
- servings: number
- ingredients: array of strings
- steps: array of strings
- tags: array of 2-4 short lowercase tag strings
- nutrition: { calories: number, protein: number, carbs: number, fat: number, fiber: number } — estimate per serving

Recipe text:
${recipeText}`;

  const callClaude = async (prompt, tools) => {
    const body = { model: "claude-sonnet-4-20250514", max_tokens: 1500, messages: [{ role: "user", content: prompt }] };
    if (tools) body.tools = tools;
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
    });
    return res.json();
  };

  const extractAndParse = async (recipeText) => {
    setStatus("parsing");
    const data = await callClaude(PARSE_PROMPT(recipeText));
    const raw = data.content?.find(b => b.type === "text")?.text || "";
    const clean = raw.replace(/```json|```/g, "").trim();
    const obj = JSON.parse(clean);
    obj.id = Date.now();
    setParsed(obj);
    setStatus("done");
  };

  const handleParseText = async () => {
    if (!text.trim()) return;
    setStatus("parsing"); setParsed(null); setErrorMsg("");
    try { await extractAndParse(text); }
    catch(e) { setStatus("error"); setErrorMsg("Couldn't parse the recipe. Try including ingredients and steps."); }
  };

  const handleFetchInstagram = async () => {
    if (!igUrl.trim()) return;
    setStatus("fetching"); setParsed(null); setErrorMsg("");
    try {
      // Use Claude with web_search tool to fetch the Instagram page and extract caption
      const prompt = `Fetch this Instagram post URL and extract the recipe from the caption or post description. Return the full recipe text including all ingredients and steps you find.

URL: ${igUrl}

If you can access the page, return just the raw caption/recipe text. If you cannot access it, say "CANNOT_ACCESS".`;

      const data = await callClaude(prompt, [{ type: "web_search_20250305", name: "web_search" }]);

      // Find the text response from Claude
      const textBlock = data.content?.find(b => b.type === "text")?.text || "";

      if (!textBlock || textBlock.includes("CANNOT_ACCESS") || textBlock.length < 50) {
        throw new Error("could_not_fetch");
      }

      await extractAndParse(textBlock);
    } catch(e) {
      setStatus("error");
      if (e.message === "could_not_fetch") {
        setErrorMsg("Couldn't fetch the Instagram post — it may be private or require login. Try copying the caption text and using the 'Paste text' tab instead.");
      } else {
        setErrorMsg("Something went wrong. Try pasting the recipe text directly.");
      }
    }
  };

  const handleAdd = () => { if (parsed) { onAdd(parsed); onClose(); } };

  const canSubmit = mode === "text" ? text.trim().length > 0 : igUrl.trim().length > 0;
  const isLoading = status === "fetching" || status === "parsing";
  const loadingLabel = status === "fetching" ? "⏳ Fetching Instagram post…" : "⏳ Parsing with Claude…";

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }}
      onClick={onClose}>
      <div style={{ background: C.surface, borderRadius: "20px 20px 0 0", width: "100%", maxWidth: "640px", maxHeight: "92vh", display: "flex", flexDirection: "column", boxShadow: "0 -8px 32px rgba(0,0,0,0.15)" }}
        onClick={e => e.stopPropagation()}>

        {/* Handle + header */}
        <div style={{ padding: "14px 20px 12px", borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
          <div style={{ width: "36px", height: "4px", background: C.border, borderRadius: "2px", margin: "0 auto 14px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: C.text }}>+ Add a new recipe</div>
              <div style={{ fontSize: "12px", color: C.textMuted, marginTop: "2px" }}>Claude will parse it automatically</div>
            </div>
            <button onClick={onClose} style={{ background: "none", border: "none", color: C.textMuted, fontSize: "20px", cursor: "pointer", lineHeight: 1, padding: "0 4px" }}>×</button>
          </div>

          {/* Mode toggle */}
          <div style={{ display: "flex", background: C.bg, borderRadius: "10px", padding: "3px", border: `1px solid ${C.border}` }}>
            {[{ id: "text", label: "📋 Paste text" }, { id: "instagram", label: "📸 Instagram link" }].map(m => (
              <button key={m.id} onClick={() => { setMode(m.id); setStatus("idle"); setParsed(null); setErrorMsg(""); }}
                style={{ flex: 1, padding: "7px", borderRadius: "8px", border: "none", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.12s", background: mode === m.id ? C.surface : "transparent", color: mode === m.id ? C.text : C.textMuted, boxShadow: mode === m.id ? C.shadow : "none" }}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: "auto", padding: "16px 20px 28px", display: "flex", flexDirection: "column", gap: "14px" }}>

          {/* Input area */}
          {mode === "text" ? (
            <div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, marginBottom: "6px" }}>Paste recipe text</div>
              <textarea value={text} onChange={e => { setText(e.target.value); setStatus("idle"); setParsed(null); }}
                placeholder={"Paste a recipe here — from Instagram captions, websites, WhatsApp, anywhere.\n\nInclude the recipe name, ingredients, and steps for best results."}
                rows={8}
                style={{ width: "100%", boxSizing: "border-box", background: C.bg, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "12px 14px", color: C.text, fontSize: "13px", lineHeight: 1.6, resize: "vertical", outline: "none", fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>
          ) : (
            <div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: C.textMuted, marginBottom: "6px" }}>Instagram post URL</div>
              <input value={igUrl} onChange={e => { setIgUrl(e.target.value); setStatus("idle"); setParsed(null); }}
                placeholder="https://www.instagram.com/reel/..."
                style={{ width: "100%", boxSizing: "border-box", background: C.bg, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "11px 14px", color: C.text, fontSize: "13px", outline: "none" }}
              />
              <div style={{ fontSize: "11px", color: C.textMuted, marginTop: "8px", lineHeight: 1.6 }}>
                ⓘ Works best on <strong>public</strong> posts. If the post is private or the recipe is in comments, use the Paste text tab instead.
              </div>
            </div>
          )}

          {/* Action button */}
          {status !== "done" && (
            <button onClick={mode === "text" ? handleParseText : handleFetchInstagram}
              disabled={!canSubmit || isLoading}
              style={{ padding: "11px", borderRadius: "10px", fontSize: "14px", fontWeight: 700, cursor: canSubmit && !isLoading ? "pointer" : "not-allowed", border: "none", background: canSubmit && !isLoading ? C.orange : C.bg, color: canSubmit && !isLoading ? "#fff" : C.textFaint, transition: "all 0.15s" }}>
              {isLoading ? loadingLabel : mode === "text" ? "✨ Parse recipe" : "✨ Fetch & parse recipe"}
            </button>
          )}

          {/* Error */}
          {status === "error" && (
            <div style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: "10px", padding: "12px 14px", fontSize: "13px", color: "#be123c" }}>
              ⚠️ {errorMsg}
            </div>
          )}

          {/* Parsed preview */}
          {status === "done" && parsed && (
            <div style={{ background: C.bg, border: `1px solid ${C.greenBorder}`, borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: C.greenLight, padding: "12px 14px", borderBottom: `1px solid ${C.greenBorder}` }}>
                <div style={{ fontSize: "11px", color: C.green, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "4px" }}>✓ Parsed successfully</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: C.text }}>{parsed.name}</div>
                <div style={{ fontSize: "12px", color: C.textMuted, marginTop: "3px" }}>
                  {parsed.protein} · {parsed.method} · ⏱ {parsed.time} · 👤 {parsed.servings} srv · {parsed.nutrition?.protein}g protein/srv
                </div>
              </div>
              <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "5px" }}>Ingredients ({parsed.ingredients?.length || 0})</div>
                  <div style={{ fontSize: "12px", color: C.text, lineHeight: 1.7 }}>{(parsed.ingredients || []).slice(0, 5).join(" · ")}{parsed.ingredients?.length > 5 ? ` · +${parsed.ingredients.length - 5} more` : ""}</div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "5px" }}>Steps ({parsed.steps?.length || 0})</div>
                  <div style={{ fontSize: "12px", color: C.text, lineHeight: 1.6 }}>{parsed.steps?.[0] || "—"}{parsed.steps?.length > 1 ? ` … (+${parsed.steps.length - 1} more)` : ""}</div>
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {(parsed.tags || []).map(t => <span key={t} style={{ fontSize: "11px", color: C.orange, background: C.orangeLight, padding: "2px 8px", borderRadius: "20px", border: `1px solid ${C.orangeBorder}` }}>#{t}</span>)}
                </div>
              </div>
              <div style={{ borderTop: `1px solid ${C.border}`, padding: "10px 14px", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "4px" }}>
                {[["Cal", parsed.nutrition?.calories, ""], ["Protein", parsed.nutrition?.protein, "g"], ["Carbs", parsed.nutrition?.carbs, "g"], ["Fat", parsed.nutrition?.fat, "g"], ["Fiber", parsed.nutrition?.fiber, "g"]].map(([l, v, u]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: C.text }}>{v}{u}</div>
                    <div style={{ fontSize: "10px", color: C.textFaint, textTransform: "uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: `1px solid ${C.border}`, padding: "12px 14px", display: "flex", gap: "8px", position: "sticky", bottom: 0, background: C.surface, zIndex: 2 }}>
                <button onClick={handleAdd} style={{ flex: 1, padding: "10px", borderRadius: "10px", fontSize: "14px", fontWeight: 700, cursor: "pointer", border: "none", background: C.green, color: "#fff" }}>
                  ✓ Add to my kitchen
                </button>
                <button onClick={() => { setStatus("idle"); setParsed(null); }} style={{ padding: "10px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: 600, cursor: "pointer", border: `1px solid ${C.border}`, background: C.surface, color: C.textMuted }}>
                  Re-paste
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── INVENTORY VIEW ────────────────────────────────────────────────────────────
function InventoryView({ allRecipes, onSelect, inventory, onInventoryUpdate }) {
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [activeTab, setActiveTab] = useState("inventory");
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setUploadStatus("scanning");
    try {
      const base64 = await new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onload = () => res(reader.result.split(",")[1]);
        reader.onerror = rej;
        reader.readAsDataURL(file);
      });
      const mediaType = file.type || "image/jpeg";
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: mediaType, data: base64 } },
              { type: "text", text: `This is a grocery receipt or invoice. Extract all food/ingredient items purchased. Return ONLY a JSON array, no markdown, no explanation. Each object: {"name":string,"quantity":string,"unit":string}. Focus only on food ingredients, skip non-food items.` }
            ]
          }]
        })
      });
      const data = await res.json();
      const raw = data.content?.find(b => b.type === "text")?.text || "[]";
      const clean = raw.replace(/```json|```/g, "").trim();
      const items = JSON.parse(clean);
      const updated = { ...inventory };
      items.forEach(item => {
        const key = item.name.toLowerCase().trim();
        updated[key] = { name: item.name, quantity: item.quantity, unit: item.unit };
      });
      onInventoryUpdate(updated);
      setUploadStatus("done");
    } catch(e) {
      setUploadStatus("error");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const removeItem = (key) => {
    const updated = { ...inventory };
    delete updated[key];
    onInventoryUpdate(updated);
  };

  const inventoryKeys = Object.keys(inventory);

  const getRecommendations = () => {
    if (inventoryKeys.length === 0) return [];
    const enriched = allRecipes.map(enrichRecipe).filter(r => r.taste === "Savory");
    return enriched.map(r => {
      const ingText = (r.ingredients || []).join(" ").toLowerCase();
      const matches = inventoryKeys.filter(k => ingText.includes(k.toLowerCase()));
      return { ...r, matchCount: matches.length, matchedItems: matches };
    }).filter(r => r.matchCount > 0).sort((a, b) => b.matchCount - a.matchCount).slice(0, 15);
  };

  const recommendations = getRecommendations();

  return (
    <div>
      <div style={{ display: "flex", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "12px", padding: "4px", marginBottom: "20px", boxShadow: C.shadow }}>
        {[{ id: "inventory", label: "🧺 My Inventory" }, { id: "recommendations", label: "✨ Recommended" }].map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            flex: 1, padding: "9px", border: "none", borderRadius: "9px", cursor: "pointer",
            fontSize: "13px", fontWeight: 600, transition: "all 0.15s",
            background: activeTab === t.id ? C.orange : "transparent",
            color: activeTab === t.id ? "#fff" : C.textMuted,
          }}>{t.label}</button>
        ))}
      </div>

      {activeTab === "inventory" && (
        <div>
          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById("inv-file-input").click()}
            style={{ border: `2px dashed ${dragOver ? C.orange : C.borderStrong}`, borderRadius: "14px", padding: "28px 20px", textAlign: "center", background: dragOver ? C.orangeLight : C.surface, cursor: "pointer", marginBottom: "20px", transition: "all 0.15s", boxShadow: C.shadow }}>
            <input id="inv-file-input" type="file" accept="image/*,.pdf" style={{ display: "none" }} onChange={e => handleFileUpload(e.target.files[0])} />
            {uploadStatus === "scanning" ? (
              <div><div style={{ fontSize: "28px", marginBottom: "8px" }}>🔍</div><div style={{ fontSize: "14px", fontWeight: 600, color: C.text }}>Scanning your receipt…</div><div style={{ fontSize: "12px", color: C.textMuted, marginTop: "4px" }}>Claude is reading the ingredients</div></div>
            ) : uploadStatus === "done" ? (
              <div><div style={{ fontSize: "28px", marginBottom: "8px" }}>✅</div><div style={{ fontSize: "14px", fontWeight: 600, color: C.green }}>Inventory updated!</div><div style={{ fontSize: "12px", color: C.textMuted, marginTop: "4px" }}>Upload another receipt to add more</div></div>
            ) : uploadStatus === "error" ? (
              <div><div style={{ fontSize: "28px", marginBottom: "8px" }}>⚠️</div><div style={{ fontSize: "14px", fontWeight: 600, color: "#be123c" }}>Couldn't read the receipt</div><div style={{ fontSize: "12px", color: C.textMuted, marginTop: "4px" }}>Try a clearer photo or different file</div></div>
            ) : (
              <div><div style={{ fontSize: "32px", marginBottom: "10px" }}>🧾</div><div style={{ fontSize: "14px", fontWeight: 700, color: C.text, marginBottom: "4px" }}>Upload grocery receipt or invoice</div><div style={{ fontSize: "12px", color: C.textMuted }}>Photo, screenshot, or PDF — Claude reads the ingredients automatically</div></div>
            )}
          </div>

          {inventoryKeys.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px", color: C.textFaint }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>🧺</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: C.textMuted }}>No inventory yet</div>
              <div style={{ fontSize: "12px", color: C.textFaint, marginTop: "4px" }}>Upload a receipt above to get started</div>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: "12px", color: C.textMuted, fontWeight: 600, marginBottom: "12px" }}>{inventoryKeys.length} items in your pantry</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {Object.entries(inventory).sort((a,b) => a[0].localeCompare(b[0])).map(([key, item]) => (
                  <div key={key} style={{ display: "flex", alignItems: "center", gap: "10px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "10px 14px", boxShadow: C.shadow }}>
                    <span style={{ fontSize: "13px", color: C.text, flex: 1, fontWeight: 500 }}>{item.name}</span>
                    <span style={{ fontSize: "12px", color: C.textMuted, background: C.bg, padding: "2px 8px", borderRadius: "20px", border: `1px solid ${C.border}` }}>{item.quantity} {item.unit}</span>
                    <button onClick={() => removeItem(key)} style={{ background: "none", border: "none", color: C.textFaint, cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: "0 2px" }}>×</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "recommendations" && (
        <div>
          {inventoryKeys.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>🧺</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: C.textMuted }}>Add inventory first</div>
              <div style={{ fontSize: "12px", color: C.textFaint, marginTop: "4px" }}>Upload a receipt in the My Inventory tab to get recipe recommendations</div>
            </div>
          ) : recommendations.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>🤔</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: C.textMuted }}>No matches found</div>
              <div style={{ fontSize: "12px", color: C.textFaint, marginTop: "4px" }}>Try updating your inventory with more ingredients</div>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: "12px", color: C.textMuted, fontWeight: 600, marginBottom: "16px" }}>{recommendations.length} recipes you can cook with what you have</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {recommendations.map(r => (
                  <div key={r.id}>
                    <RecipeCard recipe={r} onSelect={onSelect} accentColor={r.matchCount >= 3 ? C.green : C.orange} />
                    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", padding: "5px 4px 2px" }}>
                      {r.matchedItems.slice(0, 5).map(item => (
                        <span key={item} style={{ fontSize: "10px", color: C.green, background: C.greenLight, padding: "2px 7px", borderRadius: "20px", border: `1px solid ${C.greenBorder}` }}>✓ {item}</span>
                      ))}
                      {r.matchedItems.length > 5 && <span style={{ fontSize: "10px", color: C.textMuted }}>+{r.matchedItems.length - 5} more</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── HOME SCREEN ───────────────────────────────────────────────────────────────
function HomeScreen({ onNavigate, allRecipes, inventory, customRecipes, onSelect }) {
  const inventoryCount = Object.keys(inventory).length;
  const totalRecipes = allRecipes.length;
  const [search, setSearch] = useState("");

  const features = [
    { id: "today",     emoji: "🍽", title: "What's for dinner?", subtitle: "Pick from what's in your freezer", description: "Step-by-step meal planning with protein tracking for 2", color: "#d97706", light: "#fef3c7", border: "#fde68a", stat: `${totalRecipes} recipes` },
    { id: "week",      emoji: "📅", title: "Plan the week",       subtitle: "Weekend prep made easy",            description: "Map out 7 days of meals, auto-generate your shopping list", color: "#0284c7", light: "#e0f2fe", border: "#bae6fd", stat: "Mon — Sun" },
    { id: "inventory", emoji: "🧺", title: "My pantry",           subtitle: "Know what you have",               description: "Upload grocery receipts — get recipe recommendations from your inventory", color: "#16a34a", light: "#dcfce7", border: "#bbf7d0", stat: inventoryCount > 0 ? `${inventoryCount} items` : "Upload receipt" },
    { id: "browse",    emoji: "📖", title: "Recipe book",         subtitle: "Browse all recipes",               description: "Search and explore your full collection by ingredient or cuisine", color: "#7c3aed", light: "#f3e8ff", border: "#ddd6fe", stat: `${totalRecipes} recipes` },
  ];

  // Multi-word search
  const searchResults = search.trim()
    ? (() => {
        const words = search.trim().toLowerCase().split(/\s+/);
        return allRecipes.map(enrichRecipe).filter(r => {
          const haystack = [r.name, ...r.tags, r.cuisine, r.method, r.protein].join(" ").toLowerCase();
          return words.every(w => haystack.includes(w));
        }).slice(0, 8);
      })()
    : [];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Hero + search */}
      <div style={{ background: "#1c1917", padding: "40px 24px 28px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(217,119,6,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20px", left: "20px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(217,119,6,0.08)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>🍳</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 900, color: "#fff", margin: "0 0 4px", lineHeight: 1.1 }}>Our Kitchen</h1>
          <p style={{ color: "#a8a29e", fontSize: "13px", margin: "0 0 20px" }}>{totalRecipes} recipes · 2 pax{customRecipes.length > 0 ? ` · ${customRecipes.length} added` : ""}{inventoryCount > 0 ? ` · ${inventoryCount} pantry items` : ""}</p>

          {/* Search bar */}
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "16px", pointerEvents: "none" }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search any recipe… try "ayam mentega""
              style={{
                width: "100%", boxSizing: "border-box",
                background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px",
                padding: "12px 14px 12px 42px",
                color: "#fff", fontSize: "14px", outline: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
            {search && (
              <button onClick={() => setSearch("")} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: "18px", cursor: "pointer", lineHeight: 1 }}>×</button>
            )}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "20px 16px 80px" }}>

        {/* Search results */}
        {searchResults.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px" }}>
              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{search}"
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {searchResults.map(r => (
                <RecipeCard key={r.id} recipe={r} onSelect={onSelect} accentColor={C.orange} />
              ))}
            </div>
            <button onClick={() => { setSearch(""); onNavigate("browse"); }}
              style={{ marginTop: "12px", width: "100%", padding: "10px", background: "none", border: `1px solid ${C.border}`, borderRadius: "10px", color: C.textMuted, fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
              See all results in Recipe Book →
            </button>
          </div>
        )}

        {search.trim() && searchResults.length === 0 && (
          <div style={{ textAlign: "center", padding: "32px 20px", marginBottom: "20px" }}>
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>🤷</div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: C.textMuted }}>No recipes found for "{search}"</div>
            <div style={{ fontSize: "12px", color: C.textFaint, marginTop: "4px" }}>Try different keywords or browse by category below</div>
          </div>
        )}

        {/* Feature cards — hide when search is active */}
        {!search.trim() && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {features.map(f => (
              <button key={f.id} onClick={() => onNavigate(f.id)} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "16px", padding: "0", cursor: "pointer", textAlign: "left", boxShadow: C.shadowMd, overflow: "hidden", display: "flex", alignItems: "stretch", transition: "transform 0.12s, box-shadow 0.12s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = C.shadowMd; }}>
                <div style={{ width: "6px", background: f.color, flexShrink: 0 }} />
                <div style={{ flex: 1, padding: "18px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "24px" }}>{f.emoji}</span>
                      <div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, color: C.text, lineHeight: 1.2 }}>{f.title}</div>
                        <div style={{ fontSize: "12px", color: f.color, fontWeight: 600, marginTop: "1px" }}>{f.subtitle}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", flexShrink: 0 }}>
                      <span style={{ fontSize: "11px", color: f.color, background: f.light, padding: "3px 8px", borderRadius: "20px", border: `1px solid ${f.border}`, fontWeight: 600, whiteSpace: "nowrap" }}>{f.stat}</span>
                      <span style={{ color: C.textFaint, fontSize: "18px" }}>›</span>
                    </div>
                  </div>
                  <div style={{ fontSize: "12px", color: C.textMuted, lineHeight: 1.5, paddingLeft: "34px" }}>{f.description}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedAccent, setSelectedAccent] = useState(C.orange);
  const [showAddModal, setShowAddModal] = useState(false);
  const [customRecipes, setCustomRecipes] = useState([]);
  const [inventory, setInventory] = useState({});
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("custom-recipes");
      if (saved) setCustomRecipes(JSON.parse(saved));
      const savedInv = localStorage.getItem("kitchen-inventory");
      if (savedInv) setInventory(JSON.parse(savedInv));
    } catch(e) {}
    setStorageReady(true);
  }, []);

  const allRecipes = [...recipes, ...customRecipes];

  const handleSelect = (recipe, accent) => {
    setSelectedRecipe(recipe);
    setSelectedAccent(accent || C.orange);
    window.scrollTo(0, 0);
  };

  const handleAddRecipe = (recipe) => {
    const updated = [...customRecipes, recipe];
    setCustomRecipes(updated);
    localStorage.setItem("custom-recipes", JSON.stringify(updated));
  };

  const handleDeleteCustom = (id) => {
    const updated = customRecipes.filter(r => r.id !== id);
    setCustomRecipes(updated);
    localStorage.setItem("custom-recipes", JSON.stringify(updated));
  };

  const handleInventoryUpdate = (updated) => {
    setInventory(updated);
    localStorage.setItem("kitchen-inventory", JSON.stringify(updated));
  };

  if (selectedRecipe) {
    return <RecipeDetail recipe={selectedRecipe} accent={selectedAccent} onBack={() => setSelectedRecipe(null)} />;
  }

  const SCREEN_META = {
    today:     { label: "What's for dinner?", emoji: "🍽" },
    week:      { label: "Weekly plan",         emoji: "📅" },
    inventory: { label: "My pantry",           emoji: "🧺" },
    browse:    { label: "Recipe book",         emoji: "📖" },
  };

  if (screen === "home") {
    return (
      <>
        <HomeScreen onNavigate={setScreen} allRecipes={allRecipes} inventory={inventory} customRecipes={customRecipes} onSelect={handleSelect} />
        <button onClick={() => setShowAddModal(true)} style={{ position: "fixed", bottom: "24px", right: "24px", width: "52px", height: "52px", borderRadius: "50%", background: C.orange, color: "#fff", border: "none", fontSize: "24px", cursor: "pointer", boxShadow: "0 4px 16px rgba(217,119,6,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }} title="Add recipe">+</button>
        {showAddModal && <AddRecipeModal onClose={() => setShowAddModal(false)} onAdd={handleAddRecipe} />}
      </>
    );
  }

  const meta = SCREEN_META[screen] || {};

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ background: C.stickyBg, borderBottom: `1px solid ${C.border}`, backdropFilter: "blur(8px)", padding: "12px 20px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={() => setScreen("home")} style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text, borderRadius: "10px", padding: "7px 12px", cursor: "pointer", fontSize: "13px", fontWeight: 600, boxShadow: C.shadow }}>← Home</button>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: C.text }}>{meta.emoji} {meta.label}</div>
          </div>
          <button onClick={() => setShowAddModal(true)} style={{ padding: "7px 14px", border: `1px solid ${C.orange}`, borderRadius: "20px", background: C.orangeLight, color: C.orange, fontSize: "12px", fontWeight: 700, cursor: "pointer", boxShadow: C.shadow }}>+ Add</button>
        </div>
      </div>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "20px 16px 60px" }}>
        {!storageReady ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: C.textMuted, fontSize: "14px" }}>Loading…</div>
        ) : (
          <>
            {screen === "today"     && <TodayPlanner   allRecipes={allRecipes} onSelect={handleSelect} />}
            {screen === "week"      && <WeeklyPlanner  allRecipes={allRecipes} onSelect={handleSelect} />}
            {screen === "browse"    && <BrowseView     allRecipes={allRecipes} onSelect={handleSelect} customIds={customRecipes.map(r => r.id)} onDelete={handleDeleteCustom} />}
            {screen === "inventory" && <InventoryView  allRecipes={allRecipes} onSelect={handleSelect} inventory={inventory} onInventoryUpdate={handleInventoryUpdate} />}
          </>
        )}
      </div>
      {showAddModal && <AddRecipeModal onClose={() => setShowAddModal(false)} onAdd={handleAddRecipe} />}
    </div>
  );
}
