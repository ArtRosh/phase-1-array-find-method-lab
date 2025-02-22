// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }

  const sadReality = [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ];
  superbowlWin(sadReality);  