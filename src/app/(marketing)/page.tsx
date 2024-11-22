import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { NeonIcon } from "./_icons/Neon";
import { ClerkIcon } from "./_icons/Clerk";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { BrandLogo } from "@/components/global/BrandLogo";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell bigger!
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link className="md:max-xl:hidden" href="https://clerk.com">
              <ClerkIcon />
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" className=" px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>

      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <Link href="/">
          <BrandLogo />
        </Link>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                {
                  id: "ppp-discounts",
                  label: "PPP Discounts",
                  href: "/help/ppp-discounts",
                },
                {
                  id: "discount-api",
                  label: "Discount API",
                  href: "/help/discount-api",
                },
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                {
                  id: "newsletter",
                  label: "Newsletter",
                  href: "/solutions/newsletter",
                },
                {
                  id: "saas-business",
                  label: "SaaS Business",
                  href: "/solutions/saas-business",
                },
                {
                  id: "online-courses",
                  label: "Online Courses",
                  href: "/solutions/online-courses",
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Features"
              links={[
                {
                  id: "ppp-discounts-features",
                  label: "PPP Discounts",
                  href: "/features/ppp-discounts",
                },
              ]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                {
                  id: "salary-converter",
                  label: "Salary Converter",
                  href: "/tools/salary-converter",
                },
                {
                  id: "coupon-generator",
                  label: "Coupon Generator",
                  href: "/tools/coupon-generator",
                },
                {
                  id: "stripe-app",
                  label: "Stripe App",
                  href: "/tools/stripe-app",
                },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                {
                  id: "affiliate",
                  label: "Affiliate",
                  href: "/company/affiliate",
                },
                {
                  id: "twitter",
                  label: "Twitter",
                  href: "https://twitter.com/your-company",
                },
                {
                  id: "terms-of-service",
                  label: "Terms of Service",
                  href: "/company/terms-of-service",
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Integrations"
              links={[
                {
                  id: "lemon-squeezy",
                  label: "Lemon Squeezy",
                  href: "/integrations/lemon-squeezy",
                },
                {
                  id: "gumroad",
                  label: "Gumroad",
                  href: "/integrations/gumroad",
                },
                { id: "stripe", label: "Stripe", href: "/integrations/stripe" },
                {
                  id: "chargebee",
                  label: "Chargebee",
                  href: "/integrations/chargebee",
                },
                { id: "paddle", label: "Paddle", href: "/integrations/paddle" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                {
                  id: "any-website",
                  label: "Any Website",
                  href: "/tutorials/any-website",
                },
                {
                  id: "lemon-squeezy-tutorial",
                  label: "Lemon Squeezy",
                  href: "/tutorials/lemon-squeezy",
                },
                {
                  id: "gumroad-tutorial",
                  label: "Gumroad",
                  href: "/tutorials/gumroad",
                },
                {
                  id: "stripe-tutorial",
                  label: "Stripe",
                  href: "/tutorials/stripe",
                },
                {
                  id: "chargebee-tutorial",
                  label: "Chargebee",
                  href: "/tutorials/chargebee",
                },
                {
                  id: "paddle-tutorial",
                  label: "Paddle",
                  href: "/tutorials/paddle",
                },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";

  return (
    <Card
      className={cn(
        "relative shadow-none rounded-3xl overflow-hidden",
        isMostPopular ? "border-accent border-2" : "border-none"
      )}
    >
      {isMostPopular && (
        <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
          Most popular
        </div>
      )}
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg w-full rounded-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>PPP discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  readonly title: string;
  readonly links: {
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
