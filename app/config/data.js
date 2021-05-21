
import imageLoc from './imagesLocation'; 

export default [
    
    {
        id: 1,
        title: "EGG PERFECTLY BOILED",
        subtitle: "1 ingredient, 2 utensils, 10 minutes, 1 slice",
        image: imageLoc.R1,
        ingredients: "-2 eggs from the fridge",       
        ustensile: "-pot with lid : the egg must touch the bottom. If you want to cook more eggs, make sure the pot is big enough.\n-spoon with holes",
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
        ingredients: "-2 chiken eggs\n-2 tomatoes\n-50g mozzarella\n-green onion(how much you like)\n-cheese\n-olive oil\n-mayonnaise\n-salt\n-paper",
        ustensile: "-knife\n-oven tray\n-oven\n-chipper\n-spoon",
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
        ingredients: "-85g oat\n-200ml of milk\n-2 eggs\n-1 spoon of cheese\n-caraway\n-black pepper\n-salt\n-oil",
        ustensile: "-spoon\n-pan and lid\n-bowl\n-whisk\n-pallet",
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
                text:"Mix until smooth",
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
        ingredients: "-5 chicken eggs\n-butter/oil\n-salt\n-sugar\n-sweet sauce: honey is the best",
        ustensile: "-pan and lid\n-2 bowls\n-whisk\n-pallet\n-mixer",
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
        subtitle: "4 ingredients, 4 utensils, 6 minutes, 2 slice",
        image: imageLoc.R3,
        ingredients: "-4 chicken eggs\n-green onion\n-seeds(what you like)\n-salt\n-tomato sauce/ketchup\n-oil\n-optional:yogurt",
        ustensile: "-pan\n-1 bowl\n-2 wooden sticks at least of 15cm long",
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
                text:"Separate the glair from the yolk.\nWe need just the yolks so put them in a bowl",
                image: [
                    {
                        id:1,
                        image: imageLoc.bol,
                    },
                    {
                        id:2,
                        image:imageLoc.ou_spart,
                    }
                ],
                statusImage : imageLoc.step2,
                time: 60000,
            },
            {
                text:"Grease the pan with oil",
                image:[
                    {
                        id:1,
                        image:imageLoc.sticla_ulei,
                    }
                ],
                statusImage : imageLoc.step3,
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
                statusImage : imageLoc.step4,
                time: 60000,
            },
            {
                text:"Put the sticks in pan. Put 2 yolk on every stick, side by side.\nUse a spoon to take the yolks from bowl.\nPress Start and wait",
                image: [
                    {
                        id:1,
                        image:imageLoc.lingura,
                    },
                    {
                        id:2,
                        image:imageLoc.lingura, //imaginea de pe insta
                    }
                ],
                statusImage : imageLoc.step5,
                time: 60000,
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
                text:"Press Start\nWhile waiting, grease the yolks with ketchup and put the green onion and the seeds on the yolks",
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
        title: "title cook one",
        subtitle: "subtitle cook one",
        image: imageLoc.R2,
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Timp total pentru a gati",
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
    {
        id: 7,
        title: "title cook seven",
        subtitle: "subtitle cook seven",
        image: imageLoc.R2,
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Timp total pentru a gati",
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
    {
        id: 8,
        title: "title cook eight",
        subtitle: "subtitle cook eight",
        image: imageLoc.R2,
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