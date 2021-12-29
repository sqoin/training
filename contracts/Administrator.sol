// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Administrator {
  

  mapping (address => bool ) admins;

  constructor()  {
    admins[msg.sender] = true;
  }

  modifier onlyAdmin() {
    require(isAdmin(msg.sender)," Only admins can add admins" );
    _;
  }

 function addAdmin(address a) public onlyAdmin {
   admins[a] = true;
 }

 function isAdmin(address a ) public view returns(bool) {
   return admins[a];
 }


 function removeAdmin(address a) public onlyAdmin {
   admins[a] = false;
 }




}
