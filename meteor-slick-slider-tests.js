// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-slick-slider.js.
import { name as packageName } from "meteor/krisn:meteor-slick-slider";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-slick-slider - example', function (test) {
  test.equal(packageName, "meteor-slick-slider");
});
