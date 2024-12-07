import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Params } from "./services/useService";

const Constant = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const [totalGames, setTotalGames] = useState<number>(NaN);
  const [searchValue, setSearchValue] = useState<string>("");
  const [axiosParams, setAxiosParams] = useState<Params>({});
  const [sidebarVisiblty, setSidebarVisiblty] = useState(false);
  const [headerText, setHeaderText] = useState("All Games");
  useEffect(() => {
    const Body = document.body;
    if (switchValue) {
      Body.classList.add("bg-[#151515]");
      Body.classList.add("text-white");
    } else {
      Body.classList.remove("text-white");
      Body.classList.add("bg-white");
      Body.classList.add("text-black");
    }
    return () => {
      Body.classList.remove("bg-[#151515]");
      Body.classList.remove("bg-white");
      Body.classList.remove("text-black");
    };
  }, [switchValue]);

  return (
    <>
      <div
        id="theme_body"
        className="w-full p-[20px] transition-all duration-300"
      >
        <NavBar
          sidebarVisiblty={sidebarVisiblty}
          setSidebarVisiblty={setSidebarVisiblty}
          setHeaderText={setHeaderText}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          setAxiosParams={setAxiosParams}
          totalGames={totalGames}
          switchValue={switchValue}
          setSwitchValue={setSwitchValue}
          axiosParams={axiosParams}
        />
        <div className="flex gap-5 sh:gap-0">
          <SideBar
            switchValue={switchValue}
            sidebarVisiblty={sidebarVisiblty}
            headerText={headerText}
            setHeaderText={setHeaderText}
            setSearchValue={setSearchValue}
            axiosParams={axiosParams}
            setAxiosParams={setAxiosParams}
          />
          <Content
            setAxiosParams={setAxiosParams}
            headerText={headerText}
            axiosParams={axiosParams}
            setTotalGames={setTotalGames}
            switchValue={switchValue}
          />
        </div>
      </div>
    </>
  );
};

export default Constant;

