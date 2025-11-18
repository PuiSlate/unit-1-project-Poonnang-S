import { useState } from "react";
import Input from "./input/Input";

const SubscribeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation for local logic only
    if (!name || !email) {
        alert("Please fill out all fields");
        return;
    }
    console.log({ name, email, subscribe });
    alert("Thank you for your subscription!");

    setName("");
    setEmail("");
    setSubscribe(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <Input
          id="name"
          label="Name"
          type="text"
          value={name}
          handleChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <Input
          id="email"
          label="Email address"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />

        <Input
          id="subscribe"
          label="Weekly Newsletter"
          type="checkbox"
          checked={subscribe}
          handleChange={(e) => setSubscribe(e.target.checked)}
        />
      </div>

      <div className="container">
        <input type="submit" value="Subscribe" />
      </div>
    </form>
  );
};

export default SubscribeForm;