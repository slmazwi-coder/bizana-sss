import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Megaphone, ArrowRight, Music } from 'lucide-react';

const stats = [
  { label: 'Learners Enrolled', value: '1,900+', icon: Users },
  { label: 'Dedicated Educators', value: '51', icon: Award },
  { label: '2025 Matric Pass Rate', value: '93.5%', icon: TrendingUp },
];

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Notices */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-[#7B1B2B] bg-[#FDF9EC] p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white border border-[#7B1B2B] text-[#7B1B2B] shrink-0">
                <Megaphone size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-[#7B1B2B]">Notice</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white border border-[#7B1B2B] text-gray-700">
                    2027
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-2">2027 Admissions are open</h3>
                <p className="text-gray-700 mt-1">
                  Grade 8 applications for the <span className="font-bold">2027</span> academic year are open. Apply online or download the form.
                </p>
                <a href="/admissions" className="mt-4 inline-flex items-center gap-2 text-[#7B1B2B] font-bold">
                  Apply now <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-[#D4AF37] bg-[#FDF9EC] p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white border border-[#D4AF37] text-[#7B1B2B] shrink-0">
                <Music size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-[#7B1B2B]">Headline</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-[#D4AF37] text-[#7B1B2B]">
                    2026
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-2">Champ of Champs</h3>
                <p className="text-gray-700 mt-1">
                  Bizana SSS was crowned Champ of Champs at the 2026 provincial SASCE choir competition in Ku Gompo City — and is now National Bound.
                </p>
                <a href="/achievements" className="mt-4 inline-flex items-center gap-2 text-[#7B1B2B] font-bold">
                  See achievements <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="py-12 bg-gray-50 -mt-4 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border-b-4 border-[#7B1B2B]"
            >
              <div className="p-4 bg-[#FDF9EC] rounded-xl text-[#7B1B2B]">
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Music Showcase */}
      <section className="py-16 bg-[#FDF9EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/assets/hero/hero1.jpg"
                alt="Bizana SSS choir at SASCE"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37] text-[#7B1B2B] text-xs font-black uppercase tracking-widest mb-4">
                <Music size={14} /> Music Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#7B1B2B] mb-4">Choir — Our Crown Jewel</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                From its start in 1996, the Bizana SSS choir has lifted trophies at district, provincial and national SASCE competitions. In 2026 the choir was crowned Champ of Champs at the provincial SASCE competition held in Ku Gompo City, Eastern Cape, and is now National Bound. The choir is conducted by Mr S. Chithelo.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Music, discipline and teamwork shape confident, expressive learners — and this choir continues to make the school proud on South Africa’s biggest choral stages.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/achievements"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5"
                  style={{ background: '#7B1B2B', color: '#D4AF37' }}
                >
                  Achievements <ArrowRight size={18} />
                </a>
                <a
                  href="/activities"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 transition-all hover:-translate-y-0.5"
                  style={{ borderColor: '#7B1B2B', color: '#7B1B2B' }}
                >
                  Arts & Culture
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Our Motto</h2>
          <p className="text-2xl text-gray-700 leading-relaxed font-light italic">
            "Strive for Excellence"
          </p>
          <p className="text-lg text-gray-500 mt-4">
            "We are committed to excellence in everything we do as the school that will enable our learners to become responsible citizens."
          </p>
        </div>
      </section>
    </div>
  );
};
