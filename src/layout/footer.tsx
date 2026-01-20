import ContactButton from "@/components/contact-form/contact-button";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
  DownloadIcon,
} from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            <div className="flex items-center gap-3 rounded-lg bg-background/10 px-4 py-3 backdrop-blur-sm">
              <MailIcon className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
              <a
                href={`mailto:${siteMetadata.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-base font-semibold transition-colors duration-150 hover:text-background/80 sm:text-lg lg:text-xl"
              >
                {siteMetadata.email}
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-background/10 px-4 py-3 backdrop-blur-sm">
              <PhoneIcon className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
              <a
                href={`tel:${siteMetadata.phone.replace(/\s/g, "")}`}
                className="cursor-pointer text-base font-semibold transition-colors duration-150 hover:text-background/80 sm:text-lg lg:text-xl"
              >
                {siteMetadata.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-background/10 px-4 py-3 backdrop-blur-sm">
              <LocationIcon className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
              <span className="text-base font-semibold sm:text-lg lg:text-xl">
                {siteMetadata.address}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ContactButton />
            <a
              href="/vaishnav-v-dev.pdf"
              download="Vaishnav-V-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-accent transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
            >
              <DownloadIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
              <span className="text-base font-semibold sm:text-lg lg:text-xl">
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">
          ©{new Date().getFullYear()} Vaishnav V
        </span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Twitter"
          >
            <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Instagram"
          >
            <InstagramIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Facebook"
          >
            <FacebookIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
