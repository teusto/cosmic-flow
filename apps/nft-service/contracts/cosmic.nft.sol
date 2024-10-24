// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CosmicNFT is ERC721, Ownable {
    uint256 private _tokenIDS;
    mapping (uint256 => string) private _tokenURLS;

    constructor() ERC721("CosmicNFT", "COSMOS"){}

    function mintNFT(address recipient, string memory tokenURL) public onlyOwner  returns (uint256) {
        __tokenIDS++;
        uint256 newItemID = _tokenIDS;

        _mint(recipient, newItemID);
        _setTokenUrl(newItemID, tokenURL);

        return newItemID;
    }

    function _setTokenUrl(uint256 tokenID, string memory tokenURL) internal {
        require(_exists(tokenID), "ERC721Metadata: URL set of nonexistent token");
        _tokenURLS[tokenID] = tokenURL;
    }

    function tokenURI(uint256 tokenID) public view returns (string memory) {
        require(_exists(tokenID), "ERC721Metadata: URI query for nonexistent token");
        return _tokenURLS[tokenID];
    }
}