/**
 * GLOBALS
 */

const navigation = {
  x: -2,
  y: 'Banana',
  z: 'Beep',
  speed: 'raaaaid'
};

const ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

const radio = {
  frequency: 'Kenneth',
  message: 'Bugs are cool.',
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
function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

// Challenge #5
function findModuleIndex(moduleName) {
  return availableModules.findIndex(module => module.name === moduleName);
}

// Challenge #6
function loadModuleByName(moduleName) {
  const index = findModuleIndex(moduleName);
  loadModule(index);
}

loadModuleByName('life-support'); // Challenge #4
loadModuleByName('propulsion'); // Challenge #5
loadModuleByName('navigation'); // Challenge #6

// Challenge #7
function resetLARRY() {
  for (let i = 0; i < 10; i++) {
    LARRY.quack();
  }
}

resetLARRY();

// Challenge #8
loadModuleByName('communication');

// Challenge #9
function setMessage() {
  radio.message = JSON.stringify(navigation);
}

setMessage();

// Challenge #10
function activateBeacon() {
  radio.beacon = true;
}

// Challenge #11
function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high) / 2;
}

// Challenge #12
function initialize() {
  navigation = {
    x: 0,
    y: 0,
    z: 0
  };
}

// Challenge #13
function calibrateX() {
  for (let i = 0; i < 12; i++) {
    const signal = checkSignal();
    if (signal !== undefined) {
      navigation.x = signal;
      break;
    }
  }
}

calibrateX();

// Challenge #14
function calibrateY() {
  for (let i = 0; i < 60; i++) {
  const signal = checkSignal();
  
  if (signal !== undefined) {
    navigation.y = signal;
    break;
  }
}
}

function calibrateZ() {
for (let i = 0; i < 60; i++) {
  const signal = checkSignal();
  
  if (signal !== undefined) {
    navigation.z = signal;
    break;
  }
}
}

calibrateY();
calibrateZ();