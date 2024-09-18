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
        uint256 price;
        bool isSold;
    }

    Ticket[] public tickets;
    mapping(uint256 => address) public ticketOwners;

    event TicketPurchased(uint256 indexed id, address buyer);
    event TicketCreated(uint256 indexed id, string name, string venue, string date, uint256 price);

    function createTicket(string memory _name, string memory _venue, string memory _date, uint256 _price) public {
        uint256 ticketId = tickets.length;
        tickets.push(Ticket(ticketId, _name, _venue, _date, address(0), _price, false));
        emit TicketCreated(ticketId, _name, _venue, _date, _price);
    }

    function buyTicket(uint256 _ticketId) public payable {
        require(_ticketId < tickets.length, "Ticket does not exist.");
        Ticket storage ticket = tickets[_ticketId];
        require(!ticket.isSold, "Ticket already purchased.");
        require(msg.value >= ticket.price, "Insufficient payment.");

        // Mark the ticket as sold
        ticket.owner = msg.sender;
        ticket.isSold = true;
        ticketOwners[_ticketId] = msg.sender;

        // Transfer the payment to the contract owner
        payable(address(this)).transfer(msg.value);
        
        emit TicketPurchased(_ticketId, msg.sender);
    }

    function getTicket(uint256 _ticketId) public view returns (Ticket memory) {
        require(_ticketId < tickets.length, "Ticket does not exist.");
        return tickets[_ticketId];
    }

    // Optional: Add a function to withdraw collected funds (onlyOwner pattern can be used)
    function withdrawFunds() public {
        // Only allow the contract owner to withdraw
        require(msg.sender == address(this));
        payable(msg.sender).transfer(address(this).balance);
    }
}
