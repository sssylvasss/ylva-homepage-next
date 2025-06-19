import { useRouter } from "next/router";
import Image from "next/image";
import { Main } from "../../components/art/StylingArt";
import { useContentful } from "../../useContentful";
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";

const ChickenPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chicken, setChicken] = useState<any | null>(null);
  const { getChickenById } = useContentful();

  useEffect(() => {
    if (id && typeof id === "string") {
      getChickenById(id).then((response) => {
        setChicken(response);
      });
    }
  }, [id, getChickenById]);

  if (!chicken) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <div>
        {chicken.photo && (
          <Image
            src={`https:${chicken.photo}`}
            alt={`Chicken ${chicken.nr}`}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
    </Main>
  );
};

export default ChickenPage;
