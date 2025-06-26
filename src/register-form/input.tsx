export default function Input(props) {
  const { label, error = null, ...args } = props;
  return (
    <div>
      {label && <label htmlFor={args.id}>{label}</label>}
      <input
        {...args}
        className="border text-sm gap-1 border-gray-500 rounded-md p-2 block w-full mb-3"
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}
