import ProductsCard from "../ProductsCard";


const FeturedProducts = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 space-y-3 items-center  gap-4 ">
            <ProductsCard></ProductsCard>
            <ProductsCard></ProductsCard>
            <ProductsCard></ProductsCard>
            <ProductsCard></ProductsCard>
            <ProductsCard></ProductsCard>
        </div>
    );
};

export default FeturedProducts;