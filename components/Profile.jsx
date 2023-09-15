import Card from "./Card";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      {/* {data ? (
        <div className="justify-center flex m-14  text-gray-300 font-semibold">
          You have no posts
        </div>
      ) : ( */}
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <Card
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={(e) => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
      {/* )} */}
    </section>
  );
};

export default Profile;
