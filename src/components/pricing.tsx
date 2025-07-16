"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap } from "lucide-react";

export function Pricing() {
  const { theme } = useTheme();

  const plans = [
    {
      name: "Basic",
      price: "₹499",
      originalPrice: "₹799",
      description: "Simple, clean edit for personal or casual use.",
      features: [
        "1 video (≤30 seconds)",
        "Raw footage provided by you",
        "Basic cut & trim",
        "Brightness & color adjustment",
        "Simple text captions (optional)",
        "Free royalty-free background music",
        "1 revision",
        "Delivery: within 2 days",
      ],
      icon: CheckCircle,
      popular: false,
      gradient: theme === "dark" ? "#262626" : "#D9D9D955",
    },
    {
      name: "Professional",
      price: "₹999",
      originalPrice: "₹1299",
      description: "Polished, social-media-ready content with a branded feel.",
      features: [
        "1 video (≤60 seconds)",
        "Raw footage provided by you",
        "Smooth editing & pacing",
        "Branded text & titles",
        "Stock footage or sound effects (if needed)",
        "Free royalty-free background music",
        "Optimized for Instagram Reels / YouTube Shorts / TikTok",
        "2 revisions",
        "Delivery: within 3 days",
      ],
      icon: Star,
      popular: true,
      gradient: theme === "dark" ? "#4F46E5" : "#6366F1",
    },
    {
      name: "Premium",
      price: "₹1499",
      originalPrice: "₹1999",
      description:
        "High-quality, creative & engaging edit for creators & businesses.",
      features: [
        "1 video (≤90 seconds)",
        "Raw footage + optional creative input",
        "Advanced transitions & motion graphics",
        "Animated logo/text (if provided)",
        "Stock footage & premium sound effects (if needed)",
        "Thumbnail design included (optional)",
        "Optimized for all social platforms",
        "3 revisions",
        "Delivery: within 1–2 days",
      ],
      icon: Zap,
      popular: false,
      gradient: theme === "dark" ? "#262626" : "#D9D9D955",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-muted-foreground text-lg">
          Professional video editing services tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, index) => {
          const IconComponent = plan.icon;
          return (
            <Card
              key={index}
              className={`p-0 shadow-none border-none flex flex-col h-full relative `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}

              <MagicCard
                gradientColor={plan.gradient}
                className="p-8 flex flex-col flex-1 h-full min-w-[320px]"
              >
                <CardHeader className="border-b border-border pb-8 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg ${
                        plan.popular ? "bg-blue-500/20" : "bg-muted"
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${
                          plan.popular
                            ? "text-blue-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                  </div>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-lg font-medium line-through">
                      {plan.originalPrice}
                    </span>
                  </div>

                  <CardDescription className="text-base leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-white-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed text-left">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-0 ">
                  <Button
                    className={`w-full h-12 font-medium text-base  ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </MagicCard>
            </Card>
          );
        })}
      </div>

      {/* <div className="text-center mt-12">
        <p className="text-muted-foreground text-sm">
          All plans include free revisions and 24/7 support. Need something
          custom?
          <Button variant="link" className="p-0 ml-1 h-auto text-sm">
            Contact us
          </Button>
        </p>
      </div> */}
    </div>
  );
}
