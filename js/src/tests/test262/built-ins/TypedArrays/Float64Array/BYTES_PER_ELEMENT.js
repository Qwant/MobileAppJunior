// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.5.1
esid: sec-typedarray.bytes_per_element
description: >
  The initial value of Float64Array.BYTES_PER_ELEMENT is 8.
info: |
  The value of TypedArray.BYTES_PER_ELEMENT is the Number value of the
  Element Size value specified in Table 49 for TypedArray.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Float64Array.BYTES_PER_ELEMENT, 8);

verifyNotEnumerable(Float64Array, "BYTES_PER_ELEMENT");
verifyNotWritable(Float64Array, "BYTES_PER_ELEMENT");
verifyNotConfigurable(Float64Array, "BYTES_PER_ELEMENT");

reportCompare(0, 0);
