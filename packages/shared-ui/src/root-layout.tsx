import "./globals.css";
import "nthul-lite/styles.css";
import { ThemeSwitcher } from "nthul-lite/client/theme-switcher";
import { ForkMe } from "@mayank1513/fork-me/server";
import type { HTMLProps } from "react";
import styles from "./root-layout.module.css";
import { Cards } from "./cards";
import { Description } from "./root/description";
import { Hero } from "./root/hero";
import { Footer } from "./root/footer";

export type SharedRootLayoutProps = HTMLProps<HTMLElement>;

export function SharedRootLayout({ children, className = "", ...props }: SharedRootLayoutProps) {
	return (
		<>
			<ThemeSwitcher themeTransition="all 0.3s ease-in-out 0s" />
			<main className={`${styles.main} ${className}`} {...props}>
				<Description />
				{children}
				<Hero />
				<Cards />
			</main>
			<Footer />
			<ForkMe
				bgColor="var(--text-color)"
				gitHubUrl="https://github.com/mayank1513/r18gs"
				textColor="var(--bg-color)"
			/>
		</>
	);
}
