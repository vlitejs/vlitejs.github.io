---
title: Events
---

`vlitejs` exposes the following native `Event` on the `.v-vlite` element. Events are standardized for all providers. Each plugin has its own events which are detailed in their dedicated documentation.

| Event Type              | Description                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------- |
| `play`                  | Sent when the playback state is no longer paused, after the play method or the autoplay |
| `pause`                 | Sent when the playback state is changed to paused                                       |
| `progress`              | Sent periodically to inform interested parties of progress downloading the media.       |
| `timeupdate`            | Sent when the `currentTime` of the media has changed                                    |
| `volumechange`          | Sent when audio volume changes                                                          |
| `sourcechange`          | Sent when source changes                                                                |
| `enterfullscreen`&sup1; | Sent when the video switches to fullscreen mode                                         |
| `exitfullscreen`&sup1;  | Sent when the video exits fullscreen mode                                               |
| `ended`                 | Sent when playback completes                                                            |

<Aside type="note">&sup1; Video only.</Aside>

Example of a listener when the media triggers a `play` event.

```javascript
new Vlitejs('#player', {
  onReady: (player) => {
    player.on('play', () => {
      // The video starts playing
    });
  }
});
```
