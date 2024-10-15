import { getCustomer } from "@lib/data/customer"
import AccountLayout from "@modules/account/templates/account-layout"
import Image from "next/image"

export default async function AccountPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const customer = await getCustomer().catch(() => null)

  return (
    <div className="flex flex-col gap-2 p-2">
      <Image
        src="/account-block.png"
        alt="Login banner background"
        className="object-cover transition-opacity duration-300 w-full h-44"
        width={2000}
        height={200}
        objectFit="cover"
        quality={100}
        priority
      />
      <AccountLayout customer={customer}>{children}</AccountLayout>
    </div>
  )
}