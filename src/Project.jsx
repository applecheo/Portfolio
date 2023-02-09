export default function Project() {
  return (
    <>
      <h2>My Projects:</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 32,
        }}
      >
        <a href="https://beams-e-commerce.vercel.app/">Beams E-Commerce</a>
        <a href="https://shoesial.vercel.app/">
          ShoeSial <span> (in progress)</span>
        </a>
      </div>
    </>
  );
}
