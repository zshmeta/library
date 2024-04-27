# My React App

This is a sample React application that showcases the Button component.

## Project Structure

```filetree
my-react-app
├── src
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.jsx
│   │   │   ├── Button.styled.js
│   │   │   ├── Button.docs.md
│   │   │   ├── index.js
│   │   │   └── main.jsx
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Button Component

The Button component is a reusable component that can be used to render buttons with different states and props.

### Installation

To install the Button component, run the following command:

```bash
npm install @my-react-app/button
```

### Usage

Import the Button component in your React application:

```jsx
import Button from '@my-react-app/button';

function App() {
  return (
    <div>
      <Button text="Click me" onClick={() => console.log('Button clicked!')} />
    </div>
  );
}

export default App;
```

### Props

The Button component accepts the following props:

- `text` (string): The text to be displayed on the button.
- `onClick` (function): The callback function to be called when the button is clicked.

### Examples

#### Default Button

```jsx
<Button text="Click me" onClick={() => console.log('Button clicked!')} />
```

#### Disabled Button

```jsx
<Button text="Click me" onClick={() => console.log('Button clicked!')} disabled />
```

#### Primary Button

```jsx
<Button text="Click me" onClick={() => console.log('Button clicked!')} variant="primary" />
```

#### Secondary Button

```jsx
<Button text="Click me" onClick={() => console.log('Button clicked!')} variant="secondary" />
```

For more examples and detailed documentation, please refer to the [Button Component Documentation](src/components/Button/Button.docs.md).

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/my-react-app.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Please note that the above README.md file assumes that you have already created the necessary files and folders in your project structure.