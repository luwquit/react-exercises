export function UserCard() {
  return (
    <div className="inline-block px-10 py-8 w-[950px] outline-5 rounded-lg outline-slate-50">
      <div className="flex gap-20">
        <div>
          <img 
            src="user-pfp.jpg"
            className="size-[200px] object-cover rounded-full outline-7 outline-slate-900 shadow-[-20px_-15px_0_0_#f8fafc] box-border ml-5 mt-4 mr-2 mb-2"
          />
        </div>
        <div className="content-center">
          <h2 className="text-3xl font-semibold border-3 rounded-sm w-xl py-2">
            @username
          </h2>
          <div className="grid grid-cols-[100px_1fr] text-start w-xl text-xl gap-y-3 pt-3 px-3">
            <h3 className="font-medium">name</h3>
            <h4 className="font-thin">Alexa Demi</h4>
            <h3 className="font-medium">bio</h3>
            <h4 className="font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae officiis laudantium suscipit neque, incidunt ullam eligendi!</h4>
          </div>
        </div>
      </div>
      <div className="mt-6 relative">
        <div className="bg-slate-50 h-20 w-[950px] -inset-x-10 top-1/2 -translate-y-1/2 z-0 absolute "></div>
        <div className="text-slate-900 grid grid-cols-3 gap-x-20 px-5 relative z-10">
          <div className="flex flex-col bg-slate-50 border-slate-900 border-3 rounded-lg py-5">
            <h3 className="text-2xl font-bold mb-1">Followers</h3>
            <h4 className="text-lg font-semibold">123</h4>
          </div>
          <div className="flex flex-col bg-slate-50 border-slate-900 border-3 rounded-lg py-5">
            <h3 className="text-2xl font-bold mb-1">Followers</h3>
            <h4 className="text-lg font-semibold">123</h4>
          </div>
          <div className="flex flex-col bg-slate-50 border-slate-900 border-3 rounded-lg py-5">
            <h3 className="text-2xl font-bold mb-1">Followers</h3>
            <h4 className="text-lg font-semibold">123</h4>
          </div>
        </div>
      </div>
    </div>
  );
}