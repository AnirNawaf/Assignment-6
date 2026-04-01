const Stats = () => {
  return (
    <div className="bg-[linear-gradient(to_right,#7c3aed_70%,#a855f7_100%,#ec4899_100%)] text-white grid grid-cols-3 text-center py-8">
      
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">50K+</h2>
        <p className="text-sm mt-1 text-purple-200 ">Active Users</p>
      </div>

      <div className="flex flex-col items-center border-l border-r border-white/20">
        <h2 className="text-3xl font-bold">200+</h2>
        <p className="text-sm  mt-1 text-purple-200">Premium Tools</p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">4.9</h2>
        <p className="text-sm mt-1 text-purple-200">Rating</p>
      </div>

    </div>
  );
};


export default Stats;