// const data = {
//   count: 51,
//   next: "https://api.rawg.io/api/platforms?key=1a0057501a55404f82419f638cd0b9ec&page=2",
//   previous: null,
//   results: [
//     {
//       id: 4,
//       name: "PC",
//       slug: "pc",
//       games_count: 540362,
//       image_background:
//         "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3498,
//           slug: "grand-theft-auto-v",
//           name: "Grand Theft Auto V",
//           added: 21409,
//         },
//         {
//           id: 3328,
//           slug: "the-witcher-3-wild-hunt",
//           name: "The Witcher 3: Wild Hunt",
//           added: 20930,
//         },
//         {
//           id: 4200,
//           slug: "portal-2",
//           name: "Portal 2",
//           added: 19840,
//         },
//         {
//           id: 4291,
//           slug: "counter-strike-global-offensive",
//           name: "Counter-Strike: Global Offensive",
//           added: 17525,
//         },
//         {
//           id: 5286,
//           slug: "tomb-raider",
//           name: "Tomb Raider (2013)",
//           added: 17053,
//         },
//         {
//           id: 13536,
//           slug: "portal",
//           name: "Portal",
//           added: 16889,
//         },
//       ],
//     },
//     {
//       id: 187,
//       name: "PlayStation 5",
//       slug: "playstation5",
//       games_count: 1159,
//       image_background:
//         "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
//       image: null,
//       year_start: 2020,
//       year_end: null,
//       games: [
//         {
//           id: 3498,
//           slug: "grand-theft-auto-v",
//           name: "Grand Theft Auto V",
//           added: 21409,
//         },
//         {
//           id: 3328,
//           slug: "the-witcher-3-wild-hunt",
//           name: "The Witcher 3: Wild Hunt",
//           added: 20930,
//         },
//         {
//           id: 5679,
//           slug: "the-elder-scrolls-v-skyrim",
//           name: "The Elder Scrolls V: Skyrim",
//           added: 16103,
//         },
//         {
//           id: 32,
//           slug: "destiny-2",
//           name: "Destiny 2",
//           added: 14019,
//         },
//         {
//           id: 3070,
//           slug: "fallout-4",
//           name: "Fallout 4",
//           added: 13670,
//         },
//         {
//           id: 41494,
//           slug: "cyberpunk-2077",
//           name: "Cyberpunk 2077",
//           added: 13032,
//         },
//       ],
//     },
//     {
//       id: 18,
//       name: "PlayStation 4",
//       slug: "playstation4",
//       games_count: 6865,
//       image_background:
//         "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3498,
//           slug: "grand-theft-auto-v",
//           name: "Grand Theft Auto V",
//           added: 21409,
//         },
//         {
//           id: 3328,
//           slug: "the-witcher-3-wild-hunt",
//           name: "The Witcher 3: Wild Hunt",
//           added: 20930,
//         },
//         {
//           id: 5286,
//           slug: "tomb-raider",
//           name: "Tomb Raider (2013)",
//           added: 17053,
//         },
//         {
//           id: 5679,
//           slug: "the-elder-scrolls-v-skyrim",
//           name: "The Elder Scrolls V: Skyrim",
//           added: 16103,
//         },
//         {
//           id: 28,
//           slug: "red-dead-redemption-2",
//           name: "Red Dead Redemption 2",
//           added: 15787,
//         },
//         {
//           id: 4062,
//           slug: "bioshock-infinite",
//           name: "BioShock Infinite",
//           added: 15534,
//         },
//       ],
//     },
//     {
//       id: 1,
//       name: "Xbox One",
//       slug: "xbox-one",
//       games_count: 5667,
//       image_background:
//         "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3498,
//           slug: "grand-theft-auto-v",
//           name: "Grand Theft Auto V",
//           added: 21409,
//         },
//         {
//           id: 3328,
//           slug: "the-witcher-3-wild-hunt",
//           name: "The Witcher 3: Wild Hunt",
//           added: 20930,
//         },
//         {
//           id: 4200,
//           slug: "portal-2",
//           name: "Portal 2",
//           added: 19840,
//         },
//         {
//           id: 5286,
//           slug: "tomb-raider",
//           name: "Tomb Raider (2013)",
//           added: 17053,
//         },
//         {
//           id: 5679,
//           slug: "the-elder-scrolls-v-skyrim",
//           name: "The Elder Scrolls V: Skyrim",
//           added: 16103,
//         },
//         {
//           id: 28,
//           slug: "red-dead-redemption-2",
//           name: "Red Dead Redemption 2",
//           added: 15787,
//         },
//       ],
//     },
//     {
//       id: 186,
//       name: "Xbox Series S/X",
//       slug: "xbox-series-x",
//       games_count: 1016,
//       image_background:
//         "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
//       image: null,
//       year_start: 2020,
//       year_end: null,
//       games: [
//         {
//           id: 3498,
//           slug: "grand-theft-auto-v",
//           name: "Grand Theft Auto V",
//           added: 21409,
//         },
//         {
//           id: 3328,
//           slug: "the-witcher-3-wild-hunt",
//           name: "The Witcher 3: Wild Hunt",
//           added: 20930,
//         },
//         {
//           id: 5679,
//           slug: "the-elder-scrolls-v-skyrim",
//           name: "The Elder Scrolls V: Skyrim",
//           added: 16103,
//         },
//         {
//           id: 32,
//           slug: "destiny-2",
//           name: "Destiny 2",
//           added: 14019,
//         },
//         {
//           id: 41494,
//           slug: "cyberpunk-2077",
//           name: "Cyberpunk 2077",
//           added: 13032,
//         },
//         {
//           id: 766,
//           slug: "warframe",
//           name: "Warframe",
//           added: 12645,
//         },
//       ],
//     },
//     {
//       id: 7,
//       name: "Nintendo Switch",
//       slug: "nintendo-switch",
//       games_count: 5554,
//       image_background:
//         "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3328,
//           slug: "the-witcher-3-wild-hunt",
//           name: "The Witcher 3: Wild Hunt",
//           added: 20930,
//         },
//         {
//           id: 13536,
//           slug: "portal",
//           name: "Portal",
//           added: 16889,
//         },
//         {
//           id: 5679,
//           slug: "the-elder-scrolls-v-skyrim",
//           name: "The Elder Scrolls V: Skyrim",
//           added: 16103,
//         },
//         {
//           id: 4062,
//           slug: "bioshock-infinite",
//           name: "BioShock Infinite",
//           added: 15534,
//         },
//         {
//           id: 1030,
//           slug: "limbo",
//           name: "Limbo",
//           added: 13635,
//         },
//         {
//           id: 2454,
//           slug: "doom",
//           name: "DOOM (2016)",
//           added: 13481,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "iOS",
//       slug: "ios",
//       games_count: 77377,
//       image_background:
//         "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3439,
//           slug: "life-is-strange-episode-1-2",
//           name: "Life is Strange",
//           added: 15370,
//         },
//         {
//           id: 1030,
//           slug: "limbo",
//           name: "Limbo",
//           added: 13635,
//         },
//         {
//           id: 422,
//           slug: "terraria",
//           name: "Terraria",
//           added: 12915,
//         },
//         {
//           id: 766,
//           slug: "warframe",
//           name: "Warframe",
//           added: 12645,
//         },
//         {
//           id: 416,
//           slug: "grand-theft-auto-san-andreas",
//           name: "Grand Theft Auto: San Andreas",
//           added: 11434,
//         },
//         {
//           id: 23027,
//           slug: "the-walking-dead",
//           name: "The Walking Dead: Season 1",
//           added: 11324,
//         },
//       ],
//     },
//     {
//       id: 21,
//       name: "Android",
//       slug: "android",
//       games_count: 52404,
//       image_background:
//         "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 13536,
//           slug: "portal",
//           name: "Portal",
//           added: 16889,
//         },
//         {
//           id: 802,
//           slug: "borderlands-2",
//           name: "Borderlands 2",
//           added: 15386,
//         },
//         {
//           id: 3439,
//           slug: "life-is-strange-episode-1-2",
//           name: "Life is Strange",
//           added: 15370,
//         },
//         {
//           id: 13537,
//           slug: "half-life-2",
//           name: "Half-Life 2",
//           added: 15036,
//         },
//         {
//           id: 1030,
//           slug: "limbo",
//           name: "Limbo",
//           added: 13635,
//         },
//         {
//           id: 422,
//           slug: "terraria",
//           name: "Terraria",
//           added: 12915,
//         },
//       ],
//     },
//     {
//       id: 8,
//       name: "Nintendo 3DS",
//       slug: "nintendo-3ds",
//       games_count: 1688,
//       image_background:
//         "https://media.rawg.io/media/games/95a/95adc7a2135783dfd2204f694200c836.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 422,
//           slug: "terraria",
//           name: "Terraria",
//           added: 12915,
//         },
//         {
//           id: 22509,
//           slug: "minecraft",
//           name: "Minecraft",
//           added: 8453,
//         },
//         {
//           id: 2597,
//           slug: "lego-lord-of-the-rings",
//           name: "LEGO The Lord of the Rings",
//           added: 5664,
//         },
//         {
//           id: 250,
//           slug: "the-binding-of-isaac-rebirth",
//           name: "The Binding of Isaac: Rebirth",
//           added: 5537,
//         },
//         {
//           id: 3729,
//           slug: "lego-the-hobbit",
//           name: "LEGO The Hobbit",
//           added: 5200,
//         },
//         {
//           id: 4012,
//           slug: "resident-evil-revelations-biohazard-revelations",
//           name: "Resident Evil Revelations",
//           added: 4306,
//         },
//       ],
//     },
//     {
//       id: 9,
//       name: "Nintendo DS",
//       slug: "nintendo-ds",
//       games_count: 2483,
//       image_background:
//         "https://media.rawg.io/media/games/693/693952316d4b90984a92e7ab0f5c9b81.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 865,
//           slug: "call-of-duty-black-ops",
//           name: "Call of Duty: Black Ops",
//           added: 6737,
//         },
//         {
//           id: 3486,
//           slug: "syberia",
//           name: "Syberia",
//           added: 6606,
//         },
//         {
//           id: 2597,
//           slug: "lego-lord-of-the-rings",
//           name: "LEGO The Lord of the Rings",
//           added: 5664,
//         },
//         {
//           id: 5578,
//           slug: "grid",
//           name: "GRID (2008)",
//           added: 5357,
//         },
//         {
//           id: 4869,
//           slug: "tomb-raider-underworld",
//           name: "Tomb Raider: Underworld",
//           added: 4647,
//         },
//         {
//           id: 5528,
//           slug: "call-of-duty-world-at-war",
//           name: "Call of Duty: World at War",
//           added: 4459,
//         },
//       ],
//     },
//     {
//       id: 13,
//       name: "Nintendo DSi",
//       slug: "nintendo-dsi",
//       games_count: 37,
//       image_background:
//         "https://media.rawg.io/media/screenshots/078/078629e997421ca28e9098bd7a87cb10.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 19309,
//           slug: "plants-vs-zombies-goty-edition",
//           name: "Plants vs. Zombies GOTY Edition",
//           added: 3798,
//         },
//         {
//           id: 949,
//           slug: "cut-the-rope",
//           name: "Cut the Rope",
//           added: 652,
//         },
//         {
//           id: 223378,
//           slug: "ace-attorney-investigations-miles-edgeworth",
//           name: "Ace Attorney Investigations - Miles Edgeworth",
//           added: 202,
//         },
//         {
//           id: 22727,
//           slug: "jagged-alliance",
//           name: "Jagged Alliance",
//           added: 147,
//         },
//         {
//           id: 53802,
//           slug: "dragons-lair",
//           name: "Dragon's Lair",
//           added: 74,
//         },
//         {
//           id: 25953,
//           slug: "mario-vs-donkey-kong-minis-march-again",
//           name: "Mario vs. Donkey Kong: Minis March Again!",
//           added: 36,
//         },
//       ],
//     },
//     {
//       id: 5,
//       name: "macOS",
//       slug: "macos",
//       games_count: 105302,
//       image_background:
//         "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3328,
//           slug: "the-witcher-3-wild-hunt",
//           name: "The Witcher 3: Wild Hunt",
//           added: 20930,
//         },
//         {
//           id: 4200,
//           slug: "portal-2",
//           name: "Portal 2",
//           added: 19840,
//         },
//         {
//           id: 5286,
//           slug: "tomb-raider",
//           name: "Tomb Raider (2013)",
//           added: 17053,
//         },
//         {
//           id: 13536,
//           slug: "portal",
//           name: "Portal",
//           added: 16889,
//         },
//         {
//           id: 12020,
//           slug: "left-4-dead-2",
//           name: "Left 4 Dead 2",
//           added: 16781,
//         },
//         {
//           id: 802,
//           slug: "borderlands-2",
//           name: "Borderlands 2",
//           added: 15386,
//         },
//       ],
//     },
//     {
//       id: 6,
//       name: "Linux",
//       slug: "linux",
//       games_count: 78065,
//       image_background:
//         "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 4200,
//           slug: "portal-2",
//           name: "Portal 2",
//           added: 19840,
//         },
//         {
//           id: 4291,
//           slug: "counter-strike-global-offensive",
//           name: "Counter-Strike: Global Offensive",
//           added: 17525,
//         },
//         {
//           id: 13536,
//           slug: "portal",
//           name: "Portal",
//           added: 16889,
//         },
//         {
//           id: 12020,
//           slug: "left-4-dead-2",
//           name: "Left 4 Dead 2",
//           added: 16781,
//         },
//         {
//           id: 4062,
//           slug: "bioshock-infinite",
//           name: "BioShock Infinite",
//           added: 15534,
//         },
//         {
//           id: 802,
//           slug: "borderlands-2",
//           name: "Borderlands 2",
//           added: 15386,
//         },
//       ],
//     },
//     {
//       id: 14,
//       name: "Xbox 360",
//       slug: "xbox360",
//       games_count: 2805,
//       image_background:
//         "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3498,
//           slug: "grand-theft-auto-v",
//           name: "Grand Theft Auto V",
//           added: 21409,
//         },
//         {
//           id: 4200,
//           slug: "portal-2",
//           name: "Portal 2",
//           added: 19840,
//         },
//         {
//           id: 4291,
//           slug: "counter-strike-global-offensive",
//           name: "Counter-Strike: Global Offensive",
//           added: 17525,
//         },
//         {
//           id: 5286,
//           slug: "tomb-raider",
//           name: "Tomb Raider (2013)",
//           added: 17053,
//         },
//         {
//           id: 13536,
//           slug: "portal",
//           name: "Portal",
//           added: 16889,
//         },
//         {
//           id: 12020,
//           slug: "left-4-dead-2",
//           name: "Left 4 Dead 2",
//           added: 16781,
//         },
//       ],
//     },
//     {
//       id: 80,
//       name: "Xbox",
//       slug: "xbox-old",
//       games_count: 739,
//       image_background:
//         "https://media.rawg.io/media/games/b1d/b1de33eca64ad293702d9554f5ac5cd5.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 13537,
//           slug: "half-life-2",
//           name: "Half-Life 2",
//           added: 15036,
//         },
//         {
//           id: 416,
//           slug: "grand-theft-auto-san-andreas",
//           name: "Grand Theft Auto: San Andreas",
//           added: 11434,
//         },
//         {
//           id: 430,
//           slug: "grand-theft-auto-vice-city",
//           name: "Grand Theft Auto: Vice City",
//           added: 9398,
//         },
//         {
//           id: 19301,
//           slug: "counter-strike",
//           name: "Counter-Strike",
//           added: 8947,
//         },
//         {
//           id: 2361,
//           slug: "psychonauts",
//           name: "Psychonauts",
//           added: 8103,
//         },
//         {
//           id: 432,
//           slug: "grand-theft-auto-iii",
//           name: "Grand Theft Auto III",
//           added: 7053,
//         },
//       ],
//     },
//     {
//       id: 16,
//       name: "PlayStation 3",
//       slug: "playstation3",
//       games_count: 3166,
//       image_background:
//         "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3498,
//           slug: "grand-theft-auto-v",
//           name: "Grand Theft Auto V",
//           added: 21409,
//         },
//         {
//           id: 4200,
//           slug: "portal-2",
//           name: "Portal 2",
//           added: 19840,
//         },
//         {
//           id: 4291,
//           slug: "counter-strike-global-offensive",
//           name: "Counter-Strike: Global Offensive",
//           added: 17525,
//         },
//         {
//           id: 5286,
//           slug: "tomb-raider",
//           name: "Tomb Raider (2013)",
//           added: 17053,
//         },
//         {
//           id: 13536,
//           slug: "portal",
//           name: "Portal",
//           added: 16889,
//         },
//         {
//           id: 5679,
//           slug: "the-elder-scrolls-v-skyrim",
//           name: "The Elder Scrolls V: Skyrim",
//           added: 16103,
//         },
//       ],
//     },
//     {
//       id: 15,
//       name: "PlayStation 2",
//       slug: "playstation2",
//       games_count: 2052,
//       image_background:
//         "https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 416,
//           slug: "grand-theft-auto-san-andreas",
//           name: "Grand Theft Auto: San Andreas",
//           added: 11434,
//         },
//         {
//           id: 18080,
//           slug: "half-life",
//           name: "Half-Life",
//           added: 10862,
//         },
//         {
//           id: 430,
//           slug: "grand-theft-auto-vice-city",
//           name: "Grand Theft Auto: Vice City",
//           added: 9398,
//         },
//         {
//           id: 2361,
//           slug: "psychonauts",
//           name: "Psychonauts",
//           added: 8103,
//         },
//         {
//           id: 432,
//           slug: "grand-theft-auto-iii",
//           name: "Grand Theft Auto III",
//           added: 7053,
//         },
//         {
//           id: 56184,
//           slug: "resident-evil-4",
//           name: "Resident Evil 4 (2005)",
//           added: 6722,
//         },
//       ],
//     },
//     {
//       id: 27,
//       name: "PlayStation",
//       slug: "playstation1",
//       games_count: 1676,
//       image_background:
//         "https://media.rawg.io/media/games/f77/f77510051b6a61decc35c5257193fc9e.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 5159,
//           slug: "resident-evil-2",
//           name: "Resident Evil 2 (1998)",
//           added: 6210,
//         },
//         {
//           id: 5193,
//           slug: "oddworld-abes-oddysee",
//           name: "Oddworld: Abe's Oddysee",
//           added: 5605,
//         },
//         {
//           id: 3449,
//           slug: "resident-evil",
//           name: "Resident Evil",
//           added: 5286,
//         },
//         {
//           id: 52939,
//           slug: "final-fantasy-vii",
//           name: "Final Fantasy VII (1997)",
//           added: 4197,
//         },
//         {
//           id: 20569,
//           slug: "ufo-enemy-unknown",
//           name: "X-COM: UFO Defense",
//           added: 3574,
//         },
//         {
//           id: 57908,
//           slug: "tomb-raider-ii",
//           name: "Tomb Raider II",
//           added: 3177,
//         },
//       ],
//     },
//     {
//       id: 19,
//       name: "PS Vita",
//       slug: "ps-vita",
//       games_count: 1448,
//       image_background:
//         "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 802,
//           slug: "borderlands-2",
//           name: "Borderlands 2",
//           added: 15386,
//         },
//         {
//           id: 1030,
//           slug: "limbo",
//           name: "Limbo",
//           added: 13635,
//         },
//         {
//           id: 422,
//           slug: "terraria",
//           name: "Terraria",
//           added: 12915,
//         },
//         {
//           id: 23027,
//           slug: "the-walking-dead",
//           name: "The Walking Dead: Season 1",
//           added: 11324,
//         },
//         {
//           id: 3612,
//           slug: "hotline-miami",
//           name: "Hotline Miami",
//           added: 10556,
//         },
//         {
//           id: 654,
//           slug: "stardew-valley",
//           name: "Stardew Valley",
//           added: 10324,
//         },
//       ],
//     },
//     {
//       id: 17,
//       name: "PSP",
//       slug: "psp",
//       games_count: 1373,
//       image_background:
//         "https://media.rawg.io/media/games/dd7/dd72d8a527cd9245c7eb7cd05aa53efa.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 13886,
//           slug: "star-wars-battlefront-ii-2",
//           name: "Star Wars: Battlefront II (2005)",
//           added: 4729,
//         },
//         {
//           id: 5298,
//           slug: "tomb-raider-legend",
//           name: "Tomb Raider: Legend",
//           added: 4234,
//         },
//         {
//           id: 5297,
//           slug: "tomb-raider-anniversary",
//           name: "Tomb Raider: Anniversary",
//           added: 4093,
//         },
//         {
//           id: 16543,
//           slug: "lego-batman",
//           name: "LEGO Batman",
//           added: 3104,
//         },
//         {
//           id: 58890,
//           slug: "need-for-speed-most-wanted",
//           name: "Need For Speed: Most Wanted",
//           added: 2974,
//         },
//         {
//           id: 13926,
//           slug: "prince-of-persia-the-two-thrones",
//           name: "Prince of Persia: The Two Thrones",
//           added: 2762,
//         },
//       ],
//     },
//     {
//       id: 10,
//       name: "Wii U",
//       slug: "wii-u",
//       games_count: 1118,
//       image_background:
//         "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 422,
//           slug: "terraria",
//           name: "Terraria",
//           added: 12915,
//         },
//         {
//           id: 3144,
//           slug: "super-meat-boy",
//           name: "Super Meat Boy",
//           added: 9458,
//         },
//         {
//           id: 3841,
//           slug: "assassins-creed-iv-black-flag",
//           name: "Assassin’s Creed IV: Black Flag",
//           added: 9360,
//         },
//         {
//           id: 22509,
//           slug: "minecraft",
//           name: "Minecraft",
//           added: 8453,
//         },
//         {
//           id: 3687,
//           slug: "watch-dogs",
//           name: "Watch Dogs",
//           added: 8070,
//         },
//         {
//           id: 3876,
//           slug: "deus-ex-human-revolution-directors-cut",
//           name: "Deus Ex: Human Revolution - Director's Cut",
//           added: 7461,
//         },
//       ],
//     },
//     {
//       id: 11,
//       name: "Wii",
//       slug: "wii",
//       games_count: 2222,
//       image_background:
//         "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 865,
//           slug: "call-of-duty-black-ops",
//           name: "Call of Duty: Black Ops",
//           added: 6737,
//         },
//         {
//           id: 56184,
//           slug: "resident-evil-4",
//           name: "Resident Evil 4 (2005)",
//           added: 6722,
//         },
//         {
//           id: 11276,
//           slug: "call-of-duty-modern-warfare-3",
//           name: "Call of Duty: Modern Warfare 3",
//           added: 6141,
//         },
//         {
//           id: 2597,
//           slug: "lego-lord-of-the-rings",
//           name: "LEGO The Lord of the Rings",
//           added: 5664,
//         },
//         {
//           id: 4869,
//           slug: "tomb-raider-underworld",
//           name: "Tomb Raider: Underworld",
//           added: 4647,
//         },
//         {
//           id: 1140,
//           slug: "world-of-goo",
//           name: "World of Goo",
//           added: 4471,
//         },
//       ],
//     },
//     {
//       id: 105,
//       name: "GameCube",
//       slug: "gamecube",
//       games_count: 634,
//       image_background:
//         "https://media.rawg.io/media/games/33d/33d72d63a624f17431d39922359c7bf8.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 56184,
//           slug: "resident-evil-4",
//           name: "Resident Evil 4 (2005)",
//           added: 6722,
//         },
//         {
//           id: 5159,
//           slug: "resident-evil-2",
//           name: "Resident Evil 2 (1998)",
//           added: 6210,
//         },
//         {
//           id: 19592,
//           slug: "hitman-2-silent-assassin",
//           name: "Hitman 2: Silent Assassin",
//           added: 4503,
//         },
//         {
//           id: 5298,
//           slug: "tomb-raider-legend",
//           name: "Tomb Raider: Legend",
//           added: 4234,
//         },
//         {
//           id: 12018,
//           slug: "star-wars-jedi-knight-ii-jedi-outcast",
//           name: "Star Wars Jedi Knight II: Jedi Outcast",
//           added: 3684,
//         },
//         {
//           id: 13909,
//           slug: "prince-of-persia-the-sands-of-time",
//           name: "Prince of Persia: The Sands of Time",
//           added: 3352,
//         },
//       ],
//     },
//     {
//       id: 83,
//       name: "Nintendo 64",
//       slug: "nintendo-64",
//       games_count: 363,
//       image_background:
//         "https://media.rawg.io/media/screenshots/c1f/c1fd8b15793743563367688b3dd5faa6.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 5159,
//           slug: "resident-evil-2",
//           name: "Resident Evil 2 (1998)",
//           added: 6210,
//         },
//         {
//           id: 54491,
//           slug: "quake",
//           name: "Quake",
//           added: 3221,
//         },
//         {
//           id: 20466,
//           slug: "worms-armageddon",
//           name: "Worms Armageddon",
//           added: 3060,
//         },
//         {
//           id: 54492,
//           slug: "quake-2",
//           name: "Quake II",
//           added: 2521,
//         },
//         {
//           id: 25097,
//           slug: "the-legend-of-zelda-ocarina-of-time",
//           name: "The Legend of Zelda: Ocarina of Time",
//           added: 1751,
//         },
//         {
//           id: 28532,
//           slug: "banjo-kazooie",
//           name: "Banjo-Kazooie",
//           added: 1552,
//         },
//       ],
//     },
//     {
//       id: 24,
//       name: "Game Boy Advance",
//       slug: "game-boy-advance",
//       games_count: 954,
//       image_background:
//         "https://media.rawg.io/media/games/fd6/fd6e2692bd4eeb470bccbf282155839b.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 53341,
//           slug: "jet-set-radio-2012",
//           name: "Jet Set Radio",
//           added: 5188,
//         },
//         {
//           id: 17975,
//           slug: "doom-ii",
//           name: "DOOM II",
//           added: 3237,
//         },
//         {
//           id: 19646,
//           slug: "splinter-cell",
//           name: "Tom Clancy's Splinter Cell",
//           added: 2190,
//         },
//         {
//           id: 53446,
//           slug: "need-for-speed-underground-2-2",
//           name: "Need for Speed: Underground 2",
//           added: 2124,
//         },
//         {
//           id: 4005,
//           slug: "wolfenstein-3d",
//           name: "Wolfenstein 3D",
//           added: 1862,
//         },
//         {
//           id: 5265,
//           slug: "need-for-speed-carbon",
//           name: "Need For Speed Carbon",
//           added: 1659,
//         },
//       ],
//     },
//     {
//       id: 43,
//       name: "Game Boy Color",
//       slug: "game-boy-color",
//       games_count: 419,
//       image_background:
//         "https://media.rawg.io/media/screenshots/6fe/6fee3969b73bfccd935517c0c15826d8.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 20466,
//           slug: "worms-armageddon",
//           name: "Worms Armageddon",
//           added: 3060,
//         },
//         {
//           id: 57607,
//           slug: "metal-gear-solid-1",
//           name: "Metal Gear Solid",
//           added: 2170,
//         },
//         {
//           id: 52997,
//           slug: "grand-theft-auto-2-1999",
//           name: "Grand Theft Auto 2",
//           added: 1950,
//         },
//         {
//           id: 52998,
//           slug: "grand-theft-auto-1998",
//           name: "Grand Theft Auto",
//           added: 1873,
//         },
//         {
//           id: 25080,
//           slug: "super-mario-bros",
//           name: "Super Mario Bros.",
//           added: 1454,
//         },
//         {
//           id: 24030,
//           slug: "super-mario-bros-3",
//           name: "Super Mario Bros. 3",
//           added: 1147,
//         },
//       ],
//     },
//     {
//       id: 26,
//       name: "Game Boy",
//       slug: "game-boy",
//       games_count: 614,
//       image_background:
//         "https://media.rawg.io/media/screenshots/1e5/1e5e083780bb330479f7c778e6a0b7f0.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 5383,
//           slug: "worms",
//           name: "Worms",
//           added: 2076,
//         },
//         {
//           id: 52998,
//           slug: "grand-theft-auto-1998",
//           name: "Grand Theft Auto",
//           added: 1873,
//         },
//         {
//           id: 52175,
//           slug: "battletoads",
//           name: "Battletoads",
//           added: 1833,
//         },
//         {
//           id: 54285,
//           slug: "mortal-kombat",
//           name: "Mortal Kombat",
//           added: 1757,
//         },
//         {
//           id: 14829,
//           slug: "turok",
//           name: "Turok: Dinosaur Hunter",
//           added: 1378,
//         },
//         {
//           id: 23762,
//           slug: "pokemon-red",
//           name: "Pokémon Red, Blue, Yellow",
//           added: 1044,
//         },
//       ],
//     },
//     {
//       id: 79,
//       name: "SNES",
//       slug: "snes",
//       games_count: 973,
//       image_background:
//         "https://media.rawg.io/media/games/e40/e4043e92866d08ec9fdd212dcd3a1224.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 5383,
//           slug: "worms",
//           name: "Worms",
//           added: 2076,
//         },
//         {
//           id: 4005,
//           slug: "wolfenstein-3d",
//           name: "Wolfenstein 3D",
//           added: 1862,
//         },
//         {
//           id: 54285,
//           slug: "mortal-kombat",
//           name: "Mortal Kombat",
//           added: 1757,
//         },
//         {
//           id: 52884,
//           slug: "doom-2",
//           name: "DOOM",
//           added: 1585,
//         },
//         {
//           id: 1063,
//           slug: "final-fantasy-vi",
//           name: "FINAL FANTASY VI",
//           added: 1495,
//         },
//         {
//           id: 24899,
//           slug: "super-mario-world",
//           name: "Super Mario World",
//           added: 1484,
//         },
//       ],
//     },
//     {
//       id: 49,
//       name: "NES",
//       slug: "nes",
//       games_count: 1006,
//       image_background:
//         "https://media.rawg.io/media/screenshots/ef1/ef12e8776d0e13d91083a7bcdad02a07.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 54122,
//           slug: "ultima-4-quest-of-the-avatar",
//           name: "Ultima IV: Quest of the Avatar",
//           added: 2161,
//         },
//         {
//           id: 52175,
//           slug: "battletoads",
//           name: "Battletoads",
//           added: 1833,
//         },
//         {
//           id: 25080,
//           slug: "super-mario-bros",
//           name: "Super Mario Bros.",
//           added: 1454,
//         },
//         {
//           id: 24030,
//           slug: "super-mario-bros-3",
//           name: "Super Mario Bros. 3",
//           added: 1147,
//         },
//         {
//           id: 24881,
//           slug: "pac-man",
//           name: "Pac-Man",
//           added: 804,
//         },
//         {
//           id: 53239,
//           slug: "disneys-aladdin-1993",
//           name: "Disney's Aladdin",
//           added: 744,
//         },
//       ],
//     },
//     {
//       id: 55,
//       name: "Classic Macintosh",
//       slug: "macintosh",
//       games_count: 675,
//       image_background:
//         "https://media.rawg.io/media/games/38a/38af969459ad6e5de116ec8a4a84218c.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 13554,
//           slug: "fallout-a-post-nuclear-role-playing-game",
//           name: "Fallout",
//           added: 8159,
//         },
//         {
//           id: 2518,
//           slug: "max-payne",
//           name: "Max Payne",
//           added: 5525,
//         },
//         {
//           id: 12018,
//           slug: "star-wars-jedi-knight-ii-jedi-outcast",
//           name: "Star Wars Jedi Knight II: Jedi Outcast",
//           added: 3684,
//         },
//         {
//           id: 17975,
//           slug: "doom-ii",
//           name: "DOOM II",
//           added: 3237,
//         },
//         {
//           id: 54491,
//           slug: "quake",
//           name: "Quake",
//           added: 3221,
//         },
//         {
//           id: 57908,
//           slug: "tomb-raider-ii",
//           name: "Tomb Raider II",
//           added: 3177,
//         },
//       ],
//     },
//     {
//       id: 41,
//       name: "Apple II",
//       slug: "apple-ii",
//       games_count: 424,
//       image_background:
//         "https://media.rawg.io/media/screenshots/3d2/3d2bb57b39e2efa39d1c385585b2ea8b.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 30119,
//           slug: "wasteland",
//           name: "Wasteland",
//           added: 2234,
//         },
//         {
//           id: 54122,
//           slug: "ultima-4-quest-of-the-avatar",
//           name: "Ultima IV: Quest of the Avatar",
//           added: 2161,
//         },
//         {
//           id: 22991,
//           slug: "akalabeth-world-of-doom-2",
//           name: "Akalabeth: World of Doom",
//           added: 1444,
//         },
//         {
//           id: 24881,
//           slug: "pac-man",
//           name: "Pac-Man",
//           added: 804,
//         },
//         {
//           id: 29908,
//           slug: "another-world",
//           name: "Another World",
//           added: 796,
//         },
//         {
//           id: 51175,
//           slug: "leisure-suit-larry-1-in-the-land-of-the-lounge-l-2",
//           name: "Leisure Suit Larry 1 - In the Land of the Lounge Lizards",
//           added: 709,
//         },
//       ],
//     },
//     {
//       id: 166,
//       name: "Commodore / Amiga",
//       slug: "commodore-amiga",
//       games_count: 2082,
//       image_background:
//         "https://media.rawg.io/media/screenshots/f64/f64fc102b850732764dfd7c29cca3429.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 20569,
//           slug: "ufo-enemy-unknown",
//           name: "X-COM: UFO Defense",
//           added: 3574,
//         },
//         {
//           id: 54491,
//           slug: "quake",
//           name: "Quake",
//           added: 3221,
//         },
//         {
//           id: 22734,
//           slug: "beneath-a-steel-sky",
//           name: "Beneath a Steel Sky",
//           added: 2679,
//         },
//         {
//           id: 54492,
//           slug: "quake-2",
//           name: "Quake II",
//           added: 2521,
//         },
//         {
//           id: 30119,
//           slug: "wasteland",
//           name: "Wasteland",
//           added: 2234,
//         },
//         {
//           id: 54122,
//           slug: "ultima-4-quest-of-the-avatar",
//           name: "Ultima IV: Quest of the Avatar",
//           added: 2161,
//         },
//       ],
//     },
//     {
//       id: 28,
//       name: "Atari 7800",
//       slug: "atari-7800",
//       games_count: 64,
//       image_background:
//         "https://media.rawg.io/media/screenshots/565/56504b28b184dbc630a7de118e39d822.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3802,
//           slug: "double-dragon",
//           name: "Double Dragon",
//           added: 470,
//         },
//         {
//           id: 52512,
//           slug: "arcade-archives-donkey-kong",
//           name: "Donkey Kong",
//           added: 418,
//         },
//         {
//           id: 52434,
//           slug: "mario-bros-1983",
//           name: "Mario Bros. (1983)",
//           added: 309,
//         },
//         {
//           id: 28279,
//           slug: "joust",
//           name: "Joust",
//           added: 187,
//         },
//         {
//           id: 52513,
//           slug: "donkey-kong-jr",
//           name: "Donkey Kong Jr.",
//           added: 143,
//         },
//         {
//           id: 53830,
//           slug: "galaga-1981",
//           name: "Galaga (1981)",
//           added: 138,
//         },
//       ],
//     },
//     {
//       id: 31,
//       name: "Atari 5200",
//       slug: "atari-5200",
//       games_count: 64,
//       image_background:
//         "https://media.rawg.io/media/screenshots/678/6786598cba3939d48ed60cbd1a3723f4.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 24881,
//           slug: "pac-man",
//           name: "Pac-Man",
//           added: 804,
//         },
//         {
//           id: 52434,
//           slug: "mario-bros-1983",
//           name: "Mario Bros. (1983)",
//           added: 309,
//         },
//         {
//           id: 28279,
//           slug: "joust",
//           name: "Joust",
//           added: 187,
//         },
//         {
//           id: 52423,
//           slug: "galaxian",
//           name: "Galaxian",
//           added: 170,
//         },
//         {
//           id: 52444,
//           slug: "space-invaders-1978",
//           name: "Space Invaders (1978)",
//           added: 152,
//         },
//         {
//           id: 52418,
//           slug: "dig-dug-1982",
//           name: "Dig Dug (1982)",
//           added: 127,
//         },
//       ],
//     },
//     {
//       id: 23,
//       name: "Atari 2600",
//       slug: "atari-2600",
//       games_count: 294,
//       image_background:
//         "https://media.rawg.io/media/screenshots/ff6/ff623993a854663931c1e78d72a16a5a.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 24881,
//           slug: "pac-man",
//           name: "Pac-Man",
//           added: 804,
//         },
//         {
//           id: 52623,
//           slug: "tetris-1984",
//           name: "Tetris (1984)",
//           added: 606,
//         },
//         {
//           id: 3802,
//           slug: "double-dragon",
//           name: "Double Dragon",
//           added: 470,
//         },
//         {
//           id: 52512,
//           slug: "arcade-archives-donkey-kong",
//           name: "Donkey Kong",
//           added: 418,
//         },
//         {
//           id: 52434,
//           slug: "mario-bros-1983",
//           name: "Mario Bros. (1983)",
//           added: 309,
//         },
//         {
//           id: 52467,
//           slug: "track-field",
//           name: "Track & Field",
//           added: 209,
//         },
//       ],
//     },
//     {
//       id: 22,
//       name: "Atari Flashback",
//       slug: "atari-flashback",
//       games_count: 30,
//       image_background:
//         "https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 53138,
//           slug: "pong-1972",
//           name: "Pong (1972)",
//           added: 119,
//         },
//         {
//           id: 52391,
//           slug: "adventure-game-atari",
//           name: "Adventure",
//           added: 64,
//         },
//         {
//           id: 52563,
//           slug: "pitfall-1982",
//           name: "Pitfall! (1982)",
//           added: 59,
//         },
//         {
//           id: 52402,
//           slug: "breakout-1976",
//           name: "Breakout (1976)",
//           added: 57,
//         },
//         {
//           id: 52436,
//           slug: "missile-command-1980",
//           name: "Missile Command (1980)",
//           added: 51,
//         },
//         {
//           id: 52409,
//           slug: "combat-1977",
//           name: "Combat (1977)",
//           added: 43,
//         },
//       ],
//     },
//     {
//       id: 25,
//       name: "Atari 8-bit",
//       slug: "atari-8-bit",
//       games_count: 308,
//       image_background:
//         "https://media.rawg.io/media/screenshots/038/0385a47d3a43b218204268af5361a19e.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 54122,
//           slug: "ultima-4-quest-of-the-avatar",
//           name: "Ultima IV: Quest of the Avatar",
//           added: 2161,
//         },
//         {
//           id: 24881,
//           slug: "pac-man",
//           name: "Pac-Man",
//           added: 804,
//         },
//         {
//           id: 52512,
//           slug: "arcade-archives-donkey-kong",
//           name: "Donkey Kong",
//           added: 418,
//         },
//         {
//           id: 52434,
//           slug: "mario-bros-1983",
//           name: "Mario Bros. (1983)",
//           added: 309,
//         },
//         {
//           id: 28279,
//           slug: "joust",
//           name: "Joust",
//           added: 187,
//         },
//         {
//           id: 25161,
//           slug: "lode-runner",
//           name: "Lode Runner",
//           added: 176,
//         },
//       ],
//     },
//     {
//       id: 34,
//       name: "Atari ST",
//       slug: "atari-st",
//       games_count: 836,
//       image_background:
//         "https://media.rawg.io/media/games/32d/32d851318b042aba3df62e52d868d599.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 54122,
//           slug: "ultima-4-quest-of-the-avatar",
//           name: "Ultima IV: Quest of the Avatar",
//           added: 2161,
//         },
//         {
//           id: 22733,
//           slug: "lure-of-the-temptress",
//           name: "Lure of the Temptress",
//           added: 1793,
//         },
//         {
//           id: 29908,
//           slug: "another-world",
//           name: "Another World",
//           added: 796,
//         },
//         {
//           id: 16122,
//           slug: "loom",
//           name: "LOOM",
//           added: 782,
//         },
//         {
//           id: 31542,
//           slug: "indiana-jones-and-the-last-crusade",
//           name: "Indiana Jones and the Last Crusade: The Graphic Adventure",
//           added: 754,
//         },
//         {
//           id: 51175,
//           slug: "leisure-suit-larry-1-in-the-land-of-the-lounge-l-2",
//           name: "Leisure Suit Larry 1 - In the Land of the Lounge Lizards",
//           added: 709,
//         },
//       ],
//     },
//     {
//       id: 46,
//       name: "Atari Lynx",
//       slug: "atari-lynx",
//       games_count: 57,
//       image_background:
//         "https://media.rawg.io/media/screenshots/d71/d71b68d3f6b1810bc9d64d7aea746d30.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 29391,
//           slug: "eye-of-the-beholder",
//           name: "Eye of the Beholder",
//           added: 1132,
//         },
//         {
//           id: 3802,
//           slug: "double-dragon",
//           name: "Double Dragon",
//           added: 470,
//         },
//         {
//           id: 30501,
//           slug: "chips-challenge",
//           name: "Chip's Challenge",
//           added: 449,
//         },
//         {
//           id: 53467,
//           slug: "paperboy",
//           name: "Paperboy",
//           added: 196,
//         },
//         {
//           id: 52438,
//           slug: "ms-pac-man",
//           name: "Ms. Pac-Man",
//           added: 107,
//         },
//         {
//           id: 53975,
//           slug: "ninja-gaiden-iii-the-ancient-ship-of-doom",
//           name: "Ninja Gaiden III: The Ancient Ship of Doom (1991)",
//           added: 105,
//         },
//       ],
//     },
//     {
//       id: 50,
//       name: "Atari XEGS",
//       slug: "atari-xegs",
//       games_count: 22,
//       image_background:
//         "https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 52512,
//           slug: "arcade-archives-donkey-kong",
//           name: "Donkey Kong",
//           added: 418,
//         },
//         {
//           id: 52434,
//           slug: "mario-bros-1983",
//           name: "Mario Bros. (1983)",
//           added: 309,
//         },
//         {
//           id: 34571,
//           slug: "lode-runner-1983",
//           name: "Lode Runner (1983)",
//           added: 132,
//         },
//         {
//           id: 53687,
//           slug: "archon-the-light-and-the-dark",
//           name: "Archon: The Light and the Dark",
//           added: 19,
//         },
//         {
//           id: 52605,
//           slug: "summer-games",
//           name: "Summer Games",
//           added: 23,
//         },
//         {
//           id: 52413,
//           slug: "crossbow",
//           name: "Crossbow",
//           added: 15,
//         },
//       ],
//     },
//     {
//       id: 167,
//       name: "Genesis",
//       slug: "genesis",
//       games_count: 840,
//       image_background:
//         "https://media.rawg.io/media/games/a9a/a9a2472f862b041d2980103ddbb61c91.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 5383,
//           slug: "worms",
//           name: "Worms",
//           added: 2076,
//         },
//         {
//           id: 52175,
//           slug: "battletoads",
//           name: "Battletoads",
//           added: 1833,
//         },
//         {
//           id: 54285,
//           slug: "mortal-kombat",
//           name: "Mortal Kombat",
//           added: 1757,
//         },
//         {
//           id: 53551,
//           slug: "sonic-the-hedgehog",
//           name: "Sonic the Hedgehog (1991)",
//           added: 1548,
//         },
//         {
//           id: 2552,
//           slug: "sonic-the-hedgehog-2",
//           name: "Sonic the Hedgehog 2",
//           added: 1328,
//         },
//         {
//           id: 28510,
//           slug: "duke-nukem-3d",
//           name: "Duke Nukem 3D",
//           added: 973,
//         },
//       ],
//     },
//     {
//       id: 107,
//       name: "SEGA Saturn",
//       slug: "sega-saturn",
//       games_count: 372,
//       image_background:
//         "https://media.rawg.io/media/screenshots/862/862f0a3da04a5e2d5146b35e75e0d85b.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 3449,
//           slug: "resident-evil",
//           name: "Resident Evil",
//           added: 5286,
//         },
//         {
//           id: 54491,
//           slug: "quake",
//           name: "Quake",
//           added: 3221,
//         },
//         {
//           id: 28300,
//           slug: "nights-into-dreams",
//           name: "NiGHTS into dreams...",
//           added: 2665,
//         },
//         {
//           id: 5383,
//           slug: "worms",
//           name: "Worms",
//           added: 2076,
//         },
//         {
//           id: 52790,
//           slug: "castlevania-sotn",
//           name: "Castlevania: Symphony of the Night",
//           added: 1697,
//         },
//         {
//           id: 52884,
//           slug: "doom-2",
//           name: "DOOM",
//           added: 1585,
//         },
//       ],
//     },
//     {
//       id: 119,
//       name: "SEGA CD",
//       slug: "sega-cd",
//       games_count: 163,
//       image_background:
//         "https://media.rawg.io/media/screenshots/9a0/9a01b32ce1a3e0576018a2580e32cf26.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 1559,
//           slug: "sonic-cd",
//           name: "Sonic CD",
//           added: 2297,
//         },
//         {
//           id: 54285,
//           slug: "mortal-kombat",
//           name: "Mortal Kombat",
//           added: 1757,
//         },
//         {
//           id: 29391,
//           slug: "eye-of-the-beholder",
//           name: "Eye of the Beholder",
//           added: 1132,
//         },
//         {
//           id: 25663,
//           slug: "earthworm-jim",
//           name: "Earthworm Jim",
//           added: 792,
//         },
//         {
//           id: 45957,
//           slug: "prince-of-persia-nes",
//           name: "Prince of Persia (1989)",
//           added: 649,
//         },
//         {
//           id: 4377,
//           slug: "myst",
//           name: "Myst",
//           added: 491,
//         },
//       ],
//     },
//     {
//       id: 117,
//       name: "SEGA 32X",
//       slug: "sega-32x",
//       games_count: 46,
//       image_background:
//         "https://media.rawg.io/media/screenshots/d9f/d9f308b5d824ae8f047edc0a998a587b.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 52884,
//           slug: "doom-2",
//           name: "DOOM",
//           added: 1585,
//         },
//         {
//           id: 29426,
//           slug: "mortal-kombat-2",
//           name: "Mortal Kombat 2",
//           added: 499,
//         },
//         {
//           id: 5463,
//           slug: "rayman",
//           name: "Rayman",
//           added: 324,
//         },
//         {
//           id: 53781,
//           slug: "darkwing-duck",
//           name: "Disney's Darkwing Duck",
//           added: 252,
//         },
//         {
//           id: 32519,
//           slug: "wwf-wrestlemania-the-arcade-game",
//           name: "WWF WrestleMania: The Arcade Game",
//           added: 145,
//         },
//         {
//           id: 53975,
//           slug: "ninja-gaiden-iii-the-ancient-ship-of-doom",
//           name: "Ninja Gaiden III: The Ancient Ship of Doom (1991)",
//           added: 105,
//         },
//       ],
//     },
//     {
//       id: 74,
//       name: "SEGA Master System",
//       slug: "sega-master-system",
//       games_count: 231,
//       image_background:
//         "https://media.rawg.io/media/screenshots/c6b/c6b5bccfd2f89362387ea6d61ba81cd1.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 54122,
//           slug: "ultima-4-quest-of-the-avatar",
//           name: "Ultima IV: Quest of the Avatar",
//           added: 2161,
//         },
//         {
//           id: 54285,
//           slug: "mortal-kombat",
//           name: "Mortal Kombat",
//           added: 1757,
//         },
//         {
//           id: 4678,
//           slug: "streets-of-rage-2",
//           name: "Streets of Rage 2",
//           added: 911,
//         },
//         {
//           id: 914,
//           slug: "wonder-boy-the-dragons-trap",
//           name: "Wonder Boy: The Dragon's Trap",
//           added: 826,
//         },
//         {
//           id: 25663,
//           slug: "earthworm-jim",
//           name: "Earthworm Jim",
//           added: 792,
//         },
//         {
//           id: 53207,
//           slug: "comix-zone-1995",
//           name: "Comix Zone",
//           added: 786,
//         },
//       ],
//     },
//     {
//       id: 106,
//       name: "Dreamcast",
//       slug: "dreamcast",
//       games_count: 364,
//       image_background:
//         "https://media.rawg.io/media/games/fd7/fd794a9f0ffe816038d981b3acc3eec9.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 18080,
//           slug: "half-life",
//           name: "Half-Life",
//           added: 10862,
//         },
//         {
//           id: 19542,
//           slug: "half-life-blue-shift",
//           name: "Half-Life: Blue Shift",
//           added: 6780,
//         },
//         {
//           id: 5159,
//           slug: "resident-evil-2",
//           name: "Resident Evil 2 (1998)",
//           added: 6210,
//         },
//         {
//           id: 53341,
//           slug: "jet-set-radio-2012",
//           name: "Jet Set Radio",
//           added: 5188,
//         },
//         {
//           id: 20466,
//           slug: "worms-armageddon",
//           name: "Worms Armageddon",
//           added: 3060,
//         },
//         {
//           id: 54629,
//           slug: "crazy-taxi",
//           name: "Crazy Taxi (1999)",
//           added: 2699,
//         },
//       ],
//     },
//     {
//       id: 111,
//       name: "3DO",
//       slug: "3do",
//       games_count: 99,
//       image_background:
//         "https://media.rawg.io/media/screenshots/97c/97cd94d7d6d89a12ed562d3a4e40c4a5.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 4005,
//           slug: "wolfenstein-3d",
//           name: "Wolfenstein 3D",
//           added: 1862,
//         },
//         {
//           id: 52884,
//           slug: "doom-2",
//           name: "DOOM",
//           added: 1585,
//         },
//         {
//           id: 29908,
//           slug: "another-world",
//           name: "Another World",
//           added: 796,
//         },
//         {
//           id: 53432,
//           slug: "ultimate-mortal-kombat-3",
//           name: "Ultimate Mortal Kombat 3",
//           added: 695,
//         },
//         {
//           id: 4377,
//           slug: "myst",
//           name: "Myst",
//           added: 491,
//         },
//         {
//           id: 15512,
//           slug: "alone-in-the-dark-1",
//           name: "Alone in the Dark 1",
//           added: 348,
//         },
//       ],
//     },
//     {
//       id: 112,
//       name: "Jaguar",
//       slug: "jaguar",
//       games_count: 39,
//       image_background:
//         "https://media.rawg.io/media/screenshots/241/24188738ed8141b03c767e6bbba28401.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 5383,
//           slug: "worms",
//           name: "Worms",
//           added: 2076,
//         },
//         {
//           id: 4005,
//           slug: "wolfenstein-3d",
//           name: "Wolfenstein 3D",
//           added: 1862,
//         },
//         {
//           id: 52884,
//           slug: "doom-2",
//           name: "DOOM",
//           added: 1585,
//         },
//         {
//           id: 29908,
//           slug: "another-world",
//           name: "Another World",
//           added: 796,
//         },
//         {
//           id: 4377,
//           slug: "myst",
//           name: "Myst",
//           added: 491,
//         },
//         {
//           id: 5463,
//           slug: "rayman",
//           name: "Rayman",
//           added: 324,
//         },
//       ],
//     },
//     {
//       id: 77,
//       name: "Game Gear",
//       slug: "game-gear",
//       games_count: 226,
//       image_background:
//         "https://media.rawg.io/media/screenshots/3d2/3d2bb57b39e2efa39d1c385585b2ea8b.jpg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 52175,
//           slug: "battletoads",
//           name: "Battletoads",
//           added: 1833,
//         },
//         {
//           id: 54285,
//           slug: "mortal-kombat",
//           name: "Mortal Kombat",
//           added: 1757,
//         },
//         {
//           id: 53551,
//           slug: "sonic-the-hedgehog",
//           name: "Sonic the Hedgehog (1991)",
//           added: 1548,
//         },
//         {
//           id: 2552,
//           slug: "sonic-the-hedgehog-2",
//           name: "Sonic the Hedgehog 2",
//           added: 1328,
//         },
//         {
//           id: 4678,
//           slug: "streets-of-rage-2",
//           name: "Streets of Rage 2",
//           added: 911,
//         },
//         {
//           id: 24881,
//           slug: "pac-man",
//           name: "Pac-Man",
//           added: 804,
//         },
//       ],
//     },
//     {
//       id: 12,
//       name: "Neo Geo",
//       slug: "neogeo",
//       games_count: 123,
//       image_background:
//         "https://media.rawg.io/media/screenshots/4cc/4ccee6c3e367f4dd94d19d4857dfc1c9.jpeg",
//       image: null,
//       year_start: null,
//       year_end: null,
//       games: [
//         {
//           id: 1488,
//           slug: "metal-slug-3",
//           name: "METAL SLUG 3",
//           added: 2647,
//         },
//         {
//           id: 14948,
//           slug: "metal-slug",
//           name: "METAL SLUG",
//           added: 1230,
//         },
//         {
//           id: 23669,
//           slug: "the-king-of-fighters-2002",
//           name: "THE KING OF FIGHTERS 2002",
//           added: 886,
//         },
//         {
//           id: 24881,
//           slug: "pac-man",
//           name: "Pac-Man",
//           added: 804,
//         },
//         {
//           id: 6256,
//           slug: "metal-slug-2",
//           name: "METAL SLUG 2",
//           added: 756,
//         },
//         {
//           id: 54646,
//           slug: "garou-mark-of-the-wolves",
//           name: "Garou: Mark of the Wolves",
//           added: 294,
//         },
//       ],
//     },
//   ],
// };
// const fiterdData = data.results.map((result: any) => {
//   return { id: result.id, name: result.name, slug: result.slug };
// });
// console.log(fiterdData);

