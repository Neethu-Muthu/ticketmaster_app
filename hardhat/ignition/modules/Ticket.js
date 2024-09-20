const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("Ticket", (m) => {
  const ticketMaster = m.contract("TicketMaster");
  return { ticketMaster };
});
