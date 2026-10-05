/* ONE PLACE TO CHANGE YOUR KEY. Use ONE of the two options below.
   OPTION A (no Google Cloud account): a Cesium ion access token. Create it at https://ion.cesium.com/tokens
     (scope: assets:read), restrict "Allowed URLs" to your github.io site, and add
     "Google Photorealistic 3D Tiles" to My Assets from the ion Asset Depot.
   OPTION B: a Google Map Tiles API key (needs Google Cloud billing).
   Paste your Google "Map Tiles API" key between the quotes, commit, and push.
   This file is public on GitHub Pages, so RESTRICT the key in Google Cloud Console:
   API restriction = Map Tiles API only, website restriction = your github.io URL (see README).
   Leave the placeholder as-is and the app still works on a plain grid globe (no 3D scans). */
window.APP_CONFIG = {
  CESIUM_ION_TOKEN: "YOUR_CESIUM_ION_TOKEN",
  GOOGLE_MAPS_API_KEY: "YOUR_GOOGLE_MAP_TILES_API_KEY"
};
