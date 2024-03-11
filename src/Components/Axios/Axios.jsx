import React from "react";
import axios from "axios";

function AxiosApi() {
  const [users, setUsers] = React.useState([]);
  

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setUsers(res?.data.slice(0, 5));
      } catch (error) {
        console.log("Serverdan Error");
      }
    };

    FetchData();
  }, []);

  return (
    <>
      <h1 className="text-center text-danger m-5">Hello Axios</h1>
      <div className="item">
        {users?.length > 0 &&
          users.map((item) => (
            <li key={item.id}>
              <img src={item.url} alt="imgs" width={900} height={700} />
            </li>
          ))}
      </div>
    </>
  );
}

export default AxiosApi;