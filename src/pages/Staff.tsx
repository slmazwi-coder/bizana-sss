import React from 'react';
import { User } from 'lucide-react';

interface StaffMember {
  name: string;
  position: string;
  subject?: string;
  categories: string[];
  image?: string;
  imgPosition?: string;
  classTeacherFor?: string;
  supportOrder?: number;
  departmentHead?: string;
}

const streamIndex: Record<string, number> = { A: 0, B: 1, C: 2 };

function classOrder(cls?: string): number {
  if (!cls) return -1;
  const grade = parseInt(cls, 10);
  const stream = cls.replace(/^\d+/, '');
  const streamRank = streamIndex[stream] ?? 9;
  return grade * 10 + streamRank;
}

const staffData: StaffMember[] = [
  // ── School Management ─────────────────────────────────────────────────────
  {
    name: 'Mr X. Bhani',
    position: 'Principal',
    categories: ['School Management'],
    image: './assets/staff/principal-bhani.jpg',
    imgPosition: 'center 50%',
  },
  {
    name: 'Deputy Principal — TBC',
    position: 'Deputy Principal',
    categories: ['School Management'],
  },
  {
    name: 'HOD — TBC',
    position: 'Departmental Head',
    categories: ['School Management'],
  },

  // ── Class Teachers (also listed under Subject Teachers) ───────────────────
  { name: 'Class Teacher 8A — TBC', position: 'Class Teacher — Grade 8A', categories: ['Class Teachers', 'Subject Teachers'], classTeacherFor: '8A' },
  { name: 'Class Teacher 9A — TBC', position: 'Class Teacher — Grade 9A', categories: ['Class Teachers', 'Subject Teachers'], classTeacherFor: '9A' },
  { name: 'Class Teacher 10A — TBC', position: 'Class Teacher — Grade 10A', categories: ['Class Teachers', 'Subject Teachers'], classTeacherFor: '10A' },
  { name: 'Class Teacher 11A — TBC', position: 'Class Teacher — Grade 11A', categories: ['Class Teachers', 'Subject Teachers'], classTeacherFor: '11A' },
  { name: 'Class Teacher 12A — TBC', position: 'Class Teacher — Grade 12A', categories: ['Class Teachers', 'Subject Teachers'], classTeacherFor: '12A' },

  // ── Subject Teachers ──────────────────────────────────────────────────────
  { name: 'isiXhosa HL Teacher — TBC', position: 'Subject Teacher', subject: 'isiXhosa Home Language', categories: ['Subject Teachers'] },
  { name: 'English FAL Teacher — TBC', position: 'Subject Teacher', subject: 'English First Additional Language', categories: ['Subject Teachers'] },
  { name: 'Mathematics Teacher — TBC', position: 'Subject Teacher', subject: 'Mathematics', categories: ['Subject Teachers'] },
  { name: 'Mathematical Literacy Teacher — TBC', position: 'Subject Teacher', subject: 'Mathematical Literacy', categories: ['Subject Teachers'] },
  { name: 'Life Orientation Teacher — TBC', position: 'Subject Teacher', subject: 'Life Orientation', categories: ['Subject Teachers'] },
  { name: 'Physical Sciences Teacher — TBC', position: 'Subject Teacher', subject: 'Physical Sciences', categories: ['Subject Teachers'] },
  { name: 'Life Sciences Teacher — TBC', position: 'Subject Teacher', subject: 'Life Sciences', categories: ['Subject Teachers'] },
  { name: 'Agricultural Sciences Teacher — TBC', position: 'Subject Teacher', subject: 'Agricultural Sciences', categories: ['Subject Teachers'] },
  { name: 'Geography Teacher — TBC', position: 'Subject Teacher', subject: 'Geography', categories: ['Subject Teachers'] },
  { name: 'History Teacher — TBC', position: 'Subject Teacher', subject: 'History', categories: ['Subject Teachers'] },
  { name: 'Tourism Teacher — TBC', position: 'Subject Teacher', subject: 'Tourism', categories: ['Subject Teachers'] },

  // ── Support Staff ─────────────────────────────────────────────────────────
  {
    name: 'Admin Clerk — TBC',
    position: 'Admin Clerk',
    categories: ['Support Staff'],
    supportOrder: 1,
  },
  {
    name: 'Cleaner — TBC',
    position: 'Cleaner',
    categories: ['Support Staff'],
    supportOrder: 2,
  },
];

const categories = ['School Management', 'Class Teachers', 'Subject Teachers', 'Support Staff'];

