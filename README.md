# react-easy-themer

## Easy theme management for React apps

`react-easy-themer` is a lightweight package that provides an easy way to manage themes in your React applications. With `react-easy-themer`, you can easily switch between different themes, customize theme styles, and access theme information in your components.

### Features

1. Easy Integration: Quickly integrate theme management into your React components.
2. Theme Switching: Toggle between light and dark themes effortlessly.
3. Customizable: Define custom theme styles and extend functionality as needed.
4. Context API: Uses React Context API for efficient state management.

### Installation

npm install react-easy-themer

### IMPLEMENTATION

src/App.jsx

```bash
import { Themer } from "react-easy-themer";
import Header from "./Header.jsx";

const App = () => {
  return (
    <Themer>
      <Header />
    </Themer>
  );
};
export default App;

```

src/Header.jsx

```bash
import { useTheme } from "react-easy-themer";

const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header>
      <h1>Header</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;

```
