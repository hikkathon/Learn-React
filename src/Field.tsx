const Field = ({
  label,
  onChange,
  text,
}: {
  label: string;
  onChange: (value: string) => void;
  text: string;
}) => {
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default Field;
