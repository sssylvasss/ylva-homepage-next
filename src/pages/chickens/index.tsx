import Link from "next/link";
import Image from "next/image";
import { Main } from "../../components/art/StylingArt";
import { useContentful } from "../../useContentful";
import React, { useEffect, useState } from "react";

const Chickens = () => {
  const [chickens, setChickens] = useState([]);
  const { getChickens } = useContentful();

  useEffect(() => {
    getChickens().then((response: any) => {
      setChickens(response);
    });
  }, [getChickens]);

  return (
    <Main>
      {chickens?.map((chicken: any, i: number) => (
        <div key={i}>
          <Image
            src={`https:${chicken.photo}`}
            alt={`Chicken ${chicken.id}`}
            width={700}
            height={933}
          />
        </div>
      ))}
    </Main>
  );
};

export default Chickens;
