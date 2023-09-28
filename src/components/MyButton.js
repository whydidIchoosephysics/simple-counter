import Button from "react-bootstrap/Button";

function MyButton({ variant, children, onClick }) {
  return (
      <Button
          variant={variant}
          onClick={onClick}>
        {children}
      </Button>
  );
}

export default MyButton;