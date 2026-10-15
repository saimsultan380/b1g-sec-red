import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogFaqAccordion } from "@/components/blog/blog-faq-accordion";
import { ArrowRight } from "lucide-react";
import { getBlogPostPath } from "@/lib/blog";
import { ROUTES } from "@/lib/seo";

const quickChecks = [
  "Check whether the problem affects everything: Test several live channels and available on-demand titles.",
  "Check your account: Confirm that your B1G IPTV subscription is active.",
  "Restart the player: Close the app completely and open it again.",
  "Check the internet connection: Open another website or streaming service on the same device.",
  "Refresh your account or playlist: Use the refresh option available in your player.",
  "Contact your provider if the server appears unavailable: Ask whether there is a confirmed outage or an updated server address.",
];

const firestickSteps = [
  "Close B1G Player and reopen it.",
  "Restart your Firestick, Fire TV or Android TV device.",
  "Check that your device has an active internet connection.",
  "Open several channels instead of testing only one.",
  "Sign out and sign back in if the app supports it.",
  "Refresh the channel list or account data.",
  "Check for an available update from a trusted source.",
];

const notWorkingChecks = [
  "If other websites and apps work: Your general internet connection is probably available, but the B1G connection still needs checking.",
  "If B1G works on your phone but not your Firestick: Investigate the Firestick app, device compatibility, stored data, and network configuration.",
  "If B1G fails on several devices: Check the account status and ask your provider whether the server is experiencing a problem.",
  "If only a few channels fail: The affected streams may be unavailable even though the rest of the service works.",
];

const loginCauses = [
  "An incorrectly entered username or password.",
  "A server URL entered in the wrong field.",
  "An expired or inactive subscription.",
  "An account that has not finished activating.",
  "A connection limit being reached.",
  "A login format that your selected player does not support.",
];

const emptyListFixes = [
  "Confirm that you have signed into the correct account.",
  "Wait for the initial channel list to finish loading.",
  "Refresh the playlist or account data.",
  "Open another category to see whether the issue affects everything.",
  "Test several channels.",
  "Restart the player if the list remains empty.",
  "Contact your provider if the catalogue is still missing.",
];

const cloudflareChecks = [
  "Restart the application.",
  "Confirm that the device's date and time are correct.",
  "Check whether the problem occurs on another compatible device.",
  "Sign out and back in if the app supports this.",
  "Record the exact error message or code.",
  "Contact your provider if the error continues.",
];

const firestickVsMobileSteps = [
  "Restart the Firestick.",
  "Force-stop the app through the device settings.",
  "Check the app's available storage and permissions.",
  "Clear the cache if the device provides that option.",
  "Re-enter the login details if necessary.",
  "Ask support whether the current app version is supported.",
];

const windowsChecks = [
  "Whether the Windows player supports M3U or Xtream Codes.",
  "Whether the account details are correct.",
  "Whether the server address is valid.",
  "Whether your subscription is active.",
  "Whether Windows Firewall or security software is blocking the application.",
  "Whether the problem affects one stream or the entire playlist.",
];

const apkFixes = [
  "Check whether the file came from a verified source.",
  "Confirm that the package matches your device.",
  "Check the available storage.",
  "Review the device's installation permissions.",
  "Remove an older version only if you know how to reinstall and configure the application.",
  "Ask support for the correct installation instructions.",
];

const epgFixes = [
  "Allow the initial account or playlist update to finish.",
  "Look for a Refresh EPG or Update Guide option.",
  "Check whether the selected player supports the supplied guide format.",
  "If using an M3U playlist, check whether your provider supplied a separate EPG URL.",
  "Test another channel to see whether guide information is available there.",
];

const supportInfo = [
  "Your device model.",
  "Your operating system.",
  "The player or app name and version, if known.",
  "The exact error message.",
  "Whether all channels fail or only some.",
  "Whether the same account works on another compatible device.",
  "The troubleshooting steps you have already tried.",
];

