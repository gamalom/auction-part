const Select = (props) => {
  const { options, ...args } = props;
  return (
    <div>
      <select {...args} className="border rounded px-2 py-1 w-full">
        <option value="">Select Subject</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
