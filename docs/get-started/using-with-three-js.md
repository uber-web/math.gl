# Using with THREE.js

> This article is a work in progress. math.gl does currently not have THREE.js compatbility as a goal, these are only ideas.

math.gl has taken both some code and inspiration from the THREE.js math library, and it is interesting to consider if these libraries could be compatible.

* Can a THREE.Math class be created/initialized from a math.gl class? Probably yes, as we expose x, y, z accessors
* Can a math.gl class be created/initialized from a THREE.Math class? Probably not yet, as we don't look for x, y, z.

