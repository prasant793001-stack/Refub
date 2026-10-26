import { useState } from 'react';
import { motion } from 'framer-motion';

const SellPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deviceType: 'Mobile Phone',
    brand: '',
    model: '',
    condition: 'Flawless (Like New)',
    price: '',
    emirate: 'Dubai',
    address: '',
    pickupDate: '',
    description: ''
  });

  const categories = [
    { name: 'Mobile Phone', icon: '📱', base: 1400 },
    { name: 'Laptop / PC', icon: '💻', base: 2600 },
    { name: 'Drone', icon: '🛸', base: 1500 },
    { name: 'Projector', icon: '📽️', base: 950 },
    { name: 'Console / VR', icon: '🎮', base: 1100 },
    { name: 'Camera', icon: '📷', base: 1800 },
    { name: 'Fridge / Appliance', icon: '🧊', base: 1200 },
    { name: 'Tablet / Watch', icon: '⌚', base: 850 },
  ];

  const brands: Record<string, string[]> = {
    'Mobile Phone': ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Nothing'],
    'Laptop / PC': ['Apple MacBook', 'ASUS ROG', 'Dell Alienware', 'HP', 'Lenovo', 'Custom Gaming PC'],
    'Drone': ['DJI', 'Autel Robotics', 'FPV Custom', 'Insta360'],
    'Projector': ['Epson', 'BenQ', 'XGIMI', 'Samsung The Freestyle', 'Sony'],
    'Console / VR': ['PlayStation 5', 'Xbox Series X', 'Nintendo Switch', 'Meta Quest', 'Steam Deck'],
    'Camera': ['Sony Alpha', 'Canon EOS', 'DJI Osmo / Action', 'Insta360', 'Fujifilm'],
    'Fridge / Appliance': ['Samsung', 'LG', 'Bosch', 'Siemens', 'Haier'],
    'Tablet / Watch': ['Apple iPad / Watch', 'Samsung Galaxy Tab / Watch', 'Garmin', 'Huawei'],
  };

  const conditions = [
    { label: 'Flawless (Like New)', mult: 1.0, desc: 'Zero scratches, 100% functional, original box' },
    { label: 'Good (Minor Wear)', mult: 0.82, desc: 'Light micro-scratches, battery & hardware 100% tested' },
    { label: 'Open Box (Unused)', mult: 1.12, desc: 'Unsealed box, never used, all accessories intact' },
    { label: 'Fair (Visible Wear)', mult: 0.65, desc: 'Visible signs of use, fully working core functions' },
  ];

  const selectedCat = categories.find((c) => c.name === formData.deviceType) || categories[0];
  const selectedCond = conditions.find((c) => c.label === formData.condition) || conditions[0];
  const estimatedAed = formData.price
    ? Number(formData.price)
    : Math.round(selectedCat.base * selectedCond.mult);

  return (
    <div className="relative z-10 w-full min-h-screen py-12 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-8 border-b border-white/10 gap-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-semibold tracking-wider uppercase mb-3">
            UAE Doorstep Expert Inspection
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            Sell Your <span className="gradient-text">Gadget</span>
          </h1>
        </div>
        <p className="text-gray-400 max-w-md text-sm md:text-base">
          Select your item below. Our REFUB technician visits your location anywhere in the UAE, tests it on the spot, and transfers instant cash.
        </p>
      </div>

      {/* Main Full-Screen 12-Column Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Columns: Interactive Configuration Canvas */}
        <div className="lg:col-span-8 glass-card rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              {/* 1. Category Grid */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#e5b769] mb-4">
                  1. Choose Gadget Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, deviceType: cat.name, brand: '' })}
                      className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-2 ${
                        formData.deviceType === cat.name
                          ? 'bg-[#e5b769]/15 border-[#e5b769] text-white shadow-lg shadow-[#e5b769]/10'
                          : 'bg-white/[0.03] border-white/10 text-gray-400 hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <span className="text-xs font-semibold">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Brand & Model Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    2. Brand / Manufacturer
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-[#121218] border border-white/15 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e5b769] transition-colors"
                  >
                    <option value="" className="bg-[#121218] text-gray-400">Select Brand...</option>
                    {(brands[formData.deviceType] || []).map((b) => (
                      <option key={b} value={b} className="bg-[#121218] text-white">{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    3. Exact Model & Specs
                  </label>
                  <input
                    type="text"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    placeholder="e.g., iPhone 15 Pro Max 256GB / DJI Air 3"
                    className="w-full bg-[#121218] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#e5b769]"
                  />
                </div>
              </div>

              {/* 3. Condition Cards */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  4. Device Condition
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {conditions.map((cond) => (
                    <button
                      key={cond.label}
                      type="button"
                      onClick={() => setFormData({ ...formData, condition: cond.label })}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        formData.condition === cond.label
                          ? 'bg-[#00d4ff]/10 border-[#00d4ff] text-white'
                          : 'bg-[#121218]/80 border-white/10 text-gray-400 hover:border-white/25'
                      }`}
                    >
                      <div className="font-semibold text-sm text-white">{cond.label}</div>
                      <div className="text-xs text-gray-400 mt-1">{cond.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Expected Price & Notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Your Asking Price (AED)
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder={`Suggested: ${estimatedAed} AED`}
                    className="w-full bg-[#121218] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#e5b769]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Included Accessories / Notes
                  </label>
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Original box, charger, extra batteries..."
                    className="w-full bg-[#121218] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#e5b769]"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e5b769] to-[#c9964d] text-black font-bold text-base hover:opacity-95 transition-all shadow-lg shadow-[#e5b769]/20 cursor-pointer"
              >
                Continue to Expert Home Pickup →
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-white">
                Schedule REFUB Expert Visit
              </h3>
              <p className="text-gray-400 text-sm">
                Our technician will come to your location, run a 15-minute diagnostic check, and transfer your payout on the spot.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Emirate
                  </label>
                  <select
                    value={formData.emirate}
                    onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                    className="w-full bg-[#121218] border border-white/15 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e5b769]"
                  >
                    {['Dubai', 'Abu Dhabi / Al Ain', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map((em) => (
                      <option key={em} value={em} className="bg-[#121218] text-white">{em}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Preferred Inspection Date
                  </label>
                  <input
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full bg-[#121218] border border-white/15 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e5b769]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Building / Villa / Street Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter your building name, apartment/villa number, and area"
                  className="w-full bg-[#121218] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#e5b769]"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-black font-bold hover:opacity-95 transition-all"
                >
                  Confirm Expert Pickup Booking ✓
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#e5b769]/20 border border-[#e5b769] flex items-center justify-center text-3xl">
                ✓
              </div>
              <h3 className="text-3xl font-display font-bold text-white">
                Inspection Request Confirmed!
              </h3>
              <p className="text-gray-400 max-w-lg mx-auto">
                Our UAE specialist team has received your request for <strong className="text-white">{formData.brand} {formData.model || formData.deviceType}</strong> in <strong className="text-white">{formData.emirate}</strong>. We will call you shortly to confirm the exact arrival window.
              </p>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
              >
                Sell Another Item
              </button>
            </motion.div>
          )}
        </div>

        {/* Right 4 Columns: Live Valuation & Trust Summary Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card rounded-3xl p-8 border border-[#e5b769]/30 relative overflow-hidden">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#e5b769] mb-2">
              Live Valuation Preview
            </div>
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              AED {estimatedAed.toLocaleString()}
            </div>
            <p className="text-xs text-gray-400 mb-6">
              Instant bank transfer or cash upon on-site verification by our technician.
            </p>

            <div className="space-y-3 pt-6 border-t border-white/10 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Category</span>
                <span className="text-white font-medium">{formData.deviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Brand / Model</span>
                <span className="text-white font-medium">{formData.brand || 'Any'} {formData.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Condition</span>
                <span className="text-[#00d4ff] font-medium">{formData.condition}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Home Pickup</span>
                <span className="text-green-400 font-medium">FREE ({formData.emirate})</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">
              How Doorstep Selling Works
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex gap-3">
                <span className="text-[#e5b769] font-bold">01</span>
                <span>Submit your gadget specs & schedule a convenient time slot.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#e5b769] font-bold">02</span>
                <span>Our REFUB technician arrives at your home or office to inspect the item.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#e5b769] font-bold">03</span>
                <span>Get paid immediately via UAE bank transfer or cash before we leave.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPage;