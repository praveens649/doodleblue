export const UserCard = ({ data }) => {
  return (
    <div>
      {data.map((user) => (
        <div className="user-card" key={user.id}>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>address: {user.address.street}, {user.address.city}</p>
          <p>address: {user.address.geo.lat}, {user.address.geo.lng}</p>
          <p>phone: {user.phone}</p>
          <p>website: {user.website}</p>
          <p>company: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
};
