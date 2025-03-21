import styles from "./Footer.module.css";
import Link from "next/link";

interface FooterLink {
  id: number | string;
  text: string;
  url: string;
}

interface FooterColumn {
  id: number | string;
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo: string;
  description: string;
  columns: FooterColumn[];
  copyright: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export default function Footer({
  logo,
  description,
  columns,
  copyright,
  socialLinks,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <img src={logo} alt="Edulinx Logo" className={styles.logo} />
            </Link>
            <p className={styles.description}>{description}</p>

            {socialLinks && (
              <div className={styles.social}>
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2c-5.523 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2c-2.713 0-3.058.012-4.123.06-1.064.049-1.79.218-2.427.465a4.896 4.896 0 00-1.77 1.153 4.896 4.896 0 00-1.153 1.77c-.247.636-.416 1.363-.465 2.427C2.012 8.942 2 9.287 2 12s.012 3.058.06 4.123c.049 1.064.218 1.79.465 2.427.254.66.599 1.256 1.153 1.77a4.896 4.896 0 001.77 1.153c.636.247 1.363.416 2.427.465 1.065.048 1.41.06 4.123.06s3.058-.012 4.123-.06c1.064-.049 1.79-.218 2.427-.465a4.896 4.896 0 001.77-1.153 4.896 4.896 0 001.153-1.77c.247-.636.416-1.363.465-2.427.048-1.065.06-1.41.06-4.123s-.012-3.058-.06-4.123c-.049-1.064-.218-1.79-.465-2.427a4.896 4.896 0 00-1.153-1.77 4.896 4.896 0 00-1.77-1.153c-.636-.247-1.363-.416-2.427-.465C15.058 2.012 14.713 2 12 2zm0 1.8c2.67 0 2.985.01 4.04.058.975.045 1.504.208 1.857.344.467.181.8.399 1.15.748.35.35.566.683.748 1.15.137.352.3.882.344 1.857.048 1.055.058 1.37.058 4.04s-.01 2.985-.058 4.04c-.045.975-.208 1.504-.344 1.857-.181.467-.399.8-.748 1.15-.35.35-.683.566-1.15.748-.352.137-.882.3-1.857.344-1.055.048-1.37.058-4.04.058s-2.985-.01-4.04-.058c-.975-.045-1.504-.208-1.857-.344a3.097 3.097 0 01-1.15-.748 3.097 3.097 0 01-.748-1.15c-.137-.352-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.04s.01-2.985.058-4.04c.045-.975.208-1.504.344-1.857.181-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.352-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.04-.058z" />
                      <path d="M12 15.6a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zm0-9.15a5.55 5.55 0 100 11.1 5.55 5.55 0 000-11.1zM19.2 6.15a1.35 1.35 0 11-2.7 0 1.35 1.35 0 012.7 0z" />
                    </svg>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                )}
                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <span className="sr-only">YouTube</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          <div className={styles.footerLinks}>
            {columns.map((column) => (
              <div key={column.id} className={styles.footerColumn}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <ul className={styles.linkList}>
                  {column.links.map((link) => (
                    <li key={link.id} className={styles.linkItem}>
                      <Link href={link.url} className={styles.link}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
