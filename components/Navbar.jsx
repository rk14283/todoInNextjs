// Import the Link component from Next.js for client-side navigation
//remember this, we will use it often
import Link from "next/link";

export default function Navbar() {
  return (
    // Navbar container with styling for layout and appearance

    <nav className="flex justify-between items-center bg-purple-500 px-8 py-3">
      {/* Link to the home page with styling */}
      <Link className="text-white font-bold" href={"/"}>
        FormiCode
      </Link>
      {/* Link to the add topic page with styling */}
      <Link className="bg-white p-2" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
