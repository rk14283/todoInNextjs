"use client"; // This directive tells Next.js that this component should be rendered on the client side.
// Import the useState hook from React for managing component state.
import { useState } from "react";
// Import the useRouter hook from Next.js for navigation.
import { useRouter } from "next/navigation";

// Define a functional component named AddTopic.
export default function AddTopic() {
  // Initialize a state variable 'title' with an empty string and a function 'setTitle' to update it.
  const [title, setTitle] = useState("");
  // Initialize a state variable 'description' with an empty string and a function 'setDescription' to update it.
  const [description, setDescription] = useState("");
  // Get the router object from Next.js for programmatic navigation.
  const router = useRouter();
  // Define an async function to handle form submission.
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior.
    e.preventDefault();

    // Check if title and description are not empty.
    if (!title || !description) {
      // Alert the user if either field is empty.
      alert("Title and description are required.");
      // Exit the function if validation fails.
      return;
    }

    try {
      // Make an API request to create a new topic.
      const res = await fetch("http://localhost:3000/api/topics", {
        // Use the POST method to send data.
        method: "POST",
        headers: {
          // Set the content type to JSON.
          "Content-type": "application/json",
        },
        // Send the title and description as the request body in JSON format.
        body: JSON.stringify({ title, description }),
      });
      // Check if the response is OK (status 200-299).
      if (res.ok) {
        // Navigate to the homepage if the topic was created successfully.
        router.push("/");
      } else {
        // Throw an error if the response was not OK.
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      // Log any errors that occur during the fetch request.
      console.log(error);
    }
  };

  return (
    // Return a form element with a submit handler
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Input field for the topic title */}
      <input
        // Update the title state on input change.
        onChange={(e) => setTitle(e.target.value)}
        // Set the input value to the current title state.
        value={title}
        // Apply some basic styling.
        className="border border-slate-500 px-8 py-2"
        // Set the input type to text.
        type="text"
        // Placeholder text for the input.
        placeholder="Topic Title"
      />
      {/* Input field for the topic description */}
      <input
        // Update the description state on input change.
        onChange={(e) => setDescription(e.target.value)}
        // Set the input value to the current description state
        value={description}
        // Apply some basic styling.
        className="border border-slate-500 px-8 py-2"
        // Set the input type to text.
        type="text"
        // Placeholder text for the input.
        placeholder="Topic Description"
      />
      {/* Submit button for the form */}
      <button
        // Set the button type to submit.
        type="submit"
        // Apply some basic styling
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
