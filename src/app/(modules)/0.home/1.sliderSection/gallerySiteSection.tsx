import { GallerySiteSectionItemWithoutIdDto } from "@/types/dtos/home/GallerySiteSectionItemWithoutIdDto";
import GallerySiteSectionSlider from "./gallerySiteSectionSlider";
interface props {
  sliderList: GallerySiteSectionItemWithoutIdDto[];
}
const GallerySiteSection = ({ sliderList }: props) => {
  return (
    <section>
      <div className="opacity-0 absolute">
        {sliderList &&
          sliderList.map((item) => {
            return (
              <div key={item.pictureInfo!.pictureId}>
                <h4>{item.title}</h4>
                <p>{item.subTitle}</p>
              </div>
            );
          })}
      </div>
      <GallerySiteSectionSlider sliderList={sliderList}></GallerySiteSectionSlider>
    </section>
  );
};

export default GallerySiteSection;
