// code your solution here
// Function to find the first Super Bowl win
function superbowlWin(record) {
  const win = record.find((game) => game.result === "W");
  return win ? win.year : undefined;
}

// Export the function for testing
module.exports = superbowlWin;
