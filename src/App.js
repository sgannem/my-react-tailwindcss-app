
function App() {
  return (
    <div className="App">
      <div class="min-h-screen flex items-center justify-center bg-blue-400">
      <div class="bg-white p-8 rounded shadow-xl2 w-2/3">
      <h2 class="text-3xl font-bold mb-10 text-grey-800">Create Your Account</h2>
       
        <form class="space-y-4">
          <div>
            <label class="block mb-2 font-bold text-grey-500">Name</label>
            <input type="text" class="w-full border-2 border-grey-200 p-3 rounded outline-none focus:border-purple-500"/>
          </div>
          <div>
            <label class="block mb-2 font-bold text-grey-500">Email</label>
            <input class="w-full border-2 border-grey-200 p-3 rounded outline-none focus:border-purple-500" type="email"/>
          </div>
          <div>
            <label class="block mb-2 font-bold text-grey-500">Password</label>
            <input class="w-full border-2 border-grey-200 p-3 rounded outline-none focus:border-purple-500" type="password"/>
          </div>
            <div class="flex items-center">
            <input type="checkbox" id="agree"/>
            <label for="agree" class="ml-2 text-grey-700 text-sm">I agree terms and conditions</label>
          </div>
          <button class="block w-full bg-yellow-400 hover:bg-yellow-300 rounded p-4 text-yellow-900 hover:text-yellow-800 transition duration-300">Sign up</button>
        </form>

      </div>
      </div>
    </div>
  );
}

export default App;
