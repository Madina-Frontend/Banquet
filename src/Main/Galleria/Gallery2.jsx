import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery2() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <h1 className=" text-[30px]">Posudalar</h1>
      <div type="button" className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4" onClick={() => setOpen(true)}>
        <img className=" w-[100%] h-[250px] object-cover rounded-lg" src="https://plus.unsplash.com/premium_photo-1679280550151-4c56e920b277?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGV8ZW58MHx8MHx8fDA%3D" alt="" />
        <img className=" w-[100%] h-[250px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV8ZW58MHx8MHx8fDA%3D" alt="" />
        <img className=" w-[100%] h-[250px] object-cover rounded-lg" src="https://plus.unsplash.com/premium_photo-1670315264849-8cb4a1b1342e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV8ZW58MHx8MHx8fDA%3D" alt="" />
        <img className=" w-[100%] h-[250px] object-cover rounded-lg" src="https://plus.unsplash.com/premium_photo-1670950411934-e21abf39191e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRhYmxlfGVufDB8fDB8fHww" alt="" />
        <img className=" w-[100%] h-[250px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhYmxlfGVufDB8fDB8fHww" alt="" />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://plus.unsplash.com/premium_photo-1679280550151-4c56e920b277?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGV8ZW58MHx8MHx8fDA%3D",
            alt: "image 1",
            width: 3840,
            height: 2560,
          },
          {
            src: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV8ZW58MHx8MHx8fDA%3D",
            alt: "image 2",
            width: 3840,
            height: 2560,
          },
          {
            src: "https://plus.unsplash.com/premium_photo-1670315264849-8cb4a1b1342e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV8ZW58MHx8MHx8fDA%3D",
            alt: "image 3",
            width: 3840,
            height: 2560,
          },
          {
            src: "https://plus.unsplash.com/premium_photo-1670950411934-e21abf39191e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRhYmxlfGVufDB8fDB8fHww",
            alt: "image 4",
            width: 3840,
            height: 2560,
          },
          {
            src: "https://images.unsplash.com/photo-1437419764061-2473afe69fc2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhYmxlfGVufDB8fDB8fHww",
            alt: "image 5",
            width: 3840,
            height: 2560,
          },

        ]}
      />
    </>
  );
}