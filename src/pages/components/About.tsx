import autograph from "../../images/autograph.png";
import about from "../../images/about.png";
import circle from "../../images/svg/about_circle.svg";
const About = () => {
  return (
    <section className="text-white py-[50px] lg:py-[150px] relative ">
      <div className="container flex flex-col-reverse gap-12 lg:flex-row  lg:items-center ">
        <div className="w-[300px] lg:w-[800px] h-[800px] rounded-full left-[0]  bg-gradient_purple opacity-20  blur-gradient lg:blur-3xl absolute top-0  "></div>

        <div className="flex-1 ">
          <h2 className="heading-h2">Kim Jestem ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Justo adipiscing accumsan
            morbi imperdiet. Lectus nibh duis non aliquet quisque vulputate.
            Pellentesque elit amet sagittis facilisi gravida neque nisl
            placerat. Sagittis nullam urna morbi eleifend viverra. Massa tellus
            lectus auctor laoreet eu auctor. Et ac iaculis tristique mattis
            gravida erat luctus elementum. Volutpat felis ac sit mattis fusce
            vivamus nulla at orci. Massa id varius morbi enim blandit metus diam
            malesuada auctor. Risus lorem t
          </p>

          <div className="w-full flex justify-end mt-5">
            <img src={autograph.src} alt="Zdjęcie autografu" />
          </div>
        </div>
        <div className="w-3/4 mx-auto py-8 px-8 flex-1 flex justify-center items-center relative ">
          <div className="absolute w-full h-full md:w-auto md:h-auto rotation">
            <img src={circle.src} alt="" />
          </div>
          <div className="relative z-10">
            <img src={about.src} alt="Zdjęcie autora" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
