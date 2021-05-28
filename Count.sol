pragma solidity ^0.5.0 ;

contract Count {
    uint256 public count = 0 ;
    
    function getBlockNumber() public view returns (uint256) {
        return block.number ;
    } 
    
    function setCount(uint256 _count) public {
        count = _count ;
    }
}
