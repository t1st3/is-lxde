# is-lxde [![Build Status Travis](https://travis-ci.org/t1st3/is-lxde.svg?branch=master)](https://travis-ci.org/t1st3/is-lxde)

> Check if the current session runs [LXDE desktop](http://lxde.org/).


## Install

```
$ npm install --save is-lxde
```


## Usage

```js
const isLxde = require('is-lxde');

isLxde.then(data => {
  console.log(data);
  //=> true or false
});
```


## API

### isLxde()

Returns a `Promise` that resolves either to `true` or `false`.


## Related

* [desktop-env](https://github.com/t1st3/desktop-env) | A desktop environment detector based on this module and the following ones
* [is-cinnamon](https://github.com/t1st3/is-cinnamon) | Check if the current session runs [Cinnamon desktop](https://github.com/linuxmint/Cinnamon).
* [is-gnome](https://github.com/t1st3/is-gnome) | Check if the current session runs [Gnome desktop](https://www.gnome.org/).
* [is-kde](https://github.com/t1st3/is-kde) | Check if the current session runs [KDE desktop](https://www.kde.org/).
* [is-mate](https://github.com/t1st3/is-mate) | Check if the current session runs [Mate desktop](http://mate-desktop.com/).
* [is-sugar](https://github.com/t1st3/is-sugar) | Check if the current session runs [Sugar desktop](https://www.sugarlabs.org/).
* [is-unity](https://github.com/t1st3/is-unity) | Check if the current session runs [Unity desktop](https://unity.ubuntu.com/).
* [is-xfce](https://github.com/t1st3/is-xfce) | Check if the current session runs [XFCE desktop](https://www.xfce.org/).


## License

MIT © [t1st3](https://t1st3.com)
