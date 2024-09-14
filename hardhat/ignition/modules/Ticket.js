const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("TicketModule", (m) => {
  const ticketMaster = m.contract("TicketMaster");
  return { ticketMaster };
});