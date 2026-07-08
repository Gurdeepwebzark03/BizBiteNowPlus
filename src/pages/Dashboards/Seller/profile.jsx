import { useMemo, useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Camera,
  Crown,
  BadgeCheck,
  Sparkles,
  Save,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Input from "../../../components/UI/Input";

function InputField({ icon: Icon, label, ...props }) {
  return (
    <Input
      leftIcon={Icon ? <Icon size={16} /> : null}
      label={label}
      {...props}
    />
  );
}

function SelectField({ label, name, value, onChange }) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-semibold text-slate-900">
          {label}
        </label>
      )}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`
          w-full
          rounded-xl
          border
          bg-white
          px-4
          py-3
          text-sm
          text-slate-900
          placeholder:text-slate-400
          outline-none
          transition-all
          duration-200
          border-slate-300
          focus:border-[#1A4D2E]
          focus:ring-4
          focus:ring-[#1A4D2E]/10
        `}
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
  );
}

export default function Profile() {
  const fileInputRef = useRef(null);

  const initialData = {
    avatar: "",
    fullName: "Seller",
    email: "Seller@example.com",
    phone: "+91 9876543210",
    dob: "2003-07-12",
    gender: "Male",
    address: "Bareilly, Uttar Pradesh",
    bio: "Passionate food entrepreneur building memorable customer experiences with BizBiteNow+.",
  };

  const [profile, setProfile] = useState(initialData);
  const [savedProfile, setSavedProfile] = useState(initialData);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const completion = useMemo(() => {
    const values = Object.values(profile);

    const filled = values.filter(
      (v) => String(v).trim() !== ""
    ).length;

    return Math.round((filled / values.length) * 100);
  }, [profile]);

  const hasChanges =
    JSON.stringify(profile) !==
    JSON.stringify(savedProfile);

  const updateField = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uploadAvatar = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setProfile((prev) => ({
      ...prev,
      avatar: url,
    }));
  };

  const cancelChanges = () => {
    setProfile(savedProfile);
  };

  const saveProfile = async () => {
    setSaving(true);

    await new Promise((r) =>
      setTimeout(r, 1200)
    );

    setSavedProfile(profile);

    setSaving(false);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="space-y-8 pb-32">

      {/* HERO */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
        "
      >

        <div
          className="
            absolute
            -right-20
            -top-20
            h-72
            w-72
            rounded-full
            bg-[#16522d]/5
            blur-3xl
          "
        />

        <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

          <div className="flex flex-col items-center gap-6 md:flex-row">

            <div className="group relative">

              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl">

                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#16522d] text-4xl font-bold text-white">
                    GS
                  </div>
                )}

              </div>

              <button
                onClick={() =>
                  fileInputRef.current.click()
                }
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-black/45
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              >
                <Camera
                  size={28}
                  className="text-white"
                />
              </button>

              <input
                hidden
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={uploadAvatar}
              />

            </div>

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <h1 className="text-3xl font-bold text-slate-900">
                  {profile.fullName}
                </h1>

                <div className="flex items-center gap-1 rounded-full bg-[#16522d] px-3 py-1 text-sm font-semibold text-white">
                  <Crown size={15} />
                  Plus Seller
                </div>

              </div>

              <p className="mt-3 max-w-xl text-slate-500">
                Keep your personal information updated so customers and the BizBiteNow team always have the latest details.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                  <BadgeCheck size={16} />
                  Verified
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                  <Sparkles size={16} />
                  {completion}% Complete
                </div>

              </div>

            </div>

          </div>

          <div className="w-full max-w-xs">

            <div className="mb-2 flex justify-between text-sm">

              <span className="font-medium">
                Profile Completion
              </span>

              <span>{completion}%</span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">

              <motion.div
                animate={{
                  width: `${completion}%`,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-[#16522d]
                  via-[#2e7d46]
                  to-[#ffc700]
                "
              />

            </div>

          </div>

        </div>

      </motion.div>
            {/* Personal Information */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="
          rounded-[34px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
        "
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Personal Information
            </h2>

            <p className="mt-1 text-slate-500">
              Update your personal details.
            </p>
          </div>

          {hasChanges && (
            <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Unsaved Changes
            </div>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <InputField
            icon={User}
            label="Full Name"
            name="fullName"
            value={profile.fullName}
            onChange={updateField}
            placeholder="Full Name"
          />

          <InputField
            icon={Mail}
            label="Email Address"
            type="email"
            name="email"
            value={profile.email}
            onChange={updateField}
            placeholder="Email Address"
          />

          <InputField
            icon={Phone}
            label="Phone Number"
            name="phone"
            value={profile.phone}
            onChange={updateField}
            placeholder="+91 XXXXX XXXXX"
          />

          <InputField
            icon={Calendar}
            label="Date of Birth"
            type="date"
            name="dob"
            value={profile.dob}
            onChange={updateField}
          />

          <SelectField
            label="Gender"
            name="gender"
            value={profile.gender}
            onChange={updateField}
          />

          <InputField
            icon={MapPin}
            label="Address"
            name="address"
            value={profile.address}
            onChange={updateField}
            placeholder="Your Address"
          />

        </div>

        <div className="mt-8">

          <label className="mb-3 block text-sm font-semibold text-slate-700">
            About Me
          </label>

          <textarea
            name="bio"
            rows={6}
            value={profile.bio}
            onChange={updateField}
            maxLength={300}
            placeholder="Tell customers something about yourself..."
            className="
              w-full
              resize-none
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-5
              outline-none
              transition-all
              duration-300
              focus:border-[#16522d]
              focus:bg-white
              focus:ring-4
              focus:ring-[#16522d]/10
            "
          />

          <div className="mt-2 flex justify-end">

            <span className="text-xs text-slate-400">
              {profile.bio.length}/300
            </span>

          </div>

        </div>

      </motion.div>
            {/* Floating Action Bar */}

      <AnimatePresence>
        {hasChanges && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 100,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              bottom-8
              left-1/2
              z-[999]
              flex
              -translate-x-1/2
              items-center
              gap-4
              rounded-[24px]
              border
              border-slate-200
              bg-white/90
              px-6
              py-4
              shadow-2xl
              backdrop-blur-xl
            "
          >
            <button
              onClick={cancelChanges}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-300
                px-5
                py-3
                font-medium
                transition-all
                duration-300
                hover:bg-[#FDFDF5]
              "
            >
              <X size={18} />
              Cancel
            </button>

            <button
              disabled={saving}
              onClick={saveProfile}
              className="
                flex
                min-w-[170px]
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#16522d]
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#1d6538]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {saving ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="
                      h-4
                      w-4
                      rounded-full
                      border-2
                      border-white
                      border-t-transparent
                    "
                  />

                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Toast */}

      <AnimatePresence>
        {saved && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 25,
            }}
            className="
              fixed
              right-8
              top-24
              z-[999]
              rounded-2xl
              bg-[#16522d]
              px-6
              py-4
              font-medium
              text-white
              shadow-xl
            "
          >
            Profile updated successfully 🎉
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
