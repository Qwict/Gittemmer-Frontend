export default function Login() {
  // create a login screen
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle gap-10 ">
      <h1 className="text-center text-3xl">Sign in</h1>
      <form action="" className="w-1/3 h-fit px-10 py-14 flex flex-col mx-auto gap-5 border-2 border-gray-500 rounded-lg bg-zinc-900">
        <label htmlFor="user" className="">Username or E-mail</label>
        <input className=" rounded p-1  text-black" type="text" name="user" id="user" required />
        <label htmlFor="password" className="">Password</label>
        <input className="rounded p-1  text-black" type="password" id="password" required />
        <input className="bg-green-700 rounded p-2 mt-5" type="submit" value="Login" />
      </form>
    </div>
  );
}