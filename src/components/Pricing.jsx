import checkWhite from "../img/Vector (9).png";
import checkGreen from "../img/Vector (10).png";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for getting started",
      price: "$0",
      period: "/Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      featured: false,
    },
    {
      name: "Pro",
      subtitle: "Best for professionals",
      price: "$29",
      period: "/Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
      featured: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      subtitle: "For teams and businesses",
      price: "$99",
      period: "/Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      featured: false,
    },
  ];

  return (
    <section className="bg-[#f8f8fb] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-3 text-sm text-slate-500 md:text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={
              `
              relative rounded-2xl ${plan.featured ? "bg-gradient-to-b from-violet-600 to-fuchsia-600 p-[1px] shadow-xl" : "border border-slate-200 bg-white shadow-sm"
                }
                `
              }>
              <div className={
                `
                h-full rounded-2xl p-6 ${plan.featured ? "text-white" : "bg-white text-slate-900"
                  }
                  `
                }>
                {plan.badge && (
                  <span className="absolute -top-3 font-bold  text-4xl left-1/2 -translate-x-1/2 rounded-full  bg-green-600 px-5 py-2 text-[10px] font-medium text-gray-800">
                    {plan.badge}
                  </span>
                )}

                <h2 className="text-2xl font-semibold">{plan.name}</h2>

                <p className={`mt-1 text-sm ${plan.featured ? "text-white/80" : "text-slate-500"
                    }
                    `
                  }>
                    {plan.subtitle}
                </p>

                <div className="mt-5 flex items-end">
                  <span className="text-5xl font-bold leading-none"> {plan.price} </span>
                  <span className={
                    `
                  ml-1 text-base ${plan.featured ? "text-white/80" : "text-slate-400"
                      }
                      `
                    }>
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <img src={plan.featured ? checkWhite : checkGreen} alt="check" className="h-4 w-4 object-contain"/>
                      <span>{feature}</span>
                    </li>

                  ))}
                </ul>

                <div className="mt-8">
                  <button className={
                    `
                    w-full rounded-full cursor-pointer transition duration-300 hover:scale-105 py-3 text-sm font-medium transition ${plan.featured ? "bg-white text-violet-700 hover:bg-white/90" : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:opacity-95"
                      }
                      `
                    }>
                    {plan.name === "Starter"
                      ? "Get Started Free"
                      : plan.name === "Enterprise"
                        ? "Contact Sales"
                        : plan.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}