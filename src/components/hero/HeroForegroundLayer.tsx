import HeroTrees from "../HeroTrees";

type HeroForegroundLayerProps = {
  introVisible: boolean;
};

function HeroForegroundLayer({ introVisible }: HeroForegroundLayerProps) {
  return <HeroTrees introVisible={introVisible} />;
}

export default HeroForegroundLayer;
