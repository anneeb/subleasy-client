import React from 'react'
import { Container, Loader } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import '../carousel.css'

class HomeContainer extends React.Component {
  renderSublets = () => {
    if (this.props.sublets.length > 0) {
      return this.props.sublets.map((sublet, index) => {
        return (
          <div key={index}>
            <img src={sublet.images[0].url} alt={sublet.name} />
            <p className="legend">{sublet.name}</p>
          </div>
        )
      })
    } else {
      return (
        <Loader active>Loading</Loader>
      )
    }
  }

  render () {
    return (
      <Container>
        <Carousel dynamicHeight infiniteLoop swipeScrollTolerance={1} interval={3000} autoPlay>
          {this.renderSublets()}
        </Carousel>
      </Container>
    )
  }
}

export default HomeContainer
