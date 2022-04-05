import styles from "../styles/Home.module.css";
export default function Todos({ data, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) console.log(error);
  return (
    <div className={styles.grid}>
      {data.map((todo) => (
        <div key={todo.id} className={styles.card}>
          <a href="#">
            <h2> {todo.title} &rarr; </h2>
            <p>This is the description of this todo item</p>
          </a>
        </div>
      ))}
    </div>
  );
}
