const TECHNOLOGIES = [
  "TypeScript",
  "ReactJS",
  "Unit Testing",
  "React Testing Library",
  "Jest",
  "MongoDB",
  "Supabase",
  "Express.js",
  "JWT",
  "Formik",
  "Tailwind CSS",
  "Material UI",
  "Styled Components",
  "Axios",
  "Redux Toolkit",
  "React-Router-Dom",
];
export default function Progress() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: 8,
      }}
    >
      <h3 style={{ marginBottom: 0 }}>Summary of what I had learnt so far:</h3>
      <div style={{ textAlign: "center" }}>
        <ul
          style={{
            columns: 2,
            WebkitColumns: 2,
            MozColumns: 2,
            listStyle: "none",
            display: "inline-block",
            // textAlign: "left",
          }}
        >
          {TECHNOLOGIES.map((x) => (
            <li style={{ margin: 10 }}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
