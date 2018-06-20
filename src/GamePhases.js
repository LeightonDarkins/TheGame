module.exports = {
  GOING_TO_WORK: {
    name: 'GOING TO WORK',
    stepCount: 10,
    startEvent: {
      description: `It's a beautiful morning. Time to put on your driver's hat and go to work...`,
      batteryEffect: 0
    },
    events: [
      {
        description: `it's a nice, easy drive`,
        batteryEffect: 10
      },
      {
        description: `your engine starts making an unhealthy sound`,
        batteryEffect: -5
      },
      {
        description: `you burn your tongue with your coffee`,
        batteryEffect: -10
      },
      {
        description: `free donuts at the bakery!`,
        batteryEffect: 15
      },
      {
        description: `traffic on the autobahn, oh no!`,
        batteryEffect: -20
      },
      {
        description: `you catch all the green lights!`,
        batteryEffect: 25
      },
      {
        description: `you get stopped by the police!`,
        batteryEffect: -25
      },
      {
        description: `you get a police escort!`,
        batteryEffect: 30
      }
    ]
  },
  LOADING: {
    name: 'LOADING',
    stepCount: 20,
    startEvent: {
      description: `You arrive at the depot safely, time to start loading...`,
      batteryEffect: 0
    },
    events: [
      {
        description: `you consolidate some SSCCs to use fewer transport goods`,
        batteryEffect: 10
      },
      {
        description: `some fresh fish gets added to your tour at the last minute`,
        batteryEffect: -5
      },
      {
        description: `you scan SSCCs instead of tapping them`,
        batteryEffect: 15
      },
      {
        description: `you lie about the temperature of the frozen goods`,
        batteryEffect: -10
      },
      {
        description: `the delivery papers have already been printed`,
        batteryEffect: 25
      },
      {
        description: `the pickers laugh at you as you load your truck`,
        batteryEffect: -20
      },
      {
        description: `all of your picklists are ready to load as soon as you arrive`,
        batteryEffect: 30
      },
      {
        description: `you accidentally loaded the wrong tour!`,
        batteryEffect: -25
      }
    ]
  },
  DELIVERY: {
    name: 'DELIVERING TO CUSTOMERS',
    stepCount: 40,
    startEvent: {
      description: `Your truck is loaded, your checklist is complete. It's time to deliver!!!`,
      batteryEffect: 0
    },
    events: [
      {
        description: `the customer is happy to see you`,
        batteryEffect: 10
      },
      {
        description: `you break a jar of the customer's pickles`,
        batteryEffect: -5
      },
      {
        description: `a pfand sack explodes, bottles are all over the place!`,
        batteryEffect: -10
      },
      {
        description: `the customer lets you try some of their wares`,
        batteryEffect: 15
      },
      {
        description: `the customer compliments you on your awesome app!`,
        batteryEffect: 25
      },
      {
        description: `the customer wants to return some rancid meat`,
        batteryEffect: -20
      },
      {
        description: `the customer has no empties to return`,
        batteryEffect: 30
      },
      {
        description: `the customer hates technology, you must use paper documents`,
        batteryEffect: -25
      }
    ]
  },
  WRAP_UP: {
    name: 'WRAPING UP YOUR TOUR',
    stepCount: 20,
    startEvent: {
      description: `Congratulations! All of your deliveries are done. Wrap up your tour and head home...`,
      batteryEffect: 0
    },
    events: [
      {
        description: `5`,
        batteryEffect: 10
      },
      {
        description: `you lost count of your empties `,
        batteryEffect: -5
      },
      {
        description: `the empties employee is nowhere to be found`,
        batteryEffect: -10
      },
      {
        description: `you have exactly the right number of transport goods`,
        batteryEffect: 15
      },
      {
        description: `your device just won't connect to the WLAN`,
        batteryEffect: -20
      },
      {
        description: `your transport manager gives you a hi-5`,
        batteryEffect: 25
      },
      {
        description: `-25`,
        batteryEffect: -25
      },
      {
        description: `25`,
        batteryEffect: 30
      }
    ]
  },
  GOING_HOME: {
    name: 'GOING HOME',
    stepCount: 5,
    startEvent: {
      description: `You're done for the day! All that's left is the drive home...`,
      batteryEffect: 0
    },
    events: [
      {
        description: `it's a nice, easy drive`,
        batteryEffect: 10
      },
      {
        description: `traffic on the autobahn, oh no!`,
        batteryEffect: -5
      },
      {
        description: `football hooligans are blocking the road!`,
        batteryEffect: -10
      },
      {
        description: `you get a free fuel voucher!`,
        batteryEffect: 15
      },
      {
        description: `a row of ducks are crossing the street`,
        batteryEffect: -20
      },
      {
        description: `you catch every green light!`,
        batteryEffect: 25
      },
      {
        description: `you get stopped by the police!`,
        batteryEffect: -25
      },
      {
        description: `you get a police escort!`,
        batteryEffect: 30
      }
    ]
  }
}
