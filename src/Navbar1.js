import { useState } from "react"
// import { Alert } from '@coreui/react/CNavbar';
import "./Navbar.css";
import { Link } from 'react-router-dom';

import { CNavbar, CContainer, CNavbarBrand,CNavbarToggler,CCollapse,CNavbarNav,CNavItem,CNavLink,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CDropdownDivider,CForm,CFormInput,CButton  } from '@coreui/react'

const Navbar1 = () => {


const [visible, setVisible] = useState(false)
return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="Navbar">
      <CContainer fluid>
        <CNavbarBrand href="#">Menu</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#"><h1 className="Link"> Link</h1></CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">After 65+</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="https://www.betterhealth.vic.gov.au/health/healthyliving/Nutrition-needs-when-youre-over-65">Diet</CDropdownItem>
                <CDropdownItem href="https://www.seniorlifestyle.com/resources/blog/7-best-exercises-for-seniors-and-a-few-to-avoid/">Excercise</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="https://kauveryhospital.com/blog/geriatrics/senior-health-dos-and-donts-beyond-age-65/">Do's and Dont's</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
          <CNavItem>
            <CNavLink href="#" >
            <Link to="/login">Log in
              <img
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt=""
              width={30}
              />
              </Link>
               </CNavLink>
          </CNavItem>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
)

}

export default Navbar1;