
import imageLoc from './imagesLocation'; 

export default [
    
    {
        id: 1,
        title: "Egg perfectly boiled",
        subtitle: "1 ingredient, 2 utensils, 10 minutes, 1 slice",
        image: imageLoc.logo,
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
                
                text:"Start the fire! Boil the water. It shouldn't take more than 2 minutes!",
                image: imageLoc.oala_pe_foc_inchisa,
                statusImage : imageLoc.step3,
                time: 120000,
            },
            {
                
                text:"Take the eggs directly from the fridge and put it in the pot. Put the lid back.",
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
        title: "mihaela avram",
        subtitle: "subtitle cook two",
        image: imageLoc.logo,
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        imaginiUstensile:[
            {
                id:1,
                image:imageLoc.oala_pe_foc_inchisa,
            },
            {
                id:2,
                image:  imageLoc.oala_pe_foc_inchisa,
             },

        ],
        totalTime:"Timp total de pentru a gati",
        steps: [
            {
                
                text:" se aprinde aragazul1",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step1,
                time: 10000,

            },
            {
                text:" se stinge aragazul2",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step2,
                time: 10000,
            },
            {
                text:" se aprinde aragazul3",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step3,
                time: 10000,
            },
            {
                text:" se aprinde aragazul4",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step4,
                time: 10000,
            },
            {
                text:" se aprinde aragazul5",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step5,
                time: 10000,
            },
            {
                text:" se aprinde aragazul6",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step6,
                time: 10000,
            },
            {
                text:" se aprinde aragazul7",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step7,
                time: 10000,
            },
            {
                text:" se aprinde aragazul8",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step8,
                time: 10000,
            },
            
            {
                text:" se aprinde aragazul9",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step9,
                time: 10000,
            },
            {
                text:" se aprinde aragazul10",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step10,
                time: 10000,
            },
        ]
    } ,
    {
        id: 3,
        title: "title cook three",
        subtitle: "subtitle cook three",
        image: require('../covers/carbonara.jpg'),
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Timp total de pentru a gati",
        steps: [
            {
                
                text:" se aprinde aragazul1",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step1,
                time: 10000,

            },
            {
                text:" se stinge aragazul2",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step2,
                time: 10000,
            },
            {
                text:" se aprinde aragazul3",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step3,
                time: 10000,
            },
            {
                text:" se aprinde aragazul4",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step4,
                time: 10000,
            },
            {
                text:" se aprinde aragazul5",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step5,
                time: 10000,
            },
            {
                text:" se aprinde aragazul6",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step6,
                time: 10000,
            },
            {
                text:" se aprinde aragazul7",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step7,
                time: 10000,
            },
            {
                text:" se aprinde aragazul8",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step8,
                time: 10000,
            },
            
            {
                text:" se aprinde aragazul9",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step9,
                time: 10000,
            },
            {
                text:" se aprinde aragazul10",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step10,
                time: 10000,
            },
        ]
    } ,
    {
        id: 4,
        title: "title cook one",
        subtitle: "subtitle cook one",
        image: require('../covers/carbonara.jpg'),
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Timp total pentru a gati",
        steps: [
            {
                
                text:" se aprinde aragazul1",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step1,
                time: 10000,

            },
            {
                text:" se stinge aragazul2",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step2,
                time: 10000,
            },
            {
                text:" se aprinde aragazul3",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step3,
                time: 10000,
            },
            {
                text:" se aprinde aragazul4",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step4,
                time: 10000,
            },
            {
                text:" se aprinde aragazul5",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step5,
                time: 10000,
            },
            {
                text:" se aprinde aragazul6",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step6,
                time: 10000,
            },
            {
                text:" se aprinde aragazul7",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step7,
                time: 10000,
            },
            {
                text:" se aprinde aragazul8",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step8,
                time: 10000,
            },
            
            {
                text:" se aprinde aragazul9",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step9,
                time: 10000,
            },
            {
                text:" se aprinde aragazul10",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step10,
                time: 10000,
            },
        ]
    } ,
    {
        id: 5,
        title: "title cook one",
        subtitle: "subtitle cook one",
        image: require('../covers/carbonara.jpg'),
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Timp total pentru a gati",
        steps: [
            {
                
                text:" se aprinde aragazul1",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step1,
                time: 10000,

            },
            {
                text:" se stinge aragazul2",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step2,
                time: 10000,
            },
            {
                text:" se aprinde aragazul3",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step3,
                time: 10000,
            },
            {
                text:" se aprinde aragazul4",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step4,
                time: 10000,
            },
            {
                text:" se aprinde aragazul5",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step5,
                time: 10000,
            },
            {
                text:" se aprinde aragazul6",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step6,
                time: 10000,
            },
            {
                text:" se aprinde aragazul7",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step7,
                time: 10000,
            },
            {
                text:" se aprinde aragazul8",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step8,
                time: 10000,
            },
            
            {
                text:" se aprinde aragazul9",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step9,
                time: 10000,
            },
            {
                text:" se aprinde aragazul10",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step10,
                time: 10000,
            },
        ]
    } ,
    {
        id: 6,
        title: "title cook one",
        subtitle: "subtitle cook one",
        image: require('../covers/carbonara.jpg'),
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Timp total pentru a gati",
        steps: [
            {
                
                text:" se aprinde aragazul1",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step1,
                time: 10000,

            },
            {
                text:" se stinge aragazul2",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step2,
                time: 10000,
            },
            {
                text:" se aprinde aragazul3",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step3,
                time: 10000,
            },
            {
                text:" se aprinde aragazul4",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step4,
                time: 10000,
            },
            {
                text:" se aprinde aragazul5",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step5,
                time: 10000,
            },
            {
                text:" se aprinde aragazul6",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step6,
                time: 10000,
            },
            {
                text:" se aprinde aragazul7",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step7,
                time: 10000,
            },
            {
                text:" se aprinde aragazul8",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step8,
                time: 10000,
            },
            
            {
                text:" se aprinde aragazul9",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step9,
                time: 10000,
            },
            {
                text:" se aprinde aragazul10",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step10,
                time: 10000,
            },
        ]
    } ,
    {
        id: 7,
        title: "title cook seven",
        subtitle: "subtitle cook seven",
        image: require('../covers/carbonara.jpg'),
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Timp total pentru a gati",
        steps: [
            {
                
                text:" se aprinde aragazul1",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step1,
                time: 10000,

            },
            {
                text:" se stinge aragazul2",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step2,
                time: 10000,
            },
            {
                text:" se aprinde aragazul3",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step3,
                time: 10000,
            },
            {
                text:" se aprinde aragazul4",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step4,
                time: 10000,
            },
            {
                text:" se aprinde aragazul5",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step5,
                time: 10000,
            },
            {
                text:" se aprinde aragazul6",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step6,
                time: 10000,
            },
            {
                text:" se aprinde aragazul7",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step7,
                time: 10000,
            },
            {
                text:" se aprinde aragazul8",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step8,
                time: 10000,
            },
            
            {
                text:" se aprinde aragazul9",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step9,
                time: 10000,
            },
            {
                text:" se aprinde aragazul10",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step10,
                time: 10000,
            },
        ]
    } ,
    {
        id: 8,
        title: "title cook eight",
        subtitle: "subtitle cook eight",
        image: require('../covers/carbonara.jpg'),
        ingredients: "text aliniat frumos cu ingredeinte",
        ustensile: "text aliniat frumos cu ustensile",
        totalTime:"Total time: 30'",
        steps: [
            {
                
                text:" se aprinde aragazul1",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step1,
                time: 10000,

            },
            {
                text:" se stinge aragazul2",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step2,
                time: 10000,
            },
            {
                text:" se aprinde aragazul3",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step3,
                time: 10000,
            },
            {
                text:" se aprinde aragazul4",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step4,
                time: 10000,
            },
            {
                text:" se aprinde aragazul5",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step5,
                time: 10000,
            },
            {
                text:" se aprinde aragazul6",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step6,
                time: 10000,
            },
            {
                text:" se aprinde aragazul7",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step7,
                time: 10000,
            },
            {
                text:" se aprinde aragazul8",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step8,
                time: 10000,
            },
            
            {
                text:" se aprinde aragazul9",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step9,
                time: 10000,
            },
            {
                text:" se aprinde aragazul10",
                image: require('../covers/carbonara.jpg'),
                statusImage : imageLoc.step10,
                time: 10000,
            },
        ]
    } ,
]