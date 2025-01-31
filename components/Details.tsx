import React from "react";

export default function Details({ data, type }: any) {
  return (
    <div className="p-5 sm:p-10">
      <section className="flex flex-col-reverse space-y-5 sm:space-y-0 sm:flex-row sm:space-x-6">
        <div className="mt-5 sm:mt-0">
          <img
            className="rounded-lg w-[400px] object-cover h-[450px]"
            src="https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format"
            alt=""
          />
        </div>
        <div>
          {type === "film" && <GenreFilmType data={data} />}
          {type === "people" && <GenrePeopleType data={data} />}
          {type === "starship" && <GenreStarType data={data} />}
          {type === "species" && <GenreSpeciesType data={data} />}
        </div>
      </section>
    </div>
  );
}

export const GenreFilmType = ({data}:any) => (
  <div>
    <h2 className="text-5xl font-semibold mb-5">COVER</h2>
    <p className="text-[#303B54]">Director: Kingsley Omin</p>
    <p className="text-[#303B54]">Producer: Kingsley Omin</p>
    <p className="text-[#303B54]">Release Date: January 24, 2022.</p>
  </div>
);

export const GenreStarType = ({data}:any) => (
  <div>
    <h2 className="text-5xl font-semibold mb-5">COVER</h2>
    <p className="text-[#303B54]">Model: DS-1 Orbital Battle Station</p>
    <p className="text-[#303B54]">Passengers: 22</p>
    <p className="text-[#303B54]">Pilots: Dior, Kingley, Jamal</p>
  </div>
);

export const GenrePeopleType = ({data}:any) => (
  <div>
    <h2 className="text-5xl font-semibold mb-5">COVER</h2>
    <p className="text-[#303B54]">Gender: Female</p>
    <p className="text-[#303B54]">Year of birth: January 24, 1922.</p>
    <p className="text-[#303B54]">Skin Color: Brown</p>
    <p className="text-[#303B54]">Height: 150CM</p>
  </div>
);

export const GenreSpeciesType = ({data}:any) => (
  <div>
    <h2 className="text-5xl font-semibold mb-5">COVER</h2>
    <p className="text-[#303B54]">Designation: Sentient</p>
    <p className="text-[#303B54]">Language: Shyriiwook</p>
    <p className="text-[#303B54]">Eye Colors: Blue, Green, Yellow</p>
    <p className="text-[#303B54]">Average Lifespan: 400</p>
  </div>
);
