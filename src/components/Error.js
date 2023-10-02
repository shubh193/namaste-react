import { useRouteError } from 'react-router-dom';
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="parentErrorImg">
      <div className="errorImg">
        <img
          alt="errorImage"
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
        />
        <p>
          {err.status}:{err.statusText}
        </p>
      </div>
    </div>
  );
};
export default Error;
