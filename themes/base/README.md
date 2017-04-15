# Standard Interface Build
> NOTE: This file structure can be pulled from the base theme directory for other projects, but the basic file structure should remain the same.

___

### Build

The build system for all projects is webpack. Both production and source files compile to the same folder within the themes directory `/build/`
What this means is that you don't need to define different paths in your template to delegate your source and production build to, because they both build to the same file.

###### Watch (development)
To build your development files and run a **watch** task over the theme source files, run this from the root theme directory:

```sh
$ npm start
```
> NOTE: Remember to cancel your watch task when committing or pulling changes.

###### Build (production)
To build your production files, run this from the root theme directory:

```sh
$ npm run prod
```

### Modernizr
A default Modernizr config is `modernizr-config.json`. Add any additional tests to the *feature-detects* array in this file (or browse to the url in the `modernizr.js` file and add your tests from the Modernizr Download Builder). Then run the following command from the theme directory:

```sh
$ modernizr -c modernizr-config.json -d js/head/
```

### Dependencies

Yarn is now the package manager of choice, it acts in a very similar way to npm, however also produces a `yarn.lock` file from the `package.json` which locks the package versions down to a specific release. This is intended to solve issues of npm installing slightly different package versions, and based on the sheer amount of dependencies one package can have, this can be a complete nightmare. Yarn banishes this nightmare.

Please check out the documentation for further information:
https://yarnpkg.com/en/docs/usage

Some npm to yarn comparisons:

```sh
npm run prod 												-> 		yarn run prod
npm install													->		yarn install
npm install --save [package]				->		yarn add [package]
npm install --save-dev [package]		->		yarn add [package] --dev
npm uninstall --save [package]			->		yarn remove [package]
npm uninstall --save-dev [package]	->		yarn remove [package]
```

___

### CSS

> NOTE: While making global changes within core is recommended, each new css module requires its own file within `/css/modules/`.
Individual JS components ideally should have a css file imported to the component .js file. Webpack will extract the css and include it in the outputted bundle styles automatically.

```sh
js/
	components/
		ActionButton/
			ActionButton.js
			actionButton.less
```

> WARNING: It is **essential** to run a build task *before* deploying to a live environment, as `live` and `dev` environments both read the same file.

___

### Styleguide (KSS: Knyle Style Sheets )

To generate your styleguide, run this from the root theme directory:

```sh
npm run styleguide
```

Please check out the documentation for further information:
http://warpspire.com/kss/
