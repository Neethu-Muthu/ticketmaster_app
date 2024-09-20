// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract TicketMaster {
    struct Ticket {
        string name;
        string email;
        uint256 seatNumber;
        bool isBooked;
    }

    mapping(uint256 => Ticket) public tickets; // Maps seat number to Ticket
    uint256 public totalTickets;
    uint256 public ticketsAvailable;
    address public admin; // Admin address

    event TicketBooked(uint256 indexed seatNumber, string name, string email);

    constructor(uint256 _totalTickets) {
        admin = msg.sender; // Set deployer as admin
        totalTickets = _totalTickets;
        ticketsAvailable = _totalTickets;
    }

    // Only admin can set total tickets
    function setTotalTickets(uint256 _totalTickets) public {
        require(msg.sender == admin, "Only admin can set total tickets");
        require(_totalTickets > totalTickets, "New total must be greater than current total");

        totalTickets = _totalTickets;
        ticketsAvailable = _totalTickets; // Reset available tickets
    }

    // Book a ticket
    function bookTicket(string memory name, string memory email, uint256 seatNumber) public {
        require(seatNumber > 0 && seatNumber <= totalTickets, "Invalid seat number");
        require(tickets[seatNumber].isBooked == false, "Ticket already booked");

        tickets[seatNumber] = Ticket(name, email, seatNumber, true);
        ticketsAvailable--;

        emit TicketBooked(seatNumber, name, email);
    }

    // Retrieve ticket information
    function getTicket(uint256 seatNumber) public view returns (string memory name, string memory email, bool isBooked) {
        require(seatNumber > 0 && seatNumber <= totalTickets, "Invalid seat number");

        Ticket memory ticket = tickets[seatNumber];
        return (ticket.name, ticket.email, ticket.isBooked);
    }

    // Get available tickets
    function getAvailableTickets() public view returns (uint256) {
        return ticketsAvailable;
    }
}
