import { User, Package, Rocket } from "lucide-react";
import step1 from "../img/Group 6.png";
import step2 from "../img/Group 6 (1).png";
import step3 from "../img/Group 6 (2).png";

const Steps = () => {


  return (
    <section className="w-full bg-[#f5f6f8] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl  tracking-tight text-slate-900 font-bold md:text-5xl">
            Get Started In 3 Steps
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-14 grid  gap-6 md:grid-cols-3">
          <div className="relative cursor-pointer transition duration-300 hover:scale-105 rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm">
            <div className="absolute  flex h-8 w-8 right-4 top-4 justify-center items-center   rounded-full bg-violet-600 text-[11px] font-semibold text-white">
              01
            </div>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600">
              <img src={step1} alt="img1" />
            </div>

            <h3 className="mt-6 text-[30px] font-semibold leading-none text-slate-800 md:text-[28px]"></h3>
            <h3 className="mt-6 text-3xl font-semibold text-slate-800 sm:text-2xl">
              Create Account
            </h3>
            <p className="mx-auto mt-4 max-w-[240px] text-sm leading-6 text-slate-400">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          <div className="relative cursor-pointer transition duration-300 hover:scale-105 rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm">
            <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-[11px] font-semibold text-white">
              02
            </div>

            <div className="mx-auto justify-center flex h-16 w-16 items-center rounded-full bg-violet-100 text-violet-600">
              <img src={step2} alt="img2" />
            </div>

            <h3 className="mt-6 text-3xl font-semibold text-slate-800 sm:text-2xl">
              Choose Products
            </h3>
            <p className="mx-auto mt-4 max-w-[250px] text-sm leading-6 text-slate-400">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative cursor-pointer transition duration-300 hover:scale-105 rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm">
            <div className="absolute top-4 right-4  flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-[11px] font-semibold text-white">
              03
            </div>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600">
              <img src={step3} alt="img3" />
            </div>

            <h3 className="mt-6 text-3xl font-semibold text-slate-800 sm:text-2xl">
              Start Creating
            </h3>
            <p className="mx-auto mt-4 max-w-[250px] text-sm leading-6 text-slate-400">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;