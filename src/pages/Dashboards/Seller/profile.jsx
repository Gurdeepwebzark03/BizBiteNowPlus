import { useEffect, useRef, useState } from "react";
import { getMyProfile, updateProfile } from "../../services/sellerProfile";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Store,
  Camera,
  ShieldCheck,
  Edit3,
  LogOut,
} from "lucide-react";

import { motion } from "framer-motion";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import SectionTitle from "../../components/UI/SectionTitle";
import defaultAvatar from "../../assets/default-avatar.svg";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const fileInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await getMyProfile();
      setProfile(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <SectionTitle
        title="Seller Profile"
        subtitle="Manage your business information"
      />

      {/* Banner */}

      <Card className="overflow-hidden rounded-3xl shadow-md">
        <div className="relative h-[320px]">
          <img
            src={
              bannerImage ||
              profile.bannerUrl ||
              "https://picsum.photos/1400/400"
            }
            alt=""
            className="w-full h-full rounded-3xl object-cover"
          />

          <button
            onClick={() => bannerInputRef.current.click()}
            className="absolute right-5 bottom-5 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100"
          >
            <Camera size={20} />
          </button>

          <input
            hidden
            ref={bannerInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];

              if (!file) return;

              const preview = URL.createObjectURL(file);

              setBannerImage(preview);

              setProfile({
                ...profile,
                bannerUrl: preview,
              });
            }}
          />
        </div>
      </Card>

      {/* Header */}

      <div className="px-8 -mt-0 space-y-6">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          {/* Logo */}

          <div className="relative shrink-0">
            <img
              src={profileImage || profile.logoUrl || defaultAvatar}
              className="w-70 h-70 sm:w-40 sm:h-40 rounded-full object-cover border-[6px] border-white shadow-xl"
              alt=""
            />

            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-2 right-2 bg-green-700 text-white p-2 rounded-full"
            >
              <Camera size={18} />
            </button>

            <input
              hidden
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];

                if (!file) return;

                const preview = URL.createObjectURL(file);

                setProfileImage(preview);

                setProfile({
                  ...profile,
                  logoUrl: preview,
                });
              }}
            />
          </div>

          {/* Seller Info */}

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold">
              {profile.shopName || profile.restaurant}
            </h1>

            <p className="text-black mt-2">
              @{profile.subdomain || "seller"}
            </p>

            <p className="text-black-600 mt-2">{profile.email}</p>

            <div className="mt-5">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                <ShieldCheck size={18} />
                Verified Seller
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Information Cards */}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Personal Information */}

        <Card className="rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Personal Information</h2>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 text-green-700 font-semibold"
            >
              <Edit3 size={18} />
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Info
              icon={<User size={18} />}
              label="Owner Name"
              value={profile.name}
              field="name"
              isEditing={isEditing}
              profile={profile}
              setProfile={setProfile}
            />

            <Info
              icon={<Mail size={18} />}
              label="Email"
              value={profile.email}
              field="email"
              isEditing={isEditing}
              profile={profile}
              setProfile={setProfile}
            />

            <Info
              icon={<Phone size={18} />}
              label="Phone"
              value={profile.phone}
              field="phone"
              isEditing={isEditing}
              profile={profile}
              setProfile={setProfile}
            />

            <Info
              icon={<Store size={18} />}
              label="Restaurant"
              value={profile.restaurant}
              field="restaurant"
              isEditing={isEditing}
              profile={profile}
              setProfile={setProfile}
            />

            <Info
              icon={<MapPin size={18} />}
              label="Address"
              value={profile.address}
              field="address"
              isEditing={isEditing}
              profile={profile}
              setProfile={setProfile}
            />
          </div>

          {isEditing && (
            <div className="flex justify-end mt-8">
              <Button
                variant="primary"
                onClick={async () => {
                  try {
                    const response = await updateProfile(profile.id, profile);

                    if (response.data.seller) {
                      setProfile(response.data.seller);
                    } else {
                      setProfile(response.data);
                    }

                    setIsEditing(false);

                    alert("Profile Updated");
                  } catch (err) {
                    console.log(err);

                    alert("Update Failed");
                  }
                }}
              >
                Save Changes
              </Button>
            </div>
          )}
        </Card>

        {/* Store Information */}

        <div className="space-y-6">
          <Card className="rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-8">Store Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Info
                icon={<Store size={18} />}
                label="Store Name"
                value={profile.shopName}
              />

              <Info
                icon={<Store size={18} />}
                label="Category"
                value={profile.category}
              />

              <Info
                icon={<MapPin size={18} />}
                label="Address"
                value={profile.address}
              />

              <Info
                icon={<ShieldCheck size={18} />}
                label="Store Status"
                value={profile.storeStatus}
              />

              <Info
                icon={<ShieldCheck size={18} />}
                label="Brand Color"
                value={profile.brandColor}
              />

              <Info
                icon={<Store size={18} />}
                label="Subdomain"
                value={profile.subdomain}
              />
            </div>
          </Card>

          <Card className="rounded-3xl p-6">
            <button className="w-full flex justify-center items-center gap-2 rounded-xl bg-red-600 py-3 text-white font-semibold hover:bg-red-700">
              <LogOut size={18} />
              Logout
            </button>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

const Info = ({
  icon,
  label,
  value,
  field,
  isEditing,
  profile,
  setProfile,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition">
      <div className="flex items-center gap-2 text-green-700 mb-3">
        {icon}
        <span className="font-semibold">{label}</span>
      </div>

      {isEditing && field ? (
        <input
          type="text"
          value={value || ""}
          onChange={(e) =>
            setProfile({
              ...profile,
              [field]: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-green-600"
        />
      ) : (
        <p className="text-black font-medium">{value || "-"}</p>
      )}
    </div>
  );
};

export default Profile;
