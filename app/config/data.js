
import imageLoc from './imagesLocation'; 

export default [
    
    {
        id: 1,
        title: "Egg perfectly boiled",
        subtitle: "1 ingredient, 2 utensils, 10 minutes, 1 slice",
        image: imageLoc.R2,
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
                image: imageLoc.waiting_egg,
                statusImage : imageLoc.step1,
                time: 0,               
            },
            {
                
                text:"Put 1 inch of water in the pot and put the lid on!",
                image: imageLoc.oala_cu_apa,
                statusImage : imageLoc.step2,
                time: 0,
            },
            {
                
                text:"Start the fire, boil the water.",
                image: imageLoc.oala_pe_foc_inchisa,
                statusImage : imageLoc.step3,
                time: 600000,
            },
            {
                
                text:"Take the eggs directly from the fridge and put them in the pot. Put the lid back.",
                image: imageLoc.oala_cu_apa_fierband,
                statusImage : imageLoc.step5,
                time: 0,
            },
            {
                
                text:"Press Start and let them boil!",
                image: imageLoc.oala_cu_apa_fierband,
                statusImage : imageLoc.step6,
                time: 360000,
            },
            {
                
                text:"Take them out with the spoon!",
                image: imageLoc.lingura_cu_gauri,
                statusImage : imageLoc.step8,
                time: 0,
            },
            {
                
                text:"Cool them under a stream of cold water. 1 egg at a time.\n Cool the first one!",
                image: imageLoc.robinet,
                statusImage : imageLoc.step9,
                time: 7000,
            },
            {
                
                text:"Now the second one",
                image: imageLoc.robinet,
                statusImage : imageLoc.step10,
                time: 7000,
            },                                 
     
        ]
        
    } ,
    {
        id: 2,
        title: "Eggs with tomatoes",
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
                
                image: imageLoc.waiting_egg,
                statusImage : imageLoc.step1,
                time: 0,
            },
            {
                text:"Cut the green onion and the mozzarella.",
                image: imageLoc.fund,
                statusImage : imageLoc.step2,
                time: 0,
            },
            {
                text:"Rade the cheese (how much you like)",
                image: imageLoc.razatoare,
                statusImage : imageLoc.step3,
                time: 0,
            },
            {
                text:"Cut the tomatoes",
                image: imageLoc.rosie_taiata,
                statusImage : imageLoc.step4,
                time: 0,
            },
            {
                text:"Empty the tomatoes with the spoon",
                image: imageLoc.lingura,
                statusImage : imageLoc.step5,
                time: 0,
            },
            {
                text:"Put mozzarella and green onions in tomatos, in this order",
                image: imageLoc.waiting_egg,
                statusImage : imageLoc.step6,
                time: 0,
            },
            {
                text:"Now take the eggs from the fridge. Put them in tomatoes.\nOne egg for each tomato.\nHere you can put how much salt, paper or mayonnaise you like",
                image:imageLoc.ou_spart,
                statusImage : imageLoc.step7,
                time: 0,
            },
            {
                text:"Put some cheese over the eggs",
                image: imageLoc.razatoare,
                statusImage : imageLoc.step8,
                time: 0,
            },
            
            {
                text:"Grease the tray with olive oil and put the tomatoes in it.\nYou can put the piece of tomato initially removed under our tomato",
                image: imageLoc.tava,
                statusImage : imageLoc.step9,
                time: 0,
            },
            {
                text:"Put the tomatoes in the oven at 200 C (392 F) and let the time drain",
                image: imageLoc.cuptor_microunde,
                statusImage : imageLoc.step10,
                time: 1500000,
            },
        ]
    } ,
    {
        id: 3,
        title: "title cook three",
        subtitle: "subtitle cook three",
        image: imageLoc.R2,
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Timp total de pentru a gati",
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
        id: 4,
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
        id: 5,
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