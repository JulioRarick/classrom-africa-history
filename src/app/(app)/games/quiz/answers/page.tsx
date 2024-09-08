import Link from 'next/link'

export default function Answers() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
        <h1 className="text-center text-lg font-bold tracking-tighter">
          Quiz sobre as Candaces
        </h1>
        <Link href="./answers/candaces-result">
          <p className="text-blue-600 hover:underline hover:underline-offset-2">
            Ver gabarito
          </p>
        </Link>
        <h1 className="text-center text-lg font-bold tracking-tighter">
          Quiz sobre o Reino de Cuxe
        </h1>
        <Link href="./answers/kush-result">
          <p className="text-blue-600 hover:underline hover:underline-offset-2">
            Ver gabarito
          </p>
        </Link>
      </div>
    </>
  )
}
