import { useAuth } from "./AuthContext";

/** Button that attempts to use the token in context when clicked */
export default function Tablet() {
  const { authenticate } = useAuth();

  return (
    <>
      <h1>Stone Tablet</h1>
      <p>The tablet hums quietly. It seems to react to your token.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          authenticate();
        }}
      >
        <button>Touch the tablet</button>
      </form>
    </>
  );
}
