import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { register } from "../redux/apiCallsUser";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 5px;
  outline: none;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const FormBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  const handleRegister = (e) => {
    e.preventDefault();
    const reqData = {
      username,
      email,
      password,
      img,
    };
    register(dispatch, { ...reqData });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="Username"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            autoComplete="on"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Image Url"
            type="url"
            required
            onChange={(e) => setImg(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <FormBottom>
            <Button onClick={handleRegister}>CREATE</Button>
            <Link to="/login" style={{ fontSize: "14px" }}>
              Already have an account?
            </Link>
          </FormBottom>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
