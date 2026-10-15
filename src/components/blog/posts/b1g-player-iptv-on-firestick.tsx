import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogFaqAccordion } from "@/components/blog/blog-faq-accordion";
import { ArrowRight } from "lucide-react";
import { getBlogPostPath } from "@/lib/blog";
import { ROUTES } from "@/lib/seo";

const beforeYouBegin = [
  "Compatible Firestick: Your device must support the installation method you plan to use.",
  "Internet connection: Connect your Firestick to a reliable Wi-Fi network.",
  "Downloader app: You may need Downloader to install an APK from a trusted source.",
  "B1G Player installation file: Use the current installation instructions provided on the B1G Player installation guide.",
  "Active B1G IPTV account: Keep your username, password, and server URL ready if your account uses these details.",
];

const installErrorFixes = [
  "Check the available storage on your Firestick.",
  "Confirm that the APK is intended for a compatible device.",
  "Review the installation permission for Downloader.",
  "Restart your Firestick and try again.",
  "Contact support if the error continues.",
];

const testChecks = [
  "The app opens without errors.",
  "Your account is accepted.",
  "Channel categories appear correctly.",
  "Playback starts and continues smoothly.",
  "Programme guide information appears where supported.",
];

const loginFields = [
  {
    field: "Name",
    value: "A label of your choice, such as Living Room",
  },
  {
    field: "Username",
    value: "The username supplied with your account",
  },
  {
    field: "Password",
    value: "The password supplied with your account",
  },
  {
    field: "Server URL",
    value: "The complete server address supplied by your provider",
  },
];

const termDefinitions = [
  {
    term: "B1G Player",
    meaning:
      "The application used to access an account through a compatible device.",
  },
  {
    term: "B1G IPTV",
    meaning: "The IPTV service or account you use with a compatible player.",
  },
  {
    term: "B1G IPTV APK",
    meaning:
      "The Android application installation file, where the relevant version is supplied as an APK.",
  },
  {
    term: "B1G Player on Firestick",
    meaning:
      "The app installed on a compatible Fire TV device and configured with supported account details.",
  },
];

