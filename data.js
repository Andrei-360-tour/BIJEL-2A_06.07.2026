var APP_DATA = {
  "scenes": [
    {
      "id": "0-overview1",
      "name": "OVERVIEW1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1665280278165877,
        "pitch": 0.13375485322652914,
        "fov": 1.3412181875493232
      },
      "linkHotspots": [
        {
          "yaw": -0.0359433277700596,
          "pitch": -0.12490022354274899,
          "rotation": 0,
          "target": "1-overview2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-overview2",
      "name": "OVERVIEW2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.099842005874102,
        "pitch": 0.591163425371592,
        "fov": 1.3412181875493232
      },
      "linkHotspots": [
        {
          "yaw": 3.1005725920673264,
          "pitch": 0.4328991911707547,
          "rotation": 0,
          "target": "0-overview1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BJ-2A_06.07.2026",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
