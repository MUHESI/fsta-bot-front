// AUTH

export function InputAuth({ value, onChange, type, pl }: any) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={pl}
        className="bg-gray-100 outline-none text-sm flex-1"
      />
    </>
  );
}
