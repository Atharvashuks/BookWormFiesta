import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to the world of books!
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Read share & more...
        </span>
      </h1>
      <p className="desc text-center">
        BookWormFiesta is an open-source platform for book lovers to read share
        and recommend books
      </p>

      <Feed />
    </section>
  );
};

export default Home;
