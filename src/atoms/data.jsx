import {atom} from 'jotai';

const data = atom(
    // {
    //     restos: [
            // "EVAS BREAKFAST",
            // "MARVENS",
            // "LA VILETA",
            // "CASINO BREAKFAST",
            // "JUKE BOX BURGER",
            // "GYU-KAKU",
            // "3 AMIGOS",
            // "MARCHÉ TNT",
            // "TIN TAN ST DENIS",
            // "RIB AND REEF",
            // "TABLES 51",
            // "HOUSTON",
            // "ARTHURS",
            // "ST VIATEUR",
            // "BEVO",
            // "ADAMO",
            // "BON DELIRE",
            // "ROBBIES",
            // "LA PANZARIA",
            // "BAR BARA",
            // "SEGRETA",
            // "THE KEG",
            // "RANDOLF BOARDGAME PUB",
            // "CAFE MOONDAY",
            // "WELL DONE PIZZA"

          //   {
          //     name: 'MARVENS',
          //     rate: null,
          //     visited: true
          //   },
          //   {
          //     name: 'EVAS BREAKFAST',
          //     rate: null,
          //     visited: false
          //   }
          // ],
        
        // activity: [
        //     "AXE THROWING",
            // "ESCAPE ROOM",
            // "OUTLET",
            // "GO KART",
            // "CHALET",
            // "SPA",
            // "PRACTICE MAKING BABIES",
            // "GUN RANGE",
            // "MINI PUTTING",
            // "GOLF",
            // "ROLLERBLADING",
            // "THRIFTING",
            // "HIKING",
            // "MIRROIR MIRROIR",
            // "COMEDY SHOW",
            // "PLAYS/THEATRE",
            // "CLUBBING",
            // "HOCKEY GAME",
            // "BASKETBALL GAME",
            // "LONDON",
            // "OVERSEAS",
            // "SUGAR SHACK",
            // "ZOO",
            // "MUSEUM",
            // "CAFE REDWOOD",
            // "LA GRAND BIBLIOTHÈQUE",
            // "CARICATURE",
            // "BOOZY BRUNCH",
            // "KARAOKE",
            // "GYM",
            // "CERAMIC CAFE",
            // "ISAUTE",
            // "CINEMA",
            // "COMICON",
            // "PRIDEFEST",
            // "PLANETARIUM",
            // "LIGHT SHOW",
            // "ARCADE",
            // "BUILD A BEAR",
            // "WINE TASTING",
            // "COOKING CLASS",
            // "BUILD LEGO",
            // "TEACH SAMMY TO SWIM",
            // "DOUBLE DECKER BUS",
            // "SCOOTER OLD PORT",
            // "SKINNY DIPPING",
            // "BIKING",
            // "SPEAKEASY",
            // "HORROR MOVIE NIGHT",
            // "CAT CAFE",
            // "YOGA",
            // "COOKING DAY",
    //         "FESTIVAL"
    //       ]
    // }

    // local storage data retrieval

    JSON.parse(localStorage.getItem("DNP_Restaurants"))
)

// test schema
// activitObj=
// {
//   name: String,
//   rate: Number,
//   visited: Boolean
// }

export default data;

