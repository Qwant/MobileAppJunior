// |reftest| skip-if(!this.hasOwnProperty('SharedArrayBuffer')||!this.hasOwnProperty('Atomics')) -- SharedArrayBuffer,Atomics is not enabled unconditionally
// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Test range checking of Atomics.wake on arrays that allow atomic operations
includes: [testAtomics.js]
features: [SharedArrayBuffer, ArrayBuffer, DataView, Atomics, arrow-function, let, for-of]
---*/

var sab = new SharedArrayBuffer(4);
var view = new Int32Array(sab);

testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    let Idx = IdxGen(view);
    assert.throws(RangeError, () => Atomics.wake(view, Idx, 0)); // Even with waking zero
});

reportCompare(0, 0);
