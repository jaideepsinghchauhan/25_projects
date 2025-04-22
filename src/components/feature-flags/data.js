const dummyAPIResponse = {
  showLightandDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordion: false,
  showTreeView: true,
};

function featureFlagsDataServiceCalls() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dummyAPIResponse);
    }, 1000);
  });
}

export default featureFlagsDataServiceCalls;
