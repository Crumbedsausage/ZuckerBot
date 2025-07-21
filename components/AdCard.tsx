import Image from 'next/image';
import { Ad } from '@/types/Ad';

interface AdCardProps {
  ad: Ad;
}

export default function AdCard({ ad }: AdCardProps) {
  const platformColors = {
    facebook: 'bg-blue-100 text-blue-800',
    tiktok: 'bg-pink-100 text-pink-800',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative">
        <Image
          src={ad.image}
          alt={ad.headline}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${platformColors[ad.platform]}`}>
            {ad.platform === 'facebook' ? 'Facebook' : 'TikTok'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight">
          {ad.headline}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">{ad.brand}</span>
          {ad.cta && (
            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              {ad.cta}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}