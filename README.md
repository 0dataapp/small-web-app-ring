<a href="https://ring.0data.app"><img src="https://rosano.s3.amazonaws.com/public/swar/identity.svg" width="64"></a>

# Small Web App Ring

_A webring for web apps_

This app ring is to support personal projects by independant developers by sharing traffic between them. It is not necessary for the app to be [0data](https://0data.app) or a [Progressive web app](https://en.wikipedia.org/wiki/Progressive_web_application), but these would be ideal. The app must be functional without signing into an account.

Inspired by [XXIIVV/webring](https://github.com/XXIIVV/webring) and [indiewebring](https://indieweb.org/indiewebring).

## Join the ring

1. Add a link to your app homepage or inside the app itself (see below for examples that you can copy and modify).
2. Add your app URL to [index.html](https://github.com/0dataapp/lap/edit/master/index.html)
3. Submit a Pull Request with the location of the appring link in your project.

### Link via text

```html
<a href="https://ring.0data.app/#random" target="_blank">Part of the Small Web App Ring</a>
```

You can use 'appring' for shorter text.

### Link via image

```html
<a href="https://ring.0data.app/#random" target="_blank" title="Part of the Small Web App Ring"><img src="https://ring.0data.app/identity.svg" width="24" /></a>
```

### Link via image and text

```html
<a href="https://ring.0data.app/#random" target="_blank"><img src="https://ring.0data.app/identity.svg" width="24" align="left" hspace="4" role="presentation" /> Part of the Small Web App Ring</a>
```

## License

The code is released under a [Hippocratic License](https://firstdonoharm.dev), modified to exclude its use for surveillance capitalism and also to require large for-profit entities to purchase a paid license.

## Questions

Feel free to reach out on [Mastodon](https://merveilles.town/@rosano) or [Twitter](https://twitter.com/rosano).
