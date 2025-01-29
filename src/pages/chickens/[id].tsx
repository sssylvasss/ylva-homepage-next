import { useRouter } from "next/router";
import Image from "next/image";
import { Main } from "../../components/art/StylingArt";
import { useContentful } from "../../useContentful";
import React, { useEffect, useState } from "react";

interface Chicken {
  id: number;
  photo: string | null;
}

const Chicken = () => {
  const router = useRouter();
  const { id } = router.query;
  const [chicken, setChicken] = useState<Chicken | null>(null);
  const { getChickenById } = useContentful();

  useEffect(() => {
    if (id) {
      getChickenById(id as string).then((response: Chicken | null) => {
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
            alt={`Chicken ${chicken.id}`}
            width={500} // Add appropriate width
            height={933} // Add appropriate height
          />
        )}
      </div>
    </Main>
  );
};

export default Chicken;
