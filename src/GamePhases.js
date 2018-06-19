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
        description: `you burn your tongue with your coffee`,
        batteryEffect: -10
      },
      {
        description: `it's a nice, easy drive...`,
        batteryEffect: 5
      },
      {
        description: `free donuts at the bakery!`,
        batteryEffect: 10
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
      { description: `you consolidate some SSCCs`, batteryEffect: 5 },
      {
        description: `you scan instead of tap SSCCs like a good driver`,
        batteryEffect: 10
      },
      {
        description: `you lie about the temperature of the frozen goods`,
        batteryEffect: -10
      },
      {
        description: `some fresh fish gets added to your tour at the last minute`,
        batteryEffect: -5
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
        description: `the customer hates technology, you must use paper documents`,
        batteryEffect: -15
      },
      {
        description: `the customer lets you try some of their wares`,
        batteryEffect: 15
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
        description: `the empties employee is nowhere to be found`,
        batteryEffect: -10
      },
      {
        description: `you have exactly the right number of transport goods`,
        batteryEffect: 10
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
      { description: `it's a nice, easy drive...`, batteryEffect: 10 },
      { description: `traffic on the autobahn, oh no!`, batteryEffect: -10 }
    ]
  }
}
