import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'




export default class MenuComponent extends Component {
  constructor(props) {
    super(props)
    this.state =  { 
      activeItem: 'logout'
    }
  }

handleItemClick = (event, { name }) => this.setState({ activeItem: name })



render(props) {
    const { activeItem } = this.state
    return (
      <Menu secondary>
        <Menu.Item>
        {this.props.email} 
        </Menu.Item>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.props.logout}
        />
      </Menu>
    )
  }
}