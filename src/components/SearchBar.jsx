export default function SearchBar({ onSearch }) {
  return (
    <div style={styles.container}>
      <input 
        type="text" 
        placeholder="Search like cse(eXsX)..." 
        onChange={(e) => onSearch(e.target.value)}
        style={styles.input} 
      />
    </div>
  );
}

const styles = {
  container: { textAlign: "center", margin: "20px 0" },
  input: {
    width: "50%",
    padding: "12px 20px",
    borderRadius: "30px",
    border: "1px solid #ccc",
    fontSize: "16px"
  }
};
