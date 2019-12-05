# sinuous-three-boxes

As a reply to the Twitter threads:

- https://twitter.com/0xca0a/status/1199997552466288641
- https://twitter.com/Rich_Harris/status/1200805237948325888

Made to see how Sinuous would perform, looks like it's almost on par with Svelte in updating but creation of the meshes takes a lot longer. Building this demo it also became clear this had not much to do with the DOM, maybe the performance of the framework's reactive state system. Anyway it was interesting to see how an abstraction could be build around Three or WebGL for Sinuous.

## Running locally

Clone the repo, install dependencies, `npm run dev`, `npm run start`, open [localhost:5000](http://localhost:5000):

```
git clone https://github.com/luwes/sinuous-three-boxes
cd sinuous-three-boxes
npm i
npm run dev
npm run start
```

