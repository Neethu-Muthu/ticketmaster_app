// contracts/TicketMaster.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract TicketMaster {
    struct Ticket {
        uint256 id;
        string name;
        string venue;
        string date;
        address owner;
    }

    Ticket[] public tickets;
    mapping(uint256 => address) public ticketOwners;

    event TicketPurchased(uint256 id, address buyer);

    function createTicket(string memory _name, string memory _venue, string memory _date) public {
        uint256 ticketId = tickets.length;
        tickets.push(Ticket(ticketId, _name, _venue, _date, address(0)));
    }

    function buyTicket(uint256 _ticketId) public payable {
        require(_ticketId < tickets.length, "Ticket does not exist.");
        require(ticketOwners[_ticketId] == address(0), "Ticket already purchased.");
        ticketOwners[_ticketId] = msg.sender;
        emit TicketPurchased(_ticketId, msg.sender);
    }

    function getTicket(uint256 _ticketId) public view returns (Ticket memory) {
        require(_ticketId < tickets.length, "Ticket does not exist.");
        return tickets[_ticketId];
    }
}
