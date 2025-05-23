import Image from "next/image";
import { Main } from "../../components/art/StylingArt";
import { useContentful } from "../../useContentful";
import React, { useEffect, useState } from "react";
import type { Chicken } from "../../types/contentful";
import type { NextPage } from "next";

const ChickensPage: NextPage = () => {
  const [chickens, setChickens] = useState<Chicken[]>([]);
  const { getChickens } = useContentful();

  useEffect(() => {
    getChickens().then((response) => {
      setChickens(response);
    });
  }, [getChickens]);

  return (
    <Main>
      {chickens.map((chicken, i) => (
        <div key={chicken.nr}>
          <Image
            src={`https:${chicken.photo}`}
            alt={`Chicken ${chicken.nr}`}
            width={700}
            height={933}
          />
        </div>
      ))}
    </Main>
  );
};

export default ChickensPage;
