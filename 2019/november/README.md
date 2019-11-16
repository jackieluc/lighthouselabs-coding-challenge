# Lighthouse Labs 21-Day Coding Challenge November 2019

## Challenge #1 - Door to Door

Our challenge begins in Codeville, a small but thriving town in Serverside, Canada, where you are the current mayor nearing the end of your first term. Election season is nearing, and this town needs you, so you've decided to run for a second term. However, you need some help to make sure the election and your campaign run smoothly. Enter JavaScript, a coding language sure to help you optimize the many elements of the upcoming election and (hopefully) secure your return as Mayor.

As your election campaign ramps up, you plan to go door to door to talk to the citizens of Codeville. There are quite a few neighbourhoods in Codeville, but lucky for you, we have a dedicated crew of volunteers to help out. Being the fair Mayor that you are, you want to make sure the work is distributed evenly between the team. Let's figure out how many neighbourhoods each volunteer should visit.

### Instructions

Given an array of volunteer names and an array of neighbourhood names, complete the `doorToDoor` function so that it returns the number of neighbourhoods each volunteer should visit if the work of going door to door is split evenly amongst them.

## Challenge #2 - Something to Talk About

Thanks to your tireless volunteers, the word is out that you're running for a second term, and the local media has come calling!

The Lighthouse Gazette wants to interview you about your campaign, but you're a nervous interviewer! To help prepare for your interview you want to use JavaScript to practice campaign stance on important election topics. The list of possible question categories includes:

- arts funding
- economy
- transportation

### Instructions

Given a question topic, complete a function interviewAnswer(topic) that returns your stance on that particular election issue. The answer should be returned as a string.

When asked about arts funding, the function should return `"We'll have to get creative!"`  
When asked about the economy, the function should return `"Time is money."`  
When asked about transportation, the function should return `"It's going to be a long road, so we better get moving."`  
If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, `"QUACK!"`)

## Challenge #3 - Securing the Vote

It looks like you've got a hold of your campaign for now. So you've been asked to turn your attention to making sure the election infrastructure is ready to go! Codeville County is using a new e-voting platform to make elections simpler and more secure. We need to test out the software to make sure it's working correctly before Election Day.

### Instructions

When a resident casts their vote, the system will be passed the name of the candidate they voted for and the current standings. It will then update the standings, adding the new vote to the count.

To test the system, we'll need to complete the function `castVote(name, votes)` that takes in the `name` of a candidate and an array of tallied `votes`. The function should return an array with the updated standings.

We will be testing the system with three possible candidates: Tim, Sally and Beth. Each item in the votes array represents the number of votes for a particular candidate:

The first item in the array `votes[0]` are the votes for Tim  
The second item in the arry `votes[1]` are the votes for Sally  
The third item in the array `votes[2]` are the votes for Beth  
For example in this array `[0, 2, 1]` there are 0 votes for Tim, 2 votes for Sally and 1 vote for Beth.

## Challenge #4 - This is How You Remind Me (To Register To Vote)

Now that you've squashed all the bugs in the city's new voting software, it's time to jump back on the campaign trail. The election is coming up soon! You need to send out reminders to all Codeville citizens to encourage them to vote, but you don't want to spam people who have already registered. Use JavaScript to remove all registered voters from your contact list.

### Instructions

Complete the function `registerToVote(name, unregisteredVoters)` that takes in the name of a newly registered voter and an array of names of those who have not yet registered to vote. Your function must return an array, with the newly registered voter's name removed.

## Challenge #5 - Voting Station Calculation

The election is looming, and the dutiful City of Codeville staff has finalized most of the details, except for one thing: where will citizens vote? There are hundreds of buildings in town, but there are very specific requirements for what constitutes an acceptable voting station. With very little time to decide, the city needs our help to sort through the building data.

### Instructions

Complete the function `chooseStations(stations)` that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a **capacity of at least 20**, and be a **school** or **community centre**.

## Challenge #6 - Turn Out For What

Phew, with our help the city staff were able to select the voting stations on time and the election went off without a hitch! Now that the votes have been cast, the Election staff needs to verify the votes by matching each voter's signature to their voter ID.

### Instructions

Complete the function `voterTurnout()`, that will take in two arrays. The first array is a list of voter ids, and the second array is a list of voter signatures, which correspond to the voter ids. Our task here is to first check that each array have the same number of items and then confirm that each of the voter ids matches the corresponding voter signature.

If the arrays do not contain the same number of items, then we know something is amiss and our function should return `false`. If they contain the same number of elements, then we should proceed to check if the two arrays are identical, meaning they contain the **same names in the same order**. If they are, our function should return `"All clear, we can count the votes!"`, if they are not it should return `"FRAUD!"`.

## Challenge #7 - You Choose, (You Don't) Lose

The people of Codeville have spoken, and you have been elected mayor once again! Now it's time to get back to work. You need to decide which issues to focus on first for your new term in office. Using the dataset from voter surveys, determine the top three issues voters were most concerned about when choosing the new Codeville leadership.

### Instructions

We need to go through the survey responses to see what your constituents would like you to focus on over the course of your term in office. The array that you are given contains many phrases and words pulled from a number of interviews. We only want to focus on the following three key phrases: "smart city", "arts funding", and "transportation".

Our `termTopics` function needs to count how many times each of those topics was mentioned in the surveys, and then return an array with the number of mentions in the following order: `smart city`, `arts funding`, and then `transportation`.

## Challenge #8 - Trash to Treasure

The results are in, and the people of Codeville want you to focus on Smart City upgrades. You've decided to begin by replacing all of the city's trash cans with smart cans: when citizens toss their rubbish into the smart can, it automatically sorts items into waste, recycling, and compost bins.

