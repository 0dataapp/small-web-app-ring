<a href="https://ring.0data.app"><img alt="Project logo" src="https://static.rosano.ca/swar/identity.svg" width="64" /></a>

# Doorless App Ring

_A webring for web apps_

This <a href="https://ring.0data.app">appring</a> supports [doorless](https://rosano.hmm.garden/01evv3hq1ak4b6ng1jzppx5n2j) projects that are functional without signing into an account. It is not necessary for it to be [0data](https://0data.app) or a [Progressive web app](https://en.wikipedia.org/wiki/Progressive_web_application), but these would be ideal. Doorless is another way of saying 'someone can show up and start using it immediately'.

Inspired by [XXIIVV/webring](https://github.com/XXIIVV/webring) and [indiewebring](https://indieweb.org/indiewebring).

## Add your project(s) to the ring

1. Link to the appring from your project's homepage or inside the app itself (see below for example code that you can copy and modify).
2. Add your project URL to [index.html](https://github.com/0dataapp/lap/edit/master/index.html)
3. Submit a Pull Request with the location of the appring link in your project.

### Link via text

```html
<a href="https://ring.0data.app/#random" target="_blank">Part of the Appring</a>
```

### Link via image

```html
<a href="https://ring.0data.app/#random" target="_blank" title="Part of the Appring"><img src="https://ring.0data.app/identity.svg" width="24" /></a>
```

### Link via image and text

```html
<a href="https://ring.0data.app/#random" target="_blank"><img src="https://ring.0data.app/identity.svg" width="24" align="left" hspace="4" role="presentation" /> Part of the Appring</a>
```

## Questions

Feel free to reach out on [Mastodon](https://merveilles.town/@rosano) or [Twitter](https://twitter.com/rosano).
