import styled from "vue-styled-components";

export const Container = styled.div`
  min-height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  margin-bottom: 20px;

  img {
    height: 200px;
    width: 180px;
  }
`;

export const Title = styled.h1`
  color: #00bec4;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    align-self: flex-start;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    height: 48px;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    padding: 10px;
    font-size: 16px;

    &::placeholder {
      font-size: 14px;
      color: #999;
    }
  }

  button {
    background: #00bec4;
    border-radius: 4px;
    height: 48px;
    width: 100%;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background: #00bef9;
    }
  }

  a {
    color: #00bec4;
    transition: color 0.2s;

    &:hover {
      color: #333;
    }
  }
`;
