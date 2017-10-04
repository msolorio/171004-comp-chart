export default function calculateSku(activeTiles, skuRanking) {
  return activeTiles.reduce((recommendedSku, activeTile) => {
    return (
      skuRanking.indexOf(activeTile) > skuRanking.indexOf(recommendedSku)
        ? activeTile
        : recommendedSku
    );
  }, false);
}
