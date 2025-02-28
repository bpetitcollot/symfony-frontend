# Symfony Frontend Demo

This is a minimal setup to build Symfony based applications using some 
Javascript components built with modern tools.

## What I wanted to do ?

- Build an app with Symfony / Twig
- Use some Javascript components (mainly React including JSX usage)
- Use the new AssetMapper component (what is [not so straightforward with 
  React](https://symfony.com/doc/current/frontend/asset_mapper.html#can-i-use-it-with-jsx-or-vue))
- Benefit of HMR during Javascript development

## How does it work ?

### TL;DR

#### Creating components

- Write JS components in front/components and use them in `App.tsx`
- run `npm dev`(inside front directory)
- access http://localhost:5173 to see components your components live

#### Use them in Symfony app

- when you're done, export your components in front/lib/*.js files and 
  reference this file in vite.config.ts
- run `npm build` (inside front directory)
- run `symfony serve --no-tls` (on the root directory)
- access http://localhost:8000/demo

### Javascript development lives in `front` directory.

- It uses [Vite](https://vite.dev/) with plugin-react for build and 
leveraging HMR.
- Vite is configured for [build in library mode](https://vite.dev/guide/build.html#library-mode) so that it produce non-versioned 
component files (this will be handled by Symfony 
AssetMapper).
- It also allows to externalize dependencies thanks to Rollup.
- Developers may use `vite` (through `npm dev`) command to visualize their 
  components with HMR. `index.html` and `App` component may be safely 
  modified as they are not part of the build.

### Symfony consumes Javascript components through AssetMapper

- AssetMapper configuration has an entrypoint on the Vite build output 
  directory.
- Importmap embed the dependencies previously externalized during the Vite 
  build.
- The route `/demo` shows Javascript components mounted on some html divs. 
  (you may use `symfony serve --no-tls` command and access localhost:8000/demo)

## Next steps

This minimalistic setup seems to fit my needs. Some little things still 
remain to be done : 

- Try it with more complex components
- Test with other libraries (Vue, Preact)