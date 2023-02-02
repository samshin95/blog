import Image from "next/image";
export default function about() {
  return (
    <>
      <div className="py-20 md:py-32">
        <section className="container md:flex mx-auto">
          <div
            className="w-full mt-10 md:w-1/2"
            style={{ position: "relative" }}
          >
            <Image src={"/images/icons8-gear-64.png"} fill />
          </div>
          <div className="w-full mt-10 md:w-1/2"></div>
        </section>
      </div>
    </>
  );
}
