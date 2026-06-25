const I18N = {
  languages: [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ],

  ui: {
    en: { welcome: 'Welcome to Ova Restaurant', subtitle: 'Discover our delicious menu categories', addToOrder: 'Add to Order' },
    sq: { welcome: 'Mirësevini në Ova Restaurant', subtitle: 'Zbuloni kategoritë tona të shijshme', addToOrder: 'Shto në Porosi' },
    it: { welcome: 'Benvenuti al Ova Restaurant', subtitle: 'Scoprite le nostre deliziose categorie', addToOrder: 'Aggiungi' },
    de: { welcome: 'Willkommen im Ova Restaurant', subtitle: 'Entdecken Sie unsere köstlichen Menükategorien', addToOrder: 'Bestellen' },
    fr: { welcome: 'Bienvenue au Ova Restaurant', subtitle: 'Découvrez nos délicieuses catégories', addToOrder: 'Ajouter' }
  },

  sections: {
    starters:   { sq: 'Antipasta', it: 'Antipasti', de: 'Vorspeisen', fr: 'Entrées' },
    pizza:      { sq: 'Pizza', it: 'Pizza', de: 'Pizza', fr: 'Pizza' },
    pasta:      { sq: 'Pasta / Rizoto', it: 'Pasta / Risotti', de: 'Pasta / Risotto', fr: 'Pâtes / Risotto' },
    meat:       { sq: 'Mishi', it: 'Carne', de: 'Fleisch', fr: 'Viande' },
    burgers:    { sq: 'Hamburger / Fast Food', it: 'Hamburger / Fast Food', de: 'Burger / Fast Food', fr: 'Burgers / Fast Food' },
    sandwiches: { sq: 'Sanduiçe', it: 'Panini', de: 'Sandwiches', fr: 'Sandwichs' },
    fish:       { sq: 'Peshku', it: 'Pesce', de: 'Fisch', fr: 'Poisson' },
    dessert:    { sq: 'Ëmbëlsira', it: 'Dolci', de: 'Desserts', fr: 'Desserts' },
    drinks:     { sq: 'Pijet', it: 'Bevande', de: 'Getränke', fr: 'Boissons' }
  },

  categories: {
    starters:   { en: 'Starters', sq: 'Antipasta', it: 'Antipasti', de: 'Vorspeisen', fr: 'Entrées' },
    pizza:      { en: 'Pizza', sq: 'Pizza', it: 'Pizza', de: 'Pizza', fr: 'Pizza' },
    pasta:      { en: 'Pasta', sq: 'Pasta', it: 'Pasta', de: 'Pasta', fr: 'Pâtes' },
    meat:       { en: 'Meat', sq: 'Mishi', it: 'Carne', de: 'Fleisch', fr: 'Viande' },
    burgers:    { en: 'Burgers', sq: 'Hamburger', it: 'Hamburger', de: 'Burger', fr: 'Burgers' },
    sandwiches: { en: 'Sandwiches', sq: 'Sanduiçe', it: 'Panini', de: 'Sandwiches', fr: 'Sandwichs' },
    fish:       { en: 'Fish', sq: 'Peshku', it: 'Pesce', de: 'Fisch', fr: 'Poisson' },
    dessert:    { en: 'Desserts', sq: 'Ëmbëlsira', it: 'Dolci', de: 'Desserts', fr: 'Desserts' },
    drinks:     { en: 'Drinks', sq: 'Pijet', it: 'Bevande', de: 'Getränke', fr: 'Boissons' }
  },

  nav: {
    starters:   { en: 'Starters', sq: 'Antipasta', it: 'Antipasti', de: 'Vorspeisen', fr: 'Entrées' },
    pizza:      { en: 'Pizza', sq: 'Pizza', it: 'Pizza', de: 'Pizza', fr: 'Pizza' },
    pasta:      { en: 'Pasta', sq: 'Pasta', it: 'Pasta', de: 'Pasta', fr: 'Pâtes' },
    meat:       { en: 'Meat', sq: 'Mishi', it: 'Carne', de: 'Fleisch', fr: 'Viande' },
    burgers:    { en: 'Burgers', sq: 'Hamburger', it: 'Hamburger', de: 'Burger', fr: 'Burgers' },
    sandwiches: { en: 'Sandwiches', sq: 'Sanduiçe', it: 'Panini', de: 'Sandwiches', fr: 'Sandwichs' },
    fish:       { en: 'Fish', sq: 'Peshku', it: 'Pesce', de: 'Fisch', fr: 'Poisson' },
    dessert:    { en: 'Desserts', sq: 'Ëmbëlsira', it: 'Dolci', de: 'Desserts', fr: 'Desserts' },
    drinks:     { en: 'Drinks', sq: 'Pijet', it: 'Bevande', de: 'Getränke', fr: 'Boissons' }
  },

  items: {
    // ── Starters ──
    'Ova Breakfast':        { sq: 'Mëngjesi Ova', it: 'Colazione Ova', de: 'Ova-Frühstück', fr: 'Petit-déjeuner Ova' },
    'Ham Omelette':         { sq: 'Omletë me Proshutë', it: 'Frittata al Prosciutto', de: 'Schinken-Omelett', fr: 'Omelette au Jambon' },
    'Vegetable Omelette':   { sq: 'Omletë me Perime', it: 'Frittata alle Verdure', de: 'Gemüse-Omelett', fr: 'Omelette aux Légumes' },
    'Cheese Omelette':      { sq: 'Omletë me Djathë', it: 'Frittata al Formaggio', de: 'Käse-Omelett', fr: 'Omelette au Fromage' },
    'Mix Omelette':         { sq: 'Omletë Mikse', it: 'Frittata Mista', de: 'Mix-Omelett', fr: 'Omelette Mixte' },
    'Fried Egg':            { sq: 'Vezë e Skuqur', it: 'Uovo Fritto', de: 'Spiegelei', fr: 'Œuf Frit' },
    'Sunny Side Up':        { sq: 'Vezë Sy', it: 'Uovo al Tegamino', de: 'Sonnenseite', fr: 'Œuf au Plat' },
    'Scrambled Egg':        { sq: 'Vezë e Prishur', it: 'Uova Strapazzate', de: 'Rührei', fr: 'Œufs Brouillés' },
    'Toast':                { sq: 'Tost', it: 'Toast', de: 'Toast', fr: 'Toast' },
    'Green Salad':          { sq: 'Sallatë Jeshile', it: 'Insalata Verde', de: 'Grüner Salat', fr: 'Salade Verte' },
    'Greek Salad':          { sq: 'Sallatë Greke', it: 'Insalata Greca', de: 'Griechischer Salat', fr: 'Salade Grecque' },
    'Mix Salad':            { sq: 'Sallatë Mikse', it: 'Insalata Mista', de: 'Gemischter Salat', fr: 'Salade Mixte' },
    'Village Salad':        { sq: 'Sallatë Fshati', it: 'Insalata Contadina', de: 'Bauernsalat', fr: 'Salade Paysanne' },
    'Arugula Salad':        { sq: 'Sallatë Rukola', it: 'Insalata di Rucola', de: 'Rucola-Salat', fr: 'Salade de Roquette' },
    'Caesar Salad':         { sq: 'Sallatë Cezar', it: 'Insalata Caesar', de: 'Caesar-Salat', fr: 'Salade César' },
    'Fish Soup':            { sq: 'Supë Peshku', it: 'Zuppa di Pesce', de: 'Fischsuppe', fr: 'Soupe de Poisson' },
    'Chicken Soup':         { sq: 'Supë Pule', it: 'Zuppa di Pollo', de: 'Hühnersuppe', fr: 'Soupe de Poulet' },
    'Vegetable Soup':       { sq: 'Supë Perimesh', it: 'Zuppa di Verdure', de: 'Gemüsesuppe', fr: 'Soupe de Légumes' },
    'Mixed Plate':          { sq: 'Pjatë Mikse', it: 'Piatto Misto', de: 'Gemischte Platte', fr: 'Assiette Mixte' },
    'French Fries':         { sq: 'Patate të Skuqura', it: 'Patatine Fritte', de: 'Pommes Frites', fr: 'Frites' },
    'Crab Cakes':           { sq: 'Qofte Gafore', it: 'Polpette di Granchio', de: 'Krabben-Frikadellen', fr: 'Croquettes de Crabe' },
    'Grilled Kaskaval Cheese': { sq: 'Kaçkavall Zgare', it: 'Kaçkavall alla Griglia', de: 'Gegrillter Kaçkavall', fr: 'Kaçkavall Grillé' },
    'White Cheese':         { sq: 'Djathë i Bardhë', it: 'Formaggio Bianco', de: 'Weißkäse', fr: 'Fromage Blanc' },
    'Yogurt Sauce':         { sq: 'Salcë Kosi', it: 'Salsa allo Yogurt', de: 'Joghurtsauce', fr: 'Sauce au Yaourt' },
    'Tzatziki':             { sq: 'Xaxiq', it: 'Tzatziki', de: 'Tzatziki', fr: 'Tzatziki' },
    'Olives':               { sq: 'Ullinj', it: 'Olive', de: 'Oliven', fr: 'Olives' },

    // ── Pizza ──
    'Ham':                  { sq: 'Proshutë', it: 'Prosciutto', de: 'Schinken', fr: 'Jambon' },
    'Salami':               { sq: 'Sallam', it: 'Salame', de: 'Salami', fr: 'Salami' },
    'Ham & Salami':         { sq: 'Proshutë & Sallam', it: 'Prosciutto e Salame', de: 'Schinken & Salami', fr: 'Jambon & Salami' },
    'Spicy':                { sq: 'Pikante', it: 'Piccante', de: 'Pikant', fr: 'Épicée' },
    'Spicy Mushroom':       { sq: 'Pikante me Kërpudha', it: 'Piccante e Funghi', de: 'Pikant mit Pilzen', fr: 'Épicée aux Champignons' },
    'Wudy Fries':           { sq: 'Wudy me Patate', it: 'Wudy e Patatine', de: 'Wudy mit Pommes', fr: 'Wudy Frites' },
    'Four Cheese':          { sq: 'Katër Djathëra', it: 'Quattro Formaggi', de: 'Vier Käse', fr: 'Quatre Fromages' },
    'Tuna':                 { sq: 'Ton', it: 'Tonno', de: 'Thunfisch', fr: 'Thon' },
    'Mushroom':             { sq: 'Kërpudhë', it: 'Funghi', de: 'Pilze', fr: 'Champignons' },
    'Tuna Mushroom':        { sq: 'Ton me Kërpudha', it: 'Tonno e Funghi', de: 'Thunfisch & Pilze', fr: 'Thon aux Champignons' },
    'Four Seasons':         { sq: 'Katër Stinët', it: 'Quattro Stagioni', de: 'Vier Jahreszeiten', fr: 'Quatre Saisons' },
    'Vegetarian':           { sq: 'Vegjetariane', it: 'Vegetariana', de: 'Vegetarisch', fr: 'Végétarienne' },
    'Seafood':              { sq: 'Fruta Deti', it: 'Frutti di Mare', de: 'Meeresfrüchte', fr: 'Fruits de Mer' },
    'Sucuk Four Cheese':    { sq: 'Suxhuk 4 Djathëra', it: 'Sucuk Quattro Formaggi', de: 'Sucuk Vier Käse', fr: 'Sucuk Quatre Fromages' },
    'Pizza Mix':            { sq: 'Pizza Mikse', it: 'Pizza Mista', de: 'Pizza Mix', fr: 'Pizza Mixte' },
    'Doner Pizza':          { sq: 'Pizza Doner', it: 'Pizza Döner', de: 'Döner-Pizza', fr: 'Pizza Döner' },
    'American Pizza':       { sq: 'Pizza Amerikane', it: 'Pizza Americana', de: 'Amerikanische Pizza', fr: 'Pizza Américaine' },
    'Bruschetta Focaccia':  { sq: 'Brusketë Focaccia', it: 'Bruschetta Focaccia', de: 'Bruschetta Focaccia', fr: 'Bruschetta Focaccia' },
    'Calzone Ham':          { sq: 'Kalcone Proshutë', it: 'Calzone Prosciutto', de: 'Calzone Schinken', fr: 'Calzone Jambon' },
    'Calzone Ham & Mushroom': { sq: 'Kalcone Proshutë & Kërpudha', it: 'Calzone Prosciutto e Funghi', de: 'Calzone Schinken & Pilze', fr: 'Calzone Jambon & Champignons' },
    'Calzone Wudy':         { sq: 'Kalcone Wudy', it: 'Calzone Wudy', de: 'Calzone Wudy', fr: 'Calzone Wudy' },
    'Calzone Spicy':        { sq: 'Kalcone Pikante', it: 'Calzone Piccante', de: 'Calzone Pikant', fr: 'Calzone Épicé' },
    'Calzone Mix Salami':   { sq: 'Kalcone Sallam Mikse', it: 'Calzone Salame Misto', de: 'Calzone Salami Mix', fr: 'Calzone Salami Mixte' },
    'Calzone Tuna':         { sq: 'Kalcone Ton', it: 'Calzone Tonno', de: 'Calzone Thunfisch', fr: 'Calzone Thon' },
    'Calzone Seafood':      { sq: 'Kalcone Fruta Deti', it: 'Calzone Frutti di Mare', de: 'Calzone Meeresfrüchte', fr: 'Calzone Fruits de Mer' },

    // ── Pasta ──
    'Linguini Seafood':     { sq: 'Linguini Fruta Deti', it: 'Linguine ai Frutti di Mare', de: 'Linguine Meeresfrüchte', fr: 'Linguine Fruits de Mer' },
    'Linguini Shrimp & Zucchini': { sq: 'Linguini Karkalec & Kungull', it: 'Linguine Gamberi e Zucchine', de: 'Linguine Garnelen & Zucchini', fr: 'Linguine Crevettes & Courgettes' },
    'Pasta Bolognese':      { sq: 'Pasta Boloneze', it: 'Pasta alla Bolognese', de: 'Pasta Bolognese', fr: 'Pâtes Bolognaise' },
    'Butter Pasta':         { sq: 'Pasta me Gjalp', it: 'Pasta al Burro', de: 'Butter-Pasta', fr: 'Pâtes au Beurre' },
    'Ravioli Truffle Cream': { sq: 'Ravioli Krem Tartuf', it: 'Ravioli Crema al Tartufo', de: 'Ravioli Trüffelcreme', fr: 'Ravioli Crème Truffe' },
    'Ravioli Truffle Shrimp': { sq: 'Ravioli Tartuf Karkalec', it: 'Ravioli Tartufo e Gamberi', de: 'Ravioli Trüffel & Garnelen', fr: 'Ravioli Truffe & Crevettes' },
    'Risotto Seafood':      { sq: 'Rizoto Fruta Deti', it: 'Risotto ai Frutti di Mare', de: 'Risotto Meeresfrüchte', fr: 'Risotto Fruits de Mer' },
    'Risotto Shrimp & Zucchini': { sq: 'Rizoto Karkalec & Kungull', it: 'Risotto Gamberi e Zucchine', de: 'Risotto Garnelen & Zucchini', fr: 'Risotto Crevettes & Courgettes' },
    'Risotto Shrimp & Saffron': { sq: 'Rizoto Karkalec & Shafran', it: 'Risotto Gamberi e Zafferano', de: 'Risotto Garnelen & Safran', fr: 'Risotto Crevettes & Safran' },
    'Simple Risotto':       { sq: 'Rizoto e Thjeshtë', it: 'Risotto Semplice', de: 'Einfaches Risotto', fr: 'Risotto Simple' },

    // ── Meat ──
    'Chicken Fillet with Fries': { sq: 'Fileto Pule me Patate', it: 'Filetto di Pollo con Patatine', de: 'Hähnchenfilet mit Pommes', fr: 'Filet de Poulet avec Frites' },
    'Beef Steak with Fries': { sq: 'Biftek Viçi me Patate', it: 'Bistecca di Manzo con Patatine', de: 'Rindersteak mit Pommes', fr: 'Steak de Bœuf avec Frites' },
    'Beef Chop with Fries':  { sq: 'Brinjë Viçi me Patate', it: 'Costoletta di Manzo con Patatine', de: 'Rinderkotelett mit Pommes', fr: 'Côtelette de Bœuf avec Frites' },
    'Clay Pot Stew':        { sq: 'Tavë Balte', it: 'Stufato in Terracotta', de: 'Tontopf-Eintopf', fr: 'Ragoût en Cocotte' },
    'Chicken Cutlet':       { sq: 'Kotoleta Pule', it: 'Cotoletta di Pollo', de: 'Hähnchenschnitzel', fr: 'Escalope de Poulet' },
    'Shish Kebab':          { sq: 'Shishqebap', it: 'Spiedino', de: 'Schaschlik', fr: 'Brochette' },

    // ── Burgers / Fast Food ──
    'Cheese Burger':        { sq: 'Çizbërger', it: 'Cheeseburger', de: 'Cheeseburger', fr: 'Cheeseburger' },
    'Barbeque Burger':      { sq: 'Burger BBQ', it: 'Burger Barbecue', de: 'Barbecue-Burger', fr: 'Burger Barbecue' },
    'Big Best Burger':      { sq: 'Big Best Burger', it: 'Big Best Burger', de: 'Big Best Burger', fr: 'Big Best Burger' },
    'Ova Burger':           { sq: 'Ova Burger', it: 'Ova Burger', de: 'Ova Burger', fr: 'Ova Burger' },
    'Souvlaki':             { sq: 'Sufllaqe', it: 'Souvlaki', de: 'Souvlaki', fr: 'Souvlaki' },
    'Open Souvlaki':        { sq: 'Sufllaqe e Hapur', it: 'Souvlaki Aperto', de: 'Offener Souvlaki', fr: 'Souvlaki Ouvert' },
    'Hot Dog':              { sq: 'Hot Dog', it: 'Hot Dog', de: 'Hot Dog', fr: 'Hot Dog' },
    'Doner':                { sq: 'Doner', it: 'Döner Kebab', de: 'Döner', fr: 'Kebab' },
    'Club Sandwich':        { sq: 'Sanduiç Club', it: 'Club Sandwich', de: 'Club Sandwich', fr: 'Club Sandwich' },
    'Shawarma (Kebab)':     { sq: 'Shawarma (Kebap)', it: 'Shawarma', de: 'Schawarma', fr: 'Shawarma' },
    'Pita Bread':           { sq: 'Pite', it: 'Pane Pita', de: 'Fladenbrot', fr: 'Pain Pita' },
    'Panini':               { sq: 'Panine', it: 'Panino', de: 'Panini', fr: 'Panini' },

    // ── Sandwiches ──
    'Beef Ham Sandwich':    { sq: 'Sanduiç Proshutë Viçi', it: 'Panino Prosciutto di Manzo', de: 'Rinderschinken-Sandwich', fr: 'Sandwich Jambon de Bœuf' },
    'Salami Sandwich':      { sq: 'Sanduiç Sallam', it: 'Panino al Salame', de: 'Salami-Sandwich', fr: 'Sandwich au Salami' },
    'Spicy Sandwich':       { sq: 'Sanduiç Pikant', it: 'Panino Piccante', de: 'Pikantes Sandwich', fr: 'Sandwich Épicé' },
    'Tuna Sandwich':        { sq: 'Sanduiç Ton', it: 'Panino al Tonno', de: 'Thunfisch-Sandwich', fr: 'Sandwich au Thon' },
    'Mix Sandwich':         { sq: 'Sanduiç Mikse', it: 'Panino Misto', de: 'Mix-Sandwich', fr: 'Sandwich Mixte' },
    'Vegetarian Sandwich':  { sq: 'Sanduiç Vegjetarian', it: 'Panino Vegetariano', de: 'Vegetarisches Sandwich', fr: 'Sandwich Végétarien' },
    'Fries Sandwich':       { sq: 'Sanduiç me Patate', it: 'Panino con Patatine', de: 'Pommes-Sandwich', fr: 'Sandwich Frites' },
    'Village Sandwich':     { sq: 'Sanduiç Fshati', it: 'Panino Contadino', de: 'Bauern-Sandwich', fr: 'Sandwich Paysan' },
    'Wudy Sandwich':        { sq: 'Sanduiç Wudy', it: 'Panino Wudy', de: 'Wudy-Sandwich', fr: 'Sandwich Wudy' },
    'Four Cheese Sandwich': { sq: 'Sanduiç 4 Djathëra', it: 'Panino Quattro Formaggi', de: 'Vier-Käse-Sandwich', fr: 'Sandwich Quatre Fromages' },
    'Chicken Ham Sandwich': { sq: 'Sanduiç Proshutë Pule', it: 'Panino Prosciutto di Pollo', de: 'Hähnchenschinken-Sandwich', fr: 'Sandwich Jambon de Poulet' },
    'Ova Sandwich':         { sq: 'Sanduiç Ova', it: 'Panino Ova', de: 'Ova-Sandwich', fr: 'Sandwich Ova' },
    'Chicken Cutlet Sandwich': { sq: 'Sanduiç Kotoleta Pule', it: 'Panino Cotoletta di Pollo', de: 'Schnitzel-Sandwich', fr: 'Sandwich Escalope de Poulet' },
    'Shish Kebab Sandwich': { sq: 'Sanduiç Shishqebap', it: 'Panino Spiedino', de: 'Schaschlik-Sandwich', fr: 'Sandwich Brochette' },

    // ── Fish ──
    'Grilled Gilt-head Bream': { sq: 'Koce Zgare', it: 'Orata alla Griglia', de: 'Gegrillte Goldbrasse', fr: 'Daurade Grillée' },
    'Grilled Sea Bass':     { sq: 'Levrek Zgare', it: 'Branzino alla Griglia', de: 'Gegrillter Wolfsbarsch', fr: 'Bar Grillé' },
    'Fried Hake':           { sq: 'Merluc Fërguar', it: 'Nasello Fritto', de: 'Gebratener Seehecht', fr: 'Merlu Frit' },
    'Fried Red Mullet':     { sq: 'Barbun Fërguar', it: 'Triglia Fritta', de: 'Gebratene Meerbarbe', fr: 'Rouget Frit' },
    'Calamari Grilled/Fried': { sq: 'Kallamar Zgare/Fërguar', it: 'Calamari Grigliati/Fritti', de: 'Calamari Gegrillt/Frittiert', fr: 'Calamars Grillés/Frits' },
    'Cuttlefish Grilled/Fried': { sq: 'Sepje Zgare/Fërguar', it: 'Seppie Grigliate/Fritte', de: 'Tintenfisch Gegrillt/Frittiert', fr: 'Seiche Grillée/Frite' },
    'Shrimp Grilled/Fried': { sq: 'Karkalec Zgare/Fërguar', it: 'Gamberi Grigliati/Fritti', de: 'Garnelen Gegrillt/Frittiert', fr: 'Crevettes Grillées/Frites' },
    'Fried Mix':            { sq: 'Friturë Mikse', it: 'Fritto Misto', de: 'Frittiermix', fr: 'Friture Mixte' },
    'Grilled Octopus':      { sq: 'Oktapod Zgare', it: 'Polpo alla Griglia', de: 'Gegrillter Oktopus', fr: 'Poulpe Grillé' },

    // ── Desserts — Crepes ──
    'Nutella Crepe':        { sq: 'Krepë Nutella', it: 'Crêpe alla Nutella', de: 'Nutella-Crêpe', fr: 'Crêpe Nutella' },
    'Nutella Cookie Crepe': { sq: 'Krepë Nutella Biskotë', it: 'Crêpe Nutella e Biscotto', de: 'Nutella-Keks-Crêpe', fr: 'Crêpe Nutella Cookie' },
    'Nutella Banana Crepe': { sq: 'Krepë Nutella Banane', it: 'Crêpe Nutella e Banana', de: 'Nutella-Bananen-Crêpe', fr: 'Crêpe Nutella Banane' },
    'Lidia Crepe':          { sq: 'Krepë Lidia', it: 'Crêpe Lidia', de: 'Lidia-Crêpe', fr: 'Crêpe Lidia' },
    'Kiwi Crepe':           { sq: 'Krepë Kivi', it: 'Crêpe al Kiwi', de: 'Kiwi-Crêpe', fr: 'Crêpe Kiwi' },
    'Bounty Crepe':         { sq: 'Krepë Bounty', it: 'Crêpe Bounty', de: 'Bounty-Crêpe', fr: 'Crêpe Bounty' },
    'Cherry Crepe':         { sq: 'Krepë Qershi', it: 'Crêpe alla Ciliegia', de: 'Kirsch-Crêpe', fr: 'Crêpe à la Cerise' },
    'Rafaello Crepe':       { sq: 'Krepë Rafaello', it: 'Crêpe Rafaello', de: 'Rafaello-Crêpe', fr: 'Crêpe Rafaello' },
    'Oreo Crepe':           { sq: 'Krepë Oreo', it: 'Crêpe Oreo', de: 'Oreo-Crêpe', fr: 'Crêpe Oreo' },
    'Dubai Crepe':          { sq: 'Krepë Dubai', it: 'Crêpe Dubai', de: 'Dubai-Crêpe', fr: 'Crêpe Dubaï' },
    'Village Crepe (Savory)': { sq: 'Krepë Fshati (e Kripur)', it: 'Crêpe Contadina (Salata)', de: 'Bauern-Crêpe (Herzhaft)', fr: 'Crêpe Paysanne (Salée)' },
    'Caesar Crepe (Savory)': { sq: 'Krepë Cezar (e Kripur)', it: 'Crêpe Caesar (Salata)', de: 'Caesar-Crêpe (Herzhaft)', fr: 'Crêpe César (Salée)' },

    // ── Desserts — Waffles ──
    'The Chockoloco Waffle': { sq: 'Waffle Chockoloco', it: 'Waffle Chockoloco', de: 'Chockoloco-Waffel', fr: 'Gaufre Chockoloco' },
    'Tutti Frutti Waffle':  { sq: 'Waffle Tutti Frutti', it: 'Waffle Tutti Frutti', de: 'Tutti-Frutti-Waffel', fr: 'Gaufre Tutti Frutti' },
    'Biscuit Cream Waffle': { sq: 'Waffle Krem Biskote', it: 'Waffle Crema Biscotto', de: 'Biskuitcreme-Waffel', fr: 'Gaufre Crème Biscuit' },
    'Tropical Waffle':      { sq: 'Waffle Tropikale', it: 'Waffle Tropicale', de: 'Tropische Waffel', fr: 'Gaufre Tropicale' },
    'Ying Yang Waffle':     { sq: 'Waffle Ying Yang', it: 'Waffle Ying Yang', de: 'Ying-Yang-Waffel', fr: 'Gaufre Ying Yang' },
    'Simple Fruits Waffle': { sq: 'Waffle me Fruta', it: 'Waffle alla Frutta', de: 'Früchte-Waffel', fr: 'Gaufre aux Fruits' },
    'Costa Rica Waffle':    { sq: 'Waffle Costa Rica', it: 'Waffle Costa Rica', de: 'Costa-Rica-Waffel', fr: 'Gaufre Costa Rica' },
    'House Special Waffle': { sq: 'Waffle Speciale', it: 'Waffle della Casa', de: 'Hausspezialität-Waffel', fr: 'Gaufre Spéciale Maison' },
    'Apple Waffle':         { sq: 'Waffle Molle', it: 'Waffle alla Mela', de: 'Apfel-Waffel', fr: 'Gaufre Pomme' },
    'Bumble Bee Waffle':    { sq: 'Waffle Bumble Bee', it: 'Waffle Bumble Bee', de: 'Bumble-Bee-Waffel', fr: 'Gaufre Bumble Bee' },
    'Waffle Madness':       { sq: 'Waffle Madness', it: 'Waffle Madness', de: 'Waffel-Wahnsinn', fr: 'Folie de Gaufre' },
    'Cheesecake Waffle':    { sq: 'Waffle Cheesecake', it: 'Waffle Cheesecake', de: 'Käsekuchen-Waffel', fr: 'Gaufre Cheesecake' },
    'Dubai Waffle':         { sq: 'Waffle Dubai', it: 'Waffle Dubai', de: 'Dubai-Waffel', fr: 'Gaufre Dubaï' },
    'Oreo Waffle':          { sq: 'Waffle Oreo', it: 'Waffle Oreo', de: 'Oreo-Waffel', fr: 'Gaufre Oreo' },
    'Ice Cream (scoop)':    { sq: 'Akullore (topë)', it: 'Gelato (pallina)', de: 'Eiskugel', fr: 'Glace (boule)' },
    'Fruit Mix':            { sq: 'Mikse Frutash', it: 'Mix di Frutta', de: 'Fruchtmix', fr: 'Mix de Fruits' },

    // ── Drinks — Hot ──
    'Espresso':             { sq: 'Kafe Ekspres', it: 'Espresso', de: 'Espresso', fr: 'Espresso' },
    'Macchiato':            { sq: 'Makiato', it: 'Macchiato', de: 'Macchiato', fr: 'Macchiato' },
    'Big Macchiato':        { sq: 'Makiato e Madhe', it: 'Macchiato Grande', de: 'Großer Macchiato', fr: 'Grand Macchiato' },
    'Small Cappuccino':     { sq: 'Kapuçino e Vogël', it: 'Cappuccino Piccolo', de: 'Kleiner Cappuccino', fr: 'Petit Cappuccino' },
    'Large Cappuccino':     { sq: 'Kapuçino e Madhe', it: 'Cappuccino Grande', de: 'Großer Cappuccino', fr: 'Grand Cappuccino' },
    'Cappuccino with Cream & Cinnamon': { sq: 'Kapuçino me Shllak & Kanellë', it: 'Cappuccino con Panna e Cannella', de: 'Cappuccino mit Sahne & Zimt', fr: 'Cappuccino Crème & Cannelle' },
    'Small Hot Chocolate':  { sq: 'Kakao e Vogël', it: 'Cioccolata Calda Piccola', de: 'Kleine Heiße Schokolade', fr: 'Petit Chocolat Chaud' },
    'Large Hot Chocolate':  { sq: 'Kakao e Madhe', it: 'Cioccolata Calda Grande', de: 'Große Heiße Schokolade', fr: 'Grand Chocolat Chaud' },
    'Melted Chocolate':     { sq: 'Çokollatë e Shkrirë', it: 'Cioccolata Fusa', de: 'Geschmolzene Schokolade', fr: 'Chocolat Fondu' },
    'Salep':                { sq: 'Salep', it: 'Salep', de: 'Salep', fr: 'Salep' },
    'Hot Tea':              { sq: 'Çaj i Nxehtë', it: 'Tè Caldo', de: 'Heißer Tee', fr: 'Thé Chaud' },
    'Iced Coffee':          { sq: 'Kafe e Ftohtë', it: 'Caffè Freddo', de: 'Eiskaffee', fr: 'Café Glacé' },
    'Cafe Latte':           { sq: 'Kafe Latë', it: 'Caffè Latte', de: 'Milchkaffee', fr: 'Café au Lait' },
    'Milk':                 { sq: 'Qumësht', it: 'Latte', de: 'Milch', fr: 'Lait' },
    'Sweet Coffee':         { sq: 'Kafe e Ëmbël', it: 'Caffè Dolce', de: 'Süßer Kaffee', fr: 'Café Sucré' },
    'Coffee Cream':         { sq: 'Krem Kafe', it: 'Crema di Caffè', de: 'Kaffeecreme', fr: 'Crème de Café' },

    // ── Drinks — Energy & Soft ──
    'Lemon Soda':           { sq: 'Limonadë', it: 'Soda al Limone', de: 'Zitronenlimonade', fr: 'Soda Citron' },
    'Orange Soda':          { sq: 'Portokall Soda', it: 'Soda all\'Arancia', de: 'Orangenlimonade', fr: 'Soda Orange' },
    'Schwepps Tonic':       { sq: 'Schweppes Tonik', it: 'Schweppes Tonic', de: 'Schweppes Tonic', fr: 'Schweppes Tonic' },
    'Schwepps Lemon':       { sq: 'Schweppes Limon', it: 'Schweppes Limone', de: 'Schweppes Zitrone', fr: 'Schweppes Citron' },
    'Coca Cola Can':        { sq: 'Coca Cola Kanaçe', it: 'Coca Cola Lattina', de: 'Coca Cola Dose', fr: 'Coca Cola Canette' },
    'Coca Cola Bottle':     { sq: 'Coca Cola Shishe', it: 'Coca Cola Bottiglia', de: 'Coca Cola Flasche', fr: 'Coca Cola Bouteille' },
    'Fanta Orange Can':     { sq: 'Fanta Orange Kanaçe', it: 'Fanta Arancia Lattina', de: 'Fanta Orange Dose', fr: 'Fanta Orange Canette' },
    'Fanta Orange Bottle':  { sq: 'Fanta Orange Shishe', it: 'Fanta Arancia Bottiglia', de: 'Fanta Orange Flasche', fr: 'Fanta Orange Bouteille' },
    'Fanta Exotic':         { sq: 'Fanta Ekzotike', it: 'Fanta Esotica', de: 'Fanta Exotic', fr: 'Fanta Exotic' },
    'Fanta Exotic Bottle':  { sq: 'Fanta Ekzotike Shishe', it: 'Fanta Esotica Bottiglia', de: 'Fanta Exotic Flasche', fr: 'Fanta Exotic Bouteille' },
    'Bravo Can':            { sq: 'Bravo Kanaçe', it: 'Bravo Lattina', de: 'Bravo Dose', fr: 'Bravo Canette' },
    'Rose Lemonade':        { sq: 'Limonadë Trëndafili', it: 'Limonata alla Rosa', de: 'Rosen-Limonade', fr: 'Limonade à la Rose' },
    'Iced Tea':             { sq: 'Çaj i Ftohtë', it: 'Tè Freddo', de: 'Eistee', fr: 'Thé Glacé' },
    'Water':                { sq: 'Ujë', it: 'Acqua', de: 'Wasser', fr: 'Eau' },
    'Vitamin Water':        { sq: 'Ujë Vitamine', it: 'Acqua Vitaminica', de: 'Vitaminwasser', fr: 'Eau Vitaminée' },

    // ── Drinks — Cold Coffee ──
    'Freddo Coffee':        { sq: 'Fredo Kafe', it: 'Caffè Freddo', de: 'Freddo Kaffee', fr: 'Café Freddo' },
    'Frappe':               { sq: 'Frapë', it: 'Frappè', de: 'Frappé', fr: 'Frappé' },
    'Large Iced Latte':     { sq: 'Kafe Latë e Ftohtë e Madhe', it: 'Caffè Latte Freddo Grande', de: 'Großer Eislatte', fr: 'Grand Latte Glacé' },
    'Iced Cappuccino':      { sq: 'Kapuçino e Ftohtë', it: 'Cappuccino Freddo', de: 'Eis-Cappuccino', fr: 'Cappuccino Glacé' },
    'Iced Chocolate':       { sq: 'Çokollatë e Ftohtë', it: 'Cioccolata Fredda', de: 'Eisschokolade', fr: 'Chocolat Glacé' },
    'Iced Nescafe':         { sq: 'Neskafe e Ftohtë', it: 'Nescafé Freddo', de: 'Eis-Nescafé', fr: 'Nescafé Glacé' },

    // ── Drinks — Juices ──
    'Orange Juice':         { sq: 'Lëng Portokalli', it: 'Succo d\'Arancia', de: 'Orangensaft', fr: 'Jus d\'Orange' },
    'Apple Juice':          { sq: 'Lëng Molle', it: 'Succo di Mela', de: 'Apfelsaft', fr: 'Jus de Pomme' },
    'Fruit Juice Mix':      { sq: 'Lëng Frutash Mikse', it: 'Succo Misto di Frutta', de: 'Fruchtsaftmix', fr: 'Jus de Fruits Mixte' },
    'Smoothie':             { sq: 'Smoothie', it: 'Frullato', de: 'Smoothie', fr: 'Smoothie' },

    // ── Drinks — Beer/Wine ──
    'Champagne':            { sq: 'Shampanjë', it: 'Champagne', de: 'Champagner', fr: 'Champagne' },
    'Cocktails Alcohol Free': { sq: 'Koktej pa Alkool', it: 'Cocktail Analcolici', de: 'Alkoholfreie Cocktails', fr: 'Cocktails Sans Alcool' },
    'Glass of Wine':        { sq: 'Gotë Verë', it: 'Bicchiere di Vino', de: 'Glas Wein', fr: 'Verre de Vin' },

    // ── Drinks — Fresh Juices ──
    'Daily Juice':          { sq: 'Lëngu i Ditës', it: 'Succo del Giorno', de: 'Tagessaft', fr: 'Jus du Jour' },
    'Pick Me Up':           { sq: 'Pick Me Up', it: 'Pick Me Up', de: 'Pick Me Up', fr: 'Pick Me Up' },
    'Stress Down':          { sq: 'Stress Down', it: 'Stress Down', de: 'Stress Down', fr: 'Stress Down' },
    'Recovery Juice':       { sq: 'Lëngu i Rikuperimit', it: 'Succo Recovery', de: 'Recovery Saft', fr: 'Jus Recovery' },
    'Green Life':           { sq: 'Green Life', it: 'Green Life', de: 'Green Life', fr: 'Green Life' },
    'Ginger Shot':          { sq: 'Ginger Shot', it: 'Ginger Shot', de: 'Ingwer-Shot', fr: 'Shot de Gingembre' },
    'Ginger Sensation':     { sq: 'Ginger Sensation', it: 'Ginger Sensation', de: 'Ingwer-Sensation', fr: 'Sensation Gingembre' },
    'Juice of Life':        { sq: 'Lëngu i Jetës', it: 'Succo della Vita', de: 'Saft des Lebens', fr: 'Jus de la Vie' },
    'Energy':               { sq: 'Energy', it: 'Energy', de: 'Energy', fr: 'Energy' },
    'On Your Mark':         { sq: 'On Your Mark', it: 'On Your Mark', de: 'On Your Mark', fr: 'On Your Mark' },
    'Raspberry Glow':       { sq: 'Raspberry Glow', it: 'Raspberry Glow', de: 'Raspberry Glow', fr: 'Raspberry Glow' },
    'Tropical':             { sq: 'Tropikal', it: 'Tropicale', de: 'Tropical', fr: 'Tropical' }
  },

  descs: {
    // ── Starters ──
    'Ova Breakfast': {
      sq: 'Proshutë pule, proshutë viçi, reçel luleshtrydhe, reçel fiku, reçel qershi, vezë, mjaltë, nutella, djathë kaçkavall, djathë i bardhë, domate, kastravec, salcë kosi, fruta',
      it: 'Prosciutto di pollo, prosciutto di manzo, marmellata di fragole, di fichi, di ciliegie, uova, miele, nutella, kaçkavall, formaggio bianco, pomodoro, cetriolo, salsa yogurt, frutta',
      de: 'Hähnchenschinken, Rinderschinken, Erdbeer-, Feigen-, Kirschmarmelade, Eier, Honig, Nutella, Kaçkavall, Weißkäse, Tomate, Gurke, Joghurtsauce, Früchte',
      fr: 'Jambon de poulet, jambon de bœuf, confiture de fraises, de figues, de cerises, œufs, miel, nutella, kaçkavall, fromage blanc, tomate, concombre, sauce yaourt, fruits'
    },
    'Ham Omelette': {
      sq: 'Vezë, domate, kastravec, salcë kosi, proshutë pule',
      it: 'Uova, pomodoro, cetriolo, salsa yogurt, prosciutto di pollo',
      de: 'Eier, Tomate, Gurke, Joghurtsauce, Hähnchenschinken',
      fr: 'Œufs, tomate, concombre, sauce yaourt, jambon de poulet'
    },
    'Vegetable Omelette': {
      sq: 'Vezë, domate, kastravec, salcë kosi, perime',
      it: 'Uova, pomodoro, cetriolo, salsa yogurt, verdure',
      de: 'Eier, Tomate, Gurke, Joghurtsauce, Gemüse',
      fr: 'Œufs, tomate, concombre, sauce yaourt, légumes'
    },
    'Cheese Omelette': {
      sq: 'Vezë, domate, kastravec, salcë kosi, djathë i bardhë',
      it: 'Uova, pomodoro, cetriolo, salsa yogurt, formaggio bianco',
      de: 'Eier, Tomate, Gurke, Joghurtsauce, Weißkäse',
      fr: 'Œufs, tomate, concombre, sauce yaourt, fromage blanc'
    },
    'Mix Omelette': {
      sq: 'Vezë, domate, kastravec, salcë kosi, proshutë pule, djathë i bardhë, perime',
      it: 'Uova, pomodoro, cetriolo, salsa yogurt, prosciutto di pollo, formaggio bianco, verdure',
      de: 'Eier, Tomate, Gurke, Joghurtsauce, Hähnchenschinken, Weißkäse, Gemüse',
      fr: 'Œufs, tomate, concombre, sauce yaourt, jambon de poulet, fromage blanc, légumes'
    },
    'Fried Egg': {
      sq: 'Vezë, domate, kastravec, salcë kosi',
      it: 'Uova, pomodoro, cetriolo, salsa yogurt',
      de: 'Eier, Tomate, Gurke, Joghurtsauce',
      fr: 'Œufs, tomate, concombre, sauce yaourt'
    },
    'Sunny Side Up': {
      sq: 'Vezë, domate, kastravec, salcë kosi',
      it: 'Uova, pomodoro, cetriolo, salsa yogurt',
      de: 'Eier, Tomate, Gurke, Joghurtsauce',
      fr: 'Œufs, tomate, concombre, sauce yaourt'
    },
    'Scrambled Egg': {
      sq: 'Vezë, domate, kastravec, salcë kosi',
      it: 'Uova, pomodoro, cetriolo, salsa yogurt',
      de: 'Eier, Tomate, Gurke, Joghurtsauce',
      fr: 'Œufs, tomate, concombre, sauce yaourt'
    },
    'Toast': {
      sq: 'Majonezë, domate, proshutë e dyfishtë, ketchup',
      it: 'Maionese, pomodoro, doppio prosciutto, ketchup',
      de: 'Mayonnaise, Tomate, doppelter Schinken, Ketchup',
      fr: 'Mayonnaise, tomate, double jambon, ketchup'
    },
    'Green Salad': {
      sq: 'Sallatë jeshile, limon, ullinj, qepë',
      it: 'Lattuga, limone, olive, cipolla',
      de: 'Blattsalat, Zitrone, Oliven, Zwiebel',
      fr: 'Laitue, citron, olives, oignon'
    },
    'Greek Salad': {
      sq: 'Domate, qepë, kastravec, djathë i bardhë, speca, ullinj, rigon',
      it: 'Pomodoro, cipolla, cetriolo, formaggio bianco, peperoni, olive, origano',
      de: 'Tomate, Zwiebel, Gurke, Weißkäse, Paprika, Oliven, Oregano',
      fr: 'Tomate, oignon, concombre, fromage blanc, poivrons, olives, origan'
    },
    'Mix Salad': {
      sq: 'Sallatë jeshile, ullinj, qepë, domate, kastravec, limon, speca',
      it: 'Lattuga, olive, cipolla, pomodoro, cetriolo, limone, peperoni',
      de: 'Blattsalat, Oliven, Zwiebel, Tomate, Gurke, Zitrone, Paprika',
      fr: 'Laitue, olives, oignon, tomate, concombre, citron, poivrons'
    },
    'Village Salad': {
      sq: 'Sallatë jeshile, domate, kastravec, djathë i bardhë',
      it: 'Lattuga, pomodoro, cetriolo, formaggio bianco',
      de: 'Blattsalat, Tomate, Gurke, Weißkäse',
      fr: 'Laitue, tomate, concombre, fromage blanc'
    },
    'Arugula Salad': {
      sq: 'Pomodorini, rukola, grana',
      it: 'Pomodorini, rucola, grana',
      de: 'Kirschtomaten, Rucola, Parmesan',
      fr: 'Tomates cerises, roquette, parmesan'
    },
    'Caesar Salad': {
      sq: 'Sallatë jeshile, bukë e thekur, fileto pule, misër, grana, salcë Cezar',
      it: 'Lattuga, crostini, filetto di pollo, mais, grana, salsa Caesar',
      de: 'Blattsalat, Croutons, Hähnchenfilet, Mais, Parmesan, Caesar-Sauce',
      fr: 'Laitue, croûtons, filet de poulet, maïs, parmesan, sauce César'
    },

    // ── Pizza ──
    'Margarita': {
      sq: 'Mozzarela, salcë domatesh',
      it: 'Mozzarella, salsa di pomodoro',
      de: 'Mozzarella, Tomatensauce',
      fr: 'Mozzarella, sauce tomate'
    },
    'Ham': {
      sq: 'Mozzarela, salcë domatesh, proshutë',
      it: 'Mozzarella, salsa di pomodoro, prosciutto',
      de: 'Mozzarella, Tomatensauce, Schinken',
      fr: 'Mozzarella, sauce tomate, jambon'
    },
    'Salami': {
      sq: 'Mozzarela, salcë domatesh, sallam',
      it: 'Mozzarella, salsa di pomodoro, salame',
      de: 'Mozzarella, Tomatensauce, Salami',
      fr: 'Mozzarella, sauce tomate, salami'
    },
    'Ham & Salami': {
      sq: 'Mozzarela, salcë domatesh, proshutë, sallam',
      it: 'Mozzarella, salsa di pomodoro, prosciutto, salame',
      de: 'Mozzarella, Tomatensauce, Schinken, Salami',
      fr: 'Mozzarella, sauce tomate, jambon, salami'
    },
    'Spicy': {
      sq: 'Mozzarela, salcë domatesh, sallam pikant, speca',
      it: 'Mozzarella, salsa di pomodoro, salame piccante, peperoni',
      de: 'Mozzarella, Tomatensauce, pikante Salami, Paprika',
      fr: 'Mozzarella, sauce tomate, salami piquant, poivrons'
    },
    'Spicy Mushroom': {
      sq: 'Mozzarela, salcë domatesh, sallam pikant, kërpudha të freskëta',
      it: 'Mozzarella, salsa di pomodoro, salame piccante, funghi freschi',
      de: 'Mozzarella, Tomatensauce, pikante Salami, frische Pilze',
      fr: 'Mozzarella, sauce tomate, salami piquant, champignons frais'
    },
    'Wudy': {
      sq: 'Mozzarela, salcë domatesh, kremvicë',
      it: 'Mozzarella, salsa di pomodoro, würstel',
      de: 'Mozzarella, Tomatensauce, Würstchen',
      fr: 'Mozzarella, sauce tomate, saucisse'
    },
    'Wudy Fries': {
      sq: 'Mozzarela, salcë domatesh, kremvicë, patate',
      it: 'Mozzarella, salsa di pomodoro, würstel, patatine',
      de: 'Mozzarella, Tomatensauce, Würstchen, Pommes',
      fr: 'Mozzarella, sauce tomate, saucisse, frites'
    },
    'Four Cheese': {
      sq: 'Mozzarela, salcë domatesh, pana, grana, gorgonzola',
      it: 'Mozzarella, salsa di pomodoro, panna, grana, gorgonzola',
      de: 'Mozzarella, Tomatensauce, Sahne, Parmesan, Gorgonzola',
      fr: 'Mozzarella, sauce tomate, crème, parmesan, gorgonzola'
    },
    'Tuna': {
      sq: 'Mozzarela, salcë domatesh, ton, ullinj',
      it: 'Mozzarella, salsa di pomodoro, tonno, olive',
      de: 'Mozzarella, Tomatensauce, Thunfisch, Oliven',
      fr: 'Mozzarella, sauce tomate, thon, olives'
    },
    'Mushroom': {
      sq: 'Mozzarela, salcë domatesh, kërpudha të freskëta',
      it: 'Mozzarella, salsa di pomodoro, funghi freschi',
      de: 'Mozzarella, Tomatensauce, frische Pilze',
      fr: 'Mozzarella, sauce tomate, champignons frais'
    },
    'Tuna Mushroom': {
      sq: 'Salcë domatesh, mozzarela, ton, kërpudha',
      it: 'Salsa di pomodoro, mozzarella, tonno, funghi',
      de: 'Tomatensauce, Mozzarella, Thunfisch, Pilze',
      fr: 'Sauce tomate, mozzarella, thon, champignons'
    },
    'Four Seasons': {
      sq: 'Mozzarela, salcë domatesh, proshutë, sallam pikant, ton, kërpudha',
      it: 'Mozzarella, salsa di pomodoro, prosciutto, salame piccante, tonno, funghi',
      de: 'Mozzarella, Tomatensauce, Schinken, pikante Salami, Thunfisch, Pilze',
      fr: 'Mozzarella, sauce tomate, jambon, salami piquant, thon, champignons'
    },
    'Capricciosa': {
      sq: 'Mozzarela, salcë domatesh, proshutë, speca, ullinj, kërpudha',
      it: 'Mozzarella, salsa di pomodoro, prosciutto, peperoni, olive, funghi',
      de: 'Mozzarella, Tomatensauce, Schinken, Paprika, Oliven, Pilze',
      fr: 'Mozzarella, sauce tomate, jambon, poivrons, olives, champignons'
    },
    'Vegetarian': {
      sq: 'Mozzarela, salcë domatesh, kungull, ullinj, speca, kërpudha',
      it: 'Mozzarella, salsa di pomodoro, zucchine, olive, peperoni, funghi',
      de: 'Mozzarella, Tomatensauce, Zucchini, Oliven, Paprika, Pilze',
      fr: 'Mozzarella, sauce tomate, courgettes, olives, poivrons, champignons'
    },
    'Seafood': {
      sq: 'Mozzarela, salcë domatesh, fruta deti',
      it: 'Mozzarella, salsa di pomodoro, frutti di mare',
      de: 'Mozzarella, Tomatensauce, Meeresfrüchte',
      fr: 'Mozzarella, sauce tomate, fruits de mer'
    },
    'Sucuk Four Cheese': {
      sq: 'Salcë domatesh, mozzarela, suxhuk pikant, djathë i bardhë, gorgonzola, guda',
      it: 'Salsa di pomodoro, mozzarella, sucuk piccante, formaggio bianco, gorgonzola, gouda',
      de: 'Tomatensauce, Mozzarella, pikante Sucuk, Weißkäse, Gorgonzola, Gouda',
      fr: 'Sauce tomate, mozzarella, sucuk piquant, fromage blanc, gorgonzola, gouda'
    },
    'Carbonara': {
      sq: 'Mozzarela, proshutë, pana, vezë',
      it: 'Mozzarella, prosciutto, panna, uovo',
      de: 'Mozzarella, Schinken, Sahne, Ei',
      fr: 'Mozzarella, jambon, crème, œuf'
    },
    'Pizza Mix': {
      sq: 'Salcë domatesh, mozzarela, sallam, proshutë, suxhuk, ton, ullinj, kërpudha, speca',
      it: 'Salsa di pomodoro, mozzarella, salame, prosciutto, sucuk, tonno, olive, funghi, peperoni',
      de: 'Tomatensauce, Mozzarella, Salami, Schinken, Sucuk, Thunfisch, Oliven, Pilze, Paprika',
      fr: 'Sauce tomate, mozzarella, salami, jambon, sucuk, thon, olives, champignons, poivrons'
    },
    'Doner Pizza': {
      sq: 'Salcë domatesh, mozzarela, mish pule, patate',
      it: 'Salsa di pomodoro, mozzarella, pollo, patatine',
      de: 'Tomatensauce, Mozzarella, Hähnchen, Pommes',
      fr: 'Sauce tomate, mozzarella, poulet, frites'
    },
    'Pizza Ova': {
      sq: 'Salcë domatesh, mozzarela, suxhuk, pana, rukola, pomodorini',
      it: 'Salsa di pomodoro, mozzarella, sucuk, panna, rucola, pomodorini',
      de: 'Tomatensauce, Mozzarella, Sucuk, Sahne, Rucola, Kirschtomaten',
      fr: 'Sauce tomate, mozzarella, sucuk, crème, roquette, tomates cerises'
    },
    'American Pizza': {
      sq: 'Salcë domatesh, mozzarela, kremvicë, patate',
      it: 'Salsa di pomodoro, mozzarella, würstel, patatine',
      de: 'Tomatensauce, Mozzarella, Würstchen, Pommes',
      fr: 'Sauce tomate, mozzarella, saucisse, frites'
    },
    'Bruschetta Focaccia': {
      sq: 'Domate, djathë',
      it: 'Pomodoro, formaggio',
      de: 'Tomate, Käse',
      fr: 'Tomate, fromage'
    },
    'Calzone Ham': {
      sq: 'Mozzarela, salcë, proshutë',
      it: 'Mozzarella, salsa, prosciutto',
      de: 'Mozzarella, Sauce, Schinken',
      fr: 'Mozzarella, sauce, jambon'
    },
    'Calzone Ham & Mushroom': {
      sq: 'Mozzarela, salcë, proshutë, kërpudha',
      it: 'Mozzarella, salsa, prosciutto, funghi',
      de: 'Mozzarella, Sauce, Schinken, Pilze',
      fr: 'Mozzarella, sauce, jambon, champignons'
    },
    'Calzone Wudy': {
      sq: 'Mozzarela, salcë, sallam',
      it: 'Mozzarella, salsa, salame',
      de: 'Mozzarella, Sauce, Salami',
      fr: 'Mozzarella, sauce, salami'
    },
    'Calzone Spicy': {
      sq: 'Mozzarela, salcë, sallam pikant',
      it: 'Mozzarella, salsa, salame piccante',
      de: 'Mozzarella, Sauce, pikante Salami',
      fr: 'Mozzarella, sauce, salami piquant'
    },
    'Calzone Mix Salami': {
      sq: 'Mozzarela, salcë, sallam',
      it: 'Mozzarella, salsa, salame',
      de: 'Mozzarella, Sauce, Salami',
      fr: 'Mozzarella, sauce, salami'
    },
    'Calzone Tuna': {
      sq: 'Mozzarela, salcë, ton',
      it: 'Mozzarella, salsa, tonno',
      de: 'Mozzarella, Sauce, Thunfisch',
      fr: 'Mozzarella, sauce, thon'
    },
    'Calzone Seafood': {
      sq: 'Mozzarela, salcë, fruta deti',
      it: 'Mozzarella, salsa, frutti di mare',
      de: 'Mozzarella, Sauce, Meeresfrüchte',
      fr: 'Mozzarella, sauce, fruits de mer'
    },
    'Calzone Four Cheese': {
      sq: 'Mozzarela, salcë domatesh, djathë i bardhë, grana, gorgonzola',
      it: 'Mozzarella, salsa di pomodoro, formaggio bianco, grana, gorgonzola',
      de: 'Mozzarella, Tomatensauce, Weißkäse, Parmesan, Gorgonzola',
      fr: 'Mozzarella, sauce tomate, fromage blanc, parmesan, gorgonzola'
    },

    // ── Pasta ──
    'Linguini Seafood': {
      sq: 'Sepje, kallamar, karkalec, midhje, pomodorini, majdanoz',
      it: 'Seppie, calamari, gamberi, cozze, pomodorini, prezzemolo',
      de: 'Tintenfisch, Calamari, Garnelen, Muscheln, Kirschtomaten, Petersilie',
      fr: 'Seiche, calamars, crevettes, moules, tomates cerises, persil'
    },
    'Linguini Shrimp & Zucchini': {
      sq: 'Karkalec, kungull, pomodorini, majdanoz',
      it: 'Gamberi, zucchine, pomodorini, prezzemolo',
      de: 'Garnelen, Zucchini, Kirschtomaten, Petersilie',
      fr: 'Crevettes, courgettes, tomates cerises, persil'
    },
    'Pasta Bolognese': {
      sq: 'Mish i grirë, pomodorini, majdanoz',
      it: 'Carne macinata, pomodorini, prezzemolo',
      de: 'Hackfleisch, Kirschtomaten, Petersilie',
      fr: 'Viande hachée, tomates cerises, persil'
    },
    'Butter Pasta': {
      sq: 'Gjalp i freskët, majdanoz',
      it: 'Burro fresco, prezzemolo',
      de: 'Frische Butter, Petersilie',
      fr: 'Beurre frais, persil'
    },
    'Ravioli Truffle Cream': {
      sq: 'Pana, tartuf',
      it: 'Panna, tartufo',
      de: 'Sahne, Trüffel',
      fr: 'Crème, truffe'
    },
    'Ravioli Truffle Shrimp': {
      sq: 'Karkalec, pana, tartuf',
      it: 'Gamberi, panna, tartufo',
      de: 'Garnelen, Sahne, Trüffel',
      fr: 'Crevettes, crème, truffe'
    },
    'Risotto Seafood': {
      sq: 'Sepje, kallamar, karkalec, midhje, pomodorini, majdanoz',
      it: 'Seppie, calamari, gamberi, cozze, pomodorini, prezzemolo',
      de: 'Tintenfisch, Calamari, Garnelen, Muscheln, Kirschtomaten, Petersilie',
      fr: 'Seiche, calamars, crevettes, moules, tomates cerises, persil'
    },
    'Risotto Shrimp & Zucchini': {
      sq: 'Karkalec, kungull, pomodorini, majdanoz',
      it: 'Gamberi, zucchine, pomodorini, prezzemolo',
      de: 'Garnelen, Zucchini, Kirschtomaten, Petersilie',
      fr: 'Crevettes, courgettes, tomates cerises, persil'
    },
    'Risotto Shrimp & Saffron': {
      sq: 'Karkalec, pomodorini, shafran, majdanoz',
      it: 'Gamberi, pomodorini, zafferano, prezzemolo',
      de: 'Garnelen, Kirschtomaten, Safran, Petersilie',
      fr: 'Crevettes, tomates cerises, safran, persil'
    },
    'Simple Risotto': {
      sq: 'Oriz, pomodorini, shafran, majdanoz',
      it: 'Riso, pomodorini, zafferano, prezzemolo',
      de: 'Reis, Kirschtomaten, Safran, Petersilie',
      fr: 'Riz, tomates cerises, safran, persil'
    },

    // ── Burgers / Fast Food ──
    'Hamburger': {
      sq: 'Majonezë, xaxiq, qofte, sallatë jeshile, domate, kastravec, ketchup, mustardë',
      it: 'Maionese, tzatziki, hamburger, lattuga, pomodoro, cetriolo, ketchup, senape',
      de: 'Mayonnaise, Tzatziki, Frikadelle, Blattsalat, Tomate, Gurke, Ketchup, Senf',
      fr: 'Mayonnaise, tzatziki, steak haché, laitue, tomate, concombre, ketchup, moutarde'
    },
    'Cheese Burger': {
      sq: 'Salcë kosi, qofte e dyfishtë viçi, kastravec, domate, majonezë, ketchup, djathë, sallatë jeshile, patate',
      it: 'Salsa yogurt, doppio hamburger di manzo, cetriolo, pomodoro, maionese, ketchup, formaggio, lattuga, patatine',
      de: 'Joghurtsauce, doppeltes Rindfleisch-Patty, Gurke, Tomate, Mayonnaise, Ketchup, Käse, Blattsalat, Pommes',
      fr: 'Sauce yaourt, double steak de bœuf, concombre, tomate, mayonnaise, ketchup, fromage, laitue, frites'
    },
    'Barbeque Burger': {
      sq: 'Qofte e dyfishtë viçi, majonezë, djathë i bardhë, domate, patate, salcë BBQ',
      it: 'Doppio hamburger di manzo, maionese, formaggio bianco, pomodoro, patatine, salsa BBQ',
      de: 'Doppeltes Rindfleisch-Patty, Mayonnaise, Weißkäse, Tomate, Pommes, BBQ-Sauce',
      fr: 'Double steak de bœuf, mayonnaise, fromage blanc, tomate, frites, sauce BBQ'
    },
    'Big Best Burger': {
      sq: 'Salcë kosi, qofte e dyfishtë, domate, kastravec turshi, djathë i bardhë, patate',
      it: 'Salsa yogurt, doppio hamburger, pomodoro, cetriolo sottaceto, formaggio bianco, patatine',
      de: 'Joghurtsauce, doppeltes Patty, Tomate, Essiggurke, Weißkäse, Pommes',
      fr: 'Sauce yaourt, double steak, tomate, cornichon, fromage blanc, frites'
    },
    'Ova Burger': {
      sq: 'Salcë, sallatë jeshile, qofte e dyfishtë, misër, kastravec turshi, djathë i bardhë, djathë cedar, patate',
      it: 'Salsa, lattuga, doppio hamburger, mais, cetriolo sottaceto, formaggio bianco, cheddar, patatine',
      de: 'Sauce, Blattsalat, doppeltes Patty, Mais, Essiggurke, Weißkäse, Cheddar, Pommes',
      fr: 'Sauce, laitue, double steak, maïs, cornichon, fromage blanc, cheddar, frites'
    },
    'Souvlaki': {
      sq: 'Xaxiq, domate, kastravec, sallatë jeshile, mish, patate, ketchup, majonezë, mustardë',
      it: 'Tzatziki, pomodoro, cetriolo, lattuga, carne, patatine, ketchup, maionese, senape',
      de: 'Tzatziki, Tomate, Gurke, Blattsalat, Fleisch, Pommes, Ketchup, Mayonnaise, Senf',
      fr: 'Tzatziki, tomate, concombre, laitue, viande, frites, ketchup, mayonnaise, moutarde'
    },
    'Open Souvlaki': {
      sq: 'Xaxiq, majonezë, sallatë jeshile, qepë, kastravec, domate, mish, patate, ketchup',
      it: 'Tzatziki, maionese, lattuga, cipolla, cetriolo, pomodoro, carne, patatine, ketchup',
      de: 'Tzatziki, Mayonnaise, Blattsalat, Zwiebel, Gurke, Tomate, Fleisch, Pommes, Ketchup',
      fr: 'Tzatziki, mayonnaise, laitue, oignon, concombre, tomate, viande, frites, ketchup'
    },
    'Hot Dog': {
      sq: 'Xaxiq, majonezë, kremvicë, sallatë jeshile, domate, kastravec, qepë, patate, ketchup, mustardë',
      it: 'Tzatziki, maionese, würstel, lattuga, pomodoro, cetriolo, cipolla, patatine, ketchup, senape',
      de: 'Tzatziki, Mayonnaise, Würstchen, Blattsalat, Tomate, Gurke, Zwiebel, Pommes, Ketchup, Senf',
      fr: 'Tzatziki, mayonnaise, saucisse, laitue, tomate, concombre, oignon, frites, ketchup, moutarde'
    },
    'Doner': {
      sq: 'Majonezë, xaxiq, sallatë jeshile, domate, kastravec, qepë, mish, patate, ketchup, mustardë',
      it: 'Maionese, tzatziki, lattuga, pomodoro, cetriolo, cipolla, carne, patatine, ketchup, senape',
      de: 'Mayonnaise, Tzatziki, Blattsalat, Tomate, Gurke, Zwiebel, Fleisch, Pommes, Ketchup, Senf',
      fr: 'Mayonnaise, tzatziki, laitue, tomate, concombre, oignon, viande, frites, ketchup, moutarde'
    },
    'Club Sandwich': {
      sq: '3 bukë tosti, xaxiq, majonezë, djathë guda, proshutë, sallatë jeshile, domate',
      it: '3 pane tostato, tzatziki, maionese, gouda, prosciutto, lattuga, pomodoro',
      de: '3 Toastbrot, Tzatziki, Mayonnaise, Gouda, Schinken, Blattsalat, Tomate',
      fr: '3 pains toastés, tzatziki, mayonnaise, gouda, jambon, laitue, tomate'
    },
    'Shawarma (Kebab)': {
      sq: 'Sallatë jeshile, kastravec, domate, patate, mish pule, salcë kosi, majonezë, ketchup',
      it: 'Lattuga, cetriolo, pomodoro, patatine, pollo, salsa yogurt, maionese, ketchup',
      de: 'Blattsalat, Gurke, Tomate, Pommes, Hähnchen, Joghurtsauce, Mayonnaise, Ketchup',
      fr: 'Laitue, concombre, tomate, frites, poulet, sauce yaourt, mayonnaise, ketchup'
    },

    // ── Sandwiches ──
    'Beef Ham Sandwich': {
      sq: 'Mozzarela, proshutë, domate, kastravec, majonezë',
      it: 'Mozzarella, prosciutto, pomodoro, cetriolo, maionese',
      de: 'Mozzarella, Schinken, Tomate, Gurke, Mayonnaise',
      fr: 'Mozzarella, jambon, tomate, concombre, mayonnaise'
    },
    'Salami Sandwich': {
      sq: 'Mozzarela, sallam, domate, kastravec, majonezë',
      it: 'Mozzarella, salame, pomodoro, cetriolo, maionese',
      de: 'Mozzarella, Salami, Tomate, Gurke, Mayonnaise',
      fr: 'Mozzarella, salami, tomate, concombre, mayonnaise'
    },
    'Spicy Sandwich': {
      sq: 'Mozzarela, sallam pikant, speca, domate, kastravec, majonezë',
      it: 'Mozzarella, salame piccante, peperoni, pomodoro, cetriolo, maionese',
      de: 'Mozzarella, pikante Salami, Paprika, Tomate, Gurke, Mayonnaise',
      fr: 'Mozzarella, salami piquant, poivrons, tomate, concombre, mayonnaise'
    },
    'Tuna Sandwich': {
      sq: 'Mozzarela, ton, ullinj, domate, kastravec, majonezë',
      it: 'Mozzarella, tonno, olive, pomodoro, cetriolo, maionese',
      de: 'Mozzarella, Thunfisch, Oliven, Tomate, Gurke, Mayonnaise',
      fr: 'Mozzarella, thon, olives, tomate, concombre, mayonnaise'
    },
    'Mix Sandwich': {
      sq: 'Mozzarela, sallam pikant, proshutë, sallam, ullinj, domate, kastravec, majonezë, ton, kërpudha, speca',
      it: 'Mozzarella, salame piccante, prosciutto, salame, olive, pomodoro, cetriolo, maionese, tonno, funghi, peperoni',
      de: 'Mozzarella, pikante Salami, Schinken, Salami, Oliven, Tomate, Gurke, Mayonnaise, Thunfisch, Pilze, Paprika',
      fr: 'Mozzarella, salami piquant, jambon, salami, olives, tomate, concombre, mayonnaise, thon, champignons, poivrons'
    },
    'Vegetarian Sandwich': {
      sq: 'Mozzarela, speca, ullinj, domate, kastravec, majonezë, kërpudha, kungull',
      it: 'Mozzarella, peperoni, olive, pomodoro, cetriolo, maionese, funghi, zucchine',
      de: 'Mozzarella, Paprika, Oliven, Tomate, Gurke, Mayonnaise, Pilze, Zucchini',
      fr: 'Mozzarella, poivrons, olives, tomate, concombre, mayonnaise, champignons, courgettes'
    },
    'Fries Sandwich': {
      sq: 'Mozzarela, proshutë, patate, ullinj, domate, kastravec, majonezë',
      it: 'Mozzarella, prosciutto, patatine, olive, pomodoro, cetriolo, maionese',
      de: 'Mozzarella, Schinken, Pommes, Oliven, Tomate, Gurke, Mayonnaise',
      fr: 'Mozzarella, jambon, frites, olives, tomate, concombre, mayonnaise'
    },
    'Village Sandwich': {
      sq: 'Salcë kosi, speca, ullinj, domate, kastravec, djathë i bardhë',
      it: 'Salsa yogurt, peperoni, olive, pomodoro, cetriolo, formaggio bianco',
      de: 'Joghurtsauce, Paprika, Oliven, Tomate, Gurke, Weißkäse',
      fr: 'Sauce yaourt, poivrons, olives, tomate, concombre, fromage blanc'
    },
    'Wudy Sandwich': {
      sq: 'Mozzarela, kremvicë, ullinj, domate, kastravec, majonezë',
      it: 'Mozzarella, würstel, olive, pomodoro, cetriolo, maionese',
      de: 'Mozzarella, Würstchen, Oliven, Tomate, Gurke, Mayonnaise',
      fr: 'Mozzarella, saucisse, olives, tomate, concombre, mayonnaise'
    },
    'Four Cheese Sandwich': {
      sq: 'Mozzarela, domate, kastravec, speca, pana, grana, gorgonzola',
      it: 'Mozzarella, pomodoro, cetriolo, peperoni, panna, grana, gorgonzola',
      de: 'Mozzarella, Tomate, Gurke, Paprika, Sahne, Parmesan, Gorgonzola',
      fr: 'Mozzarella, tomate, concombre, poivrons, crème, parmesan, gorgonzola'
    },
    'Chicken Ham Sandwich': {
      sq: 'Mozzarela, proshutë pule, domate, kastravec, majonezë',
      it: 'Mozzarella, prosciutto di pollo, pomodoro, cetriolo, maionese',
      de: 'Mozzarella, Hähnchenschinken, Tomate, Gurke, Mayonnaise',
      fr: 'Mozzarella, jambon de poulet, tomate, concombre, mayonnaise'
    },
    'Ova Sandwich': {
      sq: 'Salcë kosi, sallatë jeshile, domate, kastravec, mish, patate',
      it: 'Salsa yogurt, lattuga, pomodoro, cetriolo, carne, patatine',
      de: 'Joghurtsauce, Blattsalat, Tomate, Gurke, Fleisch, Pommes',
      fr: 'Sauce yaourt, laitue, tomate, concombre, viande, frites'
    },

    // ── Desserts ──
    'Nutella Banana Crepe': {
      sq: 'Nutella, banane',
      it: 'Nutella, banana',
      de: 'Nutella, Banane',
      fr: 'Nutella, banane'
    },
    'Lidia Crepe': {
      sq: 'Nutella, banane, biskotë',
      it: 'Nutella, banana, biscotto',
      de: 'Nutella, Banane, Keks',
      fr: 'Nutella, banane, biscuit'
    },
    'Kiwi Crepe': {
      sq: 'Nutella, kivi, biskotë',
      it: 'Nutella, kiwi, biscotto',
      de: 'Nutella, Kiwi, Keks',
      fr: 'Nutella, kiwi, biscuit'
    },
    'Cherry Crepe': {
      sq: 'Reçel qershie',
      it: 'Marmellata di ciliegie',
      de: 'Kirschmarmelade',
      fr: 'Confiture de cerises'
    },
    'Bounty Crepe': {
      sq: 'Çokollatë e bardhë, arrë kokosi',
      it: 'Cioccolato bianco, cocco',
      de: 'Weiße Schokolade, Kokosnuss',
      fr: 'Chocolat blanc, noix de coco'
    },
    'Rafaello Crepe': {
      sq: 'Çokollatë e bardhë, arrë kokosi, lajthi',
      it: 'Cioccolato bianco, cocco, nocciole',
      de: 'Weiße Schokolade, Kokosnuss, Nüsse',
      fr: 'Chocolat blanc, noix de coco, noisettes'
    },
    'Oreo Crepe': {
      sq: 'Nutella, Oreo, banane',
      it: 'Nutella, Oreo, banana',
      de: 'Nutella, Oreo, Banane',
      fr: 'Nutella, Oreo, banane'
    },
    'Dubai Crepe': {
      sq: 'Nutella, pistachio, kadaif, shurup pistachio',
      it: 'Nutella, pistacchio, kunafa, sciroppo di pistacchio',
      de: 'Nutella, Pistazie, Kunafa, Pistaziensirup',
      fr: 'Nutella, pistache, kunafa, sirop de pistache'
    },
    'Village Crepe (Savory)': {
      sq: 'Krem djathi, proshutë pule, mozzarela, ullinj, speca, domate',
      it: 'Crema di formaggio, prosciutto di pollo, mozzarella, olive, peperoni, pomodori',
      de: 'Frischkäse, Hähnchenschinken, Mozzarella, Oliven, Paprika, Tomaten',
      fr: 'Fromage à la crème, jambon de poulet, mozzarella, olives, poivrons, tomates'
    },
    'Caesar Crepe (Savory)': {
      sq: 'Krem djathi, proshutë pule, mozzarela, salcë Cezar, sallatë',
      it: 'Crema di formaggio, prosciutto di pollo, mozzarella, salsa Caesar, insalata',
      de: 'Frischkäse, Hähnchenschinken, Mozzarella, Caesar-Sauce, Salat',
      fr: 'Fromage à la crème, jambon de poulet, mozzarella, sauce César, salade'
    },
    'The Chockoloco Waffle': {
      sq: 'Nutella, arra, shurup çokollate, shllak',
      it: 'Nutella, noci, sciroppo di cioccolato, panna montata',
      de: 'Nutella, Walnüsse, Schokoladensirup, Schlagsahne',
      fr: 'Nutella, noix, sirop de chocolat, crème fouettée'
    },
    'Tutti Frutti Waffle': {
      sq: 'Nutella, luleshtrydhe, banane, kivi, arra, shurup çokollate, shllak',
      it: 'Nutella, fragole, banana, kiwi, noci, sciroppo di cioccolato, panna montata',
      de: 'Nutella, Erdbeeren, Banane, Kiwi, Walnüsse, Schokoladensirup, Schlagsahne',
      fr: 'Nutella, fraises, banane, kiwi, noix, sirop de chocolat, crème fouettée'
    },
    'Biscuit Cream Waffle': {
      sq: 'Krem biskotash, reçel qershie, arra, shurup çokollate',
      it: 'Crema biscotto, marmellata di ciliegie, noci, sciroppo di cioccolato',
      de: 'Biskuitcreme, Kirschmarmelade, Walnüsse, Schokoladensirup',
      fr: 'Crème de biscuit, confiture de cerises, noix, sirop de chocolat'
    },
    'Tropical Waffle': {
      sq: 'Arrë kokosi, ananas, shurup tropikali, shllak',
      it: 'Cocco, ananas, sciroppo tropicale, panna montata',
      de: 'Kokosnuss, Ananas, Tropensirup, Schlagsahne',
      fr: 'Noix de coco, ananas, sirop tropical, crème fouettée'
    },
    'Ying Yang Waffle': {
      sq: 'Shurup çokollate, luleshtrydhe, arra, shllak, akullore',
      it: 'Sciroppo di cioccolato, fragole, noci, panna montata, gelato',
      de: 'Schokoladensirup, Erdbeeren, Walnüsse, Schlagsahne, Eiscreme',
      fr: 'Sirop de chocolat, fraises, noix, crème fouettée, glace'
    },
    'Simple Fruits Waffle': {
      sq: 'Luleshtrydhe, banane, shllak, bajame, arra, shurup çokollate',
      it: 'Fragole, banana, panna montata, mandorle, noci, sciroppo di cioccolato',
      de: 'Erdbeeren, Banane, Schlagsahne, Mandeln, Walnüsse, Schokoladensirup',
      fr: 'Fraises, banane, crème fouettée, amandes, noix, sirop de chocolat'
    },
    'Costa Rica Waffle': {
      sq: 'Banane, shllak, arra, shurup çokollate',
      it: 'Banana, panna montata, noci, sciroppo di cioccolato',
      de: 'Banane, Schlagsahne, Walnüsse, Schokoladensirup',
      fr: 'Banane, crème fouettée, noix, sirop de chocolat'
    },
    'House Special Waffle': {
      sq: 'Nutella, luleshtrydhe, banane, shllak, akullore',
      it: 'Nutella, fragole, banana, panna montata, gelato',
      de: 'Nutella, Erdbeeren, Banane, Schlagsahne, Eiscreme',
      fr: 'Nutella, fraises, banane, crème fouettée, glace'
    },
    'Apple Waffle': {
      sq: 'Mollë, arra, shllak, shurup çokollate, krem pastiçerie',
      it: 'Mela, noci, panna montata, sciroppo di cioccolato, crema pasticcera',
      de: 'Apfel, Walnüsse, Schlagsahne, Schokoladensirup, Vanillecreme',
      fr: 'Pomme, noix, crème fouettée, sirop de chocolat, crème pâtissière'
    },
    'Bumble Bee Waffle': {
      sq: 'Mjaltë, arra, akullore',
      it: 'Miele, noci, gelato',
      de: 'Honig, Walnüsse, Eiscreme',
      fr: 'Miel, noix, glace'
    },
    'Waffle Madness': {
      sq: 'Çokollatë e bardhë, luleshtrydhe, arra',
      it: 'Cioccolato bianco, fragole, noci',
      de: 'Weiße Schokolade, Erdbeeren, Walnüsse',
      fr: 'Chocolat blanc, fraises, noix'
    },
    'Cheesecake Waffle': {
      sq: 'Filadelfia, biskotë, reçel qershie, akullore',
      it: 'Philadelphia, biscotto, marmellata di ciliegie, gelato',
      de: 'Philadelphia, Keks, Kirschmarmelade, Eiscreme',
      fr: 'Philadelphia, biscuit, confiture de cerises, glace'
    },
    'Dubai Waffle': {
      sq: 'Nutella, kadaif, pistachio, krem pistachio',
      it: 'Nutella, kunafa, pistacchio, crema di pistacchio',
      de: 'Nutella, Kunafa, Pistazie, Pistaziencreme',
      fr: 'Nutella, kunafa, pistache, crème de pistache'
    },
    'Oreo Waffle': {
      sq: 'Nutella, banane, Oreo, akullore',
      it: 'Nutella, banana, Oreo, gelato',
      de: 'Nutella, Banane, Oreo, Eiscreme',
      fr: 'Nutella, banane, Oreo, glace'
    },

    // ── Drinks ──
    'B52': { sq: 'Pije Energjike', it: 'Bevanda Energetica', de: 'Energy-Drink', fr: 'Boisson Énergétique' },
    'Golden Eagle': { sq: 'Pije Energjike', it: 'Bevanda Energetica', de: 'Energy-Drink', fr: 'Boisson Énergétique' },
    'Red Bull': { sq: 'Pije Energjike', it: 'Bevanda Energetica', de: 'Energy-Drink', fr: 'Boisson Énergétique' },
    'Red Bull Summer': { sq: 'Pije Energjike', it: 'Bevanda Energetica', de: 'Energy-Drink', fr: 'Boisson Énergétique' },
    'Red Bull Bottle': { sq: 'Pije Energjike', it: 'Bevanda Energetica', de: 'Energy-Drink', fr: 'Boisson Énergétique' },
    'Heineken': { sq: 'Birrë — Pa Alkool', it: 'Birra — Analcolica', de: 'Bier — Alkoholfrei', fr: 'Bière — Sans Alcool' },
    'Bavaria': { sq: 'Birrë — Pa Alkool', it: 'Birra — Analcolica', de: 'Bier — Alkoholfrei', fr: 'Bière — Sans Alcool' },
    'Lussory': { sq: 'Verë — Pa Alkool', it: 'Vino — Analcolico', de: 'Wein — Alkoholfrei', fr: 'Vin — Sans Alcool' },
    'Schloss Somerau': { sq: 'Verë — Pa Alkool', it: 'Vino — Analcolico', de: 'Wein — Alkoholfrei', fr: 'Vin — Sans Alcool' },
    'Champagne': { sq: 'Pa Alkool', it: 'Analcolico', de: 'Alkoholfrei', fr: 'Sans Alcool' },
    'Daily Juice': {
      sq: 'Portokall, mollë, banane',
      it: 'Arancia, mela, banana',
      de: 'Orange, Apfel, Banane',
      fr: 'Orange, pomme, banane'
    },
    'Pick Me Up': {
      sq: 'Mjedër, banane',
      it: 'Lampone, banana',
      de: 'Himbeere, Banane',
      fr: 'Framboise, banane'
    },
    'Stress Down': {
      sq: 'Mollë, luleshtrydhe, banane, mendër',
      it: 'Mela, fragola, banana, menta',
      de: 'Apfel, Erdbeere, Banane, Minze',
      fr: 'Pomme, fraise, banane, menthe'
    },
    'Recovery Juice': {
      sq: 'Mollë, kastravec, limon',
      it: 'Mela, cetriolo, limone',
      de: 'Apfel, Gurke, Zitrone',
      fr: 'Pomme, concombre, citron'
    },
    'Green Life': {
      sq: 'Mollë, ananas, spinaq',
      it: 'Mela, ananas, spinaci',
      de: 'Apfel, Ananas, Spinat',
      fr: 'Pomme, ananas, épinards'
    },
    'Ginger Shot': {
      sq: 'Mollë, xhenxhefil',
      it: 'Mela, zenzero',
      de: 'Apfel, Ingwer',
      fr: 'Pomme, gingembre'
    },
    'Ginger Sensation': {
      sq: 'Mollë, xhenxhefil, mendër',
      it: 'Mela, zenzero, menta',
      de: 'Apfel, Ingwer, Minze',
      fr: 'Pomme, gingembre, menthe'
    },
    'Juice of Life': {
      sq: 'Mollë, portokall, karotë, panxhar',
      it: 'Mela, arancia, carota, barbabietola',
      de: 'Apfel, Orange, Karotte, Rote Bete',
      fr: 'Pomme, orange, carotte, betterave'
    },
    'Energy': {
      sq: 'Portokall, limë, citron',
      it: 'Arancia, lime, cedro',
      de: 'Orange, Limette, Zitrone',
      fr: 'Orange, citron vert, cédrat'
    },
    'On Your Mark': {
      sq: 'Mollë, avokado, limë, kos, mjaltë',
      it: 'Mela, avocado, lime, yogurt, miele',
      de: 'Apfel, Avocado, Limette, Joghurt, Honig',
      fr: 'Pomme, avocat, citron vert, yaourt, miel'
    },
    'Raspberry Glow': {
      sq: 'Mollë, kos, mjedër, mjaltë, vanilje',
      it: 'Mela, yogurt, lampone, miele, vaniglia',
      de: 'Apfel, Joghurt, Himbeere, Honig, Vanille',
      fr: 'Pomme, yaourt, framboise, miel, vanille'
    },
    'Tropical': {
      sq: 'Banane, mango, ananas, lëng portokalli, mjaltë',
      it: 'Banana, mango, ananas, succo d\'arancia, miele',
      de: 'Banane, Mango, Ananas, Orangensaft, Honig',
      fr: 'Banane, mangue, ananas, jus d\'orange, miel'
    }
  }
};
