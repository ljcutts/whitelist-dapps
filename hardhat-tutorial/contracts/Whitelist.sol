pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistedAddresses;

    mapping(address => bool) public whitelistedAddresses;

    uint8 public numAddressesWhiteListed;

    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    function addAddressToWhitelist() public {
        require(!whitelistedAddresses[msg.sender], 'Sender has already been whitelisted');
        require(numAddressesWhiteListed < maxWhitelistedAddresses, 'More addresses cant be added, limit reached');
        whitelistedAddresses[msg.sender] = true;
        numAddressesWhiteListed += 1;
    }
}