# nOOK API
## Animal Crossing New Horizons database, accessible to anyone! 🍃

Hello! I made this api as a little side project and I hope it can help anyone who wants to use it.
It's a free api containing various information about **Animal Crossing New Horizons.** 🦝

To start using it, just run `**npm install nook-api**`, [here](https://www.npmjs.com/package/nook-api) is the NPM official page.

#### This database contains infos and sprites of: 🦔
```
- Fishes and sea creatures 🎣
- Bugs 🦋 
- Art pieces 🎨
- K.K. songs 🐶🎵 (gotta love bubblegum)
- Hourly songs 🕛🎵
- Villagers 🦆
```

To get started, this package is made by different `**clients**`, each one for a different seed:

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

//-> https://raw.githubusercontent.com/saverioscagnoli/nOOK-API/main/renders/fishes/Saddled_Bichir.png
```
Which is:

![alt text](https://raw.githubusercontent.com/saverioscagnoli/nOOK-API/main/renders/fishes/Saddled_Bichir.png)

## Thank you! <3
