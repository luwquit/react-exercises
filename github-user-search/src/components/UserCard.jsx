import formatName from "../utils/formatName";

export function UserCard({ data }) {
  if (!data) return;
  return (
    <div className="inline-block px-10 py-8 w-[950px] max-xlg:w-[600px] max-xs:w-[400px] outline-5 rounded-lg outline-slate-50 bg-slate-800">
      <div className="flex gap-20 max-xlg:gap-8 max-xs:flex-col">
        <div className="shrink-0 max-xs:m-auto max-xs:-mb-5">
          <img 
            src={data.avatar_url}
            className="size-[200px] max-xlg:size-[150px] object-cover rounded-full outline-7 outline-slate-800 shadow-[-20px_-15px_0_0_#f8fafc] box-border ml-5 mt-4 mr-2 mb-2"
          />
        </div>
        <div className="content-center min-w-0 grow">
          <h2 className="text-3xl max-xlg:text-2xl font-semibold border-3 rounded-sm w-full py-2">
            @{data.login}
          </h2>
          <div className="grid grid-cols-[100px_1fr] max-xlg:grid-cols-[60px_1fr] text-start w-full text-xl gap-y-3 pt-3 px-3 min-w-0">
            <h3 className="font-medium">name</h3>
            <h4 className="font-thin">{formatName(data.name)}</h4>
            <h3 className="font-medium">bio</h3>
            <h4 className="font-thin min-w-0 break-all">{data.bio ? data.bio : 'No bio yet'}</h4>
          </div>
        </div>
      </div>
      <div className="mt-6 relative">
        <div className="bg-slate-50 h-20 max-xs:h-50 w-[950px] max-xlg:w-[600px] max-xs:w-[400px] -inset-x-10 top-1/2 -translate-y-1/2 z-0 absolute "></div>
        <div className="text-slate-900 grid grid-cols-3 max-xs:grid-cols-1 max-xs:gap-y-2 gap-x-20 max-xlg:gap-x-10 px-5 max-xs:px-0.5 relative z-10">
          <div className="flex flex-col bg-slate-50 border-slate-900 border-3 rounded-lg py-5 max-xs:py-3 justify-center">
            <h3 className="text-2xl max-xlg:text-xl max-xs:text-lg font-bold mb-1">Followers</h3>
            <h4 className="text-lg max-xs:text-sm font-semibold">{data.followers}</h4>
          </div>
          <div className="flex flex-col bg-slate-50 border-slate-900 border-3 rounded-lg py-5 max-xs:py-3 justify-center">
            <h3 className="text-2xl max-xlg:text-xl max-xs:text-lg font-bold mb-1">Company</h3>
            <h4 className="text-lg max-xs:text-sm font-semibold">{data.company ? data.company : 'Unknown'}</h4>
          </div>
          <div className="flex flex-col bg-slate-50 border-slate-900 border-3 rounded-lg py-5 px-1 max-xs:py-3 justify-center">
            <h3 className="text-2xl max-xlg:text-xl max-xs:text-lg font-bold mb-1">Public Repositories</h3>
            <h4 className="text-lg max-xs:text-sm font-semibold">{data.public_repos}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}