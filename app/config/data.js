
import imageLoc from './imagesLocation'; 

export default [  
    {
        id: 1,
        title: "EGG PERFECTLY BOILED",
        subtitle: "1 ingredient, 2 utensils, 10 minutes, 1 slice",
        image: imageLoc.R1,
        ingredients:[
            {
                id:1,
                text: "2 eggs from the fridge"
            },
        ],       
        ustensile: [
            {
                id:1,
                text:"pot with lid",
            },
            {
                id:2,
                text:"the egg must touch the bottom",
            },
            {
                id:3,
                text:"if you want to cook more eggs, make sure the pot is big enough",
            },
            {
                id:4,
                text: "spoon with holes",
            }
        ],
        imaginiUstensile: [
            {
                id:1,
                image:imageLoc.oala_pe_foc_inchisa,
            },
            {
                id:2,
                image:imageLoc.lingura_cu_gauri,
            }
        ],
        totalTime:"Total time: 10 minutes",
        steps: [

            {
                text:"Prepare the utensils!",
                image: [
                    {
                        id:1,
                        image:imageLoc.oala_pe_foc_inchisa,
                    },
                    {
                        id:2,
                        image:imageLoc.lingura_cu_gauri,
                    }
                ],
                statusImage : imageLoc.step1,
                time: 0,               
            },
            {
                
                text:"Put 1 inch of water in the pot and put the lid on!",
                image:[{
                    id:1,
                    image: imageLoc.oala_cu_apa,
                },],
                statusImage : imageLoc.step2,
                time: 0,
            },
            {
                
                text:"Start the fire, boil the water.",
                image:[{
                    id:1,
                    image: imageLoc.oala_cu_apa_fierband,
                },],
                statusImage : imageLoc.step3,
                time: 600000,
            },
            {
                
                text:"Take the eggs directly from the fridge and put them in the pot. Put the lid back.",
                image:[{
                    id:1,
                    image: imageLoc.oala_cu_apa_fierband,
                },],
                statusImage : imageLoc.step5,
                time: 0,
            },
            {
                
                text:"Press Start and let them boil!",
                image:[{
                    id:1,
                    image: imageLoc.oala_cu_apa_fierband,
                },],
                statusImage : imageLoc.step6,
                time: 360000,
            },
            {
                
                text:"Take them out with the spoon!",
                image:[{
                    id:1,
                    image: imageLoc.lingura_cu_gauri,
                },],
                statusImage : imageLoc.step8,
                time: 0,
            },
            {
                
                text:"Cool them under a stream of cold water. 1 egg at a time.\n Cool the first one!",
                image:[{
                    id:1,
                    image: imageLoc.robinet,
                },],
                statusImage : imageLoc.step9,
                time: 7000,
            },
            {
                
                text:"Now the second one",
                image:[{
                    id:1,
                    image: imageLoc.robinet,
                },],
                statusImage : imageLoc.step10,
                time: 7000,
            },                                 
     
        ]
        
    } ,
    {
        id: 2,
        title: "EGGS WITH TOMATOES",
        subtitle: "6 ingredients, 5 utensils, 35 minutes, 1 slice,",
        image: imageLoc.R2,
        ingredients:[
            {
                id:1,
                text:"2 chiken eggs",
            },
            {
                id:2,
                text:"2 tomatoes",
            },
            {
                id:3,
                text:"50g mozzarella",
            },
            {
                id:4,
                text:"green onion(how much you like)",
            },
            {
                id:5,
                text:"cheese",
            },
            {
                id:6,
                text:"olive oil",
            },
            {
                id:7,
                text:"mayonnaise",
            },
            {
                id:8,
                text:"salt",
            },
            {
                id:9,
                text:"paper",
            },
        ],
        ustensile:[
            {
                id:1,
                text: "knife",
            },
            {
                id:2,
                text: "oven tray",
            },
            {
                id:3,
                text: "oven",
            },
            {
                id:4,
                text: "chipper",
            },
            {
                id:5,
                text: "spoon",
            },
        ], 
        imaginiUstensile:[
            {
                id:1,
                image: imageLoc.tava,
            },
            {
                id:2,
                image: imageLoc.cuptor_microunde,
             },
             {
                id:3,
                image: imageLoc.fund,
             },
             {
                id:4,
                image: imageLoc.razatoare,
             },
             {
                id:5,
                image: imageLoc.lingura,
             },
             {
                id:6,
                image: imageLoc.cutit,
             },
        ],
        totalTime:"Total time: 35 minutes",
        steps: [
            {
                text:"Prepare the utensils!",              
                image:[
                    {
                        id:1,
                        image: imageLoc.tava,
                    },
                    {
                        id:2,
                        image: imageLoc.cuptor_microunde,
                     },
                     {
                        id:3,
                        image: imageLoc.fund,
                     },
                     {
                        id:4,
                        image: imageLoc.razatoare,
                     },
                     {
                        id:5,
                        image: imageLoc.lingura,
                     },
                     {
                        id:6,
                        image: imageLoc.cutit,
                     },
                ],
                statusImage : imageLoc.step1,
                time: 0,
            },
            {
                text:"Cut the green onion and the mozzarella.",
                image:[{
                    id:1,
                    image: imageLoc.fund,
                },],
                statusImage : imageLoc.step2,
                time: 0,
            },
            {
                text:"Rade the cheese (how much you like)",
                image:[{
                    id:1,
                    image: imageLoc.razatoare,
                },],
                statusImage : imageLoc.step3,
                time: 0,
            },
            {
                text:"Cut the tomatoes",
                image:[{
                    id:1,
                    image: imageLoc.rosie_taiata,
                },],
                statusImage : imageLoc.step4,
                time: 0,
            },
            {
                text:"Empty the tomatoes with the spoon",
                image:[{
                    id:1,
                    image: imageLoc.lingura,
                },],
                statusImage : imageLoc.step5,
                time: 0,
            },
            {
                text:"Put mozzarella and green onions in tomatos, in this order",
                image:[{
                    id:1,
                    image: imageLoc.waiting_egg,
                },],
                statusImage : imageLoc.step6,
                time: 0,
            },
            {
                text:"Now take the eggs from the fridge. Put them in tomatoes.\nOne egg for each tomato.\nHere you can put how much salt, paper or mayonnaise you like",
                image:[{
                    id:1,
                    image: imageLoc.ou_spart,
                },],
                statusImage : imageLoc.step7,
                time: 0,
            },
            {
                text:"Put some cheese over the eggs",
                image:[{
                    id:1,
                    image: imageLoc.razatoare,
                },],
                statusImage : imageLoc.step8,
                time: 0,
            },
            
            {
                text:"Grease the tray with olive oil and put the tomatoes in it.\nYou can put the piece of tomato initially removed under our tomato",
                image:[{
                    id:1,
                    image: imageLoc.tava,
                },],
                statusImage : imageLoc.step9,
                time: 0,
            },
            {
                text:"Put the tomatoes in the oven at 200 C (392 F) and let the time drain",
                image:[{
                    id:1,
                    image: imageLoc.cuptor_microunde,
                },],
                statusImage : imageLoc.step10,
                time: 1500000,
            },
        ]
    } ,
    {
        id: 3,
        title: "EGGS WITH OAT",
        subtitle: "8 ingredients, 6 utensils, 10 minutes, 2 slice",
        image: imageLoc.R3,
        ingredients:[
            {
                id:1,
                text:"85g oat",
            },
            {
                id:2,
                text:"200ml of milk",
            },
            {
                id:3,
                text:"2 eggs",
            },
            {
                id:4,
                text:"1 spoon of cheese",
            },
            {
                id:5,
                text:"caraway",
            },
            {
                id:6,
                text:"black pepper",
            },
            {
                id:7,
                text:"salt",
            },
            {
                id:8,
                text:"oil",
            },

        ],
        ustensile:[
            {
                id:1,
                text:"spoon",
            },
            {
                id:2,
                text:"pallet",
            },
            {
                id:3,
                text:"pan and lid",
            },
            {
                id:4,
                text:"bowl",
            },
            {
                id:5,
                text:"whisk",
            },
        ],
        imaginiUstensile:[
            {
                id:1,
                image: imageLoc.tigaie_pe_foc_inchisa,
            },
            {
                id:2,
                image: imageLoc.vas_de_masurat,
             },
             {
                id:3,
                image: imageLoc.paleta,
             },
             {
                id:4,
                image: imageLoc.bol,
             },
             {
                id:5,
                image: imageLoc.tel,
             },
             {
                id:6,
                image: imageLoc.cutit,
             },
        ],
        totalTime:"Total time: 10 minutes",
        steps: [
            {             
                text:"Prepare the utensils",
                image:[
                    {
                        id:1,
                        image: imageLoc.tigaie_pe_foc_inchisa,
                    },
                    {
                        id:2,
                        image: imageLoc.vas_de_masurat,
                     },
                     {
                        id:3,
                        image: imageLoc.paleta,
                     },
                     {
                        id:4,
                        image: imageLoc.bol,
                     },
                     {
                        id:5,
                        image: imageLoc.tel,
                     },
                     {
                        id:6,
                        image: imageLoc.cutit,
                     },
                ],
                statusImage : imageLoc.step1,
                time: 0,
            },
            {
                text:"Put the oat in the bowl, after the milk. Mix a little",
                image:[{
                    id:1,
                    image: imageLoc.bol,
                },],
                statusImage : imageLoc.step2,
                time: 0,
            },
            {
                text:"Leave to soak",
                image:[{
                    id:1,
                    image: imageLoc.bol,
                },],
                statusImage : imageLoc.step3,
                time: 120000,
            },
            {
                text:"Now add:\n-2 chiken eggs\n-1 big spoon of cheese\n-little dark papper and salt\n-1/2 spoon of caraway",
                image:[{
                    id:1,
                    image: imageLoc.bol,
                },],
                statusImage : imageLoc.step4,
                time: 0,
            },
            {
                text:"Press Done\nMix until smooth",
                image:[{
                    id:1,
                    image: imageLoc.tel,
                },],
                statusImage : imageLoc.step5,
                time: 60000,
            },
            {
                text:"Take the pan. Put 1 spoon of olive oil and grease the pan. Light the fire and let the oil heat up",
                image:[{
                    id:1,
                    image: imageLoc.tigaie_pe_foc,
                },],
                statusImage : imageLoc.step6,
                time: 30000,
            },
            {
                text:"Put the composition in the pan. Put the lid on",
                image:[{
                    id:1,
                    image: imageLoc.tigaie_pe_foc_inchisa,
                },],
                statusImage : imageLoc.step7,
                time: 0,
            },
            {
                text:"Cook over low heat. Do not lift the lid",
                image:[{
                    id:1,
                    image: imageLoc.tigaie_pe_foc_inchisa,
                },],
                statusImage : imageLoc.step8,
                time: 210000,
            },
            
            {
                text:"Take the lid, turn the composition and put the lid back.",
                image:[{
                    id:1,
                    image: imageLoc.paleta,
                },],
                statusImage : imageLoc.step9,
                time: 60000,
            },
            {
                text:"Take it out!",
                image:[{
                    id:1,
                    image: imageLoc.tigaie_pe_foc,
                },],
                statusImage : imageLoc.step10,
                time: 0,
            },
        ]
    } ,
    {
        id: 4,
        title: "EGG CAKE",
        subtitle: "4 ingredients, 4 utensils, 12 minutes, 3 slice",
        image: imageLoc.R3,
        ingredients:[
            {
                id:1,
                text: "5 chicken eggs",
            },
            {
                id:2,
                text: "butter/oil",
            },
            {
                id:3,
                text: "salt",
            },
            {
                id:4,
                text: "sugar",
            },
            {
                id:5,
                text: "sweet sauce: honey is the best",
            },
        ],
        ustensile:[
            {
                id:1,
                text:"pan and lid",
            },
            {
                id:2,
                text:"2 bowls",
            },
            {
                id:1,
                text:"whisk",
            },
            {
                id:1,
                text:"pallet",
            },
            {
                id:1,
                text:"mixer",
            },
        ],
        imaginiUstensile:[
            {
                id:1,
                image: imageLoc.tigaie_pe_foc_inchisa,
            },
            {
                id:2,
                image:imageLoc.bol,
             },
             {
                id:3,
                image: imageLoc.paleta,
             },
             {
                id:4,
                image: imageLoc.tel,
             },
             {
                id:5,
                image: imageLoc.mixer,
             },
        ],
        totalTime:"12 minutes",
        steps: [
            {               
                text:"Prepare the utensils",
                image:[
                    {
                        id:1,
                        image: imageLoc.tigaie_pe_foc_inchisa,
                    },
                    {
                        id:2,
                        image:imageLoc.bol,
                     },
                     {
                        id:3,
                        image: imageLoc.paleta,
                     },
                     {
                        id:4,
                        image: imageLoc.tel,
                     },
                     {
                        id:5,
                        image: imageLoc.mixer,
                     },
                ],
                statusImage : imageLoc.step1,
                time: 0,
            },
            {
                text:"Break 5 eggs and separate the glair from the yolk. We need both",
                image:[{
                    id:1,
                    image: imageLoc.tigaie_pe_foc_inchisa,
                },],
                statusImage : imageLoc.step2,
                time: 60000,
            },
            {
                text:"Take the yolks. Put some salt and mix until smooth",
                image:[
                    {
                        id:1,
                        image:imageLoc.tel,
                    },
                ],
                
                statusImage : imageLoc.step3,
                time: 60000,
            },
            {
                text:"Take the glairs. Mix until frothy",
                image:[{
                    id:1,
                    image:imageLoc.mixer,
                }],
                statusImage : imageLoc.step4,
                time: 60000,
            },
            {
                text:"Add 2 spoons of sugar in the glairs and mix a bit",
                image:[
                    {
                        id:1,
                        image:imageLoc.lingura,
                    },
                ],
                statusImage : imageLoc.step5,
                time: 0,
            },
            {
                text:"Add 2 spoons of sugar in the yolks and mix a bit",
                image:[
                    {
                        id:1,
                        image:imageLoc.mixer,
                    },
                ],
                statusImage : imageLoc.step6,
                time: 0,
            },
            {
                text:"Grease the pan with butter/oil and light the fire. Let it heat up",
                image:[
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc,
                    },
                ],
                statusImage : imageLoc.step7,
                time: 60000,
            },
            {
                text:"Put the yolks in pan and wait.",
                image:[
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc,
                    },
                ],
                statusImage : imageLoc.step8,
                time: 60000,
            },
            
            {
                text:"Put the glairs. Arrange the egg whites nicely in the pan so that there are no free spaces and do not touch the pan.\nPut the lid on, press Start and wait",
                image:[
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc_inchisa,
                    },
                ],
                statusImage : imageLoc.step9,
                time: 300000,
            },
            {
                text:"Stop the fire.\nCarefully put everything on a fairly large plate.\nYou can tilt the pan so that the cake does not break",
                image:[
                    {
                        id:1,
                        image:imageLoc.waiting_egg,
                    },
                ],
                statusImage : imageLoc.step10,
                time: 0,
            },
            {
                text:"Cut the cake in half and place the halves on top of each other.\nTake the sweet sauce and enjoy your meal!",
                image:[
                    {
                        id:1,
                        image:imageLoc.waiting_egg,
                    },
                ],
                statusImage : imageLoc.step10,
                time: 0,
            },
        ]
    } ,
    {
        id: 5,
        title: "EGG CANDY",
        subtitle: "4 ingredients, 4 utensils, 6 minutes, 1 slice",
        image: imageLoc.R5,
        ingredients:[
            {
                id:1,
                text: "2 chicken eggs",
            },
            {
                id:2,
                text: "green onion",
            },
            {
                id:3,
                text: "paper",
            },
            {
                id:4,
                text: "salt",
            },
            {
                id:5,
                text: "tomato sauce/ketchup",
            },
            {
                id:6,
                text: "oil",
            },

        ],
        ustensile:[
            {
                id:1,
                text: "pan",
            },
            {
                id:2,
                text: "1 bowl",
            },
            {
                id:3,
                text: "1 wooden sticks at least of 15cm long",
            },
        ],
        totalTime:"6 minutes",
        imaginiUstensile:[
            {
                id:1,
                image: imageLoc.tigaie_pe_foc,
            },
            {
                id:2,
                image:imageLoc.bol,
             },
        ],
        steps: [
            {               
                text:"Prepare the utensils",
                image:[
                    {
                        id:1,
                        image: imageLoc.tigaie_pe_foc,
                    },
                    {
                        id:2,
                        image:imageLoc.bol,
                     },
                ],
                statusImage : imageLoc.step1,
                time: 0,
            },
            {
                text:"Grease the pan with oil.",
                image:[
                    {
                        id:1,
                        image:imageLoc.sticla_ulei,
                    }
                ],
                statusImage : imageLoc.step2,
                time: 0,
            },
            {
                text:"Light the fire and let the pan heat up",
                image:[
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc,
                    }
                ],
                statusImage : imageLoc.step3,
                time: 60000,
            },
            {
                text:"Separate the glair from the yolk.\nWe need just the yolks. Put the yolks in lid, on the sick.",
                image: [
                    {
                        id:1,
                        image:imageLoc.ou_spart,
                    }
                ],
                statusImage : imageLoc.step4,
                time: 180000,
            },

            {
                text:"Now turn the yolks in the same time with the sticks.\nMake sure the stick is caught in the egg",
                image:[
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc,
                    },
                ],
                statusImage : imageLoc.step7,
                time: 0,
            },
            {
                text:"Press Done\nWhile waiting, grease the yolks with ketchup and put the green onion and the seeds on the yolks",
                image:[
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc,
                    },
                ],
                statusImage : imageLoc.step9,
                time: 60000,
            },
            {
                text:"Stop the fire.\nTake them off",
                image: [
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc,
                    },
                ],
                statusImage : imageLoc.step10,
                time: 0,
            },
        ]
    } ,
    {
        id: 6,
        title: "OMELETTE SOUFFLE",
        subtitle: "5  ingredients, 4 utensils, 20 minutes, 1 slice",
        image: imageLoc.R6,
        ingredients:[
            {
                id:1,
                text: "3 eggs",
            },
            {
                id:2,
                text: "salt",
            },
            {
                id:3,
                text: "oil",
            },
            {
                id:4,
                text: "parsley",
            },
            {
                id:5,
                text: "baking powder",
            },
        ],
        ustensile:[
            {
                id: 1,
                text: "bowl",
            },
            {
                id: 2,
                text: "mixer",
            },
            {
                id: 3,
                text: "whisk",
            },
            {
                id: 4,
                text: "pallet",
            },
        ],
        imaginiUstensile:[
            {
                id:1,
                image: imageLoc.mixer,
            },
            {
                id:2,
                image:imageLoc.bol,
             },
             {
                id:3,
                image:imageLoc.paleta,
             },
             {
                id:4,
                image:imageLoc.tel,
             },
        ],
        totalTime:"Total time: 20 minutes",
        steps: [
            {              
                text:"Prepare the utensils",
                image:[
                    {
                        id:1,
                        image: imageLoc.mixer,
                    },
                    {
                        id:2,
                        image:imageLoc.bol,
                     },
                     {
                        id:3,
                        image:imageLoc.paleta,
                     },
                     {
                        id:4,
                        image:imageLoc.tel,
                     },
                ],
                statusImage : imageLoc.step1,
                time: 0,
            },
            {
                text:"Separate the glair from the yolk. Put them in 2 different bowls",
                image: [
                    {
                        id:1,
                        image:imageLoc.ou_spart,
                    },
                ],
                statusImage : imageLoc.step2,
                time: 0,
            },
            {
                text:"Put how much salt you like on glairs",
                image:[
                    {
                        id:1,
                        image:imageLoc.bol,
                    },
                ],
                statusImage : imageLoc.step3,
                time: 0,
            },
            {
                text:"Mix the glairs until smooth!",
                image:[
                    {
                        id:1,
                        image:imageLoc.mixer,
                    },
                ],
                statusImage : imageLoc.step4,
                time: 90000,
            },
            {
                text:"Add a knife tip of baking powder and some parsley on the yolks.",
                image:[
                    {
                        id:1,
                        image:imageLoc.cutit,
                    },
                ],
                statusImage : imageLoc.step5,
                time: 0,
            },
            {
                text:"Mix the yolks",
                image:[
                    {
                        id:1,
                        image:imageLoc.tel,
                    },
                ],
                statusImage : imageLoc.step6,
                time: 60000,
            },
            {
                text:"Mix the glairs with the yolks carefully.\nBe careful to mix from the bottom up because we don't want to lose tha air from the glairs",
                image:[
                    {
                        id:1,
                        image:imageLoc.paleta,
                    },
                ],
                statusImage : imageLoc.step7,
                time: 60000,
            },
            {
                text:"Put some oil in the lid and let it heat up",
                image:[
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc,
                    },
                ],
                statusImage : imageLoc.step8,
                time: 60000,
            },
            
            {
                text:"Put the composition in the pan. Put the lid on\nLet it cook at medium heat",
                image: [
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc_inchisa,
                    },
                ],
                statusImage : imageLoc.step9,
                time: 600000,
            },
            {
                text:"Stop the fire and take it out!",
                image:[
                    {
                        id:1,
                        image:imageLoc.tigaie_pe_foc,
                    },
                ],
                statusImage : imageLoc.step10,
                time: 0,
            },
        ]
    } ,
    {
        id: 7,
        title: "EGG CLOUD",
        subtitle: "More than 3 ingredients,5 utensils, 25 minutes, 1 slice",
        image: imageLoc.R7,
        ingredients: [
            {
                id:1,
                text:"1 egg",
            },
            {
                id:2,
                text:"salt",
            },
            {
                id:3,
                text:"paper",
            },            
            {
                id:4,
                text:"Choose any of the ingredients below:",
            },            
            {
                id:5,
                text:"Meats: ham, salami, bacon, pancetta",
            },            
            {
                id:6,
                text:"Cheeses: parmesan, cheddar, cow cheese, sheep cheese",
            }, 
                       {
                id:7,
                text:"Greens: parsley, thyme, dill",
            },
            {
                id:8,
                text:"Vegetables: green onions, spinach, bell peppers",
            },
            {
                id:9,
                text:"Spices: oregano, garlic powder, sweet / spicy paprika, hot pepper flakes",
            },
        ],
        ustensile: [
            {
                id:1,
                text:"oven",
            },
            {
                id:2,
                text:"oven tray",
            },
            {
                id:3,
                text:"2 bowls",
            },
            {
                id:4,
                text:"mixer",
            },
            {
                id:5,
                text:"pallet",
            },
            {
                id:6,
                text:"spoon",
            },

        ],
        imaginiUstensile:[
            {
                id:1,
                image: imageLoc.mixer,
            },
            {
                id:2,
                image:imageLoc.bol,
             },
             {
                id:3,
                image:imageLoc.paleta,
             },
             {
                id:4,
                image:imageLoc.lingura,
             },
             {
                id:5,
                image:imageLoc.cuptor_microunde,
             },             {
                id:6,
                image:imageLoc.tava,
             },
        ],
        totalTime:"Total time: 25 minutes",
        steps: [
            {               
                text:"Prepare the utensils",
                image:[
                    {
                        id:1,
                        image: imageLoc.mixer,
                    },
                    {
                        id:2,
                        image:imageLoc.bol,
                     },
                     {
                        id:3,
                        image:imageLoc.paleta,
                     },
                     {
                        id:4,
                        image:imageLoc.lingura,
                     },
                     {
                        id:5,
                        image:imageLoc.cuptor_microunde,
                     },             {
                        id:6,
                        image:imageLoc.tava,
                     },
                ],
                statusImage : imageLoc.step1,
                time:0,
            },
            {
                text:"Start the oven and let it preheat with high temperature till you make the composition",
                image:[
                    {
                        id:1,
                        image:imageLoc.cuptor_microunde,
                    },
                ],
                statusImage : imageLoc.step2,
                time: 0,
            },
            {
                text:"Grease a oven tray with oil and put on the bottom a baking paper",
                image:[
                    {
                        id:1,
                        image:imageLoc.tava,
                    },
                ],
                statusImage : imageLoc.step3,
                time: 0,
            },
            {
                text:"Separate the glair from the yolk. Be carefull with the yolk because we need it",
                image:[
                    {
                        id:1,
                        image:imageLoc.ou_spart,
                    },
                ],
                statusImage : imageLoc.step4,
                time: 0,
            },
            {
                text:"Mix the glair until smooth.\nUse medium to high speed",
                image:[
                    {
                        id:1,
                        image:imageLoc.mixer,
                    },
                ],
                statusImage : imageLoc.step5,
                time: 90000,
            },
            {
                text:"Add the ingredients you have chosen slowly with as few movements as possible using a pallet(not iron)",
                image:[
                    {
                        id:1,
                        image:imageLoc.paleta,
                    },
                ],
                statusImage : imageLoc.step6,
                time: 0,
            },
            {
                text:"Using a wood spoon, put the composition in the oven tray prepared previously.\nWith the back side of the spoon, make a place where you put the yolk",
                image:[
                    {
                        id:1,
                        image:imageLoc.lingura,
                    },
                ],
                statusImage : imageLoc.step7,
                time: 0,
            },
            {
                text:"Put the oven tray in the oven and let it cook!",
                image:[
                    {
                        id:1,
                        image:imageLoc.cuptor_microunde,
                    },
                ],
                statusImage : imageLoc.step8,
                time: 900000,
            },
            
            {
                text:"Turn off the oven and take the tray out",
                image:[
                    {
                        id:1,
                        image:imageLoc.tava,
                    },
                ],
                statusImage : imageLoc.step10,
                time: 0,
            },
        ]
    } ,
    {
        id: 8,
        title: "title cook eight",
        subtitle: "subtitle cook eight",
        image: imageLoc.R8,
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Total time: 30'",
        steps: [
            {
                
                text:" se aprinde aragazul1",
                image: imageLoc.R2,
                statusImage : imageLoc.step1,
                time: 10000,

            },
            {
                text:" se stinge aragazul2",
                image: imageLoc.R2,
                statusImage : imageLoc.step2,
                time: 10000,
            },
            {
                text:" se aprinde aragazul3",
                image: imageLoc.R2,
                statusImage : imageLoc.step3,
                time: 10000,
            },
            {
                text:" se aprinde aragazul4",
                image: imageLoc.R2,
                statusImage : imageLoc.step4,
                time: 10000,
            },
            {
                text:" se aprinde aragazul5",
                image: imageLoc.R2,
                statusImage : imageLoc.step5,
                time: 10000,
            },
            {
                text:" se aprinde aragazul6",
                image: imageLoc.R2,
                statusImage : imageLoc.step6,
                time: 10000,
            },
            {
                text:" se aprinde aragazul7",
                image: imageLoc.R2,
                statusImage : imageLoc.step7,
                time: 10000,
            },
            {
                text:" se aprinde aragazul8",
                image: imageLoc.R2,
                statusImage : imageLoc.step8,
                time: 10000,
            },
            
            {
                text:" se aprinde aragazul9",
                image: imageLoc.R2,
                statusImage : imageLoc.step9,
                time: 10000,
            },
            {
                text:" se aprinde aragazul10",
                image: imageLoc.R2,
                statusImage : imageLoc.step10,
                time: 10000,
            },
        ]
    } ,
]