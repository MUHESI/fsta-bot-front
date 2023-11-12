export { default as Button } from "./Button";
export { default as ThemeSettings } from "./ThemeSettings";
export { default as Sidebar } from "./Sidebar";
export { default as Navbar } from "./Navbar";
export { default as Notification } from "./Notification";
export { default as UserProfile } from "./Pagination";
export { default as Header } from "./Header";



/*
@Decorator
function myDecorator(MyComponent: React.FC<{ name: string }>) {
  return function (props: { name: string }) {
    return (
      <div>
        <MyComponent {...props} />
        <p>Hello from myDecorator!</p>
      </div>
    );
  };
}

function MyComponent(props: { name: string }) {
  return <div>Hello World! My name is {props.name}.</div>;
}

const DecoratedComponent = myDecorator(MyComponent);


*/