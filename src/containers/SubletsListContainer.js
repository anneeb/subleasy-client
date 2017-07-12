import React from 'react'
import SubletCard from '../components/SubletCard'
import { Loader, Card } from 'semantic-ui-react'

class SubletsListContainer extends React.Component {
  filterSublets = () => {
    return this.props.sublets.map((sublet, index) => {
      return (
        <SubletCard key={index} sublet={sublet}/>
      )
    })
  }

  renderSublets = () => {
    if (this.props.sublets.length > 0) {
      return this.filterSublets()
    } else {
      return (
        <Loader active>Loading</Loader>
      )
    }
  }

  render() {
    return(
      <Card.Group itemsPerRow={3} doubling stackable>
        {this.renderSublets()}
      </Card.Group>
    )
  }
}

export default SubletsListContainer
