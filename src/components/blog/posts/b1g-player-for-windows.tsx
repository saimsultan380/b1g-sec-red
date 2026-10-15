import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogFaqAccordion } from "@/components/blog/blog-faq-accordion";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const requirements = [
  "A Windows 10 or Windows 11 PC or laptop.",
  "A compatible IPTV player that supports M3U playlists or Xtream Codes.",
  "Active B1G IPTV account details supplied by your service provider.",
];

const playerFeatures = [
  "Xtream Codes API login",
  "M3U or M3U8 playlist URLs",
  "Live TV playback",
  "Electronic Programme Guide (EPG), where supported",
  "Full-screen viewing",
  "Categories and favourites, where available",
];

const safetyTips = [
  "Download applications from the Microsoft Store or the developer's verified website.",
  "Check the application name and publisher.",
  "Avoid modified APK files and unknown executable downloads.",
  "Do not disable Windows security protections just to install an unfamiliar player.",
  "Keep your subscription credentials private.",
  "Review any separate licence or activation fees charged by third-party applications.",
];

const windowsCompareRows = [
  {
    feature: "Compatible desktop IPTV players",
    win10: "Yes, depending on the app",
    win11: "Yes, depending on the app",
  },
  {
    feature: "M3U playlist support",
    win10: "Depends on the player",
    win11: "Depends on the player",
  },
  {
    feature: "Xtream Codes login",
    win10: "Depends on the player",
    win11: "Depends on the player",
  },
  {
    feature: "Android APK installation directly",
    win10: "Not natively",
    win11: "Not natively",
  },
  {
    feature: "EPG and channel categories",
    win10: "Depends on the player and source",
    win11: "Depends on the player and source",
  },
];

const plans = [
  { label: "1 month", price: "£10" },
  { label: "3 months", price: "£20" },
  { label: "6 months", price: "£30" },
  { label: "12 months plus 1 month free", price: "£45" },
];