const checklistRows = [
  {
    problem: "B1G Player down",
    first: "Test several channels and devices",
    next: "Check for a confirmed service issue",
  },
  {
    problem: "Server error",
    first: "Verify the supplied server URL",
    next: "Contact your provider",
  },
  {
    problem: "Invalid login",
    first: "Check credentials and account status",
    next: "Request an account check",
  },
  {
    problem: "Empty channel list",
    first: "Refresh the playlist",
    next: "Check account and source availability",
  },
  {
    problem: "Buffering",
    first: "Test Wi-Fi and other streams",
    next: "Improve the connection or report the issue",
  },
  {
    problem: "Cloudflare error",
    first: "Record the exact message",
    next: "Ask support about server access",
  },
  {
    problem: "Firestick app failure",
    first: "Restart and check the app",
    next: "Clear cache or check compatibility",
  },
  {
    problem: "Windows playback issue",
    first: "Check the desktop player's format support",
    next: "Verify M3U or Xtream Codes details",
  },
  {
    problem: "Missing EPG",
    first: "Refresh guide data",
    next: "Check guide support and availability",
  },
  {
    problem: "APK installation failure",
    first: "Confirm device compatibility and file source",
    next: "Follow verified installation guidance",
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
    question: "Is B1G Player down right now?",
    answer:
      "A failed connection does not confirm a service-wide outage. Test multiple channels, check another compatible device, and contact your provider for current server status. I cannot verify your individual account or live service state from this article.",
  },
  {
    question: "Why is B1G IPTV Player down on my Firestick?",
    answer:
      "Possible causes include an application issue, incorrect login details, an unavailable server, an expired account, or a device-specific problem. Restart the app, check your internet connection, and ask support if the issue continues.",
  },
  {
    question: "Why is B1G IPTV not working but other IPTV apps are?",
    answer:
      "Different applications may use different server settings, login methods, or cached account data. Check that your selected player supports the supplied credentials and that your subscription is active.",
  },
  {
    question: "Why does B1G Player keep changing or rejecting the server URL?",
    answer:
      "Your saved server address may be incorrect or outdated, or the provider may have changed the connection details. Ask your provider to verify the correct URL rather than trying random addresses.",
  },
  {
    question: "Why are B1G IPTV channels not loading?",
    answer:
      "Check your account, internet connection, and playlist first. If the entire catalogue is empty, refresh the account and contact support if the problem persists. If only one channel fails, that stream may be temporarily unavailable.",
  },
  {
    question: "Should I clear B1G Player app data?",
    answer:
      "Not as your first step. Restart the app and clear its cache if appropriate. Clearing app data can remove login details and settings, so make sure you can configure the account again before doing so.",
  },
  {
    question: "Can a VPN fix B1G IPTV Player problems?",
    answer:
      "Not always. A VPN can change your connection route, but it can also slow down playback. First, check the account, server, player, and normal internet connection. Follow applicable access restrictions.",
  },
  {
    question: "Is there a B1G free trial for testing problems?",
    answer:
      "A trial may be available for new customers, but it is not a guaranteed fix for an existing account. Contact the provider to confirm the current terms and availability before ordering.",
  },
  {
    question: "Is B1G Player the same as big player or B1GTV?",
    answer:
      "People may use search variations such as b1gplayer, big player, and bigtv when looking for B1G Player information. Confirm the exact application and its publisher before downloading anything.",
  },
  {
    question: "What should I search for if I need more troubleshooting help?",
    answer:
      "Search terms such as B1G Reddit, B1G IPTV Player Reddit, B1G Player server error, and B1G IPTV channels not loading may help you find related troubleshooting questions. Treat individual reports as unverified experiences, not proof of a current outage or an official fix.",
  },
  {
    question:
      "Does a B1G Player subscription guarantee uninterrupted playback?",
    answer:
      "No internet-based streaming service can guarantee that every stream will always work without interruption. Availability depends on the source, account, device, application, and internet connection.",
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

export function B1gIptvPlayerTroubleshootingArticle() {
  return (
    <div className="prose-blog space-y-6 sm:space-y-8">
      <p>
        Is B1G Player down, or is your B1G IPTV Player not working on your
        Firestick, Android TV, or other device? Before reinstalling the app or
        changing your settings, check what is actually causing the problem.
      </p>
      <p>
        Sometimes, the issue comes from the service or its server address. In
        other cases, the account details, IPTV player, internet connection, or
        device may be responsible.
      </p>
      <p>Start with these quick checks:</p>
      <BulletList items={quickChecks} />
      <p>
        If every channel fails on several devices, the issue may be broader than
        one application. However, it does not automatically mean the entire B1G
        service is down.
      </p>
      <p>
        Important: There is no reliable way to confirm a live outage from your
        device alone. Check with your provider before changing server settings
        or purchasing another subscription.
      </p>

      <h2>1. B1G IPTV Player Down on Firestick or Android TV</h2>
      <p>
        If B1G Player opens but nothing plays, first identify whether the
        problem affects one device or the entire account.
      </p>
      <p>Try the following steps:</p>
      <BulletList items={firestickSteps} />
      <p>
        If the app shows a server error or Cloudflare-related message,
        restarting the device may not solve the underlying problem.
      </p>
      <p>
        Ask your provider to confirm the correct server address and whether any
        service-side issue is affecting your account.
      </p>
      <p>
        Do not install a random replacement app just because someone recommends
        it online. A different app may use another login method, have different
        features or come from an unverified source.
      </p>

      <h2>2. B1G IPTV Not Working but Other Apps Work</h2>
      <p>
        Your internet connection may be working normally while B1G IPTV fails to
        connect.
      </p>
      <p>
        This can happen when the issue is specific to the IPTV account, server
        address, application, or stream.
      </p>
      <p>To narrow it down, check these points:</p>
      <BulletList items={notWorkingChecks} />
      <p>
        Testing the same account on another compatible device can help identify
        the problem. Only do this where your subscription and connection
        allowance permit it.
      </p>

      <h2>3. B1G IPTV Server Error or Server URL Not Working</h2>
      <p>
        A server error can prevent your player from loading the playlist or
        signing in.
      </p>
      <p>
        One possible cause is an outdated or incorrect server URL. An account
        may also be affected by a temporary server issue or an authentication
        problem.
      </p>
      <h3>How to fix a B1G server error</h3>
      <NumberedSteps
        steps={[
          {
            title: "Check the server URL",
            text: "Make sure the address matches the details supplied by your provider. Check for missing characters, incorrect ports, and accidental spaces.",
          },
          {
            title: "Check your login method",
            text: "Some players use Xtream Codes details, while others use an M3U playlist URL. Enter your credentials in the correct fields.",
          },
          {
            title: "Refresh the account",
            text: "If your application provides a refresh or reload option, use it and allow the process to finish.",
          },
          {
            title: "Ask about server changes",
            text: "If the address no longer works, contact your provider through a verified support channel. Ask whether your account requires updated connection details.",
          },
          {
            title: "Avoid guessing new URLs",
            text: "Do not rely on random server addresses posted on forums or supplied through unsolicited private messages. An unverified address may be unsafe or unrelated to your account.",
          },
        ]}
      />
      <p>
        If the correct details still fail, your provider may need to investigate
        the server or account.
      </p>

      <h2>4. B1G Player Login Failed or Invalid Credentials</h2>
      <p>
        If B1G Player displays an invalid username, password or login error,
        check your account information before reinstalling the application.
      </p>
      <p>Common causes include:</p>
      <BulletList items={loginCauses} />
      <h3>What should you do?</h3>
      <p>
        First, copy the supplied login details carefully. Check for spaces at
        the beginning or end of each field.
      </p>
      <p>
        Next, confirm that you are using the correct login method. If you
        received Xtream Codes details, use the corresponding option in your
        compatible player. If you received an M3U playlist, use the playlist
        option.
      </p>
      <p>
        If your subscription is active but login still fails, ask support to
        check the account and server details.
      </p>
      <p>
        Never publish your password or complete M3U playlist URL when asking for
        help.
      </p>

      <h2>5. B1G IPTV Channels Not Loading or Channel List Empty</h2>
      <p>
        Sometimes B1G Player opens successfully, but the channel categories are
        empty or the channels refuse to play.
      </p>
      <p>
        The problem may involve account synchronisation, playlist loading,
        source availability or the selected player.
      </p>
      <p>Try these fixes in order:</p>
      <BulletList items={emptyListFixes} />
      <p>
        If channels disappear after a refresh, do not immediately delete your
        account or reinstall the application. First confirm that you can access
        your login details and that your provider has not reported a service
        issue.
      </p>
      <h3>Why do some B1G channels work while others do not?</h3>
      <p>
        Individual streams can fail even when the rest of the service is
        available. The issue may relate to a particular source, programme, or
        temporary availability problem.
      </p>
      <p>
        If one channel fails repeatedly, note its name and report it to support.
        If all channels fail, investigate the account, server and application
        first.
      </p>

      <h2>6. B1G IPTV Buffering, Freezing or Constant Loading</h2>
      <p>
        Buffering happens when playback cannot receive or process the stream
        smoothly.
      </p>
      <p>
        Your broadband connection is one possible cause, but it is not the only
        one. Wi-Fi interference, device performance, household internet use and
        the source itself can also affect playback.
      </p>
      <h3>Try these buffering fixes</h3>
      <NumberedSteps
        steps={[
          {
            title: "Improve your Wi-Fi connection",
            text: "Move your device closer to the router or reduce obstacles between the device and router. Try Ethernet where supported. A wired connection can provide more consistent network performance.",
          },
          {
            title: "Pause other heavy internet activity",
            text: "Large downloads and other simultaneous streams may compete for bandwidth.",
          },
          {
            title: "Restart your device and router",
            text: "This can help when the local connection has become unstable.",
          },
          {
            title: "Test another channel",
            text: "If one stream buffers while several others play normally, the problem may be specific to that source.",
          },
          {
            title: "Choose a suitable picture quality",
            text: "If the player offers quality options, try a lower resolution to see whether playback improves.",
          },
          {
            title: "Check device performance",
            text: "Close unnecessary apps and make sure the device has enough free storage.",
          },
          {
            title: "A VPN is not a guaranteed fix",
            text: "It may improve routing in some circumstances, but it can also reduce speed or introduce another connection problem. Do not use one to bypass access restrictions.",
          },
        ]}
      />
      <p>
        If buffering continues across multiple devices and streams, ask your
        provider to investigate the account or service.
      </p>

      <h2>7. B1G Player Shows a Cloudflare Error</h2>
      <p>
        A Cloudflare message can indicate that a request is being blocked,
        challenged or affected by a server-side configuration issue. The exact
        meaning depends on the error displayed.
      </p>
      <p>Try these checks:</p>
      <BulletList items={cloudflareChecks} />
      <p>
        Do not assume that every Cloudflare error means the service is
        permanently down. It also does not mean your broadband is necessarily at
        fault.
      </p>
      <p>
        If the same message appears on several devices, ask your provider
        whether the server or authentication route is affected. Avoid repeatedly
        changing DNS, installing unofficial apps or trying random server URLs
        without a clear reason.
      </p>

      <h2>8. B1G Player Not Working on Firestick but Working on Mobile</h2>
      <p>
        When the same account works on a phone but not a Firestick, focus on the
        differences between the two devices.
      </p>
      <p>
        Check whether the Firestick application is up to date and whether the
        installed version is compatible with your device.
      </p>
      <p>Then:</p>
      <BulletList items={firestickVsMobileSteps} />
      <p>
        Clearing the cache is different from clearing app data. Clearing app
        data can remove saved accounts and settings, so use it only after
        confirming that you have the correct login details and know how to
        configure the app again.
      </p>
      <p>
        If the problem started immediately after an update, tell support which
        app version you are using.
      </p>

      <h2>9. B1G IPTV Player Not Working on Windows</h2>
      <p>
        If you are trying to use B1G IPTV on a Windows PC, remember that the
        Android B1G Player APK is not a native Windows application.
      </p>
      <p>
        You need a compatible desktop IPTV player that supports the login format
        supplied with your subscription.
      </p>
      <p>If the setup is not working, check:</p>
      <BulletList items={windowsChecks} />
      <p>
        Download desktop software only from a trusted source. Do not run an
        unknown executable or disable Windows security protections to make an
        unverified player work.
      </p>
      <p>
        For the full installation process, see our guide to{" "}
        <Link href={getBlogPostPath("b1g-player-for-windows")}>
          B1G Player for Windows
        </Link>
        .
      </p>

      <h2>10. B1G APK Will Not Install or Open</h2>
      <p>
        If you are searching for the B1G APK, first confirm that your device
        supports Android applications.
      </p>
      <p>
        An APK is an Android application package. It is not a Windows installer
        and cannot be installed directly on Samsung Tizen, LG webOS or Apple
        operating systems.
      </p>
      <p>If the APK will not install on a compatible Android device:</p>
      <BulletList items={apkFixes} />
      <p>
        Avoid APK files from unknown download websites. A file with the correct
        name is not automatically authentic or safe.
      </p>

      <h2>11. B1G IPTV Guide or EPG Not Loading</h2>
      <p>
        The Electronic Programme Guide, or EPG, displays programme information
        when the source and player support it.
      </p>
      <p>
        If channels play but the guide is empty, the problem may be limited to
        the programme data.
      </p>
      <p>Try the following:</p>
      <BulletList items={epgFixes} />
      <p>
        Not every channel includes complete programme data. An empty guide does
        not necessarily mean the entire subscription has stopped working.
      </p>

      <h2>12. B1G Player Down? When Should You Contact Support?</h2>
      <p>
        If the basic checks do not solve the issue, contact your provider
        instead of making repeated changes.
      </p>
      <p>
        Support can investigate account activation, server access, login
        problems and other issues that cannot be confirmed from your device
        alone.
      </p>
      <p>Include the following information in your request:</p>
      <BulletList items={supportInfo} />
      <p>
        Do not include your password, payment information or full playlist URL
        in a public message.
      </p>
      <p>
        If your provider is not responding, use a verified contact method and
        keep your order confirmation. Be cautious about anyone asking you to pay
        again or send sensitive account details to an unverified contact.
      </p>

      <h2>B1G IPTV Player Troubleshooting Checklist</h2>
      <p>
        Use this table to identify the next step without changing several
        settings at once.
      </p>

      <div className="not-prose overflow-x-auto rounded-[12px] border border-slate-200 my-6">
        <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 font-bold text-[#12141F]">Problem</th>
              <th className="px-4 py-3 font-bold text-[#12141F]">
                First thing to check
              </th>
              <th className="px-4 py-3 font-bold text-[#12141F]">Next step</th>
            </tr>
          </thead>
          <tbody>
            {checklistRows.map((row) => (
              <tr
                key={row.problem}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 font-semibold text-slate-800">
                  {row.problem}
                </td>
                <td className="px-4 py-3 font-semibold text-slate-600">
                  {row.first}
                </td>
                <td className="px-4 py-3 font-semibold text-slate-600">
                  {row.next}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>B1G Player Down: Frequently Asked Questions</h2>
      <BlogFaqAccordion items={faqs} />

      <h2>Need a B1G IPTV Subscription?</h2>
      <p>
        If you are new to B1G IPTV and want to check the available packages,
        visit the B1G IPTV UK subscription page.
      </p>
      <p>The listed plans include:</p>

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
        The 12-month plan provides 13 months of access at the advertised price,
        making it a lower-cost option per month for people who expect to use the
        service regularly.
      </p>
      <p>
        Before purchasing, confirm device compatibility, the supported player,
        the connection allowance and the current subscription terms. Ask about
        trial availability if you need to test your setup first.
      </p>
      <p>
        The best first step is to identify the cause of the problem. Check the
        player, account, server, and internet connection before replacing apps
        or purchasing another plan.
      </p>

      <div className="not-prose mt-8 rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 text-center">
        <p className="text-sm sm:text-base font-semibold text-slate-600 leading-relaxed mb-5 max-w-2xl mx-auto">
          Compare B1G IPTV packages or get help with setup and account issues.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={ROUTES.subscription}>
            <Button
              variant="primary"
              size="lg"
              className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm font-semibold"
            >
              <span>View Subscription Plans</span>
              <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
            </Button>
          </Link>
          <Link href={ROUTES.installation}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-[12px] border-slate-200 px-8 py-3.5 text-sm font-semibold"
            >
              Installation Guide
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
