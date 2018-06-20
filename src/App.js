import React, { Component } from 'react'
import './App.css'
import PHASES from './GamePhases'
import tada from './sounds/tada.mp3'
import instaDeath from './sounds/instaDeath.mp3'

const MAX_BATTERY_LEVEL = 100
const INSTA_DEATH_LIKELIHOOD = 30

const DEFAULT_STATE = {
  started: false,
  phase: undefined,
  stepCount: 0,
  gameHistory: [],
  batteryLevel: MAX_BATTERY_LEVEL,
  gameOver: false,
  winner: false
}

const playSound = audioElement => {
  audioElement.currentTime = 0
  audioElement.play()
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = DEFAULT_STATE

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.changePhases = this.changePhases.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  getRandomEvent (events) {
    const index = Math.floor(Math.random() * Math.floor(events.length))

    const instantDeathNumber = Math.floor(
      Math.random() * Math.floor(INSTA_DEATH_LIKELIHOOD)
    )

    if (instantDeathNumber === 1) {
      playSound(document.querySelector('.InstaDeath'))

      return {
        description: 'Empties have failed to synchronize! Insta-death!',
        batteryEffect: -100
      }
    } else {
      return events[index]
    }
  }

  changePhases () {
    switch (this.state.phase) {
      case PHASES.GOING_TO_WORK:
        this.setState({
          stepCount: 0,
          phase: PHASES.LOADING,
          gameHistory: this.state.gameHistory.concat([
            PHASES.LOADING.startEvent
          ])
        })
        break
      case PHASES.LOADING:
        this.setState({
          stepCount: 0,
          phase: PHASES.DELIVERY,
          gameHistory: this.state.gameHistory.concat([
            PHASES.DELIVERY.startEvent
          ])
        })
        break
      case PHASES.DELIVERY:
        this.setState({
          stepCount: 0,
          phase: PHASES.WRAP_UP,
          gameHistory: this.state.gameHistory.concat([
            PHASES.WRAP_UP.startEvent
          ])
        })
        break
      case PHASES.WRAP_UP:
        this.setState({
          stepCount: 0,
          phase: PHASES.GOING_HOME,
          gameHistory: this.state.gameHistory.concat([
            PHASES.GOING_HOME.startEvent
          ])
        })
        break
      default:
    }
  }

  handleKeyDown (event) {
    if (event.code === 'Escape') {
      return this.setState(DEFAULT_STATE)
    }

    if (event.code !== 'Space') return

    if (this.state.gameOver) return

    if (this.state.batteryLevel <= 0) {
      this.setState({
        gameOver: true,
        batteryLevel: 0
      })
    }

    if (!this.state.started) {
      this.setState({
        started: true,
        phase: PHASES.GOING_TO_WORK,
        gameHistory: this.state.gameHistory.concat([
          PHASES.GOING_TO_WORK.startEvent
        ])
      })
    } else {
      if (this.state.stepCount >= this.state.phase.stepCount) {
        if (this.state.phase.name === 'GOING HOME') {
          this.setState({ winner: true })
        } else {
          if (!this.state.gameOver) { playSound(document.querySelector('.TadaSound')) }

          this.changePhases()
        }
      } else {
        const randomEvent = this.getRandomEvent(this.state.phase.events)
        const newArray = this.state.gameHistory.concat([randomEvent])
        const batteryLevelCopy = this.state.batteryLevel
        const newBatteryLevel = batteryLevelCopy + randomEvent.batteryEffect

        this.setState({
          stepCount: this.state.stepCount + 1,
          gameHistory: newArray,
          batteryLevel: newBatteryLevel <= 100
            ? newBatteryLevel
            : MAX_BATTERY_LEVEL
        })
      }
    }
  }

  renderInstructionText () {
    if (!this.state.started) {
      return (
        <p>
          Press the SPACE BAR to start your day. Press ESC to reset the game
        </p>
      )
    } else {
      return (
        <p>
          {' '}
          Press the SPACE BAR to continue your day. Press ESC to reset the game
        </p>
      )
    }
  }

  getHistoryDescriptionAtIndex (history, index) {
    const historyElement = history[history.length - index]

    if (!historyElement) return

    let className = ''
    if (historyElement.batteryEffect > 0) {
      className = 'good'
    } else if (historyElement.batteryEffect === 0) {
      className = 'neutral'
    } else {
      className = 'bad'
    }

    return <p className={className}>{historyElement.description}</p>
  }

  renderGameArea () {
    if (!this.state.started) return

    if (this.state.winner) {
      return (
        <div className='GameArea'>
          <div className='Winner'>
            CONGRATULATIONS! <br />
            🎉🎉🎉 You made it through the day as a driver for Metro! 🎉🎉🎉
          </div>
        </div>
      )
    }

    if (this.state.gameOver) {
      return (
        <div className='GameArea'>
          <div className='GameOver'>Game Over.</div>
        </div>
      )
    }

    return (
      <div className='GameArea'>
        {this.getHistoryDescriptionAtIndex(this.state.gameHistory, 3)}
        {this.getHistoryDescriptionAtIndex(this.state.gameHistory, 2)}
        {this.getHistoryDescriptionAtIndex(this.state.gameHistory, 1)}
      </div>
    )
  }

  renderPhases () {
    const phaseNames = Object.keys(PHASES).map(key => PHASES[key].name)

    return (
      <ul>
        {phaseNames.map((phaseName, index) => {
          let className = ''

          if (phaseName === this.state.phase.name) className = 'doing'

          if (this.state.phase.name === 'LOADING') {
            if (phaseName === 'GOING TO WORK') className = 'done'
          }

          if (this.state.phase.name === 'DELIVERING TO CUSTOMERS') {
            if (phaseName === 'GOING TO WORK') className = 'done'
            if (phaseName === 'LOADING') className = 'done'
          }

          if (this.state.phase.name === 'WRAPING UP YOUR TOUR') {
            if (phaseName === 'GOING TO WORK') className = 'done'
            if (phaseName === 'LOADING') className = 'done'
            if (phaseName === 'DELIVERING TO CUSTOMERS') className = 'done'
          }

          if (this.state.phase.name === 'GOING HOME') {
            if (phaseName === 'GOING TO WORK') className = 'done'
            if (phaseName === 'LOADING') className = 'done'
            if (phaseName === 'DELIVERING TO CUSTOMERS') className = 'done'
            if (phaseName === 'WRAPING UP YOUR TOUR') className = 'done'
          }

          return <li key={index} className={className}>{phaseName}</li>
        })}
      </ul>
    )
  }
  // <h2>DriverApp - The Game</h2>

  render () {
    return (
      <div className='App'>
        <div>
          <div className='emojis'>
            <span className='title-emoji' role='img' aria-label='truck emoji'>
              🚚
            </span>
            <span className='title-emoji' role='img' aria-label='wind emoji'>
              💨
            </span>
          </div>
          <h3>
            {this.state.phase === undefined ? null : this.renderPhases()}
          </h3>
        </div>
        <p className='Battery'>
          Device Battery Level: {this.state.batteryLevel}/{MAX_BATTERY_LEVEL}
        </p>
        {this.renderGameArea()}
        {this.renderInstructionText()}
        <audio className='TadaSound' src={tada} />
        <audio className='InstaDeath' src={instaDeath} />
      </div>
    )
  }
}

export default App
