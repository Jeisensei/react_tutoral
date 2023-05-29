const ErrorExample = () => {
  let count = 0;
  return (
    <>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => {
          console.log(count);
          count = count + 1;
        }}
      >
        click to add
      </button>
    </>
  );
};

export default ErrorExample;
