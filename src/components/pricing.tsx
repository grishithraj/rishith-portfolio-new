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

export function Pricing() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-items-center gap-15 ">
      <Card className="p-0  shadow-none border-none">
        <MagicCard
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          className="p-5"
        >
          <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
            <CardTitle>Basic plan</CardTitle>
            <p className="font-semibold">₹499</p>
            <p className="text-muted-foreground text-md font-medium line-through">
              ₹799
            </p>
            <CardDescription>
              Simple, clean edit for personal or casual use.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul
              className="justify-items-center
"
            >
              <li>1 video (≤30 seconds)</li>
              <li>raw footage provided by you</li>
              <li>Basic cut & trim</li>
              <li>Brightness & color adjustment</li>
              <li>Simple text captions (optional)</li>
              <li>Free royalty-free background music</li>
              <li>1 revision</li>
              <li>Delivery: within 2 days</li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              ORDER NOW
            </Button>
          </CardFooter>
        </MagicCard>
      </Card>
      <Card className="p-0  shadow-none border-none">
        <MagicCard
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          className="p-5"
        >
          <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
            <CardTitle>Basic plan</CardTitle>
            <p className="font-semibold">₹999</p>
            <p className="text-muted-foreground text-md font-medium line-through">
              ₹1299
            </p>
            <CardDescription>
              Polished, social-media-ready content with a branded feel.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul
              className="justify-items-center
"
            >
              <li>1 video (≤60 seconds)</li>
              <li>raw footage provided by you</li>
              <li>Smooth editing & pacing</li>
              <li>Branded text & titles</li>
              <li>Stock footage or sound effects (if needed)</li>
              <li>Free royalty-free background music</li>
              <li>Optimized for Instagram Reels / YouTube Shorts / TikTok</li>
              <li>2 revisions</li>
              <li>Delivery: within 3 days</li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              ORDER NOW
            </Button>
          </CardFooter>
        </MagicCard>
      </Card>
      <Card className="p-0  shadow-none border-none">
        <MagicCard
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          className="p-5"
        >
          <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
            <CardTitle>Basic plan</CardTitle>
            <p className="font-semibold">₹1499</p>
            <p className="text-muted-foreground text-md font-medium line-through">
              ₹1999
            </p>
            <CardDescription>
              High-quality, creative & engaging edit for creators & businesses.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul
              className="justify-items-center
"
            >
              <li>1 video (≤90 seconds)</li>
              <li>Raw footage + optional creative input</li>
              <li>Advanced transitions & motion graphics</li>
              <li>Animated logo/text (if provided)</li>
              <li>Stock footage & premium sound effects (if needed)</li>
              <li>Thumbnail design included (optional)</li>
              <li>Optimized for all social platforms</li>
              <li>3 revisions</li>
              <li>Delivery: within 1–2 days</li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              ORDER NOW
            </Button>
          </CardFooter>
        </MagicCard>
      </Card>
    </div>
  );
}
