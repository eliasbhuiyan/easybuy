const Details = ({ children, align }) => {
  return (
    <p className={`font-dm font-normal text-secondary text-base w-full md:w-1/2 ${align}`}>
      {children}
    </p>
  );
};

export default Details;
