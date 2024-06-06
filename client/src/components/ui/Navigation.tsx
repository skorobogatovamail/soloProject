import React, { useContext } from 'react';

function Navigation(): JSX.Element {
  // const {user, logoutHandler} = useContext(UseContext)
  return (
    <header
      className="p-4 flex justify-between"
      style={{
        background:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      }}
    >
      <a href="/" className="flex items-center gap-1 no-underline text-white">
        <span className="text-xl">🏠</span>
        <span className="font-bold text-xl ml-10">Airbnc</span>
      </a>

      <div className="flex justify-between  ">
        <a className="no-underline mr-10 text-white font-bold" href="/signup">
          SignUp
        </a>
        <a className="no-underline mr-10 text-white font-bold" href="/login">
          Login
        </a>
      </div>
    </header>
  );
}

export default Navigation;