### Instructions

We need to complete a function called `smartGarbage(trash, bins)`, which will be responsible for increasing the garbage count for waste, recycling, or compost depending on what trash is submitted. Our function will receive two arguments. The first argument, `trash`, is a string that will tell our function what type of item is being submitted. The second argument, `bins`, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the `bins` object, and the return the newly updated object.

## Challenge #9 - Driving Mayor Daisy

As Mayor, you want one of your legacies to be bettering street design enough to improve traffic flow and reduce congestion. You've decided to start by installing special sensors on some streets to monitor how often cars pass by, and track their speeds.

### Instructions

Complete the function, `carPassing(cars, speed)`, that takes in an array of car objects, and the speed of a car as it passes the sensor. This function should create a new object with with a property called speed, and another property called time and add it to the cars array. We can retrieve the current time, for setting the `time` property, by using the `Date.now()` function, which is built into JavaScript!

Our function should return an array that includes all of the elements in `cars` as well as our new element.

## Challenge #10 - SmartParking

The parking lot in the Codeville Devtropolis Shopping Mall needs an upgrade, and you've decided this is the perfect opportunity to install a smart parking system.

The system will use special parking sensors to keep track of all parking spots and monitor which ones are available. Every time a vehicle enters the parking lot, the system directs them to an available spot for their particular vehicle type, or notifies them that no spots are available.

### Instructions

We need to write a function called `whereCanIPark()` that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: `regular` cars, `small` cars, and `motorcycles`. Regular cars can only park in `R` spots. Small cars can park in `R` or `S` spots. Motorcycles can park in `R`, `S`, or `M` spots. In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is `AVAILABLE`, while lower-case letters mean that the spot is `UNAVAILABLE`.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

**Note:** There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.

## Challenge #11 - You Can't Hurry Transit

You can't hurry love, or local transit in Codeville. While you've been hard at work on a solution to the larger transit woes, you've decided to implement a new system to at least be a little more transparent about wait times. The city will be installing a smart screen, at the busiest bus stop in town, that will show the estimated arrival times for each of the buses that stop there.

### Instructions

For this challenge, we'll implement a function called `busTimes()`. This function will calculate the arrival time for a collection of busses based on their current speed and distance from the stop. It will receive an object called `buses`, which contains a series of objects for each bus, with the distance of the bus and the speed that the bus is traveling at. Our function should return a **new** object that shows how long until each bus arrives at the stop.

## Challenge #12 - In the Air Tonight

The citizens of Codeville seem pleased with all the upgrades you're making to the local infrastructure. Next on your list to tackle is the air quality. You've decided that you want to install air pollution sensors around the city to monitor air quality and identify problem areas. We need to write the code for the sensors to trigger a special message when the air is too polluted.

### Instructions

For this challenge we will implement a function called `checkAir()`, which will check a collection of air samples. The function will take in two arguments. The first argument is an array of strings, where each string represents a small air sample that is either `clean` or `dirty`. The second argument is a number representing the highest acceptable amount of dirty samples. For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. Our function must return `Polluted` if there are too many dirty air samples, or `Clean` if the proportion of dirty samples is below the threshold.

## Challenge #13 - All of the Lights

To make late-night driving and walking safer(and to save the city energy), you've decided to install smart street lights. These lights turn on and off automatically when they sense someone near by.

You'll need to use JavaScript to create some of the functionality to control the lights.

### Instructions

We will be implementing this using three functions.

The first two functions will receive an array of objects that represent street lights which may be `on` or `off`.

Our first function, `lightsOn`, must set all of the lights to `on` and then return the array of lights.
The second function, `lightsOff`, must set all the lights to "off" and then return the array of lights.
The third function, `toggleLights`, will receive an array of many street lights, as well as a boolean value lightsAreOn which tells you whether or not all the lights are currently on. If `lightsAreOn` is true, your function should turn all of the lights off. If `lightsAreOn` is false, your function should turn all of the lights on.

## Challenge #14 - Ticket to Ride

The local transit system has been too expensive for too long! To encourage more people to use the bus, you are restructuring ticket pricing. From now on, passengers will be charged a dynamic price, which will depend on the number of people on the bus (peak times have higher fare!) and the distance that the passenger travels.

### Instructions

We'll be implementing a function called `dynamicPricing()`, which will return the cost of a particular trip given the number of people on the bus, and the distance traveled by the passenger. This function receives two numbers: `numberOfPeople` and `distanceTraveled`.

The base ticket price is $1. Passengers will be charged $0.25 per kilometer. If there are 30 or more people on the bus, there should be $0.25 added to the total.

The value that your functions returns must be a string, formatted as such: $4.25. Your values must be shown to two decimal points of precision.

## Challenge #15 - X Marks the Perfect Shot 📸

With the city getting smarter, it's time to turn your focus to Codeville's biggest event of the year, the Harvest Festival! Each year, the Harvest Festival kicks off with a parade - and you want to make sure this is a show the townspeople will remember forever.

You've hired Daria Ducksworth, the town's best photographer, to capture the magic of the Harvest Festival Parade. She needs to track the coordinates of the floats to help her capture their best angles.

### Instructions

For this challenge you'll have to implement a function called `finalPosition()`, which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following.

Your function will receive an array of moves, which are strings that say either `north`, `south`, `west`, or `east`, these represent the parade moving in a particular direction by a single space on the grid. By looking at the path that the parade moves in, your function should calculate and then return an array representing the position of the parade after completing all of the moves. The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at `[0,0]`.
