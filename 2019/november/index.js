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
