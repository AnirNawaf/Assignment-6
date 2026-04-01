export default function CTASection() {
  return (
    <section className="w-full py-20  ">
      <div className="mx-auto ">
        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-16 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mt-4 text-sm text-white/80 md:text-base">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>

          <div className="mt-8 flex flex-col items-center  gap-4 justify-center sm:flex-row">
            <button className="cursor-pointer transition duration-300 hover:scale-105 rounded-full bg-white px-6 py-3 text-sm font-medium text-violet-700 hover:bg-white/90">
              Explore Products
            </button>

            <button className="cursor-pointer transition duration-300 hover:scale-105 rounded-full border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
              View Pricing
            </button>
          </div>

          <p className="mt-6 text-xs text-white/70">
            14-day free trial • No credit card required •  Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
