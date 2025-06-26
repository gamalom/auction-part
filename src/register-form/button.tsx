export default function Button(props) {
  return (
    <button
      {...props}
      className="bg-blue-500 text-white py-3 px-4 w-full block rounded-xl mt-4 hover:bg-blue-800"
    />
  );
}
