import axios from "axios";
import { useState } from "react";
function FCAxios() {
  //get call:
  const [userid, setuserid] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  function getData(e) {
    e.preventDefault();

    //get and delete as same

    //   axios
    //     .delete("https://jsonplaceholder.typicode.com/posts/" + userid)
    //     .then((respone) => {
    //       console.log(respone.data.title);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //     .finally(() => {
    //       console.log("done");
    //     });

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
        userId: userid,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("done");
      });
  }

  return (
    <div>
      <p>This is axios example</p>
      <form>
        Userid:<br></br>
        <input
          type="text"
          name="id"
          value={userid}
          onChange={(e) => {
            setuserid(e.target.value);
          }}
        />
        <br></br>
        title:<br></br>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <br></br>
        body:<br></br>
        <input
          type="text"
          placeholder="body"
          name="body"
          value={body}
          onChange={(e) => {
            setbody(e.target.value);
          }}
        />
        <br></br>
        <button type="submit" onClick={getData}>
          Add data
        </button>
      </form>
    </div>
  );
}

export default FCAxios;