const faqs = [
  {
    question: "Is B1G Player available for Windows?",
    answer:
      "The B1G Player Android application is not a native Windows program. Windows users can use a compatible desktop IPTV player with their B1G IPTV subscription, provided it supports the supplied login method.",
  },
  {
    question: "How do I download B1G Player on Windows 10?",
    answer:
      "Install a compatible Windows IPTV player through the Microsoft Store or its verified developer website. Then add your B1G IPTV account using the supported Xtream Codes or M3U method.",
  },
  {
    question: "How do I install B1G IPTV Player on Windows 11?",
    answer:
      "Download a compatible desktop IPTV application, install it and enter the account details provided by your subscription service. The exact steps depend on the application.",
  },
  {
    question: "Can I install the B1G APK on my Windows PC?",
    answer:
      "Not directly. An APK is an Android application package. Windows users should normally use a compatible desktop IPTV player instead of trying to install the APK as a Windows program.",
  },
  {
    question: "Should I use M3U or Xtream Codes?",
    answer:
      "Use the method your provider supplies and your player supports. Xtream Codes usually requires a server URL, username, and password. M3U setup requires a playlist URL or compatible playlist file.",
  },
  {
    question: "Why does my B1G IPTV playlist not load?",
    answer:
      "Common causes include incorrect login details, an expired subscription, a wrong server address, a network problem, or an unsupported playlist format. Check these items before reinstalling your player.",
  },
  {
    question: "Can I watch B1G IPTV in full screen on Windows?",
    answer:
      "Many desktop IPTV players support full-screen playback, but the feature depends on the selected application. Check its specifications before installing it.",
  },
  {
    question: "Does a B1G IPTV subscription include the Windows player?",
    answer:
      "Not necessarily. The subscription provides account access, while a compatible desktop player is a separate application. Some third-party players may charge their own fees.",
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

function NumberedSteps({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="space-y-4 my-5 list-none pl-0">
      {steps.map((step, idx) => (
        <li
          key={step.title}
          className="rounded-[12px] border border-slate-200 bg-slate-50/50 p-4 sm:p-5"
        >
          <p className="text-sm sm:text-base font-bold text-[#12141F] mb-1.5">
            <span className="text-[#E01E26] mr-2">
              {String(idx + 1).padStart(2, "0")}
            </span>
            {step.title}
          </p>
          <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function B1gPlayerForWindowsArticle() {
  return (
    <div className="prose-blog space-y-6 sm:space-y-8">
      <p>
        Watching B1G IPTV on a Windows PC or laptop is possible with a compatible
        IPTV player. However, you should first understand which application your
        device supports.
      </p>
      <p>
        The B1G Player app is designed for compatible Android and Fire TV
        devices. Windows users can access a compatible B1G IPTV subscription
        through a suitable desktop IPTV player that supports the supplied login
        method.
      </p>
      <p>
        This guide explains how to download B1G Player for Windows alternatives,
        install the correct application, add your B1G IPTV details and fix
        common setup problems. You will also learn the difference between M3U
        playlists and Xtream Codes login details.
      </p>

      <h2>Can You Use B1G Player for Windows?</h2>
      <p>
        The important thing to know is that the Android B1G Player APK is not a
        native Windows application. You cannot install an Android APK directly
        on Windows 10 or Windows 11 in the same way you install a normal desktop
        program.
      </p>
      <p>
        However, you can use your B1G IPTV subscription with a compatible
        Windows IPTV player if it supports the login format provided with your
        account.
      </p>
      <p>You generally need three things:</p>
      <BulletList items={requirements} />
      <p>
        The player handles the interface and playback. Your subscription
        provides the account access. These are separate components, so
        installing an IPTV player does not automatically provide channels or an
        active subscription.
      </p>

      <h2>How to Download B1G Player on Windows</h2>
      <p>
        If you are searching for how to download B1G Player on Windows, start by
        choosing a compatible desktop application rather than downloading an
        Android APK.
      </p>
      <p>Follow these steps.</p>
      <NumberedSteps
        steps={[
          {
            title: "Step 1: Check Your Windows Version",
            text: "Open Settings → System → About on your computer. Check whether you are running Windows 10 or Windows 11. Also, check your system type if the application has different installers for different architectures. Most importantly, download software that is compatible with your version of Windows.",
          },
          {
            title: "Step 2: Choose a Compatible IPTV Player",
            text: "Open the Microsoft Store or visit the official website of a trusted IPTV player. Choose an application that supports the login method supplied with your B1G IPTV subscription.",
          },
          {
            title: "Step 3: Download the Application",
            text: "If you choose a Microsoft Store application, open its listing and select Install. If you download an installer from a developer's website, verify the website and publisher before opening the file. Avoid unknown download sites, unofficial APK packages and installers that request unnecessary permissions.",
          },
          {
            title: "Step 4: Open the IPTV Player",
            text: "Launch the installed application. Depending on the software, you may see options such as Add Playlist, Add User, Xtream Codes API, M3U URL or Network Stream. Choose the option that matches your subscription details.",
          },
        ]}
      />
      <p>Look for support for:</p>
      <BulletList items={playerFeatures} />
      <p>
        Features vary between applications. Some desktop players support only
        playlist playback, while others offer dedicated live TV, film and series
        sections.
      </p>
      <p>
        You do not need to install the Android B1G Player APK directly on
        Windows to use a compatible desktop IPTV player.
      </p>

      <h2>How to Install B1G IPTV Player on Windows</h2>
      <p>
        Once the application is installed, the next step is to connect your B1G
        IPTV account.
      </p>
      <p>
        The exact menus depend on the player you select, but the general process
        is straightforward.
      </p>

      <h3>Method 1: Set Up B1G IPTV Using Xtream Codes</h3>
      <p>Xtream Codes login usually uses three details:</p>
      <BulletList
        items={["Server URL", "Username", "Password"]}
      />
      <p>To configure your account:</p>
      <NumberedSteps
        steps={[
          {
            title: "Open your Windows IPTV player",
            text: "Select the option for Xtream Codes API or a similar account login.",
          },
          {
            title: "Enter your account details",
            text: "Enter the server URL provided by your subscription service, then enter your username and password.",
          },
          {
            title: "Save and test playback",
            text: "Save the account details, wait for the player to load the available categories and programme information, then open a channel and test playback.",
          },
        ]}
      />
      <p>
        Make sure you enter the server URL exactly as supplied. Do not
        substitute a website homepage for the server address.
      </p>
      <p>
        If your provider supplies Xtream Codes credentials, this method can be
        easier to manage than manually entering a long playlist URL.
      </p>

      <h3>Method 2: Set Up B1G IPTV Using an M3U Playlist</h3>
      <p>
        Some providers supply an M3U or M3U8 playlist instead of separate Xtream
        Codes fields.
      </p>
      <p>
        An M3U playlist contains references to media streams and may include
        channel information. The player reads the playlist and displays the
        available content it can access.
      </p>
      <p>To add it:</p>
      <NumberedSteps
        steps={[
          {
            title: "Open your Windows IPTV application",
            text: "Select Add Playlist or Load M3U URL.",
          },
          {
            title: "Enter or select the playlist",
            text: "Enter the complete playlist URL supplied with your subscription. If the provider supplies a local playlist file, select the file instead.",
          },
          {
            title: "Save and test streams",
            text: "Save the playlist, wait for the channels to load, then test several streams.",
          },
        ]}
      />
      <p>
        If the provider also supplies a separate EPG URL, check whether your
        selected player allows you to add it.
      </p>
      <p>
        Important: Do not share your M3U URL publicly. Some playlist links
        contain account credentials and may allow other people to access your
        subscription.
      </p>

      <h2>How to Download B1G IPTV Player on Windows Safely</h2>
      <p>
        Before downloading an application, check whether it is actually intended
        for Windows.
      </p>
      <p>
        An Android APK and a Windows installer are different file types. An APK
        is designed for Android, while a Windows desktop application normally
        uses a Windows-compatible installer or package.
      </p>
      <p>For a safer setup:</p>
      <BulletList items={safetyTips} />
      <p>
        If you cannot find a verified native Windows version of B1G Player, use
        a compatible desktop IPTV player instead.
      </p>

      <h2>B1G IPTV on Windows 10 and Windows 11</h2>
      <p>
        The basic setup process is similar on both operating systems.
      </p>

      <div className="not-prose overflow-x-auto rounded-[12px] border border-slate-200 my-6">
        <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 font-bold text-[#12141F]">Feature</th>
              <th className="px-4 py-3 font-bold text-[#12141F]">
                Windows 10
              </th>
              <th className="px-4 py-3 font-bold text-[#12141F]">
                Windows 11
              </th>
            </tr>
          </thead>
          <tbody>
            {windowsCompareRows.map((row) => (
              <tr
                key={row.feature}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 font-semibold text-slate-800">
                  {row.feature}
                </td>
                <td className="px-4 py-3 font-semibold text-slate-600">
                  {row.win10}
                </td>
                <td className="px-4 py-3 font-semibold text-slate-600">
                  {row.win11}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Your computer&apos;s hardware and internet connection also affect
        playback. A newer Windows version alone does not guarantee smoother
        streaming.
      </p>

      <h2>B1G Player for Windows Not Working? Try These Fixes</h2>
      <p>
        If your B1G IPTV setup fails, work through these checks before
        reinstalling the application.
      </p>
      <NumberedSteps
        steps={[
          {
            title: "Check Your Login Details",
            text: "A single typing mistake can prevent the account from connecting. Check the username, password and server URL. Watch for missing characters, spaces or incorrect punctuation.",
          },
          {
            title: "Confirm Your Subscription Is Active",
            text: "An expired account or an account that has not been activated may fail to load content. Contact your provider if you are unsure about its status.",
          },
          {
            title: "Test Your Internet Connection",
            text: "Open a few websites and check whether your connection is stable. If other services also load slowly, troubleshoot your internet connection first.",
          },
          {
            title: "Try the Correct Login Method",
            text: "If your provider gave you a username, password and server URL, try the Xtream Codes option when your player supports it. If you received an M3U URL, use the playlist option instead. Do not treat the two methods as interchangeable unless your provider confirms that they are.",
          },
          {
            title: "Check the Server Address",
            text: "Make sure you are using the exact server address provided for your account. A general website address may not work as a login server.",
          },
          {
            title: "Refresh the Playlist",
            text: "If you can sign in but the channel list is empty or outdated, refresh the playlist or reload the account. Allow enough time for a large catalogue to load.",
          },
          {
            title: "Restart the Application",
            text: "Close the player completely and reopen it. If necessary, restart your PC and check for application updates.",
          },
          {
            title: "Test Another Available Channel",
            text: "If only one channel fails, the problem may relate to that particular stream rather than your entire account.",
          },
        ]}
      />
      <p>
        If none of these steps works, contact support with the player name,
        Windows version and exact error message. Never send your password or
        full playlist URL in a public post.
      </p>

      <h2>What Can You Watch with B1G IPTV on Windows?</h2>
      <p>
        The available content depends on your active subscription and the
        capabilities of your selected player.
      </p>
      <p>
        The advertised B1G IPTV catalogue includes live television, sports,
        films, TV series, news and entertainment categories. Programme guides
        and Catch-Up features depend on whether the source supplies the
        necessary information and whether your player supports it.
      </p>
      <p>
        For the best experience, choose a player that suits how you watch.
      </p>
      <p>
        For example, a dedicated IPTV application may be more convenient if you
        want channel categories, an EPG and favourites in one interface. A basic
        media player may be sufficient if you only need to open a compatible M3U
        stream.
      </p>
      <p>
        Picture quality depends on the available stream, computer performance,
        display and network connection. HD or 4K playback is not guaranteed for
        every channel.
      </p>

      <h2>Get Your B1G IPTV Subscription for Windows</h2>
      <p>
        Once you have confirmed that your Windows player supports your
        account&apos;s login method, you can choose the B1G IPTV subscription
        that fits your needs.
      </p>
      <p>The available plans on the B1G IPTV UK page are:</p>

      <div className="not-prose overflow-x-auto rounded-[12px] border border-slate-200 my-6">
        <table className="w-full min-w-[320px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 font-bold text-[#12141F]">Plan</th>
              <th className="px-4 py-3 font-bold text-[#12141F]">Price</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr
                key={plan.label}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 font-semibold text-slate-800">
                  {plan.label}
                </td>
                <td className="px-4 py-3 font-bold text-[#E01E26]">
                  {plan.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        The annual package provides 13 months of access for £45, which works out
        at approximately £3.46 per month of access. It may offer better value
        for regular viewers who have already confirmed that their device and
        player work correctly.
      </p>
      <p>
        All plans should be checked against the current offer before purchase.
        The standard package includes one active connection unless the order
        states otherwise.
      </p>
      <p>
        If you have not tested compatibility, ask whether a trial is available
        before committing to a longer plan.
      </p>
      <p>
        Ready to get started? Visit the B1G IPTV UK subscription page to compare
        the packages, review the account details and choose your subscription.
      </p>

      <div className="not-prose my-8">
        <Link href={ROUTES.subscription}>
          <Button
            variant="primary"
            className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-6 py-3 text-sm font-semibold"
          >
            <span>View B1G IPTV Subscription Plans</span>
            <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
          </Button>
        </Link>
      </div>

      <h2>Frequently Asked Questions</h2>
      <BlogFaqAccordion items={faqs} />

      <h2>Final Thoughts</h2>
      <p>
        You can use B1G IPTV on a Windows PC without installing the Android B1G
        Player APK directly. The practical approach is to download a compatible
        desktop IPTV player, add your supplied account details, and test
        playback.
      </p>
      <p>
        Check your login method, protect your credentials, and confirm device
        compatibility before purchasing a longer subscription.
      </p>
      <p>
        If everything works as expected, compare the available packages on the
        B1G IPTV UK website and choose the plan that best matches your viewing
        needs.
      </p>

      <div className="not-prose mt-8 rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 text-center">
        <p className="text-sm sm:text-base font-semibold text-slate-600 leading-relaxed mb-5 max-w-2xl mx-auto">
          Compare B1G IPTV packages and choose the plan that fits your Windows
          setup.
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