// const pla = [
//   {
//     id: 4,
//     name: "PC",
//     slug: "pc",
//   },
//   {
//     id: 187,
//     name: "PlayStation 5",
//     slug: "playstation5",
//   },
//   {
//     id: 18,
//     name: "PlayStation 4",
//     slug: "playstation4",
//   },
//   {
//     id: 1,
//     name: "Xbox One",
//     slug: "xbox-one",
//   },
//   {
//     id: 186,
//     name: "Xbox Series S/X",
//     slug: "xbox-series-x",
//   },
//   {
//     id: 7,
//     name: "Nintendo Switch",
//     slug: "nintendo-switch",
//   },
//   {
//     id: 3,
//     name: "iOS",
//     slug: "ios",
//   },
//   {
//     id: 21,
//     name: "Android",
//     slug: "android",
//   },
//   {
//     id: 8,
//     name: "Nintendo 3DS",
//     slug: "nintendo-3ds",
//   },
//   {
//     id: 9,
//     name: "Nintendo DS",
//     slug: "nintendo-ds",
//   },
//   {
//     id: 13,
//     name: "Nintendo DSi",
//     slug: "nintendo-dsi",
//   },
//   {
//     id: 5,
//     name: "macOS",
//     slug: "macos",
//   },
//   {
//     id: 6,
//     name: "Linux",
//     slug: "linux",
//   },
//   {
//     id: 14,
//     name: "Xbox 360",
//     slug: "xbox360",
//   },
//   {
//     id: 80,
//     name: "Xbox",
//     slug: "xbox-old",
//   },
//   {
//     id: 16,
//     name: "PlayStation 3",
//     slug: "playstation3",
//   },
//   {
//     id: 15,
//     name: "PlayStation 2",
//     slug: "playstation2",
//   },
//   {
//     id: 27,
//     name: "PlayStation",
//     slug: "playstation1",
//   },
//   {
//     id: 19,
//     name: "PS Vita",
//     slug: "ps-vita",
//   },
//   {
//     id: 17,
//     name: "PSP",
//     slug: "psp",
//   },
//   {
//     id: 10,
//     name: "Wii U",
//     slug: "wii-u",
//   },
//   {
//     id: 11,
//     name: "Wii",
//     slug: "wii",
//   },
//   {
//     id: 105,
//     name: "GameCube",
//     slug: "gamecube",
//   },
//   {
//     id: 83,
//     name: "Nintendo 64",
//     slug: "nintendo-64",
//   },
//   {
//     id: 24,
//     name: "Game Boy Advance",
//     slug: "game-boy-advance",
//   },
//   {
//     id: 43,
//     name: "Game Boy Color",
//     slug: "game-boy-color",
//   },
//   {
//     id: 26,
//     name: "Game Boy",
//     slug: "game-boy",
//   },
//   {
//     id: 79,
//     name: "SNES",
//     slug: "snes",
//   },
//   {
//     id: 49,
//     name: "NES",
//     slug: "nes",
//   },
//   {
//     id: 55,
//     name: "Classic Macintosh",
//     slug: "macintosh",
//   },
//   {
//     id: 41,
//     name: "Apple II",
//     slug: "apple-ii",
//   },
//   {
//     id: 166,
//     name: "Commodore / Amiga",
//     slug: "commodore-amiga",
//   },
//   {
//     id: 28,
//     name: "Atari 7800",
//     slug: "atari-7800",
//   },
//   {
//     id: 31,
//     name: "Atari 5200",
//     slug: "atari-5200",
//   },
//   {
//     id: 23,
//     name: "Atari 2600",
//     slug: "atari-2600",
//   },
//   {
//     id: 22,
//     name: "Atari Flashback",
//     slug: "atari-flashback",
//   },
//   {
//     id: 25,
//     name: "Atari 8-bit",
//     slug: "atari-8-bit",
//   },
//   {
//     id: 34,
//     name: "Atari ST",
//     slug: "atari-st",
//   },
//   {
//     id: 46,
//     name: "Atari Lynx",
//     slug: "atari-lynx",
//   },
//   {
//     id: 50,
//     name: "Atari XEGS",
//     slug: "atari-xegs",
//   },
//   {
//     id: 167,
//     name: "Genesis",
//     slug: "genesis",
//   },
//   {
//     id: 107,
//     name: "SEGA Saturn",
//     slug: "sega-saturn",
//   },
//   {
//     id: 119,
//     name: "SEGA CD",
//     slug: "sega-cd",
//   },
//   {
//     id: 117,
//     name: "SEGA 32X",
//     slug: "sega-32x",
//   },
//   {
//     id: 74,
//     name: "SEGA Master System",
//     slug: "sega-master-system",
//   },
//   {
//     id: 106,
//     name: "Dreamcast",
//     slug: "dreamcast",
//   },
//   {
//     id: 111,
//     name: "3DO",
//     slug: "3do",
//   },
//   {
//     id: 112,
//     name: "Jaguar",
//     slug: "jaguar",
//   },
//   {
//     id: 77,
//     name: "Game Gear",
//     slug: "game-gear",
//   },
//   {
//     id: 12,
//     name: "Neo Geo",
//     slug: "neogeo",
//   },
// ];
// const fil = pla.map((p) => {
//   if (p.name.split(" ")[0] === "Nintendo") return p.id;
// });
// console.log(fil);
