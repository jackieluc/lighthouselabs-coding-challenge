// Challenge #1
const doorToDoor = (volunteers, neighbourhoods) => {

  const numberOfVolunteers = volunteers.length;
  const numberOfNeighbourhoods = neighbourhoods.length;
  
  if (numberOfVolunteers === 0) {
    return 0;
  }
  
  return Math.floor(numberOfNeighbourhoods / numberOfVolunteers);
};

// Challenge #2
const interviewAnswer = (topic) => {
  
  switch(topic) {

    case 'arts funding':
      return 'We\'ll have to get creative!';
    case 'economy':
      return 'Time is money.';
    case 'transportation':
      return 'It\'s going to be a long road, so we better get moving.';
    default:
      return 'QUACK!';
  }
};

// Challenge #3
const castVote = (name, votes) => {
  
  // Remember, the possible candidates are: Tim, Sally, and Beth (in that order)
  const names = ['Tim', 'Sally', 'Beth'];
  const nameIndex = names.indexOf(name);
  
  votes[nameIndex]++;
  
  return votes;
};

// Challenge #4
const registerToVote = (name, unregisteredVoters) => {
  
  return unregisteredVoters.filter(voter => voter !== name);
};

// Challenge #5
const isAppropriate = (station) => {
  
  const validVenueTypes = ['school', 'community centre'];
  const minCapacity = 20;
  
  const [_, capacity, venueType] = station;
  
  return capacity >= minCapacity && validVenueTypes.includes(venueType);
};

const getNames = station => {

  const [name] = station;
  return name;
};

const chooseStations = (stations) => {

  return stations
    .filter(isAppropriate)
    .map(getNames);
};

// Challenge #6
const voterTurnout = (voter_signatures, voter_ids) => {

  if (voter_signatures.length !== voter_ids.length) {
    return false;
  }
  
  for (let i = 0; i < voter_ids.length; i++) {
    const voter_id = voter_ids[i];
    const voter_signature = voter_signatures[i];
    
    if (voter_id !== voter_signature) {
      return 'FRAUD!';
    }
  }
  
  return 'All clear, we can count the votes!';
};

// Challenge #7
const termTopics = (interviews) => {
  
  const focusTopics = {
    'smart city': 0,
    'arts funding': 0,
    'transportation': 0
  };
  
  interviews.forEach(topic => {
    
    if (focusTopics[topic] !== undefined) {
      focusTopics[topic] += 1;
    }
  });
  
  return Object.values(focusTopics);
};

// Challenge #8
const smartGarbage = (trash, bins) => {
    
  bins[trash] += 1;
  
  return bins;
};

// Challenge #9
const carPassing = (cars, speed) => {
  
  const car = {
    time: Date.now(),
    speed
  };
  
  return [...cars, car];
};

// Challenge #10
const whereCanIPark = (spots, vehicle) => {
  
  const parkingSpotRules = {
    'R': ['regular', 'small', 'motorcycle'],
    'S': ['small', 'motorcycle'],
    'M': ['motorcycle']
  };
  
  let availableSpots = [];
  
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      
      const spot = spots[y][x];
      
      if (parkingSpotRules[spot] && parkingSpotRules[spot].includes(vehicle)) {
        
        availableSpots.push({ x, y });
      }
    }
  }
  
  if (availableSpots.length === 0) {
    return false;
  }
  
  const { x, y } = availableSpots[0];
  
  return [x, y];
};

// Challenge #11
const busTimes = buses => {
  
  const result = {};
  
  Object.entries(buses).forEach(bus => {
    const [busRoute, busInfo] = bus;
    
    result[busRoute] = busInfo.distance / busInfo.speed;
  });
  
  return result;
};

// Challenge #12
const checkAir = function (samples, threshold) {
  
  const airQuality = {
    clean: 0,
    dirty: 0
  };
  
  samples.forEach(sample => airQuality[sample] += 1);
  
  const { clean, dirty } = airQuality;
  
  const airQualityRatio = dirty / (clean + dirty);
  
  return airQualityRatio >= threshold ? 'Polluted' : 'Clean';
}

// Challenge #13
const lightsOn = function(lights) {
  return lights.map(light => light.on = true);
};

const lightsOff = function(lights) {
  return lights.map(light => light.on = false);
};

const toggleLights = function(lights, lightsAreOn) {
  return lights.map(light => light.on = !lightsAreOn);
};

// Challenge #14
const isCrowded = (numberOfPeople) => numberOfPeople >= 30;

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  
  const baseFare = 1;
  const rate = 0.25;
  const peakTax = 0.25;
  
  let fare = baseFare + (distanceTraveled * rate);
  
  if (isCrowded(numberOfPeople)) {
    fare += peakTax;
  }
  
  return `$${fare.toFixed(2)}`;
};

// Challenge #15
const finalPosition = (moves) => {
  
  const position = [0,0];
  
  moves.forEach(move => {
    switch(move) {
      case 'east':
        position[0] += 1;
        break;
      case 'west':
        position[0] -= 1;
        break;
      case 'north':
        position[1] += 1;
        break;
      case 'south':
        position[1] -= 1;
        break;
    }
  });

  return position;
};

// Challenge #16
const festivalColours = color1 => {
  
  const color2 = 360 - Math.abs((color1 + 150) - 360);
  const color3 = 360 - Math.abs((color1 + 210) - 360);
  
  return [color2, color3].sort();
};