const StaffCard = ({ member, activeCategory }: { member: StaffMember; activeCategory: string }) => {
  const positionLabel = React.useMemo(() => {
    if (activeCategory === 'School Management') {
      return member.departmentHead
        ? `Departmental Head — ${member.departmentHead}`
        : member.position;
    }
    if (activeCategory === 'Class Teachers') {
      return member.classTeacherFor
        ? `Class Teacher — Grade ${member.classTeacherFor}`
        : member.position;
    }
    if (activeCategory === 'Support Staff') {
      return member.position;
    }
    return null;
  }, [member, activeCategory]);

  return (
    <div
      className="h-full rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center p-6 text-center hover:-translate-y-1"
      style={ { background: '#FFFBEF', border: '1px solid #7B1B2B' } }
    >
      {/* Avatar */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-4 overflow-hidden"
        style={ { background: '#FDF9EC', border: '3px solid #7B1B2B' } }
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={ { objectPosition: member.imgPosition || 'center center' } }
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <User size={40} style={ { color: '#7B1B2B', opacity: 0.5 } } />
        )}
      </div>

      <h3 className="text-sm font-bold leading-tight" style={ { color: '#7B1B2B' } }>
        {member.name}
      </h3>
      {positionLabel && (
        <p className="text-xs font-semibold mt-1" style={ { color: '#D4AF37' } }>
          {positionLabel}
        </p>
      )}
      {activeCategory === 'Subject Teachers' && member.subject && (
        <div
          className="mt-3 w-full text-xs font-medium px-2 py-2 rounded-md text-center leading-tight"
          style={ { background: '#FDF9EC', color: '#7B1B2B', border: '2px solid #7B1B2B' } }
        >
          {member.subject}
        </div>
      )}
    </div>
  );
};

export const Staff = () => {
  const [activeCategory, setActiveCategory] = React.useState('School Management');
  const filtered = React.useMemo(() => {
    const list = staffData.filter(m => m.categories.includes(activeCategory));
    if (activeCategory === 'Class Teachers') {
      return [...list].sort((a, b) => classOrder(b.classTeacherFor) - classOrder(a.classTeacherFor));
    }
    if (activeCategory === 'Support Staff') {
      return [...list].sort((a, b) => (a.supportOrder ?? 99) - (b.supportOrder ?? 99));
    }
    if (activeCategory === 'School Management') {
      return [...list].sort((a, b) => {
        const rank = (m: StaffMember) => {
          if (m.position === 'Principal') return 0;
          if (m.position?.includes('Deputy Principal')) return 1;
          if (m.departmentHead) return 2;
          return 3;
        };
        return rank(a) - rank(b);
      });
    }
    if (activeCategory === 'Subject Teachers') {
      return [...list].sort((a, b) => {
        const rank = (m: StaffMember) => {
          if (m.categories.includes('School Management')) return 0;
          if (m.categories.includes('Class Teachers')) return 1;
          return 2;
        };
        return rank(a) - rank(b) || a.name.localeCompare(b.name);
      });
    }
    return list;
  }, [activeCategory]);

  return (
    <div className="min-h-screen py-12 px-4" style={ { background: '#FDF9EC' } }>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3" style={ { color: '#7B1B2B' } }>
            Our Staff
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-4" style={ { background: '#D4AF37' } } />
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Meet the dedicated management, educators and support staff of Bizana Senior Secondary School.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={
                activeCategory === cat
                  ? { background: '#D4AF37', color: '#7B1B2B', border: '2px solid #D4AF37', fontWeight: 700 }
                  : { background: '#FFFBEF', color: '#7B1B2B', border: '2px solid #7B1B2B' }
              }
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md"
            >
              {cat}
              <span className="ml-2 text-xs font-bold opacity-60">
                ({staffData.filter(m => m.categories.includes(cat)).length})
              </span>
            </button>
          ))}
        </div>

        {/* Staff Cards Grid */}
        {activeCategory === 'School Management' ? (
          <div className="flex flex-col items-center gap-5">
            <div className="w-full max-w-[260px] h-full">
              <StaffCard member={filtered[0]} activeCategory={activeCategory} />
            </div>
            <div className="grid grid-cols-2 gap-5 w-full max-w-2xl justify-items-center auto-rows-fr">
              {filtered.slice(1, 3).map((member, index) => (
                <div key={index} className="w-full max-w-[260px] h-full">
                  <StaffCard member={member} activeCategory={activeCategory} />
                </div>
              ))}
            </div>
            {filtered.length > 3 && (
              <div className="grid grid-cols-2 gap-5 w-full max-w-2xl justify-items-center auto-rows-fr">
                {filtered.slice(3).map((member, index) => (
                  <div key={index} className="w-full max-w-[260px] h-full">
                    <StaffCard member={member} activeCategory={activeCategory} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 auto-rows-fr">
            {filtered.map((member, index) => (
              <div key={index} className="h-full">
                <StaffCard member={member} activeCategory={activeCategory} />
              </div>
            ))}
          </div>
        )}

        {/* Note */}
        <p className="text-center text-gray-400 text-xs mt-10 italic">
          Staff names and photos are updated as new information is provided.
        </p>
      </div>
    </div>
  );
};
