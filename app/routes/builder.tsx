 import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import FormBuilder from "../components/FormBuilder";

export const loader: LoaderFunction = async () => {
  return json({ message: "Welcome to the Form Builder" });
};

export default function Index() {
  const data = useLoaderData();
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-10">
        {data.message}
      </h1>
      <FormBuilder />
    </main>
  );
}