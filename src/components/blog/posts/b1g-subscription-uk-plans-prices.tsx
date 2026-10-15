import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogFaqAccordion } from "@/components/blog/blog-faq-accordion";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const planRows = [
  {
    plan: "1 month",
    price: "£10",
    period: "1 month",
    monthly: "£10.00",
  },
  {
    plan: "3 months",
    price: "£20",
    period: "3 months",
    monthly: "£6.67",
  },
  {
    plan: "6 months",
    price: "£30",
    period: "6 months",
    monthly: "£5.00",
  },
  {
    plan: "12 months + 1 free",
    price: "£45",
    period: "13 months",
    monthly: "£3.46",
  },
];

const catalogueItems = [
  "Live television channels",
  "Films and TV series",
  "Sports and entertainment categories",
  "News and documentaries",
  "Electronic Programme Guide (EPG), where available",
  "Selected Catch-Up content",
  "SD, HD, Full HD and selected 4K streams, where supported",
];

const includedItems = [
  "More than 35,000 live television channels",
  "More than 50,000 films",
  "More than 10,000 TV series",
  "Sports, entertainment and international categories",
  "EPG information where supplied",
  "Selected Catch-Up where available",
  "Available SD, HD, Full HD and 4K sources",
  "Account and installation assistance",
];

