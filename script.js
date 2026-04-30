body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #141e30, #243b55);
  font-family: Arial, sans-serif;
}

.calculator {
  background: #1e1e2f;
  padding: 20px;
  border-radius: 20px;
  width: 320px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

#display {
  width: 100%;
  height: 60px;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  text-align: right;
  background: #0d0d1a;
  color: #fff;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  height: 60px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  background: #2f2f4f;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #44446a;
}

.equal {
  background: #00c853;
}

.equal:hover {
  background: #00e676;
}

.zero {
  grid-column: span 2;
}
