---
title: Methods
---

The player instance exposes the following methods, accessible when the player is ready.

| Method                    |     Parameters     |  Promise  | Description                       |
| ------------------------- | :----------------: | :-------: | --------------------------------- |
| `play()`                  |         -          |     -     | Start the playback                |
| `pause()`                 |         -          |     -     | Pause the playback                |
| `setVolume(volume)`       |      `Number`      |     -     | Set the volume between 0 and 1    |
| `getVolume()`             |         -          | `Promise` | Get the volume                    |
| `getCurrentTime()`        |         -          | `Promise` | Get the current time              |
| `getDuration()`           |         -          | `Promise` | Get the duration                  |
| `mute()`                  |         -          |     -     | Mute the volume                   |
| `unMute()`                |         -          |     -     | Unmute the volume                 |
| `setSource(source)`&sup1; |      `String`      |     -     | Set the new media source          |
| `seekTo(time)`            |      `Number`      |     -     | Seek to a current time in seconds |
| `requestFullscreen()`     |         -          |     -     | Request the fullscreen            |
| `exitFullscreen()`        |         -          |     -     | Exit the fullscreen               |
| `getInstance()`           |         -          |     -     | Get the player instance           |
| `loading()`               |     `Boolean`      |     -     | Set the loading status            |
| `on(event, function)`     | `String, Function` |     -     | Add an event listener             |
| `off(event, function)`    | `String, Function` |     -     | Remove an event listener          |
| `destroy()`               |         -          |     -     | Destroy the player                |

<Aside type="note">
	&sup1; `source` parameter of `setSource()` accept video ID for providers (e.g. `data-youtube-id`
	attribute value) or source url for HTML5 providers (e.g. `src` attribute value) .
</Aside>

Example of media `duration` recovery.

```javascript
new Vlitejs('#player', {
  onReady: (player) => {
    player.getDuration().then((duration) => {
      // The duration is available in the "duration" parameter
    });
  }
});
```
