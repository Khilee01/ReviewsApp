import {Component} from 'react'
import './App.css'
import ReviewsCarousel from './components/ReviewsCarousel'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class App extends Component {
  state = {
    selectedIndex: 0,
  }

  onLeft = () => {
    this.setState(prevState => {
      if (prevState.selectedIndex > 0) {
        return {
          selectedIndex: prevState.selectedIndex - 1,
        }
      }
      return {
        selectedIndex: prevState.selectedIndex,
      }
    })
  }

  onRight = () => {
    this.setState(prevState => {
      if (prevState.selectedIndex < reviewsList.length) {
        return {
          selectedIndex: prevState.selectedIndex + 1,
        }
      }
      return {
        selectedIndex: prevState.selectedIndex,
      }
    })
  }

  render() {
    const {selectedIndex} = this.state
    return (
      <div className="mainContainer">
        <h1>Reviews</h1>
        <div className="allThree">
          <button type="button" data-testid="leftArrow" onClick={this.onLeft}>
            <img
              className="arrows"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <ReviewsCarousel
            reviewsList={reviewsList}
            selectedIndex={selectedIndex}
          />
          <button type="button" data-testid="rightArrow" onClick={this.onRight}>
            <img
              className="arrows"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default App
