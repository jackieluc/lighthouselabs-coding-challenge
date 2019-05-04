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
/**
 * Module in `availableModules` schema
 * 
 * module = {
 *  name: string,
 *  size: integer,
 *  enabled: boolean
 * }
 */
function countModules() {
  return availableModules.length;
}

// Challenge #3
function countEssential() {
  return availableModules.filter(module => module.essential === true).length;
}

// Challenge #4

// helper
function loadLifeSupport() {
  availableModules.forEach((module, index) => {
    if (module.name === 'life-support') {
      loadModule(index);
    }
  })
}

function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

loadLifeSupport();
