const products = [    
    {
      id: 1,
      name: "Age of Empire",
      price: 50,
      instock: 999,
      imgSrc: "image/aoeiv_logo.png",
    },
    {
      id: 2,
      name: "Back 4 Blood",
      price: 129,
      instock: 999,
      imgSrc: "./image/back4blood_logo.jpg",
    },
    {
      id: 3,
      name: "Battlefield 2042",
      price: 299,
      instock: 999,
      imgSrc: "image/battlefield2042_logo.jpg",
    },
    {
      id: 4,
      name: "Fallout 4",
      price: 70,
      instock: 999,
      imgSrc: "image/fallout4_logo.jpeg",
    },
    {
      id: 5,
      name: "Far Cry 6",
      price: 159,
      instock: 999,
      imgSrc: "image/farcry6_logo.jpg",
    },
    {
      id: 6,
      name: "Fornite",
      price: 40,
      instock: 999,
      imgSrc: "image/fornite_logo.png",
    },
    {
        id: 7,
        name: "Forza Horizon",
        price: 199,
        instock: 999,
        imgSrc: "image/horizon_logo.jpg",
      },
      {
        id: 8,
        name: "Gang Beasts",
        price: 15,
        instock: 999,
        imgSrc: "image/gangbeasts_logo.jpg",
      },
      {
        id: 9,
        name: "Grand Theft Auto V",
        price: 179,
        instock: 999,
        imgSrc: "image/gtav_logo.png",
      },
      {
        id: 10,
        name: "Halo Infinite",
        price: 30,
        instock: 999,
        imgSrc: "image/haloinfinite_logo.jpg",
      },
      {
        id: 11,
        name: "Minecraft",
        price: 25,
        instock: 999,
        imgSrc: "image/minecraft_logo.png",
      },
      {
        id: 12,
        name: "Sea of Thieves",
        price: 85,
        instock: 999,
        imgSrc: "image/achievement_seaofthieves.png",
      },
      {
        id: 13,
        name: "Battlefield 2042 Xbox Long Sleeve Tee",
        price: 32.99,
        instock: 90,
        imgSrc: "image/bf_merch1.png",
      },
      {
        id: 14,
        name: "Battlefield 2042 Xbox Glass",
        price: 18.99,
        instock: 90,
        imgSrc: "image/bf_merch3.png",
      },
      {
        id: 15,
        name: "Battlefield 2042 Xbox Pullover Hoodie",
        price: 59.99,
        instock: 90,
        imgSrc: "image/bf_merch2.png",
      },
      {
        id: 16,
        name: "Halo Infinite Chief Helmet Badge Tee",
        price: 19.99,
        instock: 90,
        imgSrc: "image/halo_merch1.jpg",
      },
      {
        id: 17,
        name: "Halo Infinite Sprinting Master Chief Sherpa Blanket",
        price: 64.99,
        instock: 90,
        imgSrc: "image/halo_merch2.jpg",
      },
      {
        id: 18,
        name: "Halo Infinite Sprinting Master Chief Throw Pillow",
        price: 29.99,
        instock: 90,
        imgSrc: "image/halo_merch3.jpg",
      },
      {
        id: 19,
        name: "Halo 20th Anniversary Logo Journal",
        price: 24.99,
        instock: 90,
        imgSrc: "image/halo_merch4.png",
      },
      {
        id: 20,
        name: "Wasteland 3 Steeltown Zip-Up Hoodie",
        price: 39.99,
        instock: 90,
        imgSrc: "image/wasteland_merch1.png",
      },
      {
        id: 21,
        name: "Wasteland 3 Steeldown Laser Engraved Steel Tumbler",
        price: 32.99,
        instock: 90,
        imgSrc: "image/wasteland_merch2.png",
      },
      {
        id: 22,
        name: "Wasteland 3 Desert Rangers Gray T-shirt",
        price: 19.99,
        instock: 90,
        imgSrc: "image/wasteland_merch3.png",
      },
      {
        id: 23,
        name: "Xbox 20th Anniversary Snapback Hat",
        price: 29.99,
        instock: 90,
        imgSrc: "image/xbox_merch1.png",
      },
      {
        id: 24,
        name: "Xbox x King Ice Controller Necklace",
        price: 120.00,
        instock: 90,
        imgSrc: "image/xbox_merch2.jpg",
      },
      {
        id: 25,
        name: "Xbox Laptop Backpack",
        price: 69.99,
        instock: 90,
        imgSrc: "image/xbox_merch3.jpg",
      },
      {
        id: 26,
        name: "Xbox x King Ice X Sphere Logo Ring",
        price: 60.00,
        instock: 90,
        imgSrc: "image/xbox_merch4.jpg",
      },
      {
        id: 27,
        name: "Xbox game pass [PC]",
        price: 9.99,
        instock: 999,
        imgSrc: "image/pcpass.jfif",
      },
      {
        id: 28,
        name: "Xbox game pass [ULTIMATE]",
        price: 14.99,
        instock: 999,
        imgSrc: "image/ultimate_pass.jfif",
      },
      {
        id: 29,
        name: "Xbox game pass [CONSOLE]",
        price: 9.99,
        instock: 999,
        imgSrc: "image/consolepass.jpg",
      },
      {
        id: 30,
        name: "Console S[XBOX ALL ACCESS]",
        price: 24.99,
        instock: 999,
        imgSrc: "image/console-s-3.jpg",
      },
      {
        id: 31,
        name: "Console S[STANDALONE]",
        price: 299.99,
        instock: 999,
        imgSrc: "image/console-s-3.jpg",
      },
      {
        id: 32,
        name: "Console X[XBOX ALL ACCESS]",
        price: 34.99,
        instock: 999,
        imgSrc: "image/series-x-5.png",
      },
      {
        id: 33,
        name: "Console X[STANDALONE]",
        price: 499.99,
        instock: 999,
        imgSrc: "image/series-x-5.png",
      },
      {
        id: 34,
        name: "Seagate Storage Expansion Card - 512GB for Xbox Series X|S",
        price: 592.44,
        instock: 999,
        imgSrc: "image/seagatestorage512GB.jpg",
      },
      {
        id: 35,
        name: "Seagate Storage Expansion Card - 1TB for Xbox Series X|S",
        price: 931.00,
        instock: 999,
        imgSrc: "image/seagatestorage1TB.jpg",
      },
      {
        id: 36,
        name: "Western Digital WD_Black D10 12TB Game Drive for Xbox One",
        price: 1269.56,
        instock: 999,
        imgSrc: "image/WD12TB.jpg",
      },
      {
        id: 37,
        name: "Western Digital WD_Black P10 Game Drives for Xbox One",
        price: 634.76,
        instock: 999,
        imgSrc: "image/WDP10.jpg",
      },
      {
        id: 38,
        name: "Seagate Game Drive Hub for Xbox 8TB",
        price: 761.72,
        instock: 999,
        imgSrc: "image/seagategame8TB.jpg",
      },
      {
        id: 39,
        name: "Xbox Wireless Controller – 20th Anniversary Special Edition",
        price: 296.20,
        instock: 999,
        imgSrc: "image/controller20th.jpg",
      },
      {
        id: 40,
        name: "Xbox Wireless Controller + Wireless Adapter for Windows 10",
        price: 338.52,
        instock: 999,
        imgSrc: "image/controlleradapter.jpg",
      },
      {
        id: 41,
        name: "Xbox Wireless Controller – Forza Horizon 5 Limited Edition",
        price: 317.36,
        instock: 999,
        imgSrc: "image/controllerforza.jpg",
      },
      {
        id: 42,
        name: "Xbox Elite Wireless Controller Series 2 – Halo Infinite Limited Edition",
        price: 846.36,
        instock: 999,
        imgSrc: "image/controllerhalo.jpg",
      },
      {
        id: 43,
        name: "Xbox Wireless Controller – Midnight Forces II Special Edition",
        price: 296.20,
        instock: 999,
        imgSrc: "image/controllermidnight.jpg",
      },
      {
        id: 45,
        name: "Xbox Stereo Headset – 20th Anniversary Special Edition",
        price: 283.50,
        instock: 999,
        imgSrc: "image/xboxstereo20th.jpg",
      },
      {
        id: 46,
        name: "Xbox Wireless Headset",
        price: 376.61,
        instock: 999,
        imgSrc: "image/wirelessheadset.jpg",
      },
      {
        id: 47,
        name: "Razer Thresher Ultimate",
        price: 1057.96,
        instock: 999,
        imgSrc: "image/razerheadset.jpg",
      },
      {
        id: 48,
        name: "Kingston HyperX Cloud II Headset",
        price: 423.16,
        instock: 999,
        imgSrc: "image/hyperxcloud2.jpg",
      },
      {
        id: 49,
        name: "Bang & Olufsen Beoplay Portal - Black Anthracite",
        price: 2111.77,
        instock: 999,
        imgSrc: "image/bang_olufsen.jpg",
      },
      {
        id: 50,
        name: "SteelSeries Arctis 9X Gaming Headset",
        price: 846.36,
        instock: 999,
        imgSrc: "image/arctis9x.jpg",
      },
  ];
  