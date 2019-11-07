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

