export const InputBox = ({ value, onChange, title, placeholder }) => {
  return (
    <div className="w-full md:w-1/3 relative">
      <label className="font-dm font-bold text-base">
        {title}
        <input
          value={value}
          onChange={onChange}
          className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
          type="text"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
