"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@repo/main/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@repo/main/components/ui/dialog";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative justify-center items-center overflow-hidden">
      <section className=" mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-6 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-medium tracking-tight mx-auto md:text-6xl text-pretty">
            مسیر یادگیری حرفه‌ای خودت را همین امروز شروع کن
          </h1>

          <p className="max-w-2xl text-lg mx-auto text-muted-foreground leading-8">
            با دوره‌های پروژه‌محور و کاربردی، مهارت‌های موردنیاز بازار کار را
            یاد بگیر، پیشرفتت را دنبال کن و آینده شغلی‌ات را بساز.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button className="shadow-lg">
                  شروع یادگیری
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>درباره پلتفرم آموزشی ما</DialogTitle>
                  <DialogDescription className="leading-7">
                    ما یک پلتفرم آموزش آنلاین هستیم که با ارائه دوره‌های
                    تخصصی، پروژه‌محور و به‌روز، به شما کمک می‌کنیم مهارت‌های
                    کاربردی یاد بگیرید و وارد بازار کار شوید.
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <Button asChild size="sm">
                    <Link href="/courses">
                      مشاهده دوره‌ها
                    </Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none"
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-[#5ba8ff] blur-[70px] rounded-3xl max-sm:rotate-75 sm:rotate-125 will-change-transform"></div>
        </div>
      </motion.div>
    </div>
  );
}
