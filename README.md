# nOOK API
## Animal Crossing New Horizons database, accessible to anyone! 🍃

Hello! I made this api as a little side project and I hope it can help anyone who wants to use it.
It's a free api containing various information about **Animal Crossing New Horizons.** 🦝

To start using it, just run `npm install nook-api`, [here](https://www.npmjs.com/package/nook-api) is the NPM official page.

#### This database contains infos and sprites of: 🦔
```
- Fishes and sea creatures 🎣
- Bugs 🦋 
- Art pieces 🎨
- K.K. songs 🐶🎵 (gotta love bubblegum)
- Hourly songs 🕛🎵
- Villagers 🦆
```

To get started, this package is made by different **clients**, each one for a different seed:

```
- FishingClient() > fishes
- BugsClient() > bugs
- SeaCreaturesClient() > sea creatures
- ArtClient() > art pieces
- SongClient() > songs
- VillagerClient() > villagers
```
Each one has its own function to find the data you need! Example (TypeScript):

```javascript
import { FishingClient } from "nook-api";
const client = new FishingClient();

console.log(await client.getFishRenderById(45))

//-> Output https://raw.githubusercontent.com/saverioscagnoli/nOOK-API/main/renders/fishes/Saddled_Bichir.png
```
Which is:

![alt text](https://raw.githubusercontent.com/saverioscagnoli/nOOK-API/main/renders/fishes/Saddled_Bichir.png);

Or you can just make a request to `https://saverioscagnoli.github.io/nOOK-API/json/${"fishes" || "bugs" || "sea_creatures" || "art" || "songs"}/${id || "name"}.json`
Example: 

```javascript
import axios from "axios";
const req = await axios.get("https://saverioscagnoli.github.io/nOOK-API/json/bugs/34.json");
console.log(req.data);


/* -> Output {
	"translations": {
		"english_USA": "banded dragonfly",
		"english_EU": "banded dragonfly",
		"german": "Quelljungfer",
		"spanish_EU": "libélula tigre",
		"spanish_american": "libélula tigre",
		"french_EU": "cordulégastre",
		"french_american": "cordulégastre",
		"italian": "libellula striata",
		"dutch": "bronlibel",
		"simplified_chinese": "无霸勾蜓",
		"traditional_chinese": "無霸勾蜓",
		"japanese": "オニヤンマ",
		"korean": "장수잠자리",
		"russian": "кордулегастер"
	},
	"sell_prices": {
		"nook": 4500,
		"flick": 6750
	},
	"available": {
		"hemisphere_data": {
			"northern_months": "5-10",
			"southern_months": "11-4",
			"northern_months_array": [
				5,
				6,
				7,
				8,
				9,
				10
			],
			"southern_months_array": [
				11,
				12,
				1,
				2,
				3,
				4
			]
		},
		"time": {
			"all_day": false,
			"all_year": false,
			"time_string": "8am - 5pm",
			"time_array": [
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16
			]
		},
		"spot": "Flying",
		"rarity": "Rare"
	},
	"phrases": {
		"joke": "I did it! Did you see that? I caught a banded dragonfly!",
		"museum_description": "The banded dragonfly is known for its black-and-yellow-striped body, as well as for its piercing green eyes. And it is those very eyes that help make dragonflies master hunters, you see. Alas, when one looks at me, I can't help but feel it is sizing me up for a meal! Hoot! The horrors! Look away, fiend!"
	},
	"sprites": {
		"render": "https://raw.githubusercontent.com/saverioscagnoli/nOOK-API/main/renders/bugs/Banded_Dragonfly.png",
		"icon": "https://raw.githubusercontent.com/saverioscagnoli/nOOK-API/main/icons/bugs/Banded_Dragonfly.png"
	},
	"id": 34,
	"name": "banded dragonfly"
}
*/
```

## Thank you! <3
