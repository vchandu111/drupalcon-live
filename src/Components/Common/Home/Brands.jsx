import React, { useEffect, useState } from "react";

function Brands() {
  const [brands, setBrands] = useState([]);
  const api =
    "https://main-bvxea6i-dzghxlrwlqmsu.us-2.platformsh.site/jsonapi/taxonomy_term/brand?include=field_brand_image";
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        const result = data.data.map((brand) => {
          const imageId = brand.relationships?.field_brand_image?.data?.id;
          const image = data.included.find((img) => img.id === imageId);
          const brandName = brand.attributes.name;
          return {
            id: brand.id,
            name: brandName,
            imageUrl: image?.attributes?.uri?.url || null,
          };
        });
        console.log(result, "result");
        setBrands(result);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(brands);

  return (
    <>
      <h2 className="heading-primary">Our Popular brands</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-black p-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white shadow-lg  flex-col rounded-lg p-6 flex items-center justify-center text-lg font-semibold text-gray-700 hover:shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <img
              className="w-full h-32 object-contain mb-2"
              src={` https://main-bvxea6i-dzghxlrwlqmsu.us-2.platformsh.site${brand.imageUrl}`}
              alt=""
            />
            <p> {brand.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Brands;
