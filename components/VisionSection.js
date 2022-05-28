import { TitleComp } from "./TitleComp";

export function VisionSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full py-20">
        <div className="text-center">
          <TitleComp title="OUR VISION" desc="Lorem Ipsum Dollor sit ammet" />
          <p className="mt-8">
            To be the global market leader in the manufacture, marketing, and
            distribution of coconut products.
          </p>
        </div>
        <div className="text-center mt-16">
          <TitleComp
            title="OUR VISIONOUR PURPOSE"
            desc="Lorem Ipsum Dollor sit ammet"
          />
          <div className="px-8 py-4 w-fit mx-auto bg-white rounded-lg shadow-lg mt-10">
            <p>
              Our business strategy prioritizes coconut products and excellent
              customer service.
            </p>
          </div>
          <div className="px-8 py-4 w-fit mx-auto bg-white rounded-lg shadow-lg mt-10">
            <p>
              We are dedicated to providing the best natural, genuine, and
              high-quality products grown by local farmers.
            </p>
          </div>
          <div className="px-8 py-4 w-fit mx-auto bg-white rounded-lg shadow-lg mt-10">
            <p>
              Introducing natural products made in the world for the welfare of
              employees and the best coconut producers in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
