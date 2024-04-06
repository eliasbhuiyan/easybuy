const Cancel = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="py-4 px-5 border-[1px] border-red-400 w-fit m-auto">
          <div className="title">Oops! Something went wrong.</div>
          <p className="text-lg capitalize text-secondary text-center pt-4">
            While trying to reserve money from your account
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cancel;
