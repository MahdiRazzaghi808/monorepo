"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  router.push('signin')

  return (
    <div>
      چیزی برای نمایش نیست...
    </div>
  );
}
