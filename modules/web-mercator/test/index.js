// Mercator Utils
require('./spec/web-mercator-utils.spec');
// Perspective Viewport test cases
require('./spec/web-mercator-viewport.spec');
// Specific mercator test cases
require('./spec/mercator-project-unproject.spec');
// Get bounds
require('./spec/get-bounds.spec');
// Fit bounds
require('./spec/fit-bounds.spec');
// Normalization
require('./spec/normalize-viewport-props.spec');
// Fly to
require('./spec/fly-to-viewport.spec');
// Compare FP32 and Offset
require('./fp32-limits');

// Test vs. mapbox Transform
require('./spec/versus-mapbox/versus-mapbox.spec');
