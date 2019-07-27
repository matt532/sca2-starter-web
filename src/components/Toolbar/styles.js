import styled from 'styled-components'

//TODO:

const NavBar = styled.nav`
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #333;
    overflow: hidden;
    width: 50%;
    margin: auto;
    border-radius: 5px;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add a color to the active/current link */
  .topnav a.active {
    background-color: #4caf50;
    color: white;
  }
`

export default NavBar
