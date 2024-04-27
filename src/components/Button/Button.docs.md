# Button Component Documentation

The Button component is used to render a button with different states and props.

## Usage

Import the Button component from the `Button` module:

```jsx
import Button from './Button';
```

Render the Button component in your JSX:

```jsx
<Button onClick={handleClick}>Click me</Button>
```

## Props

The Button component accepts the following props:

- `onClick` (function): A callback function to be executed when the button is clicked.
- `disabled` (boolean): If set to `true`, the button will be disabled.
- `variant` (string): The variant of the button. Possible values are:
  - `'primary'`: Renders a primary button.
  - `'secondary'`: Renders a secondary button.
  - `'danger'`: Renders a danger button.

## Examples

### Basic Button

Render a basic button:

```jsx
<Button onClick={handleClick}>Click me</Button>
```

### Disabled Button

Render a disabled button:

```jsx
<Button onClick={handleClick} disabled>Click me</Button>
```

### Primary Button

Render a primary button:

```jsx
<Button onClick={handleClick} variant="primary">Click me</Button>
```

### Secondary Button

Render a secondary button:

```jsx
<Button onClick={handleClick} variant="secondary">Click me</Button>
```

### Danger Button

Render a danger button:

```jsx
<Button onClick={handleClick} variant="danger">Click me</Button>
```

```

Please note that the above contents are just a template and you may need to modify them according to your specific requirements and implementation details.