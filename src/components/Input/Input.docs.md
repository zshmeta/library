# Input Component Documentation

The Input component is used to render a Input with different states and props.

## Usage

Import the Input component from the `Input` module:

```jsx
import Input from './Input';
```

Render the Input component in your JSX:

```jsx
<Input onClick={handleClick}>Click me</Input>
```

## Props

The Input component accepts the following props:

- `onClick` (function): A callback function to be executed when the Input is clicked.
- `disabled` (boolean): If set to `true`, the Input will be disabled.
- `variant` (string): The variant of the Input. Possible values are:
  - `'primary'`: Renders a primary Input.
  - `'secondary'`: Renders a secondary Input.
  - `'danger'`: Renders a danger Input.

## Examples

### Basic Input

Render a basic Input:

```jsx
<Input onClick={handleClick}>Click me</Input>
```

### Disabled Input

Render a disabled Input:

```jsx
<Input onClick={handleClick} disabled>Click me</Input>
```

### Primary Input

Render a primary Input:

```jsx
<Input onClick={handleClick} variant="primary">Click me</Input>
```

### Secondary Input

Render a secondary Input:

```jsx
<Input onClick={handleClick} variant="secondary">Click me</Input>
```

### Danger Input

Render a danger Input:

```jsx
<Input onClick={handleClick} variant="danger">Click me</Input>
```

```

Please note that the above contents are just a template and you may need to modify them according to your specific requirements and implementation details.