---
title: Options
---

The player controls can be customized with the following parameters. Each option is presented with its type, default value and a short description.

```javascript
new Vlitejs('#player', {
  options: {}
});
```

### `controls`

Type:

```ts
type controls = boolean;
```

Default: `true`

Display the control bar of the video.

### `autoplay`

Type:

```ts
type autoplay = boolean;
```

Default: `false`

Enable the autoplay of the media. Note: enabling `autoplay` will automatically activate `muted` when required by browser autoplay policies.

### `playPause`

Type:

```ts
type playPause = boolean;
```

Default: `true`

Display the play/pause button on the control bar.

### `progressBar`

Type:

```ts
type progressBar = boolean;
```

Default: `true`

Display the progress bar on the control bar.

### `time`

Type:

```ts
type time = boolean;
```

Default: `true`

Display the time information on the control bar.

### `volume`

Type:

```ts
type volume = boolean;
```

Default: `true`

Display the volume button on the control bar.

### `fullscreen`

Type:

```ts
type fullscreen = boolean;
```

Default: `true`

Display the fullscreen button on the control bar. Note: Fullscreen API not yet supported on iPhone.

### `poster`

Type:

```ts
type poster = string | null;
```

Default: `null`

Customize the video poster URL.

### `bigPlay`

Type:

```ts
type bigPlay = boolean;
```

Default: `true`

Display the big play button on the poster video.

### `playsinline`

Type:

```ts
type playsinline = boolean;
```

Default: `true`

Add the `playsinline` attribute to the video.

### `loop`

Type:

```ts
type loop = boolean;
```

Default: `false`

Whether to loop the current media.

### `muted`

Type:

```ts
type muted = boolean;
```

Default: `false`

Whether to mute the current media.

### `autoHide`

Type:

```ts
type autoHide = boolean;
```

Default: `false`

Auto hide the control bar on inactivity.

### `autoHideDelay`

Type:

```ts
type autoHideDelay = number; // milliseconds
```

Default: `3000`

Auto hide delay in milliseconds.

### `providerParams`

Type:

```ts
type providerParams = Record<string, unknown>;
```

Default: `{}`

Overrides the player parameters of the provider.

<Aside type="note">
> - _Video only._
> - _Vimeo provider requires a Plus or Pro account to use some features (see [Vimeo plans](https://vimeo.zendesk.com/hc/en-us/articles/228068968-Compare-Vimeo-plans))._
> - _See [Youtube embed options](https://developers.google.com/youtube/player_parameters#Parameters) and [Vimeo embed options](https://github.com/vimeo/player.js/#embed-options)._
> - _Fullscreen API not yet supported on iPhone._
>
> The `autoplay` parameter automatically activates the `muted` option because the API can only be initiated by a user gesture (see [Autoplay policy changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)).
</Aside>

Example of customization for the `autoHide` and the `poster` options.

```javascript
new Vlitejs('#player', {
  options: {
    autoHide: true,
    poster: '/path/to/poster.jpg'
  }
});
```
