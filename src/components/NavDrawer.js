import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import MenuLink from '../styled/MenuLink'
import DrawerToggleButton from '../styled/DrawerToggleButton'
import AuthButton from '../styled/AuthButton'

class NavDrawer extends Component {

  state = {
    open: true,
    width: 250
  }

  toggle = () => {
    this.setState( (prevState) => {
      return {
        open: !prevState.open
      }
    })
  }


  render () {
    return (
      <div>
        <DrawerToggleButton
          onTouchTap={this.toggle}
          open={this.state.open}
          width={this.state.width}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
          <AuthButton
            auth={this.props.auth}
            authenticated={this.props.auth.getToken()}
          />
          <Divider/>
          <MenuLink
            to={'/'}
            onTouchTap={this.toggle}
            primaryText={'Play'}
          />
          <MenuLink
            to={'/profile'}
            onTouchTap={this.toggle}
            primaryText={'Profile'}
          />


        </Drawer>

      </div>
    )
  }
}

export default NavDrawer
