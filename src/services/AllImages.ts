// sidebar icon images
import Action from "../img/Action.png";
import Strategy from "../img/Strategy.png";
import RPG from "../img/RPG.png";
import Adventure from "../img/Adventure.png";
import Puzzle from "../img/Puzzle.png";
import Racing from "../img/Racing.png";
import Shooter from "../img/Shooter.png";
import Sports from "../img/Sports.png";

// rating icons
import exceptional from "../img/expectational.png";
import recomended from "../img/recomended.png";
import meh from "../img/meh.webp";
import skip from "../img/skip.png";

export const ImagesImport = {
  Action: Action,
  Strategy: Strategy,
  RPG: RPG,
  Adventure: Adventure,
  Puzzle: Puzzle,
  Racing: Racing,
  Shooter: Shooter,
  Sports: Sports,
  exceptional: exceptional,
  recommended: recomended,
  skip: skip,
  meh: meh,
};
export type ImageKeys = keyof typeof ImagesImport;
class Images {
  getSideBarIcon(fileName: ImageKeys) {
    return ImagesImport[fileName];
  }
  getRatingIcon(fileName: ImageKeys) {
    return ImagesImport[fileName];
  }
}

export default new Images();

// {
//   "count": 877732,
//   "next": "https://api.rawg.io/api/games?key=1a0057501a55404f82419f638cd0b9ec&page=2",
//   "previous": null,
//   "results": [
//     {
//       "id": 3498,
//       "slug": "grand-theft-auto-v",
//       "name": "Grand Theft Auto V",
//       "released": "2013-09-17",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
//       "rating": 4.47,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 4165,
//           "percent": 59.1
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 2304,
//           "percent": 32.69
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 446,
//           "percent": 6.33
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 132,
//           "percent": 1.87
//         }
//       ],
//       "ratings_count": 6939,
//       "reviews_text_count": 63,
//       "added": 21402,
//       "added_by_status": {
//         "yet": 535,
//         "owned": 12337,
//         "beaten": 6065,
//         "toplay": 610,
//         "dropped": 1124,
//         "playing": 731
//       },
//       "metacritic": 92,
//       "playtime": 74,
//       "suggestions_count": 434,
//       "updated": "2024-11-30T16:03:58",
//       "user_game": null,
//       "reviews_count": 7047,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2013-09-17",
//           "requirements_en": {
//             "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
//             "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 187,
//             "name": "PlayStation 5",
//             "slug": "playstation5",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1155,
//             "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//           },
//           "released_at": "2013-09-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 186,
//             "name": "Xbox Series S/X",
//             "slug": "xbox-series-x",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1012,
//             "image_background": "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg"
//           },
//           "released_at": "2013-09-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2013-09-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2013-09-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2013-09-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2013-09-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 290375,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 438095,
//           "store": {
//             "id": 11,
//             "name": "Epic Games",
//             "slug": "epic-games",
//             "domain": "epicgames.com",
//             "games_count": 1360,
//             "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//           }
//         },
//         {
//           "id": 290376,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 290377,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         },
//         {
//           "id": 290378,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22749,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 36,
//           "name": "Open World",
//           "slug": "open-world",
//           "language": "eng",
//           "games_count": 8060,
//           "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//         },
//         {
//           "id": 411,
//           "name": "cooperative",
//           "slug": "cooperative",
//           "language": "eng",
//           "games_count": 5496,
//           "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 149,
//           "name": "Third Person",
//           "slug": "third-person",
//           "language": "eng",
//           "games_count": 12481,
//           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
//         },
//         {
//           "id": 4,
//           "name": "Funny",
//           "slug": "funny",
//           "language": "eng",
//           "games_count": 26047,
//           "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
//         },
//         {
//           "id": 37,
//           "name": "Sandbox",
//           "slug": "sandbox",
//           "language": "eng",
//           "games_count": 7393,
//           "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
//         },
//         {
//           "id": 123,
//           "name": "Comedy",
//           "slug": "comedy",
//           "language": "eng",
//           "games_count": 13150,
//           "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//         },
//         {
//           "id": 150,
//           "name": "Third-Person Shooter",
//           "slug": "third-person-shooter",
//           "language": "eng",
//           "games_count": 3670,
//           "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
//         },
//         {
//           "id": 62,
//           "name": "Moddable",
//           "slug": "moddable",
//           "language": "eng",
//           "games_count": 988,
//           "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//         },
//         {
//           "id": 144,
//           "name": "Crime",
//           "slug": "crime",
//           "language": "eng",
//           "games_count": 2974,
//           "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
//         },
//         {
//           "id": 62349,
//           "name": "vr mod",
//           "slug": "vr-mod",
//           "language": "eng",
//           "games_count": 17,
//           "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//         },
//         {
//           "id": 1827221,
//           "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
//         },
//         {
//           "id": 1827222,
//           "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
//         },
//         {
//           "id": 1827223,
//           "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
//         },
//         {
//           "id": 1827225,
//           "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
//         },
//         {
//           "id": 1827226,
//           "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
//         },
//         {
//           "id": 1827227,
//           "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
//         }
//       ]
//     },
//     {
//       "id": 3328,
//       "slug": "the-witcher-3-wild-hunt",
//       "name": "The Witcher 3: Wild Hunt",
//       "released": "2015-05-18",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
//       "rating": 4.65,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 5240,
//           "percent": 76.84
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1114,
//           "percent": 16.34
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 288,
//           "percent": 4.22
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 177,
//           "percent": 2.6
//         }
//       ],
//       "ratings_count": 6709,
//       "reviews_text_count": 76,
//       "added": 20926,
//       "added_by_status": {
//         "yet": 1135,
//         "owned": 12224,
//         "beaten": 4929,
//         "toplay": 797,
//         "dropped": 960,
//         "playing": 881
//       },
//       "metacritic": 92,
//       "playtime": 44,
//       "suggestions_count": 677,
//       "updated": "2024-12-03T23:24:23",
//       "user_game": null,
//       "reviews_count": 6819,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 186,
//             "name": "Xbox Series S/X",
//             "slug": "xbox-series-x",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1012,
//             "image_background": "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg"
//           },
//           "released_at": "2015-05-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 187,
//             "name": "PlayStation 5",
//             "slug": "playstation5",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1155,
//             "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//           },
//           "released_at": "2015-05-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2015-05-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2015-05-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo Switch",
//             "slug": "nintendo-switch",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5552,
//             "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
//           },
//           "released_at": "2015-05-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2015-05-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2015-05-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo",
//             "slug": "nintendo"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 5,
//           "name": "RPG",
//           "slug": "role-playing-games-rpg",
//           "games_count": 57991,
//           "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 354780,
//           "store": {
//             "id": 5,
//             "name": "GOG",
//             "slug": "gog",
//             "domain": "gog.com",
//             "games_count": 6479,
//             "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
//           }
//         },
//         {
//           "id": 3565,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 305376,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 312313,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         },
//         {
//           "id": 676022,
//           "store": {
//             "id": 6,
//             "name": "Nintendo Store",
//             "slug": "nintendo",
//             "domain": "nintendo.com",
//             "games_count": 9086,
//             "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22749,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 36,
//           "name": "Open World",
//           "slug": "open-world",
//           "language": "eng",
//           "games_count": 8060,
//           "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//         },
//         {
//           "id": 149,
//           "name": "Third Person",
//           "slug": "third-person",
//           "language": "eng",
//           "games_count": 12481,
//           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
//         },
//         {
//           "id": 64,
//           "name": "Fantasy",
//           "slug": "fantasy",
//           "language": "eng",
//           "games_count": 29391,
//           "image_background": "https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg"
//         },
//         {
//           "id": 37,
//           "name": "Sandbox",
//           "slug": "sandbox",
//           "language": "eng",
//           "games_count": 7393,
//           "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
//         },
//         {
//           "id": 97,
//           "name": "Action RPG",
//           "slug": "action-rpg",
//           "language": "eng",
//           "games_count": 7508,
//           "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
//         },
//         {
//           "id": 41,
//           "name": "Dark",
//           "slug": "dark",
//           "language": "eng",
//           "games_count": 16680,
//           "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
//         },
//         {
//           "id": 44,
//           "name": "Nudity",
//           "slug": "nudity",
//           "language": "eng",
//           "games_count": 7164,
//           "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//         },
//         {
//           "id": 336,
//           "name": "controller support",
//           "slug": "controller-support",
//           "language": "eng",
//           "games_count": 293,
//           "image_background": "https://media.rawg.io/media/games/0b3/0b34647c42271600399b93d19b10f1aa.jpg"
//         },
//         {
//           "id": 145,
//           "name": "Choices Matter",
//           "slug": "choices-matter",
//           "language": "eng",
//           "games_count": 6294,
//           "image_background": "https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg"
//         },
//         {
//           "id": 192,
//           "name": "Mature",
//           "slug": "mature",
//           "language": "eng",
//           "games_count": 3631,
//           "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//         },
//         {
//           "id": 40,
//           "name": "Dark Fantasy",
//           "slug": "dark-fantasy",
//           "language": "eng",
//           "games_count": 4646,
//           "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//         },
//         {
//           "id": 66,
//           "name": "Medieval",
//           "slug": "medieval",
//           "language": "eng",
//           "games_count": 6919,
//           "image_background": "https://media.rawg.io/media/games/886/8868f9ea0c91d45316319ebf5dd4fc64.jpg"
//         },
//         {
//           "id": 82,
//           "name": "Magic",
//           "slug": "magic",
//           "language": "eng",
//           "games_count": 10028,
//           "image_background": "https://media.rawg.io/media/games/e75/e75c54e5a9a2754bab181b2240472389.jpg"
//         },
//         {
//           "id": 218,
//           "name": "Multiple Endings",
//           "slug": "multiple-endings",
//           "language": "eng",
//           "games_count": 9574,
//           "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
//         },
//         {
//           "id": 30336,
//           "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
//         },
//         {
//           "id": 30337,
//           "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
//         },
//         {
//           "id": 30338,
//           "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
//         },
//         {
//           "id": 30339,
//           "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
//         },
//         {
//           "id": 30340,
//           "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
//         },
//         {
//           "id": 30342,
//           "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
//         }
//       ]
//     },
//     {
//       "id": 4200,
//       "slug": "portal-2",
//       "name": "Portal 2",
//       "released": "2011-04-18",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
//       "rating": 4.6,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 4047,
//           "percent": 69.66
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1461,
//           "percent": 25.15
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 168,
//           "percent": 2.89
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 134,
//           "percent": 2.31
//         }
//       ],
//       "ratings_count": 5758,
//       "reviews_text_count": 35,
//       "added": 19830,
//       "added_by_status": {
//         "yet": 639,
//         "owned": 12470,
//         "beaten": 5575,
//         "toplay": 385,
//         "dropped": 605,
//         "playing": 156
//       },
//       "metacritic": 95,
//       "playtime": 11,
//       "suggestions_count": 553,
//       "updated": "2024-12-03T21:54:05",
//       "user_game": null,
//       "reviews_count": 5810,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2011-04-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2011-04-18",
//           "requirements_en": null,
//           "requirements_ru": {
//             "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
//             "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
//           }
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2011-04-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2011-04-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2011-04-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2011-04-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Puzzle",
//           "slug": "puzzle",
//           "games_count": 97317,
//           "image_background": "https://media.rawg.io/media/games/3ef/3eff92562640e452d3487c04ba6d7fae.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 465889,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         },
//         {
//           "id": 13134,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 4526,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 33916,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 40849,
//           "name": "Steam Cloud",
//           "slug": "steam-cloud",
//           "language": "eng",
//           "games_count": 19981,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 411,
//           "name": "cooperative",
//           "slug": "cooperative",
//           "language": "eng",
//           "games_count": 5496,
//           "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 32,
//           "name": "Sci-fi",
//           "slug": "sci-fi",
//           "language": "eng",
//           "games_count": 20035,
//           "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 9,
//           "name": "Online Co-Op",
//           "slug": "online-co-op",
//           "language": "eng",
//           "games_count": 6243,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 4,
//           "name": "Funny",
//           "slug": "funny",
//           "language": "eng",
//           "games_count": 26047,
//           "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
//         },
//         {
//           "id": 189,
//           "name": "Female Protagonist",
//           "slug": "female-protagonist",
//           "language": "eng",
//           "games_count": 13395,
//           "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
//         },
//         {
//           "id": 123,
//           "name": "Comedy",
//           "slug": "comedy",
//           "language": "eng",
//           "games_count": 13150,
//           "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//         },
//         {
//           "id": 75,
//           "name": "Local Co-Op",
//           "slug": "local-co-op",
//           "language": "eng",
//           "games_count": 5615,
//           "image_background": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg"
//         },
//         {
//           "id": 11669,
//           "name": "stats",
//           "slug": "stats",
//           "language": "eng",
//           "games_count": 5209,
//           "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
//         },
//         {
//           "id": 40852,
//           "name": "Steam Workshop",
//           "slug": "steam-workshop",
//           "language": "eng",
//           "games_count": 1580,
//           "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//         },
//         {
//           "id": 25,
//           "name": "Space",
//           "slug": "space",
//           "language": "eng",
//           "games_count": 43267,
//           "image_background": "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg"
//         },
//         {
//           "id": 40838,
//           "name": "Includes level editor",
//           "slug": "includes-level-editor",
//           "language": "eng",
//           "games_count": 1963,
//           "image_background": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg"
//         },
//         {
//           "id": 40833,
//           "name": "Captions available",
//           "slug": "captions-available",
//           "language": "eng",
//           "games_count": 1406,
//           "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
//         },
//         {
//           "id": 40834,
//           "name": "Commentary available",
//           "slug": "commentary-available",
//           "language": "eng",
//           "games_count": 281,
//           "image_background": "https://media.rawg.io/media/screenshots/f72/f728954e667e580ba2ac507db226ae48.jpg"
//         },
//         {
//           "id": 87,
//           "name": "Science",
//           "slug": "science",
//           "language": "eng",
//           "games_count": 1821,
//           "image_background": "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 2,
//         "name": "Everyone 10+",
//         "slug": "everyone-10-plus"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         },
//         {
//           "id": 99018,
//           "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
//         },
//         {
//           "id": 99019,
//           "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
//         },
//         {
//           "id": 99020,
//           "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
//         },
//         {
//           "id": 99021,
//           "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
//         },
//         {
//           "id": 99022,
//           "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
//         },
//         {
//           "id": 99023,
//           "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
//         }
//       ]
//     },
//     {
//       "id": 4291,
//       "slug": "counter-strike-global-offensive",
//       "name": "Counter-Strike: Global Offensive",
//       "released": "2012-08-21",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
//       "rating": 3.56,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1655,
//           "percent": 46.63
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 923,
//           "percent": 26.01
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 572,
//           "percent": 16.12
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 399,
//           "percent": 11.24
//         }
//       ],
//       "ratings_count": 3513,
//       "reviews_text_count": 27,
//       "added": 17516,
//       "added_by_status": {
//         "yet": 265,
//         "owned": 13445,
//         "beaten": 1065,
//         "toplay": 78,
//         "dropped": 2038,
//         "playing": 625
//       },
//       "metacritic": 81,
//       "playtime": 64,
//       "suggestions_count": 589,
//       "updated": "2024-11-30T12:55:31",
//       "user_game": null,
//       "reviews_count": 3549,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2012-08-21",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows® 7/Vista/XP\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 2 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 9.0c\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 15 GB available space\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
//             "recommended": "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2012-08-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2012-08-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2012-08-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 4619,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 11489,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 49169,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 411,
//           "name": "cooperative",
//           "slug": "cooperative",
//           "language": "eng",
//           "games_count": 5496,
//           "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 9,
//           "name": "Online Co-Op",
//           "slug": "online-co-op",
//           "language": "eng",
//           "games_count": 6243,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 80,
//           "name": "Tactical",
//           "slug": "tactical",
//           "language": "eng",
//           "games_count": 5548,
//           "image_background": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg"
//         },
//         {
//           "id": 11669,
//           "name": "stats",
//           "slug": "stats",
//           "language": "eng",
//           "games_count": 5209,
//           "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
//         },
//         {
//           "id": 40852,
//           "name": "Steam Workshop",
//           "slug": "steam-workshop",
//           "language": "eng",
//           "games_count": 1580,
//           "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//         },
//         {
//           "id": 157,
//           "name": "PvP",
//           "slug": "pvp",
//           "language": "eng",
//           "games_count": 10121,
//           "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
//         },
//         {
//           "id": 62,
//           "name": "Moddable",
//           "slug": "moddable",
//           "language": "eng",
//           "games_count": 988,
//           "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//         },
//         {
//           "id": 70,
//           "name": "War",
//           "slug": "war",
//           "language": "eng",
//           "games_count": 9544,
//           "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
//         },
//         {
//           "id": 40837,
//           "name": "In-App Purchases",
//           "slug": "in-app-purchases",
//           "language": "eng",
//           "games_count": 2894,
//           "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
//         },
//         {
//           "id": 77,
//           "name": "Realistic",
//           "slug": "realistic",
//           "language": "eng",
//           "games_count": 6845,
//           "image_background": "https://media.rawg.io/media/games/e43/e43f9f0a1429bd9332020ac5876bc693.jpg"
//         },
//         {
//           "id": 11,
//           "name": "Team-Based",
//           "slug": "team-based",
//           "language": "eng",
//           "games_count": 1744,
//           "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//         },
//         {
//           "id": 131,
//           "name": "Fast-Paced",
//           "slug": "fast-paced",
//           "language": "eng",
//           "games_count": 10601,
//           "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
//         },
//         {
//           "id": 81,
//           "name": "Military",
//           "slug": "military",
//           "language": "eng",
//           "games_count": 2057,
//           "image_background": "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg"
//         },
//         {
//           "id": 170,
//           "name": "Competitive",
//           "slug": "competitive",
//           "language": "eng",
//           "games_count": 1198,
//           "image_background": "https://media.rawg.io/media/games/476/4767c380895fd35a4f1b59016dc45967.jpg"
//         },
//         {
//           "id": 40856,
//           "name": "Valve Anti-Cheat enabled",
//           "slug": "valve-anti-cheat-enabled",
//           "language": "eng",
//           "games_count": 105,
//           "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
//         },
//         {
//           "id": 73,
//           "name": "e-sports",
//           "slug": "e-sports",
//           "language": "eng",
//           "games_count": 80,
//           "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
//         },
//         {
//           "id": 245,
//           "name": "Trading",
//           "slug": "trading",
//           "language": "eng",
//           "games_count": 1253,
//           "image_background": "https://media.rawg.io/media/games/9ae/9ae37c55143614798f919ce8e8eb94aa.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
//         },
//         {
//           "id": 81644,
//           "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
//         },
//         {
//           "id": 81645,
//           "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
//         },
//         {
//           "id": 81646,
//           "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
//         },
//         {
//           "id": 81647,
//           "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
//         },
//         {
//           "id": 81648,
//           "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
//         },
//         {
//           "id": 81649,
//           "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
//         }
//       ]
//     },
//     {
//       "id": 5286,
//       "slug": "tomb-raider",
//       "name": "Tomb Raider (2013)",
//       "released": "2013-03-05",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
//       "rating": 4.06,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 2389,
//           "percent": 60.45
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 1014,
//           "percent": 25.66
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 430,
//           "percent": 10.88
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 119,
//           "percent": 3.01
//         }
//       ],
//       "ratings_count": 3923,
//       "reviews_text_count": 14,
//       "added": 17046,
//       "added_by_status": {
//         "yet": 687,
//         "owned": 11144,
//         "beaten": 4277,
//         "toplay": 277,
//         "dropped": 547,
//         "playing": 114
//       },
//       "metacritic": 86,
//       "playtime": 10,
//       "suggestions_count": 651,
//       "updated": "2024-11-30T12:55:29",
//       "user_game": null,
//       "reviews_count": 3952,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2013-03-05",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2013-03-05",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2013-03-05",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2013-03-05",
//           "requirements_en": {
//             "minimum": "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2013-03-05",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003EWindows XP / Windows Vista / Windows 7\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E1.8 GHz Processor\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E512 MB RAM\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E3D graphics card compatible with DirectX 9\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX®:\u003C/strong\u003E9.0\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Drive:\u003C/strong\u003E2 GB HD space\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "i486-100, 8 Мб",
//             "recommended": "Pentium 166, 16 Мб"
//           }
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2013-03-05",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 6,
//           "name": "Fighting",
//           "slug": "fighting",
//           "games_count": 11760,
//           "image_background": "https://media.rawg.io/media/games/e56/e56d74b0a1072662eea7c1a194363884.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 33824,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         },
//         {
//           "id": 13151,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 5640,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 218233,
//           "store": {
//             "id": 8,
//             "name": "Google Play",
//             "slug": "google-play",
//             "domain": "play.google.com",
//             "games_count": 17104,
//             "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//           }
//         },
//         {
//           "id": 79036,
//           "store": {
//             "id": 4,
//             "name": "App Store",
//             "slug": "apple-appstore",
//             "domain": "apps.apple.com",
//             "games_count": 75576,
//             "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//           }
//         },
//         {
//           "id": 713685,
//           "store": {
//             "id": 11,
//             "name": "Epic Games",
//             "slug": "epic-games",
//             "domain": "epicgames.com",
//             "games_count": 1360,
//             "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22749,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 149,
//           "name": "Third Person",
//           "slug": "third-person",
//           "language": "eng",
//           "games_count": 12481,
//           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
//         },
//         {
//           "id": 6,
//           "name": "Exploration",
//           "slug": "exploration",
//           "language": "eng",
//           "games_count": 24964,
//           "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//         },
//         {
//           "id": 193,
//           "name": "Classic",
//           "slug": "classic",
//           "language": "eng",
//           "games_count": 1802,
//           "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//         },
//         {
//           "id": 189,
//           "name": "Female Protagonist",
//           "slug": "female-protagonist",
//           "language": "eng",
//           "games_count": 13395,
//           "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
//         },
//         {
//           "id": 15,
//           "name": "Stealth",
//           "slug": "stealth",
//           "language": "eng",
//           "games_count": 6542,
//           "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
//         },
//         {
//           "id": 69,
//           "name": "Action-Adventure",
//           "slug": "action-adventure",
//           "language": "eng",
//           "games_count": 17910,
//           "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
//         },
//         {
//           "id": 150,
//           "name": "Third-Person Shooter",
//           "slug": "third-person-shooter",
//           "language": "eng",
//           "games_count": 3670,
//           "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
//         },
//         {
//           "id": 74,
//           "name": "Retro",
//           "slug": "retro",
//           "language": "eng",
//           "games_count": 42449,
//           "image_background": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg"
//         },
//         {
//           "id": 110,
//           "name": "Cinematic",
//           "slug": "cinematic",
//           "language": "eng",
//           "games_count": 2540,
//           "image_background": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"
//         },
//         {
//           "id": 269,
//           "name": "Quick-Time Events",
//           "slug": "quick-time-events",
//           "language": "eng",
//           "games_count": 703,
//           "image_background": "https://media.rawg.io/media/games/560/56056a71c74f751552c9baedebf8f317.jpg"
//         },
//         {
//           "id": 126,
//           "name": "Dinosaurs",
//           "slug": "dinosaurs",
//           "language": "eng",
//           "games_count": 1752,
//           "image_background": "https://media.rawg.io/media/screenshots/428/4286a224467623d23706dacb569a2ea1.jpg"
//         },
//         {
//           "id": 306,
//           "name": "Lara Croft",
//           "slug": "lara-croft",
//           "language": "eng",
//           "games_count": 14,
//           "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 99160,
//           "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
//         },
//         {
//           "id": 99161,
//           "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
//         },
//         {
//           "id": 99162,
//           "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
//         },
//         {
//           "id": 99163,
//           "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
//         },
//         {
//           "id": 99164,
//           "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
//         },
//         {
//           "id": 99165,
//           "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
//         }
//       ]
//     },
//     {
//       "id": 13536,
//       "slug": "portal",
//       "name": "Portal",
//       "released": "2007-10-09",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
//       "rating": 4.5,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 2889,
//           "percent": 60.17
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1621,
//           "percent": 33.76
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 191,
//           "percent": 3.98
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 100,
//           "percent": 2.08
//         }
//       ],
//       "ratings_count": 4760,
//       "reviews_text_count": 28,
//       "added": 16878,
//       "added_by_status": {
//         "yet": 453,
//         "owned": 10617,
//         "beaten": 5059,
//         "toplay": 272,
//         "dropped": 397,
//         "playing": 80
//       },
//       "metacritic": 90,
//       "playtime": 4,
//       "suggestions_count": 295,
//       "updated": "2024-11-30T18:54:51",
//       "user_game": null,
//       "reviews_count": 4801,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2007-10-09",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum: \u003C/strong\u003EOS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2007-10-09",
//           "requirements_en": {
//             "minimum": "\u003Cp\u003E\u003Cstrong\u003EMinimum: \u003C/strong\u003E1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection\u003C/p\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003ERecommended: \u003C/strong\u003EPentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection\u003C/p\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
//             "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
//           }
//         },
//         {
//           "platform": {
//             "id": 21,
//             "name": "Android",
//             "slug": "android",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 52403,
//             "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//           },
//           "released_at": "2007-10-09",
//           "requirements_en": {
//             "minimum": "4.4 and up"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2007-10-09",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2007-10-09",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2007-10-09",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo Switch",
//             "slug": "nintendo-switch",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5552,
//             "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
//           },
//           "released_at": "2007-10-09",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 8,
//             "name": "Android",
//             "slug": "android"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo",
//             "slug": "nintendo"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Puzzle",
//           "slug": "puzzle",
//           "games_count": 97317,
//           "image_background": "https://media.rawg.io/media/games/3ef/3eff92562640e452d3487c04ba6d7fae.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 14890,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 40973,
//           "store": {
//             "id": 8,
//             "name": "Google Play",
//             "slug": "google-play",
//             "domain": "play.google.com",
//             "games_count": 17104,
//             "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 32,
//           "name": "Sci-fi",
//           "slug": "sci-fi",
//           "language": "eng",
//           "games_count": 20035,
//           "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
//         },
//         {
//           "id": 40845,
//           "name": "Partial Controller Support",
//           "slug": "partial-controller-support",
//           "language": "eng",
//           "games_count": 12447,
//           "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 4,
//           "name": "Funny",
//           "slug": "funny",
//           "language": "eng",
//           "games_count": 26047,
//           "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
//         },
//         {
//           "id": 193,
//           "name": "Classic",
//           "slug": "classic",
//           "language": "eng",
//           "games_count": 1802,
//           "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//         },
//         {
//           "id": 189,
//           "name": "Female Protagonist",
//           "slug": "female-protagonist",
//           "language": "eng",
//           "games_count": 13395,
//           "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
//         },
//         {
//           "id": 123,
//           "name": "Comedy",
//           "slug": "comedy",
//           "language": "eng",
//           "games_count": 13150,
//           "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//         },
//         {
//           "id": 40838,
//           "name": "Includes level editor",
//           "slug": "includes-level-editor",
//           "language": "eng",
//           "games_count": 1963,
//           "image_background": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg"
//         },
//         {
//           "id": 40833,
//           "name": "Captions available",
//           "slug": "captions-available",
//           "language": "eng",
//           "games_count": 1406,
//           "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
//         },
//         {
//           "id": 111,
//           "name": "Short",
//           "slug": "short",
//           "language": "eng",
//           "games_count": 57864,
//           "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
//         },
//         {
//           "id": 114,
//           "name": "Physics",
//           "slug": "physics",
//           "language": "eng",
//           "games_count": 19913,
//           "image_background": "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg"
//         },
//         {
//           "id": 148,
//           "name": "Dark Humor",
//           "slug": "dark-humor",
//           "language": "eng",
//           "games_count": 3199,
//           "image_background": "https://media.rawg.io/media/games/bfb/bfb2bf7a0413443b1fcf0be7c3244053.jpg"
//         },
//         {
//           "id": 40834,
//           "name": "Commentary available",
//           "slug": "commentary-available",
//           "language": "eng",
//           "games_count": 281,
//           "image_background": "https://media.rawg.io/media/screenshots/f72/f728954e667e580ba2ac507db226ae48.jpg"
//         },
//         {
//           "id": 40839,
//           "name": "Includes Source SDK",
//           "slug": "includes-source-sdk",
//           "language": "eng",
//           "games_count": 63,
//           "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//         },
//         {
//           "id": 87,
//           "name": "Science",
//           "slug": "science",
//           "language": "eng",
//           "games_count": 1821,
//           "image_background": "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 3,
//         "name": "Teen",
//         "slug": "teen"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
//         },
//         {
//           "id": 115793,
//           "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
//         },
//         {
//           "id": 115794,
//           "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
//         },
//         {
//           "id": 115795,
//           "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
//         },
//         {
//           "id": 115796,
//           "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
//         },
//         {
//           "id": 115797,
//           "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
//         },
//         {
//           "id": 115798,
//           "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
//         }
//       ]
//     },
//     {
//       "id": 12020,
//       "slug": "left-4-dead-2",
//       "name": "Left 4 Dead 2",
//       "released": "2009-11-17",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
//       "rating": 4.09,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1767,
//           "percent": 53.4
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 1040,
//           "percent": 31.43
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 378,
//           "percent": 11.42
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 124,
//           "percent": 3.75
//         }
//       ],
//       "ratings_count": 3287,
//       "reviews_text_count": 12,
//       "added": 16774,
//       "added_by_status": {
//         "yet": 384,
//         "owned": 12388,
//         "beaten": 2536,
//         "toplay": 114,
//         "dropped": 1202,
//         "playing": 150
//       },
//       "metacritic": 89,
//       "playtime": 9,
//       "suggestions_count": 592,
//       "updated": "2024-11-30T12:55:09",
//       "user_game": null,
//       "reviews_count": 3309,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2009-11-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2009-11-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2009-11-17",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows® 7 32/64-bit / Vista 32/64 / XP\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Pentium 4 3.0GHz\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 2 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 9.0c\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 13 GB available space\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound Card:\u003C/strong\u003E DirectX 9.0c compatible sound card\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows® 7 32/64-bit / Vista 32/64 / XP\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel core 2 duo 2.4GHz\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 2 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 9.0c\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 13 GB available space\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound Card:\u003C/strong\u003E DirectX 9.0c compatible sound card\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
//             "recommended": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере"
//           }
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2009-11-17",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 13208,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 34000,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 40849,
//           "name": "Steam Cloud",
//           "slug": "steam-cloud",
//           "language": "eng",
//           "games_count": 19981,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 411,
//           "name": "cooperative",
//           "slug": "cooperative",
//           "language": "eng",
//           "games_count": 5496,
//           "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 16,
//           "name": "Horror",
//           "slug": "horror",
//           "language": "eng",
//           "games_count": 45884,
//           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 9,
//           "name": "Online Co-Op",
//           "slug": "online-co-op",
//           "language": "eng",
//           "games_count": 6243,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 26,
//           "name": "Gore",
//           "slug": "gore",
//           "language": "eng",
//           "games_count": 5989,
//           "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
//         },
//         {
//           "id": 1,
//           "name": "Survival",
//           "slug": "survival",
//           "language": "eng",
//           "games_count": 9367,
//           "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
//         },
//         {
//           "id": 75,
//           "name": "Local Co-Op",
//           "slug": "local-co-op",
//           "language": "eng",
//           "games_count": 5615,
//           "image_background": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg"
//         },
//         {
//           "id": 80,
//           "name": "Tactical",
//           "slug": "tactical",
//           "language": "eng",
//           "games_count": 5548,
//           "image_background": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg"
//         },
//         {
//           "id": 11669,
//           "name": "stats",
//           "slug": "stats",
//           "language": "eng",
//           "games_count": 5209,
//           "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
//         },
//         {
//           "id": 40852,
//           "name": "Steam Workshop",
//           "slug": "steam-workshop",
//           "language": "eng",
//           "games_count": 1580,
//           "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//         },
//         {
//           "id": 63,
//           "name": "Zombies",
//           "slug": "zombies",
//           "language": "eng",
//           "games_count": 10582,
//           "image_background": "https://media.rawg.io/media/games/1be/1be575aa6de86de328433a63fb534d9a.jpg"
//         },
//         {
//           "id": 62,
//           "name": "Moddable",
//           "slug": "moddable",
//           "language": "eng",
//           "games_count": 988,
//           "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//         },
//         {
//           "id": 17,
//           "name": "Survival Horror",
//           "slug": "survival-horror",
//           "language": "eng",
//           "games_count": 8901,
//           "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
//         },
//         {
//           "id": 43,
//           "name": "Post-apocalyptic",
//           "slug": "post-apocalyptic",
//           "language": "eng",
//           "games_count": 4263,
//           "image_background": "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg"
//         },
//         {
//           "id": 40833,
//           "name": "Captions available",
//           "slug": "captions-available",
//           "language": "eng",
//           "games_count": 1406,
//           "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
//         },
//         {
//           "id": 5,
//           "name": "Replay Value",
//           "slug": "replay-value",
//           "language": "eng",
//           "games_count": 1849,
//           "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//         },
//         {
//           "id": 11,
//           "name": "Team-Based",
//           "slug": "team-based",
//           "language": "eng",
//           "games_count": 1744,
//           "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//         },
//         {
//           "id": 40856,
//           "name": "Valve Anti-Cheat enabled",
//           "slug": "valve-anti-cheat-enabled",
//           "language": "eng",
//           "games_count": 105,
//           "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
//         },
//         {
//           "id": 40834,
//           "name": "Commentary available",
//           "slug": "commentary-available",
//           "language": "eng",
//           "games_count": 281,
//           "image_background": "https://media.rawg.io/media/screenshots/f72/f728954e667e580ba2ac507db226ae48.jpg"
//         },
//         {
//           "id": 40839,
//           "name": "Includes Source SDK",
//           "slug": "includes-source-sdk",
//           "language": "eng",
//           "games_count": 63,
//           "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 99748,
//           "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
//         },
//         {
//           "id": 99749,
//           "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
//         },
//         {
//           "id": 99750,
//           "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
//         },
//         {
//           "id": 99751,
//           "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
//         },
//         {
//           "id": 99752,
//           "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
//         },
//         {
//           "id": 99753,
//           "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
//         }
//       ]
//     },
//     {
//       "id": 5679,
//       "slug": "the-elder-scrolls-v-skyrim",
//       "name": "The Elder Scrolls V: Skyrim",
//       "released": "2011-11-11",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
//       "rating": 4.43,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 2720,
//           "percent": 57.54
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1488,
//           "percent": 31.48
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 424,
//           "percent": 8.97
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 95,
//           "percent": 2.01
//         }
//       ],
//       "ratings_count": 4678,
//       "reviews_text_count": 34,
//       "added": 16102,
//       "added_by_status": {
//         "yet": 508,
//         "owned": 9648,
//         "beaten": 3804,
//         "toplay": 420,
//         "dropped": 1329,
//         "playing": 393
//       },
//       "metacritic": 94,
//       "playtime": 46,
//       "suggestions_count": 602,
//       "updated": "2024-11-30T12:55:07",
//       "user_game": null,
//       "reviews_count": 4727,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2011-11-11",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows 7/Vista/XP PC (32 or 64 bit)\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Dual Core 2.0GHz or equivalent processor\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 2GB System RAM\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Disk Space:\u003C/strong\u003E 6GB free HDD Space\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card:\u003C/strong\u003E Direct X 9.0c compliant video card with 512 MB of RAM\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound:\u003C/strong\u003E DirectX compatible sound card\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Quad-core Intel or AMD CPU\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 4GB System RAM\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card:\u003C/strong\u003E DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)\u003Cbr\u003E\t\t\t\t\t\t\t\t\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
//             "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере"
//           }
//         },
//         {
//           "platform": {
//             "id": 186,
//             "name": "Xbox Series S/X",
//             "slug": "xbox-series-x",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1012,
//             "image_background": "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg"
//           },
//           "released_at": "2011-11-11",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 187,
//             "name": "PlayStation 5",
//             "slug": "playstation5",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1155,
//             "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//           },
//           "released_at": "2011-11-11",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2011-11-11",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2011-11-11",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo Switch",
//             "slug": "nintendo-switch",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5552,
//             "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
//           },
//           "released_at": "2011-11-11",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2011-11-11",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2011-11-11",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo",
//             "slug": "nintendo"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 5,
//           "name": "RPG",
//           "slug": "role-playing-games-rpg",
//           "games_count": 57991,
//           "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 6037,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 15144,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 32919,
//           "store": {
//             "id": 6,
//             "name": "Nintendo Store",
//             "slug": "nintendo",
//             "domain": "nintendo.com",
//             "games_count": 9086,
//             "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
//           }
//         },
//         {
//           "id": 49792,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 40849,
//           "name": "Steam Cloud",
//           "slug": "steam-cloud",
//           "language": "eng",
//           "games_count": 19981,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22749,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 36,
//           "name": "Open World",
//           "slug": "open-world",
//           "language": "eng",
//           "games_count": 8060,
//           "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 149,
//           "name": "Third Person",
//           "slug": "third-person",
//           "language": "eng",
//           "games_count": 12481,
//           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
//         },
//         {
//           "id": 40845,
//           "name": "Partial Controller Support",
//           "slug": "partial-controller-support",
//           "language": "eng",
//           "games_count": 12447,
//           "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
//         },
//         {
//           "id": 64,
//           "name": "Fantasy",
//           "slug": "fantasy",
//           "language": "eng",
//           "games_count": 29391,
//           "image_background": "https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg"
//         },
//         {
//           "id": 37,
//           "name": "Sandbox",
//           "slug": "sandbox",
//           "language": "eng",
//           "games_count": 7393,
//           "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
//         },
//         {
//           "id": 97,
//           "name": "Action RPG",
//           "slug": "action-rpg",
//           "language": "eng",
//           "games_count": 7508,
//           "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
//         },
//         {
//           "id": 40852,
//           "name": "Steam Workshop",
//           "slug": "steam-workshop",
//           "language": "eng",
//           "games_count": 1580,
//           "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//         },
//         {
//           "id": 468,
//           "name": "role-playing",
//           "slug": "role-playing",
//           "language": "eng",
//           "games_count": 1609,
//           "image_background": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg"
//         },
//         {
//           "id": 62,
//           "name": "Moddable",
//           "slug": "moddable",
//           "language": "eng",
//           "games_count": 988,
//           "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//         },
//         {
//           "id": 121,
//           "name": "Character Customization",
//           "slug": "character-customization",
//           "language": "eng",
//           "games_count": 5298,
//           "image_background": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg"
//         },
//         {
//           "id": 40,
//           "name": "Dark Fantasy",
//           "slug": "dark-fantasy",
//           "language": "eng",
//           "games_count": 4646,
//           "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//         },
//         {
//           "id": 66,
//           "name": "Medieval",
//           "slug": "medieval",
//           "language": "eng",
//           "games_count": 6919,
//           "image_background": "https://media.rawg.io/media/games/886/8868f9ea0c91d45316319ebf5dd4fc64.jpg"
//         },
//         {
//           "id": 82,
//           "name": "Magic",
//           "slug": "magic",
//           "language": "eng",
//           "games_count": 10028,
//           "image_background": "https://media.rawg.io/media/games/e75/e75c54e5a9a2754bab181b2240472389.jpg"
//         },
//         {
//           "id": 205,
//           "name": "Lore-Rich",
//           "slug": "lore-rich",
//           "language": "eng",
//           "games_count": 1579,
//           "image_background": "https://media.rawg.io/media/games/635/635749dc78e4fbd29a9773abd0a49c5e.jpg"
//         },
//         {
//           "id": 215,
//           "name": "Dragons",
//           "slug": "dragons",
//           "language": "eng",
//           "games_count": 2693,
//           "image_background": "https://media.rawg.io/media/games/729/729822a7ac978607241a310677c7775d.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
//         },
//         {
//           "id": 118307,
//           "image": "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg"
//         },
//         {
//           "id": 118308,
//           "image": "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg"
//         },
//         {
//           "id": 118309,
//           "image": "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg"
//         },
//         {
//           "id": 118310,
//           "image": "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg"
//         },
//         {
//           "id": 118311,
//           "image": "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg"
//         },
//         {
//           "id": 118312,
//           "image": "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
//         }
//       ]
//     },
//     {
//       "id": 28,
//       "slug": "red-dead-redemption-2",
//       "name": "Red Dead Redemption 2",
//       "released": "2018-10-26",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
//       "rating": 4.59,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 3825,
//           "percent": 73.42
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 944,
//           "percent": 18.12
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 285,
//           "percent": 5.47
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 156,
//           "percent": 2.99
//         }
//       ],
//       "ratings_count": 5097,
//       "reviews_text_count": 78,
//       "added": 15781,
//       "added_by_status": {
//         "yet": 951,
//         "owned": 8335,
//         "beaten": 3254,
//         "toplay": 1613,
//         "dropped": 706,
//         "playing": 922
//       },
//       "metacritic": 96,
//       "playtime": 21,
//       "suggestions_count": 616,
//       "updated": "2024-12-01T15:17:08",
//       "user_game": null,
//       "reviews_count": 5210,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2018-10-26",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003ERequires a 64-bit processor and operating system\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows 7 - Service Pack 1 (6.1.7601)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel® Core™ i5-2500K / AMD FX-6300\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 8 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ENetwork:\u003C/strong\u003E Broadband Internet connection\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 150 GB available space\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound Card:\u003C/strong\u003E Direct X Compatible\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003ERequires a 64-bit processor and operating system\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows 10 - April 2018 Update (v1803)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel® Core™ i7-4770K / AMD Ryzen 5 1500X\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 12 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ENetwork:\u003C/strong\u003E Broadband Internet connection\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 150 GB available space\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound Card:\u003C/strong\u003E Direct X Compatible\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2018-10-26",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2018-10-26",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 257732,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 374316,
//           "store": {
//             "id": 11,
//             "name": "Epic Games",
//             "slug": "epic-games",
//             "domain": "epicgames.com",
//             "games_count": 1360,
//             "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//           }
//         },
//         {
//           "id": 384218,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 48782,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 36,
//           "name": "Open World",
//           "slug": "open-world",
//           "language": "eng",
//           "games_count": 8060,
//           "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 149,
//           "name": "Third Person",
//           "slug": "third-person",
//           "language": "eng",
//           "games_count": 12481,
//           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
//         },
//         {
//           "id": 40845,
//           "name": "Partial Controller Support",
//           "slug": "partial-controller-support",
//           "language": "eng",
//           "games_count": 12447,
//           "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 9,
//           "name": "Online Co-Op",
//           "slug": "online-co-op",
//           "language": "eng",
//           "games_count": 6243,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 26,
//           "name": "Gore",
//           "slug": "gore",
//           "language": "eng",
//           "games_count": 5989,
//           "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
//         },
//         {
//           "id": 6,
//           "name": "Exploration",
//           "slug": "exploration",
//           "language": "eng",
//           "games_count": 24964,
//           "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//         },
//         {
//           "id": 37,
//           "name": "Sandbox",
//           "slug": "sandbox",
//           "language": "eng",
//           "games_count": 7393,
//           "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
//         },
//         {
//           "id": 34,
//           "name": "Violent",
//           "slug": "violent",
//           "language": "eng",
//           "games_count": 7020,
//           "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
//         },
//         {
//           "id": 150,
//           "name": "Third-Person Shooter",
//           "slug": "third-person-shooter",
//           "language": "eng",
//           "games_count": 3670,
//           "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
//         },
//         {
//           "id": 157,
//           "name": "PvP",
//           "slug": "pvp",
//           "language": "eng",
//           "games_count": 10121,
//           "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
//         },
//         {
//           "id": 40837,
//           "name": "In-App Purchases",
//           "slug": "in-app-purchases",
//           "language": "eng",
//           "games_count": 2894,
//           "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
//         },
//         {
//           "id": 192,
//           "name": "Mature",
//           "slug": "mature",
//           "language": "eng",
//           "games_count": 3631,
//           "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//         },
//         {
//           "id": 89,
//           "name": "Historical",
//           "slug": "historical",
//           "language": "eng",
//           "games_count": 3437,
//           "image_background": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg"
//         },
//         {
//           "id": 77,
//           "name": "Realistic",
//           "slug": "realistic",
//           "language": "eng",
//           "games_count": 6845,
//           "image_background": "https://media.rawg.io/media/games/e43/e43f9f0a1429bd9332020ac5876bc693.jpg"
//         },
//         {
//           "id": 110,
//           "name": "Cinematic",
//           "slug": "cinematic",
//           "language": "eng",
//           "games_count": 2540,
//           "image_background": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"
//         },
//         {
//           "id": 144,
//           "name": "Crime",
//           "slug": "crime",
//           "language": "eng",
//           "games_count": 2974,
//           "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
//         },
//         {
//           "id": 45878,
//           "name": "Online PvP",
//           "slug": "online-pvp",
//           "language": "eng",
//           "games_count": 5111,
//           "image_background": "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
//         },
//         {
//           "id": 478,
//           "name": "3rd-Person Perspective",
//           "slug": "3rd-person-perspective",
//           "language": "eng",
//           "games_count": 87,
//           "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//         },
//         {
//           "id": 270,
//           "name": "Blood",
//           "slug": "blood",
//           "language": "eng",
//           "games_count": 2093,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 78,
//           "name": "America",
//           "slug": "america",
//           "language": "eng",
//           "games_count": 762,
//           "image_background": "https://media.rawg.io/media/games/662/66261db966238da20c306c4b78ae4603.jpg"
//         },
//         {
//           "id": 578,
//           "name": "Masterpiece",
//           "slug": "masterpiece",
//           "language": "eng",
//           "games_count": 300,
//           "image_background": "https://media.rawg.io/media/games/9b5/9b5b8cf04ca150ec83867b388f29b999.jpg"
//         },
//         {
//           "id": 577,
//           "name": "Beautiful",
//           "slug": "beautiful",
//           "language": "eng",
//           "games_count": 1870,
//           "image_background": "https://media.rawg.io/media/games/d3e/d3ee2d7653cf9d4640335ff7a471ab07.jpg"
//         },
//         {
//           "id": 181,
//           "name": "Hunting",
//           "slug": "hunting",
//           "language": "eng",
//           "games_count": 987,
//           "image_background": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg"
//         },
//         {
//           "id": 152,
//           "name": "Western",
//           "slug": "western",
//           "language": "eng",
//           "games_count": 1326,
//           "image_background": "https://media.rawg.io/media/games/a41/a4126f8dc70a3e664b18b983722ed082.jpg"
//         },
//         {
//           "id": 5452,
//           "name": "3rd-person",
//           "slug": "3rd-person",
//           "language": "eng",
//           "games_count": 93,
//           "image_background": "https://media.rawg.io/media/screenshots/fa7/fa74edcad003d71d5406a0b8976a5b88.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//         },
//         {
//           "id": 778173,
//           "image": "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg"
//         },
//         {
//           "id": 778174,
//           "image": "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg"
//         },
//         {
//           "id": 778175,
//           "image": "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg"
//         },
//         {
//           "id": 778176,
//           "image": "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg"
//         },
//         {
//           "id": 778177,
//           "image": "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg"
//         },
//         {
//           "id": 778178,
//           "image": "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"
//         }
//       ]
//     },
//     {
//       "id": 4062,
//       "slug": "bioshock-infinite",
//       "name": "BioShock Infinite",
//       "released": "2013-03-26",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
//       "rating": 4.38,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 2248,
//           "percent": 55.03
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1363,
//           "percent": 33.37
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 358,
//           "percent": 8.76
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 116,
//           "percent": 2.84
//         }
//       ],
//       "ratings_count": 4045,
//       "reviews_text_count": 25,
//       "added": 15529,
//       "added_by_status": {
//         "yet": 833,
//         "owned": 9321,
//         "beaten": 4344,
//         "toplay": 419,
//         "dropped": 514,
//         "playing": 98
//       },
//       "metacritic": 94,
//       "playtime": 12,
//       "suggestions_count": 605,
//       "updated": "2024-11-27T13:05:46",
//       "user_game": null,
//       "reviews_count": 4085,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2013-03-26",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2013-03-26",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo Switch",
//             "slug": "nintendo-switch",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5552,
//             "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
//           },
//           "released_at": "2013-03-26",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2013-03-26",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2013-03-26",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows Vista Service Pack 2 32-bit\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 2GB\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Disk Space:\u003C/strong\u003E 20 GB free\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card:\u003C/strong\u003E DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card Memory:\u003C/strong\u003E 512 MB\t\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound:\u003C/strong\u003E DirectX Compatible\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows 7 Service Pack 1 64-bit\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Quad Core Processor\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 4GB\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Disk Space:\u003C/strong\u003E 30 GB free\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card:\u003C/strong\u003E DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card Memory:\u003C/strong\u003E 1024 MB\t\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound:\u003C/strong\u003E DirectX Compatible\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD",
//             "recommended": "Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD"
//           }
//         },
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2013-03-26",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2013-03-26",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo",
//             "slug": "nintendo"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 828870,
//           "store": {
//             "id": 11,
//             "name": "Epic Games",
//             "slug": "epic-games",
//             "domain": "epicgames.com",
//             "games_count": 1360,
//             "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//           }
//         },
//         {
//           "id": 71727,
//           "store": {
//             "id": 4,
//             "name": "App Store",
//             "slug": "apple-appstore",
//             "domain": "apps.apple.com",
//             "games_count": 75576,
//             "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//           }
//         },
//         {
//           "id": 440409,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         },
//         {
//           "id": 461035,
//           "store": {
//             "id": 6,
//             "name": "Nintendo Store",
//             "slug": "nintendo",
//             "domain": "nintendo.com",
//             "games_count": 9086,
//             "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
//           }
//         },
//         {
//           "id": 4382,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 13084,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 33810,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 40849,
//           "name": "Steam Cloud",
//           "slug": "steam-cloud",
//           "language": "eng",
//           "games_count": 19981,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22749,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 32,
//           "name": "Sci-fi",
//           "slug": "sci-fi",
//           "language": "eng",
//           "games_count": 20035,
//           "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 64,
//           "name": "Fantasy",
//           "slug": "fantasy",
//           "language": "eng",
//           "games_count": 29391,
//           "image_background": "https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg"
//         },
//         {
//           "id": 26,
//           "name": "Gore",
//           "slug": "gore",
//           "language": "eng",
//           "games_count": 5989,
//           "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
//         },
//         {
//           "id": 115,
//           "name": "Controller",
//           "slug": "controller",
//           "language": "eng",
//           "games_count": 12622,
//           "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//         },
//         {
//           "id": 119,
//           "name": "Dystopian",
//           "slug": "dystopian",
//           "language": "eng",
//           "games_count": 2290,
//           "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
//         },
//         {
//           "id": 154,
//           "name": "Steampunk",
//           "slug": "steampunk",
//           "language": "eng",
//           "games_count": 1245,
//           "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
//         },
//         {
//           "id": 305,
//           "name": "Linear",
//           "slug": "linear",
//           "language": "eng",
//           "games_count": 7222,
//           "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//         },
//         {
//           "id": 208,
//           "name": "Alternate History",
//           "slug": "alternate-history",
//           "language": "eng",
//           "games_count": 1901,
//           "image_background": "https://media.rawg.io/media/screenshots/36d/36d3861a6cdb4ae5b1ca44cec814be8b.jpg"
//         },
//         {
//           "id": 317,
//           "name": "Time Travel",
//           "slug": "time-travel",
//           "language": "eng",
//           "games_count": 1855,
//           "image_background": "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg"
//         },
//         {
//           "id": 287,
//           "name": "Political",
//           "slug": "political",
//           "language": "eng",
//           "games_count": 653,
//           "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//         },
//         {
//           "id": 98549,
//           "image": "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg"
//         },
//         {
//           "id": 98550,
//           "image": "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg"
//         },
//         {
//           "id": 98551,
//           "image": "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg"
//         },
//         {
//           "id": 98552,
//           "image": "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg"
//         },
//         {
//           "id": 98553,
//           "image": "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg"
//         },
//         {
//           "id": 98554,
//           "image": "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
//         }
//       ]
//     },
//     {
//       "id": 802,
//       "slug": "borderlands-2",
//       "name": "Borderlands 2",
//       "released": "2012-09-18",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
//       "rating": 4.02,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1547,
//           "percent": 47.94
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 999,
//           "percent": 30.96
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 549,
//           "percent": 17.01
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 132,
//           "percent": 4.09
//         }
//       ],
//       "ratings_count": 3207,
//       "reviews_text_count": 12,
//       "added": 15382,
//       "added_by_status": {
//         "yet": 613,
//         "owned": 10706,
//         "beaten": 2323,
//         "toplay": 237,
//         "dropped": 1290,
//         "playing": 213
//       },
//       "metacritic": 89,
//       "playtime": 10,
//       "suggestions_count": 690,
//       "updated": "2024-11-27T23:36:20",
//       "user_game": null,
//       "reviews_count": 3227,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2012-09-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2012-09-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2012-09-18",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows XP SP3\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E 2.4 GHz Dual Core Processor\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 2 GB(XP)/ 2 GB(Vista)\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Disk Space:\u003C/strong\u003E 13 GB free\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Memory:\u003C/strong\u003E 256 MB\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card:\u003C/strong\u003E NVIDIA GeForce 8500 /ATI Radeon HD 2600\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound:\u003C/strong\u003E DirectX 9.0c Compatible\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EOther Requirements:\u003C/strong\u003EInitial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows XP SP3/Vista/Win 7\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E 2.3 GHz Quad Core processor\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 2 GB\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Disk Space:\u003C/strong\u003E 20 GB free\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Memory:\u003C/strong\u003E 512MB\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card:\u003C/strong\u003E NVIDIA GeForce GTX 560 / ATI Radeon HD 5850\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound:\u003C/strong\u003E DirectX 9.0c Compatible\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EOther Requirements:\u003C/strong\u003EInitial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение",
//             "recommended": "Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение"
//           }
//         },
//         {
//           "platform": {
//             "id": 21,
//             "name": "Android",
//             "slug": "android",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 52403,
//             "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//           },
//           "released_at": "2012-09-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2012-09-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 19,
//             "name": "PS Vita",
//             "slug": "ps-vita",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 1448,
//             "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
//           },
//           "released_at": "2012-09-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2012-09-18",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 8,
//             "name": "Android",
//             "slug": "android"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         },
//         {
//           "id": 5,
//           "name": "RPG",
//           "slug": "role-playing-games-rpg",
//           "games_count": 57991,
//           "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 4000,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 213037,
//           "store": {
//             "id": 8,
//             "name": "Google Play",
//             "slug": "google-play",
//             "domain": "play.google.com",
//             "games_count": 17104,
//             "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//           }
//         },
//         {
//           "id": 11088,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 34042,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         },
//         {
//           "id": 71617,
//           "store": {
//             "id": 4,
//             "name": "App Store",
//             "slug": "apple-appstore",
//             "domain": "apps.apple.com",
//             "games_count": 75576,
//             "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//           }
//         },
//         {
//           "id": 817,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 40849,
//           "name": "Steam Cloud",
//           "slug": "steam-cloud",
//           "language": "eng",
//           "games_count": 19981,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22749,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 36,
//           "name": "Open World",
//           "slug": "open-world",
//           "language": "eng",
//           "games_count": 8060,
//           "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//         },
//         {
//           "id": 411,
//           "name": "cooperative",
//           "slug": "cooperative",
//           "language": "eng",
//           "games_count": 5496,
//           "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//         },
//         {
//           "id": 32,
//           "name": "Sci-fi",
//           "slug": "sci-fi",
//           "language": "eng",
//           "games_count": 20035,
//           "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 9,
//           "name": "Online Co-Op",
//           "slug": "online-co-op",
//           "language": "eng",
//           "games_count": 6243,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 4,
//           "name": "Funny",
//           "slug": "funny",
//           "language": "eng",
//           "games_count": 26047,
//           "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
//         },
//         {
//           "id": 123,
//           "name": "Comedy",
//           "slug": "comedy",
//           "language": "eng",
//           "games_count": 13150,
//           "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//         },
//         {
//           "id": 97,
//           "name": "Action RPG",
//           "slug": "action-rpg",
//           "language": "eng",
//           "games_count": 7508,
//           "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
//         },
//         {
//           "id": 167,
//           "name": "Futuristic",
//           "slug": "futuristic",
//           "language": "eng",
//           "games_count": 5848,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 120,
//           "name": "Memes",
//           "slug": "memes",
//           "language": "eng",
//           "games_count": 1932,
//           "image_background": "https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg"
//         },
//         {
//           "id": 148,
//           "name": "Dark Humor",
//           "slug": "dark-humor",
//           "language": "eng",
//           "games_count": 3199,
//           "image_background": "https://media.rawg.io/media/games/bfb/bfb2bf7a0413443b1fcf0be7c3244053.jpg"
//         },
//         {
//           "id": 166,
//           "name": "Stylized",
//           "slug": "stylized",
//           "language": "eng",
//           "games_count": 7571,
//           "image_background": "https://media.rawg.io/media/games/8cd/8cd179c85bd3de8f79bef245b15075fb.jpg"
//         },
//         {
//           "id": 98,
//           "name": "Loot",
//           "slug": "loot",
//           "language": "eng",
//           "games_count": 2447,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 7041,
//           "image": "https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg"
//         },
//         {
//           "id": 7062,
//           "image": "https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg"
//         },
//         {
//           "id": 7070,
//           "image": "https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg"
//         },
//         {
//           "id": 7072,
//           "image": "https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg"
//         },
//         {
//           "id": 7081,
//           "image": "https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg"
//         },
//         {
//           "id": 7088,
//           "image": "https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg"
//         }
//       ]
//     },
//     {
//       "id": 3439,
//       "slug": "life-is-strange-episode-1-2",
//       "name": "Life is Strange",
//       "released": "2015-01-29",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
//       "rating": 4.11,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 1617,
//           "percent": 43.8
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1350,
//           "percent": 36.57
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 491,
//           "percent": 13.3
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 234,
//           "percent": 6.34
//         }
//       ],
//       "ratings_count": 3645,
//       "reviews_text_count": 31,
//       "added": 15367,
//       "added_by_status": {
//         "yet": 781,
//         "owned": 10008,
//         "beaten": 3419,
//         "toplay": 359,
//         "dropped": 649,
//         "playing": 151
//       },
//       "metacritic": 83,
//       "playtime": 6,
//       "suggestions_count": 548,
//       "updated": "2024-11-28T20:31:40",
//       "user_game": null,
//       "reviews_count": 3692,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "iOS",
//             "slug": "ios",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 77377,
//             "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": {
//             "minimum": "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 21,
//             "name": "Android",
//             "slug": "android",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 52403,
//             "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": {
//             "minimum": "6.0 and up"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2015-01-29",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "iOS",
//             "slug": "ios"
//           }
//         },
//         {
//           "platform": {
//             "id": 8,
//             "name": "Android",
//             "slug": "android"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 3,
//           "name": "Adventure",
//           "slug": "adventure",
//           "games_count": 143728,
//           "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 451321,
//           "store": {
//             "id": 5,
//             "name": "GOG",
//             "slug": "gog",
//             "domain": "gog.com",
//             "games_count": 6479,
//             "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
//           }
//         },
//         {
//           "id": 3702,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 35603,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 35602,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         },
//         {
//           "id": 217695,
//           "store": {
//             "id": 8,
//             "name": "Google Play",
//             "slug": "google-play",
//             "domain": "play.google.com",
//             "games_count": 17104,
//             "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//           }
//         },
//         {
//           "id": 245823,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         },
//         {
//           "id": 44714,
//           "store": {
//             "id": 4,
//             "name": "App Store",
//             "slug": "apple-appstore",
//             "domain": "apps.apple.com",
//             "games_count": 75576,
//             "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 149,
//           "name": "Third Person",
//           "slug": "third-person",
//           "language": "eng",
//           "games_count": 12481,
//           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
//         },
//         {
//           "id": 189,
//           "name": "Female Protagonist",
//           "slug": "female-protagonist",
//           "language": "eng",
//           "games_count": 13395,
//           "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
//         },
//         {
//           "id": 41,
//           "name": "Dark",
//           "slug": "dark",
//           "language": "eng",
//           "games_count": 16680,
//           "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
//         },
//         {
//           "id": 141,
//           "name": "Point & Click",
//           "slug": "point-click",
//           "language": "eng",
//           "games_count": 13779,
//           "image_background": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg"
//         },
//         {
//           "id": 111,
//           "name": "Short",
//           "slug": "short",
//           "language": "eng",
//           "games_count": 57864,
//           "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
//         },
//         {
//           "id": 117,
//           "name": "Mystery",
//           "slug": "mystery",
//           "language": "eng",
//           "games_count": 14391,
//           "image_background": "https://media.rawg.io/media/games/c00/c003705c0eaed100397ae408b7b89e90.jpg"
//         },
//         {
//           "id": 145,
//           "name": "Choices Matter",
//           "slug": "choices-matter",
//           "language": "eng",
//           "games_count": 6294,
//           "image_background": "https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg"
//         },
//         {
//           "id": 120,
//           "name": "Memes",
//           "slug": "memes",
//           "language": "eng",
//           "games_count": 1932,
//           "image_background": "https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg"
//         },
//         {
//           "id": 91,
//           "name": "Walking Simulator",
//           "slug": "walking-simulator",
//           "language": "eng",
//           "games_count": 7690,
//           "image_background": "https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg"
//         },
//         {
//           "id": 218,
//           "name": "Multiple Endings",
//           "slug": "multiple-endings",
//           "language": "eng",
//           "games_count": 9574,
//           "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//         },
//         {
//           "id": 406,
//           "name": "Story",
//           "slug": "story",
//           "language": "eng",
//           "games_count": 11459,
//           "image_background": "https://media.rawg.io/media/screenshots/439/4397f836727bdd13bd38deeb4f7355bb_GacwmJ9.jpg"
//         },
//         {
//           "id": 232,
//           "name": "Episodic",
//           "slug": "episodic",
//           "language": "eng",
//           "games_count": 486,
//           "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
//         },
//         {
//           "id": 295,
//           "name": "Soundtrack",
//           "slug": "soundtrack",
//           "language": "eng",
//           "games_count": 3124,
//           "image_background": "https://media.rawg.io/media/games/b56/b56a60b8dd77653636ff313bcafb251e.jpg"
//         },
//         {
//           "id": 317,
//           "name": "Time Travel",
//           "slug": "time-travel",
//           "language": "eng",
//           "games_count": 1855,
//           "image_background": "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg"
//         },
//         {
//           "id": 302,
//           "name": "Time Manipulation",
//           "slug": "time-manipulation",
//           "language": "eng",
//           "games_count": 600,
//           "image_background": "https://media.rawg.io/media/games/5d0/5d0ed9e749d4f7aa4ced96715dc3d0cc.jpg"
//         },
//         {
//           "id": 992,
//           "name": "student",
//           "slug": "student",
//           "language": "eng",
//           "games_count": 1530,
//           "image_background": "https://media.rawg.io/media/screenshots/238/238e604c624909062ab66ebbb37b510d.jpg"
//         },
//         {
//           "id": 2682,
//           "name": "strange",
//           "slug": "strange",
//           "language": "eng",
//           "games_count": 333,
//           "image_background": "https://media.rawg.io/media/screenshots/f48/f48af1368eb7bbed7a8846bd06294670.jpg"
//         },
//         {
//           "id": 3197,
//           "name": "photography",
//           "slug": "photography",
//           "language": "eng",
//           "games_count": 205,
//           "image_background": "https://media.rawg.io/media/screenshots/985/98500c4fb5ca603c1ce2e0a3cd6cf866.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//         },
//         {
//           "id": 1826487,
//           "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
//         },
//         {
//           "id": 1826488,
//           "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
//         },
//         {
//           "id": 1826489,
//           "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
//         },
//         {
//           "id": 1826490,
//           "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
//         },
//         {
//           "id": 1826491,
//           "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
//         },
//         {
//           "id": 1826492,
//           "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
//         }
//       ]
//     },
//     {
//       "id": 13537,
//       "slug": "half-life-2",
//       "name": "Half-Life 2",
//       "released": "2004-11-16",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
//       "rating": 4.49,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 2490,
//           "percent": 63.8
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1066,
//           "percent": 27.31
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 224,
//           "percent": 5.74
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 123,
//           "percent": 3.15
//         }
//       ],
//       "ratings_count": 3879,
//       "reviews_text_count": 17,
//       "added": 15023,
//       "added_by_status": {
//         "yet": 679,
//         "owned": 9613,
//         "beaten": 3764,
//         "toplay": 317,
//         "dropped": 560,
//         "playing": 90
//       },
//       "metacritic": 96,
//       "playtime": 7,
//       "suggestions_count": 558,
//       "updated": "2024-11-30T12:55:02",
//       "user_game": null,
//       "reviews_count": 3903,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2004-11-16",
//           "requirements_en": {
//             "minimum": "Minimum:\r\n\r\nOS: Windows 7, Vista, XP\r\n\r\nProcessor: 1.7 Ghz\r\n\r\nMemory: 512 MB RAM\r\n\r\nGraphics: DirectX 8.1 level Graphics Card (requires support for SSE)\r\n\r\nStorage: 6500 MB available space"
//           },
//           "requirements_ru": {
//             "minimum": "Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет",
//             "recommended": "Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2004-11-16",
//           "requirements_en": {
//             "minimum": "Minimum:\r\n\r\nOS: Leopard 10.5.8, Snow Leopard 10.6.3, or higher\r\n\r\nMemory: 1 GB RAM\r\n\r\nGraphics: Nvidia GeForce8 or higher, ATI X1600 or higher, Intel HD 3000 or higher"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2004-11-16",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2004-11-16",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 80,
//             "name": "Xbox",
//             "slug": "xbox-old",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 739,
//             "image_background": "https://media.rawg.io/media/games/b1d/b1de33eca64ad293702d9554f5ac5cd5.jpg"
//           },
//           "released_at": "2004-11-16",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 21,
//             "name": "Android",
//             "slug": "android",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 52403,
//             "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//           },
//           "released_at": "2004-11-16",
//           "requirements_en": {
//             "minimum": "4.4 and up"
//           },
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 8,
//             "name": "Android",
//             "slug": "android"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 14891,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 41441,
//           "store": {
//             "id": 8,
//             "name": "Google Play",
//             "slug": "google-play",
//             "domain": "play.google.com",
//             "games_count": 17104,
//             "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40849,
//           "name": "Steam Cloud",
//           "slug": "steam-cloud",
//           "language": "eng",
//           "games_count": 19981,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 32,
//           "name": "Sci-fi",
//           "slug": "sci-fi",
//           "language": "eng",
//           "games_count": 20035,
//           "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
//         },
//         {
//           "id": 40845,
//           "name": "Partial Controller Support",
//           "slug": "partial-controller-support",
//           "language": "eng",
//           "games_count": 12447,
//           "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
//         },
//         {
//           "id": 16,
//           "name": "Horror",
//           "slug": "horror",
//           "language": "eng",
//           "games_count": 45884,
//           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 193,
//           "name": "Classic",
//           "slug": "classic",
//           "language": "eng",
//           "games_count": 1802,
//           "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//         },
//         {
//           "id": 63,
//           "name": "Zombies",
//           "slug": "zombies",
//           "language": "eng",
//           "games_count": 10582,
//           "image_background": "https://media.rawg.io/media/games/1be/1be575aa6de86de328433a63fb534d9a.jpg"
//         },
//         {
//           "id": 62,
//           "name": "Moddable",
//           "slug": "moddable",
//           "language": "eng",
//           "games_count": 988,
//           "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//         },
//         {
//           "id": 40833,
//           "name": "Captions available",
//           "slug": "captions-available",
//           "language": "eng",
//           "games_count": 1406,
//           "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
//         },
//         {
//           "id": 114,
//           "name": "Physics",
//           "slug": "physics",
//           "language": "eng",
//           "games_count": 19913,
//           "image_background": "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg"
//         },
//         {
//           "id": 172,
//           "name": "Aliens",
//           "slug": "aliens",
//           "language": "eng",
//           "games_count": 7011,
//           "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
//         },
//         {
//           "id": 119,
//           "name": "Dystopian",
//           "slug": "dystopian",
//           "language": "eng",
//           "games_count": 2290,
//           "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
//         },
//         {
//           "id": 40839,
//           "name": "Includes Source SDK",
//           "slug": "includes-source-sdk",
//           "language": "eng",
//           "games_count": 63,
//           "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//         },
//         {
//           "id": 319,
//           "name": "Silent Protagonist",
//           "slug": "silent-protagonist",
//           "language": "eng",
//           "games_count": 101,
//           "image_background": "https://media.rawg.io/media/screenshots/471/471b2e4259541d65d7127cbb6611358f.jpg"
//         },
//         {
//           "id": 62349,
//           "name": "vr mod",
//           "slug": "vr-mod",
//           "language": "eng",
//           "games_count": 17,
//           "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//         },
//         {
//           "id": 115804,
//           "image": "https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg"
//         },
//         {
//           "id": 115805,
//           "image": "https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg"
//         },
//         {
//           "id": 115806,
//           "image": "https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg"
//         },
//         {
//           "id": 115807,
//           "image": "https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg"
//         },
//         {
//           "id": 115808,
//           "image": "https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg"
//         },
//         {
//           "id": 115809,
//           "image": "https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg"
//         }
//       ]
//     },
//     {
//       "id": 4286,
//       "slug": "bioshock",
//       "name": "BioShock",
//       "released": "2007-08-21",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
//       "rating": 4.36,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 1736,
//           "percent": 52.7
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1206,
//           "percent": 36.61
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 247,
//           "percent": 7.5
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 105,
//           "percent": 3.19
//         }
//       ],
//       "ratings_count": 3253,
//       "reviews_text_count": 25,
//       "added": 14085,
//       "added_by_status": {
//         "yet": 632,
//         "owned": 9095,
//         "beaten": 3185,
//         "toplay": 335,
//         "dropped": 726,
//         "playing": 112
//       },
//       "metacritic": 96,
//       "playtime": 3,
//       "suggestions_count": 650,
//       "updated": "2024-11-26T15:44:43",
//       "user_game": null,
//       "reviews_count": 3294,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2007-08-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2007-08-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2007-08-21",
//           "requirements_en": {
//             "minimum": "\u003Ch2 class=\"bb_tag\"\u003E\u003Cstrong\u003EMinimum: \u003C/strong\u003E\u003C/h2\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOperating System\u003C/strong\u003E: Windows XP (with Service Pack 2) or Windows Vista\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ECPU\u003C/strong\u003E: Intel single-core Pentium 4 processor at 2.4GHz\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ERAM\u003C/strong\u003E: 1 GB\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card\u003C/strong\u003E: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound Card\u003C/strong\u003E: 100% direct X 9.0c compatible sound card\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Drive Space\u003C/strong\u003E: 8GB\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EGame requires Internet connection for activation\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Ch2 class=\"bb_tag\"\u003E\u003Cstrong\u003ERecommended: \u003C/strong\u003E\u003C/h2\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003ECPU\u003C/strong\u003E: Intel Core 2 Duo processor\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ERAM\u003C/strong\u003E: 2GB\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card\u003C/strong\u003E: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound Card\u003C/strong\u003E: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение",
//             "recommended": "Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение"
//           }
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2007-08-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 4614,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 79531,
//           "store": {
//             "id": 4,
//             "name": "App Store",
//             "slug": "apple-appstore",
//             "domain": "apps.apple.com",
//             "games_count": 75576,
//             "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//           }
//         },
//         {
//           "id": 440407,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         },
//         {
//           "id": 20580,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 33844,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22749,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 32,
//           "name": "Sci-fi",
//           "slug": "sci-fi",
//           "language": "eng",
//           "games_count": 20035,
//           "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
//         },
//         {
//           "id": 40845,
//           "name": "Partial Controller Support",
//           "slug": "partial-controller-support",
//           "language": "eng",
//           "games_count": 12447,
//           "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
//         },
//         {
//           "id": 16,
//           "name": "Horror",
//           "slug": "horror",
//           "language": "eng",
//           "games_count": 45884,
//           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 193,
//           "name": "Classic",
//           "slug": "classic",
//           "language": "eng",
//           "games_count": 1802,
//           "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//         },
//         {
//           "id": 97,
//           "name": "Action RPG",
//           "slug": "action-rpg",
//           "language": "eng",
//           "games_count": 7508,
//           "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
//         },
//         {
//           "id": 41,
//           "name": "Dark",
//           "slug": "dark",
//           "language": "eng",
//           "games_count": 16680,
//           "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
//         },
//         {
//           "id": 119,
//           "name": "Dystopian",
//           "slug": "dystopian",
//           "language": "eng",
//           "games_count": 2290,
//           "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
//         },
//         {
//           "id": 154,
//           "name": "Steampunk",
//           "slug": "steampunk",
//           "language": "eng",
//           "games_count": 1245,
//           "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
//         },
//         {
//           "id": 208,
//           "name": "Alternate History",
//           "slug": "alternate-history",
//           "language": "eng",
//           "games_count": 1901,
//           "image_background": "https://media.rawg.io/media/screenshots/36d/36d3861a6cdb4ae5b1ca44cec814be8b.jpg"
//         },
//         {
//           "id": 287,
//           "name": "Political",
//           "slug": "political",
//           "language": "eng",
//           "games_count": 653,
//           "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
//         },
//         {
//           "id": 250,
//           "name": "Underwater",
//           "slug": "underwater",
//           "language": "eng",
//           "games_count": 2142,
//           "image_background": "https://media.rawg.io/media/games/386/3869a2540b5fd39776fd640686610d05.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 170993,
//           "image": "https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg"
//         },
//         {
//           "id": 170994,
//           "image": "https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg"
//         },
//         {
//           "id": 170995,
//           "image": "https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg"
//         },
//         {
//           "id": 170996,
//           "image": "https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg"
//         },
//         {
//           "id": 170997,
//           "image": "https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg"
//         },
//         {
//           "id": 170998,
//           "image": "https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg"
//         }
//       ]
//     },
//     {
//       "id": 32,
//       "slug": "destiny-2",
//       "name": "Destiny 2",
//       "released": "2017-09-06",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
//       "rating": 3.53,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1174,
//           "percent": 44.47
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 856,
//           "percent": 32.42
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 360,
//           "percent": 13.64
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 250,
//           "percent": 9.47
//         }
//       ],
//       "ratings_count": 2615,
//       "reviews_text_count": 20,
//       "added": 14014,
//       "added_by_status": {
//         "yet": 461,
//         "owned": 10649,
//         "beaten": 777,
//         "toplay": 170,
//         "dropped": 1547,
//         "playing": 410
//       },
//       "metacritic": 82,
//       "playtime": 5,
//       "suggestions_count": 1230,
//       "updated": "2024-11-30T18:54:13",
//       "user_game": null,
//       "reviews_count": 2640,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2017-09-06",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2017-09-06",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2017-09-06",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 171,
//             "name": "Web",
//             "slug": "web",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 260080,
//             "image_background": "https://media.rawg.io/media/games/a01/a01b34c722ceec784817381eb1824fa5.jpg"
//           },
//           "released_at": "2017-09-06",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 186,
//             "name": "Xbox Series S/X",
//             "slug": "xbox-series-x",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1012,
//             "image_background": "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg"
//           },
//           "released_at": "2017-09-06",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 187,
//             "name": "PlayStation 5",
//             "slug": "playstation5",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1155,
//             "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//           },
//           "released_at": "2017-09-06",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Web",
//             "slug": "web"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 837910,
//           "store": {
//             "id": 11,
//             "name": "Epic Games",
//             "slug": "epic-games",
//             "domain": "epicgames.com",
//             "games_count": 1360,
//             "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//           }
//         },
//         {
//           "id": 32,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 808,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         },
//         {
//           "id": 326831,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 36,
//           "name": "Open World",
//           "slug": "open-world",
//           "language": "eng",
//           "games_count": 8060,
//           "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//         },
//         {
//           "id": 411,
//           "name": "cooperative",
//           "slug": "cooperative",
//           "language": "eng",
//           "games_count": 5496,
//           "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 32,
//           "name": "Sci-fi",
//           "slug": "sci-fi",
//           "language": "eng",
//           "games_count": 20035,
//           "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 9,
//           "name": "Online Co-Op",
//           "slug": "online-co-op",
//           "language": "eng",
//           "games_count": 6243,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 6,
//           "name": "Exploration",
//           "slug": "exploration",
//           "language": "eng",
//           "games_count": 24964,
//           "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//         },
//         {
//           "id": 79,
//           "name": "Free to Play",
//           "slug": "free-to-play",
//           "language": "eng",
//           "games_count": 7794,
//           "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
//         },
//         {
//           "id": 397,
//           "name": "Online multiplayer",
//           "slug": "online-multiplayer",
//           "language": "eng",
//           "games_count": 3804,
//           "image_background": "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg"
//         },
//         {
//           "id": 69,
//           "name": "Action-Adventure",
//           "slug": "action-adventure",
//           "language": "eng",
//           "games_count": 17910,
//           "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
//         },
//         {
//           "id": 157,
//           "name": "PvP",
//           "slug": "pvp",
//           "language": "eng",
//           "games_count": 10121,
//           "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
//         },
//         {
//           "id": 25,
//           "name": "Space",
//           "slug": "space",
//           "language": "eng",
//           "games_count": 43267,
//           "image_background": "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg"
//         },
//         {
//           "id": 167,
//           "name": "Futuristic",
//           "slug": "futuristic",
//           "language": "eng",
//           "games_count": 5848,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 1465,
//           "name": "combat",
//           "slug": "combat",
//           "language": "eng",
//           "games_count": 13433,
//           "image_background": "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg"
//         },
//         {
//           "id": 172,
//           "name": "Aliens",
//           "slug": "aliens",
//           "language": "eng",
//           "games_count": 7011,
//           "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
//         },
//         {
//           "id": 406,
//           "name": "Story",
//           "slug": "story",
//           "language": "eng",
//           "games_count": 11459,
//           "image_background": "https://media.rawg.io/media/screenshots/439/4397f836727bdd13bd38deeb4f7355bb_GacwmJ9.jpg"
//         },
//         {
//           "id": 478,
//           "name": "3rd-Person Perspective",
//           "slug": "3rd-person-perspective",
//           "language": "eng",
//           "games_count": 87,
//           "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//         },
//         {
//           "id": 413,
//           "name": "online",
//           "slug": "online",
//           "language": "eng",
//           "games_count": 6550,
//           "image_background": "https://media.rawg.io/media/screenshots/73e/73e4d78a55248fc26a4e06726b6bd969.jpg"
//         },
//         {
//           "id": 158,
//           "name": "MMORPG",
//           "slug": "mmorpg",
//           "language": "eng",
//           "games_count": 1498,
//           "image_background": "https://media.rawg.io/media/screenshots/b01/b016f8c8cd48b7093004dab596b7382f.jpg"
//         },
//         {
//           "id": 171,
//           "name": "PvE",
//           "slug": "pve",
//           "language": "eng",
//           "games_count": 5846,
//           "image_background": "https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg"
//         },
//         {
//           "id": 98,
//           "name": "Loot",
//           "slug": "loot",
//           "language": "eng",
//           "games_count": 2447,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         },
//         {
//           "id": 205,
//           "name": "Lore-Rich",
//           "slug": "lore-rich",
//           "language": "eng",
//           "games_count": 1579,
//           "image_background": "https://media.rawg.io/media/games/635/635749dc78e4fbd29a9773abd0a49c5e.jpg"
//         },
//         {
//           "id": 2030,
//           "name": "city",
//           "slug": "city",
//           "language": "eng",
//           "games_count": 9244,
//           "image_background": "https://media.rawg.io/media/screenshots/28e/28e807ed5022f3abad262150a648910b.jpg"
//         },
//         {
//           "id": 5816,
//           "name": "console",
//           "slug": "console",
//           "language": "eng",
//           "games_count": 1390,
//           "image_background": "https://media.rawg.io/media/games/faa/faa6a4a7a2e57faf2960329630aee211.jpg"
//         },
//         {
//           "id": 744,
//           "name": "friends",
//           "slug": "friends",
//           "language": "eng",
//           "games_count": 15165,
//           "image_background": "https://media.rawg.io/media/games/dd4/dd43f221a21fce6eb3d27381569779d5.jpg"
//         },
//         {
//           "id": 578,
//           "name": "Masterpiece",
//           "slug": "masterpiece",
//           "language": "eng",
//           "games_count": 300,
//           "image_background": "https://media.rawg.io/media/games/9b5/9b5b8cf04ca150ec83867b388f29b999.jpg"
//         },
//         {
//           "id": 3109,
//           "name": "weapons",
//           "slug": "weapons",
//           "language": "eng",
//           "games_count": 2269,
//           "image_background": "https://media.rawg.io/media/games/60c/60ca6f84551e6f5435d97b603a77d551.jpg"
//         },
//         {
//           "id": 1484,
//           "name": "skill",
//           "slug": "skill",
//           "language": "eng",
//           "games_count": 3525,
//           "image_background": "https://media.rawg.io/media/games/6b4/6b4353172a07d3c4c83fa731f7ddaee6.jpg"
//         },
//         {
//           "id": 3046,
//           "name": "destroy",
//           "slug": "destroy",
//           "language": "eng",
//           "games_count": 4616,
//           "image_background": "https://media.rawg.io/media/screenshots/164/164d779b57110998e8033be05e86cf49.jpg"
//         },
//         {
//           "id": 1743,
//           "name": "collect",
//           "slug": "collect",
//           "language": "eng",
//           "games_count": 8078,
//           "image_background": "https://media.rawg.io/media/screenshots/8a1/8a1d8cb1d53f723795150e580c0c3c6b.jpg"
//         },
//         {
//           "id": 2184,
//           "name": "hunt",
//           "slug": "hunt",
//           "language": "eng",
//           "games_count": 2348,
//           "image_background": "https://media.rawg.io/media/screenshots/d86/d860ad3ffad8a9a580067185fc77d093.jpg"
//         },
//         {
//           "id": 754,
//           "name": "gun",
//           "slug": "gun",
//           "language": "eng",
//           "games_count": 3212,
//           "image_background": "https://media.rawg.io/media/screenshots/fec/fec8098f8abf31370f688472e828a701.jpg"
//         },
//         {
//           "id": 1527,
//           "name": "rain",
//           "slug": "rain",
//           "language": "eng",
//           "games_count": 862,
//           "image_background": "https://media.rawg.io/media/screenshots/73e/73e4d78a55248fc26a4e06726b6bd969.jpg"
//         },
//         {
//           "id": 18426,
//           "name": "enemy",
//           "slug": "enemy",
//           "language": "eng",
//           "games_count": 2573,
//           "image_background": "https://media.rawg.io/media/screenshots/fbe/fbeeec3045f8d8c42a00d9f99ccfaba4.jpg"
//         },
//         {
//           "id": 691,
//           "name": "quick",
//           "slug": "quick",
//           "language": "eng",
//           "games_count": 931,
//           "image_background": "https://media.rawg.io/media/games/9e5/9e5db3cb9bc5e74293a344998207a22c.jpg"
//         },
//         {
//           "id": 2863,
//           "name": "darkness",
//           "slug": "darkness",
//           "language": "eng",
//           "games_count": 473,
//           "image_background": "https://media.rawg.io/media/screenshots/c52/c5208f07a98add9f9abe6cb098c384f3.jpg"
//         },
//         {
//           "id": 6580,
//           "name": "defender",
//           "slug": "defender",
//           "language": "eng",
//           "games_count": 182,
//           "image_background": "https://media.rawg.io/media/screenshots/ab6/ab6641de7380d424fc8c90876f24bbb2.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 3,
//         "name": "Teen",
//         "slug": "teen"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//         },
//         {
//           "id": 2629150,
//           "image": "https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg"
//         },
//         {
//           "id": 2629151,
//           "image": "https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg"
//         },
//         {
//           "id": 2629152,
//           "image": "https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg"
//         },
//         {
//           "id": 2629153,
//           "image": "https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg"
//         },
//         {
//           "id": 2629154,
//           "image": "https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg"
//         },
//         {
//           "id": 2629155,
//           "image": "https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg"
//         }
//       ]
//     },
//     {
//       "id": 58175,
//       "slug": "god-of-war-2",
//       "name": "God of War (2018)",
//       "released": "2018-04-20",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
//       "rating": 4.56,
//       "rating_top": 5,
//       "ratings": [
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 3480,
//           "percent": 70.76
//         },
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1029,
//           "percent": 20.92
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 244,
//           "percent": 4.96
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 165,
//           "percent": 3.36
//         }
//       ],
//       "ratings_count": 4817,
//       "reviews_text_count": 72,
//       "added": 13735,
//       "added_by_status": {
//         "yet": 691,
//         "owned": 7028,
//         "beaten": 4084,
//         "toplay": 1166,
//         "dropped": 353,
//         "playing": 413
//       },
//       "metacritic": 94,
//       "playtime": 14,
//       "suggestions_count": 596,
//       "updated": "2024-12-03T21:54:05",
//       "user_game": null,
//       "reviews_count": 4918,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540242,
//             "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
//           },
//           "released_at": "2018-04-20",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003ERequires a 64-bit processor and operating system\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows 10 64-bit\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 8 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 11\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 70 GB available space\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EAdditional Notes:\u003C/strong\u003E DirectX feature level 11_1 required\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003ERequires a 64-bit processor and operating system\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows 10 64-bit\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 8 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 11\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 70 GB available space\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EAdditional Notes:\u003C/strong\u003E DirectX feature level 11_1 required\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2018-04-20",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183894,
//           "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 971852,
//           "store": {
//             "id": 5,
//             "name": "GOG",
//             "slug": "gog",
//             "domain": "gog.com",
//             "games_count": 6479,
//             "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
//           }
//         },
//         {
//           "id": 46917,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 677451,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103277,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 677452,
//           "store": {
//             "id": 11,
//             "name": "Epic Games",
//             "slug": "epic-games",
//             "domain": "epicgames.com",
//             "games_count": 1360,
//             "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231813,
//           "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41762,
//           "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19833,
//           "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
//         },
//         {
//           "id": 40849,
//           "name": "Steam Cloud",
//           "slug": "steam-cloud",
//           "language": "eng",
//           "games_count": 19972,
//           "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35205,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22739,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23322,
//           "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
//         },
//         {
//           "id": 149,
//           "name": "Third Person",
//           "slug": "third-person",
//           "language": "eng",
//           "games_count": 12475,
//           "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//         },
//         {
//           "id": 64,
//           "name": "Fantasy",
//           "slug": "fantasy",
//           "language": "eng",
//           "games_count": 29382,
//           "image_background": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
//         },
//         {
//           "id": 26,
//           "name": "Gore",
//           "slug": "gore",
//           "language": "eng",
//           "games_count": 5989,
//           "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
//         },
//         {
//           "id": 6,
//           "name": "Exploration",
//           "slug": "exploration",
//           "language": "eng",
//           "games_count": 24956,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 34,
//           "name": "Violent",
//           "slug": "violent",
//           "language": "eng",
//           "games_count": 7018,
//           "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
//         },
//         {
//           "id": 69,
//           "name": "Action-Adventure",
//           "slug": "action-adventure",
//           "language": "eng",
//           "games_count": 17901,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 97,
//           "name": "Action RPG",
//           "slug": "action-rpg",
//           "language": "eng",
//           "games_count": 7504,
//           "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
//         },
//         {
//           "id": 68,
//           "name": "Hack and Slash",
//           "slug": "hack-and-slash",
//           "language": "eng",
//           "games_count": 4543,
//           "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
//         },
//         {
//           "id": 37796,
//           "name": "exclusive",
//           "slug": "exclusive",
//           "language": "eng",
//           "games_count": 4492,
//           "image_background": "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg"
//         },
//         {
//           "id": 125,
//           "name": "Crafting",
//           "slug": "crafting",
//           "language": "eng",
//           "games_count": 4564,
//           "image_background": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
//         },
//         {
//           "id": 571,
//           "name": "3D",
//           "slug": "3d",
//           "language": "eng",
//           "games_count": 86578,
//           "image_background": "https://media.rawg.io/media/games/74c/74c68a8de3d4983ff932dd456ac2dc66.jpg"
//         },
//         {
//           "id": 1465,
//           "name": "combat",
//           "slug": "combat",
//           "language": "eng",
//           "games_count": 13425,
//           "image_background": "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg"
//         },
//         {
//           "id": 37797,
//           "name": "true exclusive",
//           "slug": "true-exclusive",
//           "language": "eng",
//           "games_count": 3980,
//           "image_background": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg"
//         },
//         {
//           "id": 478,
//           "name": "3rd-Person Perspective",
//           "slug": "3rd-person-perspective",
//           "language": "eng",
//           "games_count": 87,
//           "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//         },
//         {
//           "id": 270,
//           "name": "Blood",
//           "slug": "blood",
//           "language": "eng",
//           "games_count": 2093,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 171,
//           "name": "PvE",
//           "slug": "pve",
//           "language": "eng",
//           "games_count": 5840,
//           "image_background": "https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg"
//         },
//         {
//           "id": 572,
//           "name": "Emotional",
//           "slug": "emotional",
//           "language": "eng",
//           "games_count": 3313,
//           "image_background": "https://media.rawg.io/media/screenshots/291/29135ecd06cd54c4f13a8bcddbba8fba.jpg"
//         },
//         {
//           "id": 580,
//           "name": "Souls-like",
//           "slug": "souls-like",
//           "language": "eng",
//           "games_count": 1531,
//           "image_background": "https://media.rawg.io/media/games/191/191245618591a873d1ecfcad6b164e8e.jpg"
//         },
//         {
//           "id": 108,
//           "name": "Mythology",
//           "slug": "mythology",
//           "language": "eng",
//           "games_count": 2152,
//           "image_background": "https://media.rawg.io/media/games/96f/96f0c07b6c156f05cb76b2ffba32bffc.jpg"
//         },
//         {
//           "id": 43374,
//           "name": "Remote Play on TV",
//           "slug": "remote-play-on-tv",
//           "language": "eng",
//           "games_count": 502,
//           "image_background": "https://media.rawg.io/media/games/0eb/0ebd25306a59a3ec8a2cd429298ec572.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//         },
//         {
//           "id": 766263,
//           "image": "https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg"
//         },
//         {
//           "id": 766264,
//           "image": "https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg"
//         },
//         {
//           "id": 766265,
//           "image": "https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg"
//         },
//         {
//           "id": 766266,
//           "image": "https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg"
//         },
//         {
//           "id": 766267,
//           "image": "https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg"
//         },
//         {
//           "id": 766268,
//           "image": "https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg"
//         }
//       ]
//     },
//     {
//       "id": 3070,
//       "slug": "fallout-4",
//       "name": "Fallout 4",
//       "released": "2015-11-09",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
//       "rating": 3.81,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1609,
//           "percent": 48.35
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 857,
//           "percent": 25.75
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 703,
//           "percent": 21.12
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 159,
//           "percent": 4.78
//         }
//       ],
//       "ratings_count": 3299,
//       "reviews_text_count": 19,
//       "added": 13668,
//       "added_by_status": {
//         "yet": 626,
//         "owned": 8679,
//         "beaten": 2282,
//         "toplay": 430,
//         "dropped": 1334,
//         "playing": 317
//       },
//       "metacritic": 84,
//       "playtime": 39,
//       "suggestions_count": 460,
//       "updated": "2024-11-30T18:01:19",
//       "user_game": null,
//       "reviews_count": 3328,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2015-11-09",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2015-11-09",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows 7/8/10 (64-bit OS required)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 8 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 30 GB available space\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows 7/8/10 (64-bit OS required)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 8 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 30 GB available space\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 187,
//             "name": "PlayStation 5",
//             "slug": "playstation5",
//             "image": null,
//             "year_end": null,
//             "year_start": 2020,
//             "games_count": 1155,
//             "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//           },
//           "released_at": "2015-11-09",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2015-11-09",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 5,
//           "name": "RPG",
//           "slug": "role-playing-games-rpg",
//           "games_count": 57991,
//           "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 3252,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 9047,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         },
//         {
//           "id": 13248,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 40849,
//           "name": "Steam Cloud",
//           "slug": "steam-cloud",
//           "language": "eng",
//           "games_count": 19981,
//           "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 24,
//           "name": "RPG",
//           "slug": "rpg",
//           "language": "eng",
//           "games_count": 22749,
//           "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//         },
//         {
//           "id": 118,
//           "name": "Story Rich",
//           "slug": "story-rich",
//           "language": "eng",
//           "games_count": 23329,
//           "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//         },
//         {
//           "id": 36,
//           "name": "Open World",
//           "slug": "open-world",
//           "language": "eng",
//           "games_count": 8060,
//           "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 149,
//           "name": "Third Person",
//           "slug": "third-person",
//           "language": "eng",
//           "games_count": 12481,
//           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
//         },
//         {
//           "id": 32,
//           "name": "Sci-fi",
//           "slug": "sci-fi",
//           "language": "eng",
//           "games_count": 20035,
//           "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 6,
//           "name": "Exploration",
//           "slug": "exploration",
//           "language": "eng",
//           "games_count": 24964,
//           "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//         },
//         {
//           "id": 37,
//           "name": "Sandbox",
//           "slug": "sandbox",
//           "language": "eng",
//           "games_count": 7393,
//           "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
//         },
//         {
//           "id": 1,
//           "name": "Survival",
//           "slug": "survival",
//           "language": "eng",
//           "games_count": 9367,
//           "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
//         },
//         {
//           "id": 97,
//           "name": "Action RPG",
//           "slug": "action-rpg",
//           "language": "eng",
//           "games_count": 7508,
//           "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
//         },
//         {
//           "id": 150,
//           "name": "Third-Person Shooter",
//           "slug": "third-person-shooter",
//           "language": "eng",
//           "games_count": 3670,
//           "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
//         },
//         {
//           "id": 43,
//           "name": "Post-apocalyptic",
//           "slug": "post-apocalyptic",
//           "language": "eng",
//           "games_count": 4263,
//           "image_background": "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 27994,
//           "image": "https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg"
//         },
//         {
//           "id": 27996,
//           "image": "https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg"
//         },
//         {
//           "id": 28000,
//           "image": "https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg"
//         },
//         {
//           "id": 28002,
//           "image": "https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg"
//         },
//         {
//           "id": 28004,
//           "image": "https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg"
//         },
//         {
//           "id": 28006,
//           "image": "https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg"
//         }
//       ]
//     },
//     {
//       "id": 1030,
//       "slug": "limbo",
//       "name": "Limbo",
//       "released": "2010-07-21",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
//       "rating": 4.14,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1742,
//           "percent": 52.55
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 1131,
//           "percent": 34.12
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 331,
//           "percent": 9.98
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 111,
//           "percent": 3.35
//         }
//       ],
//       "ratings_count": 3277,
//       "reviews_text_count": 26,
//       "added": 13632,
//       "added_by_status": {
//         "yet": 563,
//         "owned": 8711,
//         "beaten": 3240,
//         "toplay": 315,
//         "dropped": 709,
//         "playing": 94
//       },
//       "metacritic": 88,
//       "playtime": 3,
//       "suggestions_count": 193,
//       "updated": "2024-11-26T14:58:05",
//       "user_game": null,
//       "reviews_count": 3315,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2024-11-01",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS *:\u003C/strong\u003E Windows 7(SP1+) and above\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E x64 or x86\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 4 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 10\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 600 MB available space\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере",
//             "recommended": "Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере"
//           }
//         },
//         {
//           "platform": {
//             "id": 21,
//             "name": "Android",
//             "slug": "android",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 52403,
//             "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": {
//             "minimum": "4.4 and up"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 19,
//             "name": "PS Vita",
//             "slug": "ps-vita",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 1448,
//             "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 18,
//             "name": "PlayStation 4",
//             "slug": "playstation4",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 6862,
//             "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 16,
//             "name": "PlayStation 3",
//             "slug": "playstation3",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 3167,
//             "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 14,
//             "name": "Xbox 360",
//             "slug": "xbox360",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 2806,
//             "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": {
//             "minimum": "\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.\u003Cbr\u003E\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E 2GHz\u003Cbr\u003E\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 1 GB RAM \u003Cbr\u003E\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Disk Space:\u003C/strong\u003E 150MB\t\u003Cbr\u003E\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card:\u003C/strong\u003E OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM \u003Cbr\u003E\t\t\t\t\t\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": {
//             "minimum": "Please be advised that LIMBO only runs Macs produced in 2009 and onwards.\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E OS X version Snow Leopard 10.6.3 or later.\u003Cbr\u003E\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel Mac\u003Cbr\u003E\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 1 GB RAM \u003Cbr\u003E\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Disk Space:\u003C/strong\u003E 150MB\t\u003Cbr\u003E\t\t\t\t\t\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EVideo Card:\u003C/strong\u003E OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) \u003Cbr\u003E\t\t\t\t\t\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "iOS",
//             "slug": "ios",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 77377,
//             "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": {
//             "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo Switch",
//             "slug": "nintendo-switch",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5552,
//             "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
//           },
//           "released_at": "2010-07-21",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 2,
//             "name": "PlayStation",
//             "slug": "playstation"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "iOS",
//             "slug": "ios"
//           }
//         },
//         {
//           "platform": {
//             "id": 8,
//             "name": "Android",
//             "slug": "android"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         },
//         {
//           "platform": {
//             "id": 7,
//             "name": "Nintendo",
//             "slug": "nintendo"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 3,
//           "name": "Adventure",
//           "slug": "adventure",
//           "games_count": 143728,
//           "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
//         },
//         {
//           "id": 51,
//           "name": "Indie",
//           "slug": "indie",
//           "games_count": 72210,
//           "image_background": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Puzzle",
//           "slug": "puzzle",
//           "games_count": 97317,
//           "image_background": "https://media.rawg.io/media/games/3ef/3eff92562640e452d3487c04ba6d7fae.jpg"
//         },
//         {
//           "id": 83,
//           "name": "Platformer",
//           "slug": "platformer",
//           "games_count": 100831,
//           "image_background": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 1054,
//           "store": {
//             "id": 4,
//             "name": "App Store",
//             "slug": "apple-appstore",
//             "domain": "apps.apple.com",
//             "games_count": 75576,
//             "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//           }
//         },
//         {
//           "id": 3679,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 7493,
//           "store": {
//             "id": 2,
//             "name": "Xbox Store",
//             "slug": "xbox-store",
//             "domain": "microsoft.com",
//             "games_count": 4890,
//             "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//           }
//         },
//         {
//           "id": 10311,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 26852,
//           "store": {
//             "id": 5,
//             "name": "GOG",
//             "slug": "gog",
//             "domain": "gog.com",
//             "games_count": 6479,
//             "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
//           }
//         },
//         {
//           "id": 33137,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         },
//         {
//           "id": 49142,
//           "store": {
//             "id": 6,
//             "name": "Nintendo Store",
//             "slug": "nintendo",
//             "domain": "nintendo.com",
//             "games_count": 9086,
//             "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
//           }
//         },
//         {
//           "id": 40035,
//           "store": {
//             "id": 8,
//             "name": "Google Play",
//             "slug": "google-play",
//             "domain": "play.google.com",
//             "games_count": 17104,
//             "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//           }
//         },
//         {
//           "id": 335541,
//           "store": {
//             "id": 11,
//             "name": "Epic Games",
//             "slug": "epic-games",
//             "domain": "epicgames.com",
//             "games_count": 1360,
//             "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 13,
//           "name": "Atmospheric",
//           "slug": "atmospheric",
//           "language": "eng",
//           "games_count": 35217,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 45,
//           "name": "2D",
//           "slug": "2d",
//           "language": "eng",
//           "games_count": 199060,
//           "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
//         },
//         {
//           "id": 16,
//           "name": "Horror",
//           "slug": "horror",
//           "language": "eng",
//           "games_count": 45884,
//           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//         },
//         {
//           "id": 49,
//           "name": "Difficult",
//           "slug": "difficult",
//           "language": "eng",
//           "games_count": 13592,
//           "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
//         },
//         {
//           "id": 69,
//           "name": "Action-Adventure",
//           "slug": "action-adventure",
//           "language": "eng",
//           "games_count": 17910,
//           "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
//         },
//         {
//           "id": 122,
//           "name": "Pixel Graphics",
//           "slug": "pixel-graphics",
//           "language": "eng",
//           "games_count": 95217,
//           "image_background": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg"
//         },
//         {
//           "id": 115,
//           "name": "Controller",
//           "slug": "controller",
//           "language": "eng",
//           "games_count": 12622,
//           "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//         },
//         {
//           "id": 41,
//           "name": "Dark",
//           "slug": "dark",
//           "language": "eng",
//           "games_count": 16680,
//           "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
//         },
//         {
//           "id": 336,
//           "name": "controller support",
//           "slug": "controller-support",
//           "language": "eng",
//           "games_count": 293,
//           "image_background": "https://media.rawg.io/media/games/0b3/0b34647c42271600399b93d19b10f1aa.jpg"
//         },
//         {
//           "id": 111,
//           "name": "Short",
//           "slug": "short",
//           "language": "eng",
//           "games_count": 57864,
//           "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
//         },
//         {
//           "id": 40,
//           "name": "Dark Fantasy",
//           "slug": "dark-fantasy",
//           "language": "eng",
//           "games_count": 4646,
//           "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//         },
//         {
//           "id": 114,
//           "name": "Physics",
//           "slug": "physics",
//           "language": "eng",
//           "games_count": 19913,
//           "image_background": "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg"
//         },
//         {
//           "id": 113,
//           "name": "Side Scroller",
//           "slug": "side-scroller",
//           "language": "eng",
//           "games_count": 10921,
//           "image_background": "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg"
//         },
//         {
//           "id": 110,
//           "name": "Cinematic",
//           "slug": "cinematic",
//           "language": "eng",
//           "games_count": 2540,
//           "image_background": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"
//         },
//         {
//           "id": 1465,
//           "name": "combat",
//           "slug": "combat",
//           "language": "eng",
//           "games_count": 13433,
//           "image_background": "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg"
//         },
//         {
//           "id": 305,
//           "name": "Linear",
//           "slug": "linear",
//           "language": "eng",
//           "games_count": 7222,
//           "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//         },
//         {
//           "id": 46,
//           "name": "Surreal",
//           "slug": "surreal",
//           "language": "eng",
//           "games_count": 5722,
//           "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
//         },
//         {
//           "id": 83,
//           "name": "Puzzle-Platformer",
//           "slug": "puzzle-platformer",
//           "language": "eng",
//           "games_count": 9498,
//           "image_background": "https://media.rawg.io/media/screenshots/2d9/2d9f74addd8f5b5f83459c2cb700aaf4.jpg"
//         },
//         {
//           "id": 112,
//           "name": "Minimalist",
//           "slug": "minimalist",
//           "language": "eng",
//           "games_count": 15862,
//           "image_background": "https://media.rawg.io/media/screenshots/a62/a62fb9a34ba7d37b87679387beabc970.jpg"
//         },
//         {
//           "id": 135,
//           "name": "2D Fighter",
//           "slug": "2d-fighter",
//           "language": "eng",
//           "games_count": 1317,
//           "image_background": "https://media.rawg.io/media/screenshots/484/4848bcf4deb6eeb3228048c7497dc1a6.jpg"
//         },
//         {
//           "id": 289,
//           "name": "Noir",
//           "slug": "noir",
//           "language": "eng",
//           "games_count": 1426,
//           "image_background": "https://media.rawg.io/media/screenshots/206/206aa0c96fe92c8aee4836233d356d87.jpg"
//         },
//         {
//           "id": 49959,
//           "name": "2D Platformer",
//           "slug": "2d-platformer-3",
//           "language": "eng",
//           "games_count": 7251,
//           "image_background": "https://media.rawg.io/media/games/470/47058af09b864c2d211a08271eccfb4f.jpg"
//         },
//         {
//           "id": 49995,
//           "name": "2D-платформер",
//           "slug": "2d-platformer-4",
//           "language": "eng",
//           "games_count": 7206,
//           "image_background": "https://media.rawg.io/media/games/5f2/5f25cf08217b40b9d8f02f95db1fdc1d.jpg"
//         },
//         {
//           "id": 91686,
//           "name": "Family Sharing",
//           "slug": "family-sharing",
//           "language": "eng",
//           "games_count": 11656,
//           "image_background": "https://media.rawg.io/media/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg"
//         },
//         {
//           "id": 56825,
//           "name": "2D-файтинг",
//           "slug": "2d-faiting",
//           "language": "eng",
//           "games_count": 1093,
//           "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 3,
//         "name": "Teen",
//         "slug": "teen"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//         },
//         {
//           "id": 30985,
//           "image": "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg"
//         },
//         {
//           "id": 30986,
//           "image": "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg"
//         },
//         {
//           "id": 30987,
//           "image": "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg"
//         },
//         {
//           "id": 30988,
//           "image": "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg"
//         },
//         {
//           "id": 30989,
//           "image": "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg"
//         },
//         {
//           "id": 30991,
//           "image": "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg"
//         }
//       ]
//     },
//     {
//       "id": 3939,
//       "slug": "payday-2",
//       "name": "PAYDAY 2",
//       "released": "2013-08-13",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
//       "rating": 3.52,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1129,
//           "percent": 51.58
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 602,
//           "percent": 27.5
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 229,
//           "percent": 10.46
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 229,
//           "percent": 10.46
//         }
//       ],
//       "ratings_count": 2171,
//       "reviews_text_count": 14,
//       "added": 13605,
//       "added_by_status": {
//         "yet": 499,
//         "owned": 10647,
//         "beaten": 808,
//         "toplay": 106,
//         "dropped": 1423,
//         "playing": 122
//       },
//       "metacritic": 79,
//       "playtime": 9,
//       "suggestions_count": 425,
//       "updated": "2024-11-30T12:54:54",
//       "user_game": null,
//       "reviews_count": 2189,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2013-08-13",
//           "requirements_en": null,
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2013-08-13",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003EWindows 7\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E2 GHz Intel Dual Core Processor\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E4 GB RAM\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003ENvidia &amp; AMD (512MB VRAM)\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX®:\u003C/strong\u003E9.0c\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Drive:\u003C/strong\u003E31 GB HD space \u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound:\u003C/strong\u003EDirectX 9.0c compatible\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003EWindows 10\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E2.3 GHz Intel Quad Core Processor\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E8 GB RAM\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003ENvidia &amp; AMD (1GB VRAM)\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX®:\u003C/strong\u003E9.0c\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EHard Drive:\u003C/strong\u003E45 GB HD space\u003Cbr\u003E\t\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound:\u003C/strong\u003EDirectX 9.0c compatible\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 1,
//             "name": "Xbox One",
//             "slug": "xbox-one",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 5665,
//             "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//           },
//           "released_at": "2013-08-13",
//           "requirements_en": null,
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 3,
//             "name": "Xbox",
//             "slug": "xbox"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 961005,
//           "store": {
//             "id": 11,
//             "name": "Epic Games",
//             "slug": "epic-games",
//             "domain": "epicgames.com",
//             "games_count": 1360,
//             "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//           }
//         },
//         {
//           "id": 4258,
//           "store": {
//             "id": 3,
//             "name": "PlayStation Store",
//             "slug": "playstation-store",
//             "domain": "store.playstation.com",
//             "games_count": 7991,
//             "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//           }
//         },
//         {
//           "id": 10780,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         },
//         {
//           "id": 27939,
//           "store": {
//             "id": 6,
//             "name": "Nintendo Store",
//             "slug": "nintendo",
//             "domain": "nintendo.com",
//             "games_count": 9086,
//             "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
//           }
//         },
//         {
//           "id": 34027,
//           "store": {
//             "id": 7,
//             "name": "Xbox 360 Store",
//             "slug": "xbox360",
//             "domain": "marketplace.xbox.com",
//             "games_count": 1915,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 31,
//           "name": "Singleplayer",
//           "slug": "singleplayer",
//           "language": "eng",
//           "games_count": 231859,
//           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
//         },
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 40836,
//           "name": "Full controller support",
//           "slug": "full-controller-support",
//           "language": "eng",
//           "games_count": 19843,
//           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 42,
//           "name": "Great Soundtrack",
//           "slug": "great-soundtrack",
//           "language": "eng",
//           "games_count": 3414,
//           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 411,
//           "name": "cooperative",
//           "slug": "cooperative",
//           "language": "eng",
//           "games_count": 5496,
//           "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 9,
//           "name": "Online Co-Op",
//           "slug": "online-co-op",
//           "language": "eng",
//           "games_count": 6243,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 4,
//           "name": "Funny",
//           "slug": "funny",
//           "language": "eng",
//           "games_count": 26047,
//           "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
//         },
//         {
//           "id": 15,
//           "name": "Stealth",
//           "slug": "stealth",
//           "language": "eng",
//           "games_count": 6542,
//           "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
//         },
//         {
//           "id": 80,
//           "name": "Tactical",
//           "slug": "tactical",
//           "language": "eng",
//           "games_count": 5548,
//           "image_background": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg"
//         },
//         {
//           "id": 40837,
//           "name": "In-App Purchases",
//           "slug": "in-app-purchases",
//           "language": "eng",
//           "games_count": 2894,
//           "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
//         },
//         {
//           "id": 11,
//           "name": "Team-Based",
//           "slug": "team-based",
//           "language": "eng",
//           "games_count": 1744,
//           "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//         },
//         {
//           "id": 144,
//           "name": "Crime",
//           "slug": "crime",
//           "language": "eng",
//           "games_count": 2974,
//           "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
//         },
//         {
//           "id": 171,
//           "name": "PvE",
//           "slug": "pve",
//           "language": "eng",
//           "games_count": 5846,
//           "image_background": "https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg"
//         },
//         {
//           "id": 216,
//           "name": "Heist",
//           "slug": "heist",
//           "language": "eng",
//           "games_count": 551,
//           "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//         },
//         {
//           "id": 274,
//           "name": "Gun Customization",
//           "slug": "gun-customization",
//           "language": "eng",
//           "games_count": 654,
//           "image_background": "https://media.rawg.io/media/screenshots/ae0/ae0bb3c16d0660acb18b197d5856baf8.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 5,
//         "name": "Adults Only",
//         "slug": "adults-only"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
//         },
//         {
//           "id": 74194,
//           "image": "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg"
//         },
//         {
//           "id": 74195,
//           "image": "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg"
//         },
//         {
//           "id": 74196,
//           "image": "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg"
//         },
//         {
//           "id": 74197,
//           "image": "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg"
//         },
//         {
//           "id": 74198,
//           "image": "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg"
//         },
//         {
//           "id": 74199,
//           "image": "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg"
//         }
//       ]
//     },
//     {
//       "id": 11859,
//       "slug": "team-fortress-2",
//       "name": "Team Fortress 2",
//       "released": "2007-10-10",
//       "tba": false,
//       "background_image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
//       "rating": 3.67,
//       "rating_top": 4,
//       "ratings": [
//         {
//           "id": 4,
//           "title": "recommended",
//           "count": 1307,
//           "percent": 45.16
//         },
//         {
//           "id": 3,
//           "title": "meh",
//           "count": 697,
//           "percent": 24.08
//         },
//         {
//           "id": 5,
//           "title": "exceptional",
//           "count": 606,
//           "percent": 20.94
//         },
//         {
//           "id": 1,
//           "title": "skip",
//           "count": 284,
//           "percent": 9.81
//         }
//       ],
//       "ratings_count": 2867,
//       "reviews_text_count": 19,
//       "added": 13485,
//       "added_by_status": {
//         "yet": 191,
//         "owned": 10468,
//         "beaten": 800,
//         "toplay": 49,
//         "dropped": 1803,
//         "playing": 174
//       },
//       "metacritic": 92,
//       "playtime": 8,
//       "suggestions_count": 535,
//       "updated": "2024-11-30T12:54:53",
//       "user_game": null,
//       "reviews_count": 2894,
//       "saturated_color": "0f0f0f",
//       "dominant_color": "0f0f0f",
//       "platforms": [
//         {
//           "platform": {
//             "id": 4,
//             "name": "PC",
//             "slug": "pc",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 540292,
//             "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//           },
//           "released_at": "2007-10-10",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows® 7 (32/64-bit)/Vista/XP\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E 1.7 GHz Processor or better\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 512 MB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 8.1\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ENetwork:\u003C/strong\u003E Broadband Internet connection\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 15 GB available space\u003C/li\u003E\u003C/ul\u003E",
//             "recommended": "\u003Cstrong\u003ERecommended:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows® 7 (32/64-bit)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Pentium 4 processor (3.0GHz, or better)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 1 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 9.0c\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ENetwork:\u003C/strong\u003E Broadband Internet connection\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 15 GB available space\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": {
//             "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
//             "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "macOS",
//             "slug": "macos",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 105294,
//             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//           },
//           "released_at": "2007-10-10",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E OS X version Leopard 10.5.8 and above\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E 1.7 GHz Processor or better\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 1 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ENetwork:\u003C/strong\u003E Broadband Internet connection\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 15 GB available space\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": null
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux",
//             "image": null,
//             "year_end": null,
//             "year_start": null,
//             "games_count": 78052,
//             "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//           },
//           "released_at": "2007-10-10",
//           "requirements_en": {
//             "minimum": "\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class=\"bb_ul\"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Ubuntu 12.04\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Dual core from Intel or AMD at 2.8 GHz\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 1 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ENetwork:\u003C/strong\u003E Broadband Internet connection\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 15 GB available space\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound Card:\u003C/strong\u003E OpenAL Compatible Sound Card\u003C/li\u003E\u003C/ul\u003E"
//           },
//           "requirements_ru": null
//         }
//       ],
//       "parent_platforms": [
//         {
//           "platform": {
//             "id": 1,
//             "name": "PC",
//             "slug": "pc"
//           }
//         },
//         {
//           "platform": {
//             "id": 5,
//             "name": "Apple Macintosh",
//             "slug": "mac"
//           }
//         },
//         {
//           "platform": {
//             "id": 6,
//             "name": "Linux",
//             "slug": "linux"
//           }
//         }
//       ],
//       "genres": [
//         {
//           "id": 4,
//           "name": "Action",
//           "slug": "action",
//           "games_count": 183915,
//           "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
//         },
//         {
//           "id": 2,
//           "name": "Shooter",
//           "slug": "shooter",
//           "games_count": 59534,
//           "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
//         }
//       ],
//       "stores": [
//         {
//           "id": 13018,
//           "store": {
//             "id": 1,
//             "name": "Steam",
//             "slug": "steam",
//             "domain": "store.steampowered.com",
//             "games_count": 103327,
//             "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//           }
//         }
//       ],
//       "clip": null,
//       "tags": [
//         {
//           "id": 40847,
//           "name": "Steam Achievements",
//           "slug": "steam-achievements",
//           "language": "eng",
//           "games_count": 41781,
//           "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//         },
//         {
//           "id": 7,
//           "name": "Multiplayer",
//           "slug": "multiplayer",
//           "language": "eng",
//           "games_count": 39427,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 7808,
//           "name": "steam-trading-cards",
//           "slug": "steam-trading-cards",
//           "language": "eng",
//           "games_count": 7568,
//           "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//         },
//         {
//           "id": 18,
//           "name": "Co-op",
//           "slug": "co-op",
//           "language": "eng",
//           "games_count": 12479,
//           "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
//         },
//         {
//           "id": 411,
//           "name": "cooperative",
//           "slug": "cooperative",
//           "language": "eng",
//           "games_count": 5496,
//           "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//         },
//         {
//           "id": 8,
//           "name": "First-Person",
//           "slug": "first-person",
//           "language": "eng",
//           "games_count": 33365,
//           "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//         },
//         {
//           "id": 40845,
//           "name": "Partial Controller Support",
//           "slug": "partial-controller-support",
//           "language": "eng",
//           "games_count": 12447,
//           "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
//         },
//         {
//           "id": 30,
//           "name": "FPS",
//           "slug": "fps",
//           "language": "eng",
//           "games_count": 13775,
//           "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
//         },
//         {
//           "id": 9,
//           "name": "Online Co-Op",
//           "slug": "online-co-op",
//           "language": "eng",
//           "games_count": 6243,
//           "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//         },
//         {
//           "id": 4,
//           "name": "Funny",
//           "slug": "funny",
//           "language": "eng",
//           "games_count": 26047,
//           "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
//         },
//         {
//           "id": 123,
//           "name": "Comedy",
//           "slug": "comedy",
//           "language": "eng",
//           "games_count": 13150,
//           "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//         },
//         {
//           "id": 79,
//           "name": "Free to Play",
//           "slug": "free-to-play",
//           "language": "eng",
//           "games_count": 7794,
//           "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
//         },
//         {
//           "id": 80,
//           "name": "Tactical",
//           "slug": "tactical",
//           "language": "eng",
//           "games_count": 5548,
//           "image_background": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg"
//         },
//         {
//           "id": 11669,
//           "name": "stats",
//           "slug": "stats",
//           "language": "eng",
//           "games_count": 5209,
//           "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
//         },
//         {
//           "id": 40852,
//           "name": "Steam Workshop",
//           "slug": "steam-workshop",
//           "language": "eng",
//           "games_count": 1580,
//           "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//         },
//         {
//           "id": 40832,
//           "name": "Cross-Platform Multiplayer",
//           "slug": "cross-platform-multiplayer",
//           "language": "eng",
//           "games_count": 2792,
//           "image_background": "https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg"
//         },
//         {
//           "id": 40838,
//           "name": "Includes level editor",
//           "slug": "includes-level-editor",
//           "language": "eng",
//           "games_count": 1963,
//           "image_background": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg"
//         },
//         {
//           "id": 62,
//           "name": "Moddable",
//           "slug": "moddable",
//           "language": "eng",
//           "games_count": 988,
//           "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//         },
//         {
//           "id": 40837,
//           "name": "In-App Purchases",
//           "slug": "in-app-purchases",
//           "language": "eng",
//           "games_count": 2894,
//           "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
//         },
//         {
//           "id": 40833,
//           "name": "Captions available",
//           "slug": "captions-available",
//           "language": "eng",
//           "games_count": 1406,
//           "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
//         },
//         {
//           "id": 125,
//           "name": "Crafting",
//           "slug": "crafting",
//           "language": "eng",
//           "games_count": 4566,
//           "image_background": "https://media.rawg.io/media/games/1be/1be575aa6de86de328433a63fb534d9a.jpg"
//         },
//         {
//           "id": 11,
//           "name": "Team-Based",
//           "slug": "team-based",
//           "language": "eng",
//           "games_count": 1744,
//           "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
//         },
//         {
//           "id": 170,
//           "name": "Competitive",
//           "slug": "competitive",
//           "language": "eng",
//           "games_count": 1198,
//           "image_background": "https://media.rawg.io/media/games/476/4767c380895fd35a4f1b59016dc45967.jpg"
//         },
//         {
//           "id": 40856,
//           "name": "Valve Anti-Cheat enabled",
//           "slug": "valve-anti-cheat-enabled",
//           "language": "eng",
//           "games_count": 105,
//           "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
//         },
//         {
//           "id": 197,
//           "name": "Robots",
//           "slug": "robots",
//           "language": "eng",
//           "games_count": 8425,
//           "image_background": "https://media.rawg.io/media/screenshots/e29/e29ce2369152515e9ae20c6e217cbe81.jpg"
//         },
//         {
//           "id": 40834,
//           "name": "Commentary available",
//           "slug": "commentary-available",
//           "language": "eng",
//           "games_count": 281,
//           "image_background": "https://media.rawg.io/media/screenshots/f72/f728954e667e580ba2ac507db226ae48.jpg"
//         },
//         {
//           "id": 164,
//           "name": "Cartoony",
//           "slug": "cartoony",
//           "language": "eng",
//           "games_count": 6587,
//           "image_background": "https://media.rawg.io/media/games/a4c/a4c1fd4265ac2c1edc87cb9a6a7644e4.jpg"
//         },
//         {
//           "id": 179,
//           "name": "Cartoon",
//           "slug": "cartoon",
//           "language": "eng",
//           "games_count": 6453,
//           "image_background": "https://media.rawg.io/media/games/075/0753492cda7ee3c9bd4a3ca673fd0c8c.jpg"
//         },
//         {
//           "id": 265,
//           "name": "Class-Based",
//           "slug": "class-based",
//           "language": "eng",
//           "games_count": 714,
//           "image_background": "https://media.rawg.io/media/games/98c/98c87b286cd2a2ba942167df384a9bd3.jpg"
//         },
//         {
//           "id": 245,
//           "name": "Trading",
//           "slug": "trading",
//           "language": "eng",
//           "games_count": 1253,
//           "image_background": "https://media.rawg.io/media/games/9ae/9ae37c55143614798f919ce8e8eb94aa.jpg"
//         }
//       ],
//       "esrb_rating": {
//         "id": 4,
//         "name": "Mature",
//         "slug": "mature"
//       },
//       "short_screenshots": [
//         {
//           "id": -1,
//           "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//         },
//         {
//           "id": 97905,
//           "image": "https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg"
//         },
//         {
//           "id": 97906,
//           "image": "https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg"
//         },
//         {
//           "id": 97907,
//           "image": "https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg"
//         },
//         {
//           "id": 97908,
//           "image": "https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg"
//         },
//         {
//           "id": 97909,
//           "image": "https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg"
//         },
//         {
//           "id": 97910,
//           "image": "https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg"
//         }
//       ]
//     }
//   ],
//   "seo_title": "All Games",
//   "seo_description": "",
//   "seo_keywords": "",
//   "seo_h1": "All Games",
//   "noindex": false,
//   "nofollow": false,
//   "description": "",
//   "filters": {
//     "years": [
//       {
//         "from": 2020,
//         "to": 2024,
//         "filter": "2020-01-01,2024-12-31",
//         "decade": 2020,
//         "years": [
//           {
//             "year": 2024,
//             "count": 15981,
//             "nofollow": false
//           },
//           {
//             "year": 2023,
//             "count": 61962,
//             "nofollow": false
//           },
//           {
//             "year": 2022,
//             "count": 168179,
//             "nofollow": false
//           },
//           {
//             "year": 2021,
//             "count": 158703,
//             "nofollow": false
//           },
//           {
//             "year": 2020,
//             "count": 121367,
//             "nofollow": false
//           }
//         ],
//         "nofollow": true,
//         "count": 526192
//       },
//       {
//         "from": 2010,
//         "to": 2019,
//         "filter": "2010-01-01,2019-12-31",
//         "decade": 2010,
//         "years": [
//           {
//             "year": 2019,
//             "count": 73690,
//             "nofollow": false
//           },
//           {
//             "year": 2018,
//             "count": 67946,
//             "nofollow": false
//           },
//           {
//             "year": 2017,
//             "count": 54590,
//             "nofollow": true
//           },
//           {
//             "year": 2016,
//             "count": 40243,
//             "nofollow": true
//           },
//           {
//             "year": 2015,
//             "count": 25896,
//             "nofollow": true
//           },
//           {
//             "year": 2014,
//             "count": 15362,
//             "nofollow": true
//           },
//           {
//             "year": 2013,
//             "count": 6344,
//             "nofollow": true
//           },
//           {
//             "year": 2012,
//             "count": 5390,
//             "nofollow": true
//           },
//           {
//             "year": 2011,
//             "count": 4323,
//             "nofollow": true
//           },
//           {
//             "year": 2010,
//             "count": 3902,
//             "nofollow": true
//           }
//         ],
//         "nofollow": true,
//         "count": 297686
//       },
//       {
//         "from": 2000,
//         "to": 2009,
//         "filter": "2000-01-01,2009-12-31",
//         "decade": 2000,
//         "years": [
//           {
//             "year": 2009,
//             "count": 3121,
//             "nofollow": true
//           },
//           {
//             "year": 2008,
//             "count": 2041,
//             "nofollow": true
//           },
//           {
//             "year": 2007,
//             "count": 1598,
//             "nofollow": true
//           },
//           {
//             "year": 2006,
//             "count": 1309,
//             "nofollow": true
//           },
//           {
//             "year": 2005,
//             "count": 1199,
//             "nofollow": true
//           },
//           {
//             "year": 2004,
//             "count": 1192,
//             "nofollow": true
//           },
//           {
//             "year": 2003,
//             "count": 1177,
//             "nofollow": true
//           },
//           {
//             "year": 2002,
//             "count": 1027,
//             "nofollow": true
//           },
//           {
//             "year": 2001,
//             "count": 1147,
//             "nofollow": true
//           },
//           {
//             "year": 2000,
//             "count": 1054,
//             "nofollow": true
//           }
//         ],
//         "nofollow": true,
//         "count": 14865
//       },
//       {
//         "from": 1990,
//         "to": 1999,
//         "filter": "1990-01-01,1999-12-31",
//         "decade": 1990,
//         "years": [
//           {
//             "year": 1999,
//             "count": 816,
//             "nofollow": true
//           },
//           {
//             "year": 1998,
//             "count": 755,
//             "nofollow": true
//           },
//           {
//             "year": 1997,
//             "count": 881,
//             "nofollow": true
//           },
//           {
//             "year": 1996,
//             "count": 793,
//             "nofollow": true
//           },
//           {
//             "year": 1995,
//             "count": 880,
//             "nofollow": true
//           },
//           {
//             "year": 1994,
//             "count": 844,
//             "nofollow": true
//           },
//           {
//             "year": 1993,
//             "count": 767,
//             "nofollow": true
//           },
//           {
//             "year": 1992,
//             "count": 674,
//             "nofollow": true
//           },
//           {
//             "year": 1991,
//             "count": 595,
//             "nofollow": true
//           },
//           {
//             "year": 1990,
//             "count": 550,
//             "nofollow": true
//           }
//         ],
//         "nofollow": true,
//         "count": 7555
//       },
//       {
//         "from": 1980,
//         "to": 1989,
//         "filter": "1980-01-01,1989-12-31",
//         "decade": 1980,
//         "years": [
//           {
//             "year": 1989,
//             "count": 444,
//             "nofollow": true
//           },
//           {
//             "year": 1988,
//             "count": 326,
//             "nofollow": true
//           },
//           {
//             "year": 1987,
//             "count": 347,
//             "nofollow": true
//           },
//           {
//             "year": 1986,
//             "count": 256,
//             "nofollow": true
//           },
//           {
//             "year": 1985,
//             "count": 229,
//             "nofollow": true
//           },
//           {
//             "year": 1984,
//             "count": 186,
//             "nofollow": true
//           },
//           {
//             "year": 1983,
//             "count": 211,
//             "nofollow": true
//           },
//           {
//             "year": 1982,
//             "count": 154,
//             "nofollow": true
//           },
//           {
//             "year": 1981,
//             "count": 66,
//             "nofollow": true
//           },
//           {
//             "year": 1980,
//             "count": 35,
//             "nofollow": true
//           }
//         ],
//         "nofollow": true,
//         "count": 2254
//       },
//       {
//         "from": 1970,
//         "to": 1979,
//         "filter": "1970-01-01,1979-12-31",
//         "decade": 1970,
//         "years": [
//           {
//             "year": 1979,
//             "count": 15,
//             "nofollow": true
//           },
//           {
//             "year": 1978,
//             "count": 17,
//             "nofollow": true
//           },
//           {
//             "year": 1977,
//             "count": 13,
//             "nofollow": true
//           },
//           {
//             "year": 1976,
//             "count": 7,
//             "nofollow": true
//           },
//           {
//             "year": 1975,
//             "count": 3,
//             "nofollow": true
//           },
//           {
//             "year": 1974,
//             "count": 2,
//             "nofollow": true
//           },
//           {
//             "year": 1973,
//             "count": 1,
//             "nofollow": true
//           },
//           {
//             "year": 1972,
//             "count": 2,
//             "nofollow": true
//           },
//           {
//             "year": 1971,
//             "count": 6,
//             "nofollow": true
//           },
//           {
//             "year": 1970,
//             "count": 1,
//             "nofollow": true
//           }
//         ],
//         "nofollow": true,
//         "count": 67
//       },
//       {
//         "from": 1960,
//         "to": 1969,
//         "filter": "1960-01-01,1969-12-31",
//         "decade": 1960,
//         "years": [
//           {
//             "year": 1962,
//             "count": 1,
//             "nofollow": true
//           }
//         ],
//         "nofollow": true,
//         "count": 1
//       },
//       {
//         "from": 1950,
//         "to": 1959,
//         "filter": "1950-01-01,1959-12-31",
//         "decade": 1950,
//         "years": [
//           {
//             "year": 1958,
//             "count": 1,
//             "nofollow": true
//           },
//           {
//             "year": 1954,
//             "count": 1,
//             "nofollow": true
//           }
//         ],
//         "nofollow": true,
//         "count": 2
//       }
//     ]
//   },
//   "nofollow_collections": [
//     "stores"
//   ]
// }
