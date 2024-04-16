import ProductDescriptionCard from "../ProductDescriptionCard";
import productDesc from "../assets/images/productDesc.jpg";

export default function ProductDescription() {
  return (
    <div>
      <div className="sm:mx-10 mx-auto text-gray-500 mt-10 hidden sm:inline-block">
        <p>
          home <span className="mx-3">&gt;</span>
          <span>Women</span>
          <span className="mx-3">&gt;</span>
          <span>Women</span>
          <span className="mx-3">&gt;</span>
          <span>Women</span>
        </p>
      </div>

      <ProductDescriptionCard
        imageUrl={productDesc}
        category={"PRINCESS"}
        title={"CITRUSPERS CLASSIC BLACK - 1L"}
        point={5}
        description={`De handige Princess Citruspers zorgt ervoor dat je elke dag kunt
beginnen met een vers glas jus d'orange. De opvangcontainer heeft
een inhoud van 1 liter zodat je genoeg sap kunt persen voor 4 glazen
of de sap kunt bewaren in de koelkast. Met links- en rechtsdraaiende
perskegels voor een extra hoge sapopbrengst.`}
      />
    </div>
  );
}
