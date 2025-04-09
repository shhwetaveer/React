import FactBox from './FactBox'

function FactsContainer() {
  return (
    <div container="">
      <FactBox
        title="Octopus have three hearts"
        category="Science">
        Two pump blood to the gills, while one pumps it to the rest of the body.
      </FactBox>
      <FactBox
        title="Bananas are berries"
        category="Food">
        Botanically, bananas are classified as berries, while strawberries are not.
      </FactBox>
      <FactBox
        title="Honey never spoils"
        category="Food">
        Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.
      </FactBox>
      <FactBox
        title="Wombat poop is cube-shaped"
        category="Animals">
        Wombats produce cube-shaped poop to prevent it from rolling away, marking their territory.
      </FactBox>
    </div>
  );
}

export default FactsContainer
