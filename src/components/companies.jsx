import { ArrowRight } from "lucide-react"

export default function TrustedPartners() {
  return (
    <div id="features" className="w-full bg-black text-white py-16 px-8 rounded-lg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-white">Our Trusted Partners</h2>
          <p className="text-gray-400 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nunc amet, elit aliquam ullamcorper id id.
            Sed sit enim ullamcorper nunc, nec.
          </p>
          
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Row 1 */}
          <div className="flex items-center justify-center bg-gray-900 p-1 w-auto rounded-lg h-20">
            <img
              src="/logos/Logo1.jpeg"
              alt="Descript"
              className="h-8 w-auto object-contain "
            />
          </div>
          <div className="flex items-center justify-center bg-gray-900 p-4 rounded-lg h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yvs0856E4BVrFCmJdAoRDf9ackVDwd.png"
              alt="Spotify"
              className="h-8 w-auto object-contain opacity-0"
            />
          </div>
          <div className="flex items-center justify-center bg-gray-900 p-4 rounded-lg h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yvs0856E4BVrFCmJdAoRDf9ackVDwd.png"
              alt="Slack"
              className="h-8 w-auto object-contain opacity-0"
            />
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center bg-gray-900 p-4 rounded-lg h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yvs0856E4BVrFCmJdAoRDf9ackVDwd.png"
              alt="Discord"
              className="h-8 w-auto object-contain opacity-0"
            />
          </div>
          <div className="flex items-center justify-center bg-gray-900 p-4 rounded-lg h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yvs0856E4BVrFCmJdAoRDf9ackVDwd.png"
              alt="Tinder"
              className="h-8 w-auto object-contain opacity-0"
            />
          </div>
          <div className="flex items-center justify-center bg-gray-900 p-4 rounded-lg h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yvs0856E4BVrFCmJdAoRDf9ackVDwd.png"
              alt="Stripe"
              className="h-8 w-auto object-contain opacity-0"
            />
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-center bg-gray-900 p-4 rounded-lg h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yvs0856E4BVrFCmJdAoRDf9ackVDwd.png"
              alt="Docker"
              className="h-8 w-auto object-contain opacity-0"
            />
          </div>
          <div className="flex items-center justify-center bg-gray-900 p-4 rounded-lg h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yvs0856E4BVrFCmJdAoRDf9ackVDwd.png"
              alt="PayPal"
              className="h-8 w-auto object-contain opacity-0"
            />
          </div>
          <div className="flex items-center justify-center bg-gray-900 p-4 rounded-lg h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yvs0856E4BVrFCmJdAoRDf9ackVDwd.png"
              alt="Pipedrive"
              className="h-8 w-auto object-contain opacity-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

