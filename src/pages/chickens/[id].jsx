import { useRouter } from "next/router";
import Image from "next/image";
import { Main } from "../../components/art/StylingArt";
import { useContentful } from "../../useContentful";
import React, { useEffect, useState } from "react";


const Chicken = () => {
  const router = useRouter();
  const { id } = router.query;
  const [chicken, setChicken] = useState(null);
  const { getChickenById } = useContentful();

  useEffect(() => {
    if (id) {
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
            alt={`Chicken ${chicken.id}`}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
    </Main>
  );
};

export default Chicken;
