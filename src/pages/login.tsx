const Login = () => {
  return (
    <>
      <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        <img
          src='/img/beams.jpg'
          alt=''
          className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
          width={1308}
        />
        <div className='absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
        <div className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
          <div className='mx-auto max-w-md'>
            <img
              src='https://media.discordapp.net/attachments/872527165240004652/984022958160896040/unknown.png'
              className='mx-auto h-20'
              alt='Marche'
            />
            <div className='divide-y divide-gray-300/50'>
              <div className='space-y-6 py-8 text-base leading-7 text-gray-600'>
                <form>
                  <input
                    type='text'
                    className='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                    id='exampleFormControlInput2'
                    placeholder='Username'
                  />
                  <br />
                  <input
                    type='password'
                    className='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                    id='exampleFormControlInput2'
                    placeholder='Password'
                  />
                  <br />
                  <div className='mb-12 pt-1 pb-1 text-center'>
                    <button
                      type='button'
                      className='inline-block w-full rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
