import { Parcel } from '@parcel/core';

const entries = ["example.tsx"];
console.log("building entries:\n" + entries);

const bundler = new Parcel({
        entries: entries,
        defaultConfig: '@parcel/config-default'
      });
const result = await bundler.run();
