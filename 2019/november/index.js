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