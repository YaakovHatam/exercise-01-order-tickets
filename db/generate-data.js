// This is how i generated the JSON file...
const STATES = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'
}
const OPERATORS = [
    'Metro Transit',
    'Ride SMART',
    'Westcat',
    'Citilink'
]
const STATES_LETTERS = Object.keys(STATES);
const driveData = [];
for (let i = 0; i < 1000; i++) {
    const theDate = randomDate(new Date(2021, 0, 1), new Date(2021, 2, 15));
    driveData.push({
        "date": theDate,
        "due": randomIntFromInterval(3, 5) + "h" + randomIntFromInterval(2, 59) + "m",
        "operator": OPERATORS[Math.floor(Math.random() * 3) + 1],
        "busId": "GLI" + randomIntFromInterval(12000, 99999),
        "price": randomIntFromInterval(10, 40) + "$",
        "seats": randomIntFromInterval(15, 40),
        "source": STATES_LETTERS[randomIntFromInterval(0, STATES_LETTERS.length)],
        "dest": STATES_LETTERS[randomIntFromInterval(0, STATES_LETTERS.length)]
    });
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(driveData);
