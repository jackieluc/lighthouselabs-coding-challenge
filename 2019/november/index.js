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