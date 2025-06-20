<p align="center">
    <strong>🚨🚨🚨 This repo is just a dummy 🚨🚨🚨</strong><br>
    Submit issues in the 
    <a href="https://github.com/tolgee/tolgee-js" target="_blank"><strong>monorepo</strong></a> 
    or 
    <a href="https://github.com/tolgee/tolgee-js/tree/main/testapps/ngx" target="_blank"><strong>check the source code here</strong></a>.
</p>

# Example application of using Angular with Tolgee

[<img src="https://raw.githubusercontent.com/tolgee/documentation/main/tolgee_logo_text.svg" alt="Tolgee" width="100" />](https://tolgee.io)

To learn more about Tolgee, visit [https://tolgee.io](https://tolgee.io).

## The Docs
[Read more about using Tolgee with Angular in the docs.](https://tolgee.io/js-sdk/integrations/angular/installation)

## To run the app in dev mode

To install dependencies, run:

    npm install

To run the app in dev mode with in-context translating mode:

1. Create a project on [Tolgee Cloud](https://app.tolgee.io) or use
   self-hosted [Tolgee Server](https://github.com/tolgee/server).
2. Generate an API-KEY
3. Copy file `projects/sampleapp/src/environments/environment.ts` to `projects/sampleapp/src/environments/environment.stage.ts`
4. Set `apiKey` to API key obtained in previous step
5. Run `npm run start`
6. Have fun

## To run the app in production mode

To build the app for production run:

    npm run build

Static website will be generated. To start local server with build app, run:

    npm run serve

---

This repository is automatically re-published from [Tolgee JS monorepo](https://github.com/tolgee/tolgee-js).
