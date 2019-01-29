import React, { Component } from 'react'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import PropTypes from 'prop-types'

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react'
import ON from '../../assets/img/brand/ON.svg'
import profile from '../../assets/img/moji.jpg'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

class Header extends Component {
  render () {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none " display="md" mobile/>
        <AppNavbarBrand
          full={{ src: ON, width: 89, height: 25, alt: 'ONlogo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg"/>
        <Nav className="ml-auto" navbar>
          {/*<NavItem className="d-md-down-none">*/}
            {/*<NavLink href="#"><i className="fa fa-bell-o"/>*/}
              {/*<Badge pill color="danger">5</Badge>*/}
            {/*</NavLink>*/}
          {/*</NavItem>*/}
          <AppHeaderDropdown direction="left" className='mr-2'>
            <DropdownToggle nav>
              <NavItem className="d-md-down-none">
              <NavLink href="#/orders">
                <i className="fa fa-bell-o"/>
                <Badge pill color='danger'>5</Badge>
              </NavLink>
              </NavItem>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Orders</strong></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"/>New Orders<Badge color="info">42</Badge></DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
          <AppHeaderDropdown direction="down" className='mr-2'>
            <DropdownToggle nav>
              <img src={profile} className="img-avatar" alt="admin@bootstrapmaster.com"/>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"/>Profile</DropdownItem>
              <DropdownItem ><i className="fa fa-sign-out"/> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    )
  }
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