const faqs = [
  {
    question: "How do I download B1G Player on Firestick?",
    answer:
      "Install Downloader if it is available for your device, verify the current B1G Player download address or code in the installation guide, and follow the Fire TV installation prompts. Then open the app and enter your supported account details.",
  },
  {
    question: "How do I install B1G IPTV on Firestick?",
    answer:
      "First, install a compatible B1G Player application using a trusted installation source. Next, open the player, enter your active B1G IPTV login details, and wait for the available content to load.",
  },
  {
    question: "Can I install B1G IPTV using Downloader?",
    answer:
      "Yes, if your Fire TV model supports the required installation method and the application is available from a trusted source. Verify the download address or code before using it.",
  },
  {
    question: "Is B1G Player free to download?",
    answer:
      "The cost of downloading the application and the cost of accessing an IPTV service are separate matters. Check the current app terms and your provider's subscription details to confirm any charges.",
  },
  {
    question: "Why is B1G Player not working on my Firestick?",
    answer:
      "Common causes include an incompatible app version, incorrect login details, an inactive account, weak internet, or a server issue. Check the error message and test the connection before reinstalling the app.",
  },
  {
    question: "Can I use B1G IPTV on Firestick 4K and 4K Max?",
    answer:
      "Compatibility depends on the exact device and application version. Check the supported models and installation options before downloading the APK.",
  },
  {
    question: "Do I need a B1G IPTV subscription to use B1G Player?",
    answer:
      "You need valid access details if you want to watch subscription-based content through the service. Installing the player alone does not activate an IPTV account.",
  },
  {
    question: "What should I do if B1G IPTV keeps buffering on Firestick?",
    answer:
      "Check your Wi-Fi signal, restart the router and Firestick, close unnecessary apps, and test another available channel. If the problem continues across channels, ask your provider to check the service or account.",
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
  steps: { title: string; text: ReactNode }[];
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
          <div className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            {step.text}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function B1gPlayerIptvOnFirestickArticle() {
  return (
    <div className="prose-blog space-y-6 sm:space-y-8">
      <p>
        If you want to install B1G Player on Firestick, you need a compatible
        Fire TV device, a stable internet connection, the correct installation
        file, and valid login details. Once installed, you can open B1G Player,
        enter your B1G IPTV account information, and load your available
        channels and content.
      </p>
      <p>
        The exact installation process depends on your Firestick model and Fire
        OS version. Some devices allow third-party app installation, while
        others may have restrictions.
      </p>
      <p>
        This guide explains how to download B1G IPTV on Firestick, install the
        app, complete the login process, and solve common problems if the app
        does not work as expected.
      </p>

      <h2>What You Need Before Installing B1G Player on Firestick</h2>
      <p>Before you begin the B1G IPTV Firestick setup, prepare the following:</p>
      <BulletList items={beforeYouBegin} />
      <p>
        Check that your Firestick has enough free storage before downloading the
        application. If you already have an older version of B1G Player
        installed, check whether it needs an update before starting again.
      </p>

      <h2>How to Download or Install B1G IPTV Player on Firestick</h2>
      <p>
        Follow these steps to download B1G Player on a compatible Firestick.
      </p>
      <NumberedSteps
        steps={[
          {
            title: "Connect Your Firestick to the Internet",
            text: (
              <>
                <p className="mb-3">
                  Turn on your television and open the Fire TV home screen. Go
                  to your network settings and confirm that your Firestick is
                  connected to Wi-Fi.
                </p>
                <p>
                  If the connection is unstable, restart your router and
                  reconnect the device before installing B1G IPTV. A stable
                  connection helps prevent incomplete downloads and installation
                  errors.
                </p>
              </>
            ),
          },
          {
            title: "Search for the Downloader App",
            text: (
              <>
                <p className="mb-3">From the Firestick home screen:</p>
                <ul className="space-y-2 mb-3">
                  {[
                    "Open Find or Search.",
                    "Type Downloader into the search box.",
                    "Select the Downloader app from the results.",
                    "Choose Get or Download to install it.",
                    "Open the app and follow any on-screen permission prompts.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#E01E26] font-bold leading-none mt-0.5">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Downloader is commonly used to install compatible applications
                  that are not available through the Amazon Appstore. Only use
                  it to access a source you trust.
                </p>
              </>
            ),
          },
          {
            title: "Allow Installation from the Selected Source",
            text: (
              <>
                <p className="mb-3">
                  To install B1G Player using an APK, your Firestick may need
                  permission to install apps from outside the Amazon Appstore.
                </p>
                <p className="mb-3">
                  On supported models, look under: Settings → My Fire TV →
                  Developer Options → Install Unknown Apps. Select Downloader
                  and enable the permission if your device offers this option.
                </p>
                <p className="mb-3">
                  On some older Fire TV versions, the setting may be labelled
                  Apps from Unknown Sources. If Developer Options is missing,
                  check whether your device provides a way to enable developer
                  settings. Menu names and available options vary by model and
                  software version.
                </p>
                <p>
                  Do not change unrelated security settings. If your device does
                  not support this installation method, use an alternative
                  supported by your Fire TV model.
                </p>
              </>
            ),
          },
          {
            title: "Download the B1G Player APK",
            text: (
              <>
                <p className="mb-3">
                  Open Downloader and enter the current download address or
                  installation code provided on the{" "}
                  <Link href={ROUTES.installation}>
                    B1G Player installation page
                  </Link>
                  .
                </p>
                <p className="mb-3">
                  The published installation guide currently provides Downloader
                  code <strong className="text-[#12141F]">4172090</strong>.
                  Verify the code and destination on the B1G Player installation
                  guide before using it, as download links and codes can change.
                </p>
                <p className="mb-3">After entering the verified details:</p>
                <ul className="space-y-2 mb-3">
                  {[
                    "Start the download.",
                    "Wait for the APK file to finish downloading.",
                    "Check that the destination identifies the expected B1G Player application.",
                    "Continue only if the source appears trustworthy.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#E01E26] font-bold leading-none mt-0.5">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Avoid APK files from unknown websites, random file-sharing
                  links, or unofficial mirrors. An unfamiliar APK may be
                  outdated, modified, or unsafe.
                </p>
              </>
            ),
          },
          {
            title: "Install B1G Player on Firestick",
            text: (
              <>
                <p className="mb-3">
                  When the download finishes, the Fire TV installation screen
                  may open automatically.
                </p>
                <ul className="space-y-2 mb-3">
                  {[
                    "Select Install.",
                    "Wait for the installation to finish.",
                    "Choose Open to launch B1G Player, or return to your apps.",
                    "Confirm that the application opens correctly.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#E01E26] font-bold leading-none mt-0.5">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-3">
                  If the installation fails, check the available storage, source
                  permissions, device compatibility, and whether an older
                  version is already installed.
                </p>
                <p>
                  Once the app is working, you can remove the downloaded APK
                  file to free up storage. Do not uninstall the application
                  itself.
                </p>
              </>
            ),
          },
        ]}
      />

      <div className="not-prose my-8">
        <Link href={ROUTES.installation}>
          <Button
            variant="primary"
            className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-6 py-3 text-sm font-semibold"
          >
            <span>Open B1G Player Installation Guide</span>
            <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
          </Button>
        </Link>
      </div>

      <h2>How to Set Up B1G IPTV Player on Firestick</h2>
      <p>
        Installing B1G Player is only the first part of the process. You must
        also connect the app to your active B1G IPTV account.
      </p>
      <NumberedSteps
        steps={[
          {
            title: "Open B1G Player",
            text: "Go to your Firestick apps list and open B1G Player. If you cannot find it on the home screen, select the option to view all installed applications. Allow the app to complete any initial loading or update process before entering your account information.",
          },
          {
            title: "Enter Your B1G IPTV Login Details",
            text: (
              <>
                <p className="mb-3">
                  The login screen depends on the version of the application and
                  the account method supported.
                </p>
                <p className="mb-3">
                  If your account uses Xtream Codes-style login, you may need:
                </p>
              </>
            ),
          },
          {
            title: "Let Your Content Load",
            text: "After signing in, wait for the application to load your available content. Depending on the service and player, this may include live TV categories, movies, series, and an electronic programme guide (EPG). The loading time depends on your connection, device performance, and the amount of data being retrieved.",
          },
          {
            title: "Test the Setup",
            text: (
              <>
                <p className="mb-3">
                  Before using the application regularly, test several available
                  channels and, where included in your account, a movie or
                  series.
                </p>
                <p className="mb-3">Check that:</p>
                <ul className="space-y-2 mb-3">
                  {testChecks.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#E01E26] font-bold leading-none mt-0.5">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  If something is missing, troubleshoot the specific issue
                  rather than reinstalling the application immediately.
                </p>
              </>
            ),
          },
        ]}
      />

      <div className="not-prose overflow-x-auto rounded-[12px] border border-slate-200 my-6">
        <table className="w-full min-w-[420px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 font-bold text-[#12141F]">
                Login field
              </th>
              <th className="px-4 py-3 font-bold text-[#12141F]">
                What to enter
              </th>
            </tr>
          </thead>
          <tbody>
            {loginFields.map((row) => (
              <tr
                key={row.field}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 font-semibold text-slate-800">
                  {row.field}
                </td>
                <td className="px-4 py-3 font-semibold text-slate-600">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Enter the details exactly as provided. Check for extra spaces, missing
        characters, and incorrect punctuation before submitting them.
      </p>
      <p>
        If your B1G IPTV account uses a different login method, follow the
        instructions supplied for that account. Do not assume that every player
        version supports the same options.
      </p>

      <h2>How to Fix B1G Player Not Working on Firestick</h2>
      <p>
        If B1G Player does not open or B1G IPTV channels fail to load, work
        through these checks in order.
      </p>

      <h3>B1G Player Will Not Download</h3>
      <p>
        If the APK does not download, confirm that your internet connection
        works and that you entered the correct installation address or code.
      </p>
      <p>
        Reopen the{" "}
        <Link href={ROUTES.installation}>official installation guide</Link> and
        verify the current download details. If Downloader cannot access the
        destination, the link may be unavailable or your network may be blocking
        access.
      </p>

      <h3>B1G Player Shows an Installation Error</h3>
      <p>
        An installation error can occur because of insufficient storage, an
        incompatible APK, missing permissions, or a conflict with an existing
        app version.
      </p>
      <p>Try these steps:</p>
      <BulletList items={installErrorFixes} />
      <p>
        Do not repeatedly install APK files from different websites to find one
        that works.
      </p>

      <h3>B1G IPTV Login Failed</h3>
      <p>
        If B1G Player rejects your credentials, carefully check your username,
        password, and server URL.
      </p>
      <p>
        Make sure you are using the details for the correct account and that
        your subscription or trial is active. If the information is correct but
        login still fails, ask your provider to verify the account and server
        address.
      </p>

      <h3>B1G IPTV Channels Are Not Loading</h3>
      <p>
        If you can log in but channels do not load, check your internet
        connection first. Restart the app and allow the channel list to refresh.
      </p>
      <p>
        Test more than one channel. If every channel fails across multiple
        attempts, the issue may involve the account, server, or service rather
        than the Firestick itself. Contact your provider before changing server
        details. See also our{" "}
        <Link href={getBlogPostPath("b1g-iptv-player-troubleshooting")}>
          B1G IPTV troubleshooting guide
        </Link>
        .
      </p>

      <h3>B1G Player Keeps Buffering</h3>
      <p>
        Buffering can result from weak Wi-Fi, network congestion, device
        limitations, or problems with an individual stream.
      </p>
      <p>
        Try moving your Firestick closer to the router, restarting the router,
        and pausing other heavy internet activity. You can also restart the
        Firestick and test another available stream.
      </p>
      <p>
        A faster internet package will not necessarily solve every buffering
        problem, particularly if the source or service is experiencing an issue.
      </p>

      <h3>B1G Player Is Missing from Your Apps</h3>
      <p>
        If B1G Player installed successfully but is not visible on your home
        screen, open your full applications list and look for it there.
      </p>
      <p>
        If it is missing from the full list, check whether the installation
        completed successfully. You may need to reinstall it from the verified
        source.
      </p>

      <h2>Is B1G Player Compatible with Every Firestick?</h2>
      <p>
        Not necessarily. Compatibility depends on the Firestick model, Fire OS
        version, application version, and available installation options.
      </p>
      <p>
        Before installing B1G IPTV, confirm that your particular device supports
        the required app and installation method. If your Fire TV does not allow
        the necessary APK installation, do not try to bypass device restrictions
        using untrusted tools.
      </p>
      <p>
        You can also check the{" "}
        <Link href={ROUTES.installation}>
          official B1G Player installation guide
        </Link>{" "}
        for updated setup instructions.
      </p>

      <h2>B1G Player vs B1G IPTV: What Is the Difference?</h2>
      <p>
        The terms are related, but they do not always mean the same thing.
      </p>
      <div className="not-prose space-y-3 my-6">
        {termDefinitions.map((item) => (
          <div
            key={item.term}
            className="rounded-[12px] border border-slate-200 bg-white p-4 sm:p-5"
          >
            <p className="text-sm sm:text-base font-bold text-[#12141F] mb-1.5">
              {item.term}
            </p>
            <p className="text-sm text-slate-600 font-semibold leading-relaxed">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>
      <p>
        Installing the player does not automatically provide an active
        subscription. You may need separate account details to access the
        service.
      </p>

      <h2>Get Help with Your B1G IPTV Firestick Setup</h2>
      <p>
        If you have followed the steps but cannot install the app, log in, or
        load your content, check the current setup instructions before making
        further changes.
      </p>
      <p>
        Visit the{" "}
        <Link href={ROUTES.subscription}>B1G IPTV UK page</Link> to review the
        available service information. If you already have an account, contact
        your provider for help with login details, compatibility, or server
        issues.
      </p>
      <p>
        If you are considering a subscription, confirm that the service supports
        your Firestick model and test the setup where a trial is available
        before choosing a longer plan.
      </p>

      <h2>Frequently Asked Questions</h2>
      <BlogFaqAccordion items={faqs} />

      <h2>Final Thoughts</h2>
      <p>
        Installing B1G Player on Firestick involves downloading the correct
        application, completing the installation, and entering valid B1G IPTV
        account details. The process is straightforward when your device
        supports the required installation method, and you use a verified
        download source.
      </p>
      <p>
        If you experience problems, check compatibility, login details, internet
        access, and the service status before reinstalling the app. Following
        these steps can help you identify the cause and get your B1G IPTV
        Firestick setup working correctly.
      </p>

      <div className="not-prose mt-8 rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 text-center">
        <p className="text-sm sm:text-base font-semibold text-slate-600 leading-relaxed mb-5 max-w-2xl mx-auto">
          Follow the full installation guide or compare B1G IPTV subscription
          plans for your Firestick.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={ROUTES.installation}>
            <Button
              variant="primary"
              size="lg"
              className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm font-semibold"
            >
              <span>Installation Guide</span>
              <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
            </Button>
          </Link>
          <Link href={ROUTES.subscription}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-[12px] border-slate-200 px-8 py-3.5 text-sm font-semibold"
            >
              View Subscription Plans
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
