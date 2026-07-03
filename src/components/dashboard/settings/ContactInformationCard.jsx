import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  MessageCircle,
  Save,
} from "lucide-react";

const ContactInformationCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
        <div className="rounded-xl bg-[#16522d]/10 p-3">
          <Phone className="text-[#16522d]" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Contact Information
          </h2>

          <p className="text-sm text-slate-500">
            Manage how customers reach your business.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="grid gap-5 p-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Business Email
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16522d]"
            />

            <input
              type="email"
              placeholder="restaurant@email.com"
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Primary Phone
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16522d]"
            />

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Alternate Phone
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16522d]"
            />

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Website
          </label>

          <div className="relative">
            <Globe
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16522d]"
            />

            <input
              placeholder="https://"
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            WhatsApp Business
          </label>

          <div className="relative">
            <MessageCircle
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16522d]"
            />

            <input
              placeholder="+91 9876543210"
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Google Maps URL
          </label>

          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16522d]"
            />

            <input
              placeholder="Paste Google Maps link"
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end border-t border-slate-200 px-6 py-5">
        <button className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800]">
          <Save size={18} />
          Save Contact Information
        </button>
      </div>
    </motion.div>
  );
};

export default ContactInformationCard;