const faqs = [
  {
    question: "What is the price of a B1G subscription in the UK?",
    answer:
      "The listed plans cost £10 for one month, £20 for three months, £30 for six months, and £45 for 12 months plus one free month. Check the website for current prices before ordering.",
  },
  {
    question:
      "What is the difference between a B1G subscription and a B1G IPTV subscription?",
    answer:
      "These terms generally refer to the paid account that provides access to the B1G IPTV service. B1G Player is the viewing application used with that account.",
  },
  {
    question: "How much does a B1G Player subscription cost?",
    answer:
      "The listed subscription options range from £10 for one month to £45 for 13 months of access. Third-party player fees, if applicable, may be separate.",
  },
  {
    question: "Which B1G IPTV subscription offers the best value?",
    answer:
      "The 12-month plan with one additional month free offers the lowest effective monthly cost among the listed plans. It costs £45 for 13 months, or approximately £3.46 per month of access.",
  },
  {
    question: "Does the B1G annual plan include extra channels?",
    answer:
      "No additional catalogue or higher picture quality is promised solely because you choose a longer duration. Standard plans include the same core service, while actual availability can change.",
  },
  {
    question: "Can I use my B1G subscription on more than one device?",
    answer:
      "Your account may be saved on compatible personal devices, but the standard plan permits one active stream at a time. Ask support about multi-connection options if you need simultaneous playback.",
  },
  {
    question: "Can I test a B1G IPTV subscription before buying?",
    answer:
      "A trial may be available to check compatibility and playback. Contact support to confirm the current availability, duration, and conditions.",
  },
  {
    question: "Does a B1G subscription renew automatically?",
    answer:
      "Do not assume automatic renewal. Check the terms supplied with your order and confirm whether any recurring payment arrangement applies.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 my-5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">
            •
          </span>
          <span className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function B1gSubscriptionUkPlansPricesArticle() {
  return (
    <div className="prose-blog space-y-6 sm:space-y-8">
      <p>
        Choosing a B1G subscription starts with understanding the available
        plans, what each package includes, and how long you want access. If you
        are looking for a B1G IPTV subscription in the UK, you can choose a
        short-term plan or save more over the full subscription period with a
        longer package.
      </p>
      <p>
        A B1G Player subscription gives you account access through the supported
        viewing application. You receive private login details and setup
        guidance, so you can configure the service on a compatible device.
      </p>
      <p>
        The available plans start at £10. However, the lowest-priced option is
        not always the most economical choice for regular viewers. The 12-month
        plan with one additional month free offers 13 months of access for £45.
      </p>
      <p>
        This guide explains the plans, compares their costs, and helps you decide
        which B1G subscription suits your viewing needs.
      </p>

      <h2>What Is a B1G Subscription?</h2>
      <p>
        A B1G subscription provides access to the B1G IPTV service through a
        compatible viewing application. B1G Player is the application, while the
        subscription provides the account credentials needed to access the
        available content.
      </p>
      <p>
        Once your account is activated, you can enter your supplied username,
        password and server address in the appropriate player. The available
        catalogue is then organised into categories, depending on your device,
        application and subscription access.
      </p>
      <p>The advertised service catalogue includes:</p>
      <BulletList items={catalogueItems} />
      <p>
        Actual availability can vary by source, programme, device and internet
        connection.
      </p>
      <p>
        If you are comparing a B1G IPTV subscription with other options, check
        the complete package details rather than relying only on the advertised
        channel count.
      </p>

      <h2>B1G IPTV Subscription Plans and Prices</h2>
      <p>
        The right plan depends on your budget and how long you expect to use the
        service. All four standard plans offer the same core service, with the
        main differences being the subscription duration and total price.
      </p>

      <div className="not-prose overflow-x-auto rounded-[12px] border border-slate-200 my-6">
        <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 font-bold text-[#12141F]">
                B1G subscription plan
              </th>
              <th className="px-4 py-3 font-bold text-[#12141F]">Total price</th>
              <th className="px-4 py-3 font-bold text-[#12141F]">
                Access period
              </th>
              <th className="px-4 py-3 font-bold text-[#12141F]">
                Approx. monthly cost
              </th>
            </tr>
          </thead>
          <tbody>
            {planRows.map((row) => (
              <tr
                key={row.plan}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 font-semibold text-slate-800">
                  {row.plan}
                </td>
                <td className="px-4 py-3 font-bold text-[#E01E26]">
                  {row.price}
                </td>
                <td className="px-4 py-3 font-semibold text-slate-600">
                  {row.period}
                </td>
                <td className="px-4 py-3 font-semibold text-slate-600">
                  {row.monthly}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>1. One-Month B1G Subscription: £10</h3>
      <p>
        A one-month B1G subscription suits people who want short-term access. It
        lets you try the service without committing to several months at once.
      </p>
      <p>This option may suit you if:</p>
      <BulletList
        items={[
          "You prefer a short commitment.",
          "You want to check device compatibility.",
          "You are unsure how often you will watch.",
          "You want to evaluate the service before choosing a longer plan.",
        ]}
      />
      <p>
        The main drawback is the cost over time. If you continue renewing every
        month, you will pay more than you would for a longer package.
      </p>

      <h3>2. Three-Month B1G IPTV Subscription: £20</h3>
      <p>
        The three-month plan offers a middle ground between flexibility and
        value.
      </p>
      <p>
        At £20 for three months, the effective cost is about £6.67 per month. It
        reduces the need to renew every month while keeping the commitment
        relatively short.
      </p>
      <p>
        It may suit regular viewers who are not yet ready to choose a full-year
        package.
      </p>

      <h3>3. Six-Month B1G Subscription: £30</h3>
      <p>
        The six-month plan is designed for people who expect to use the service
        regularly.
      </p>
      <p>
        At £30 for six months, the effective monthly cost falls to £5. You also
        have fewer renewal decisions to manage compared with a monthly plan.
      </p>
      <p>
        Before selecting this option, check that your device supports the
        required player and that the available content meets your needs.
      </p>

      <h3>4. Twelve Months Plus One Month Free: £45</h3>
      <p>
        Looking for the lowest effective monthly cost? The 12-month B1G IPTV
        subscription with one extra month free is the strongest value option
        among the listed standard plans.
      </p>
      <p>
        You pay £45 once for 13 months of account access. This works out at
        approximately £3.46 per month of access.
      </p>
      <p>Here is why regular viewers may prefer this package:</p>
      <BulletList
        items={[
          "13 months of access: You receive 12 months plus one additional month.",
          "Lower effective monthly cost: It costs less per month of access than the shorter plans.",
          "Fewer renewal decisions: You do not need to arrange a new subscription every few months.",
          "The same core service: The longer duration does not mean you are promised extra channels or higher picture quality.",
          "Convenient long-term access: It suits people who have already checked compatibility and expect to use the service regularly.",
        ]}
      />
      <p>
        For comparison, purchasing twelve separate one-month plans would cost
        £120 over twelve months. The £45 package provides 13 months for £75 less
        than that twelve-month monthly-renewal comparison.
      </p>
      <p>
        The comparison assumes the listed prices remain unchanged and that you
        would otherwise purchase a new one-month plan each month.
      </p>
      <p>
        If you already know the service works on your device, the annual option
        deserves serious consideration.
      </p>

      <div className="not-prose my-8">
        <Link href={ROUTES.subscription}>
          <Button
            variant="primary"
            className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-6 py-3 text-sm font-semibold"
          >
            <span>View the B1G IPTV Subscription Plans</span>
            <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
          </Button>
        </Link>
      </div>

      <h2>Which B1G Player Subscription Should You Choose?</h2>
      <p>
        The best B1G Player subscription depends on your circumstances, not
        simply the length of the package.
      </p>
      <p>
        Choose the one-month option if flexibility matters most. Consider three
        months if you want a short commitment at a lower effective monthly cost.
        The six-month plan suits regular viewers who want a balance between
        flexibility and savings.
      </p>
      <p>
        The 12-month-plus-one-free plan is worth considering if you expect to
        use the service throughout the year.
      </p>
      <p>Before paying, ask yourself three questions:</p>
      <BulletList
        items={[
          "Does the required player work on my device?",
          "Does the available catalogue meet my viewing needs?",
          "Am I comfortable paying for the full subscription period upfront?",
        ]}
      />
      <p>
        If you cannot answer these questions confidently, ask about trial
        availability or start with a shorter plan.
      </p>

      <h2>What Is Included with a B1G IPTV Subscription?</h2>
      <p>
        The advertised standard packages include the same core service, private
        account details, and setup guidance.
      </p>
      <p>The wider advertised catalogue includes:</p>
      <BulletList items={includedItems} />
      <p>
        These figures describe the advertised wider catalogue. They do not
        guarantee that every channel, title or programme will always be
        available.
      </p>
      <p>
        Picture quality also depends on the original stream, device capabilities
        and internet connection.
      </p>
      <p>
        A standard plan includes one active stream at a time. Saving your
        account on multiple devices does not automatically allow simultaneous
        playback on all of them. Contact support before ordering if you need
        multiple active connections.
      </p>

      <h2>How to Get Started with Your B1G Subscription</h2>
      <p>Getting started involves a few straightforward steps.</p>

      <ol className="space-y-4 my-5 list-none pl-0">
        {[
          {
            title: "Step 1: Check your device",
            text: "Confirm the manufacturer, model, and operating system of your Firestick, Fire TV, Android TV, or other compatible device.",
          },
          {
            title: "Step 2: Select your plan",
            text: "Compare the available durations and decide whether you prefer short-term access or the 13-month package.",
          },
          {
            title: "Step 3: Complete your order",
            text: "Review the total price, subscription duration, and connection allowance before paying.",
          },
          {
            title: "Step 4: Receive your account details",
            text: "Keep your username, password, and server address private.",
          },
          {
            title: "Step 5: Install the correct player",
            text: "Use the supported installation method for your device. Samsung, LG and Apple devices may require a compatible third-party player rather than the Android application.",
          },
          {
            title: "Step 6: Sign in and test playback",
            text: "Enter the supplied details carefully. Allow the initial catalogue and programme guide to load, then test several channels and on-demand items.",
          },
        ].map((step, idx) => (
          <li
            key={step.title}
            className="rounded-[12px] border border-slate-200 bg-slate-50/50 p-4 sm:p-5"
          >
            <p className="text-sm sm:text-base font-bold text-[#12141F] mb-1.5">
              <span className="text-[#E01E26] mr-2">{String(idx + 1).padStart(2, "0")}</span>
              {step.title}
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
      <p>
        A trial may be available for compatibility testing. Confirm the current
        conditions with support before choosing a longer subscription.
      </p>

      <h2>Is the Annual B1G IPTV Subscription Worth It?</h2>
      <p>
        For regular viewers, the annual package can offer a better balance of
        cost and convenience.
      </p>
      <p>
        The £45 plan provides 13 months of access, which brings the effective
        monthly cost to around £3.46. By comparison, the six-month plan costs £5
        per month of access, while the one-month plan costs £10 per month.
      </p>
      <p>
        However, a longer plan is not automatically the right choice for
        everyone.
      </p>
      <p>
        If you have not tested the service, a shorter subscription or available
        trial may be a sensible starting point. If you have confirmed that your
        device works, your connection is stable and the available catalogue
        meets your needs, the annual plan may offer better value.
      </p>
      <p>
        Remember to check the current package terms, trial conditions and refund
        policy before purchasing.
      </p>

      <h2>Frequently Asked Questions</h2>
      <BlogFaqAccordion items={faqs} />

      <h2>Choose Your B1G IPTV Subscription</h2>
      <p>
        If you want short-term access, the monthly plan gives you flexibility.
        If you watch regularly and have already checked compatibility, the
        12-month B1G IPTV subscription with one month free offers the lowest
        effective monthly cost among the listed packages.
      </p>
      <p>
        You get 13 months of access for £45, with the same core service and one
        active connection.
      </p>
      <p>
        Check the available plans, confirm that your device is compatible, and
        choose the duration that fits your needs.
      </p>

      <div className="not-prose mt-8 rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 text-center">
        <p className="text-sm sm:text-base font-semibold text-slate-600 leading-relaxed mb-5 max-w-2xl mx-auto">
          Explore B1G Subscription Plans and Choose Your Package
        </p>
        <Link href={ROUTES.subscription}>
          <Button
            variant="primary"
            size="lg"
            className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm font-semibold"
          >
            <span>Explore B1G Subscription Plans</span>
            <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
