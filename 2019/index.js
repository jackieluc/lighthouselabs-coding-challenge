/**
 * GLOBALS
 */

const navigation = {
  x: -2,
  y: "Banana",
  z: "Beep",
  speed: "raaaaid"
};

const ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

const radio = {
  frequency: "Kenneth",
  message: "Bugs are cool.",
  beacon: false
};

/**
 * Challenge functions
 */

// Challenge #1
function powerOn() {
  ship.powerOn = true;
}

// Challenge #2
function countModules() {
  return availableModules.length;
}
