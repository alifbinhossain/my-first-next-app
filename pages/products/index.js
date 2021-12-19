import Link from "next/link";
import styles from "../../styles/Products.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

const Products = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <a className={styles.single}>
            <h3>{product.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Products;
