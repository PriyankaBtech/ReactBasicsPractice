
// Higher-order component
const withBackgroundColor = (WrappedComponent) => {

  // Return a new function component
  return (props) => {
    // Enhance the props by adding a new prop 'backgroundColor'
    const modifiedProps = {
      ...props,
      backgroundColor: 'lightgreen', // You can customize the background color here
    }

    // Return the wrapped component with modified props
    return <WrappedComponent {...modifiedProps} />;
  }
}

// Component to be enhanced
const DisplayComponent = (props) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <p>This component has a background color!</p>
    </div>
  )
}

// Use the higher-order component
const EnhancedDisplayComponent = withBackgroundColor(DisplayComponent)

// Usage in the app
const App = () => {
  return (
    <div>
      <EnhancedDisplayComponent />
    </div>
  )
}

export default App;
